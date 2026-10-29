import type { DecodedSecurtyObjectOfDocument } from "./consts/interfaces.js";
import type { TArg } from "@noble/hashes/utils.js";
/**
 * Class for working with SOD (Security object)
 */
export declare class SOD {
    /**
     * Get version, algorithm, data groups hashes
     * @param data Data of EF.SOD file
     */
    static load(data: string | TArg<Uint8Array>): DecodedSecurtyObjectOfDocument;
}
