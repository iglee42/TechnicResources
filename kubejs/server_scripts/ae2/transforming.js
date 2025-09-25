ServerEvents.recipes(e => {
    function transforming(inputs, output, count) {
        e.custom({ 'type': 'ae2:transform', 'ingredients': [{ 'item': inputs[0] }, { 'item': inputs[1] }, { 'item': inputs[2] }], 'result': { 'count': count, 'id': output } })
    }
    function transformingExplo(inputs, output, count) {
        e.custom({ 'type': 'ae2:transform', 'circumstance': { 'type': 'explosion' }, 'ingredients': [{ 'item': inputs[0] }, { 'item': inputs[1] }, { 'item': inputs[2] }], 'result': { 'count': count, 'id': output } })
    }
    function transformingFluid(inputs, fluid, output, count) {
        e.custom({ 'type': 'ae2:transform', 'circumstance': { 'type': 'fluid', 'tag': fluid }, 'ingredients': [{ 'item': inputs[0] }, { 'item': inputs[1] }, { 'item': inputs[2] }], 'result': { 'count': count, 'id': output } })
    }
})