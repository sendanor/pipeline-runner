// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import System from "../../nor/pipeline/systems/types/System";
import SystemProcess from "../../nor/pipeline/systems/types/SystemProcess";
import Json from "../../nor/ts/Json";
import NodeSystemProcess from "./NodeSystemProcess";
import FS from "fs";
import PATH from "path";
import CRYPTO from "crypto";
import { forEach } from "../../nor/ts/modules/lodash";
import LogService from "../../nor/ts/LogService";

const LOG = LogService.createLogger('NodeSystem');

export class NodeSystem implements System {

    private _tempFileNames : string[] = [];

    public constructor () {
    }

    public toString (): string {
        return 'NodeSystem';
    }

    public toJSON (): Json {
        return {
            type: 'NodeSystem'
        };
    }

    public destroy () {

        forEach(
            this._tempFileNames,
            (path : string) => {
                LOG.debug(`destroy: Deleting temporary file: ${path}`);
                this.deleteFile(path);
            }
        )

    }

    public pathExists (path: string) : boolean {
        const stats = FS.statSync(path);
        return (
            stats.isFile()
            || stats.isDirectory()
            || stats.isSocket()
            || stats.isBlockDevice()
            || stats.isCharacterDevice()
            || stats.isFIFO()
            || stats.isSymbolicLink()
        );
    }

    public isFile (path: string) : boolean {
        const stats = FS.statSync(path);
        return stats.isFile();
    }

    public isDirectory (path: string) : boolean {
        const stats = FS.statSync(path);
        return stats.isDirectory();
    }

    public deleteFile (path: string) {

        if (this.pathExists(path)) {
            if (this.isDirectory(path)) {
                this.deleteDirectory(path);
            } else {
                FS.unlinkSync(path);
            }
        } else {
            LOG.warn(`deleteFile: Path did not exist: ${path}`)
        }

    }

    public deleteDirectory (path: string) {
        if (this.pathExists(path)) {
            FS.rmdirSync(path, {
                maxRetries: 30,
                retryDelay: 100
            });
        } else {
            LOG.warn(`deleteDirectory: Path did not exist: ${path}`)
        }
    }

    /**
     *
     * @param command
     * @param args
     * @param env
     */
    public createProcess (
        command : string,
        args    : readonly string[] | undefined,
        env     : {[p: string]: string} | undefined
    ): SystemProcess {
        return new NodeSystemProcess(command, args, env);
    }

    /**
     *
     * @fixme Convert this as asynchronous. Maybe create generic SystemAction interface to return,
     *     which has optional cancelation support.
     * @param target
     */
    public createDirectory (
        target : string
    ) : System {
        FS.mkdirSync(target);
        return this;
    }

    public getWorkingDirectory () : string {
        return process.cwd();
    }

    /**
     * @FIXME: Convert as asynchronous
     */
    public createTemporaryFile () : string {

        let fileName : string = '';
        do {

            const id = CRYPTO.randomBytes(20).toString('hex');

            fileName = PATH.join(this.getWorkingDirectory(), `${id}.tmp`);

        } while(FS.existsSync(fileName));

        if (!fileName) throw new TypeError('Could not create temp file');

        this._tempFileNames.push( fileName );

        return fileName;

    }

}

export function isNodeSystem (value: any): value is NodeSystem {
    return value instanceof NodeSystem;
}

export default NodeSystem;
