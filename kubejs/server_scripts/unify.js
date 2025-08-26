
ServerEvents.recipes(e => {
    function replaceIO(input, output) {
        e.replaceInput({}, input, output)
        e.replaceOutput({}, input, output)
    }

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
        'extendedae:inscriber/crush_entro',
        'ae2:inscriber/fluix_dust',
        'advanced_ae:quantum_infused_dust',
        'ae2:inscriber/certus_quartz_dust',
        'ae2:inscriber/ender_dust',
        'ae2:inscriber/sky_stone_dust',
        'advanced_ae:quantum_infused_dust_crushed',
        'create:milling/compat/ae2/certus_quartz',
        'mekanism:compat/ae2/certus_crystal_to_dust',
        'create:milling/compat/ae2/fluix_crystal',
        'mekanism:compat/ae2/fluix_crystal_to_dust',
        'create:milling/compat/ae2/sky_stone_block',
        'mekanism:compat/ae2/sky_stone_to_dust',
        'create:milling/compat/ae2/ender_pearl',
        'mekanism:compat/ae2/ender_pearl_to_dust',
        'extendedae:mek/entro_dust',
        'mekanism:processing/fluorite/to_dust',
        'mekanism:processing/netherite/ingot_to_dust',
        'mekanism:processing/netherite/scrap_to_dust',
        'mekanism:crushing/charcoal_dust',
        'mekanism:enriching/charcoal_dust',
        'mekanism:processing/coal/to_dust',
        'mekanism:processing/bronze/dust/from_ingot',
        'mekanism:processing/lapis_lazuli/to_dust',
        'mekanism:processing/quartz/to_dust',
        'mekanism:processing/emerald/to_dust',
        'mekanism:processing/diamond/to_dust',
        'mekanism:processing/steel/ingot_to_dust',
        'mekanism:crushing/obsidian_to_dust',
        'mekanism:processing/refined_obsidian/dust/from_ingot',
        'mekanism:processing/iron/dust/from_ingot',
        'mekanism:processing/gold/dust/from_ingot',
        'mekanism:processing/osmium/dust/from_ingot',
        'mekanism:processing/copper/dust/from_ingot',
        'create:crushing/obsidian',
        'createaddition:crushing/diamond',

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

    function dusts(input, output) {
        e.custom({ "type": "create:milling", "ingredients": [{ "item": input }], "processingTime": 50, "results": [{ "count": 1, "id": output }]})
        e.custom({ "type": "mekanism:crushing", "input": { "item": input }, "output": { "id": output }})
        e.custom({ "type": "actuallyadditions:crushing", "ingredient": { "item": input }, "result": [{ "result": { "count": 1, "id": output }}]
        })
    }
    dusts('advanced_ae:shattered_singularity', 'advanced_ae:quantum_infused_dust')
    dusts('ae2:certus_quartz_crystal', 'ae2:certus_quartz_dust')
    dusts('ae2:fluix_crystal', 'ae2:fluix_dust')
    dusts('ae2:sky_stone_block', 'ae2:sky_dust')
    dusts('minecraft:ender_pearl', 'ae2:ender_dust')
    dusts('extendedae:entro_crystal', 'extendedae:entro_dust')
    dusts('mekanism:fluorite_gem', 'mekanism:dust_fluorite')
    dusts('minecraft:netherite_ingot', 'mekanism:dust_netherite')
    dusts('minecraft:charcoal', 'mekanism:dust_charcoal')
    dusts('minecraft:coal', 'mekanism:dust_coal')
    dusts('mekanism:ingot_bronze', 'mekanism:dust_bronze')
    dusts('minecraft:lapis_lazuli', 'mekanism:dust_lapis_lazuli')
    dusts('minecraft:quartz', 'mekanism:dust_quartz')
    dusts('minecraft:emerald', 'mekanism:dust_emerald')
    dusts('minecraft:diamond', 'mekanism:dust_diamond')
    dusts('mekanism:ingot_steel', 'mekanism:dust_steel')
    dusts('minecraft:obsidian', 'mekanism:dust_obsidian')
    dusts('mekanism:ingot_refined_obsidian', 'mekanism:dust_refined_obsidian')
    dusts('minecraft:iron_ingot', 'mekanism:dust_iron')
    dusts('minecraft:gold_ingot', 'mekanism:dust_gold')
    dusts('mekanism:ingot_osmium', 'mekanism:dust_osmium')
    dusts('minecraft:copper_ingot', 'mekanism:dust_copper')
    dusts('mekanism:ingot_tin', 'mekanism:dust_tin')
    dusts('mekanism:ingot_lead', 'mekanism:dust_lead')
    dusts('mekanism:ingot_uranium', 'mekanism:dust_uranium')
    dusts('draconicevolution:awakened_draconium_ingot', 'draconicevolution:awakened_draconium_dust')
    dusts('draconicevolution:draconium_ingot', 'draconicevolution:draconium_dust')
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

})
ServerEvents.tags('block', event => {

    event.add('c:storage_blocks', ['createaddition:electrum_block', 'avaritia:neutron'])
    event.add('c:storage_blocks/electrum', 'createaddition:electrum_block')
    event.add('c:storage_blocks/crystalized_menril', 'integrateddynamics:crystalized_menril_block')
    event.add('c:storage_blocks/crystalized_chorus', 'integrateddynamics:crystalized_chorus_block')
    event.add('c:storage_blocks/neutron', ['avaritia:neutron'])
})