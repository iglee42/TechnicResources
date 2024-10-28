//priority 1000
Platform.mods.kubejs.name = "TechnicResources"
const $CreateCasing = Java.loadClass('fr.iglee42.createcasing.CreateCasing')
const $CreateCasingApi = Java.loadClass('fr.iglee42.createcasing.api.CreateCasingApi')
const $CTSpriteShifter = Java.loadClass('com.simibubi.create.foundation.block.connected.CTSpriteShifter')
const $AllCTTypes = Java.loadClass('com.simibubi.create.foundation.block.connected.AllCTTypes')
const $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
const $PartialModel = Java.loadClass('com.jozufozu.flywheel.core.PartialModel')

StartupEvents.init(event => {
    $CreateCasingApi.createCasing($CreateCasing.REGISTRATE, 'stone', $CTSpriteShifter.getCT($AllCTTypes.RECTANGLE, new $ResourceLocation("kubejs", "block/stone_casing"), new $ResourceLocation("kubejs", "block/stone_casing_connected")))
    $CreateCasingApi.createCasing($CreateCasing.REGISTRATE, 'iron', $CTSpriteShifter.getCT($AllCTTypes.OMNIDIRECTIONAL, new $ResourceLocation("kubejs", "block/iron_casing"), new $ResourceLocation("kubejs", "block/iron_casing_connected")))

    $CreateCasingApi.createSmallCogwheel($CreateCasing.REGISTRATE, 'stone')
    $CreateCasingApi.createLargeCogwheel($CreateCasing.REGISTRATE, 'stone',
        new $PartialModel(
            //Chemin de la texture depuis le dossier models
            //Il faut bien prendre le model shaftless de la large cogwheel sinon le shaft apparaitra deux fois en jeu
            new $ResourceLocation("createcasing", "block/stone_large_cogwheel_shaftless")
        )
    )

})