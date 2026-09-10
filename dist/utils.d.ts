import type { TAGS } from "./consts/enums.js";
/**
 * Convert byte array to hex string.
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */
export declare const bytesToHex: (bytes: Uint8Array) => string;
/**
 * Convert hex string to byte array.
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */
export declare const hexToBytes: (hex: string) => Uint8Array;
/**
 * Convert byte array to ASCII string.
 */
export declare const bytesToAscii: (bytes: Uint8Array) => string;
export declare const hexToNumber: (hex: string) => bigint;
export declare const bytesToNumberBE: (bytes: Uint8Array) => bigint;
export declare const validateDataGroupTag: (tlv: TLV, tag: TAGS) => void;
