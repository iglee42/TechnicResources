// StartupEvents.registry('block' ,e=> {
    /************************************Normal Block************************************/
    //register('platinum_block','Block of Platinum','iron',1,'pickaxe',2)
    //register('fluxdust_block','Block of Fluxdust','sand',0.5,'shovel',0)
    //register('minecraft_ore_block','Block of Minecraft Ores','iron',2,'pickaxe',1)
    //register('computer_block','Computer','iron',235,'pickaxe',2)
    //e.create('immersiveengineering:sheetmetal_osmium').material('iron').hardness(2).displayName('Osmium Sheetmetal').harvestTool('pickaxe',2)

    /************************************Function************************************/
    // function register(unlocname,displayname,type,hardness,tool,harvestLevel){
    //     e.create('technicresources:'+unlocname).material(type).hardness(hardness).displayName(displayname).harvestTool(tool,harvestLevel)
    // }
// })

const $CreateCasingUtilsJS = Java.loadClass("fr.iglee42.createcasing.compat.kubejs.CreateCasingUtilsJS")

CreateCasingEvents.casing(event => {
    event.create('stone').connectedTexture($CreateCasingUtilsJS.omni('kubejs:block/stone_casing')).build()
    console.log("Stone Casing Registered")
})