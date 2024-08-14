const ModsUtils = Java.loadClass('fr.iglee42.igleelib.api.utils.ModsUtils')

global.pebbles = ['stone','granite','diorite','andesite','calcite','tuff','deepslate','netherrack','blackstone','basalt','endstone']

StartupEvents.registry('item',e =>{
    /************************************Normal Item************************************/

    /**************Chapter 0.5**************/
    register('bedrock_shard', 'Bedrock Shard')
    register('bedrock_scraper', 'Bedrock Scraper').unstackable().maxDamage(64)
    register('bedrock_stick','Bedrock Stick')
    register('bedrock_scraper_head','Bedrock Scraper Head')
    global.pebbles.forEach((p)=>{
        registerWithTexture(p+'_pebble',ModsUtils.getUpperName(p,' ')+ ' Pebble','technicresources:item/pebbles/' + p)
    });
    registerTool('stone_hammer', 'Stone Hammer', 'pickaxe', 'stone')
    register('deepslate_stick','Deepslate Stick')
    register('piece_upgrader', 'Piece Upgrader').unstackable()

    /**************Chapter 1**************/

    register('bedrock_breaker', 'Bedrock Breaker').unstackable()

    register('compact_upgrader2', 'Compact Upgrader Tier 2').unstackable()



    // register('platinum_ingot','Platinum Ingot')
    // register('minecraft_ore_ingot','Minecraft Ores Ingot')
    // register('platinum_nugget','Platinum Nugget')
    // register('ultimate_photovoltaic_cell','Ultimate Photovoltaic Cell')
    // register('molten_cobblestone_plate','Molten Cobblestone Plate')
    // register('lavium_gear','Lavium Gear')
    // register('keyboard','Keyboard')
    // register('computer','Computer')
    // register('invarium_ingot','Invarium Ingot')
    // register('diamorium_ingot','Diamorium Ingot')
    // registerTool('breizhdemon_pick','BreizhDemon Pickaxe','pickaxe','breizhdemon')
    // e.create('immersiveengineering:component_osmium').displayName('Osmium Mechanical Component').texture('immersiveengineering:item/metal_component_osmium').group('immersiveengineering')
    // e.create('immersiveengineering:mold_coin').displayName('Metal Press Mold: Coin').maxStackSize(1).group('immersiveengineering')
    // e.create('tconstruct:iron_alloy_cast').displayName('Alloy Iron Cast').texture('tconstruct:item/cast/iron_alloy').group('tconstruct/smeltery')
    // e.create('tconstruct:diamond_alloy_cast').displayName('Alloy Diamond Cast').texture('tconstruct:item/cast/diamond_alloy').group('tconstruct/smeltery')
    // e.create('tconstruct:obsidian_alloy_cast').displayName('Alloy Obsidian Cast').texture('tconstruct:item/cast/obsidian_alloy').group('tconstruct/smeltery')
    // e.create('thermal:wood_coin').displayName('Wood Coin').parentModel('thermal:item/wood_coin.json').group('thermal.items')
    // e.create('betterendforge:terminite_plate').displayName('Terminite Plate').group('betterendforge')
    //register('empty_tier_installer','Empty Tier Installer')
    //register('basic_component','Basic Component')
    //register('advanced_component','Advanced Component')
    //register('elite_component','Elite Component')
    //register('ultimate_component','Ultimate Component')

    /************************************Create Sequenced Assembly************************************/
    //registerType('incomplete_spirited_crystal','Incomplete Spirited Crystal','create:sequenced_assembly')
    //registerType('incomplete_basic_circuit','Incomplete Basic Circuit','create:sequenced_assembly')
    //registerType('incomplete_infused_alloy','Incomplete Infused Alloy','create:sequenced_assembly')
    //register('incomplete_tier_installer','Incomplete Tier Installer')
    //register('incomplete_basic_component','Incomplete Basic Component')
    //register('incomplete_advanced_component','Incomplete Advanced Component')
    //register('incomplete_elite_component','Incomplete Elite Component')
    //register('incomplete_ultimate_component','Incomplete Ultimate Component')

    /************************************Icons************************************/
    registerIcon('tr','TR')
    registerIcon('technic_resources','Technic Resources')
    registerIcon('discord','Discord')
    registerIcon('github','Github')
    registerIcon('website','Website')
    registerIcon('bisect_hosting','Bisect Hosting')

    
    /************************************Function************************************/
    function register(unlocname,displayname){
        return e.create('technicresources:'+unlocname).displayName(displayname).texture('technicresources:item/'+unlocname)
    }
    function registerWithTexture(unlocname,displayname,texture){
        return e.create('technicresources:'+unlocname).displayName(displayname).texture(texture)
    }
    function registerType(unlocname,displayname,type){
        return e.create('technicresources:'+unlocname,type).displayName(displayname).tag('forge:tools').tag('forge:'+type+'s').tag('forge:tools/'+type+'s')
    }
    function registerTool(unlocname,displayname,type,tier){
        return e.create('technicresources:' + unlocname, type).displayName(displayname).tier(tier).tag('forge:tools').tag('forge:' + type + 's').tag('forge:tools/' + type + 's').tag('forge:tools/' + tier )
    }

    function registerIcon(unlocname,displayName) {
        return e.create('icons:' + unlocname).displayName(displayName).texture('icons:item/' + unlocname)
    }
})
