import { SubjectPublicKeyInfo } from "@peculiar/asn1-x509";
/**
 * Class for working with DG15 (Active authentication info)
*/
export declare class DG15 {
    /**
     * Get active authentication public key
     * @param data Data of EF.DG15 file
     */
    static load(data: string | Uint8Array): SubjectPublicKeyInfo;
}
