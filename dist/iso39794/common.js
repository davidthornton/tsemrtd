var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AsnProp, AsnPropTypes } from "@peculiar/asn1-schema";
/** Standard version block */
export class VersionBlock {
    /** Standard generation */
    generation = 0;
    /** Standard year */
    year = 0;
}
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 0, implicit: true })
], VersionBlock.prototype, "generation", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 1, implicit: true })
], VersionBlock.prototype, "year", void 0);
/** Wrapper for unused fields */
export class GenericBlock {
    raw = new Uint8Array();
}
__decorate([
    AsnProp({ type: AsnPropTypes.Any })
], GenericBlock.prototype, "raw", void 0);
/** Date and time block */
export class DateTimeBlock {
    /** Year */
    year;
    /** Month */
    month;
    /** Day */
    day;
    /** Hour */
    hour;
    /** Minute */
    minute;
    /** Second */
    second;
    /** Millisecond */
    millisecond;
}
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 0, implicit: true })
], DateTimeBlock.prototype, "year", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 1, implicit: true, optional: true })
], DateTimeBlock.prototype, "month", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 2, implicit: true, optional: true })
], DateTimeBlock.prototype, "day", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 3, implicit: true, optional: true })
], DateTimeBlock.prototype, "hour", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 4, implicit: true, optional: true })
], DateTimeBlock.prototype, "minute", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 5, implicit: true, optional: true })
], DateTimeBlock.prototype, "second", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 6, implicit: true, optional: true })
], DateTimeBlock.prototype, "millisecond", void 0);
