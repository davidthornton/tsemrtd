import type { DecodedCom } from "./consts/interfaces.js";
/**
 * Class for working with COM (Manifest)
*/
export declare class COM {
    /**
     * Get LDS and Unicode versions and data groups tags
     * @param data Data of EF.COM file
     */
    static load(data: string | Uint8Array): DecodedCom;
}
