import type { TArg, TRet } from "@noble/hashes/utils.js";
/**
 * Class for working with DG5 (Displayed image)
 */
export declare class DG5 {
    /**
     * Get displayed image
     * @param data Data of EF.DG5 file
     */
    static load(data: string | TArg<Uint8Array>): TRet<Uint8Array>[];
}
