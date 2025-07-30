//priority: -10

ServerEvents.recipes(event => {
    event.remove([
        'hammerlib:gears/stone',
        'hammerlib:gears/wooden',
        'hammerlib:gears/copper',
        'hammerlib:gears/iron',
        'hammerlib:gears/gold',
        'hammerlib:gears/diamond',
        'hammerlib:gears/netherite',
        'create:item_application/andesite_casing_from_wood',
        'create:item_application/andesite_casing_from_log',
        'create:item_application/brass_casing_from_wood',
        'create:item_application/brass_casing_from_log',
        'create:item_application/copper_casing_from_wood',
        'create:item_application/copper_casing_from_log',
        'createqol:item_application/shadow_steel_casing',
        'createqol:item_application/refined_radiance_casing',
    ])
})