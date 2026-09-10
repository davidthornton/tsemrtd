/** Data groups tags */
export declare enum TAGS {
    COM = 96,
    DG1 = 97,
    DG2 = 117,
    DG3 = 99,
    DG4 = 118,
    DG5 = 101,
    DG6 = 102,
    DG7 = 103,
    DG8 = 104,
    DG9 = 105,
    DG10 = 106,
    DG11 = 107,
    DG12 = 108,
    DG13 = 109,
    DG14 = 110,
    DG15 = 111,
    DG16 = 112,
    SOD = 119
}
/** ISO/IEC 7816-11 tags */
export declare enum ISO7816Tags {
    BIOMETRIC_INFORMATION_GROUP_TEMPLATE = 32609,
    BIOMETRIC_INFORMATION_TEMPLATE = 32608,
    BIOMETRIC_INFO_COUNT = 2,
    BIOMETRIC_HEADER_TEMPLATE_BASE = 161,
    BIOMETRIC_DATA_BLOCK = 24366,
    BIOMETRIC_DATA_BLOCK_CONSTRUCTED = 32558
}
/** NIST IR 6529A. Table 4 – Biometric Type */
export declare enum CBEFFBiometricType {
    UNSPECIFIED = 0,
    MULTIPLE = 1,
    FACIAL_FEATURES = 2,
    VOICE = 4,
    FINGERPRINT = 8,
    IRIS = 16,
    RETINA = 32,
    HAND_GEOMETRY = 64,
    SIGNATURE_DYNAMICS = 128,
    KEYSTROKE_DYNAMICS = 256,
    LIP_MOVEMENT = 512,
    THERMAL_FACE_IMAGE = 1024,
    THERMAL_HAND_IMAGE = 2048,
    GAIT = 4096,
    BODY_ODOR = 8192,
    DNA = 16384,
    EAR_SHAPE = 32768,
    FINGER_GEOMETRY = 65536,
    PALM_PRINT = 131072,
    VEIN_PATTERN = 262144,
    FOOT_PRINT = 524288
}
/** ISO/IEC 19794-5. Gender */
export declare enum Gender {
    UNSPECIFIED = 0,
    MALE = 1,
    FEMALE = 2,
    UNKNOWN = 255
}
/** ISO/IEC 19794-5. Eye color */
export declare enum EyeColor {
    UNSPECIFIED = 0,
    BLACK = 1,
    BLUE = 2,
    BROWN = 3,
    GRAY = 4,
    GREEN = 5,
    HETEROCHROMIC = 6,
    PINK = 7,
    OTHER = 255
}
/** ISO/IEC 19794-5. Hair color */
export declare enum HairColor {
    UNSPECIFIED = 0,
    BALD = 1,
    BLACK = 2,
    BLOND = 3,
    BROWN = 4,
    GRAY = 5,
    WHITE = 6,
    AUBURN = 7,
    OTHER = 255
}
/** ISO/IEC 19794-5. Face image type */
export declare enum FaceType {
    BASIC = 0,
    FULLFRONTAL = 1,
    CONDITIONALFRONTAL = 2,
    BASIC3D = 128,
    FULL3D = 129,
    CONDITIONAL3D = 130
}
/** ISO/IEC 19794-5. Image type (format) */
export declare enum ISO19794ImageType {
    JPEG = 0,
    JPEG2000 = 1
}
/** ISO/IEC 39794-5. Image type (format) */
export declare enum ISO39794ImageType {
    jpeg = 2,
    jpeg2000Lossy = 3,
    jpeg2000Lossless = 4
}
/** ISO/IEC 19794-5. Image color space */
export declare enum ImageColorSpace {
    UNSPECIFIED = 0,
    RGB24BIT = 1,
    YUV422 = 2,
    GRAYSCALE8BIT = 3,
    OTHER = 4
}
/** ISO/IEC 19794-5. Image source type */
export declare enum SourceType {
    UNSPECIFIED = 0,
    PHOTO = 1,
    PHOTOBYCAM = 2,
    PHOTOBYSCAN = 3,
    FRAME = 4,
    /** Frame by analog camera */
    FRAMEBYACAM = 5,
    /** Frame by digital camera */
    FRAMEBYDCAM = 6,
    UNKNOWN = 7
}
/** ISO/IEC 19794-4. Image compression algorithm */
export declare enum ISO19794FingerprintImageType {
    UNCOMPRESSED = 0,
    UNCOMPRESSEDPACKED = 1,
    WSQ = 2,
    JPEG = 3,
    JPEG2000 = 4,
    PNG = 5
}
/** ISO/IEC 39794-4. Image compression algorithm */
export declare enum ISO39794FingerprintImageType {
    pgm = 0,
    wsq = 1,
    jpeg2000Lossy = 2,
    jpeg2000Lossless = 3,
    png = 4
}
/** ISO/IEC 19794-4. Name of finger/part of palm */
export declare enum ISO19794FingerType {
    UNKNOWN = 0,
    RIGHTTHUMB = 1,
    RIGHTINDEX = 2,
    RIGHTMIDDLE = 3,
    RIGHTRING = 4,
    RIGHTLITTLE = 5,
    LEFTTHUMB = 6,
    LEFTINDEX = 7,
    LEFTMIDDLE = 8,
    LEFTRING = 9,
    LEFTLITTLE = 10,
    RIGHT4FINGERS = 13,
    LEFT4FINGER = 14,
    BOTHTHUMB = 15,
    PALM_UNKNOWN = 20,
    PALM_RIGHT_FULL = 21,
    PALM_RIGHT_WRITER_S = 22,
    PALM_LEFT_FULL = 23,
    PALM_LEFT_WRITER_S = 24,
    PALM_RIGHT_LOWER = 25,
    PALM_RIGHT_UPPER = 26,
    PALM_LEFT_LOWER = 27,
    PALM_LEFT_UPPER = 28,
    PALM_RIGHT_OTHER = 29,
    PALM_LEFT_OTHER = 30,
    PALM_RIGHT_INTERDIGITAL = 31,
    PALM_RIGHT_THENAR = 32,
    PALM_RIGHT_HYPOTHENAR = 33,
    PALM_LEFT_INTERDIGITAL = 34,
    PALM_LEFT_THENAR = 35,
    PALM_LEFT_HYPOTHENAR = 36
}
/** ISO/IEC 39794-4. Name of finger/part of palm */
export declare enum ISO39794FingerType {
    unknownPosition = 0,
    rightThumbFinger = 1,
    rightIndexFinger = 2,
    rightMiddleFinger = 3,
    rightRingFinger = 4,
    rightLittleFinger = 5,
    leftThumbFinger = 6,
    leftIndexFinger = 7,
    leftMiddleFinger = 8,
    leftRingFinger = 9,
    leftLittleFinger = 10,
    rightFourFingers = 13,
    leftFourFingers = 14,
    bothThumbFingers = 15,
    rightExtraDigitFinger = 16,
    leftExtraDigitFinger = 17,
    unknownFrictionRidge = 18,
    entireJointImage = 19,
    unknownPalm = 20,
    rightFullPalm = 21,
    rightWritersPalm = 22,
    rightLowerPalm = 23,
    rightUpperPalm = 24,
    rightOtherPalm = 25,
    rightInterdigital = 26,
    rightThenar = 27,
    rightHypothenar = 28,
    leftFullPalm = 29,
    leftWritersPalm = 30,
    leftLowerPalm = 31,
    leftUpperPalm = 32,
    leftOtherPalm = 33,
    leftInterdigital = 34,
    leftThenar = 35,
    leftHypothenar = 36,
    rightGrasp = 37,
    leftGrasp = 38,
    rightIndexMiddleFingers = 40,
    rightMiddleRingFingers = 41,
    rightRingLittleFingers = 42,
    leftIndexMiddleFingers = 43,
    leftMiddleRingFingers = 44,
    leftRingLittleFingers = 45,
    rightIndexLeftIndexFingers = 46,
    rightIndexMiddleRingFingers = 47,
    rightMiddleRingLittleFingers = 48,
    leftIndexMiddleRingFingers = 49,
    leftMiddleRingLittleFingers = 50,
    rightFourFingertips = 51,
    leftFourFingertips = 52,
    rightFingertips = 53,
    leftFingertips = 54,
    leftMiddleIndexRightIndexMiddleFingers = 55,
    unknownSole = 60,
    rightSole = 61,
    leftSole = 62,
    unknownToe = 63,
    rightBigToe = 64,
    rightSecondToe = 65,
    rightMiddleToe = 66,
    rightFourthToe = 67,
    rightLittleToe = 68,
    leftBigToe = 69,
    leftSecondToe = 70,
    leftMiddleToe = 71,
    leftFourthToe = 72,
    leftLittleToe = 73,
    rightFrontBallFoot = 74,
    rightBackHeelFoot = 75,
    leftFrontBallFoot = 76,
    leftBackHeelFoot = 77,
    rightMiddleFoot = 78,
    leftMiddleFoot = 79,
    rightCarpalDelta = 81,
    leftCarpalDelta = 82,
    rightFullWithWriterPalm = 83,
    leftFullWithWriterPalm = 84,
    rightBracelet = 85,
    leftBracelet = 86,
    otherPosition = 999
}
/** ISO/IEC 39794-4. Type of fingerprint and palm image */
export declare enum ISO39794FingerImageType {
    plainContact = 0,
    rolledContact = 1,
    latentImage = 4,
    swipeContact = 8,
    stationarySubjectContactlessPlain = 24,
    stationarySubjectContactlessRolled = 25,
    movingSubjectContactlessPlain = 41,
    movingSubjectContactlessRolled = 42,
    otherImpression = 28,
    unknownImpression = 29
}
/** ISO/IEC 19794-4. Type of fingerprint and palm image */
export declare enum ISO19794FingerImageType {
    LIVE = 0,
    LIVESWIPE = 1,
    NONLIVE = 2,
    NONLIVESWIPE = 2,
    FOOTPRINT = 3,
    BROACHING = 4,
    LIVECONTACTLESS = 9
}
/** ISO/IEC 19794-4. Unit of measurement of resolution */
export declare enum ImageUnit {
    DPI = 1,
    DPCM = 2
}
/** ISO/IEC 19794-6. Image format */
export declare enum ISO19794IrisImageFormat {
    RAWMONO = 2,
    RAWRGB = 4,
    JPEGMONO = 6,
    JPEGRGB = 8,
    JPEGLSMONO = 10,
    JPEGLSRGB = 12,
    JPEG2000MONO = 14,
    JPEG000RGB = 16
}
export declare enum ISO39794IrisImageFormat {
    pgm = 0,
    ppm = 1,
    png = 2,
    jpeg2000Lossless = 3,
    jpeg2000Lossy = 4
}
/** ISO/IEC 19794-6. Iris biometric subtype */
export declare enum ISO19794IrisEyeSubtype {
    UNDEFINED = 0,
    LEFT = 1,
    RIGHT = 2
}
export declare enum ISO39794IrisEyeSubtype {
    unknown = 0,
    rightIris = 1,
    leftIris = 2
}
export declare enum ISO39794IrisImageKindCode {
    uncropped = 1,
    vGA = 2,
    cropped = 3,
    croppedAndMasked = 7
}
export declare enum ISO39794HorizontalOrientationCode {
    undefined = 0,
    leftToRight = 1,
    rightToLeft = 2
}
export declare enum ISO39794VerticalOrientationCode {
    undefined = 0,
    topToBottom = 1,
    bottomToTop = 2
}
export declare enum ISO39794CompressionHistoryCode {
    undefined = 0,
    losslessOrNone = 1,
    lossy = 2
}
