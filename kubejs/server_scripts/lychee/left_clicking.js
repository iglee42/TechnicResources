ServerEvents.recipes(e => {
    function leftClicking(block, item, outputs) {
        let posts = []
        outputs.forEach(output => { posts.push({ "type": "drop_item", "id": output.id, "count": output.count, "if": { "type": "chance", "chance": output.chance } }) })
        posts.push({ "type": "damage_item" })
        let custom = { "type": "lychee:block_clicking", "block_in": block, "post": posts }
        if (item !== "minecraft:air") { custom.item_in = { item: item } }
        e.custom(custom)
    }

    leftClicking('minecraft:bedrock', 'technicresources:empty', [{ id: 'technicresources:bedrock_shard', count: 1, chance: 0.35 }])
    leftClicking('minecraft:bedrock', 'minecraft:iron_pickaxe', [{ id: "minecraft:coal", chance: 0.075, count: 1 }, { id: "minecraft:redstone", chance: 0.075, count: 1 }])
    leftClicking('technicresources:dirt', 'technicresources:bedrock_scraper', [{ id: "technicresources:oak_sprout", chance: 0.2, count: 1 }])
    leftClicking('minecraft:bedrock', 'technicresources:bedrock_scraper', [{ id: "technicresources:stone_pebble", chance: 0.45, count: 1 }, { id: "technicresources:andesite_pebble", chance: 0.35, count: 1 }, { id: "technicresources:diorite_pebble", chance: 0.35, count: 1 }, { id: "technicresources:granite_pebble", chance: 0.35, count: 1 }, { id: "technicresources:deepslate_pebble", chance: 0.2, count: 1 }, { id: "technicresources:tuff_pebble", chance: 0.2, count: 1 }, { id: "technicresources:calcite_pebble", chance: 0.2, count: 1 }])

})