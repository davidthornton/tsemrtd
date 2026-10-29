import type { DecodedCom } from "./consts/interfaces.js";
import type { TArg } from "@noble/hashes/utils.js";
/**
 * Class for working with COM (Manifest)
 */
export declare class COM {
    /**
     * Get LDS and Unicode versions and data groups tags
     * @param data Data of EF.COM file
     */
    static load(data: string | TArg<Uint8Array>): DecodedCom;
}
