
ServerEvents.recipes(event => {
        //---------------Removes---------------//


        //---------------Changing Ingrdient---------------//

        //---------------Adding Recipes---------------//



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

        event.shapeless(Item.of('createcasing:stone_cogwheel'), ['create:shaft', 'minecraft:cobblestone'])
        event.shapeless(Item.of('createcasing:stone_large_cogwheel'), ['createcasing:stone_cogwheel', 'minecraft:cobblestone'])
        event.shapeless(Item.of('createcasing:stone_large_cogwheel'), ['create:shaft', 'minecraft:cobblestone', 'minecraft:cobblestone'])

        event.shaped(Item.of('technicresources:stone_hammer'), [' C ', ' SC', 'S  '], { 'C': 'minecraft:cobblestone', 'S': "technicresources:deepslate_stick" })
        event.shaped(Item.of('technicresources:metal_hammer'), [' C ', ' SC', 'S  '], { 'C': 'minecraft:iron_ingot', 'S': "technicresources:deepslate_stick" })
        event.shaped(Item.of('technicresources:deepslate_stick', 2), ['D', 'D'], { 'D': 'minecraft:cobbled_deepslate' })

        event.shaped(Item.of('technicresources:small_bedrock'), ['SS', 'SS'], { 'S': 'technicresources:bedrock_shard' })

        event.shaped(Item.of('technicresources:room_upgrader'), ['WWW', 'WIW', 'WWW'], { 'W': 'technicresources:small_bedrock', 'I': 'minecraft:iron_pickaxe' })

        //-------------Chapter 1----------------//

        event.shaped(Item.of('technicresources:breakable_bedrock'), ['WWW', 'WWW', 'WWW'], { 'W': 'technicresources:small_bedrock' })
        event.shaped(Item.of('technicresources:compressed_breakable_bedrock'), ['WWW', 'WWW', 'WWW'], { 'W': 'technicresources:breakable_bedrock' })

        event.shaped(Item.of('technicresources:room_upgrader_2'), ['WWW', 'WIW', 'WWW'], { 'W': 'technicresources:compressed_breakable_bedrock', 'I': 'minecraft:redstone_block' })

        //event.shaped(Item.of('technicresources:bedrock_breaker'), ['WWW', 'WIW', 'WWW'], { 'W': 'technicresources:compressed_wall2', 'I': 'minecraft:diamond_pickaxe' })





})