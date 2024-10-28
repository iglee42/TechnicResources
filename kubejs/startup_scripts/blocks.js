
const $IntegerProperty = Java.loadClass('net.minecraft.world.level.block.state.properties.IntegerProperty')

console.info("Hello Blocks 👋")
StartupEvents.registry('block', e => {
    global.STAGE = $IntegerProperty.create("stage", 0, 2)
    /************************************Normal Block************************************/
    //register('platinum_block','Block of Platinum','iron',1,'pickaxe',2)
    //register('fluxdust_block','Block of Fluxdust','sand',0,'shovel',0)
    //register('minecraft_ore_block','Block of Minecraft Ores','iron',2,'pickaxe',1)
    //register('computer_block','Computer','iron',235,'pickaxe',2)
    //e.create('immersiveengineering:sheetmetal_osmium').material('iron').hardness(2).displayName('Osmium Sheetmetal').harvestTool('pickaxe',2)

    registerUnbreakable('bedrock_room_manager', 'Bedrock Room Manager', 'stone').property(global.STAGE).defaultState(c => {
        c.set(global.STAGE, 0)
    })
    register('small_bedrock', 'Small Bedrock', 'stone', 4, 128, 'pickaxe', 'stone', true).defaultCutout().model('technicresources:block/small_bedrock').waterlogged().fullBlock(false).notSolid().opaque(false).box(4, 4, 4, 12, 12, 12)


    /**************Chapter 1**************/

    register('compressed_wall1', 'Compressed Compact Machine Wall', 'metal', 4, 128, 'pickaxe', 'iron', true)
    register('compressed_wall2', 'Double Compressed Compact Machine Wall', 'metal', 5, 128, 'pickaxe', 'iron', true)


    /************************************Function************************************/
    function registerUnbreakable(unlocname, displayname, type) {
        return e.create('technicresources:' + unlocname).mapColor(type).soundType(type).unbreakable().displayName(displayname)
    }
    function register(unlocname, displayname, type, hardness, resistance, tool, toolLevel, requires) {
        return e.create('technicresources:' + unlocname).mapColor(type).soundType(type).hardness(hardness).resistance(resistance).displayName(displayname).tagBlock('minecraft:mineable/' + tool).tagBlock('minecraft:needs_' + toolLevel + '_tool').requiresTool(requires)
    }
})

BlockEvents.modification(e => {
    e.modify('minecraft:crafting_table', block => {
        block.requiresTool = true
    })
})