BlockEvents.broken(event => {
    function hammer(block, drop) {
        if (event.getBlock().getId() != block) return;
        if (event.getEntity().getMainHandItem().getId() != 'technicresources:stone_hammer') return;
        event.getBlock().popItem(drop)
        event.getBlock().set('minecraft:air')
        event.cancel()
    }

    hammer('minecraft:cobblestone','minecraft:gravel')
    
})