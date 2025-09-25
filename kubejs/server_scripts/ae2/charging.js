ServerEvents.recipes(e => {
    function charging(input, count, output) {
        e.custom({ 'type': 'ae2:charger', 'ingredient': { 'item': input }, 'result': { 'count': count, 'id': output } })
    }
})