
ServerEvents.recipes(e => {
    function replaceIO(input, output) {
        e.replaceInput({}, input, output)
        e.replaceOutput({}, input, output)
    }

    replaceIO('ad_astra:steel_block', '#forge:storage_blocks/steel')
    replaceIO('ad_astra:steel_ingot', '#forge:ingots/steel')
    replaceIO('ad_astra:steel_nugget', '#forge:nuggets/steel')
    replaceIO('create:copper_sheet', '#forge:plates/copper')
    replaceIO('create:brass_sheet', '#forge:plates/brass')
    replaceIO('create:iron_sheet', '#forge:plates/iron')
    replaceIO('create:golden_sheet', '#forge:plates/golden')
    replaceIO('createaddition:electrum_sheet', '#forge:plates/electrum')
    replaceIO('createdeco:andesite_sheet', '#forge:plates/andesite_alloy')
    replaceIO('createdeco:zinc_sheet', '#forge:plates/zinc')
    replaceIO('createdeco:netherite_sheet', '#forge:plates/netherite')
    replaceIO('createdeco:industrial_iron_sheet', '#forge:plates/industrial_iron')
    replaceIO('ad_astra:steel_sheet', '#forge:plates/steel')
    replaceIO('ad_astra:desh_sheet', '#forge:plates/desh')
    replaceIO('ad_astra:ostrum_sheet', '#forge:plates/ostrum')
    replaceIO('ad_astra:calorite_sheet', '#forge:plates/calorite')
    replaceIO('createaddition:iron_rod', '#forge:rods/iron')
    replaceIO('createaddition:copper_rod', '#forge:rods/copper')
    replaceIO('createaddition:gold_rod', '#forge:rods/gold')
    replaceIO('createaddition:electrum_rod', '#forge:rods/electrum')
    replaceIO('createaddition:brass_rod', '#forge:rods/brass')
    replaceIO('ad_astra:iron_rod', '#forge:rods/iron')
    replaceIO('ad_astra:steel_rod', '#forge:rods/steel')
    replaceIO('createaddition:iron_wire', '#forge:wires/iron')
    replaceIO('createaddition:copper_wire', '#forge:wires/copper')
    replaceIO('createaddition:gold_wire', '#forge:wires/gold')
    replaceIO('createaddition:electrum_wire', '#forge:wires/electrum')

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
        e.shapeless('#forge:plates/' + material, ['technicresources:metal_hammer', '2x #' + base]).damageIngredient('technicresources:metal_hammer').id('technicresources:shapeless/plates/' + material)
        e.shaped('#forge:gears/' + material, [' A ', 'ABA', ' A '], { A: '#forge:plates/' + material, B: 'technicresources:metal_scissors' }).damageIngredient('technicresources:metal_scissors').id('technicresources:shaped/gears/' + material)
        e.custom({ 'type': 'create:pressing', 'ingredients': [{ 'tag': base }], 'results': [{ 'item': 'technicresources:' + material + '_plate' }] }).id('technicresources:pressing/plates/' + material)
        e.custom({ 'type': 'ad_astra:compressing', 'cookingtime': 100, 'energy': 20, 'ingredient': { 'tag': base }, 'result': { 'count': 1, 'id': 'technicresources:' + material + '_plate' } }).id('technicresources:compressing/plates/' + material + '_1')
        e.custom({ 'type': 'ad_astra:compressing', 'cookingtime': 800, 'energy': 20, 'ingredient': { 'tag': 'forge:storage_blocks/' + material }, 'result': { 'count': 9, 'id': 'technicresources:' + material + '_plate' } }).id('technicresources:compressing/plates/' + material + '_9')
        e.custom({ "type": "createaddition:rolling", "input": { "tag": base }, "result": { "item": 'technicresources:' + material + '_rod', "count": 2 } }).id('technicresources:rolling/rods/' + material)
        e.shaped('4x #forge:rods/' + material, ['A', 'A'], { A: '#forge:plates/' + material }).id('technicresources:shaped/rods/' + material)
        // e.custom({ "type": "createaddition:rolling", "input": { "tag": '#forge:plates/' + material }, "result": { "item": 'technicresources:' + material + '_wire', "count": 2 } }).id('technicresources:rolling/wires/' + material)
    }

    plateGearRodWire('compressed_iron', 'forge:ingots/compressed_iron')
    plateGearRodWire('wooden', 'minecraft:logs_that_burn')
    plateGearRodWire('stone', 'forge:cobblestone')
    plateGearRodWire('copper', 'forge:ingots/copper')
    plateGearRodWire('iron', 'forge:ingots/iron')
    plateGearRodWire('gold', 'forge:ingots/gold')
    plateGearRodWire('diamond', 'forge:gems/diamond')
    plateGearRodWire('netherite', 'forge:ingots/netherite')
    plateGearRodWire('uraninite', 'forge:gems/uraninite')
    plateGearRodWire('redstone', 'forge:ingots/redstone_ingot')
    plateGearRodWire('emerald', 'forge:gems/emerald')
    plateGearRodWire('lapis_lazuli', 'forge:gems/lapis')
    plateGearRodWire('quartz', 'forge:gems/quartz')
    plateGearRodWire('amethyst', 'forge:gems/amethyst')
    plateGearRodWire('zinc', 'forge:ingots/zinc')
    plateGearRodWire('andesite_alloy', 'forge:ingots/andesite_alloy')
    plateGearRodWire('brass', 'forge:ingots/brass')
    plateGearRodWire('electrum', 'forge:ingots/electrum')
    plateGearRodWire('certus_quartz', 'forge:gems/certus_quartz')
    plateGearRodWire('fluix', 'forge:gems/fluix')
    plateGearRodWire('crystalized_menril', 'forge:gems/crystalized_menril')
    plateGearRodWire('crystalized_chorus', 'forge:gems/crystalized_chorus')
    plateGearRodWire('desh', 'forge:ingots/desh')
    plateGearRodWire('ostrum', 'forge:ingots/ostrum')
    plateGearRodWire('calorite', 'forge:ingots/calorite')
    plateGearRodWire('bronze', 'forge:ingots/bronze')
    plateGearRodWire('steel', 'forge:ingots/steel')
    plateGearRodWire('refined_obsidian', 'forge:ingots/refined_obsidian')
    plateGearRodWire('refined_glowstone', 'forge:ingots/refined_glowstone')
    plateGearRodWire('osmium', 'forge:ingots/osmium')
    plateGearRodWire('tin', 'forge:ingots/tin')
    plateGearRodWire('lead', 'forge:ingots/lead')
    plateGearRodWire('uranium', 'forge:ingots/uranium')
    plateGearRodWire('fluorite', 'forge:gems/fluorite')
    plateGearRodWire('black_quartz', 'forge:gems/black_quartz')
    plateGearRodWire('industrial_iron', 'forge:ingots/industrial_iron')
})

ServerEvents.tags('item', event => {

    /********Steel********/
    event.remove('c:steel_ingots', 'ad_astra:steel_ingot')
    event.remove('ad_astra:steel_ingots', 'ad_astra:steel_ingot')
    event.remove('forge:ingots/steel', 'ad_astra:steel_ingot')
    event.remove('forge:ingots', 'ad_astra:steel_ingot')

    event.remove('c:steel_nuggets', 'ad_astra:steel_nugget')
    event.remove('ad_astra:steel_nuggets', 'ad_astra:steel_nugget')
    event.remove('forge:nuggets/steel', 'ad_astra:steel_nugget')
    event.remove('forge:nuggets', 'ad_astra:steel_nugget')

    event.remove('ad_astra:steel_blocks', 'ad_astra:steel_block')
    event.remove('c:steel_blocks', 'ad_astra:steel_block')
    event.remove('forge:storage_blocks/steel', 'ad_astra:steel_block')
    event.remove('forge:storage_blocks', 'ad_astra:steel_block')

    /********Iron Plates********/
    event.remove('c:iron_plates', 'ad_astra:iron_plate')
    event.remove('ad_astra:iron_plates', 'ad_astra:iron_plate')
    event.remove('forge:plates/iron', 'ad_astra:iron_plate')
    event.remove('forge:plates', 'ad_astra:iron_plate')
    event.remove('railways:internal/plates/iron_plates', 'ad_astra:iron_plate')
    event.remove('forge:plates', 'create:iron_sheet')
    event.remove('forge:plates/iron', 'create:iron_sheet')
    event.remove('createdeco:internal/plates/iron_plates', 'create:iron_sheet')
    event.add('createdeco:internal/plates/iron_plates', 'technicresources:iron_plate')

    /********Zinc Plates********/
    event.remove('forge:plates/zinc', 'createaddition:zinc_sheet')
    event.remove('forge:plates', 'createaddition:zinc_sheet')

    /********Copper Plates********/
    event.remove('forge:plates', 'create:copper_sheet')
    event.remove('forge:plates/copper', 'create:copper_sheet')
    event.remove('createdeco:internal/plates/copper_plates', 'create:copper_sheet')
    event.add('createdeco:internal/plates/copper_plates', 'technicresources:copper_plate')

    /********Brass Plates********/
    event.remove('forge:plates', 'create:brass_sheet')
    event.remove('forge:plates/brass', 'create:brass_sheet')
    event.remove('createdeco:internal/plates/brass_plates', 'create:brass_sheet')
    event.add('createdeco:internal/plates/brass_plates', 'technicresources:brass_plate')

    /********Gold Plates********/
    event.remove('forge:plates', 'create:golden_sheet')
    event.remove('forge:plates/gold', 'create:golden_sheet')
    event.remove('createdeco:internal/plates/gold_plates', 'create:golden_sheet')
    event.remove('minecraft:piglin_loved', 'create:golden_sheet')
    event.add('createdeco:internal/plates/gold_plates', 'technicresources:gold_plate')

    /********Electrum Plates********/
    event.remove('forge:plates', 'createaddition:electrum_sheet')
    event.remove('forge:plates/electrum', 'createaddition:electrum_sheet')

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
    event.remove('forge:plates', 'ad_astra:steel_plate')
    event.remove('forge:plates/steel', 'ad_astra:steel_plate')
    event.remove('ad_astra:steel_plates', 'ad_astra:steel_plate')
    event.remove('c:steel_plates', 'ad_astra:steel_plate')
    event.add('c:steel_plates', 'technicresources:steel_plate')

    /********Desh Plates********/
    event.remove('forge:plates', 'ad_astra:desh_plate')
    event.remove('forge:plates/desh', 'ad_astra:desh_plate')
    event.remove('ad_astra:desh_plates', 'ad_astra:desh_plate')
    event.remove('c:desh_plates', 'ad_astra:desh_plate')
    event.add('c:desh_plates', 'technicresources:desh_plate')

    /********Ostrum Plates********/
    event.remove('forge:plates', 'ad_astra:ostrum_plate')
    event.remove('forge:plates/ostrum', 'ad_astra:ostrum_plate')
    event.remove('ad_astra:ostrum_plates', 'ad_astra:ostrum_plate')
    event.remove('c:ostrum_plates', 'ad_astra:ostrum_plate')
    event.add('c:ostrum_plates', 'technicresources:ostrum_plate')

    /********Calorite Plates********/
    event.remove('forge:plates', 'ad_astra:calorite_plate')
    event.remove('forge:plates/calorite', 'ad_astra:calorite_plate')
    event.remove('ad_astra:calorite_plates', 'ad_astra:calorite_plate')
    event.remove('c:calorite_plates', 'ad_astra:calorite_plate')
    event.add('c:calorite_plates', 'technicresources:calorite_plate')

    /********Iron Rods********/
    event.remove('forge:rods', 'createaddition:iron_rod')
    event.remove('forge:rods/iron', 'createaddition:iron_rod')
    event.remove('forge:rods/all_metal', 'createaddition:iron_rod')
    event.remove('ad_astra:iron_rods', 'createaddition:iron_rod')
    event.remove('forge:rods', 'ad_astra:iron_rod')
    event.remove('forge:rods/iron', 'ad_astra:iron_rod')
    event.remove('ad_astra:iron_rods', 'ad_astra:iron_rod')
    event.remove('c:iron_rods', 'ad_astra:iron_rod')

    /********Copper Rod********/
    event.remove('forge:rods', 'createaddition:copper_rod')
    event.remove('forge:rods/copper', 'createaddition:copper_rod')
    event.remove('forge:rods/all_metal', 'createaddition:copper_rod')

    /********Gold Rod********/
    event.remove('forge:rods', 'createaddition:gold_rod')
    event.remove('forge:rods/gold', 'createaddition:gold_rod')
    event.remove('forge:rods/all_metal', 'createaddition:gold_rod')

    /********Brass Rod********/
    event.remove('forge:rods', 'createaddition:brass_rod')
    event.remove('forge:rods/brass', 'createaddition:brass_rod')
    event.remove('forge:rods/all_metal', 'createaddition:brass_rod')

    /********Electrum Rod********/
    event.remove('forge:rods', 'createaddition:electrum_rod')
    event.remove('forge:rods/electrum', 'createaddition:electrum_rod')
    event.remove('forge:rods/all_metal', 'createaddition:electrum_rod')

    /********Steel Rod********/
    event.remove('forge:rods', 'ad_astra:steel_rod')
    event.remove('forge:rods/steel', 'ad_astra:steel_rod')
    event.remove('ad_astra:steel_rods', 'ad_astra:steel_rod')
    event.remove('c:steel_rods', 'ad_astra:steel_rod')

    /********Iron Wire********/
    event.remove('forge:wires', 'createaddition:iron_wire')
    event.remove('forge:wires/iron', 'createaddition:iron_wire')
    event.remove('forge:wires/all_metal', 'createaddition:iron_wire')

    /********Gold Wire********/
    event.remove('forge:wires', 'createaddition:gold_wire')
    event.remove('forge:wires/gold', 'createaddition:gold_wire')
    event.remove('forge:wires/all_metal', 'createaddition:gold_wire')

    /********Copper Wire********/
    event.remove('forge:wires', 'createaddition:copper_wire')
    event.remove('forge:wires/copper', 'createaddition:copper_wire')
    event.remove('forge:wires/all_metal', 'createaddition:copper_wire')

    /********Electrum Wire********/
    event.remove('forge:wires', 'createaddition:electrum_wire')
    event.remove('forge:wires/electrum', 'createaddition:electrum_wire')
    event.remove('forge:wires/all_metal', 'createaddition:electrum_wire')

    /********Electrum Block********/
    event.add('forge:storage_blocks', 'createaddition:electrum_block')
    event.add('forge:storage_blocks/electrum', 'createaddition:electrum_block')

    /********Copper Nugget********/
    event.remove('forge:nuggets', 'pneumaticcraft:copper_nugget')
    event.remove('forge:nuggets/copper', 'pneumaticcraft:copper_nugget')

    /********Gears********/
    event.remove('forge:gears', 'pneumaticcraft:compressed_iron_gear')
    event.remove('forge:gears/compressed_iron', 'pneumaticcraft:compressed_iron_gear')
    event.add('forge:gears', ['hammerlib:gears/wooden', 'hammerlib:gears/stone', 'hammerlib:gears/copper', 'hammerlib:gears/iron', 'hammerlib:gears/gold', 'hammerlib:gears/diamond', 'hammerlib:gears/netherite'])

    /********Other********/
    event.add('forge:gems', ['powah:uraninite', 'integrateddynamics:crystalized_menril_chunk', 'integrateddynamics:crystalized_chorus_chunk'])
    event.add('forge:gems/uraninite', 'powah:uraninite')
    event.add('forge:gems/crystalized_menril', 'integrateddynamics:crystalized_menril_chunk')
    event.add('forge:gems/crystalized_chorus', 'integrateddynamics:crystalized_chorus_chunk')
    event.add('forge:ingots', ['createdeco:industrial_iron_ingot'])
    event.add('forge:ingots/industrial_iron', 'createdeco:industrial_iron_ingot')
    event.add('forge:ingots/andesite_alloy', 'create:andesite_alloy')
    event.add('minecraft:piglin_loved', 'hammerlib:gears/gold')
    event.add('minecraft:piglin_loved', 'technicresources:gold_plate')
    event.add('minecraft:piglin_loved', 'technicresources:gold_rod')
    event.remove('forge:ingots/uranium', 'bigreactors:yellorium_ingot')
    event.add('forge:storage_blocks', ['ae2:fluix_block', 'create:industrial_iron_block'])
    event.add('forge:storage_blocks/fluix', 'ae2:fluix_block')
    event.add('forge:storage_blocks/industrial_iron', 'create:industrial_iron_block')
    event.add('forge:storage_blocks/crystalized_menril', 'integrateddynamics:crystalized_menril_block')
    event.add('forge:storage_blocks/crystalized_chorus', 'integrateddynamics:crystalized_chorus_block')
    event.add('forge:storage_blocks/lapis_lazuli', 'minecraft:lapis_block')



})
ServerEvents.tags('block', event => {

    /********Steel Block********/
    event.remove('ad_astra:steel_blocks', 'ad_astra:steel_block')
    event.remove('c:steel_blocks', 'ad_astra:steel_block')
    event.remove('forge:storage_blocks/steel', 'ad_astra:steel_block')
    event.remove('forge:storage_blocks', 'ad_astra:steel_block')

    /********Electrum Block********/
    event.add('forge:storage_blocks', 'createaddition:electrum_block')
    event.add('forge:storage_blocks/electrum', 'createaddition:electrum_block')

    /********Crystallized Blocks********/
    event.add('forge:storage_blocks/crystalized_menril', 'integrateddynamics:crystalized_menril_block')
    event.add('forge:storage_blocks/crystalized_chorus', 'integrateddynamics:crystalized_chorus_block')
})