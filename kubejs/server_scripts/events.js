PlayerEvents.loggedIn(event =>{
    if (!event.player.stages.has('new_player')){
        event.player.stages.add('new_player')
        event.player.getInventory().clear()
        //event.player.give(Item.of('akashictome:tome', '{"akashictome:is_morphing":1b,"akashictome:data":{tconstruct:{id:"tconstruct:materials_and_you",Count:1b},industrialforegoing:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"industrialforegoing:industrial_foregoing"}},compactmachines:{id:"compactmachines:personal_shrinking_device",Count:1b,tag:{"akashictome:displayName":{text:"Personal Shrinking Device"},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Personal Shrinking Device"}]}\'}}},powah:{id:"powah:book",Count:1b},simplyjetpacks:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"simplyjetpacks:guidebook"}},ftbquests:{id:"ftbquests:book",Count:1b,tag:{"akashictome:displayName":{text:"Quest Book"},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Quest Book"}]}\'}}},immersiveengineering:{id:"immersiveengineering:manual",Count:1b},advancedperipherals:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"advancedperipherals:manual"}},pedestals:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"pedestals:manual"}},bigreactors:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"bigreactors:erguide"}},extendedcrafting:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"extendedcrafting:guide"}},botania:{id:"botania:lexicon",Count:1b,tag:{"botania:elven_unlock":1b}},ars_nouveau:{id:"ars_nouveau:worn_notebook",Count:1b},thermal:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"thermal:guidebook"}},rftoolsbase:{id:"rftoolsbase:manual",Count:1b},twilightforest:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"twilightforest:guide"}},cookingforblockheads:{id:"cookingforblockheads:no_filter_edition",Count:1b},cyclic:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"cyclic:cyclic_guide_book"}}}}'))
        //event.player.give('ftbquests:book')
    }
})

const Random = Java.loadClass('java.util.Random')

BlockEvents.leftClicked(event =>{
    let player = event.player
    if (event.getBlock().id != 'compactmachines:solid_wall') return
    if (event.getItem().id == 'minecraft:air'){
        player.give('technicresources:wall_fragment')
        player.attack(1)
    } else if (event.getItem().id == 'technicresources:wall_spoon'){
        let random = new Random();
        if (random.nextInt(20) === 0)
            player.give('technicresources:stone_pebble')
        if (random.nextInt(20) === 0)
            player.give('technicresources:andesite_pebble')
        if (random.nextInt(20) === 0)
            player.give('technicresources:granite_pebble')
        if (random.nextInt(20) === 0)
            player.give('technicresources:diorite_pebble')
        if (random.nextInt(35) === 0)
            player.give('technicresources:deepslate_pebble')
        if (random.nextInt(35) === 0)
            player.give('technicresources:tuff_pebble')
        if (random.nextInt(35) === 0)
            player.give('technicresources:calcite_pebble')
        player.damageHeldItem()
    } else if (event.getItem().id == 'minecraft:iron_pickaxe'){
        let random = new Random();
        if (random.nextInt(30) === 0)
            player.give('compactmachines:wall')
        if (random.nextInt(20) === 0)
            player.give('minecraft:coal')
        if (random.nextInt(20) === 0)
            player.give('minecraft:redstone')
        player.damageHeldItem()
    }
});

BlockEvents.rightClicked(event=>{
    let server = event.getServer()
    let player = event.getEntity()
    let block = event.getBlock()
    let item = event.getItem()
    if (item.id == 'technicresources:endstone_pebble' && block.id == 'compactmachines:machine_small') {
        if (block.getDown().id == 'minecraft:bedrock' && !player.stages.has('use_bedrock_remover')) {
            event.getItem().count -= 1
            player.stages.add('use_bedrock_remover')
            server.runCommandSilent("fill " + (block.x - 1) + " " + (block.y + 3) + " " + (block.z + 1) + " " + (block.x + 3) + " " + (block.y + 3) + " " + (block.z - 1) + " air replace #technicresources:bedrock_remover")
            server.runCommandSilent("playsound minecraft:block.anvil.land master @a " + block.x + " " + block.y + " " + block.z + " 0.25")
            server.scheduleInTicks(1 * 20, callback => {
                server.runCommandSilent("fill " + (block.x - 1) + " " + (block.y + 2) + " " + (block.z + 1) + " " + (block.x + 3) + " " + (block.y + 2) + " " + (block.z - 1) + " air replace #technicresources:bedrock_remover")
                server.runCommandSilent("playsound minecraft:block.anvil.land master @a " + block.x + " " + block.y + " " + block.z + " 0.25")
            });
            server.scheduleInTicks(2 * 20, callback => {
                server.runCommandSilent("fill " + (block.x - 1) + " " + (block.y + 1) + " " + (block.z + 1) + " " + (block.x + 3) + " " + (block.y + 1) + " " + (block.z - 1) + " air replace #technicresources:bedrock_remover")
                server.runCommandSilent("playsound minecraft:block.anvil.land master @a " + block.x + " " + block.y + " " + block.z + " 0.25")
            });
            server.scheduleInTicks(3 * 20, callback => {
                server.runCommandSilent("fill " + (block.x - 1) + " " + (block.y) + " " + (block.z + 1) + " " + (block.x + 3) + " " + (block.y - 1) + " " + (block.z - 1) + " air replace #technicresources:bedrock_remover")
                server.runCommandSilent("playsound minecraft:block.anvil.land master @a " + block.x + " " + block.y + " " + block.z + " 0.25")
            });
        } else if (player.stages.has('use_bedrock_remover')) {
            player.displayClientMessage(Text.red('You already used a bedrock remover'),true)
        }
    }
    if (item.id == 'technicresources:compact_upgrader' && block.id == 'compactmachines:machine_tiny' ) {
        block.set('compactmachines:machine_small') 
        item.setCount(item.count - 1)
    }
});