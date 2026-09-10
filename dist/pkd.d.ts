import { CSCAMasterList } from "./asn1/pkd.js";
/**
 * Class for working with CSCA master list
 * @see [ICAO Masterlist](https://www.icao.int/icao-pkd/icao-master-list)
*/
export declare class PKD {
    /**
     * Get CSCA certificates from master list
     * @param data Data of ICAO master list file (.ml)
     */
    static load(data: string | Uint8Array): CSCAMasterList;
}
