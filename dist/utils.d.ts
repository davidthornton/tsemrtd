import type { TLV } from "@li0ard/tinytlv";
import type { TAGS } from "./consts/enums.js";
export declare const bytesToAscii: (bytes: Uint8Array) => string;
export declare const hexToNumber: (hex: string) => bigint;
export declare const bytesToNumberBE: (bytes: Uint8Array) => bigint;
export declare const validateDataGroupTag: (tlv: TLV, tag: TAGS) => void;
