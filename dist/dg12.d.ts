import type { DecodedAdditionalDocumentData } from "./consts/interfaces.js";
/**
 * Class for working with DG12 (Additional document data)
*/
export declare class DG12 {
    /**
     * Get additional document data
     * @param data Data of EF.DG12 file
     */
    static load(data: string | Uint8Array): DecodedAdditionalDocumentData;
}
