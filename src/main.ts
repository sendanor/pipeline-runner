// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import { default as main } from "./MainFunction";

main(process.argv).then((status : number) => {
    process.exit(status);
}).catch((err : any) => {
    console.error(`Error: `, err);
    process.exit(1);
});
