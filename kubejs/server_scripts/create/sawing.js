ServerEvents.recipes(e => {
    function sawing(input, output, count) {
        e.custom({ "type": "create:cutting", "ingredients": [input], "results": [{ "item": output, "count": count }], "processingTime": 50 })
    }
})