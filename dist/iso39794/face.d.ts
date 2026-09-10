import { TLV } from "@li0ard/tinytlv";
/**
 * ISO/IEC 39794-5 Face image decoder
 * @experimental
 */
export declare class ISO39794FaceDecoder {
    /** Decode biometric data block (BDB) */
    static load(firstBlock: TLV): {
        imageData: any;
        imageType: any;
    };
}
