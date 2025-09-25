ServerEvents.recipes(e => {

    function pressingSequenced(transitionalItem) {
        return { "type": "create:pressing", "ingredients": [{ "item": transitionalItem }], "results": [{ "id": transitionalItem }] }
    }
    function deployingSequenced(transitionalItem, deployingItem) {
        return { "type": "create:deploying", "ingredients": [{ "item": transitionalItem }, { "item": deployingItem }], "keepHeldItem": false, "results": [{ "id": transitionalItem }] }
    }
    function sawingSequenced(transitionalItem) {
        return { "type": "create:cutting", "ingredients": [{ "item": transitionalItem }], "results": [{ "id": transitionalItem }], "processingTime": 50 }
    }
    function sequencedAssembling(ingredient, result, count, sequence, loops, transitionalItem) {
        e.custom({ "type": "create:sequenced_assembly", "ingredient": { "item": ingredient }, "loops": loops, "results": [{ "id": result, "count": count }], "sequence": sequence, "transitionalItem": { "item": transitionalItem } })
    }
})
