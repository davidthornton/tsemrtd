import type { DecodedImage } from "./consts/interfaces.js";
/**
 * Class for working with DG2 (Face)
*/
export declare class DG2 {
    /**
     * Get image of face and meta info
     * @param data Data of EF.DG2 file
     */
    static load(data: string | Uint8Array): DecodedImage[];
}
