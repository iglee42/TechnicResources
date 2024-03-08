ServerEvents.tags('block', event => {
    event.add('minecraft:mineable/pickaxe',['minecraft:crafting_table'])
    event.add('technicresources:bedrock_breaker','minecraft:bedrock','minecraft:torch','minecraft:warped_wall_sign','ftbquests:barrier','minecraft:wall_torch')
    event.remove('minecraft:mineable/axe',['create:cogwheel','create:large_cogwheel','minecraft:crafting_table'])
})