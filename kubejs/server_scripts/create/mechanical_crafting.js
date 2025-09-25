ServerEvents.recipes(e => {
    function mechanicalCrafting(sequence, key, result, count, mirror) {
        e.custom({ "type": "create:mechanical_crafting", "pattern": sequence, "key": key, "result": { "item": result, "count": count }, "acceptMirrored": mirror })
    }
})