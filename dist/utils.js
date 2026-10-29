import { bytesToHex } from "@noble/hashes/utils.js";
export const bytesToAscii = (bytes) => new TextDecoder().decode(bytes);
export const hexToNumber = (hex) => {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    return hex === '' ? 0n : BigInt('0x' + hex);
};
export const bytesToNumberBE = (bytes) => hexToNumber(bytesToHex(bytes));
export const validateDataGroupTag = (tlv, tag) => {
    if (parseInt(tlv.tag, 16) != tag)
        throw new Error(`Invalid data group tag "0x${tlv.tag}", expected 0x${tag.toString(16)}`);
};
