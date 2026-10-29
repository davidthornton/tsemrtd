import type { TArg } from "@noble/hashes/utils.js";
/**
 * Class for working with DG1 (MRZ)
 */
export declare class DG1 {
    /**
     * Get MRZ
     * @param data Data of EF.DG1 file
     */
    static load(data: string | TArg<Uint8Array>): string;
}
