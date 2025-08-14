const $TickTemporalUnit = Java.loadClass('dev.latvian.mods.kubejs.util.TickTemporalUnit');
ServerEvents.recipes(event => {

    //compressor('minecraft:coal_block',8,'minecraft:diamond',1,400)
    //
    //
    //
    //function compressor(input,inputAmount,output,amount,time) {
    //    event.custom({
    //        "type": "custommachinery:custom_machine",
    //        "machine": "technicresources:compressor",
    //        "time": time,
    //        "requirements": [
    //            {
    //                "type": "custommachinery:item",
    //                "mode": "input",
    //                "item": input,
    //                "amount": inputAmount
    //            },
    //            {
    //                "type": "custommachinery:item",
    //                "mode": "output",
    //                "item": output,
    //                "amount": amount
    //            }
    //        ]
    //    })
    //}
    event.forEachRecipe({ type: 'minecraft:smelting' }, recipe => {
        const ingredient = recipe.get('ingredient')
        const result = recipe.get('result')
        if (ingredient.itemIds.length === 0 || ingredient.itemIds.length > 1) {
            return
        }

        let burnTime = recipe.get("cookingtime").get($TickTemporalUnit.INSTANCE) || 200
        furnace("zinc", ingredient, result.id, result.count || 1, burnTime == 200 ? 180 : burnTime - (1 / 10 * burnTime), 1)
        furnace("brass", ingredient, result.id, result.count || 1, burnTime == 200 ? 160 : burnTime - (2 / 10 * burnTime), 1)
        furnace("source", ingredient, result.id, result.count || 1, burnTime == 200 ? 140 : burnTime - (3 / 10 * burnTime), 1)
        furnace("chorus", ingredient, result.id, result.count || 1, burnTime == 200 ? 120 : burnTime - (4 / 10 * burnTime), 1)
        furnace("depth", ingredient, result.id, result.count || 1, burnTime == 200 ? 100 : burnTime - (5 / 10 * burnTime), 1)
        furnace("netherite", ingredient, result.id, result.count || 1, burnTime == 200 ? 80 : burnTime - (6 / 10 * burnTime), 1)
        furnace("quantum", ingredient, result.id, result.count || 1, burnTime == 200 ? 60 : burnTime - (7 / 10 * burnTime), 1)
        furnace("antimatter", ingredient, result.id, result.count || 1, burnTime == 200 ? 40 : burnTime - (8 / 10 * burnTime), 1)
        furnace("crystal_matrix", ingredient, result.id, result.count || 1, burnTime == 200 ? 20 : burnTime - (9 / 10 * burnTime), 1)
        furnace("infinity", ingredient, result.id, result.count || 1, 1, 1)
    })

    function furnace(furnace, ingredient, output, amount, time, burntime) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "technicresources:" + furnace + "_furnace",
            "hidden": true,
            "time": time,
            "requirements": [
                {
                    "type": "custommachinery:item",
                    "mode": "input",
                    "ingredient": ingredient,
                    "slot": "input",
                    "consume_on_end": true
                },
                {
                    "type": "custommachinery:fuel",
                    "amount": burntime
                },
                {
                    "type": "custommachinery:item",
                    "mode": "output",
                    "ingredient": {
                        "item": output,
                        "count": amount,
                    },
                    "slot": "result"
                },
                {
                    "type": "custommachinery:command",
                    "command": "/function technicresources:furnace_particles",
                    "phase": "crafting_tickable"
                }
            ]
        })
    }

    // Mekanism Machines
    mekanismMachine('mekanism:enrichment_chamber', [
        'ABCDCBA',
        'BEEFEEB',
        'CEGGGEC',
        'HIGJGIH',
        'CEGGGEC',
        'BEEFEEB',
        'ABCDCBA'
    ], {
        'A': 'actuallyadditions:empowered_enori_crystal_block',
        'B': 'mekanism:basic_control_circuit',
        'C': 'technicresources:redstone_gear',
        'D': 'reliquary:fortune_coin',
        'E': 'pneumaticcraft:smooth_plastic_brick_gray',
        'F': 'pneumaticcraft:module_expansion_card',
        'G': 'mekanism:steel_casing',
        'H': 'ae2:formation_core',
        'I': 'integrateddynamics:variable_transformer_output',
        'J': 'powah:machine_casing_niotic',
    })
})