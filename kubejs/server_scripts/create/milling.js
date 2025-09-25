ServerEvents.recipes(e => {
    function milling(input, result) {
        e.custom({ "type": "create:milling", "ingredients": [{ "item": input }], "results": result, "processingTime": 50 })
    }
    milling('technicresources:oak_sprout', [{ "id": "minecraft:stick" }, { "chance": 0.25, "id": "minecraft:stick" }])
    milling('minecraft:gravel', [{ "chance": 0.6, "id": "minecraft:iron_nugget" }, { "chance": 0.6, "id": "minecraft:iron_nugget" }, { "chance": 0.6, "id": "minecraft:iron_nugget" }, { "id": "minecraft:flint" }])
})