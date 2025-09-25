ServerEvents.recipes(e => {
    function inscribing3(bottom, middle, top, output, count, mode) {
        e.custom({ 'type': 'ae2:inscriber', 'ingredients': { 'bottom': { 'item': bottom }, 'middle': { 'item': middle }, 'top': { 'item': top } }, 'mode': mode, 'result': { 'count': count, 'id': output } })
    }
    function inscribing2(middle, top, output, count, mode) {
        e.custom({ 'type': 'ae2:inscriber', 'ingredients': { 'middle': { 'item': middle }, 'top': { 'item': top } }, 'mode': mode, 'result': { 'count': count, 'id': output } })
    }
})