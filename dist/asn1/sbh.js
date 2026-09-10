var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AsnProp, AsnPropTypes } from "@peculiar/asn1-schema";
/**
 * Standard Biometric Header (SBH)
 * @hideconstructor
 */
export class SBH {
    /** ICAO header version - Version of the CBEFF patron header format  */
    version;
    /** Biometric type */
    type;
    /** Biometric sub-type. (NIST IR 6529A, Table 6) */
    subtype;
    /** Creation date and time */
    issueDate;
    /** Validity period (from through) */
    expireDate;
    /** Creator of the biometric reference data (PID) */
    creator;
    /** Format Owner */
    formatOwner = new Uint8Array();
    /** Format Type */
    formatType = new Uint8Array();
}
__decorate([
    AsnProp({ type: AsnPropTypes.OctetString, context: 0, implicit: true, optional: true })
], SBH.prototype, "version", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 1, implicit: true, optional: true })
], SBH.prototype, "type", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 2, implicit: true, optional: true })
], SBH.prototype, "subtype", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.OctetString, context: 3, implicit: true, optional: true })
], SBH.prototype, "issueDate", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.OctetString, context: 5, implicit: true, optional: true })
], SBH.prototype, "expireDate", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.OctetString, context: 6, implicit: true, optional: true })
], SBH.prototype, "creator", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.OctetString, context: 7, implicit: true })
], SBH.prototype, "formatOwner", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.OctetString, context: 8, implicit: true })
], SBH.prototype, "formatType", void 0);
