import type { DecodedSecurtyObjectOfDocument } from "./consts/interfaces.js";
/**
 * Class for working with SOD (Security object)
*/
export declare class SOD {
    /**
     * Get version, algorithm, data groups hashes
     * @param data Data of EF.SOD file
     */
    static load(data: string | Uint8Array): DecodedSecurtyObjectOfDocument;
}
