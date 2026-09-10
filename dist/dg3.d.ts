import type { DecodedFingerprint } from "./consts/interfaces.js";
/**
 * Class for working with DG3 (Fingerprint)
*/
export declare class DG3 {
    /**
     * Get image of fingerprint and meta info
     * @param data Data of EF.DG3 file
     */
    static load(data: string | Uint8Array): DecodedFingerprint[];
}
