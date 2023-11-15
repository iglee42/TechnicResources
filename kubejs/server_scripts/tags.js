ServerEvents.tags('block',event=>{
    event.add('technicresources:bedrock_remover','minecraft:bedrock','minecraft:torch','minecraft:warped_wall_sign','ftbquests:barrier','minecraft:wall_torch')
    event.remove('minecraft:mineable/axe',['create:cogwheel','create:large_cogwheel'])
})