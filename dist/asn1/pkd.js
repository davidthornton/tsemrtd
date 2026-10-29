var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CertificateSet } from "@peculiar/asn1-cms";
import { AsnProp, AsnPropTypes } from "@peculiar/asn1-schema";
/** Class for ASN1 schema of CSCA master list. Described by ICAO 9303 p.12 section 9.2 */
export class CSCAMasterList {
    /** Master list version */
    version = 0;
    /** CSCA certificates */
    certificates = new CertificateSet();
}
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], CSCAMasterList.prototype, "version", void 0);
__decorate([
    AsnProp({ type: CertificateSet })
], CSCAMasterList.prototype, "certificates", void 0);
