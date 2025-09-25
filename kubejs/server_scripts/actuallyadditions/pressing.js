ServerEvents.recipes(e => {
    function pressing(input, amount, output) {
        e.custom({ 'type': 'actuallyadditions:pressing', 'fluid': { 'amount': amount, 'id': input }, 'ingredient': { 'item': output } })
    }
})