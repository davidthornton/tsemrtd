import type { CBEFFBiometricType } from "../consts/enums.js";
/**
 * Standard Biometric Header (SBH)
 * @hideconstructor
 */
export declare class SBH {
    /** ICAO header version - Version of the CBEFF patron header format  */
    version?: Uint8Array;
    /** Biometric type */
    type?: CBEFFBiometricType;
    /** Biometric sub-type. (NIST IR 6529A, Table 6) */
    subtype?: number;
    /** Creation date and time */
    issueDate?: Uint8Array;
    /** Validity period (from through) */
    expireDate?: Uint8Array;
    /** Creator of the biometric reference data (PID) */
    creator?: Uint8Array;
    /** Format Owner */
    formatOwner: Uint8Array;
    /** Format Type */
    formatType: Uint8Array;
}
