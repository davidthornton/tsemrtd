import { TLV } from "@li0ard/tinytlv";
/** ISO/IEC 19794-5 Face image decoder */
export declare class ISO19794FaceDecoder {
    /** Decode biometric data block (BDB) */
    static load(firstBlock: TLV): {
        lengthOfRecord: number;
        numberOfFacialImages: number;
        facialRecordDataLength: number;
        nrFeaturePoints: number;
        gender: number;
        eyeColor: number;
        hairColor: number;
        featureMask: number;
        expression: number;
        poseAngle: number;
        poseAngleUncertainty: number;
        faceImageType: number;
        imageType: number;
        imageWidth: number;
        imageHeight: number;
        imageColorSpace: number;
        sourceType: number;
        deviceType: number;
        quality: number;
        imageData: any;
    };
}
