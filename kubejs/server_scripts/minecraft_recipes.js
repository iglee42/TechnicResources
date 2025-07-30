
ServerEvents.recipes(event => {
        //---------------Removes---------------//


        //---------------Changing Ingrdient---------------//

        //---------------Adding Recipes---------------//
        event.shaped(Item.of('create:stone_alloy_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:stone_alloy' })
        event.shapeless('9x create:stone_alloy', ['create:stone_alloy_block'])
        event.shaped(Item.of('create:brass_alloy_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:brass_alloy' })
        event.shapeless('9x create:brass_alloy', ['create:brass_alloy_block'])
        event.shaped(Item.of('create:copper_alloy_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:copper_alloy' })
        event.shapeless('9x create:copper_alloy', ['create:copper_alloy_block'])
        event.shaped(Item.of('create:granite_alloy_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:granite_alloy' })
        event.shapeless('9x create:granite_alloy', ['create:granite_alloy_block'])
        event.shaped(Item.of('create:diorite_alloy_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:diorite_alloy' })
        event.shapeless('9x create:diorite_alloy', ['create:diorite_alloy_block'])
        event.shaped(Item.of('create:tuff_alloy_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:tuff_alloy' })
        event.shapeless('9x create:tuff_alloy', ['create:tuff_alloy_block'])
        event.shaped(Item.of('create:deepslate_alloy_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:deepslate_alloy' })
        event.shapeless('9x create:deepslate_alloy', ['create:deepslate_alloy_block'])
        event.shaped(Item.of('create:blackstone_alloy_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:blackstone_alloy' })
        event.shapeless('9x create:blackstone_alloy', ['create:blackstone_alloy_block'])
        event.shaped(Item.of('create:basalt_alloy_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:basalt_alloy' })
        event.shapeless('9x create:basalt_alloy', ['create:basalt_alloy_block'])
        event.shaped(Item.of('create:source_alloy_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:source_alloy' })
        event.shapeless('9x create:source_alloy', ['create:source_alloy_block'])
        event.shaped(Item.of('create:chorus_alloy_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:chorus_alloy' })
        event.shapeless('9x create:chorus_alloy', ['create:chorus_alloy_block'])
        event.shaped(Item.of('create:red_iron_alloy_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:red_iron_alloy' })
        event.shapeless('9x create:red_iron_alloy', ['create:red_iron_alloy_block'])


        //-----------Chapter 0----------------//

        event.shaped(Item.of('technicresources:bedrock_stick'), ['F ', 'F '], { 'F': 'technicresources:bedrock_shard' })
        event.shaped(Item.of('technicresources:bedrock_scraper_head'), ['F ', ' F'], { 'F': 'technicresources:bedrock_shard' })
        event.shaped(Item.of('technicresources:bedrock_scraper'), [' H', 'S '], { 'S': 'technicresources:bedrock_stick', 'H': 'technicresources:bedrock_scraper_head' })
        //Pebbles
        event.shaped(Item.of('minecraft:cobblestone'), ['PP', 'PP'], { 'P': 'technicresources:stone_pebble' })
        event.shaped(Item.of('minecraft:cobbled_deepslate'), ['PP', 'PP'], { 'P': 'technicresources:deepslate_pebble' })
        event.shaped(Item.of('minecraft:granite'), ['PP', 'PP'], { 'P': 'technicresources:granite_pebble' })
        event.shaped(Item.of('minecraft:diorite'), ['PP', 'PP'], { 'P': 'technicresources:diorite_pebble' })
        event.shaped(Item.of('minecraft:andesite'), ['PP', 'PP'], { 'P': 'technicresources:andesite_pebble' })
        event.shaped(Item.of('minecraft:calcite'), ['PP', 'PP'], { 'P': 'technicresources:calcite_pebble' })
        event.shaped(Item.of('minecraft:tuff'), ['PP', 'PP'], { 'P': 'technicresources:tuff_pebble' })
        event.shaped(Item.of('minecraft:netherrack'), ['PP', 'PP'], { 'P': 'technicresources:netherrack_pebble' })
        event.shaped(Item.of('minecraft:blackstone'), ['PP', 'PP'], { 'P': 'technicresources:blackstone_pebble' })
        event.shaped(Item.of('minecraft:basalt'), ['PP', 'PP'], { 'P': 'technicresources:basalt_pebble' })
        event.shaped(Item.of('minecraft:end_stone'), ['PP', 'PP'], { 'P': 'technicresources:endstone_pebble' })

        event.shapeless(Item.of('create:andesite_alloy', 2), ['technicresources:andesite_pebble', 'technicresources:tuff_pebble'])

        //event.shapeless(Item.of('createcasing:stone_cogwheel'), ['create:shaft', 'minecraft:cobblestone'])
        //event.shapeless(Item.of('createcasing:stone_large_cogwheel'), ['createcasing:stone_cogwheel', 'minecraft:cobblestone'])
        //event.shapeless(Item.of('createcasing:stone_large_cogwheel'), ['create:shaft', 'minecraft:cobblestone', 'minecraft:cobblestone'])

        event.shaped(Item.of('technicresources:stone_hammer'), [' C ', ' SC', 'S  '], { 'C': 'minecraft:cobblestone', 'S': "technicresources:deepslate_stick" })
        event.shaped(Item.of('technicresources:metal_hammer'), [' C ', ' SC', 'S  '], { 'C': 'minecraft:iron_ingot', 'S': "technicresources:deepslate_stick" })
        event.shaped(Item.of('technicresources:deepslate_stick', 2), ['D', 'D'], { 'D': 'minecraft:cobbled_deepslate' })

        event.shaped(Item.of('technicresources:small_bedrock'), ['SS', 'SS'], { 'S': 'technicresources:bedrock_shard' })

        event.shaped(Item.of('technicresources:room_upgrader'), ['WWW', 'WIW', 'WWW'], { 'W': 'technicresources:small_bedrock', 'I': 'minecraft:iron_pickaxe' })

        //-------------Chapter 1----------------//

        event.shaped(Item.of('technicresources:breakable_bedrock'), ['WWW', 'WWW', 'WWW'], { 'W': 'technicresources:small_bedrock' })
        event.shaped(Item.of('technicresources:compressed_breakable_bedrock'), ['WWW', 'WWW', 'WWW'], { 'W': 'technicresources:breakable_bedrock' })

        event.shaped(Item.of('technicresources:room_upgrader_2'), ['WWW', 'WIW', 'WWW'], { 'W': 'technicresources:compressed_breakable_bedrock', 'I': 'minecraft:redstone_block' })

        event.shaped(Item.of('minecraft:oak_sapling'), ['WWW', 'WWW', 'WWW'], { 'W': 'technicresources:oak_sprout' })


        //event.shaped(Item.of('technicresources:bedrock_breaker'), ['WWW', 'WIW', 'WWW'], { 'W': 'technicresources:compressed_wall2', 'I': 'minecraft:diamond_pickaxe' })





})