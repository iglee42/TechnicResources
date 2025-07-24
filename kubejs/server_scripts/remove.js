//priority: -10

ServerEvents.recipes(event => {
    event.remove([
        'ad_astra:steel_nugget',
        'ad_astra:steel_ingot',
        'ad_astra:steel_ingot_from_steel_block',
        'ad_astra:steel_block',
        'hammerlib:gears/stone',
        'hammerlib:gears/wooden',
        'hammerlib:gears/copper',
        'hammerlib:gears/iron',
        'hammerlib:gears/gold',
        'hammerlib:gears/diamond',
        'hammerlib:gears/netherite'
    ])
})