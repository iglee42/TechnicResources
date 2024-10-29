
ServerEvents.recipes(e=>{
    function replaceIO(input, output) {
        e.replaceInput({}, input, output)
        e.replaceOutput({}, input, output)
    }

    replaceIO('ad_astra:steel_block','#forge:storage_blocks/steel')
    replaceIO('ad_astra:steel_ingot','#forge:ingots/steel')
    replaceIO('ad_astra:steel_nugget','#forge:nuggets/steel')
    replaceIO('create:copper_sheet','#forge:plates/copper')
    replaceIO('create:brass_sheet','#forge:plates/brass')
    replaceIO('create:iron_sheet','#forge:plates/iron')
    replaceIO('create:golden_sheet','#forge:plates/golden')
    replaceIO('createaddition:electrum_sheet','#forge:plates/electrum')
    replaceIO('createdeco:andesite_sheet','#forge:plates/andesite_alloy')
    replaceIO('createdeco:zinc_sheet','#forge:plates/zinc')
    replaceIO('createdeco:netherite_sheet','#forge:plates/netherite')
    replaceIO('createdeco:industrial_iron_sheet','#forge:plates/industrial_iron')
    replaceIO('ad_astra:steel_sheet','#forge:plates/steel')
    replaceIO('ad_astra:desh_sheet','#forge:plates/desh')
    replaceIO('ad_astra:ostrum_sheet','#forge:plates/ostrum')
    replaceIO('ad_astra:calorite_sheet','#forge:plates/calorite')

    e.remove('create:pressing/copper_ingot')
    e.remove('create:pressing/brass_ingot')
    e.remove('create:pressing/iron_ingot')
    e.remove('create:pressing/gold_ingot')
    e.remove('createaddition:pressing/electrum_ingot')
    e.remove('createdeco:pressing/andesite_sheet')
    e.remove('createdeco:pressing/zinc_sheet')
    e.remove('createdeco:pressing/netherite_sheet')
    e.remove('createdeco:pressing/industrial_iron_sheet')
    e.remove('create:pressing/steel_ingot')
    e.remove('create:pressing/desh_ingot')
    e.remove('create:pressing/ostrum_ingot')
    e.remove('create:pressing/calorite_ingot')
    e.remove('ad_astra:compressing/iron_plate_from_compressing_iron_ingot')
    e.remove('ad_astra:compressing/iron_plate_from_compressing_iron_block')
    e.remove('ad_astra:compressing/calorite_plate_from_compressing_calorite_ingots')
    e.remove('ad_astra:compressing/calorite_plate_from_compressing_calorite_blocks')
    e.remove('ad_astra:compressing/desh_plate_from_compressing_desh_ingots')
    e.remove('ad_astra:compressing/desh_plate_from_compressing_desh_blocks')
    e.remove('ad_astra:compressing/ostrum_plate_from_compressing_ostrum_ingots')
    e.remove('ad_astra:compressing/ostrum_plate_from_compressing_ostrum_blocks')
    e.remove('ad_astra:compressing/steel_plate_from_compressing_steel_ingots')
    e.remove('ad_astra:compressing/steel_plate_from_compressing_steel_blocks')
    e.remove('pneumaticcraft:copper_ingot_from_nugget')
    e.remove('pneumaticcraft:copper_nugget')


    function plateAndGear(material, base) {
        e.shapeless('#forge:plates/'+material, ['technicresources:metal_hammer', '2x #'+base]).damageIngredient('technicresources:metal_hammer').id('technicresources:shapeless/plates/'+material)
        e.shaped('#forge:gears/'+material, [' A ', 'ABA', ' A '], { A: '#forge:plates/'+material, B: 'technicresources:metal_scissors' }).damageIngredient('technicresources:metal_scissors').id('technicresources:shaped/gears/'+material)
        e.custom({ 'type': 'create:pressing', 'ingredients': [{ 'tag': base }], 'results': [{ 'item': 'technicresources:'+material+'_plate' }]}).id('technicresources:pressing/plates/'+material)
        e.custom({ 'type': 'ad_astra:compressing', 'cookingtime': 100, 'energy': 20, 'ingredient': { 'tag': base }, 'result': { 'count': 1, 'id': 'technicresources:'+material+'_plate' }}).id('technicresources:compressing/plates/'+material+'_1')
        e.custom({ 'type': 'ad_astra:compressing', 'cookingtime': 800, 'energy': 20, 'ingredient': { 'tag': 'forge:storage_blocks/'+material }, 'result': { 'count': 9, 'id': 'technicresources:'+material+'_plate' }}).id('technicresources:compressing/plates/'+material+'_9')
    }
        
    plateAndGear('compressed_iron', 'forge:ingots/compressed_iron')
    plateAndGear('wooden', 'minecraft:logs_that_burn')
    plateAndGear('stone', 'forge:cobblestone')
    plateAndGear('copper', 'forge:ingots/copper')
    plateAndGear('iron', 'forge:ingots/iron')
    plateAndGear('gold', 'forge:ingots/gold')
    plateAndGear('diamond', 'forge:gems/diamond')
    plateAndGear('netherite', 'forge:ingots/netherite')
    plateAndGear('uraninite', 'forge:gems/uraninite')
    plateAndGear('redstone', 'forge:ingots/redstone_ingot')
    plateAndGear('emerald', 'forge:gems/emerald')
    plateAndGear('lapis_lazuli', 'forge:gems/lapis')
    plateAndGear('quartz', 'forge:gems/quartz')
    plateAndGear('amethyst', 'forge:gems/amethyst')
    plateAndGear('zinc', 'forge:ingots/zinc')
    plateAndGear('andesite_alloy', 'forge:ingots/andesite_alloy')
    plateAndGear('brass', 'forge:ingots/brass')
    plateAndGear('electrum', 'forge:ingots/electrum')
    plateAndGear('certus_quartz', 'forge:gems/certus_quartz')
    plateAndGear('fluix', 'forge:gems/fluix')
    plateAndGear('crystalized_menril', 'forge:gems/crystalized_menril')
    plateAndGear('crystalized_chorus', 'forge:gems/crystalized_chorus')
    plateAndGear('desh', 'forge:ingots/desh')
    plateAndGear('ostrum', 'forge:ingots/ostrum')
    plateAndGear('calorite', 'forge:ingots/calorite')
    plateAndGear('bronze', 'forge:ingots/bronze')
    plateAndGear('steel', 'forge:ingots/steel')
    plateAndGear('refined_obsidian', 'forge:ingots/refined_obsidian')
    plateAndGear('refined_glowstone', 'forge:ingots/refined_glowstone')
    plateAndGear('osmium', 'forge:ingots/osmium')
    plateAndGear('tin', 'forge:ingots/tin')
    plateAndGear('lead', 'forge:ingots/lead')
    plateAndGear('uranium', 'forge:ingots/uranium')
    plateAndGear('fluorite', 'forge:gems/fluorite')
    plateAndGear('black_quartz', 'forge:gems/black_quartz')
    plateAndGear('industrial_iron', 'forge:ingots/industrial_iron')
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