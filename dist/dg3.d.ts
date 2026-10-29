import type { DecodedFingerprint } from "./consts/interfaces.js";
import type { TArg } from "@noble/hashes/utils.js";
/**
 * Class for working with DG3 (Fingerprint)
 */
export declare class DG3 {
    /**
     * Get image of fingerprint and meta info
     * @param data Data of EF.DG3 file
     */
    static load(data: string | TArg<Uint8Array>): DecodedFingerprint[];
}
