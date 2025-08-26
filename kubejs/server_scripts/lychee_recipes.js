ServerEvents.recipes(e => {
    function leftClick(block, item, outputs) {
        let posts = []
        outputs.forEach(output => {
            posts.push({
                "type": "drop_item",
                "id": output.id,
                "count": output.count,
                "if": {
                    "type": "chance",
                    "chance": output.chance
                }
            })
        })
        let custom = {
            "type": "lychee:block_clicking",
            "block_in": block,
            "post": posts
        }
        if (item !== "minecraft:air") {
            custom.item_in = {"item": item}
        }
        e.custom(custom)
    }

    leftClick('minecraft:bedrock', 'technicresources:empty', [
        {
            id: 'technicresources:bedrock_shard',
            count: 1,
            chance: 0.35
        }
    ])
})