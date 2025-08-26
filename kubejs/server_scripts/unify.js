
ServerEvents.recipes(e => {
    function replaceIO(input, output) {
        e.replaceInput({}, input, output)
        e.replaceOutput({}, input, output)
    }
    function replaceIn(input, output) {
        e.replaceInput({}, input, output)
    }

    replaceIn('create:cogwheel', '#create:cogwheel')

    // replaceIO('create:iron_sheet', '#c:plates/iron')

    e.remove([
        'create:pressing/iron_ingot',
        'createaddition:pressing/electrum_ingot',
        'create:pressing/gold_ingot',
        'createaddition:pressing/zinc_ingot',
        'create:pressing/brass_ingot',
        'create:pressing/copper_ingot',
        'createaddition:rolling/iron_ingot',
        'createaddition:rolling/electrum_ingot',
        'createaddition:rolling/gold_ingot',
        'createaddition:rolling/brass_rod',
        'createaddition:rolling/copper_ingot',
        'createaddition:rolling/iron_plate',
        'createaddition:rolling/electrum_plate',
        'createaddition:rolling/gold_plate',
        'createaddition:rolling/copper_plate',
        'pneumaticcraft:compressed_iron_gear',
        'avaritia:neutron_gear',
    ])

    function plateGearRodWire(material, base) {
        e.shapeless('technicresources:' + material + '_plate', ['technicresources:metal_hammer', '2x #' + base]).damageIngredient('technicresources:metal_hammer').id('technicresources:shapeless/plates/' + material)
        e.shaped('technicresources:' + material + '_gear', [' A ', 'ABA', ' A '], { A: '#c:plates/' + material, B: 'technicresources:metal_scissors' }).damageIngredient('technicresources:metal_scissors').id('technicresources:shaped/gears/' + material)
        e.custom({ 'type': 'create:pressing', 'ingredients': [{ 'tag': base }], 'results': [{ 'id': 'technicresources:' + material + '_plate' }] }).id('technicresources:pressing/plates/' + material)
        if (material !== 'wooden') {
            e.custom({ "type": "createaddition:rolling", "ingredients": [{ "tag": base }], "results": [{ "id": 'technicresources:' + material + '_rod', "count": 2 }] }).id('technicresources:rolling/rods/' + material)
            e.shaped(Item.of('technicresources:' + material + '_rod', 4), ['A', 'A'], { A: '#c:plates/' + material }).id('technicresources:shaped/rods/' + material)
        }
        e.custom({ "type": "createaddition:rolling", "ingredients": [{ "tag": 'c:plates/' + material }], "results": [{ "id": 'technicresources:' + material + '_wire', "count": 2 }] }).id('technicresources:rolling/wires/' + material)
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
    plateGearRodWire('neutron', 'c:ingots/neutron')
})

ServerEvents.tags('item', event => {

    event.removeAllTagsFrom(['create:iron_sheet',
        'createaddition:electrum_sheet',
        'create:golden_sheet',
        'createaddition:zinc_sheet',
        'create:brass_sheet',
        'create:copper_sheet',
        'hammerlib:gears/wooden',
        'hammerlib:gears/stone',
        'hammerlib:gears/copper',
        'hammerlib:gears/iron',
        'hammerlib:gears/gold',
        'hammerlib:gears/diamond',
        'hammerlib:gears/netherite',
        'pneumaticcraft:compressed_iron_gear',
        'createaddition:iron_rod',
        'createaddition:electrum_rod',
        'createaddition:gold_rod',
        'createaddition:brass_rod',
        'createaddition:copper_rod',
        'createaddition:iron_wire',
        'createaddition:electrum_wire',
        'createaddition:gold_wire',
        'createaddition:copper_wire'
    ])
    event.remove('c:ingot/neutronium', ['avaritia:neutron_ingot'])
    event.remove('c:dust/neutronium', ['avaritia:neutron_pile'])
    event.remove('c:nuggets/neutronium', ['avaritia:neutron_nugget'])
    event.remove('c:storage_blocks/neutronium', ['avaritia:neutron_block'])
    event.add('c:ingots', ['avaritia:neutron_ingot'])
    event.add('c:nuggets', ['avaritia:neutron_nugget'])
    event.add('c:dusts', ['avaritia:neutron_pile'])
    event.add('c:ingots/neutron', ['avaritia:neutron_ingot'])
    event.add('c:nuggets/neutron', ['avaritia:neutron_nugget'])
    event.add('c:storage_blocks/neutron', ['avaritia:neutron'])
    event.add('c:storage_blocks', ['createaddition:electrum_block', 'avaritia:neutronium_block'])
    event.add('c:storage_blocks/electrum', 'createaddition:electrum_block')
    event.add('c:storage_blocks/neutron', 'createaddition:neutronium_block')
    event.add('c:gems', ['powah:uraninite', 'integrateddynamics:crystalized_menril_chunk', 'integrateddynamics:crystalized_chorus_chunk'])
    event.add('c:gems/uraninite', 'powah:uraninite')
    event.add('c:gems/crystalized_menril', 'integrateddynamics:crystalized_menril_chunk')
    event.add('c:gems/crystalized_chorus', 'integrateddynamics:crystalized_chorus_chunk')
    event.add('c:ingots/andesite_alloy', 'create:andesite_alloy')
    event.add('minecraft:piglin_loved', 'technicresources:gold_plate')
    event.add('minecraft:piglin_loved', 'technicresources:gold_rod')
    event.add('c:storage_blocks', ['ae2:fluix_block', 'create:industrial_iron_block'])
    event.add('c:storage_blocks/fluix', 'ae2:fluix_block')
    event.add('c:storage_blocks/industrial_iron', 'create:industrial_iron_block')
    event.add('c:storage_blocks/crystalized_menril', 'integrateddynamics:crystalized_menril_block')
    event.add('c:storage_blocks/crystalized_chorus', 'integrateddynamics:crystalized_chorus_block')
    event.add('c:storage_blocks/lapis_lazuli', 'minecraft:lapis_block')
    event.add('create:cogwheel', ['create:cogwheel', 'createcasing:oak_cogwheel', 'createcasing:birch_cogwheel', 'createcasing:jungle_cogwheel', 'createcasing:acacia_cogwheel', 'createcasing:dark_oak_cogwheel', 'createcasing:cherry_cogwheel', 'createcasing:mangrove_cogwheel', 'createcasing:bamboo_cogwheel', 'createcasing:warped_cogwheel', 'createcasing:crimson_cogwheel'])

})
ServerEvents.tags('block', event => {

    event.add('c:storage_blocks', ['createaddition:electrum_block', 'avaritia:neutron'])
    event.add('c:storage_blocks/electrum', 'createaddition:electrum_block')
    event.add('c:storage_blocks/crystalized_menril', 'integrateddynamics:crystalized_menril_block')
    event.add('c:storage_blocks/crystalized_chorus', 'integrateddynamics:crystalized_chorus_block')
    event.add('c:storage_blocks/neutron', ['avaritia:neutron'])
})