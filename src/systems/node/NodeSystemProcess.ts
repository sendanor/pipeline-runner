// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import SystemProcess, {
    SystemProcessDestructor,
    SystemProcessEvent,
    SystemProcessEventCallback
} from "../../nor/pipeline/systems/types/SystemProcess";
import Json from "../../nor/ts/Json";
import { ChildProcessWithoutNullStreams, spawn, SpawnOptions } from "child_process";
import PipelineContext from "../../nor/pipeline/PipelineContext";
import LogService from "../../nor/ts/LogService";
import Observer, { ObserverCallback, ObserverDestructor } from "../../nor/ts/Observer";
import { SystemArgumentList, SystemEnvironment } from "../../nor/pipeline/systems/types/System";

const LOG = LogService.createLogger('NodeSystemProcess');

export class NodeSystemProcess implements SystemProcess {

    private readonly _command        : string;
    private readonly _args           : SystemArgumentList;
    private readonly _env            : SystemEnvironment;
    private readonly _stdoutCallback : ((data: Buffer) => void);
    private readonly _stderrCallback : ((data: Buffer) => void);
    private readonly _closeCallback  : ((close: number) => void);
    private readonly _observer       : Observer<SystemProcessEvent>;

    private _process              : ChildProcessWithoutNullStreams | undefined;
    private _printToParentProcess : boolean;
    private _stdoutChunks         : Buffer[];
    private _stderrChunks         : Buffer[];
    private _exitStatus           : number | undefined;

    /**
     *
     * @param command
     * @param args
     * @param env
     * @param printToParentProcess
     */
    public constructor (
        command              : string,
        args                 : SystemArgumentList | undefined,
        env                  : SystemEnvironment  | undefined,
        printToParentProcess : boolean = true
    ) {

        this._observer             = new Observer<SystemProcessEvent>("NodeSystemProcess");
        this._process              = undefined;
        this._command              = command;
        this._args                 = args;
        this._env                  = env;
        this._printToParentProcess = printToParentProcess;
        this._closeCallback        = this._onClose.bind(this);
        this._stdoutCallback       = this._onStdOut.bind(this);
        this._stderrCallback       = this._onStdErr.bind(this);
        this._stdoutChunks         = [];
        this._stderrChunks         = [];
        this._exitStatus           = undefined;

    }

    public start () : SystemProcess {

        const options : SpawnOptions = {};

        if (this._env) {
            options.env = this._env;
        }

        this._process = spawn(this._command, this._args, options);
        this._process.stdout.on('data', this._stdoutCallback);
        this._process.stderr.on('data', this._stderrCallback);
        this._process.on('close', this._closeCallback);

        return this;

    }

    public stop () : SystemProcess {
        this._process.kill('SIGTERM');
        return this;
    }

    public pause () : SystemProcess {
        this._process.kill('SIGSTOP');
        return this;
    }

    public resume () : SystemProcess {
        this._process.kill('SIGCONT');
        return this;
    }

    public toString (): string {
        return 'NodeSystemProcess';
    }

    public toJSON (): Json {
        return {
            type: 'NodeSystemProcess'
        };
    }

    public getExitStatus (): number | undefined {
        return this._exitStatus;
    }

    public getErrorString () : string {
        return Buffer.concat(this._stderrChunks).toString('utf8');
    }

    public getOutputString () : string {
        return Buffer.concat(this._stdoutChunks).toString('utf8');
    }

    public destroy (): void {
        this._observer.destroy();
    }

    public on (
        name     : SystemProcessEvent,
        callback : SystemProcessEventCallback
    ): SystemProcessDestructor {
        return this._observer.listenEvent(name, callback);
    }


    public static Event = SystemProcessEvent;


    private _onStdOut (chunk: Buffer) {
        this._stdoutChunks.push(chunk);
        process.stdout.write(chunk);
    }

    private _onStdErr (chunk: Buffer) {
        this._stderrChunks.push(chunk);
        process.stderr.write(chunk);
    }

    private _onClose (code: number) {

        this._exitStatus = code;

        if (this._observer.hasCallbacks(SystemProcessEvent.ON_EXIT)) {
            this._observer.triggerEvent(SystemProcessEvent.ON_EXIT, code);
        } else {
            LOG.debug(`Child process stopped with exit status ${code} -- no listeners detected`);
        }

    }

}

export function isNodeSystemProcess (value: any): value is NodeSystemProcess {
    return value instanceof NodeSystemProcess;
}

export default NodeSystemProcess;
