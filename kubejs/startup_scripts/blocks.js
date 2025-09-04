
const $IntegerProperty = Java.loadClass('net.minecraft.world.level.block.state.properties.IntegerProperty')

console.info("Hello Blocks 👋")
StartupEvents.registry('block', e => {
    global.STAGE = $IntegerProperty.create("stage", 0, 5)
    /************************************Normal Block************************************/
    //register('platinum_block','Block of Platinum','iron',1,'pickaxe',2)
    //register('fluxdust_block','Block of Fluxdust','sand',0,'shovel',0)
    //register('minecraft_ore_block','Block of Minecraft Ores','iron',2,'pickaxe',1)
    //register('computer_block','Computer','iron',235,'pickaxe',2)
    //e.create('immersiveengineering:sheetmetal_osmium').material('iron').hardness(2).displayName('Osmium Sheetmetal').harvestTool('pickaxe',2)

    registerUnbreakable('bedrock_room_manager', 'Bedrock Room Manager', 'stone').property(global.STAGE).defaultState(c => {
        c.set(global.STAGE, 0)
    })
    registerUnbreakable('dirt', 'Dirt', 'grass').tagBlock('minecraft:dirt').property(global.STAGE).defaultState(c => {
        c.set(global.STAGE, 0)
    })
    register('small_bedrock', 'Small Bedrock', 'stone', 4, 128, 'pickaxe', 'stone', true).defaultCutout().waterlogged().fullBlock(false).notSolid().opaque(false).box(4, 4, 4, 12, 12, 12)
    registerUnbreakable('glowrock', 'Glowrock', 'glass').lightLevel(1)

    /**************Chapter 1**************/

    register('breakable_bedrock', 'Breakable Bedrock', 'stone', 8, 256, 'pickaxe', 'stone', true)
    register('compressed_breakable_bedrock', 'Compressed Breakable Bedrock', 'stone', 9, 210000, 'pickaxe', 'stone', true)


    /************************************Function************************************/
    function registerUnbreakable(unlocname, displayname, type) {
        return e.create('technicresources:' + unlocname).mapColor(type).soundType(type).unbreakable().displayName(displayname)
    }
    function register(unlocname, displayname, type, hardness, resistance, tool, toolLevel, requires) {
        return e.create('technicresources:' + unlocname).mapColor(type).soundType(type).hardness(hardness).resistance(resistance).displayName(displayname).tagBlock('minecraft:mineable/' + tool).tagBlock('minecraft:needs_' + toolLevel + '_tool').requiresTool(requires)
    }
    function registerOtherMod(mod, unlocname, displayname, type, hardness, resistance, tool, toolLevel, requires) {
        if (requires === true) {
            return e.create(mod + ':' + unlocname).mapColor(type).soundType(type).hardness(hardness).resistance(resistance).displayName(displayname).tagBlock('minecraft:mineable/' + tool).tagBlock('minecraft:needs_' + toolLevel + '_tool').requiresTool(requires)
        } else {
            return e.create(mod + ':' + unlocname).mapColor(type).soundType(type).hardness(hardness).resistance(resistance).displayName(displayname)
        }
    }

    /***********************************Other****************************************/
    registerOtherMod('createaddition', 'electrum_block', 'Electrum Block', 'metal', 5, 6, 'pickaxe', 'iron', true)
    registerOtherMod('mekanism', 'block_plutonium', 'Block of Plutonium', 'metal', 8, 10, 'pickaxe', 'diamond', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/plutonium')
    registerOtherMod('mekanism', 'block_polonium', 'Block of Polonium', 'metal', 8, 10, 'pickaxe', 'diamond', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/polonium')
    registerOtherMod('mekanism', 'block_antimatter', 'Block of Antimatter', 'metal', 10, 12, 'pickaxe', 'diamond', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/antimatter')
    registerOtherMod('createcasing', 'chorium_block', 'Chorium Block', 'deepslate', 5, 6, 'pickaxe', 'iron', true)
    registerOtherMod('rftoolsbase', 'dimensionalshard_block', 'Dimensional Shard Block', 'deepslate', 2, 3, 'pickaxe', 'iron', true)

    /***************************Custom Machine Casings*******************************/
    registerOtherMod('hostilenetworks', 'hostile_machine_casing', 'Hostile Machine Casing', 'metal', 5, 6, 'pickaxe', 'iron', true)
    registerOtherMod('actuallyadditions', 'actually_machine_casing', 'Actually Machine Casing', 'metal', 5, 6, 'pickaxe', 'iron', true)
    registerOtherMod('integrateddynamics', 'integrated_machine_casing', 'Integrated Machine Casing', 'metal', 5, 6, 'pickaxe', 'iron', true)
    registerOtherMod('packagedauto', 'packaged_machine_casing', 'Packaged Machine Casing', 'metal', 5, 6, 'pickaxe', 'iron', true)
    registerOtherMod('powah', 'machine_casing_starter', 'Machine Casing (Starter)', 'metal', 5, 6, 'pickaxe', 'iron', true)
    registerOtherMod('powah', 'machine_casing_basic', 'Machine Casing (Basic)', 'metal', 5, 6, 'pickaxe', 'iron', true)
    registerOtherMod('powah', 'machine_casing_hardened', 'Machine Casing (Hardened)', 'metal', 5, 6, 'pickaxe', 'iron', true)
    registerOtherMod('powah', 'machine_casing_blazing', 'Machine Casing (Blazing)', 'metal', 5, 6, 'pickaxe', 'iron', true)
    registerOtherMod('powah', 'machine_casing_niotic', 'Machine Casing (Niotic)', 'metal', 5, 6, 'pickaxe', 'iron', true)
    registerOtherMod('powah', 'machine_casing_spirited', 'Machine Casing (Spirited)', 'metal', 5, 6, 'pickaxe', 'iron', true)
    registerOtherMod('powah', 'machine_casing_nitro', 'Machine Casing (Nitro)', 'metal', 5, 6, 'pickaxe', 'iron', true)
    registerOtherMod('rftoolsbase', 'infused_machine_casing', 'Infused Machine Casing', 'metal', 5, 6, 'pickaxe', 'iron', true)
    registerOtherMod('rftoolsbase', 'infused_machine_base', 'Infused Machine Base', 'metal', 5, 6, 'pickaxe', 'iron', true).box(0, 0, 0, 16, 5, 16, true)
    registerOtherMod('avaritia', 'matrix_machine_casing', 'Matrix Machine Casing', 'metal', 5, 6, 'pickaxe', 'iron', true)

    /********************************Alloy Blocks************************************/
    registerOtherMod('create', 'basalt_alloy_block', 'Block of Basalt Alloy', 'stone', 2, 3, 'pickaxe', 'stone', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/basalt_alloy')
    registerOtherMod('create', 'blackstone_alloy_block', 'Block of Blackstone Alloy', 'stone', 2, 3, 'pickaxe', 'stone', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/blackstone_alloy')
    registerOtherMod('create', 'brass_alloy_block', 'Block of Brass Alloy', 'stone', 2, 3, 'pickaxe', 'stone', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/brass_alloy')
    registerOtherMod('create', 'chorus_alloy_block', 'Block of Chorus Alloy', 'stone', 2, 3, 'pickaxe', 'stone', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/chorus_alloy')
    registerOtherMod('create', 'copper_alloy_block', 'Block of Copper Alloy', 'stone', 2, 3, 'pickaxe', 'stone', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/copper_alloy')
    registerOtherMod('create', 'deepslate_alloy_block', 'Block of Deepslate Alloy', 'stone', 2, 3, 'pickaxe', 'stone', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/deepslate_alloy')
    registerOtherMod('create', 'diorite_alloy_block', 'Block of Diorite Alloy', 'stone', 2, 3, 'pickaxe', 'stone', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/diorite_alloy')
    registerOtherMod('create', 'granite_alloy_block', 'Block of Granite Alloy', 'stone', 2, 3, 'pickaxe', 'stone', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/granite_alloy')
    registerOtherMod('create', 'source_alloy_block', 'Block of Source Alloy', 'stone', 2, 3, 'pickaxe', 'stone', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/source_alloy')
    registerOtherMod('create', 'stone_alloy_block', 'Block of Stone Alloy', 'stone', 2, 3, 'pickaxe', 'stone', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/stone_alloy')
    registerOtherMod('create', 'tuff_alloy_block', 'Block of Tuff Alloy', 'stone', 2, 3, 'pickaxe', 'stone', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/tuff_alloy')

    registerOtherMod('create', 'iron_alloy_block', 'Block of Iron Alloy', 'stone', 2, 3, 'pickaxe', 'stone', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/iron_alloy')
    registerOtherMod('create', 'zinc_alloy_block', 'Block of Zinc Alloy', 'stone', 2, 3, 'pickaxe', 'stone', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/zinc_alloy')
    registerOtherMod('create', 'gold_alloy_block', 'Block of Gold Alloy', 'stone', 2, 3, 'pickaxe', 'stone', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/gold_alloy')
    registerOtherMod('create', 'tin_alloy_block', 'Block of Tin Alloy', 'stone', 2, 3, 'pickaxe', 'stone', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/tin_alloy')
    registerOtherMod('create', 'lead_alloy_block', 'Block of Lead Alloy', 'stone', 2, 3, 'pickaxe', 'stone', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/lead_alloy')
    registerOtherMod('create', 'osmium_alloy_block', 'Block of Osmium Alloy', 'stone', 2, 3, 'pickaxe', 'stone', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/osmium_alloy')
    registerOtherMod('create', 'electrum_alloy_block', 'Block of Electrum Alloy', 'stone', 2, 3, 'pickaxe', 'stone', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/electrum_alloy')
    registerOtherMod('create', 'uranium_alloy_block', 'Block of Uranium Alloy', 'stone', 2, 3, 'pickaxe', 'stone', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/uranium_alloy')
    registerOtherMod('create', 'netherite_alloy_block', 'Block of Netherite Alloy', 'stone', 2, 3, 'pickaxe', 'stone', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/netherite_alloy')

    registerOtherMod('create', 'red_iron_alloy_block', 'Block of Red Iron Alloy', 'stone', 2, 3, 'pickaxe', 'stone', true).tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/red_iron_alloy')

    /*******Actually Additions Crystals*******/
    registerOtherMod('actuallyadditions', 'zartiq_crystal_block', 'Zartiq Crystal Block', 'metal', 4, 6, 'pickaxe', 'stone', true).tagItem('actuallyadditions:crystal_blocks').tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/zartiq_crystal')
    registerOtherMod('actuallyadditions', 'empowered_zartiq_crystal_block', 'Empowered Zartiq Crystal Block', 'metal', 4, 6, 'pickaxe', 'stone', true).item(i => i.glow(true)).tagItem('actuallyadditions:empowered_crystal_blocks').tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/empowered_zartiq_crystal')
    registerOtherMod('actuallyadditions', 'zartiq_crystal_cluster', 'Light Gray Crystal Cluster', 'amethyst', 1, 2, 'pickaxe', '', false).box(4, 6, 4, 8, 10, 8).box(6, 2, 6, 10, 14, 10).box(4, 0, 4, 14, 2, 14).box(2, 0, 2, 8, 6, 8).box(8, 2, 8, 12, 8, 12).box(8, 0, 2, 12, 4, 6)
    registerOtherMod('actuallyadditions', 'inerthet_crystal_block', 'Inerthet Crystal Block', 'metal', 4, 6, 'pickaxe', 'stone', true).tagItem('actuallyadditions:crystal_blocks').tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/inerthet_crystal')
    registerOtherMod('actuallyadditions', 'empowered_inerthet_crystal_block', 'Empowered Inerthet Crystal Block', 'metal', 4, 6, 'pickaxe', 'stone', true).item(i => i.glow(true)).tagItem('actuallyadditions:empowered_crystal_blocks').tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/empowered_inerthet_crystal')
    registerOtherMod('actuallyadditions', 'inerthet_crystal_cluster', 'Gray Crystal Cluster', 'amethyst', 1, 2, 'pickaxe', '', false).box(4, 6, 4, 8, 10, 8).box(6, 2, 6, 10, 14, 10).box(4, 0, 4, 14, 2, 14).box(2, 0, 2, 8, 6, 8).box(8, 2, 8, 12, 8, 12).box(8, 0, 2, 12, 4, 6)
    registerOtherMod('actuallyadditions', 'zerbonkys_crystal_block', 'Zerbonkys Crystal Block', 'metal', 4, 6, 'pickaxe', 'stone', true).tagItem('actuallyadditions:crystal_blocks').tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/zerbonkys_crystal')
    registerOtherMod('actuallyadditions', 'empowered_zerbonkys_crystal_block', 'Empowered Zerbonkys Crystal Block', 'metal', 4, 6, 'pickaxe', 'stone', true).item(i => i.glow(true)).tagItem('actuallyadditions:empowered_crystal_blocks').tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/empowered_zerbonkys_crystal')
    registerOtherMod('actuallyadditions', 'zerbonkys_crystal_cluster', 'Brown Crystal Cluster', 'amethyst', 1, 2, 'pickaxe', '', false).box(4, 6, 4, 8, 10, 8).box(6, 2, 6, 10, 14, 10).box(4, 0, 4, 14, 2, 14).box(2, 0, 2, 8, 6, 8).box(8, 2, 8, 12, 8, 12).box(8, 0, 2, 12, 4, 6)
    registerOtherMod('actuallyadditions', 'zerbon_crystal_block', 'Zerbon Crystal Block', 'metal', 4, 6, 'pickaxe', 'stone', true).tagItem('actuallyadditions:crystal_blocks').tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/zerbon_crystal')
    registerOtherMod('actuallyadditions', 'empowered_zerbon_crystal_block', 'Empowered Zerbon Crystal Block', 'metal', 4, 6, 'pickaxe', 'stone', true).item(i => i.glow(true)).tagItem('actuallyadditions:empowered_crystal_blocks').tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/empowered_zerbon_crystal')
    registerOtherMod('actuallyadditions', 'zerbon_crystal_cluster', 'Orange Crystal Cluster', 'amethyst', 1, 2, 'pickaxe', '', false).box(4, 6, 4, 8, 10, 8).box(6, 2, 6, 10, 14, 10).box(4, 0, 4, 14, 2, 14).box(2, 0, 2, 8, 6, 8).box(8, 2, 8, 12, 8, 12).box(8, 0, 2, 12, 4, 6)
    registerOtherMod('actuallyadditions', 'lectruma_crystal_block', 'Lectruma Crystal Block', 'metal', 4, 6, 'pickaxe', 'stone', true).tagItem('actuallyadditions:crystal_blocks').tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/lectruma_crystal')
    registerOtherMod('actuallyadditions', 'empowered_lectruma_crystal_block', 'Empowered Lectruma Crystal Block', 'metal', 4, 6, 'pickaxe', 'stone', true).item(i => i.glow(true)).tagItem('actuallyadditions:empowered_crystal_blocks').tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/empowered_lectruma_crystal')
    registerOtherMod('actuallyadditions', 'lectruma_crystal_cluster', 'Yellow Crystal Cluster', 'amethyst', 1, 2, 'pickaxe', '', false).box(4, 6, 4, 8, 10, 8).box(6, 2, 6, 10, 14, 10).box(4, 0, 4, 14, 2, 14).box(2, 0, 2, 8, 6, 8).box(8, 2, 8, 12, 8, 12).box(8, 0, 2, 12, 4, 6)
    registerOtherMod('actuallyadditions', 'uranima_crystal_block', 'Uranima Crystal Block', 'metal', 4, 6, 'pickaxe', 'stone', true).tagItem('actuallyadditions:crystal_blocks').tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/uranima_crystal')
    registerOtherMod('actuallyadditions', 'empowered_uranima_crystal_block', 'Empowered Uranima Crystal Block', 'metal', 4, 6, 'pickaxe', 'stone', true).item(i => i.glow(true)).tagItem('actuallyadditions:empowered_crystal_blocks').tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/empowered_uranima_crystal')
    registerOtherMod('actuallyadditions', 'uranima_crystal_cluster', 'Lime Crystal Cluster', 'amethyst', 1, 2, 'pickaxe', '', false).box(4, 6, 4, 8, 10, 8).box(6, 2, 6, 10, 14, 10).box(4, 0, 4, 14, 2, 14).box(2, 0, 2, 8, 6, 8).box(8, 2, 8, 12, 8, 12).box(8, 0, 2, 12, 4, 6)
    registerOtherMod('actuallyadditions', 'mosium_crystal_block', 'Mosium Crystal Block', 'metal', 4, 6, 'pickaxe', 'stone', true).tagItem('actuallyadditions:crystal_blocks').tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/mosium_crystal')
    registerOtherMod('actuallyadditions', 'empowered_mosium_crystal_block', 'Empowered Mosium Crystal Block', 'metal', 4, 6, 'pickaxe', 'stone', true).item(i => i.glow(true)).tagItem('actuallyadditions:empowered_crystal_blocks').tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/empowered_mosium_crystal')
    registerOtherMod('actuallyadditions', 'mosium_crystal_cluster', 'Cyan Crystal Cluster', 'amethyst', 1, 2, 'pickaxe', '', false).box(4, 6, 4, 8, 10, 8).box(6, 2, 6, 10, 14, 10).box(4, 0, 4, 14, 2, 14).box(2, 0, 2, 8, 6, 8).box(8, 2, 8, 12, 8, 12).box(8, 0, 2, 12, 4, 6)
    registerOtherMod('actuallyadditions', 'richoum_crystal_block', 'Richoum Crystal Block', 'metal', 4, 6, 'pickaxe', 'stone', true).tagItem('actuallyadditions:crystal_blocks').tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/richoum_crystal')
    registerOtherMod('actuallyadditions', 'empowered_richoum_crystal_block', 'Empowered Richoum Crystal Block', 'metal', 4, 6, 'pickaxe', 'stone', true).item(i => i.glow(true)).tagItem('actuallyadditions:empowered_crystal_blocks').tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/empowered_richoum_crystal')
    registerOtherMod('actuallyadditions', 'richoum_crystal_cluster', 'Purple Crystal Cluster', 'amethyst', 1, 2, 'pickaxe', '', false).box(4, 6, 4, 8, 10, 8).box(6, 2, 6, 10, 14, 10).box(4, 0, 4, 14, 2, 14).box(2, 0, 2, 8, 6, 8).box(8, 2, 8, 12, 8, 12).box(8, 0, 2, 12, 4, 6)
    registerOtherMod('actuallyadditions', 'mythase_crystal_block', 'Mythase Crystal Block', 'metal', 4, 6, 'pickaxe', 'stone', true).tagItem('actuallyadditions:crystal_blocks').tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/mythase_crystal')
    registerOtherMod('actuallyadditions', 'empowered_mythase_crystal_block', 'Empowered Mythase Crystal Block', 'metal', 4, 6, 'pickaxe', 'stone', true).item(i => i.glow(true))
    registerOtherMod('actuallyadditions', 'mythase_crystal_cluster', 'Magenta Crystal Cluster', 'amethyst', 1, 2, 'pickaxe', '', false).box(4, 6, 4, 8, 10, 8).box(6, 2, 6, 10, 14, 10).box(4, 0, 4, 14, 2, 14).box(2, 0, 2, 8, 6, 8).box(8, 2, 8, 12, 8, 12).box(8, 0, 2, 12, 4, 6)
    registerOtherMod('actuallyadditions', 'surcea_crystal_block', 'Surcea Crystal Block', 'metal', 4, 6, 'pickaxe', 'stone', true).tagItem('actuallyadditions:crystal_blocks').tagBoth('c:storage_blocks').tagBoth('c:storage_blocks/surcea_crystal')
    registerOtherMod('actuallyadditions', 'empowered_surcea_crystal_block', 'Empowered Surcea Crystal Block', 'metal', 4, 6, 'pickaxe', 'stone', true).item(i => i.glow(true))
    registerOtherMod('actuallyadditions', 'surcea_crystal_cluster', 'Pink Crystal Cluster', 'amethyst', 1, 2, 'pickaxe', '', false).box(4, 6, 4, 8, 10, 8).box(6, 2, 6, 10, 14, 10).box(4, 0, 4, 14, 2, 14).box(2, 0, 2, 8, 6, 8).box(8, 2, 8, 12, 8, 12).box(8, 0, 2, 12, 4, 6)
})

BlockEvents.modification(e => {
    e.modify('minecraft:crafting_table', block => {
        block.requiresTool = true
    })
})