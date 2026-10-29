import { AsnArray } from "@peculiar/asn1-schema";
import { AlgorithmIdentifier, SubjectPublicKeyInfo } from "@peculiar/asn1-x509";
/** Class for ASN1 schema of EAC/PACE Security info sequence */
export declare class SecurityInfo {
    /** OID of protocol */
    protocol: string;
    /** Required data defined by protocol */
    requiredData: any;
    /** Optional data defined by protocol */
    optionalData?: any;
}
/** EF.CVCA file ID. Described by BSI TR-03110, section A.1.1.3 */
export declare class FileID {
    /** File ID */
    fid: ArrayBuffer;
    /** Short file ID */
    sfid?: ArrayBuffer;
}
/** Information on an implementation of Terminal Authentication. Described by BSI TR-03110, section A.1.1.3 */
export declare class TerminalAuthenticationInfo {
    /** OID of protocol */
    protocol: string;
    /** Terminal Authentication version */
    version: number;
    /** Indicate a (short) file identifier of the file EF.CVCA (v1 only) */
    efCVCA?: FileID;
}
/** Information on an implementation of Chip Authentication. Described by BSI TR-03110, section A.1.1.2 */
export declare class ChipAuthenticationInfo {
    /** OID of protocol */
    protocol: string;
    /** Chip Authentication version */
    version: number;
    /** Indicate the local key identifier (and domain parameters for key agreement) */
    keyId?: number;
}
/** A public key for Chip Authentication. Described by BSI TR-03110, section A.1.1.2 */
export declare class ChipAuthenticationPublicKeyInfo {
    /** OID of protocol */
    protocol: string;
    /** Public key in encoded form ([RFC 5480](https://datatracker.ietf.org/doc/html/rfc5480#section-2)) */
    chipAuthenticationPublicKey: SubjectPublicKeyInfo;
    /** Indicate the local key identifier (and domain parameters for key agreement) */
    keyId?: number;
}
/** One set of domain parameters for Chip Authentication version 2 and version 3. Described by BSI TR-03110, section A.1.1.2 */
export declare class ChipAuthenticationDomainParameterInfo {
    /** OID of protocol */
    protocol: string;
    /** Domain parameters */
    domainParameter: AlgorithmIdentifier;
    /** Indicate the local key identifier (and domain parameters for key agreement) */
    keyId?: number;
}
/** Class for ASN1 schema of SecurityInfo set. Described by ICAO 9303 p.10 section 4.7.14.2 */
export declare class SecurityInfos extends AsnArray<SecurityInfo | TerminalAuthenticationInfo | ChipAuthenticationInfo | ChipAuthenticationPublicKeyInfo | ChipAuthenticationDomainParameterInfo> {
}
