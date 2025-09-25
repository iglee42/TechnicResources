ServerEvents.recipes(e => {
    function fermenting(input, amountI, output, amountO, time) {
        e.custom({ 'type': 'actuallyadditions:fermenting', 'ingredient': { 'amount': amountI, 'id': input }, 'result': { 'amount': amountO, 'id': output }, 'time': time })
    }
})