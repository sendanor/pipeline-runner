// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import { PIPELINE_LOG_LEVEL } from "./pipeline-runtime-constants";
import LogService from "./nor/ts/LogService";
LogService.setLogLevel(PIPELINE_LOG_LEVEL);

import { default as main } from "./mainFunction";

main(process.argv).then((status : number) => {
    process.exit(status);
}).catch((err : any) => {
    console.error(`Error: `, err);
    process.exit(1);
});
