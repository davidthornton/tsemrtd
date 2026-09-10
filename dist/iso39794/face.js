var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AsnProp, AsnType, AsnPropTypes, AsnTypeTypes, AsnArray, AsnConvert } from "@peculiar/asn1-schema";
import { ISO7816Tags } from "../consts/enums.js";
import { TLV } from "@li0ard/tinytlv";
import { GenericBlock, VersionBlock } from "./common.js";
/** Image type (format)*/
let ImageDataFormat = class ImageDataFormat {
    /** Image type code */
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
class ImageInformation2DBlock {
    imageDataFormat = new ImageDataFormat();
}
__decorate([
    AsnProp({ type: ImageDataFormat, context: 0 })
], ImageInformation2DBlock.prototype, "imageDataFormat", void 0);
class ImageRepresentation2DBlock {
    representationData2D = new Uint8Array();
    imageInformation2DBlock = new ImageInformation2DBlock();
}
__decorate([
    AsnProp({ type: AsnPropTypes.OctetString, context: 0, implicit: true })
], ImageRepresentation2DBlock.prototype, "representationData2D", void 0);
__decorate([
    AsnProp({ type: ImageInformation2DBlock, context: 1, implicit: true })
], ImageRepresentation2DBlock.prototype, "imageInformation2DBlock", void 0);
let ImageRepresentationBase = class ImageRepresentationBase {
    imageRepresentation2DBlock;
    shapeRepresentation3DBlock;
};
__decorate([
    AsnProp({ type: ImageRepresentation2DBlock, context: 0, implicit: true })
], ImageRepresentationBase.prototype, "imageRepresentation2DBlock", void 0);
__decorate([
    AsnProp({ type: GenericBlock, context: 1, implicit: true })
], ImageRepresentationBase.prototype, "shapeRepresentation3DBlock", void 0);
ImageRepresentationBase = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], ImageRepresentationBase);
let ImageRepresentation = class ImageRepresentation {
    base;
    extensionBlock;
};
__decorate([
    AsnProp({ type: ImageRepresentationBase, context: 0 })
], ImageRepresentation.prototype, "base", void 0);
__decorate([
    AsnProp({ type: GenericBlock, context: 1, implicit: true })
], ImageRepresentation.prototype, "extensionBlock", void 0);
ImageRepresentation = __decorate([
    AsnType({ type: AsnTypeTypes.Choice })
], ImageRepresentation);
/** Face representation block */
class RepresentationBlock {
    /** Representation ID */
    representationId = 0;
    /** Image Representation */
    imageRepresentation = new ImageRepresentation();
}
__decorate([
    AsnProp({ type: AsnPropTypes.Integer, context: 0, implicit: true })
], RepresentationBlock.prototype, "representationId", void 0);
__decorate([
    AsnProp({ type: ImageRepresentation, context: 1 })
], RepresentationBlock.prototype, "imageRepresentation", void 0);
/** Face representation blocks */
let RepresentationBlocks = class RepresentationBlocks extends AsnArray {
};
RepresentationBlocks = __decorate([
    AsnType({ type: AsnTypeTypes.Sequence, itemType: RepresentationBlock })
], RepresentationBlocks);
/** Face image block */
class FaceImageDataBlock {
    /** Standard version block */
    versionBlock = new VersionBlock();
    /** Face representation blocks */
    representationBlocks = new RepresentationBlocks();
}
__decorate([
    AsnProp({ type: VersionBlock, context: 0, implicit: true })
], FaceImageDataBlock.prototype, "versionBlock", void 0);
__decorate([
    AsnProp({ type: RepresentationBlocks, context: 1, implicit: true })
], FaceImageDataBlock.prototype, "representationBlocks", void 0);
/**
 * ISO/IEC 39794-5 Face image decoder
 * @experimental
 */
export class ISO39794FaceDecoder {
    /** Decode biometric data block (BDB) */
    static load(firstBlock) {
        const iso7816Blob = firstBlock.childs[0];
        if (parseInt(iso7816Blob.tag, 16) != ISO7816Tags.BIOMETRIC_HEADER_TEMPLATE_BASE)
            throw new Error(`Invalid object tag "0x${iso7816Blob.tag}", expected 0x${ISO7816Tags.BIOMETRIC_HEADER_TEMPLATE_BASE.toString(16)}`);
        const encodedFaceImage = iso7816Blob.childs[0];
        if (parseInt(encodedFaceImage.tag, 16) != 0x65)
            throw new Error(`Invalid ISO/IEC 39794-5 tag "0x${encodedFaceImage.tag}", expected 0x65`);
        // TODO: Fix this when APPLICATION type will be supported in "@peculiar/asn1-schema"
        const decoded = AsnConvert.parse(new TLV("30", encodedFaceImage.byteValue).toBytes(), FaceImageDataBlock);
        for (const i of decoded.representationBlocks) {
            const base = i.imageRepresentation.base;
            if (!base || !base.imageRepresentation2DBlock)
                continue;
            return {
                imageData: base.imageRepresentation2DBlock.representationData2D,
                imageType: base.imageRepresentation2DBlock.imageInformation2DBlock.imageDataFormat.code
            };
        }
        throw new Error(`No valid 2D image representation found in the FaceImageDataBlock`);
    }
}
