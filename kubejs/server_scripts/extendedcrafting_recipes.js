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
                "A": { "tag": "c:" + type + "s/tin" },
                "B": { "tag": "c:" + type + "s/quartz" },
                "C": { "tag": "c:" + type + "s/fluorite" },
                "D": { "tag": "c:" + type + "s/iron" },
                "E": { "tag": "c:" + type + "s/stone" },
                "F": { "tag": "c:" + type + "s/osmium" },
                "G": { "tag": "c:" + type + "s/certus_quartz" },
                "H": { "tag": "c:" + type + "s/diamond" },
                "I": { "tag": "c:" + type + "s/crystalized_menril" },
                "J": { "tag": "c:" + type + "s/lapis_lazuli" },
                "K": { "tag": "c:" + type + "s/lead" },
                "L": { "tag": "c:" + type + "s/andesite_alloy" },
                "M": { "tag": "c:" + type + "s/steel" },
                "N": { "tag": "c:" + type + "s/compressed_iron" },
                "O": { "tag": "c:" + type + "s/neutron" },
                "P": { "tag": "c:" + type + "s/netherite" },
                "Q": { "tag": "c:" + type + "s/black_quartz" },
                "R": { "tag": "c:" + type + "s/fluix" },
                "S": { "tag": "c:" + type + "s/refined_obsidian" },
                "T": { "tag": "c:" + type + "s/amethyst" },
                "U": { "tag": "c:" + type + "s/crystalized_chorus" },
                "V": { "tag": "c:" + type + "s/ostrum" },
                "W": { "tag": "c:" + type + "s/wooden" },
                "X": { "tag": "c:" + type + "s/redstone" },
                "Y": { "tag": "c:" + type + "s/calorite" },
                "Z": { "tag": "c:" + type + "s/desh" },
                "a": { "tag": "c:" + type + "s/copper" },
                "b": { "tag": "c:" + type + "s/bronze" },
                "c": { "tag": "c:" + type + "s/electrum" },
                "d": { "tag": "c:" + type + "s/gold" },
                "e": { "tag": "c:" + type + "s/brass" },
                "f": { "tag": "c:" + type + "s/refined_glowstone" },
                "g": { "tag": "c:" + type + "s/uranium" },
                "h": { "tag": "c:" + type + "s/zinc" },
                "i": { "tag": "c:" + type + "s/emerald" },
                "j": { "tag": "c:" + type + "s/uraninite" }
            },
            "result": { "id": "technicresources:the_ultimate_" + type }
        })
    }
    theUltimate("gear")
    theUltimate("plate")
    theUltimate("rod")
    theUltimate("wire")
    
    function shaped(pattern,keys,result,count) {
        event.custom({
            "type": "extendedcrafting:shaped_table",
            "pattern": pattern,
            "key": keys,
            "result":{
                "item": result,
                "count": count
            }
        })
    }
    function shapedTier(pattern,keys,result,count,tier) {
        event.custom({
            "type": "extendedcrafting:shaped_table",
            "tier": tier,
            "pattern": pattern,
            "key": keys,
            "result":{
                "item": result,
                "count": count
            }
        })
    }
})