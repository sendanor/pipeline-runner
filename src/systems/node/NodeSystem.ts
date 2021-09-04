// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import System from "../../nor/pipeline/systems/types/System";
import SystemProcess from "../../nor/pipeline/systems/types/SystemProcess";
import Json from "../../nor/ts/Json";
import NodeSystemProcess from "./NodeSystemProcess";

export class NodeSystem implements System {

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

}

export function isNodeSystem (value: any): value is NodeSystem {
    return value instanceof NodeSystem;
}

export default NodeSystem;
