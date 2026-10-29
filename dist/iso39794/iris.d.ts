import { TLV } from "@li0ard/tinytlv";
import { type ISO39794IrisEyeSubtype, type ISO39794IrisImageFormat } from "../consts/enums.js";
/**
 * ISO/IEC 39794-6 Iris image decoder
 * @experimental
 */
export declare class ISO39794IrisDecoder {
    /** Decode biometric data block (BDB) */
    static load(firstBlock: TLV): {
        biometricSubtype: ISO39794IrisEyeSubtype;
        imageData: ArrayBuffer;
        imageType: ISO39794IrisImageFormat.ppm | ISO39794IrisImageFormat.png | ISO39794IrisImageFormat.jpeg2000Lossless | ISO39794IrisImageFormat.jpeg2000Lossy;
        depth: number;
    };
}
