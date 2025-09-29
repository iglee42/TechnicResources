BlockEvents.broken(event => {
    function hammer(hammer, block, drop) {
        if (event.getBlock().getId() != block) return;
        if (event.getEntity().getMainHandItem().getId() != hammer) return;
        event.getBlock().popItem(drop)
        event.getBlock().set('minecraft:air')
    }

    hammer('technicresources:stone_hammer', 'minecraft:cobblestone', 'minecraft:gravel')
    hammer('technicresources:gold_hammer', 'minecraft:cobblestone', 'minecraft:gravel')
    hammer('technicresources:diamond_hammer', 'minecraft:cobblestone', 'minecraft:gravel')
    hammer('technicresources:gold_hammer', 'minecraft:gravel', 'minecraft:sand')
    hammer('technicresources:diamond_hammer', 'minecraft:gravel', 'minecraft:sand')
    hammer('technicresources:diamond_hammer', 'minecraft:sand', 'minecraft:dust')
    hammer('technicresources:netherite_hammer', 'minecraft:sand', 'minecraft:dust')

})