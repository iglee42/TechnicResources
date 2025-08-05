
ServerEvents.recipes(event => {
        //---------------Removes---------------//


        //---------------Changing Ingrdient---------------//

        //---------------Adding Recipes---------------//

        // Alloys
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
        event.shaped(Item.of('create:iron_alloy_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:iron_alloy' })
        event.shapeless('9x create:iron_alloy', ['create:iron_alloy_block'])
        event.shaped(Item.of('create:zinc_alloy_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:zinc_alloy' })
        event.shapeless('9x create:zinc_alloy', ['create:zinc_alloy_block'])
        event.shaped(Item.of('create:gold_alloy_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:gold_alloy' })
        event.shapeless('9x create:gold_alloy', ['create:gold_alloy_block'])
        event.shaped(Item.of('create:tin_alloy_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:tin_alloy' })
        event.shapeless('9x create:tin_alloy', ['create:tin_alloy_block'])
        event.shaped(Item.of('create:lead_alloy_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:lead_alloy' })
        event.shapeless('9x create:lead_alloy', ['create:lead_alloy_block'])
        event.shaped(Item.of('create:osmium_alloy_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:osmium_alloy' })
        event.shapeless('9x create:osmium_alloy', ['create:osmium_alloy_block'])
        event.shaped(Item.of('create:electrum_alloy_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:electrum_alloy' })
        event.shapeless('9x create:electrum_alloy', ['create:electrum_alloy_block'])
        event.shaped(Item.of('create:uranium_alloy_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:uranium_alloy' })
        event.shapeless('9x create:uranium_alloy', ['create:uranium_alloy_block'])
        event.shaped(Item.of('create:netherite_alloy_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:netherite_alloy' })
        event.shapeless('9x create:netherite_alloy', ['create:netherite_alloy_block'])
        event.shaped(Item.of('create:shadow_steel_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:shadow_steel' })
        event.shapeless('9x create:shadow_steel', ['create:shadow_steel_block'])
        event.shaped(Item.of('create:refined_radiance_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:refined_radiance' })
        event.shapeless('9x create:refined_radiance', ['create:refined_radiance_block'])
        event.shaped(Item.of('create:red_iron_alloy_block'), ['AAA', 'AAA', 'AAA'], { 'A': 'create:red_iron_alloy' })
        event.shapeless('9x create:red_iron_alloy', ['create:red_iron_alloy_block'])

        event.shaped('create:millstone', ['A','B','C'],{'A': 'createcasing:stone_cogwheel', 'B': 'create:stone_alloy_block', 'C': '#c:stones'})
        
        // Dyes
        event.shaped('minecraft:dye_primer', ['A A', ' B '], { 'A': '#c:rods/wooden', 'B': '#minecraft:wooden_slabs' })
        event.shapeless('minecraft:white_dye', ['minecraft:dye_primer', 'minecraft:bone_meal', 'minecraft:bone_meal']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:white_dye', ['minecraft:dye_primer', 'minecraft:lily_of_the_valley']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:light_gray_dye', ['minecraft:dye_primer', 'minecraft:azure_bluet']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:light_gray_dye', ['minecraft:dye_primer', 'minecraft:oxeye_daisy']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:light_gray_dye', ['minecraft:dye_primer', 'minecraft:white_tulip']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:gray_dye', ['minecraft:dye_primer', 'minecraft:charcoal', 'minecraft:charcoal']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:black_dye', ['minecraft:dye_primer', 'minecraft:ink_sac', 'minecraft:ink_sac']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:black_dye', ['minecraft:dye_primer', 'minecraft:wither_rose']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:brown_dye', ['minecraft:dye_primer', 'minecraft:cocoa_beans', 'minecraft:cocoa_beans']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:red_dye', ['minecraft:dye_primer', 'minecraft:beetroot', 'minecraft:beetroot']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:red_dye', ['minecraft:dye_primer', 'minecraft:poppy']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:red_dye', ['minecraft:dye_primer', 'minecraft:red_tulip']).damageIngredient('minecraft:dye_primer')
        event.shapeless('2x minecraft:red_dye', ['minecraft:dye_primer', 'minecraft:rose_bush']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:orange_dye', ['minecraft:dye_primer', 'ars_nouveau:bombegranate_pod', 'ars_nouveau:bombegranate_pod']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:orange_dye', ['minecraft:dye_primer', 'ars_nouveau:wilden_spike', 'ars_nouveau:wilden_spike']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:orange_dye', ['minecraft:dye_primer', 'minecraft:orange_tulip']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:orange_dye', ['minecraft:dye_primer', 'minecraft:torchflower']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:yellow_dye', ['minecraft:dye_primer', '#c:dusts/sulfur', '#c:dusts/sulfur']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:yellow_dye', ['minecraft:dye_primer', 'minecraft:dandelion']).damageIngredient('minecraft:dye_primer')
        event.shapeless('2x minecraft:yellow_dye', ['minecraft:dye_primer', 'minecraft:sunflower']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:pink_dye', ['minecraft:dye_primer', 'ars_nouveau:magebloom', 'ars_nouveau:magebloom']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:pink_dye', ['minecraft:dye_primer', 'minecraft:pink_tulip']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:pink_dye', ['minecraft:dye_primer', 'minecraft:pink_petals']).damageIngredient('minecraft:dye_primer')
        event.shapeless('2x minecraft:pink_dye', ['minecraft:dye_primer', 'minecraft:peony']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:magenta_dye', ['minecraft:dye_primer', 'minecraft:allium']).damageIngredient('minecraft:dye_primer')
        event.shapeless('2x minecraft:magenta_dye', ['minecraft:dye_primer', 'minecraft:lilac']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:purple_dye', ['minecraft:dye_primer', 'ars_nouveau:sourceberry_bush', 'ars_nouveau:sourceberry_bush']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:purple_dye', ['minecraft:dye_primer', 'ars_nouveau:bastion_pod', 'ars_nouveau:bastion_pod']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:blue_dye', ['minecraft:dye_primer', 'minecraft:lapis_lazuli', 'minecraft:lapis_lazuli']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:blue_dye', ['minecraft:dye_primer', 'minecraft:cornflower']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:light_blue_dye', ['minecraft:dye_primer', 'ars_nouveau:frostaya_pod', 'ars_nouveau:frostaya_pod']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:light_blue_dye', ['minecraft:dye_primer', 'minecraft:blue_orchid']).damageIngredient('minecraft:dye_primer')
        event.shapeless('2x minecraft:cyan_dye', ['minecraft:dye_primer', 'minecraft:pitcher_plant']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:green_dye', ['minecraft:dye_primer', 'minecraft:cactus', 'minecraft:cactus']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:lime_dye', ['minecraft:dye_primer', 'ars_nouveau:mendosteen_pod', 'ars_nouveau:mendosteen_pod']).damageIngredient('minecraft:dye_primer')
        event.shapeless('minecraft:lime_dye', ['minecraft:dye_primer', 'minecraft:sea_pickle', 'minecraft:sea_pickle']).damageIngredient('minecraft:dye_primer')
        
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

        event.shaped(Item.of('minecraft:oak_sapling'), ['WWW', 'WWW', 'WWW'], { 'W': 'technicresources:oak_sprout' })
        event.shaped(Item.of('minecraft:spruce_sapling'), ['WWW', 'WWW', 'WWW'], { 'W': 'technicresources:spruce_sprout' })
        event.shaped(Item.of('minecraft:dark_oak_sapling'), ['WWW', 'WWW', 'WWW'], { 'W': 'technicresources:dark_oak_sprout' })
        event.shaped(Item.of('minecraft:birch_sapling'), ['WWW', 'WWW', 'WWW'], { 'W': 'technicresources:birch_sprout' })
        event.shaped(Item.of('minecraft:jungle_sapling'), ['WWW', 'WWW', 'WWW'], { 'W': 'technicresources:jungle_sprout' })
        event.shaped(Item.of('minecraft:acacia_sapling'), ['WWW', 'WWW', 'WWW'], { 'W': 'technicresources:acacia_sprout' })
        event.shaped(Item.of('minecraft:cherry_sapling'), ['WWW', 'WWW', 'WWW'], { 'W': 'technicresources:cherry_sprout' })
        event.shaped(Item.of('minecraft:mangrove_propagule'), ['WWW', 'WWW', 'WWW'], { 'W': 'technicresources:mangrove_sprout' })
        event.shaped(Item.of('ars_nouveau:green_archwood_sapling'), ['WWW', 'WWW', 'WWW'], { 'W': 'technicresources:green_archwood_sprout' })
        event.shaped(Item.of('ars_nouveau:red_archwood_sapling'), ['WWW', 'WWW', 'WWW'], { 'W': 'technicresources:red_archwood_sprout' })
        event.shaped(Item.of('ars_nouveau:purple_archwood_sapling'), ['WWW', 'WWW', 'WWW'], { 'W': 'technicresources:purple_archwood_sprout' })
        event.shaped(Item.of('ars_nouveau:blue_archwood_sapling'), ['WWW', 'WWW', 'WWW'], { 'W': 'technicresources:blue_archwood_sprout' })
        event.shaped(Item.of('integrateddynamics:menril_sapling'), ['WWW', 'WWW', 'WWW'], { 'W': 'technicresources:menril_sprout' })
        event.shaped(Item.of('naturesaura:ancient_sapling'), ['WWW', 'WWW', 'WWW'], { 'W': 'technicresources:ancient_sprout' })
        event.shaped(Item.of('iska_utils:rubber_sapling'), ['WWW', 'WWW', 'WWW'], { 'W': 'technicresources:rubber_sprout' })


        //event.shaped(Item.of('technicresources:bedrock_breaker'), ['WWW', 'WIW', 'WWW'], { 'W': 'technicresources:compressed_wall2', 'I': 'minecraft:diamond_pickaxe' })





})