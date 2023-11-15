
ServerEvents.recipes(event => {
        //---------------Removes---------------//

        //---------------Changing Ingrdient---------------//
 
        //---------------Adding Recipes---------------//

        event.shaped(Item.of('technicresources:wall_spoon_handle'),[' F','F '],{'F':'technicresources:wall_fragment'})
        event.shaped(Item.of('technicresources:spoon_piece'),['FF','FF'],{'F':'technicresources:wall_fragment'})
        event.shapeless(Item.of('technicresources:wall_spoon'),['technicresources:wall_spoon_handle','technicresources:spoon_piece'])


        //-----------Chapter 0.5----------------//
        //Pebbles
        event.shaped(Item.of('minecraft:cobblestone'),['PP','PP'],{'P': 'technicresources:stone_pebble'})
        event.shaped(Item.of('minecraft:cobbled_deepslate'),['PP','PP'],{'P': 'technicresources:deepslate_pebble'})
        event.shaped(Item.of('minecraft:granite'),['PP','PP'],{'P': 'technicresources:granite_pebble'})
        event.shaped(Item.of('minecraft:diorite'),['PP','PP'],{'P': 'technicresources:diorite_pebble'})
        event.shaped(Item.of('minecraft:andesite'),['PP','PP'],{'P': 'technicresources:andesite_pebble'})
        event.shaped(Item.of('minecraft:calcite'),['PP','PP'],{'P': 'technicresources:calcite_pebble'})
        event.shaped(Item.of('minecraft:tuff'),['PP','PP'],{'P': 'technicresources:tuff_pebble'})
        event.shaped(Item.of('minecraft:netherrack'),['PP','PP'],{'P': 'technicresources:netherrack_pebble'})
        event.shaped(Item.of('minecraft:blackstone'),['PP','PP'],{'P': 'technicresources:blackstone_pebble'})
        event.shaped(Item.of('minecraft:basalt'),['PP','PP'],{'P': 'technicresources:basalt_pebble'})
        event.shaped(Item.of('minecraft:end_stone'), ['PP', 'PP'], { 'P': 'technicresources:endstone_pebble' })
        
        event.shapeless(Item.of('create:andesite_alloy', 2), ['technicresources:andesite_pebble', 'technicresources:tuff_pebble'])
        
        event.shapeless(Item.of('create:cogwheel'),['create:shaft','minecraft:cobblestone'])
        event.shapeless(Item.of('create:large_cogwheel'),['create:cogwheel','minecraft:cobblestone'])
        event.shapeless(Item.of('create:large_cogwheel'), ['create:shaft', 'minecraft:cobblestone', 'minecraft:cobblestone'])
        
        event.shaped(Item.of('technicresources:stone_hammer'),[' C ',' SC','S  '],{'C': 'minecraft:cobblestone','S': "technicresources:deepslate_stick"})
        event.shaped(Item.of('technicresources:deepslate_stick'), ['D', 'D'], { 'D': 'minecraft:cobbled_deepslate' })
        
        event.shaped(Item.of('technicresources:compact_upgrader'), ['WWW', 'WIW', 'WWW'], { 'W': 'compactmachines:wall', 'I': 'minecraft:iron_ingot' })
        
        //-----------Chapter 1----------------//



})