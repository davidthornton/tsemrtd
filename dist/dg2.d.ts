import type { DecodedImage } from "./consts/interfaces.js";
import type { TArg } from "@noble/hashes/utils.js";
/**
 * Class for working with DG2 (Face)
 */
export declare class DG2 {
    /**
     * Get image of face and meta info
     * @param data Data of EF.DG2 file
     */
    static load(data: string | TArg<Uint8Array>): DecodedImage[];
}
