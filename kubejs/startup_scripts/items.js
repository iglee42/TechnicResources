const ModsUtils = Java.loadClass('fr.iglee42.igleelib.api.utils.ModsUtils')

global.pebbles = ['stone', 'granite', 'diorite', 'andesite', 'calcite', 'tuff', 'deepslate', 'netherrack', 'blackstone', 'basalt', 'endstone']

StartupEvents.registry('item', e => {
    /************************************Normal Item************************************/

    /**************Chapter 0**************/
    register('bedrock_shard', 'Bedrock Shard')
    register('bedrock_scraper', 'Bedrock Scraper').unstackable().maxDamage(64)
    register('bedrock_stick', 'Bedrock Stick')
    register('bedrock_scraper_head', 'Bedrock Scraper Head')
    global.pebbles.forEach((p) => {
        registerWithTexture(p + '_pebble', ModsUtils.getUpperName(p, ' ') + ' Pebble', 'technicresources:item/pebbles/' + p)
    });
    registerTool('stone_hammer', 'Stone Hammer', 'pickaxe', 'stone')
    register('deepslate_stick', 'Deepslate Stick')
    register('room_upgrader', 'Room Upgrader').unstackable()

    /**************Chapter 1**************/

    register('bedrock_breaker', 'Bedrock Breaker').unstackable()

    register('room_upgrader_2', 'Room Upgrader Tier 2').unstackable()

    /**************Gears**************/
    registerTag('gears', 'compressed_iron_gear', 'Compressed Iron Gear').tag('forge:gears').tag('forge:gears/compressed_iron')
    registerTag('gears', 'uraninite_gear', 'Uraninite Gear').tag('forge:gears').tag('forge:gears/uraninite')
    registerTag('gears', 'redstone_gear', 'Redstone Gear').tag('forge:gears').tag('forge:gears/redstone')
    registerTag('gears', 'emerald_gear', 'Emerald Gear').tag('forge:gears').tag('forge:gears/emerald')
    registerTag('gears', 'lapis_lazuli_gear', 'Lapis Lazuli Gear').tag('forge:gears').tag('forge:gears/lapis_lazuli')
    registerTag('gears', 'quartz_gear', 'Quartz Gear').tag('forge:gears').tag('forge:gears/quartz')
    registerTag('gears', 'amethyst_gear', 'Amethyst Gear').tag('forge:gears').tag('forge:gears/amethyst')
    registerTag('gears', 'zinc_gear', 'Zinc Gear').tag('forge:gears').tag('forge:gears/zinc')
    registerTag('gears', 'andesite_alloy_gear', 'Andesite Alloy Gear').tag('forge:gears').tag('forge:gears/andesite_alloy')
    registerTag('gears', 'brass_gear', 'Brass Gear').tag('forge:gears').tag('forge:gears/brass')
    registerTag('gears', 'electrum_gear', 'Electrum Gear').tag('forge:gears').tag('forge:gears/electrum')
    registerTag('gears', 'certus_quartz_gear', 'Certus Quartz Gear').tag('forge:gears').tag('forge:gears/certus_quartz')
    registerTag('gears', 'fluix_gear', 'Fluix Gear').tag('forge:gears').tag('forge:gears/fluix')
    registerTag('gears', 'crystalized_menril_gear', 'Crystallized Menril Gear').tag('forge:gears').tag('forge:gears/crystalized_menril')
    registerTag('gears', 'crystalized_chorus_gear', 'Crystallized Chorus Gear').tag('forge:gears').tag('forge:gears/crystalized_chorus')
    registerTag('gears', 'desh_gear', 'Desh Gear').tag('forge:gears').tag('forge:gears/desh')
    registerTag('gears', 'ostrum_gear', 'Ostrum Gear').tag('forge:gears').tag('forge:gears/ostrum')
    registerTag('gears', 'calorite_gear', 'Calorite Gear').tag('forge:gears').tag('forge:gears/calorite')
    registerTag('gears', 'bronze_gear', 'Bronze Gear').tag('forge:gears').tag('forge:gears/bronze')
    registerTag('gears', 'steel_gear', 'Steel Gear').tag('forge:gears').tag('forge:gears/steel')
    registerTag('gears', 'refined_obsidian_gear', 'Refined Obsidian Gear').tag('forge:gears').tag('forge:gears/refined_obsidian')
    registerTag('gears', 'refined_glowstone_gear', 'Refined Glowstone Gear').tag('forge:gears').tag('forge:gears/refined_glowstone')
    registerTag('gears', 'osmium_gear', 'Osmium Gear').tag('forge:gears').tag('forge:gears/osmium')
    registerTag('gears', 'tin_gear', 'Tin Gear').tag('forge:gears').tag('forge:gears/tin')
    registerTag('gears', 'lead_gear', 'Lead Gear').tag('forge:gears').tag('forge:gears/lead')
    registerTag('gears', 'uranium_gear', 'Uranium Gear').tag('forge:gears').tag('forge:gears/uranium')
    registerTag('gears', 'fluorite_gear', 'Fluorite Gear').tag('forge:gears').tag('forge:gears/fluorite')
    registerTag('gears', 'black_quartz_gear', 'Black Quartz Gear').tag('forge:gears').tag('forge:gears/black_quartz')
    registerTag('gears', 'industrial_iron_gear', 'Industrial Iron Gear').tag('forge:gears').tag('forge:gears/industrial_iron')
    registerTag('gears', 'the_ultimate_gear', '§cThe Ultimate Gear').tag('forge:gears').tag('forge:gears/the_ultimate')

    /**************Plates**************/
    registerTag('plates', 'copper_plate', 'Copper Plate').tag('forge:plates').tag('forge:plates/copper')
    registerTag('plates', 'diamond_plate', 'Diamond Plate').tag('forge:plates').tag('forge:plates/diamond')
    registerTag('plates', 'gold_plate', 'Gold Plate').tag('forge:plates').tag('forge:plates/gold')
    registerTag('plates', 'iron_plate', 'Iron Plate').tag('forge:plates').tag('forge:plates/iron')
    registerTag('plates', 'netherite_plate', 'Netherite Plate').tag('forge:plates').tag('forge:plates/netherite')
    registerTag('plates', 'stone_plate', 'Stone Plate').tag('forge:plates').tag('forge:plates/stone')
    registerTag('plates', 'wooden_plate', 'Wooden Plate').tag('forge:plates').tag('forge:plates/wooden')
    registerTag('plates', 'compressed_iron_plate', 'Compressed Iron Plate').tag('forge:plates').tag('forge:plates/compressed_iron')
    registerTag('plates', 'uraninite_plate', 'Uraninite Plate').tag('forge:plates').tag('forge:plates/uraninite')
    registerTag('plates', 'redstone_plate', 'Redstone Plate').tag('forge:plates').tag('forge:plates/redstone')
    registerTag('plates', 'emerald_plate', 'Emerald Plate').tag('forge:plates').tag('forge:plates/emerald')
    registerTag('plates', 'lapis_lazuli_plate', 'Lapis Lazuli Plate').tag('forge:plates').tag('forge:plates/lapis_lazuli')
    registerTag('plates', 'quartz_plate', 'Quartz Plate').tag('forge:plates').tag('forge:plates/quartz')
    registerTag('plates', 'amethyst_plate', 'Amethyst Plate').tag('forge:plates').tag('forge:plates/amethyst')
    registerTag('plates', 'zinc_plate', 'Zinc Plate').tag('forge:plates').tag('forge:plates/zinc')
    registerTag('plates', 'andesite_alloy_plate', 'Andesite Alloy Plate').tag('forge:plates').tag('forge:plates/andesite_alloy')
    registerTag('plates', 'brass_plate', 'Brass Plate').tag('forge:plates').tag('forge:plates/brass')
    registerTag('plates', 'electrum_plate', 'Electrum Plate').tag('forge:plates').tag('forge:plates/electrum')
    registerTag('plates', 'certus_quartz_plate', 'Certus Quartz Plate').tag('forge:plates').tag('forge:plates/certus_quartz')
    registerTag('plates', 'fluix_plate', 'Fluix Plate').tag('forge:plates').tag('forge:plates/fluix')
    registerTag('plates', 'crystalized_menril_plate', 'Crystallized Menril Plate').tag('forge:plates').tag('forge:plates/crystalized_menril')
    registerTag('plates', 'crystalized_chorus_plate', 'Crystallized Chorus Plate').tag('forge:plates').tag('forge:plates/crystalized_chorus')
    registerTag('plates', 'desh_plate', 'Desh Plate').tag('forge:plates').tag('forge:plates/desh')
    registerTag('plates', 'ostrum_plate', 'Ostrum Plate').tag('forge:plates').tag('forge:plates/ostrum')
    registerTag('plates', 'calorite_plate', 'Calorite Plate').tag('forge:plates').tag('forge:plates/calorite')
    registerTag('plates', 'bronze_plate', 'Bronze Plate').tag('forge:plates').tag('forge:plates/bronze')
    registerTag('plates', 'steel_plate', 'Steel Plate').tag('forge:plates').tag('forge:plates/steel')
    registerTag('plates', 'refined_obsidian_plate', 'Refined Obsidian Plate').tag('forge:plates').tag('forge:plates/refined_obsidian')
    registerTag('plates', 'refined_glowstone_plate', 'Refined Glowstone Plate').tag('forge:plates').tag('forge:plates/refined_glowstone')
    registerTag('plates', 'osmium_plate', 'Osmium Plate').tag('forge:plates').tag('forge:plates/osmium')
    registerTag('plates', 'tin_plate', 'Tin Plate').tag('forge:plates').tag('forge:plates/tin')
    registerTag('plates', 'lead_plate', 'Lead Plate').tag('forge:plates').tag('forge:plates/lead')
    registerTag('plates', 'uranium_plate', 'Uranium Plate').tag('forge:plates').tag('forge:plates/uranium')
    registerTag('plates', 'fluorite_plate', 'Fluorite Plate').tag('forge:plates').tag('forge:plates/fluorite')
    registerTag('plates', 'black_quartz_plate', 'Black Quartz Plate').tag('forge:plates').tag('forge:plates/black_quartz')
    registerTag('plates', 'industrial_iron_plate', 'Industrial Iron Plate').tag('forge:plates').tag('forge:plates/industrial_iron')
    registerTag('plates', 'the_ultimate_plate', '§cThe Ultimate Plate').tag('forge:plates').tag('forge:plates/the_ultimate')

    /**************Rods**************/
    registerTag('rods', 'copper_rod', 'Copper Rod').tag('forge:rods').tag('forge:rods/copper').tag('forge:rods/all_metal')
    registerTag('rods', 'diamond_rod', 'Diamond Rod').tag('forge:rods').tag('forge:rods/diamond').tag('forge:rods/all_metal')
    registerTag('rods', 'gold_rod', 'Gold Rod').tag('forge:rods').tag('forge:rods/gold').tag('forge:rods/all_metal')
    registerTag('rods', 'iron_rod', 'Iron Rod').tag('forge:rods').tag('forge:rods/iron').tag('forge:rods/all_metal')
    registerTag('rods', 'netherite_rod', 'Netherite Rod').tag('forge:rods').tag('forge:rods/netherite').tag('forge:rods/all_metal')
    registerTag('rods', 'stone_rod', 'Stone Rod').tag('forge:rods').tag('forge:rods/stone').tag('forge:rods/all_metal')
    registerTag('rods', 'wooden_rod', 'Wooden Rod').tag('forge:rods').tag('forge:rods/wooden').tag('forge:rods/all_metal')
    registerTag('rods', 'compressed_iron_rod', 'Compressed Iron Rod').tag('forge:rods').tag('forge:rods/compressed_iron').tag('forge:rods/all_metal')
    registerTag('rods', 'uraninite_rod', 'Uraninite Rod').tag('forge:rods').tag('forge:rods/uraninite').tag('forge:rods/all_metal')
    registerTag('rods', 'redstone_rod', 'Redstone Rod').tag('forge:rods').tag('forge:rods/redstone').tag('forge:rods/all_metal')
    registerTag('rods', 'emerald_rod', 'Emerald Rod').tag('forge:rods').tag('forge:rods/emerald').tag('forge:rods/all_metal')
    registerTag('rods', 'lapis_lazuli_rod', 'Lapis Lazuli Rod').tag('forge:rods').tag('forge:rods/lapis_lazuli').tag('forge:rods/all_metal')
    registerTag('rods', 'quartz_rod', 'Quartz Rod').tag('forge:rods').tag('forge:rods/quartz').tag('forge:rods/all_metal')
    registerTag('rods', 'amethyst_rod', 'Amethyst Rod').tag('forge:rods').tag('forge:rods/amethyst').tag('forge:rods/all_metal')
    registerTag('rods', 'zinc_rod', 'Zinc Rod').tag('forge:rods').tag('forge:rods/zinc').tag('forge:rods/all_metal')
    registerTag('rods', 'andesite_alloy_rod', 'Andesite Alloy Rod').tag('forge:rods').tag('forge:rods/andesite_alloy').tag('forge:rods/all_metal')
    registerTag('rods', 'brass_rod', 'Brass Rod').tag('forge:rods').tag('forge:rods/brass').tag('forge:rods/all_metal')
    registerTag('rods', 'electrum_rod', 'Electrum Rod').tag('forge:rods').tag('forge:rods/electrum').tag('forge:rods/all_metal')
    registerTag('rods', 'certus_quartz_rod', 'Certus Quartz Rod').tag('forge:rods').tag('forge:rods/certus_quartz').tag('forge:rods/all_metal')
    registerTag('rods', 'fluix_rod', 'Fluix Rod').tag('forge:rods').tag('forge:rods/fluix').tag('forge:rods/all_metal')
    registerTag('rods', 'crystalized_menril_rod', 'Crystallized Menril Rod').tag('forge:rods').tag('forge:rods/crystalized_menril').tag('forge:rods/all_metal')
    registerTag('rods', 'crystalized_chorus_rod', 'Crystallized Chorus Rod').tag('forge:rods').tag('forge:rods/crystalized_chorus').tag('forge:rods/all_metal')
    registerTag('rods', 'desh_rod', 'Desh Rod').tag('forge:rods').tag('forge:rods/desh').tag('forge:rods/all_metal')
    registerTag('rods', 'ostrum_rod', 'Ostrum Rod').tag('forge:rods').tag('forge:rods/ostrum').tag('forge:rods/all_metal')
    registerTag('rods', 'calorite_rod', 'Calorite Rod').tag('forge:rods').tag('forge:rods/calorite').tag('forge:rods/all_metal')
    registerTag('rods', 'bronze_rod', 'Bronze Rod').tag('forge:rods').tag('forge:rods/bronze').tag('forge:rods/all_metal')
    registerTag('rods', 'steel_rod', 'Steel Rod').tag('forge:rods').tag('forge:rods/steel').tag('forge:rods/all_metal')
    registerTag('rods', 'refined_obsidian_rod', 'Refined Obsidian Rod').tag('forge:rods').tag('forge:rods/refined_obsidian').tag('forge:rods/all_metal')
    registerTag('rods', 'refined_glowstone_rod', 'Refined Glowstone Rod').tag('forge:rods').tag('forge:rods/refined_glowstone').tag('forge:rods/all_metal')
    registerTag('rods', 'osmium_rod', 'Osmium Rod').tag('forge:rods').tag('forge:rods/osmium').tag('forge:rods/all_metal')
    registerTag('rods', 'tin_rod', 'Tin Rod').tag('forge:rods').tag('forge:rods/tin').tag('forge:rods/all_metal')
    registerTag('rods', 'lead_rod', 'Lead Rod').tag('forge:rods').tag('forge:rods/lead').tag('forge:rods/all_metal')
    registerTag('rods', 'uranium_rod', 'Uranium Rod').tag('forge:rods').tag('forge:rods/uranium').tag('forge:rods/all_metal')
    registerTag('rods', 'fluorite_rod', 'Fluorite Rod').tag('forge:rods').tag('forge:rods/fluorite').tag('forge:rods/all_metal')
    registerTag('rods', 'black_quartz_rod', 'Black Quartz Rod').tag('forge:rods').tag('forge:rods/black_quartz').tag('forge:rods/all_metal')
    registerTag('rods', 'industrial_iron_rod', 'Industrial Iron Rod').tag('forge:rods').tag('forge:rods/industrial_iron').tag('forge:rods/all_metal')
    registerTag('rods', 'the_ultimate_rod', '§cThe Ultimate Rod').tag('forge:rods').tag('forge:rods/the_ultimate').tag('forge:rods/all_metal')

    /**************Wires**************/
    registerTag('wires', 'copper_wire', 'Copper Wire').tag('forge:wires').tag('forge:wires/copper').tag('forge:wires/all_metal')
    registerTag('wires', 'diamond_wire', 'Diamond Wire').tag('forge:wires').tag('forge:wires/diamond').tag('forge:wires/all_metal')
    registerTag('wires', 'gold_wire', 'Gold Wire').tag('forge:wires').tag('forge:wires/gold').tag('forge:wires/all_metal')
    registerTag('wires', 'iron_wire', 'Iron Wire').tag('forge:wires').tag('forge:wires/iron').tag('forge:wires/all_metal')
    registerTag('wires', 'netherite_wire', 'Netherite Wire').tag('forge:wires').tag('forge:wires/netherite').tag('forge:wires/all_metal')
    registerTag('wires', 'stone_wire', 'Stone Wire').tag('forge:wires').tag('forge:wires/stone').tag('forge:wires/all_metal')
    registerTag('wires', 'wooden_wire', 'Wooden Wire').tag('forge:wires').tag('forge:wires/wooden').tag('forge:wires/all_metal')
    registerTag('wires', 'compressed_iron_wire', 'Compressed Iron Wire').tag('forge:wires').tag('forge:wires/compressed_iron').tag('forge:wires/all_metal')
    registerTag('wires', 'uraninite_wire', 'Uraninite Wire').tag('forge:wires').tag('forge:wires/uraninite').tag('forge:wires/all_metal')
    registerTag('wires', 'redstone_wire', 'Redstone Wire').tag('forge:wires').tag('forge:wires/redstone').tag('forge:wires/all_metal')
    registerTag('wires', 'emerald_wire', 'Emerald Wire').tag('forge:wires').tag('forge:wires/emerald').tag('forge:wires/all_metal')
    registerTag('wires', 'lapis_lazuli_wire', 'Lapis Lazuli Wire').tag('forge:wires').tag('forge:wires/lapis_lazuli').tag('forge:wires/all_metal')
    registerTag('wires', 'quartz_wire', 'Quartz Wire').tag('forge:wires').tag('forge:wires/quartz').tag('forge:wires/all_metal')
    registerTag('wires', 'amethyst_wire', 'Amethyst Wire').tag('forge:wires').tag('forge:wires/amethyst').tag('forge:wires/all_metal')
    registerTag('wires', 'zinc_wire', 'Zinc Wire').tag('forge:wires').tag('forge:wires/zinc').tag('forge:wires/all_metal')
    registerTag('wires', 'andesite_alloy_wire', 'Andesite Alloy Wire').tag('forge:wires').tag('forge:wires/andesite_alloy').tag('forge:wires/all_metal')
    registerTag('wires', 'brass_wire', 'Brass Wire').tag('forge:wires').tag('forge:wires/brass').tag('forge:wires/all_metal')
    registerTag('wires', 'electrum_wire', 'Electrum Wire').tag('forge:wires').tag('forge:wires/electrum').tag('forge:wires/all_metal')
    registerTag('wires', 'certus_quartz_wire', 'Certus Quartz Wire').tag('forge:wires').tag('forge:wires/certus_quartz').tag('forge:wires/all_metal')
    registerTag('wires', 'fluix_wire', 'Fluix Wire').tag('forge:wires').tag('forge:wires/fluix').tag('forge:wires/all_metal')
    registerTag('wires', 'crystalized_menril_wire', 'Crystallized Menril Wire').tag('forge:wires').tag('forge:wires/crystalized_menril').tag('forge:wires/all_metal')
    registerTag('wires', 'crystalized_chorus_wire', 'Crystallized Chorus Wire').tag('forge:wires').tag('forge:wires/crystalized_chorus').tag('forge:wires/all_metal')
    registerTag('wires', 'desh_wire', 'Desh Wire').tag('forge:wires').tag('forge:wires/desh').tag('forge:wires/all_metal')
    registerTag('wires', 'ostrum_wire', 'Ostrum Wire').tag('forge:wires').tag('forge:wires/ostrum').tag('forge:wires/all_metal')
    registerTag('wires', 'calorite_wire', 'Calorite Wire').tag('forge:wires').tag('forge:wires/calorite').tag('forge:wires/all_metal')
    registerTag('wires', 'bronze_wire', 'Bronze Wire').tag('forge:wires').tag('forge:wires/bronze').tag('forge:wires/all_metal')
    registerTag('wires', 'steel_wire', 'Steel Wire').tag('forge:wires').tag('forge:wires/steel').tag('forge:wires/all_metal')
    registerTag('wires', 'refined_obsidian_wire', 'Refined Obsidian Wire').tag('forge:wires').tag('forge:wires/refined_obsidian').tag('forge:wires/all_metal')
    registerTag('wires', 'refined_glowstone_wire', 'Refined Glowstone Wire').tag('forge:wires').tag('forge:wires/refined_glowstone').tag('forge:wires/all_metal')
    registerTag('wires', 'osmium_wire', 'Osmium Wire').tag('forge:wires').tag('forge:wires/osmium').tag('forge:wires/all_metal')
    registerTag('wires', 'tin_wire', 'Tin Wire').tag('forge:wires').tag('forge:wires/tin').tag('forge:wires/all_metal')
    registerTag('wires', 'lead_wire', 'Lead Wire').tag('forge:wires').tag('forge:wires/lead').tag('forge:wires/all_metal')
    registerTag('wires', 'uranium_wire', 'Uranium Wire').tag('forge:wires').tag('forge:wires/uranium').tag('forge:wires/all_metal')
    registerTag('wires', 'fluorite_wire', 'Fluorite Wire').tag('forge:wires').tag('forge:wires/fluorite').tag('forge:wires/all_metal')
    registerTag('wires', 'black_quartz_wire', 'Black Quartz Wire').tag('forge:wires').tag('forge:wires/black_quartz').tag('forge:wires/all_metal')
    registerTag('wires', 'industrial_iron_wire', 'Industrial Iron Wire').tag('forge:wires').tag('forge:wires/industrial_iron').tag('forge:wires/all_metal')
    registerTag('wires', 'the_ultimate_wire', '§cThe Ultimate Wire').tag('forge:wires').tag('forge:wires/the_ultimate').tag('forge:wires/all_metal')

    /**************Molds**************/
    register('mold_gear', 'Gear Mold')
    register('mold_plate', 'Plate Mold')
    register('mold_rod', 'Rod Mold')
    register('mold_wire', 'Wire Mold')

    /**************Tools**************/
    register('metal_hammer', 'Metal Hammer').maxDamage(250)
    register('metal_scissors', 'Metal Scissors').maxDamage(250)



    // register('platinum_ingot','Platinum Ingot')
    // register('minecraft_ore_ingot','Minecraft Ores Ingot')
    // register('platinum_nugget','Platinum Nugget')
    // register('ultimate_photovoltaic_cell','Ultimate Photovoltaic Cell')
    // register('molten_cobblestone_plate','Molten Cobblestone Plate')
    // register('lavium_gear','Lavium Gear')
    // register('keyboard','Keyboard')
    // register('computer','Computer')
    // register('invarium_ingot','Invarium Ingot')
    // register('diamorium_ingot','Diamorium Ingot')
    // registerTool('breizhdemon_pick','BreizhDemon Pickaxe','pickaxe','breizhdemon')
    // e.create('immersiveengineering:component_osmium').displayName('Osmium Mechanical Component').texture('immersiveengineering:item/metal_component_osmium').group('immersiveengineering')
    // e.create('immersiveengineering:mold_coin').displayName('Metal Press Mold: Coin').maxStackSize(1).group('immersiveengineering')
    // e.create('tconstruct:iron_alloy_cast').displayName('Alloy Iron Cast').texture('tconstruct:item/cast/iron_alloy').group('tconstruct/smeltery')
    // e.create('tconstruct:diamond_alloy_cast').displayName('Alloy Diamond Cast').texture('tconstruct:item/cast/diamond_alloy').group('tconstruct/smeltery')
    // e.create('tconstruct:obsidian_alloy_cast').displayName('Alloy Obsidian Cast').texture('tconstruct:item/cast/obsidian_alloy').group('tconstruct/smeltery')
    // e.create('thermal:wood_coin').displayName('Wood Coin').parentModel('thermal:item/wood_coin.json').group('thermal.items')
    // e.create('betterendforge:terminite_plate').displayName('Terminite Plate').group('betterendforge')
    //register('empty_tier_installer','Empty Tier Installer')
    //register('basic_component','Basic Component')
    //register('advanced_component','Advanced Component')
    //register('elite_component','Elite Component')
    //register('ultimate_component','Ultimate Component')

    /************************************Create Sequenced Assembly************************************/
    //registerType('incomplete_spirited_crystal','Incomplete Spirited Crystal','create:sequenced_assembly')
    //registerType('incomplete_basic_circuit','Incomplete Basic Circuit','create:sequenced_assembly')
    //registerType('incomplete_infused_alloy','Incomplete Infused Alloy','create:sequenced_assembly')
    //register('incomplete_tier_installer','Incomplete Tier Installer')
    //register('incomplete_basic_component','Incomplete Basic Component')
    //register('incomplete_advanced_component','Incomplete Advanced Component')
    //register('incomplete_elite_component','Incomplete Elite Component')
    //register('incomplete_ultimate_component','Incomplete Ultimate Component')

    /************************************Icons************************************/
    registerIcon('tr', 'TR')
    registerIcon('technic_resources', 'Technic Resources')
    registerIcon('discord', 'Discord')
    registerIcon('github', 'Github')
    registerIcon('website', 'Website')
    registerIcon('bisect_hosting', 'Bisect Hosting')


    /************************************Function************************************/
    function register(unlocname, displayname) {
        return e.create('technicresources:' + unlocname).displayName(displayname).texture('technicresources:item/' + unlocname)
    }
    function registerWithTexture(unlocname, displayname, texture) {
        return e.create('technicresources:' + unlocname).displayName(displayname).texture(texture)
    }
    function registerType(unlocname, displayname, type) {
        return e.create('technicresources:' + unlocname, type).displayName(displayname).tag('forge:tools').tag('forge:' + type + 's').tag('forge:tools/' + type + 's')
    }
    function registerTool(unlocname, displayname, type, tier) {
        return e.create('technicresources:' + unlocname, type).displayName(displayname).tier(tier).tag('forge:tools').tag('forge:' + type + 's').tag('forge:tools/' + type + 's').tag('forge:tools/' + tier)
    }
    function registerTag(tag, unlocname, displayname) {
        return e.create('technicresources:' + unlocname).displayName(displayname).texture('technicresources:item/' + tag + '/' + unlocname)
    }

    function registerIcon(unlocname, displayName) {
        return e.create('icons:' + unlocname).displayName(displayName).texture('icons:item/' + unlocname)
    }
})

const plates = ["technicresources:amethyst_plate", "technicresources:andesite_alloy_plate", "technicresources:black_quartz_plate", "technicresources:brass_plate", "technicresources:bronze_plate", "technicresources:calorite_plate", "technicresources:certus_quartz_plate", "technicresources:compressed_iron_plate", "technicresources:copper_plate", "technicresources:crystalized_chorus_plate", "technicresources:crystalized_menril_plate", "technicresources:desh_plate", "technicresources:diamond_plate", "technicresources:electrum_plate", "technicresources:emerald_plate", "technicresources:fluix_plate", "technicresources:fluorite_plate", "technicresources:gold_plate", "technicresources:industrial_iron_plate", "technicresources:iron_plate", "technicresources:lapis_lazuli_plate", "technicresources:lead_plate", "technicresources:netherite_plate", "technicresources:osmium_plate", "technicresources:ostrum_plate", "technicresources:quartz_plate", "technicresources:redstone_plate", "technicresources:refined_glowstone_plate", "technicresources:refined_obsidian_plate", "technicresources:steel_plate", "technicresources:stone_plate", "technicresources:tin_plate", "technicresources:uraninite_plate", "technicresources:uranium_plate", "technicresources:wooden_plate", "technicresources:zinc_plate"]

ItemEvents.modelProperties(e => {
    plates.forEach(plate =>
        e.register(Item.of(plate), "count", (stack, world, living, seed) => {
            return stack.getCount() / stack.getMaxStackSize()
        })
    )
})