
ServerEvents.recipes(e => {
    function replaceIO(input, output) {
        e.replaceInput({}, input, output)
        e.replaceOutput({}, input, output)
    }

    replaceIO('ad_astra:steel_block', '#c:storage_blocks/steel')
    replaceIO('ad_astra:steel_ingot', '#c:ingots/steel')
    replaceIO('ad_astra:steel_nugget', '#c:nuggets/steel')
    replaceIO('create:copper_sheet', '#c:plates/copper')
    replaceIO('create:brass_sheet', '#c:plates/brass')
    replaceIO('create:iron_sheet', '#c:plates/iron')
    replaceIO('create:golden_sheet', '#c:plates/golden')
    replaceIO('createaddition:electrum_sheet', '#c:plates/electrum')
    replaceIO('createdeco:andesite_sheet', '#c:plates/andesite_alloy')
    replaceIO('createdeco:zinc_sheet', '#c:plates/zinc')
    replaceIO('createdeco:netherite_sheet', '#c:plates/netherite')
    replaceIO('createdeco:industrial_iron_sheet', '#c:plates/industrial_iron')
    replaceIO('ad_astra:steel_sheet', '#c:plates/steel')
    replaceIO('ad_astra:desh_sheet', '#c:plates/desh')
    replaceIO('ad_astra:ostrum_sheet', '#c:plates/ostrum')
    replaceIO('ad_astra:calorite_sheet', '#c:plates/calorite')
    replaceIO('createaddition:iron_rod', '#c:rods/iron')
    replaceIO('createaddition:copper_rod', '#c:rods/copper')
    replaceIO('createaddition:gold_rod', '#c:rods/gold')
    replaceIO('createaddition:electrum_rod', '#c:rods/electrum')
    replaceIO('createaddition:brass_rod', '#c:rods/brass')
    replaceIO('ad_astra:iron_rod', '#c:rods/iron')
    replaceIO('ad_astra:steel_rod', '#c:rods/steel')
    replaceIO('createaddition:iron_wire', '#c:wires/iron')
    replaceIO('createaddition:copper_wire', '#c:wires/copper')
    replaceIO('createaddition:gold_wire', '#c:wires/gold')
    replaceIO('createaddition:electrum_wire', '#c:wires/electrum')

    e.remove([
        'create:pressing/copper_ingot',
        'create:pressing/brass_ingot',
        'create:pressing/iron_ingot',
        'create:pressing/gold_ingot',
        'createaddition:pressing/electrum_ingot',
        'createdeco:pressing/andesite_sheet',
        'createdeco:pressing/zinc_sheet',
        'createdeco:pressing/netherite_sheet',
        'createdeco:pressing/industrial_iron_sheet',
        'create:pressing/steel_ingot',
        'create:pressing/desh_ingot',
        'create:pressing/ostrum_ingot',
        'create:pressing/calorite_ingot',
        'ad_astra:compressing/iron_plate_from_compressing_iron_ingot',
        'ad_astra:compressing/iron_plate_from_compressing_iron_block',
        'ad_astra:compressing/calorite_plate_from_compressing_calorite_ingots',
        'ad_astra:compressing/calorite_plate_from_compressing_calorite_blocks',
        'ad_astra:compressing/desh_plate_from_compressing_desh_ingots',
        'ad_astra:compressing/desh_plate_from_compressing_desh_blocks',
        'ad_astra:compressing/ostrum_plate_from_compressing_ostrum_ingots',
        'ad_astra:compressing/ostrum_plate_from_compressing_ostrum_blocks',
        'ad_astra:compressing/steel_plate_from_compressing_steel_ingots',
        'ad_astra:compressing/steel_plate_from_compressing_steel_blocks',
        'pneumaticcraft:copper_ingot_from_nugget',
        'pneumaticcraft:copper_nugget',
        'createaddition:pressing/zinc_ingot',
        'pneumaticcraft:compressed_iron_gear',
        'createaddition:rolling/iron_ingot',
        'createaddition:rolling/copper_ingot',
        'createaddition:rolling/gold_ingot',
        'createaddition:rolling/electrum_ingot',
        'createaddition:rolling/brass_ingot',
        'ad_astra:iron_rod',
        'ad_astra:iron_rod',
        'createaddition:rolling/copper_plate',
        'createaddition:rolling/iron_plate',
        'createaddition:rolling/gold_plate',
        'createaddition:rolling/electrum_plate',
    ])

    function plateGearRodWire(material, base) {
        e.shapeless('technicresources:' + material + '_plate', ['technicresources:metal_hammer', '2x #' + base]).damageIngredient('technicresources:metal_hammer').id('technicresources:shapeless/plates/' + material)
        e.shaped('technicresources:' + material+'_gear', [' A ', 'ABA', ' A '], { A: '#c:plates/' + material, B: 'technicresources:metal_scissors' }).damageIngredient('technicresources:metal_scissors').id('technicresources:shaped/gears/' + material)
        e.custom({ 'type': 'create:pressing', 'ingredients': [{ 'tag': base }], 'results': [{ 'id': 'technicresources:' + material + '_plate' }] }).id('technicresources:pressing/plates/' + material)
        //e.custom({ 'type': 'ad_astra:compressing', 'cookingtime': 100, 'energy': 20, 'ingredient': { 'tag': base }, 'result': { 'count': 1, 'id': 'technicresources:' + material + '_plate' } }).id('technicresources:compressing/plates/' + material + '_1')
        //if (material !== 'wooden' && material !== 'stone') e.custom({ 'type': 'ad_astra:compressing', 'cookingtime': 800, 'energy': 20, 'ingredient': { 'tag': 'c:storage_blocks/' + material }, 'result': { 'count': 9, 'id': 'technicresources:' + material + '_plate' } }).id('technicresources:compressing/plates/' + material + '_9')
        if (material !== 'wooden') {
            e.custom({ "type": "createaddition:rolling", "input": { "tag": base }, "result": { "id": 'technicresources:' + material + '_rod', "count": 2 } }).id('technicresources:rolling/rods/' + material)
            e.shaped(Item.of('technicresources:' + material+'_rod',4), ['A', 'A'], { A: '#c:plates/' + material }).id('technicresources:shaped/rods/' + material)
        }
        e.custom({ "type": "createaddition:rolling", "input": { "tag": 'c:plates/' + material }, "result": { "id": 'technicresources:' + material + '_wire', "count": 2 } }).id('technicresources:rolling/wires/' + material)
    }

    plateGearRodWire('compressed_iron', 'c:ingots/compressed_iron')
    plateGearRodWire('wooden', 'minecraft:logs_that_burn')
    plateGearRodWire('stone', 'c:cobblestones')
    plateGearRodWire('copper', 'c:ingots/copper')
    plateGearRodWire('iron', 'c:ingots/iron')
    plateGearRodWire('gold', 'c:ingots/gold')
    plateGearRodWire('diamond', 'c:gems/diamond')
    plateGearRodWire('netherite', 'c:ingots/netherite')
    plateGearRodWire('uraninite', 'c:gems/uraninite')
    plateGearRodWire('redstone', 'c:ingots/redstone_ingot')
    plateGearRodWire('emerald', 'c:gems/emerald')
    plateGearRodWire('lapis_lazuli', 'c:gems/lapis')
    plateGearRodWire('quartz', 'c:gems/quartz')
    plateGearRodWire('amethyst', 'c:gems/amethyst')
    plateGearRodWire('zinc', 'c:ingots/zinc')
    plateGearRodWire('andesite_alloy', 'c:ingots/andesite_alloy')
    plateGearRodWire('brass', 'c:ingots/brass')
    plateGearRodWire('electrum', 'c:ingots/electrum')
    plateGearRodWire('certus_quartz', 'c:gems/certus_quartz')
    plateGearRodWire('fluix', 'c:gems/fluix')
    plateGearRodWire('crystalized_menril', 'c:gems/crystalized_menril')
    plateGearRodWire('crystalized_chorus', 'c:gems/crystalized_chorus')
    //plateGearRodWire('desh', 'c:ingots/desh')
    //plateGearRodWire('ostrum', 'c:ingots/ostrum')
    //plateGearRodWire('calorite', 'c:ingots/calorite')
    plateGearRodWire('bronze', 'c:ingots/bronze')
    plateGearRodWire('steel', 'c:ingots/steel')
    plateGearRodWire('refined_obsidian', 'c:ingots/refined_obsidian')
    plateGearRodWire('refined_glowstone', 'c:ingots/refined_glowstone')
    plateGearRodWire('osmium', 'c:ingots/osmium')
    plateGearRodWire('tin', 'c:ingots/tin')
    plateGearRodWire('lead', 'c:ingots/lead')
    plateGearRodWire('uranium', 'c:ingots/uranium')
    plateGearRodWire('fluorite', 'c:gems/fluorite')
    plateGearRodWire('black_quartz', 'c:gems/black_quartz')
    //plateGearRodWire('industrial_iron', 'c:ingots/industrial_iron')
})

ServerEvents.tags('item', event => {

    /********Steel********/
    event.remove('c:steel_ingots', 'ad_astra:steel_ingot')
    event.remove('ad_astra:steel_ingots', 'ad_astra:steel_ingot')
    event.remove('c:ingots/steel', 'ad_astra:steel_ingot')
    event.remove('c:ingots', 'ad_astra:steel_ingot')

    event.remove('c:steel_nuggets', 'ad_astra:steel_nugget')
    event.remove('ad_astra:steel_nuggets', 'ad_astra:steel_nugget')
    event.remove('c:nuggets/steel', 'ad_astra:steel_nugget')
    event.remove('c:nuggets', 'ad_astra:steel_nugget')

    event.remove('ad_astra:steel_blocks', 'ad_astra:steel_block')
    event.remove('c:steel_blocks', 'ad_astra:steel_block')
    event.remove('c:storage_blocks/steel', 'ad_astra:steel_block')
    event.remove('c:storage_blocks', 'ad_astra:steel_block')

    /********Iron Plates********/
    event.remove('c:iron_plates', 'ad_astra:iron_plate')
    event.remove('ad_astra:iron_plates', 'ad_astra:iron_plate')
    event.remove('c:plates/iron', 'ad_astra:iron_plate')
    event.remove('c:plates', 'ad_astra:iron_plate')
    event.remove('railways:internal/plates/iron_plates', 'ad_astra:iron_plate')
    event.remove('c:plates', 'create:iron_sheet')
    event.remove('c:plates/iron', 'create:iron_sheet')
    event.remove('createdeco:internal/plates/iron_plates', 'create:iron_sheet')
    event.add('createdeco:internal/plates/iron_plates', 'technicresources:iron_plate')

    /********Zinc Plates********/
    event.remove('c:plates/zinc', 'createaddition:zinc_sheet')
    event.remove('c:plates', 'createaddition:zinc_sheet')

    /********Copper Plates********/
    event.remove('c:plates', 'create:copper_sheet')
    event.remove('c:plates/copper', 'create:copper_sheet')
    event.remove('createdeco:internal/plates/copper_plates', 'create:copper_sheet')
    event.add('createdeco:internal/plates/copper_plates', 'technicresources:copper_plate')

    /********Brass Plates********/
    event.remove('c:plates', 'create:brass_sheet')
    event.remove('c:plates/brass', 'create:brass_sheet')
    event.remove('createdeco:internal/plates/brass_plates', 'create:brass_sheet')
    event.add('createdeco:internal/plates/brass_plates', 'technicresources:brass_plate')

    /********Gold Plates********/
    event.remove('c:plates', 'create:golden_sheet')
    event.remove('c:plates/gold', 'create:golden_sheet')
    event.remove('createdeco:internal/plates/gold_plates', 'create:golden_sheet')
    event.remove('minecraft:piglin_loved', 'create:golden_sheet')
    event.add('createdeco:internal/plates/gold_plates', 'technicresources:gold_plate')

    /********Electrum Plates********/
    event.remove('c:plates', 'createaddition:electrum_sheet')
    event.remove('c:plates/electrum', 'createaddition:electrum_sheet')

    /********Andesite Alloy Plates********/
    event.remove('createdeco:internal/plates/andesite_plates', 'createdeco:andesite_sheet')
    event.add('createdeco:internal/plates/andesite_plates', 'technicresources:andesite_alloy_plate')

    /********Zinc Plates********/
    event.remove('createdeco:internal/plates/zinc_plates', 'createdeco:zinc_sheet')
    event.add('createdeco:internal/plates/zinc_plates', 'technicresources:zinc_plate')

    /********Netherite Plates********/
    event.remove('createdeco:internal/plates/netherite_plates', 'createdeco:netherite_sheet')
    event.add('createdeco:internal/plates/netherite_plates', 'technicresources:netherite_plate')

    /********Industrial Iron Plates********/
    event.remove('createdeco:internal/plates/industrial_iron_plates', 'createdeco:industrial_iron_sheet')
    event.add('createdeco:internal/plates/industrial_iron_plates', 'technicresources:industrial_iron_plate')

    /********Steel Plates********/
    event.remove('c:plates', 'ad_astra:steel_plate')
    event.remove('c:plates/steel', 'ad_astra:steel_plate')
    event.remove('ad_astra:steel_plates', 'ad_astra:steel_plate')
    event.remove('c:steel_plates', 'ad_astra:steel_plate')
    event.add('c:steel_plates', 'technicresources:steel_plate')

    /********Desh Plates********/
    event.remove('c:plates', 'ad_astra:desh_plate')
    event.remove('c:plates/desh', 'ad_astra:desh_plate')
    event.remove('ad_astra:desh_plates', 'ad_astra:desh_plate')
    event.remove('c:desh_plates', 'ad_astra:desh_plate')
    event.add('c:desh_plates', 'technicresources:desh_plate')

    /********Ostrum Plates********/
    event.remove('c:plates', 'ad_astra:ostrum_plate')
    event.remove('c:plates/ostrum', 'ad_astra:ostrum_plate')
    event.remove('ad_astra:ostrum_plates', 'ad_astra:ostrum_plate')
    event.remove('c:ostrum_plates', 'ad_astra:ostrum_plate')
    event.add('c:ostrum_plates', 'technicresources:ostrum_plate')

    /********Calorite Plates********/
    event.remove('c:plates', 'ad_astra:calorite_plate')
    event.remove('c:plates/calorite', 'ad_astra:calorite_plate')
    event.remove('ad_astra:calorite_plates', 'ad_astra:calorite_plate')
    event.remove('c:calorite_plates', 'ad_astra:calorite_plate')
    event.add('c:calorite_plates', 'technicresources:calorite_plate')

    /********Iron Rods********/
    event.remove('c:rods', 'createaddition:iron_rod')
    event.remove('c:rods/iron', 'createaddition:iron_rod')
    event.remove('c:rods/all_metal', 'createaddition:iron_rod')
    event.remove('ad_astra:iron_rods', 'createaddition:iron_rod')
    event.remove('c:rods', 'ad_astra:iron_rod')
    event.remove('c:rods/iron', 'ad_astra:iron_rod')
    event.remove('ad_astra:iron_rods', 'ad_astra:iron_rod')
    event.remove('c:iron_rods', 'ad_astra:iron_rod')

    /********Copper Rod********/
    event.remove('c:rods', 'createaddition:copper_rod')
    event.remove('c:rods/copper', 'createaddition:copper_rod')
    event.remove('c:rods/all_metal', 'createaddition:copper_rod')

    /********Gold Rod********/
    event.remove('c:rods', 'createaddition:gold_rod')
    event.remove('c:rods/gold', 'createaddition:gold_rod')
    event.remove('c:rods/all_metal', 'createaddition:gold_rod')

    /********Brass Rod********/
    event.remove('c:rods', 'createaddition:brass_rod')
    event.remove('c:rods/brass', 'createaddition:brass_rod')
    event.remove('c:rods/all_metal', 'createaddition:brass_rod')

    /********Electrum Rod********/
    event.remove('c:rods', 'createaddition:electrum_rod')
    event.remove('c:rods/electrum', 'createaddition:electrum_rod')
    event.remove('c:rods/all_metal', 'createaddition:electrum_rod')

    /********Steel Rod********/
    event.remove('c:rods', 'ad_astra:steel_rod')
    event.remove('c:rods/steel', 'ad_astra:steel_rod')
    event.remove('ad_astra:steel_rods', 'ad_astra:steel_rod')
    event.remove('c:steel_rods', 'ad_astra:steel_rod')

    /********Iron Wire********/
    event.remove('c:wires', 'createaddition:iron_wire')
    event.remove('c:wires/iron', 'createaddition:iron_wire')
    event.remove('c:wires/all_metal', 'createaddition:iron_wire')

    /********Gold Wire********/
    event.remove('c:wires', 'createaddition:gold_wire')
    event.remove('c:wires/gold', 'createaddition:gold_wire')
    event.remove('c:wires/all_metal', 'createaddition:gold_wire')

    /********Copper Wire********/
    event.remove('c:wires', 'createaddition:copper_wire')
    event.remove('c:wires/copper', 'createaddition:copper_wire')
    event.remove('c:wires/all_metal', 'createaddition:copper_wire')

    /********Electrum Wire********/
    event.remove('c:wires', 'createaddition:electrum_wire')
    event.remove('c:wires/electrum', 'createaddition:electrum_wire')
    event.remove('c:wires/all_metal', 'createaddition:electrum_wire')

    /********Electrum Block********/
    event.add('c:storage_blocks', 'createaddition:electrum_block')
    event.add('c:storage_blocks/electrum', 'createaddition:electrum_block')

    /********Copper Nugget********/
    event.remove('c:nuggets', 'pneumaticcraft:copper_nugget')
    event.remove('c:nuggets/copper', 'pneumaticcraft:copper_nugget')

    /********Gears********/
    event.remove('c:gears', 'pneumaticcraft:compressed_iron_gear')
    event.remove('c:gears/compressed_iron', 'pneumaticcraft:compressed_iron_gear')
    //event.add('c:gears', ['hammerlib:gears/wooden', 'hammerlib:gears/stone', 'hammerlib:gears/copper', 'hammerlib:gears/iron', 'hammerlib:gears/gold', 'hammerlib:gears/diamond', 'hammerlib:gears/netherite'])

    /********Other********/
    event.add('c:gems', ['powah:uraninite', 'integrateddynamics:crystalized_menril_chunk', 'integrateddynamics:crystalized_chorus_chunk'])
    event.add('c:gems/uraninite', 'powah:uraninite')
    event.add('c:gems/crystalized_menril', 'integrateddynamics:crystalized_menril_chunk')
    event.add('c:gems/crystalized_chorus', 'integrateddynamics:crystalized_chorus_chunk')
    event.add('c:ingots', ['createdeco:industrial_iron_ingot'])
    event.add('c:ingots/industrial_iron', 'createdeco:industrial_iron_ingot')
    event.add('c:ingots/andesite_alloy', 'create:andesite_alloy')
    event.add('minecraft:piglin_loved', 'hammerlib:gears/gold')
    event.add('minecraft:piglin_loved', 'technicresources:gold_plate')
    event.add('minecraft:piglin_loved', 'technicresources:gold_rod')
    event.remove('c:ingots/uranium', 'bigreactors:yellorium_ingot')
    event.add('c:storage_blocks', ['ae2:fluix_block', 'create:industrial_iron_block'])
    event.add('c:storage_blocks/fluix', 'ae2:fluix_block')
    event.add('c:storage_blocks/industrial_iron', 'create:industrial_iron_block')
    event.add('c:storage_blocks/crystalized_menril', 'integrateddynamics:crystalized_menril_block')
    event.add('c:storage_blocks/crystalized_chorus', 'integrateddynamics:crystalized_chorus_block')
    event.add('c:storage_blocks/lapis_lazuli', 'minecraft:lapis_block')



})
ServerEvents.tags('block', event => {

    /********Steel Block********/
    event.remove('ad_astra:steel_blocks', 'ad_astra:steel_block')
    event.remove('c:steel_blocks', 'ad_astra:steel_block')
    event.remove('c:storage_blocks/steel', 'ad_astra:steel_block')
    event.remove('c:storage_blocks', 'ad_astra:steel_block')

    /********Electrum Block********/
    event.add('c:storage_blocks', 'createaddition:electrum_block')
    event.add('c:storage_blocks/electrum', 'createaddition:electrum_block')

    /********Crystallized Blocks********/
    event.add('c:storage_blocks/crystalized_menril', 'integrateddynamics:crystalized_menril_block')
    event.add('c:storage_blocks/crystalized_chorus', 'integrateddynamics:crystalized_chorus_block')
})