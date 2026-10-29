import { TLV } from "@li0ard/tinytlv";
/** ISO/IEC 19794-4 Fingerprint image decoder */
export declare class ISO19794FingerprintDecoder {
    /** Decode biometric data block (BDB) */
    static load(firstBlock: TLV): {
        lengthOfRecord: number;
        captureDeviceId: number;
        acquisitionLevel: number;
        count: number;
        scaleUnits: number;
        scanResolutionHorizontal: number;
        scanResolutionVertical: number;
        imageResolutionHorizontal: number;
        imageResolutionVertical: number;
        depth: number;
        fingerprintRecordLength: number;
        fingerImageType: number;
        lengthOfRepresentations: number;
        nrOfRepresention: number;
        quality: number;
        fingerType: number;
        imageType: number;
        imageWidth: number;
        imageHeight: number;
        imageData: Uint8Array<ArrayBufferLike>;
    };
}
