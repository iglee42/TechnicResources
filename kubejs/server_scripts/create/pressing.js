ServerEvents.recipes(e => {
    function pressing(ingredient, result) {
        e.custom({ "type": "create:pressing", "ingredients": [{ "item": ingredient }], "results": [{ "item": result }] })
    }
})