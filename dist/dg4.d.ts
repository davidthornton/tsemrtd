import type { DecodedIris } from "./consts/interfaces.js";
/**
 * Class for working with DG4 (Iris)
*/
export declare class DG4 {
    /**
     * Get image of eye iris
     * @param data Data of EF.DG4 file
     */
    static load(data: string | Uint8Array): DecodedIris[];
}
