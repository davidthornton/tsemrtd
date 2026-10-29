/** BSI TR-03110. Terminal authentication */
export const TerminalAuthentication = "0.4.0.127.0.7.2.2.2";
/** BSI TR-03110. Chip authentication */
export var ChipAuthDomainParameters;
(function (ChipAuthDomainParameters) {
    ChipAuthDomainParameters["CA_DH"] = "0.4.0.127.0.7.2.2.3.1";
    ChipAuthDomainParameters["CA_ECDH"] = "0.4.0.127.0.7.2.2.3.2";
})(ChipAuthDomainParameters || (ChipAuthDomainParameters = {}));
/** BSI TR-03110. Chip authentication */
export var ChipAuthPublicKey;
(function (ChipAuthPublicKey) {
    ChipAuthPublicKey["PK_DH"] = "0.4.0.127.0.7.2.2.1.1";
    ChipAuthPublicKey["PK_ECDH"] = "0.4.0.127.0.7.2.2.1.2";
})(ChipAuthPublicKey || (ChipAuthPublicKey = {}));
/** BSI TR-03110. Chip authentication */
export var ChipAuthInfo;
(function (ChipAuthInfo) {
    ChipAuthInfo["CA_DH_3DES_CBC_CBC"] = "0.4.0.127.0.7.2.2.3.1.1";
    ChipAuthInfo["CA_DH_AES_CBC_CMAC_128"] = "0.4.0.127.0.7.2.2.3.1.2";
    ChipAuthInfo["CA_DH_AES_CBC_CMAC_192"] = "0.4.0.127.0.7.2.2.3.1.3";
    ChipAuthInfo["CA_DH_AES_CBC_CMAC_256"] = "0.4.0.127.0.7.2.2.3.1.4";
    ChipAuthInfo["CA_ECDH_3DES_CBC_CBC"] = "0.4.0.127.0.7.2.2.3.2.1";
    ChipAuthInfo["CA_ECDH_AES_CBC_CMAC_128"] = "0.4.0.127.0.7.2.2.3.2.2";
    ChipAuthInfo["CA_ECDH_AES_CBC_CMAC_192"] = "0.4.0.127.0.7.2.2.3.2.3";
    ChipAuthInfo["CA_ECDH_AES_CBC_CMAC_256"] = "0.4.0.127.0.7.2.2.3.2.4";
})(ChipAuthInfo || (ChipAuthInfo = {}));
