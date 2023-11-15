StartupEvents.registry('block' ,e=> {
    /************************************Normal Block************************************/
    //register('platinum_block','Block of Platinum','iron',1,'pickaxe',2)
    //register('fluxdust_block','Block of Fluxdust','sand',0.5,'shovel',0)
    //register('minecraft_ore_block','Block of Minecraft Ores','iron',2,'pickaxe',1)
    //register('computer_block','Computer','iron',235,'pickaxe',2)
    //e.create('immersiveengineering:sheetmetal_osmium').material('iron').hardness(2).displayName('Osmium Sheetmetal').harvestTool('pickaxe',2)

    /**************Chapter 1**************/

    register('compressed_wall1', 'Compressed Compact Machine Wall','metal',4,128,'pickaxe','iron',true)
    register('compressed_wall2', 'Double Compressed Compact Machine Wall','metal',5,128,'pickaxe','iron',true)


    /************************************Function************************************/
    function register(unlocname, displayname, type, hardness, resistance, tool, toolLevel,requires){
         return e.create('technicresources:' + unlocname).material(type).hardness(hardness).resistance(resistance).displayName(displayname).tagBlock('minecraft:mineable/' + tool).tagBlock('minecraft:needs_' + toolLevel+'_tool').requiresTool(requires)
     }
})

const $CreateCasingUtilsJS = Java.loadClass("fr.iglee42.createcasing.compat.kubejs.CreateCasingUtilsJS")

CreateCasingEvents.casing(event => {
    event.create('stone').connectedTexture($CreateCasingUtilsJS.omni('kubejs:block/stone_casing')).build()
    console.log("Stone Casing Registered")
})