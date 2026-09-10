var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AsnProp, AsnType, AsnPropTypes, AsnTypeTypes, AsnArray } from "@peculiar/asn1-schema";
import { AlgorithmIdentifier, SubjectPublicKeyInfo } from "@peculiar/asn1-x509";
/** Class for ASN1 schema of EAC/PACE Security info sequence */
export class SecurityInfo {
    /** OID of protocol */
    protocol = "";
    /** Required data defined by protocol */
    requiredData;
    /** Optional data defined by protocol */
    optionalData;
}
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], SecurityInfo.prototype, "protocol", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Any })
], SecurityInfo.prototype, "requiredData", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Any, optional: true })
], SecurityInfo.prototype, "optionalData", void 0);
/** EF.CVCA file ID. Described by BSI TR-03110, section A.1.1.3 */
export class FileID {
    /** File ID */
    fid = new Uint8Array();
    /** Short file ID */
    sfid;
}
__decorate([
    AsnProp({ type: AsnPropTypes.OctetString })
], FileID.prototype, "fid", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.OctetString, optional: true })
], FileID.prototype, "sfid", void 0);
/** Information on an implementation of Terminal Authentication. Described by BSI TR-03110, section A.1.1.3 */
export class TerminalAuthenticationInfo {
    /** OID of protocol */
    protocol = "";
    /** Terminal Authentication version */
    version = 0; // MUST be 1 for TAv1 or 2 for TAv2
    /** Indicate a (short) file identifier of the file EF.CVCA (v1 only) */
    efCVCA;
}
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], TerminalAuthenticationInfo.prototype, "protocol", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], TerminalAuthenticationInfo.prototype, "version", void 0);
__decorate([
    AsnProp({ type: FileID, optional: true })
], TerminalAuthenticationInfo.prototype, "efCVCA", void 0);
/** Information on an implementation of Chip Authentication. Described by BSI TR-03110, section A.1.1.2 */
export class ChipAuthenticationInfo {
    /** OID of protocol */
    protocol = "";
    /** Chip Authentication version */
    version = 0; // MUST be 1 for CAv1 or 2 for CAv2 or 3 for CAv3
    /** Indicate the local key identifier (and domain parameters for key agreement) */
    keyId;
}
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], ChipAuthenticationInfo.prototype, "protocol", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer })
], ChipAuthenticationInfo.prototype, "version", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, optional: true })
], ChipAuthenticationInfo.prototype, "keyId", void 0);
/** A public key for Chip Authentication. Described by BSI TR-03110, section A.1.1.2 */
export class ChipAuthenticationPublicKeyInfo {
    /** OID of protocol */
    protocol = "";
    /** Public key in encoded form ([RFC 5480](https://datatracker.ietf.org/doc/html/rfc5480#section-2)) */
    chipAuthenticationPublicKey = new SubjectPublicKeyInfo();
    /** Indicate the local key identifier (and domain parameters for key agreement) */
    keyId;
}
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], ChipAuthenticationPublicKeyInfo.prototype, "protocol", void 0);
__decorate([
    AsnProp({ type: SubjectPublicKeyInfo })
], ChipAuthenticationPublicKeyInfo.prototype, "chipAuthenticationPublicKey", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, optional: true })
], ChipAuthenticationPublicKeyInfo.prototype, "keyId", void 0);
/** One set of domain parameters for Chip Authentication version 2 and version 3. Described by BSI TR-03110, section A.1.1.2 */
export class ChipAuthenticationDomainParameterInfo {
    /** OID of protocol */
    protocol = "";
    /** Domain parameters */
    domainParameter = new AlgorithmIdentifier();
    /** Indicate the local key identifier (and domain parameters for key agreement) */
    keyId;
}
__decorate([
    AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], ChipAuthenticationDomainParameterInfo.prototype, "protocol", void 0);
__decorate([
    AsnProp({ type: AlgorithmIdentifier })
], ChipAuthenticationDomainParameterInfo.prototype, "domainParameter", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, optional: true })
], ChipAuthenticationDomainParameterInfo.prototype, "keyId", void 0);
/** Class for ASN1 schema of SecurityInfo set. Described by ICAO 9303 p.10 section 4.7.14.2 */
let SecurityInfos = class SecurityInfos extends AsnArray {
};
SecurityInfos = __decorate([
    AsnType({ type: AsnTypeTypes.Set, itemType: SecurityInfo })
], SecurityInfos);
export { SecurityInfos };
