/** Standard version block */
export declare class VersionBlock {
    /** Standard generation */
    generation: number;
    /** Standard year */
    year: number;
}
/** Wrapper for unused fields */
export declare class GenericBlock {
    raw: Uint8Array;
}
/** Date and time block */
export declare class DateTimeBlock {
    /** Year */
    year: number;
    /** Month */
    month?: number;
    /** Day */
    day?: number;
    /** Hour */
    hour?: number;
    /** Minute */
    minute?: number;
    /** Second */
    second?: number;
    /** Millisecond */
    millisecond?: number;
}
