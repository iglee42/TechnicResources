//priority: 9002


(config => {//
    //Java Imports
    const $CreateCasing = Java.loadClass('fr.iglee42.createcasing.CreateCasing')
    const $CreateCasingApi = Java.loadClass('fr.iglee42.createcasing.api.CreateCasingApi')
    const $CTSpriteShifter = Java.loadClass('com.simibubi.create.foundation.block.connected.CTSpriteShifter')
    const $AllCTTypes = Java.loadClass('com.simibubi.create.foundation.block.connected.AllCTTypes')
    const $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
    const $PartialModel = Java.loadClass('dev.engine_room.flywheel.lib.model.baked.PartialModel')
    const ArrayList = Java.loadClass('java.util.ArrayList')

    const NAMESPACE = config.namespace || 'kubejs'

    const LARGE_COGWHEELS = config.largeCogwheels || 'large_cogwheels'
    const CASINGS = config.casing || 'casings'
    const ENCASED_COGWHEELS = config.encasedCogwheels || 'encased_cogwheels'

    global.textures = {
        namespace: NAMESPACE,
        casings: config.textureFolders?.casings || CASINGS,
        cogwheels: config.textureFolders?.cogwheels || "cogwheels",
        largeCogwheels: config.textureFolders?.largeCogwheels || LARGE_COGWHEELS,
        encasedCogwheels: config.textureFolders?.encasedCogwheels || ENCASED_COGWHEELS,
        gearboxes: config.textureFolders?.gearboxes || 'gearboxes',
        mixerSides: config.textureFolders?.mixerSides || 'mixer_sides',
        pressTops: config.textureFolders?.pressTops || 'press_tops',
        pressBottoms: config.textureFolders?.pressBottoms || 'press_bottoms',
        pressSides: config.textureFolders?.pressSides || 'press_sides',
        depotTops: config.textureFolders?.depotTops || 'depot_tops',
        depotSides: config.textureFolders?.depotSides || 'depot_sides'
    }

    global.casings = {}
    global.cogwheels = {}

    // Register your casing in this event
    StartupEvents.init(event => {
        global.REGISTRATE = $CreateCasing.REGISTRATE
        if (config.casings instanceof ArrayList) {
            config.casings.forEach(casingJson => {
                console.info(`Registering casing: ${casingJson}`)
                createCasing(casingJson, config)
            })
        }
        if (config.cogwheels instanceof ArrayList) {
            config.cogwheels.forEach(cogwheelJson => {
                createCogwheelSet(cogwheelJson, config)
            })
        }
    })

    StartupEvents.modifyCreativeTab('createcasing:tab', event => {
        for (const c in global.casings) {
            let casing = global.casings[c]
            if (casing.gearbox !== null) event.addAfter(`createcasing:${casing.name}_gearbox`,`createcasing:vertical_${casing.name}_gearbox`)
        }
    })

    // WORK


    function createCogwheelSet(cogwheelJson, config) {
        let name = cogwheelJson.name
        let hasCogwheel = "cogwheel" in cogwheelJson ? cogwheelJson.cogwheel : config.cogwheel
        let hasLargeCogwheel = "largeCogwheel" in cogwheelJson ? cogwheelJson.largeCogwheel : config.largeCogwheel
        let cogwheel = $CreateCasingApi.createSmallCogwheel(
            global.REGISTRATE,
            name,
            $PartialModel.of(
                $ResourceLocation.fromNamespaceAndPath(NAMESPACE, "block/" + (config.textureFolders?.cogwheels || "cogwheels") + "/" + name)
            )
        )

        let largeCogwheel = $CreateCasingApi.createLargeCogwheel(
            global.REGISTRATE,
            name,
            $PartialModel.of(
                $ResourceLocation.fromNamespaceAndPath(NAMESPACE, "block/" + LARGE_COGWHEELS + "/" + name + "_shaftless")
            )
        )
        global.cogwheels[name] = {
            name: name,
            cogwheel: hasCogwheel ? cogwheel : null,
            largeCogwheel: hasLargeCogwheel ? largeCogwheel : null,
            blocks: [cogwheel, largeCogwheel].filter(b => b !== null)
        }
    }

    function createCasing(casingJson, config) {
        let name = casingJson.name
        let hasShaft = "encasedShaft" in casingJson ? casingJson.encasedShaft : config.encasedShaft
        let hasCogwheel = "encasedCogwheel" in casingJson ? casingJson.encasedCogwheel : config.encasedCogwheel
        let hasLargeCogwheel = "encasedLargeCogwheel" in casingJson ? casingJson.encasedLargeCogwheel : config.encasedLargeCogwheel
        let hasPipe = "encasedPipe" in casingJson ? casingJson.encasedPipe : config.encasedPipe
        let hasGearbox = "gearbox" in casingJson ? casingJson.gearbox : config.gearbox
        let hasDepot = "depot" in casingJson ? casingJson.depot : config.depot
        let hasPress = "press" in casingJson ? casingJson.press : config.press
        let hasMixer = "mixer" in casingJson ? casingJson.mixer : config.mixer

        let textureFile = $ResourceLocation.fromNamespaceAndPath(NAMESPACE, "block/" + CASINGS + "/" + name)
        let connectedTextureFile = $ResourceLocation.fromNamespaceAndPath(textureFile.getNamespace(), textureFile.getPath() + "_connected")
        let connectedTexture = $CTSpriteShifter.getCT($AllCTTypes.OMNIDIRECTIONAL, textureFile, connectedTextureFile)

        let encasedCogwheelTextureFile = $ResourceLocation.fromNamespaceAndPath(NAMESPACE, "block/" + ENCASED_COGWHEELS + name)
        let encasedCogwheelConnectedFile = $ResourceLocation.fromNamespaceAndPath(encasedCogwheelTextureFile.getNamespace(), encasedCogwheelTextureFile.getPath() + "_connected")
        let encasedCogwheelConnectedVertical = $CTSpriteShifter.getCT($AllCTTypes.VERTICAL, encasedCogwheelTextureFile, encasedCogwheelConnectedFile)
        let encasedCogwheelConnectedHorizontal = $CTSpriteShifter.getCT($AllCTTypes.HORIZONTAL, encasedCogwheelTextureFile, encasedCogwheelConnectedFile)

        let casing = $CreateCasingApi.createCasing(
            global.REGISTRATE,
            name,
            connectedTexture
        )

        global.casings[name] = {
            name: name,
            casing: casing,
            connectedTexture: connectedTexture,
        }

        global.casings[name].encasedShaft = !hasShaft ? null : $CreateCasingApi.createEncasedShaft(global.REGISTRATE, name, casing, connectedTexture)
        global.casings[name].encasedCogwheel = !hasCogwheel ? null : $CreateCasingApi.createEncasedCogwheel(global.REGISTRATE, name, casing, connectedTexture, encasedCogwheelConnectedVertical, encasedCogwheelConnectedHorizontal)
        global.casings[name].encasedLargeCogwheel = !hasLargeCogwheel ? null : $CreateCasingApi.createEncasedLargeCogwheel(global.REGISTRATE, name, casing, connectedTexture)
        global.casings[name].encasedPipe = !hasPipe ? null : $CreateCasingApi.createEncasedPipe(global.REGISTRATE, name, casing, connectedTexture)
        global.casings[name].gearbox = !hasGearbox ? null : $CreateCasingApi.createGearbox(global.REGISTRATE, name, connectedTexture, true)
        global.casings[name].depot = !hasDepot ? null : $CreateCasingApi.createDepot(global.REGISTRATE, name)
        global.casings[name].press = !hasPress ? null : $CreateCasingApi.createPress(global.REGISTRATE, name)
        global.casings[name].mixer = !hasMixer ? null : $CreateCasingApi.createMixer(global.REGISTRATE, name)

        global.casings[name].blocks = [
            casing,
            global.casings[name].encasedShaft,
            global.casings[name].encasedCogwheel,
            global.casings[name].encasedLargeCogwheel,
            global.casings[name].encasedPipe,
            global.casings[name].gearbox,
            global.casings[name].depot,
            global.casings[name].press,
            global.casings[name].mixer
        ].filter(b => b !== null)
    }
})(JsonIO.read('kubejs/config/encased.json5') || {})
