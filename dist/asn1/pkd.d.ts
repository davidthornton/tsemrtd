import { CertificateSet } from "@peculiar/asn1-cms";
/** Class for ASN1 schema of CSCA master list. Described by ICAO 9303 p.12 section 9.2 */
export declare class CSCAMasterList {
    /** Master list version */
    version: number;
    /** CSCA certificates */
    certificates: CertificateSet;
}
