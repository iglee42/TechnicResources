ServerEvents.tags('block', event => {
    event.add('minecraft:mineable/pickaxe',['minecraft:crafting_table','createcasing:stone_casing','createcasing:iron_casing'])
    event.add('technicresources:bedrock_breaker','minecraft:bedrock','minecraft:torch','minecraft:warped_wall_sign','ftbquests:barrier','minecraft:wall_torch')
    event.add('technicresources:start_break', 'minecraft:torch', 'minecraft:warped_wall_sign', 'ftbquests:barrier', 'minecraft:wall_torch')

    event.remove('minecraft:mineable/axe',['minecraft:crafting_table'])
})

ServerEvents.tags('item', event => {
    event.add('technicresources:pebbles', ['technicresources:blackstone_pebble', 'technicresources:calcite_pebble', 'technicresources:diorite_pebble', 'technicresources:granite_pebble', 'technicresources:andesite_pebble', 'technicresources:stone_pebble', 'technicresources:deepslate_pebble', 'technicresources:tuff_pebble', 'technicresources:netherrack_pebble', 'technicresources:endstone_pebble', 'technicresources:basalt_pebble'])
})