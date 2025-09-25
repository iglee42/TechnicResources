
ServerEvents.recipes(e => {
        function smeltingBoth(input, output, xp) {
                e.smelting(output, input).xp(xp)
                e.blasting(output, input).xp(xp)
        }
        function smelting(input, output, xp) {
                e.smelting(output, input).xp(xp)
        }
        function blasting(input, output, xp) {
                e.blasting(output, input).xp(xp)
        }
})