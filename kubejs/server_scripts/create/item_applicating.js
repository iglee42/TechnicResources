ServerEvents.recipes(e => {
    function itemApplicating(input, item, output) {
        e.custom({ "type": "create:item_application", "ingredients": [{ "item": input }, { "item": item }], "results": [{ "id": output }] })
    }

    // Casings
    itemApplicating('minecraft:stripped_oak_wood', 'create:stone_alloy', 'createcasing:stone_casing')
    itemApplicating('minecraft:stripped_spruce_wood', 'create:andesite_alloy', 'create:andesite_casing')
    itemApplicating('minecraft:stripped_dark_oak_wood', 'create:brass_alloy', 'create:brass_casing')
    itemApplicating('minecraft:stripped_acacia_wood', 'create:copper_alloy', 'create:copper_casing')
    itemApplicating('minecraft:stripped_birch_wood', 'create:granite_alloy', 'createcasing:granite_casing')
    itemApplicating('minecraft:stripped_jungle_wood', 'create:diorite_alloy', 'createcasing:diorite_casing')
    itemApplicating('minecraft:stripped_mangrove_wood', 'create:tuff_alloy', 'createcasing:tuff_casing')
    itemApplicating('minecraft:stripped_cherry_wood', 'create:deepslate_alloy', 'createcasing:deepslate_casing')
    itemApplicating('minecraft:stripped_crimson_hyphae', 'create:blackstone_alloy', 'createcasing:blackstone_casing')
    itemApplicating('minecraft:stripped_warped_hyphae', 'create:basalt_alloy', 'createcasing:basalt_casing')
    itemApplicating('ars_nouveau:stripped_blue_archwood_wood', 'create:source_alloy', 'createcasing:source_casing')
    itemApplicating('ars_nouveau:stripped_green_archwood_wood', 'create:source_alloy', 'createcasing:source_casing')
    itemApplicating('ars_nouveau:stripped_red_archwood_wood', 'create:source_alloy', 'createcasing:source_casing')
    itemApplicating('ars_nouveau:stripped_purple_archwood_wood', 'create:source_alloy', 'createcasing:source_casing')
    itemApplicating('integrateddynamics:menril_wood_stripped', 'create:chorus_alloy', 'createcasing:chorus_casing')

    itemApplicating('create:copper_casing', 'create:iron_alloy', 'createcasing:iron_casing')
    itemApplicating('createcasing:iron_casing', 'create:red_iron_alloy', 'createcasing:red_iron_casing')
    itemApplicating('createcasing:iron_casing', 'create:zinc_alloy', 'createcasing:zinc_casing')
    itemApplicating('createcasing:zinc_casing', 'create:gold_alloy', 'createcasing:gold_casing')
    itemApplicating('createcasing:gold_casing', 'create:tin_alloy', 'createcasing:tin_casing')
    itemApplicating('createcasing:gold_casing', 'create:lead_alloy', 'createcasing:lead_casing')
    itemApplicating('createcasing:tin_casing', 'create:osmium_alloy', 'createcasing:osmium_casing')
    itemApplicating('createcasing:lead_casing', 'create:osmium_alloy', 'createcasing:osmium_casing')
    itemApplicating('createcasing:osmium_casing', 'create:electrum_alloy', 'createcasing:electrum_casing')
    itemApplicating('createcasing:osmium_casing', 'create:uranium_alloy', 'createcasing:uranium_casing')
    itemApplicating('createcasing:electrum_casing', 'create:netherite_alloy', 'createcasing:netherite_casing')
    itemApplicating('createcasing:uranium_casing', 'create:netherite_alloy', 'createcasing:netherite_casing')

    itemApplicating('createcasing:netherite_casing', 'create:shadow_steel', 'create:shadow_steel_casing')
    itemApplicating('createcasing:netherite_casing', 'create:refined_radiance', 'create:refined_radiance_casing')
})