import { SubjectPublicKeyInfo } from "@peculiar/asn1-x509";
import type { TArg } from "@noble/hashes/utils.js";
/**
 * Class for working with DG15 (Active authentication info)
 */
export declare class DG15 {
    /**
     * Get active authentication public key
     * @param data Data of EF.DG15 file
     */
    static load(data: string | TArg<Uint8Array>): SubjectPublicKeyInfo;
}
