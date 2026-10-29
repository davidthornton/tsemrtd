import type { TArg, TRet } from "@noble/hashes/utils.js";
/**
 * Class for working with DG7 (Signature)
 */
export declare class DG7 {
    /**
     * Get image of signature
     * @param data Data of EF.DG7 file
     */
    static load(data: string | TArg<Uint8Array>): TRet<Uint8Array>[];
}
