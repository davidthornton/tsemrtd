import type { CBEFFBiometricType } from "../consts/enums.js";
/**
 * Standard Biometric Header (SBH)
 * @hideconstructor
 */
export declare class SBH {
    /** ICAO header version - Version of the CBEFF patron header format  */
    version?: ArrayBuffer;
    /** Biometric type */
    type?: CBEFFBiometricType;
    /** Biometric sub-type. (NIST IR 6529A, Table 6) */
    subtype?: number;
    /** Creation date and time */
    issueDate?: ArrayBuffer;
    /** Validity period (from through) */
    expireDate?: ArrayBuffer;
    /** Creator of the biometric reference data (PID) */
    creator?: ArrayBuffer;
    /** Format Owner */
    formatOwner: ArrayBuffer;
    /** Format Type */
    formatType: ArrayBuffer;
}
