var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AsnProp, AsnPropTypes } from "@peculiar/asn1-schema";
import { DigestAlgorithmIdentifier } from "@peculiar/asn1-cms";
/** Class for ASN1 schema of DataGroup hash sequence */
export class DGHash {
    /** Datagroup number */
    number = 0;
    /** Datagroup hash */
    hash = new Uint8Array();
}
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], DGHash.prototype, "number", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.OctetString })
], DGHash.prototype, "hash", void 0);
/** Class for ASN1 schema of LDSSecurityObject. Described by ICAO 9303 p.10 section 4.6.2 */
export class LDSObject {
    /** Version of LDS Security Object */
    version = 0;
    /** OID of digest algorithm */
    algorithm = new DigestAlgorithmIdentifier();
    /** Datagroups arrays */
    hashes = [];
}
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], LDSObject.prototype, "version", void 0);
__decorate([
    AsnProp({ type: DigestAlgorithmIdentifier })
], LDSObject.prototype, "algorithm", void 0);
__decorate([
    AsnProp({ type: DGHash, repeated: "sequence" })
], LDSObject.prototype, "hashes", void 0);
