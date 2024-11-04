ServerEvents.recipes(e => {
    function theUltimate(type) {
        e.custom({
            "type": "extendedcrafting:shaped_table",
            "tier": 3,
            "pattern": [
                "  ABC  ",
                " DEFGH ",
                "IJKLMNO",
                "PQR STU",
                "VWXYZab",
                " cdefg ",
                "  hij  "
            ],
            "key": {
                "A": { "tag": "forge:" + type + "s/tin" },
                "B": { "tag": "forge:" + type + "s/quartz" },
                "C": { "tag": "forge:" + type + "s/fluorite" },
                "D": { "tag": "forge:" + type + "s/iron" },
                "E": { "tag": "forge:" + type + "s/stone" },
                "F": { "tag": "forge:" + type + "s/osmium" },
                "G": { "tag": "forge:" + type + "s/certus_quartz" },
                "H": { "tag": "forge:" + type + "s/diamond" },
                "I": { "tag": "forge:" + type + "s/crystalized_menril" },
                "J": { "tag": "forge:" + type + "s/lapis_lazuli" },
                "K": { "tag": "forge:" + type + "s/lead" },
                "L": { "tag": "forge:" + type + "s/andesite_alloy" },
                "M": { "tag": "forge:" + type + "s/steel" },
                "N": { "tag": "forge:" + type + "s/compressed_iron" },
                "O": { "tag": "forge:" + type + "s/industrial_iron" },
                "P": { "tag": "forge:" + type + "s/netherite" },
                "Q": { "tag": "forge:" + type + "s/black_quartz" },
                "R": { "tag": "forge:" + type + "s/fluix" },
                "S": { "tag": "forge:" + type + "s/refined_obsidian" },
                "T": { "tag": "forge:" + type + "s/amethyst" },
                "U": { "tag": "forge:" + type + "s/crystalized_chorus" },
                "V": { "tag": "forge:" + type + "s/ostrum" },
                "W": { "tag": "forge:" + type + "s/wooden" },
                "X": { "tag": "forge:" + type + "s/redstone" },
                "Y": { "tag": "forge:" + type + "s/calorite" },
                "Z": { "tag": "forge:" + type + "s/desh" },
                "a": { "tag": "forge:" + type + "s/copper" },
                "b": { "tag": "forge:" + type + "s/bronze" },
                "c": { "tag": "forge:" + type + "s/electrum" },
                "d": { "tag": "forge:" + type + "s/gold" },
                "e": { "tag": "forge:" + type + "s/brass" },
                "f": { "tag": "forge:" + type + "s/refined_glowstone" },
                "g": { "tag": "forge:" + type + "s/uranium" },
                "h": { "tag": "forge:" + type + "s/zinc" },
                "i": { "tag": "forge:" + type + "s/emerald" },
                "j": { "tag": "forge:" + type + "s/uraninite" }
            },
            "result": { "item": "technicresources:the_ultimate_" + type }
        })
    }
    theUltimate("gear")
    theUltimate("plate")
    theUltimate("rod")
    theUltimate("wire")
})