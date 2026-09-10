import { TLV } from "@li0ard/tinytlv";
/** ISO/IEC 19794-6 Iris image decoder */
export declare class ISO19794IrisDecoder {
    /** Decode biometric data block (BDB) */
    static load(firstBlock: TLV): {
        lengthOfRecord: number;
        captureDeviceId: number;
        imagePropertiesBits: number;
        irisDiameter: number;
        imageType: number;
        imageWidth: number;
        imageHeight: number;
        depth: number;
        imageTransformation: number;
        deviceUniqueId: bigint;
        biometricSubtype: number;
        quality: number;
        rotationAngle: number;
        rotationAngleUncertainty: number;
        imageData: any;
    };
}
