ServerEvents.recipes(event => {

    compact(3, 'custommachinery:custom_machine_item', { machine: "technicresources:compressor" }, 1, 'minecraft:coal_block', [
        {
            "type": "compactcrafting:mixed",
            "pattern": [
                ["B", "B", "B"],
                ["B", "E", "B"],
                ["B", "B", "B"],
            ]
        },
        {
            "type": "compactcrafting:mixed",
            "pattern": [
                ["B", "C", "B"],
                ["C", "D", "C"],
                ["B", "C", "B"],
            ]
        },
        {
            "type": "compactcrafting:filled",
            "component": "A"
        }
    ], {
        'A': {
            "type": "compactcrafting:block",
            "block": "compactmachines:wall"
        },
        'B': {
            "type": "compactcrafting:block",
            "block": "create:cut_granite"
        },
        'C': {
            "type": "compactcrafting:block",
            "block": "minecraft:redstone_block"
        },
        'D': {
            "type": "compactcrafting:block",
            "block": "minecraft:iron_block"
        },
        'E': {
            "type": "compactcrafting:block",
            "block": "create:shaft",
            "properties": {
                "axis": ["y"]
            }
        },
    })


    function compact(size,output,nbt,count,catalyst,layers,keys) {
        event.custom({
            "type": "compactcrafting:miniaturization",
            "recipeSize": size,
            "layers": layers,
            "catalyst": {
                "id": catalyst,
                "Count": 1
            },
            "components": keys,
            "outputs": [
                {
                    "id": output,
                    "Count": count,
                    "tag": nbt
                }
            ]
        })
    }

})

