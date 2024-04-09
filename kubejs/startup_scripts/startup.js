//priority 1000
const $CreateCasing = Java.loadClass('fr.iglee42.createcasing.CreateCasing')
const $CreateCasingApi = Java.loadClass('fr.iglee42.createcasing.api.CreateCasingApi')
const $CTSpriteShifter = Java.loadClass('com.simibubi.create.foundation.block.connected.CTSpriteShifter')
const $AllCTTypes = Java.loadClass('com.simibubi.create.foundation.block.connected.AllCTTypes')
const $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')

StartupEvents.init(event => {
    $CreateCasingApi.createCasing($CreateCasing.REGISTRATE, 'stone', $CTSpriteShifter.getCT($AllCTTypes.RECTANGLE, new $ResourceLocation("kubejs", "block/stone_casing"), new $ResourceLocation("kubejs", "block/stone_casing_connected")))
    $CreateCasingApi.createCasing($CreateCasing.REGISTRATE, 'iron', $CTSpriteShifter.getCT($AllCTTypes.RECTANGLE, new $ResourceLocation("kubejs", "block/iron_casing"), new $ResourceLocation("kubejs", "block/iron_casing_connected")))
})