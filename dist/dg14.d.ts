import { SecurityInfos } from "./asn1/eac.js";
import type { TArg } from "@noble/hashes/utils.js";
/**
 * Class for working with DG14 (EAC/PACE authentication info)
*/
export declare class DG14 {
    /**
     * Get EAC/PACE security informations
     * @param data Data of EF.DG14 file
     */
    static load(data: string | TArg<Uint8Array>): SecurityInfos;
}
