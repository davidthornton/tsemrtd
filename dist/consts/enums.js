// Common
/** Data groups tags */
export var TAGS;
(function (TAGS) {
    TAGS[TAGS["COM"] = 96] = "COM";
    TAGS[TAGS["DG1"] = 97] = "DG1";
    TAGS[TAGS["DG2"] = 117] = "DG2";
    TAGS[TAGS["DG3"] = 99] = "DG3";
    TAGS[TAGS["DG4"] = 118] = "DG4";
    TAGS[TAGS["DG5"] = 101] = "DG5";
    TAGS[TAGS["DG6"] = 102] = "DG6";
    TAGS[TAGS["DG7"] = 103] = "DG7";
    TAGS[TAGS["DG8"] = 104] = "DG8";
    TAGS[TAGS["DG9"] = 105] = "DG9";
    TAGS[TAGS["DG10"] = 106] = "DG10";
    TAGS[TAGS["DG11"] = 107] = "DG11";
    TAGS[TAGS["DG12"] = 108] = "DG12";
    TAGS[TAGS["DG13"] = 109] = "DG13";
    TAGS[TAGS["DG14"] = 110] = "DG14";
    TAGS[TAGS["DG15"] = 111] = "DG15";
    TAGS[TAGS["DG16"] = 112] = "DG16";
    TAGS[TAGS["SOD"] = 119] = "SOD";
})(TAGS || (TAGS = {}));
// CBEFF
/** ISO/IEC 7816-11 tags */
export var ISO7816Tags;
(function (ISO7816Tags) {
    ISO7816Tags[ISO7816Tags["BIOMETRIC_INFORMATION_GROUP_TEMPLATE"] = 32609] = "BIOMETRIC_INFORMATION_GROUP_TEMPLATE";
    ISO7816Tags[ISO7816Tags["BIOMETRIC_INFORMATION_TEMPLATE"] = 32608] = "BIOMETRIC_INFORMATION_TEMPLATE";
    ISO7816Tags[ISO7816Tags["BIOMETRIC_INFO_COUNT"] = 2] = "BIOMETRIC_INFO_COUNT";
    ISO7816Tags[ISO7816Tags["BIOMETRIC_HEADER_TEMPLATE_BASE"] = 161] = "BIOMETRIC_HEADER_TEMPLATE_BASE";
    ISO7816Tags[ISO7816Tags["BIOMETRIC_DATA_BLOCK"] = 24366] = "BIOMETRIC_DATA_BLOCK";
    ISO7816Tags[ISO7816Tags["BIOMETRIC_DATA_BLOCK_CONSTRUCTED"] = 32558] = "BIOMETRIC_DATA_BLOCK_CONSTRUCTED";
})(ISO7816Tags || (ISO7816Tags = {}));
/** NIST IR 6529A. Table 4 – Biometric Type */
export var CBEFFBiometricType;
(function (CBEFFBiometricType) {
    CBEFFBiometricType[CBEFFBiometricType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    CBEFFBiometricType[CBEFFBiometricType["MULTIPLE"] = 1] = "MULTIPLE";
    CBEFFBiometricType[CBEFFBiometricType["FACIAL_FEATURES"] = 2] = "FACIAL_FEATURES";
    CBEFFBiometricType[CBEFFBiometricType["VOICE"] = 4] = "VOICE";
    CBEFFBiometricType[CBEFFBiometricType["FINGERPRINT"] = 8] = "FINGERPRINT";
    CBEFFBiometricType[CBEFFBiometricType["IRIS"] = 16] = "IRIS";
    CBEFFBiometricType[CBEFFBiometricType["RETINA"] = 32] = "RETINA";
    CBEFFBiometricType[CBEFFBiometricType["HAND_GEOMETRY"] = 64] = "HAND_GEOMETRY";
    CBEFFBiometricType[CBEFFBiometricType["SIGNATURE_DYNAMICS"] = 128] = "SIGNATURE_DYNAMICS";
    CBEFFBiometricType[CBEFFBiometricType["KEYSTROKE_DYNAMICS"] = 256] = "KEYSTROKE_DYNAMICS";
    CBEFFBiometricType[CBEFFBiometricType["LIP_MOVEMENT"] = 512] = "LIP_MOVEMENT";
    CBEFFBiometricType[CBEFFBiometricType["THERMAL_FACE_IMAGE"] = 1024] = "THERMAL_FACE_IMAGE";
    CBEFFBiometricType[CBEFFBiometricType["THERMAL_HAND_IMAGE"] = 2048] = "THERMAL_HAND_IMAGE";
    CBEFFBiometricType[CBEFFBiometricType["GAIT"] = 4096] = "GAIT";
    CBEFFBiometricType[CBEFFBiometricType["BODY_ODOR"] = 8192] = "BODY_ODOR";
    CBEFFBiometricType[CBEFFBiometricType["DNA"] = 16384] = "DNA";
    CBEFFBiometricType[CBEFFBiometricType["EAR_SHAPE"] = 32768] = "EAR_SHAPE";
    CBEFFBiometricType[CBEFFBiometricType["FINGER_GEOMETRY"] = 65536] = "FINGER_GEOMETRY";
    CBEFFBiometricType[CBEFFBiometricType["PALM_PRINT"] = 131072] = "PALM_PRINT";
    CBEFFBiometricType[CBEFFBiometricType["VEIN_PATTERN"] = 262144] = "VEIN_PATTERN";
    CBEFFBiometricType[CBEFFBiometricType["FOOT_PRINT"] = 524288] = "FOOT_PRINT";
})(CBEFFBiometricType || (CBEFFBiometricType = {}));
// DG2
/** ISO/IEC 19794-5. Gender */
export var Gender;
(function (Gender) {
    Gender[Gender["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    Gender[Gender["MALE"] = 1] = "MALE";
    Gender[Gender["FEMALE"] = 2] = "FEMALE";
    Gender[Gender["UNKNOWN"] = 255] = "UNKNOWN";
})(Gender || (Gender = {}));
/** ISO/IEC 19794-5. Eye color */
export var EyeColor;
(function (EyeColor) {
    EyeColor[EyeColor["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    EyeColor[EyeColor["BLACK"] = 1] = "BLACK";
    EyeColor[EyeColor["BLUE"] = 2] = "BLUE";
    EyeColor[EyeColor["BROWN"] = 3] = "BROWN";
    EyeColor[EyeColor["GRAY"] = 4] = "GRAY";
    EyeColor[EyeColor["GREEN"] = 5] = "GREEN";
    EyeColor[EyeColor["HETEROCHROMIC"] = 6] = "HETEROCHROMIC";
    EyeColor[EyeColor["PINK"] = 7] = "PINK";
    EyeColor[EyeColor["OTHER"] = 255] = "OTHER";
})(EyeColor || (EyeColor = {}));
/** ISO/IEC 19794-5. Hair color */
export var HairColor;
(function (HairColor) {
    HairColor[HairColor["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    HairColor[HairColor["BALD"] = 1] = "BALD";
    HairColor[HairColor["BLACK"] = 2] = "BLACK";
    HairColor[HairColor["BLOND"] = 3] = "BLOND";
    HairColor[HairColor["BROWN"] = 4] = "BROWN";
    HairColor[HairColor["GRAY"] = 5] = "GRAY";
    HairColor[HairColor["WHITE"] = 6] = "WHITE";
    HairColor[HairColor["AUBURN"] = 7] = "AUBURN";
    HairColor[HairColor["OTHER"] = 255] = "OTHER";
})(HairColor || (HairColor = {}));
/** ISO/IEC 19794-5. Face image type */
export var FaceType;
(function (FaceType) {
    // Translation from the Russian language version of the standard, as I was unable to get the English version for free
    FaceType[FaceType["BASIC"] = 0] = "BASIC";
    FaceType[FaceType["FULLFRONTAL"] = 1] = "FULLFRONTAL";
    FaceType[FaceType["CONDITIONALFRONTAL"] = 2] = "CONDITIONALFRONTAL";
    FaceType[FaceType["BASIC3D"] = 128] = "BASIC3D";
    FaceType[FaceType["FULL3D"] = 129] = "FULL3D";
    FaceType[FaceType["CONDITIONAL3D"] = 130] = "CONDITIONAL3D";
})(FaceType || (FaceType = {}));
/** ISO/IEC 19794-5. Image type (format) */
export var ISO19794ImageType;
(function (ISO19794ImageType) {
    ISO19794ImageType[ISO19794ImageType["JPEG"] = 0] = "JPEG";
    ISO19794ImageType[ISO19794ImageType["JPEG2000"] = 1] = "JPEG2000";
})(ISO19794ImageType || (ISO19794ImageType = {}));
/** ISO/IEC 39794-5. Image type (format) */
export var ISO39794ImageType;
(function (ISO39794ImageType) {
    ISO39794ImageType[ISO39794ImageType["jpeg"] = 2] = "jpeg";
    ISO39794ImageType[ISO39794ImageType["jpeg2000Lossy"] = 3] = "jpeg2000Lossy";
    ISO39794ImageType[ISO39794ImageType["jpeg2000Lossless"] = 4] = "jpeg2000Lossless";
})(ISO39794ImageType || (ISO39794ImageType = {}));
/** ISO/IEC 19794-5. Image color space */
export var ImageColorSpace;
(function (ImageColorSpace) {
    ImageColorSpace[ImageColorSpace["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    ImageColorSpace[ImageColorSpace["RGB24BIT"] = 1] = "RGB24BIT";
    ImageColorSpace[ImageColorSpace["YUV422"] = 2] = "YUV422";
    ImageColorSpace[ImageColorSpace["GRAYSCALE8BIT"] = 3] = "GRAYSCALE8BIT";
    ImageColorSpace[ImageColorSpace["OTHER"] = 4] = "OTHER";
})(ImageColorSpace || (ImageColorSpace = {}));
/** ISO/IEC 19794-5. Image source type */
export var SourceType;
(function (SourceType) {
    SourceType[SourceType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    SourceType[SourceType["PHOTO"] = 1] = "PHOTO";
    SourceType[SourceType["PHOTOBYCAM"] = 2] = "PHOTOBYCAM";
    SourceType[SourceType["PHOTOBYSCAN"] = 3] = "PHOTOBYSCAN";
    SourceType[SourceType["FRAME"] = 4] = "FRAME";
    /** Frame by analog camera */
    SourceType[SourceType["FRAMEBYACAM"] = 5] = "FRAMEBYACAM";
    /** Frame by digital camera */
    SourceType[SourceType["FRAMEBYDCAM"] = 6] = "FRAMEBYDCAM";
    SourceType[SourceType["UNKNOWN"] = 7] = "UNKNOWN";
})(SourceType || (SourceType = {}));
// DG3
/** ISO/IEC 19794-4. Image compression algorithm */
export var ISO19794FingerprintImageType;
(function (ISO19794FingerprintImageType) {
    ISO19794FingerprintImageType[ISO19794FingerprintImageType["UNCOMPRESSED"] = 0] = "UNCOMPRESSED";
    ISO19794FingerprintImageType[ISO19794FingerprintImageType["UNCOMPRESSEDPACKED"] = 1] = "UNCOMPRESSEDPACKED";
    ISO19794FingerprintImageType[ISO19794FingerprintImageType["WSQ"] = 2] = "WSQ";
    ISO19794FingerprintImageType[ISO19794FingerprintImageType["JPEG"] = 3] = "JPEG";
    ISO19794FingerprintImageType[ISO19794FingerprintImageType["JPEG2000"] = 4] = "JPEG2000";
    ISO19794FingerprintImageType[ISO19794FingerprintImageType["PNG"] = 5] = "PNG";
})(ISO19794FingerprintImageType || (ISO19794FingerprintImageType = {}));
/** ISO/IEC 39794-4. Image compression algorithm */
export var ISO39794FingerprintImageType;
(function (ISO39794FingerprintImageType) {
    ISO39794FingerprintImageType[ISO39794FingerprintImageType["pgm"] = 0] = "pgm";
    ISO39794FingerprintImageType[ISO39794FingerprintImageType["wsq"] = 1] = "wsq";
    ISO39794FingerprintImageType[ISO39794FingerprintImageType["jpeg2000Lossy"] = 2] = "jpeg2000Lossy";
    ISO39794FingerprintImageType[ISO39794FingerprintImageType["jpeg2000Lossless"] = 3] = "jpeg2000Lossless";
    ISO39794FingerprintImageType[ISO39794FingerprintImageType["png"] = 4] = "png";
})(ISO39794FingerprintImageType || (ISO39794FingerprintImageType = {}));
/** ISO/IEC 19794-4. Name of finger/part of palm */
export var ISO19794FingerType;
(function (ISO19794FingerType) {
    ISO19794FingerType[ISO19794FingerType["UNKNOWN"] = 0] = "UNKNOWN";
    ISO19794FingerType[ISO19794FingerType["RIGHTTHUMB"] = 1] = "RIGHTTHUMB";
    ISO19794FingerType[ISO19794FingerType["RIGHTINDEX"] = 2] = "RIGHTINDEX";
    ISO19794FingerType[ISO19794FingerType["RIGHTMIDDLE"] = 3] = "RIGHTMIDDLE";
    ISO19794FingerType[ISO19794FingerType["RIGHTRING"] = 4] = "RIGHTRING";
    ISO19794FingerType[ISO19794FingerType["RIGHTLITTLE"] = 5] = "RIGHTLITTLE";
    ISO19794FingerType[ISO19794FingerType["LEFTTHUMB"] = 6] = "LEFTTHUMB";
    ISO19794FingerType[ISO19794FingerType["LEFTINDEX"] = 7] = "LEFTINDEX";
    ISO19794FingerType[ISO19794FingerType["LEFTMIDDLE"] = 8] = "LEFTMIDDLE";
    ISO19794FingerType[ISO19794FingerType["LEFTRING"] = 9] = "LEFTRING";
    ISO19794FingerType[ISO19794FingerType["LEFTLITTLE"] = 10] = "LEFTLITTLE";
    ISO19794FingerType[ISO19794FingerType["RIGHT4FINGERS"] = 13] = "RIGHT4FINGERS";
    ISO19794FingerType[ISO19794FingerType["LEFT4FINGER"] = 14] = "LEFT4FINGER";
    ISO19794FingerType[ISO19794FingerType["BOTHTHUMB"] = 15] = "BOTHTHUMB";
    ISO19794FingerType[ISO19794FingerType["PALM_UNKNOWN"] = 20] = "PALM_UNKNOWN";
    ISO19794FingerType[ISO19794FingerType["PALM_RIGHT_FULL"] = 21] = "PALM_RIGHT_FULL";
    ISO19794FingerType[ISO19794FingerType["PALM_RIGHT_WRITER_S"] = 22] = "PALM_RIGHT_WRITER_S";
    ISO19794FingerType[ISO19794FingerType["PALM_LEFT_FULL"] = 23] = "PALM_LEFT_FULL";
    ISO19794FingerType[ISO19794FingerType["PALM_LEFT_WRITER_S"] = 24] = "PALM_LEFT_WRITER_S";
    ISO19794FingerType[ISO19794FingerType["PALM_RIGHT_LOWER"] = 25] = "PALM_RIGHT_LOWER";
    ISO19794FingerType[ISO19794FingerType["PALM_RIGHT_UPPER"] = 26] = "PALM_RIGHT_UPPER";
    ISO19794FingerType[ISO19794FingerType["PALM_LEFT_LOWER"] = 27] = "PALM_LEFT_LOWER";
    ISO19794FingerType[ISO19794FingerType["PALM_LEFT_UPPER"] = 28] = "PALM_LEFT_UPPER";
    ISO19794FingerType[ISO19794FingerType["PALM_RIGHT_OTHER"] = 29] = "PALM_RIGHT_OTHER";
    ISO19794FingerType[ISO19794FingerType["PALM_LEFT_OTHER"] = 30] = "PALM_LEFT_OTHER";
    ISO19794FingerType[ISO19794FingerType["PALM_RIGHT_INTERDIGITAL"] = 31] = "PALM_RIGHT_INTERDIGITAL";
    ISO19794FingerType[ISO19794FingerType["PALM_RIGHT_THENAR"] = 32] = "PALM_RIGHT_THENAR";
    ISO19794FingerType[ISO19794FingerType["PALM_RIGHT_HYPOTHENAR"] = 33] = "PALM_RIGHT_HYPOTHENAR";
    ISO19794FingerType[ISO19794FingerType["PALM_LEFT_INTERDIGITAL"] = 34] = "PALM_LEFT_INTERDIGITAL";
    ISO19794FingerType[ISO19794FingerType["PALM_LEFT_THENAR"] = 35] = "PALM_LEFT_THENAR";
    ISO19794FingerType[ISO19794FingerType["PALM_LEFT_HYPOTHENAR"] = 36] = "PALM_LEFT_HYPOTHENAR";
})(ISO19794FingerType || (ISO19794FingerType = {}));
/** ISO/IEC 39794-4. Name of finger/part of palm */
export var ISO39794FingerType;
(function (ISO39794FingerType) {
    ISO39794FingerType[ISO39794FingerType["unknownPosition"] = 0] = "unknownPosition";
    ISO39794FingerType[ISO39794FingerType["rightThumbFinger"] = 1] = "rightThumbFinger";
    ISO39794FingerType[ISO39794FingerType["rightIndexFinger"] = 2] = "rightIndexFinger";
    ISO39794FingerType[ISO39794FingerType["rightMiddleFinger"] = 3] = "rightMiddleFinger";
    ISO39794FingerType[ISO39794FingerType["rightRingFinger"] = 4] = "rightRingFinger";
    ISO39794FingerType[ISO39794FingerType["rightLittleFinger"] = 5] = "rightLittleFinger";
    ISO39794FingerType[ISO39794FingerType["leftThumbFinger"] = 6] = "leftThumbFinger";
    ISO39794FingerType[ISO39794FingerType["leftIndexFinger"] = 7] = "leftIndexFinger";
    ISO39794FingerType[ISO39794FingerType["leftMiddleFinger"] = 8] = "leftMiddleFinger";
    ISO39794FingerType[ISO39794FingerType["leftRingFinger"] = 9] = "leftRingFinger";
    ISO39794FingerType[ISO39794FingerType["leftLittleFinger"] = 10] = "leftLittleFinger";
    ISO39794FingerType[ISO39794FingerType["rightFourFingers"] = 13] = "rightFourFingers";
    ISO39794FingerType[ISO39794FingerType["leftFourFingers"] = 14] = "leftFourFingers";
    ISO39794FingerType[ISO39794FingerType["bothThumbFingers"] = 15] = "bothThumbFingers";
    ISO39794FingerType[ISO39794FingerType["rightExtraDigitFinger"] = 16] = "rightExtraDigitFinger";
    ISO39794FingerType[ISO39794FingerType["leftExtraDigitFinger"] = 17] = "leftExtraDigitFinger";
    ISO39794FingerType[ISO39794FingerType["unknownFrictionRidge"] = 18] = "unknownFrictionRidge";
    ISO39794FingerType[ISO39794FingerType["entireJointImage"] = 19] = "entireJointImage";
    ISO39794FingerType[ISO39794FingerType["unknownPalm"] = 20] = "unknownPalm";
    ISO39794FingerType[ISO39794FingerType["rightFullPalm"] = 21] = "rightFullPalm";
    ISO39794FingerType[ISO39794FingerType["rightWritersPalm"] = 22] = "rightWritersPalm";
    ISO39794FingerType[ISO39794FingerType["rightLowerPalm"] = 23] = "rightLowerPalm";
    ISO39794FingerType[ISO39794FingerType["rightUpperPalm"] = 24] = "rightUpperPalm";
    ISO39794FingerType[ISO39794FingerType["rightOtherPalm"] = 25] = "rightOtherPalm";
    ISO39794FingerType[ISO39794FingerType["rightInterdigital"] = 26] = "rightInterdigital";
    ISO39794FingerType[ISO39794FingerType["rightThenar"] = 27] = "rightThenar";
    ISO39794FingerType[ISO39794FingerType["rightHypothenar"] = 28] = "rightHypothenar";
    ISO39794FingerType[ISO39794FingerType["leftFullPalm"] = 29] = "leftFullPalm";
    ISO39794FingerType[ISO39794FingerType["leftWritersPalm"] = 30] = "leftWritersPalm";
    ISO39794FingerType[ISO39794FingerType["leftLowerPalm"] = 31] = "leftLowerPalm";
    ISO39794FingerType[ISO39794FingerType["leftUpperPalm"] = 32] = "leftUpperPalm";
    ISO39794FingerType[ISO39794FingerType["leftOtherPalm"] = 33] = "leftOtherPalm";
    ISO39794FingerType[ISO39794FingerType["leftInterdigital"] = 34] = "leftInterdigital";
    ISO39794FingerType[ISO39794FingerType["leftThenar"] = 35] = "leftThenar";
    ISO39794FingerType[ISO39794FingerType["leftHypothenar"] = 36] = "leftHypothenar";
    ISO39794FingerType[ISO39794FingerType["rightGrasp"] = 37] = "rightGrasp";
    ISO39794FingerType[ISO39794FingerType["leftGrasp"] = 38] = "leftGrasp";
    ISO39794FingerType[ISO39794FingerType["rightIndexMiddleFingers"] = 40] = "rightIndexMiddleFingers";
    ISO39794FingerType[ISO39794FingerType["rightMiddleRingFingers"] = 41] = "rightMiddleRingFingers";
    ISO39794FingerType[ISO39794FingerType["rightRingLittleFingers"] = 42] = "rightRingLittleFingers";
    ISO39794FingerType[ISO39794FingerType["leftIndexMiddleFingers"] = 43] = "leftIndexMiddleFingers";
    ISO39794FingerType[ISO39794FingerType["leftMiddleRingFingers"] = 44] = "leftMiddleRingFingers";
    ISO39794FingerType[ISO39794FingerType["leftRingLittleFingers"] = 45] = "leftRingLittleFingers";
    ISO39794FingerType[ISO39794FingerType["rightIndexLeftIndexFingers"] = 46] = "rightIndexLeftIndexFingers";
    ISO39794FingerType[ISO39794FingerType["rightIndexMiddleRingFingers"] = 47] = "rightIndexMiddleRingFingers";
    ISO39794FingerType[ISO39794FingerType["rightMiddleRingLittleFingers"] = 48] = "rightMiddleRingLittleFingers";
    ISO39794FingerType[ISO39794FingerType["leftIndexMiddleRingFingers"] = 49] = "leftIndexMiddleRingFingers";
    ISO39794FingerType[ISO39794FingerType["leftMiddleRingLittleFingers"] = 50] = "leftMiddleRingLittleFingers";
    ISO39794FingerType[ISO39794FingerType["rightFourFingertips"] = 51] = "rightFourFingertips";
    ISO39794FingerType[ISO39794FingerType["leftFourFingertips"] = 52] = "leftFourFingertips";
    ISO39794FingerType[ISO39794FingerType["rightFingertips"] = 53] = "rightFingertips";
    ISO39794FingerType[ISO39794FingerType["leftFingertips"] = 54] = "leftFingertips";
    ISO39794FingerType[ISO39794FingerType["leftMiddleIndexRightIndexMiddleFingers"] = 55] = "leftMiddleIndexRightIndexMiddleFingers";
    ISO39794FingerType[ISO39794FingerType["unknownSole"] = 60] = "unknownSole";
    ISO39794FingerType[ISO39794FingerType["rightSole"] = 61] = "rightSole";
    ISO39794FingerType[ISO39794FingerType["leftSole"] = 62] = "leftSole";
    ISO39794FingerType[ISO39794FingerType["unknownToe"] = 63] = "unknownToe";
    ISO39794FingerType[ISO39794FingerType["rightBigToe"] = 64] = "rightBigToe";
    ISO39794FingerType[ISO39794FingerType["rightSecondToe"] = 65] = "rightSecondToe";
    ISO39794FingerType[ISO39794FingerType["rightMiddleToe"] = 66] = "rightMiddleToe";
    ISO39794FingerType[ISO39794FingerType["rightFourthToe"] = 67] = "rightFourthToe";
    ISO39794FingerType[ISO39794FingerType["rightLittleToe"] = 68] = "rightLittleToe";
    ISO39794FingerType[ISO39794FingerType["leftBigToe"] = 69] = "leftBigToe";
    ISO39794FingerType[ISO39794FingerType["leftSecondToe"] = 70] = "leftSecondToe";
    ISO39794FingerType[ISO39794FingerType["leftMiddleToe"] = 71] = "leftMiddleToe";
    ISO39794FingerType[ISO39794FingerType["leftFourthToe"] = 72] = "leftFourthToe";
    ISO39794FingerType[ISO39794FingerType["leftLittleToe"] = 73] = "leftLittleToe";
    ISO39794FingerType[ISO39794FingerType["rightFrontBallFoot"] = 74] = "rightFrontBallFoot";
    ISO39794FingerType[ISO39794FingerType["rightBackHeelFoot"] = 75] = "rightBackHeelFoot";
    ISO39794FingerType[ISO39794FingerType["leftFrontBallFoot"] = 76] = "leftFrontBallFoot";
    ISO39794FingerType[ISO39794FingerType["leftBackHeelFoot"] = 77] = "leftBackHeelFoot";
    ISO39794FingerType[ISO39794FingerType["rightMiddleFoot"] = 78] = "rightMiddleFoot";
    ISO39794FingerType[ISO39794FingerType["leftMiddleFoot"] = 79] = "leftMiddleFoot";
    ISO39794FingerType[ISO39794FingerType["rightCarpalDelta"] = 81] = "rightCarpalDelta";
    ISO39794FingerType[ISO39794FingerType["leftCarpalDelta"] = 82] = "leftCarpalDelta";
    ISO39794FingerType[ISO39794FingerType["rightFullWithWriterPalm"] = 83] = "rightFullWithWriterPalm";
    ISO39794FingerType[ISO39794FingerType["leftFullWithWriterPalm"] = 84] = "leftFullWithWriterPalm";
    ISO39794FingerType[ISO39794FingerType["rightBracelet"] = 85] = "rightBracelet";
    ISO39794FingerType[ISO39794FingerType["leftBracelet"] = 86] = "leftBracelet";
    ISO39794FingerType[ISO39794FingerType["otherPosition"] = 999] = "otherPosition";
})(ISO39794FingerType || (ISO39794FingerType = {}));
/** ISO/IEC 39794-4. Type of fingerprint and palm image */
export var ISO39794FingerImageType;
(function (ISO39794FingerImageType) {
    ISO39794FingerImageType[ISO39794FingerImageType["plainContact"] = 0] = "plainContact";
    ISO39794FingerImageType[ISO39794FingerImageType["rolledContact"] = 1] = "rolledContact";
    ISO39794FingerImageType[ISO39794FingerImageType["latentImage"] = 4] = "latentImage";
    ISO39794FingerImageType[ISO39794FingerImageType["swipeContact"] = 8] = "swipeContact";
    ISO39794FingerImageType[ISO39794FingerImageType["stationarySubjectContactlessPlain"] = 24] = "stationarySubjectContactlessPlain";
    ISO39794FingerImageType[ISO39794FingerImageType["stationarySubjectContactlessRolled"] = 25] = "stationarySubjectContactlessRolled";
    ISO39794FingerImageType[ISO39794FingerImageType["movingSubjectContactlessPlain"] = 41] = "movingSubjectContactlessPlain";
    ISO39794FingerImageType[ISO39794FingerImageType["movingSubjectContactlessRolled"] = 42] = "movingSubjectContactlessRolled";
    ISO39794FingerImageType[ISO39794FingerImageType["otherImpression"] = 28] = "otherImpression";
    ISO39794FingerImageType[ISO39794FingerImageType["unknownImpression"] = 29] = "unknownImpression";
})(ISO39794FingerImageType || (ISO39794FingerImageType = {}));
/** ISO/IEC 19794-4. Type of fingerprint and palm image */
export var ISO19794FingerImageType;
(function (ISO19794FingerImageType) {
    ISO19794FingerImageType[ISO19794FingerImageType["LIVE"] = 0] = "LIVE";
    ISO19794FingerImageType[ISO19794FingerImageType["LIVESWIPE"] = 1] = "LIVESWIPE";
    ISO19794FingerImageType[ISO19794FingerImageType["NONLIVE"] = 2] = "NONLIVE";
    ISO19794FingerImageType[ISO19794FingerImageType["NONLIVESWIPE"] = 2] = "NONLIVESWIPE";
    ISO19794FingerImageType[ISO19794FingerImageType["FOOTPRINT"] = 3] = "FOOTPRINT";
    ISO19794FingerImageType[ISO19794FingerImageType["BROACHING"] = 4] = "BROACHING";
    ISO19794FingerImageType[ISO19794FingerImageType["LIVECONTACTLESS"] = 9] = "LIVECONTACTLESS";
})(ISO19794FingerImageType || (ISO19794FingerImageType = {}));
// DG4
/** ISO/IEC 19794-4. Unit of measurement of resolution */
export var ImageUnit;
(function (ImageUnit) {
    ImageUnit[ImageUnit["DPI"] = 1] = "DPI";
    ImageUnit[ImageUnit["DPCM"] = 2] = "DPCM";
})(ImageUnit || (ImageUnit = {}));
/** ISO/IEC 19794-6. Image format */
export var ISO19794IrisImageFormat;
(function (ISO19794IrisImageFormat) {
    ISO19794IrisImageFormat[ISO19794IrisImageFormat["RAWMONO"] = 2] = "RAWMONO";
    ISO19794IrisImageFormat[ISO19794IrisImageFormat["RAWRGB"] = 4] = "RAWRGB";
    ISO19794IrisImageFormat[ISO19794IrisImageFormat["JPEGMONO"] = 6] = "JPEGMONO";
    ISO19794IrisImageFormat[ISO19794IrisImageFormat["JPEGRGB"] = 8] = "JPEGRGB";
    ISO19794IrisImageFormat[ISO19794IrisImageFormat["JPEGLSMONO"] = 10] = "JPEGLSMONO";
    ISO19794IrisImageFormat[ISO19794IrisImageFormat["JPEGLSRGB"] = 12] = "JPEGLSRGB";
    ISO19794IrisImageFormat[ISO19794IrisImageFormat["JPEG2000MONO"] = 14] = "JPEG2000MONO";
    ISO19794IrisImageFormat[ISO19794IrisImageFormat["JPEG000RGB"] = 16] = "JPEG000RGB";
})(ISO19794IrisImageFormat || (ISO19794IrisImageFormat = {}));
export var ISO39794IrisImageFormat;
(function (ISO39794IrisImageFormat) {
    ISO39794IrisImageFormat[ISO39794IrisImageFormat["pgm"] = 0] = "pgm";
    ISO39794IrisImageFormat[ISO39794IrisImageFormat["ppm"] = 1] = "ppm";
    ISO39794IrisImageFormat[ISO39794IrisImageFormat["png"] = 2] = "png";
    ISO39794IrisImageFormat[ISO39794IrisImageFormat["jpeg2000Lossless"] = 3] = "jpeg2000Lossless";
    ISO39794IrisImageFormat[ISO39794IrisImageFormat["jpeg2000Lossy"] = 4] = "jpeg2000Lossy";
})(ISO39794IrisImageFormat || (ISO39794IrisImageFormat = {}));
/** ISO/IEC 19794-6. Iris biometric subtype */
export var ISO19794IrisEyeSubtype;
(function (ISO19794IrisEyeSubtype) {
    ISO19794IrisEyeSubtype[ISO19794IrisEyeSubtype["UNDEFINED"] = 0] = "UNDEFINED";
    ISO19794IrisEyeSubtype[ISO19794IrisEyeSubtype["LEFT"] = 1] = "LEFT";
    ISO19794IrisEyeSubtype[ISO19794IrisEyeSubtype["RIGHT"] = 2] = "RIGHT";
})(ISO19794IrisEyeSubtype || (ISO19794IrisEyeSubtype = {}));
export var ISO39794IrisEyeSubtype;
(function (ISO39794IrisEyeSubtype) {
    ISO39794IrisEyeSubtype[ISO39794IrisEyeSubtype["unknown"] = 0] = "unknown";
    ISO39794IrisEyeSubtype[ISO39794IrisEyeSubtype["rightIris"] = 1] = "rightIris";
    ISO39794IrisEyeSubtype[ISO39794IrisEyeSubtype["leftIris"] = 2] = "leftIris";
})(ISO39794IrisEyeSubtype || (ISO39794IrisEyeSubtype = {}));
export var ISO39794IrisImageKindCode;
(function (ISO39794IrisImageKindCode) {
    ISO39794IrisImageKindCode[ISO39794IrisImageKindCode["uncropped"] = 1] = "uncropped";
    ISO39794IrisImageKindCode[ISO39794IrisImageKindCode["vGA"] = 2] = "vGA";
    ISO39794IrisImageKindCode[ISO39794IrisImageKindCode["cropped"] = 3] = "cropped";
    ISO39794IrisImageKindCode[ISO39794IrisImageKindCode["croppedAndMasked"] = 7] = "croppedAndMasked";
})(ISO39794IrisImageKindCode || (ISO39794IrisImageKindCode = {}));
export var ISO39794HorizontalOrientationCode;
(function (ISO39794HorizontalOrientationCode) {
    ISO39794HorizontalOrientationCode[ISO39794HorizontalOrientationCode["undefined"] = 0] = "undefined";
    ISO39794HorizontalOrientationCode[ISO39794HorizontalOrientationCode["leftToRight"] = 1] = "leftToRight";
    ISO39794HorizontalOrientationCode[ISO39794HorizontalOrientationCode["rightToLeft"] = 2] = "rightToLeft";
})(ISO39794HorizontalOrientationCode || (ISO39794HorizontalOrientationCode = {}));
export var ISO39794VerticalOrientationCode;
(function (ISO39794VerticalOrientationCode) {
    ISO39794VerticalOrientationCode[ISO39794VerticalOrientationCode["undefined"] = 0] = "undefined";
    ISO39794VerticalOrientationCode[ISO39794VerticalOrientationCode["topToBottom"] = 1] = "topToBottom";
    ISO39794VerticalOrientationCode[ISO39794VerticalOrientationCode["bottomToTop"] = 2] = "bottomToTop";
})(ISO39794VerticalOrientationCode || (ISO39794VerticalOrientationCode = {}));
export var ISO39794CompressionHistoryCode;
(function (ISO39794CompressionHistoryCode) {
    ISO39794CompressionHistoryCode[ISO39794CompressionHistoryCode["undefined"] = 0] = "undefined";
    ISO39794CompressionHistoryCode[ISO39794CompressionHistoryCode["losslessOrNone"] = 1] = "losslessOrNone";
    ISO39794CompressionHistoryCode[ISO39794CompressionHistoryCode["lossy"] = 2] = "lossy";
})(ISO39794CompressionHistoryCode || (ISO39794CompressionHistoryCode = {}));
