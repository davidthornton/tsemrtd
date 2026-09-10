import { TLV } from "@li0ard/tinytlv";
/**
 * ISO/IEC 39794-6 Iris image decoder
 * @experimental
 */
export declare class ISO39794IrisDecoder {
    /** Decode biometric data block (BDB) */
    static load(firstBlock: TLV): {
        biometricSubtype: any;
        imageData: any;
        imageType: any;
        depth: any;
    };
}
