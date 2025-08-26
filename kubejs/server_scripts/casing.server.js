//priority: 9002
LootJS.lootTables(event => {
    for (let c in global.casings) {
        let casing = global.casings[c]
        addDrop(casing.casing.get(), casing.casing.asItem());
        if (casing.encasedShaft !== null) addDrop(casing.encasedShaft.get(), Item.of("create:shaft"));
        if (casing.encasedCogwheel !== null) addDrop(casing.encasedCogwheel.get(), Item.of("create:cogwheel"));
        if (casing.encasedLargeCogwheel !== null) addDrop(casing.encasedLargeCogwheel.get(), Item.of("create:large_cogwheel"));
        if (casing.encasedPipe !== null) addDrop(casing.encasedPipe.get(), Item.of("create:fluid_pipe"));
        if (casing.gearbox !== null) addDrop(casing.gearbox.get(), casing.gearbox.asItem());
        if (casing.depot !== null) addDrop(casing.depot.get(), casing.depot.asItem());
        if (casing.mixer !== null) addDrop(casing.mixer.get(), casing.mixer.asItem());
        if (casing.press !== null) addDrop(casing.press.get(), casing.press.asItem());
    }
    for (let cog in global.cogwheels) {
        let cogwheel = global.cogwheels[cog]
        if (cogwheel.cogwheel !== null) addDrop(cogwheel.cogwheel.get(), cogwheel.cogwheel.asItem());
        if (cogwheel.largeCogwheel !== null) addDrop(cogwheel.largeCogwheel.get(), cogwheel.largeCogwheel.asItem());
    }
    function addDrop(block, item) {
        let blockId = block.getId();
        let idSplit = blockId.split(':');
        event.create(idSplit[0] + ":blocks/" + idSplit[1]).createPool( p =>{
            p.when(cond => cond.survivesExplosion());
            p.addEntry(item)
        })
    }
})

ServerEvents.tags("block",l => {
    for (let c in global.casings) {
        let casing = global.casings[c]
        l.add("mineable/pickaxe", casing.blocks.map(c=>c.getId()));
        l.add("mineable/axe", casing.blocks.map(c => c.getId()));
    }
    for (let c in global.cogwheels) {
        let casing = global.cogwheels[c]
        l.add("mineable/pickaxe", casing.blocks.map(c => c.getId()));
        l.add("mineable/axe", casing.blocks.map(c => c.getId()));
    }
})
ServerEvents.tags("item", l => {
    for (let c in global.cogwheels) {
        let casing = global.cogwheels[c]
        if (casing.cogwheel !== null) l.add("create:coghweel", casing.cogwheel.getId());
    }
})