import { TLV } from "@li0ard/tinytlv";
/**
 * ISO/IEC 39794-4 Fingerprint image decoder
 * @experimental
 */
export declare class ISO39794FingerprintDecoder {
    /** Decode biometric data block (BDB) */
    static load(firstBlock: TLV): {
        imageData: any;
        imageType: any;
        fingerType: any;
        fingerImageType: any;
    };
}
