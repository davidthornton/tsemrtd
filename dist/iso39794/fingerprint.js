var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AsnProp, AsnType, AsnPropTypes, AsnTypeTypes, AsnArray, AsnConvert } from "@peculiar/asn1-schema";
import { TLV } from "@li0ard/tinytlv";
import { VersionBlock } from "./common.js";
import { ISO7816Tags } from "../consts/enums.js";
class PositionExtensionBlock {
    fallback;
}
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 0, implicit: true })
], PositionExtensionBlock.prototype, "fallback", void 0);
let Position = class Position {
    code;
    extensionBlock;
};
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 0, implicit: true })
], Position.prototype, "code", void 0);
__decorate([
    AsnProp({ type: PositionExtensionBlock, context: 1, implicit: true })
], Position.prototype, "extensionBlock", void 0);
Position = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], Position);
class ImpressionExtensionBlock {
    fallback;
}
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 0, implicit: true })
], ImpressionExtensionBlock.prototype, "fallback", void 0);
let Impression = class Impression {
    code;
    extensionBlock;
};
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 0, implicit: true })
], Impression.prototype, "code", void 0);
__decorate([
    AsnProp({ type: ImpressionExtensionBlock, context: 1, implicit: true })
], Impression.prototype, "extensionBlock", void 0);
Impression = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], Impression);
class ImageDataFormatExtensionBlock {
    fallback;
}
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 0, implicit: true })
], ImageDataFormatExtensionBlock.prototype, "fallback", void 0);
let ImageDataFormat = class ImageDataFormat {
    code;
    extensionBlock;
};
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 0, implicit: true })
], ImageDataFormat.prototype, "code", void 0);
__decorate([
    AsnProp({ type: ImageDataFormatExtensionBlock, context: 1, implicit: true })
], ImageDataFormat.prototype, "extensionBlock", void 0);
ImageDataFormat = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], ImageDataFormat);
/** Fingerprint representation block */
class RepresentationBlock {
    position = new Position();
    impression = new Impression();
    imageDataFormat = new ImageDataFormat();
    imageData = new Uint8Array();
}
__decorate([
    AsnProp({ type: Position, context: 0 })
], RepresentationBlock.prototype, "position", void 0);
__decorate([
    AsnProp({ type: Impression, context: 1 })
], RepresentationBlock.prototype, "impression", void 0);
__decorate([
    AsnProp({ type: ImageDataFormat, context: 2 })
], RepresentationBlock.prototype, "imageDataFormat", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.OctetString, context: 3, implicit: true })
], RepresentationBlock.prototype, "imageData", void 0);
/** Fingerprint representation blocks */
let RepresentationBlocks = class RepresentationBlocks extends AsnArray {
};
RepresentationBlocks = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: RepresentationBlock })
], RepresentationBlocks);
/** Fingerprint image block */
class FingerImageDataBlock {
    /** Standard version block */
    versionBlock = new VersionBlock();
    /** Fingerprint representation blocks */
    representationBlocks = new RepresentationBlocks();
}
__decorate([
    AsnProp({ type: VersionBlock, context: 0, implicit: true })
], FingerImageDataBlock.prototype, "versionBlock", void 0);
__decorate([
    AsnProp({ type: RepresentationBlocks, context: 1, implicit: true })
], FingerImageDataBlock.prototype, "representationBlocks", void 0);
/**
 * ISO/IEC 39794-4 Fingerprint image decoder
 * @experimental
 */
export class ISO39794FingerprintDecoder {
    /** Decode biometric data block (BDB) */
    static load(firstBlock) {
        const iso7816Blob = firstBlock.childs[0];
        if (parseInt(iso7816Blob.tag, 16) != ISO7816Tags.BIOMETRIC_HEADER_TEMPLATE_BASE)
            throw new Error(`Invalid object tag "0x${iso7816Blob.tag}", expected 0x${ISO7816Tags.BIOMETRIC_HEADER_TEMPLATE_BASE.toString(16)}`);
        const encodedFaceImage = iso7816Blob.childs[0];
        if (parseInt(encodedFaceImage.tag, 16) != 0x64)
            throw new Error(`Invalid ISO/IEC 39794-4 tag "0x${encodedFaceImage.tag}", expected 0x64`);
        // TODO: Fix this when APPLICATION type will be supported in "@peculiar/asn1-schema"
        const decoded = AsnConvert.parse(new TLV("30", encodedFaceImage.byteValue).toBytes(), FingerImageDataBlock);
        for (const i of decoded.representationBlocks) {
            if (!i.imageDataFormat.code || !i.position.code || !i.impression.code)
                continue;
            return {
                imageData: i.imageData,
                imageType: i.imageDataFormat.code,
                fingerType: i.position.code,
                fingerImageType: i.impression.code
            };
        }
        throw new Error(`No valid fingerprint representation found in the FingerImageDataBlock`);
    }
}
