var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AsnProp, AsnType, AsnPropTypes, AsnTypeTypes, AsnArray, AsnConvert } from "@peculiar/asn1-schema";
import { TLV } from "@li0ard/tinytlv";
import { GenericBlock, VersionBlock, DateTimeBlock as CaptureDateTimeBlock } from "./common.js";
import { ISO7816Tags } from "../consts/enums.js";
class IrisImageKindExtensionBlock {
    fallback;
}
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 0, implicit: true })
], IrisImageKindExtensionBlock.prototype, "fallback", void 0);
let IrisImageKind = class IrisImageKind {
    code;
    extensionBlock;
};
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 0, implicit: true })
], IrisImageKind.prototype, "code", void 0);
__decorate([
    AsnProp({ type: IrisImageKindExtensionBlock, context: 1, implicit: true })
], IrisImageKind.prototype, "extensionBlock", void 0);
IrisImageKind = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], IrisImageKind);
let ImageDataFormat = class ImageDataFormat {
    code;
    extensionBlock;
};
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 0, implicit: true })
], ImageDataFormat.prototype, "code", void 0);
__decorate([
    AsnProp({ type: GenericBlock, context: 1, implicit: true })
], ImageDataFormat.prototype, "extensionBlock", void 0);
ImageDataFormat = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], ImageDataFormat);
/** Iris representation block */
class RepresentationBlock {
    eyeLabelCode;
    irisImageKind = new IrisImageKind();
    bitDepth;
    imageDataFormat = new ImageDataFormat();
    horizontalOrientationCode;
    verticalOrientationCode;
    compressionHistoryCode;
    captureDateTimeBlock = new CaptureDateTimeBlock();
    irisImageData = new Uint8Array();
}
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 0, implicit: true })
], RepresentationBlock.prototype, "eyeLabelCode", void 0);
__decorate([
    AsnProp({ type: IrisImageKind, context: 1 })
], RepresentationBlock.prototype, "irisImageKind", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 2, implicit: true })
], RepresentationBlock.prototype, "bitDepth", void 0);
__decorate([
    AsnProp({ type: ImageDataFormat, context: 3 })
], RepresentationBlock.prototype, "imageDataFormat", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 4, implicit: true })
], RepresentationBlock.prototype, "horizontalOrientationCode", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 5, implicit: true })
], RepresentationBlock.prototype, "verticalOrientationCode", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 6, implicit: true })
], RepresentationBlock.prototype, "compressionHistoryCode", void 0);
__decorate([
    AsnProp({ type: CaptureDateTimeBlock, context: 7, implicit: true })
], RepresentationBlock.prototype, "captureDateTimeBlock", void 0);
__decorate([
    AsnProp({ type: AsnPropTypes.OctetString, context: 8, implicit: true })
], RepresentationBlock.prototype, "irisImageData", void 0);
/** Iris representation blocks */
let RepresentationBlocks = class RepresentationBlocks extends AsnArray {
};
RepresentationBlocks = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: RepresentationBlock })
], RepresentationBlocks);
/** Iris image block */
class IrisImageDataBlock {
    /** Standard version block */
    versionBlock = new VersionBlock();
    /** Iris representation blocks */
    representationBlocks = new RepresentationBlocks();
}
__decorate([
    AsnProp({ type: VersionBlock, context: 0, implicit: true })
], IrisImageDataBlock.prototype, "versionBlock", void 0);
__decorate([
    AsnProp({ type: RepresentationBlocks, context: 1, implicit: true })
], IrisImageDataBlock.prototype, "representationBlocks", void 0);
/**
 * ISO/IEC 39794-6 Iris image decoder
 * @experimental
 */
export class ISO39794IrisDecoder {
    /** Decode biometric data block (BDB) */
    static load(firstBlock) {
        const iso7816Blob = firstBlock.childs[0];
        if (parseInt(iso7816Blob.tag, 16) != ISO7816Tags.BIOMETRIC_HEADER_TEMPLATE_BASE)
            throw new Error(`Invalid object tag "0x${iso7816Blob.tag}", expected 0x${ISO7816Tags.BIOMETRIC_HEADER_TEMPLATE_BASE.toString(16)}`);
        const encodedFaceImage = iso7816Blob.childs[0];
        if (parseInt(encodedFaceImage.tag, 16) != 0x66)
            throw new Error(`Invalid ISO/IEC 39794-6 tag "0x${encodedFaceImage.tag}", expected 0x66`);
        // TODO: Fix this when APPLICATION type will be supported in "@peculiar/asn1-schema"
        const decoded = AsnConvert.parse(new TLV("30", encodedFaceImage.byteValue).toBytes(), IrisImageDataBlock);
        for (const i of decoded.representationBlocks) {
            if (!i.imageDataFormat.code)
                continue;
            return {
                biometricSubtype: i.eyeLabelCode,
                imageData: i.irisImageData,
                imageType: i.imageDataFormat.code,
                depth: i.bitDepth
            };
        }
        throw new Error(`No valid iris image representation found in the IrisImageDataBlock`);
    }
}
