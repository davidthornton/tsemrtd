import type { DecodedAdditionalPersonalData } from "./consts/interfaces.js";
import type { TArg } from "@noble/hashes/utils.js";
/**
 * Class for working with DG11 (Additional personal data)
 */
export declare class DG11 {
    /**
     * Get additional personal data
     * @param data Data of EF.DG11 file
     */
    static load(data: string | TArg<Uint8Array>): DecodedAdditionalPersonalData;
}
