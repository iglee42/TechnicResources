const ModsUtils = Java.loadClass('fr.iglee42.igleelib.api.utils.ModsUtils')

global.pebbles = ['stone', 'granite', 'diorite', 'andesite', 'calcite', 'tuff', 'deepslate', 'netherrack', 'blackstone', 'basalt', 'endstone']
global.materials = ['wooden', 'stone', 'diamond', 'gold', 'iron', 'netherite', 'copper', 'compressed_iron', 'uraninite', 'redstone', 'emerald', 'lapis_lazuli', 'quartz', 'amethyst', 'zinc', 'andesite_alloy', 'brass', 'electrum', 'certus_quartz', 'fluix', 'crystalized_menril', 'crystalized_chorus', 'desh', 'ostrum', 'calorite', 'bronze', 'steel', 'refined_obsidian', 'refined_glowstone', 'osmium', 'tin', 'lead', 'uranium', 'fluorite', 'black_quartz', 'neutron', 'the_ultimate']
global.colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];


StartupEvents.registry('item', e => {
    /************************************Normal Item************************************/

    /**************Start**************/
    registerFood('moss_ball', 'Moss Ball', food => {
        food.hunger(1)
        food.saturation(10)
        food.fastToEat()
        food.effect('minecraft:nausea', 40,0,1)
    })

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
    register('oak_sprout', 'Oak Sprout')
    register('spruce_sprout', 'Spruce Sprout')
    register('birch_sprout', 'Birch Sprout')
    register('jungle_sprout', 'Jungle Sprout')
    register('acacia_sprout', 'Acacia Sprout')
    register('dark_oak_sprout', 'Dark Oak Sprout')
    register('cherry_sprout', 'Cherry Sprout')
    register('mangrove_sprout', 'Mangrove Sprout')
    register('blue_archwood_sprout', 'Blue Archwood Sprout')
    register('red_archwood_sprout', 'Red Archwood Sprout')
    register('purple_archwood_sprout', 'Purple Archwood Sprout')
    register('green_archwood_sprout', 'Green Archwood Sprout')
    register('menril_sprout', 'Menril Sprout')
    register('ancient_sprout', 'Ancient Sprout')
    register('rubber_sprout', 'Rubber Sprout')

    /**************Chapter 2**************/
    register('room_upgrader_3', 'Room Upgrader Tier 3').unstackable()

    /**************Chapter 3**************/
    register('room_upgrader_4', 'Room Upgrader Tier 4').unstackable()

    /**************Chapter 4**************/
    register('room_upgrader_5', 'Room Upgrader Tier 5').unstackable()

    /**************Gears**************/
    global.materials.forEach((m) => {
        registerTag('gears', m + '_gear', (m.equals('the_ultimate') ? '§c' : '') + ModsUtils.getUpperName(m, '_') + ' Gear').tag('c:gears/' + m)
    })

    /**************Plates**************/
    global.materials.forEach((m) => {
        registerTag('plates', m + '_plate', (m.equals('the_ultimate') ? '§c' : '') + ModsUtils.getUpperName(m, '_') + ' Plate').tag('c:plates/' + m)
    })

    /**************Rods**************/
    global.materials.forEach((m) => {
        registerTag('rods', m + '_rod', (m.equals('the_ultimate') ? '§c' : '') + ModsUtils.getUpperName(m, '_') + ' Rod').tag('c:rods/' + m).tag('c:rods/all_metal')
    })


    /**************Wires**************/
    global.materials.forEach((m) => {
        registerTag('wires', m + '_wire', (m.equals('the_ultimate') ? '§c' : '') + ModsUtils.getUpperName(m, '_') + ' Wire').tag('c:wires/' + m).tag('c:wires/all_metal')
    })

    /**************Molds**************/
    register('mold_gear', 'Gear Mold')
    register('mold_plate', 'Plate Mold')
    register('mold_rod', 'Rod Mold')
    register('mold_wire', 'Wire Mold')

    /**************Tools**************/
    register('metal_hammer', 'Metal Hammer').tag('c:tools').maxDamage(250)
    register('metal_scissors', 'Metal Scissors').tag('c:tools').maxDamage(250)
    registerOtherMod('minecraft', 'dye_primer', 'Dye Primer').tag('c:tools').maxDamage(128)

    /**************Alloys*************/
    registerOtherMod('create', 'basalt_alloy', 'Basalt Alloy').tag('c:ingots').tag('c:ingots/basalt_alloy')
    registerOtherMod('create', 'blackstone_alloy', 'Blackstone Alloy').tag('c:ingots').tag('c:ingots/blackstone_alloy')
    registerOtherMod('create', 'brass_alloy', 'Brass Alloy').tag('c:ingots').tag('c:ingots/brass_alloy')
    registerOtherMod('create', 'chorus_alloy', 'Chorus Alloy').tag('c:ingots').tag('c:ingots/chorus_alloy')
    registerOtherMod('create', 'copper_alloy', 'Copper Alloy').tag('c:ingots').tag('c:ingots/copper_alloy')
    registerOtherMod('create', 'deepslate_alloy', 'Deepslate Alloy').tag('c:ingots').tag('c:ingots/deepslate_alloy')
    registerOtherMod('create', 'diorite_alloy', 'Diorite Alloy').tag('c:ingots').tag('c:ingots/diorite_alloy')
    registerOtherMod('create', 'granite_alloy', 'Granite Alloy').tag('c:ingots').tag('c:ingots/granite_alloy')
    registerOtherMod('create', 'source_alloy', 'Source Alloy').tag('c:ingots').tag('c:ingots/source_alloy')
    registerOtherMod('create', 'stone_alloy', 'Stone Alloy').tag('c:ingots').tag('c:ingots/stone_alloy')
    registerOtherMod('create', 'tuff_alloy', 'Tuff Alloy').tag('c:ingots').tag('c:ingots/tuff_alloy')
    registerOtherMod('create', 'iron_alloy', 'Iron Alloy').tag('c:ingots').tag('c:ingots/iron_alloy')
    registerOtherMod('create', 'zinc_alloy', 'Zinc Alloy').tag('c:ingots').tag('c:ingots/zinc_alloy')
    registerOtherMod('create', 'gold_alloy', 'Gold Alloy').tag('c:ingots').tag('c:ingots/gold_alloy')
    registerOtherMod('create', 'tin_alloy', 'Tin Alloy').tag('c:ingots').tag('c:ingots/tin_alloy')
    registerOtherMod('create', 'lead_alloy', 'Lead Alloy').tag('c:ingots').tag('c:ingots/lead_alloy')
    registerOtherMod('create', 'osmium_alloy', 'Osmium Alloy').tag('c:ingots').tag('c:ingots/osmium_alloy')
    registerOtherMod('create', 'electrum_alloy', 'Electrum Alloy').tag('c:ingots').tag('c:ingots/electrum_alloy')
    registerOtherMod('create', 'uranium_alloy', 'Uranium Alloy').tag('c:ingots').tag('c:ingots/uranium_alloy')
    registerOtherMod('create', 'netherite_alloy', 'Netherite Alloy').tag('c:ingots').tag('c:ingots/netherite_alloy')
    registerOtherMod('create', 'red_iron_alloy', 'Red Iron Alloy').tag('c:ingots').tag('c:ingots/red_iron_alloy')

    /*******Actually Additions Crystals and Other*******/
    registerOtherMod('actuallyadditions', 'empowered_restonia_crystal_shard', 'Empowered Red Crystal Shard').glow(true)
    registerOtherMod('actuallyadditions', 'empowered_palis_crystal_shard', 'Empowered Blue Crystal Shard').glow(true)
    registerOtherMod('actuallyadditions', 'empowered_diamatine_crystal_shard', 'Empowered Light Blue Crystal Shard').glow(true)
    registerOtherMod('actuallyadditions', 'empowered_void_crystal_shard', 'Empowered Black Crystal Shard').glow(true)
    registerOtherMod('actuallyadditions', 'empowered_emeradic_crystal_shard', 'Empowered Green Crystal Shard').glow(true)
    registerOtherMod('actuallyadditions', 'empowered_enori_crystal_shard', 'Empowered White Crystal Shard').glow(true)

    registerOtherMod('actuallyadditions', 'zartiq_crystal', 'Zartiq Crystal').tag('actuallyadditions:crystals').tag('actuallyadditions:crystals/zartiq')
    registerOtherMod('actuallyadditions', 'zartiq_crystal_shard', 'Light Gray Crystal Shard').tag('actuallyadditions:crystal_shards').tag('actuallyadditions:crystal_shards/zartiq')
    registerOtherMod('actuallyadditions', 'empowered_zartiq_crystal', 'Empowered Zartiq Crystal').glow(true).tag('actuallyadditions:empowered_crystals').tag('actuallyadditions:empowered_crystals/zartiq')
    registerOtherMod('actuallyadditions', 'empowered_zartiq_crystal_shard', 'Empowered Light Gray Crystal Shard').glow(true).tag('actuallyadditions:empowered_crystal_shards').tag('actuallyadditions:empowered_crystal_shards/zartiq')

    registerOtherMod('actuallyadditions', 'inerthet_crystal', 'Inerthet Crystal').tag('actuallyadditions:crystals').tag('actuallyadditions:crystals/inerthet')
    registerOtherMod('actuallyadditions', 'inerthet_crystal_shard', 'Gray Crystal Shard').tag('actuallyadditions:crystal_shards').tag('actuallyadditions:crystal_shards/inerthet')
    registerOtherMod('actuallyadditions', 'empowered_inerthet_crystal', 'Empowered Inerthet Crystal').glow(true).tag('actuallyadditions:empowered_crystals').tag('actuallyadditions:empowered_crystals/inerthet')
    registerOtherMod('actuallyadditions', 'empowered_inerthet_crystal_shard', 'Empowered Gray Crystal Shard').glow(true).tag('actuallyadditions:empowered_crystal_shards').tag('actuallyadditions:empowered_crystal_shards/inerthet')

    registerOtherMod('actuallyadditions', 'zerbonkys_crystal', 'Zerbonkys Crystal').tag('actuallyadditions:crystals').tag('actuallyadditions:crystals/zerbonkys')
    registerOtherMod('actuallyadditions', 'zerbonkys_crystal_shard', 'Brown Crystal Shard').tag('actuallyadditions:crystal_shards').tag('actuallyadditions:crystal_shards/zerbonkys')
    registerOtherMod('actuallyadditions', 'empowered_zerbonkys_crystal', 'Empowered Zerbonkys Crystal').glow(true).tag('actuallyadditions:empowered_crystals').tag('actuallyadditions:empowered_crystals/zerbonkys')
    registerOtherMod('actuallyadditions', 'empowered_zerbonkys_crystal_shard', 'Empowered Brown Crystal Shard').glow(true).tag('actuallyadditions:empowered_crystal_shards').tag('actuallyadditions:empowered_crystal_shards/zerbonkys')

    registerOtherMod('actuallyadditions', 'zerbon_crystal', 'Zerbon Crystal').tag('actuallyadditions:crystals').tag('actuallyadditions:crystals/zerbon')
    registerOtherMod('actuallyadditions', 'zerbon_crystal_shard', 'Orange Crystal Shard').tag('actuallyadditions:crystal_shards').tag('actuallyadditions:crystal_shards/zerbon')
    registerOtherMod('actuallyadditions', 'empowered_zerbon_crystal', 'Empowered Zerbon Crystal').glow(true).tag('actuallyadditions:empowered_crystals').tag('actuallyadditions:empowered_crystals/zerbon')
    registerOtherMod('actuallyadditions', 'empowered_zerbon_crystal_shard', 'Empowered Orange Crystal Shard').glow(true).tag('actuallyadditions:empowered_crystal_shards').tag('actuallyadditions:empowered_crystal_shards/zerbon')

    registerOtherMod('actuallyadditions', 'lectruma_crystal', 'Lectruma Crystal').tag('actuallyadditions:crystals').tag('actuallyadditions:crystals/lectruma')
    registerOtherMod('actuallyadditions', 'lectruma_crystal_shard', 'Yellow Crystal Shard').tag('actuallyadditions:crystal_shards').tag('actuallyadditions:crystal_shards/lectruma')
    registerOtherMod('actuallyadditions', 'empowered_lectruma_crystal', 'Empowered Lectruma Crystal').glow(true).tag('actuallyadditions:empowered_crystals').tag('actuallyadditions:empowered_crystals/lectruma')
    registerOtherMod('actuallyadditions', 'empowered_lectruma_crystal_shard', 'Empowered Yellow Crystal Shard').glow(true).tag('actuallyadditions:empowered_crystal_shards').tag('actuallyadditions:empowered_crystal_shards/lectruma')

    registerOtherMod('actuallyadditions', 'uranima_crystal', 'Uranima Crystal').tag('actuallyadditions:crystals').tag('actuallyadditions:crystals/uranima')
    registerOtherMod('actuallyadditions', 'uranima_crystal_shard', 'Lime Crystal Shard').tag('actuallyadditions:crystal_shards').tag('actuallyadditions:crystal_shards/uranima')
    registerOtherMod('actuallyadditions', 'empowered_uranima_crystal', 'Empowered Uranima Crystal').glow(true).tag('actuallyadditions:empowered_crystals').tag('actuallyadditions:empowered_crystals/uranima')
    registerOtherMod('actuallyadditions', 'empowered_uranima_crystal_shard', 'Empowered Lime Crystal Shard').glow(true).tag('actuallyadditions:empowered_crystal_shards').tag('actuallyadditions:empowered_crystal_shards/uranima')

    registerOtherMod('actuallyadditions', 'mosium_crystal', 'Mosium Crystal').tag('actuallyadditions:crystals').tag('actuallyadditions:crystals/mosium')
    registerOtherMod('actuallyadditions', 'mosium_crystal_shard', 'Cyan Crystal Shard').tag('actuallyadditions:crystal_shards').tag('actuallyadditions:crystal_shards/mosium')
    registerOtherMod('actuallyadditions', 'empowered_mosium_crystal', 'Empowered Mosium Crystal').glow(true).tag('actuallyadditions:empowered_crystals').tag('actuallyadditions:empowered_crystals/mosium')
    registerOtherMod('actuallyadditions', 'empowered_mosium_crystal_shard', 'Empowered Cyan Crystal Shard').glow(true).tag('actuallyadditions:empowered_crystal_shards').tag('actuallyadditions:empowered_crystal_shards/mosium')

    registerOtherMod('actuallyadditions', 'richoum_crystal', 'Richoum Crystal').tag('actuallyadditions:crystals').tag('actuallyadditions:crystals/richoum')
    registerOtherMod('actuallyadditions', 'richoum_crystal_shard', 'Purple Crystal Shard').tag('actuallyadditions:crystal_shards').tag('actuallyadditions:crystal_shards/richoum')
    registerOtherMod('actuallyadditions', 'empowered_richoum_crystal', 'Empowered Richoum Crystal').glow(true).tag('actuallyadditions:empowered_crystals').tag('actuallyadditions:empowered_crystals/richoum')
    registerOtherMod('actuallyadditions', 'empowered_richoum_crystal_shard', 'Empowered Purple Crystal Shard').glow(true).tag('actuallyadditions:empowered_crystal_shards').tag('actuallyadditions:empowered_crystal_shards/richoum')

    registerOtherMod('actuallyadditions', 'mythase_crystal', 'Mythase Crystal').tag('actuallyadditions:crystals').tag('actuallyadditions:crystals/mythase')
    registerOtherMod('actuallyadditions', 'mythase_crystal_shard', 'Magenta Crystal Shard').tag('actuallyadditions:crystal_shards').tag('actuallyadditions:crystal_shards/mythase')
    registerOtherMod('actuallyadditions', 'empowered_mythase_crystal', 'Empowered Mythase Crystal').glow(true).tag('actuallyadditions:empowered_crystals').tag('actuallyadditions:empowered_crystals/mythase')
    registerOtherMod('actuallyadditions', 'empowered_mythase_crystal_shard', 'Empowered Magenta Crystal Shard').glow(true).tag('actuallyadditions:empowered_crystal_shards').tag('actuallyadditions:empowered_crystal_shards/mythase')

    registerOtherMod('actuallyadditions', 'surcea_crystal', 'Surcea Crystal').tag('actuallyadditions:crystals').tag('actuallyadditions:crystals/surcea')
    registerOtherMod('actuallyadditions', 'surcea_crystal_shard', 'Pink Crystal Shard').tag('actuallyadditions:crystal_shards').tag('actuallyadditions:crystal_shards/surcea')
    registerOtherMod('actuallyadditions', 'empowered_surcea_crystal', 'Empowered Surcea Crystal').glow(true).tag('actuallyadditions:empowered_crystals').tag('actuallyadditions:empowered_crystals/surcea')
    registerOtherMod('actuallyadditions', 'empowered_surcea_crystal_shard', 'Empowered Pink Crystal Shard').glow(true).tag('actuallyadditions:empowered_crystal_shards').tag('actuallyadditions:empowered_crystal_shards/surcea')

    // quartz zartiq light_gray
    // netherite inerthet gray
    // skybronze zerbonkys brown
    // bronze zerbon orange
    // electrum lectruma yellow
    // uranium uranima lime
    // osmium mosium cyan
    // chorium richoum purple
    // amethyst mythase magenta
    // source surcea pink

    /**************Other**************/
    registerOtherMod('minecraft', 'copper_nugget', 'Copper Nugget').tag('c:nuggets').tag('c:nuggets/copper')
    register('empty', "No Item")
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
    registerIcon('website', 'Website')


    /************************************Function************************************/
    function register(unlocname, displayname) {
        return e.create('technicresources:' + unlocname).displayName(displayname).texture('technicresources:item/' + unlocname)
    }
    function registerWithTexture(unlocname, displayname, texture) {
        return e.create('technicresources:' + unlocname).displayName(displayname).texture(texture)
    }
    function registerType(unlocname, displayname, type) {
        return e.create('technicresources:' + unlocname, type).displayName(displayname).tag('c:tools').tag('c:' + type + 's').tag('c:tools/' + type + 's')
    }
    function registerTool(unlocname, displayname, type, tier) {
        return e.create('technicresources:' + unlocname, type).displayName(displayname).tier(tier).tag('c:tools').tag('c:' + type + 's').tag('c:tools/' + type + 's').tag('c:tools/' + tier)
    }
    function registerTag(tag, unlocname, displayname) {
        return e.create('technicresources:' + unlocname).displayName(displayname).texture('technicresources:item/' + tag + '/' + unlocname).tag('c:' + tag)
    }

    function registerIcon(unlocname, displayName) {
        return e.create('icons:' + unlocname).displayName(displayName).texture('icons:item/' + unlocname)
    }
    function registerOtherMod(mod, unlocname, displayname) {
        return e.create(mod + ':' + unlocname).displayName(displayname).texture(mod + ':item/' + unlocname)
    }
    
    function registerFood(unlocname, displayname, foodProperties) {
        return e.create('technicresources:' + unlocname).displayName(displayname).texture('technicresources:item/' + unlocname).food(food => foodProperties(food))
    }
})

ItemEvents.modelProperties(e => {
    global.materials.forEach(plate =>
        e.register(Item.of('technicresources:' + plate + '_plate'), "count", (stack, world, living, seed) => {
            return stack.getCount() / stack.getMaxStackSize()
        })
    )
})