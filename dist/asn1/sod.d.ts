import { DigestAlgorithmIdentifier } from "@peculiar/asn1-cms";
/** Class for ASN1 schema of DataGroup hash sequence */
export declare class DGHash {
    /** Datagroup number */
    number: number;
    /** Datagroup hash */
    hash: ArrayBuffer;
}
/** Class for ASN1 schema of LDSSecurityObject. Described by ICAO 9303 p.10 section 4.6.2 */
export declare class LDSObject {
    /** Version of LDS Security Object */
    version: 0 | 1;
    /** OID of digest algorithm */
    algorithm: DigestAlgorithmIdentifier;
    /** Datagroups arrays */
    hashes: DGHash[];
}
