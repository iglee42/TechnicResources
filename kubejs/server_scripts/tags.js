ServerEvents.tags('block', event => {
    event.add('minecraft:mineable/pickaxe',['minecraft:crafting_table'])
    event.add('technicresources:bedrock_breaker','minecraft:bedrock','minecraft:torch','minecraft:warped_wall_sign','ftbquests:barrier','minecraft:wall_torch')
    event.add('technicresources:start_break','minecraft:torch','minecraft:warped_wall_sign','ftbquests:barrier','minecraft:wall_torch')
    event.remove('minecraft:mineable/axe',['minecraft:crafting_table'])
})