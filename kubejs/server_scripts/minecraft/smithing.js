
ServerEvents.recipes(e => {
        function smithing(input, addition, template, output) {
                e.custom({ 'type': 'minecraft:smithing_transform', 'addition': { 'item': addition }, 'base': { 'item': input }, 'result': { 'count': 1, 'id': output }, 'template': { 'item': template } })
        }
})