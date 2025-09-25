ServerEvents.recipes(e => {
    function crushing(input, output, count) {
        e.custom({ 'type': 'actuallyadditions:crushing', 'ingredient': { 'item': input }, 'result': { 'item': output, 'count': count } })
    }
})