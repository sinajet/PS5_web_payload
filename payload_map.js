// @ts-check

const CUSTOM_ACTION_APPCACHE_REMOVE = "appcache-remove";

/**
 * @typedef {Object} PayloadInfo
 * @property {string} displayTitle
 * @property {string} description
 * @property {string} fileName - path relative to the payloads folder
 * @property {string} author
 * @property {string} projectSource
 * @property {string} binarySource - should be direct download link to the included version, so that you can verify the hashes
 * @property {string} version
 * @property {string[]?} [supportedFirmwares] - optional, these are interpreted as prefixes, so "" would match all, and "4." would match 4.xx, if not set, the payload is assumed to be compatible with all firmwares
 * @property {number?} [toPort] - optional, if the payload should be sent to "127.0.0.1:<port>" instead of loading directly, if specified it'll show up in webkit-only mode too
 * @property {string?} [customAction]
 */

/**
 * @type {PayloadInfo[]}
*/
const payload_map = [
    // { // auto-loaded
    //     displayTitle: "PS5 Payload ELF Loader",
    //     description: "Uses port 9021. Persistent network elf loader",
    //     fileName: "elfldr-ps5.elf",
    //     author: "john-tornblom",
    //     projectSource: "https://github.com/ps5-payload-dev/elfldr",
    //     binarySource: "https://github.com/ps5-payload-dev/elfldr/releases/tag/v0.21",
    //     version: "0.21",
    //     supportedFirmwares: ["1.", "2.", "3.", "4.", "5."]
    // },
    {
        displayTitle: "YT Update Blocker",
        description: "block updateing",
        fileName: "yt_blocker1.3.elf",
        author: "Master_s9",
        projectSource: "https://github.com/Master",
        binarySource: "",
        version: "1.3",
        toPort: 9021
    },
    {
        displayTitle: "websrv",
        description: "Custom homebrew loader. Runs on port 8080.",
        fileName: "websrv-ps5.elf",
        author: "john-tornblom",
        projectSource: "https://github.com/ps5-payload-dev/websrv",
        binarySource: "https://github.com/ps5-payload-dev/websrv/releases/tag/v0.27",
        version: "0.27",
        toPort: 9021
    },
    {
        displayTitle: "ftpsrv",
        description: "FTP server. Runs on port 2121.",
        fileName: "ftpsrv-ps5.elf",
        author: "john-tornblom",
        projectSource: "https://github.com/ps5-payload-dev/ftpsrv",
        binarySource: "https://github.com/ps5-payload-dev/ftpsrv/releases/tag/v0.14.2",
        version: "0.14.2",
        toPort: 9021
    },
    {
        displayTitle: "klogsrv",
        description: "Klog server. Runs on port 3232.",
        fileName: "klogsrv-ps5.elf",
        author: "john-tornblom",
        projectSource: "https://github.com/ps5-payload-dev/klogsrv",
        binarySource: "https://github.com/ps5-payload-dev/klogsrv/releases/tag/v0.7.1",
        version: "0.7.1",
        toPort: 9021
    },
    {
        displayTitle: "shsrv",
        description: "Telnet shell server. Runs on port 2323.",
        fileName: "shsrv-ps5.elf",
        author: "john-tornblom",
        projectSource: "https://github.com/ps5-payload-dev/shsrv",
        binarySource: "https://github.com/ps5-payload-dev/shsrv/releases/tag/v0.18",
        version: "0.18",
        toPort: 9021
    },
    {
        displayTitle: "gdbsrv",
        description: "GDB server. Runs on port 2159.",
        fileName: "gdbsrv-ps5.elf",
        author: "john-tornblom",
        projectSource: "https://github.com/ps5-payload-dev/gdbsrv",
        binarySource: "https://github.com/ps5-payload-dev/gdbsrv/releases/tag/v0.7.1",
        version: "0.7.1",
        toPort: 9021
    },
    {
        displayTitle: "ps5debug",
        description: "Debugger",
        fileName: "ps5debug_v1.0b5.elf",
        author: "SiSTR0, ctn123",
        projectSource: "https://github.com/GoldHEN/ps5debug",
        binarySource: "https://github.com/GoldHEN/ps5debug/releases/download/1.0b5/ps5debug_v1.0b5.elf",
        version: "1.0b5",
        supportedFirmwares: ["3.", "4.", "5."],
        toPort: 9021
    },
    {
        displayTitle: "ps5debug",
        description: "Debugger, open source version by DizzRL",
        fileName: "ps5debug_dizz.elf",
        author: "Dizz, astrelsky, John Tornblom, SiSTR0, golden, idlesauce",
        projectSource: "https://github.com/idlesauce/ps5debug",
        binarySource: "https://github.com/idlesauce/ps5debug/releases/download/v0.0.1/ps5debug.elf",
        version: "0.0.1-r2",
        toPort: 9021
    },
	    {
        displayTitle: "kstuff-toggle",
        description: "Kstuff Toggle Beta",
        fileName: "kstuff-toggle.elf",
        author: "EchoStretch, john-tornblom",
        projectSource: "https://github.com/EchoStretch/kstuff-toggle",
        binarySource: "https://github.com/EchoStretch/kstuff-toggle/actions/runs/15086245462",
        version: "0.2",
        supportedFirmwares: ["3.", "4.", "5."],
        toPort: 9021
    },
    {
        displayTitle: "ps5-versions",
        description: "Shows kernel build, os and sdk versions",
        fileName: "ps5-versions.elf",
        author: "SiSTRo",
        projectSource: "https://github.com/SiSTR0/ps5-versions",
        binarySource: "https://github.com/SiSTR0/ps5-versions/releases/download/v1.0/ps5-versions.elf",
        version: "1.0",
        supportedFirmwares: ["1.", "2.", "3.", "4."]
    },
    {
        displayTitle: "ps5-remoteplay-get-pin",
        description: "Get Remote Play PIN for offline activated users. Send again to cancel.",
        fileName: "rp-get-pin.elf",
        author: "idlesauce",
        projectSource: "https://github.com/idlesauce/ps5-remoteplay-get-pin",
        binarySource: "https://github.com/idlesauce/ps5-remoteplay-get-pin/releases/tag/v0.1.1",
        version: "0.1.1",
        toPort: 9021
    },
    {
        // https://github.com/Storm21CH/PS5_Browser_appCache_remove
        displayTitle: "Browser appcache remover",
        description: "Deletes for only the current user in webkit-only mode",
        fileName: "",
        author: "Storm21CH, idlesauce",
        projectSource: "",
        binarySource: "",
        version: "1.0",
        customAction: CUSTOM_ACTION_APPCACHE_REMOVE
    }

];
