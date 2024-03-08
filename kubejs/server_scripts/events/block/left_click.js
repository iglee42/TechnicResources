const $Random = Java.loadClass('java.util.Random')

BlockEvents.leftClicked(event => {
    let player = event.player
    if (event.getBlock().id != 'compactmachines:solid_wall') return
    if (event.getItem().id == 'minecraft:air') {
        player.give('technicresources:wall_fragment')
        player.attack(1)
    } else if (event.getItem().id == 'technicresources:wall_spoon') {
        let random = new $Random();
        if (random.nextInt(20) === 0)
            player.give('technicresources:stone_pebble')
        if (random.nextInt(20) === 0)
            player.give('technicresources:andesite_pebble')
        if (random.nextInt(20) === 0)
            player.give('technicresources:granite_pebble')
        if (random.nextInt(20) === 0)
            player.give('technicresources:diorite_pebble')
        if (random.nextInt(30) === 0)
            player.give('technicresources:deepslate_pebble')
        if (random.nextInt(35) === 0)
            player.give('technicresources:tuff_pebble')
        if (random.nextInt(35) === 0)
            player.give('technicresources:calcite_pebble')
        player.damageHeldItem()
    } else if (event.getItem().id == 'minecraft:iron_pickaxe') {
        let random = new $Random();
        if (random.nextInt(20) === 0)
            player.give('compactmachines:wall')
        if (player.stages.has('chapter_0.5')) {
            if (random.nextInt(20) === 0)
                player.give('minecraft:coal')
            if (random.nextInt(20) === 0)
                player.give('minecraft:redstone')
        }
        player.damageHeldItem()
    }
});