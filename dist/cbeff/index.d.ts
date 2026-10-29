import type { TLV } from "@li0ard/tinytlv";
import type { BDBDecoder } from "../consts/interfaces.js";
/**
 * CBEFF decoder
 * @param tlv Biometric information group template
 * @param iso19794Decoder ISO/IEC 19794 decoder for biometric type
 * @param iso39794Decoder ISO/IEC 39794 decoder for biometric type
 */
export declare const decodeCbeff: <T = any>(tlv: TLV, iso19794Decoder?: BDBDecoder, iso39794Decoder?: BDBDecoder) => T[];
