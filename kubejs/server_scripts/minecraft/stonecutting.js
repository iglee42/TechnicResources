
ServerEvents.recipes(e => {
    function stoneCutting(input, output, count) {
        e.custom({ 'type': 'minecraft:stonecutting', 'ingredient': { 'item': input }, 'result': { 'count': count, 'id': output } })
    }
})