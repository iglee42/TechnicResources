
ServerEvents.recipes(e=>{
    function replaceIO(input, output) {
        e.replaceInput({}, input, output)
        e.replaceOutput({}, input, output)
    }

    replaceIO('ad_astra:steel_block','#forge:storage_blocks/steel')
    replaceIO('ad_astra:steel_ingot','#forge:ingots/steel')
    replaceIO('ad_astra:steel_nugget','#forge:nuggets/steel')
})

ServerEvents.tags('item', event => {


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

        

})
ServerEvents.tags('block', event => {


    event.remove('ad_astra:steel_blocks', 'ad_astra:steel_block')
    event.remove('c:steel_blocks', 'ad_astra:steel_block')
    event.remove('forge:storage_blocks/steel', 'ad_astra:steel_block')
    event.remove('forge:storage_blocks', 'ad_astra:steel_block')
})