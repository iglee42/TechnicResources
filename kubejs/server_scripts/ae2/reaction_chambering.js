ServerEvents.recipes(e => {
    function reactionChambering(inputF, amount, inputs, counts, output, count, type, energy) {
        e.custom({ 'type': 'advanced_ae:reaction', 'input_energy': energy, 'input_fluid': { 'amount': amount, 'ingredient': { 'fluid': inputF } }, 'input_items': [{ 'amount': counts[0], 'ingredient': { 'item': inputs[0] } }, { 'amount': counts[1], 'ingredient': { 'item': inputs[1] } }, { 'amount': counts[2], 'ingredient': { 'item': inputs[2] } }], 'output': { '#': count, '#t': 'ae2:' + type, 'id': output } })
    }
    // type f = fluid, i = item
})