const $TickTemporalUnit = Java.loadClass('dev.latvian.mods.kubejs.util.TickTemporalUnit');
ServerEvents.recipes(event => {

    compressor('minecraft:coal_block', 8, 'minecraft:diamond', 1, 100)



    function compressor(input, inputAmount, output, amount, time) {
        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "technicresources:compressor",
            "time": time,
            "requirements": [
                {
                    "type": "custommachinery:item",
                    "mode": "input",
                    "ingredient": {
                        "item": input,
                        "count": inputAmount,
                    },
                    "slot": "input",
                    "consume_on_end": true
                },
                {
                    "type": "custommachinery:contraption",
                    "mode": "input",
                    "stress": 8,
                    "speed": 32
                },
                {
                    "type": "custommachinery:item",
                    "mode": "output",
                    "ingredient": {
                        "item": output,
                        "count": amount,
                    },
                    "slot": "output"
                },
            ]
        })
    }
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

    //-------------------MACHINES-------------------//
    // Mekanism Machines
    // Chorus Table
    mekaChorus('mekanism:metallurgic_infuser', ['create:osmium_alloy', 'rftoolsbase:infused_diamond', 'ars_nouveau:glyph_infuse'])
    mekaChorus('mekanism:enrichment_chamber', ['mekanism:basic_control_circuit', 'technicresources:redstone_gear', 'reliquary:fortune_coin'])
    mekaChorus('mekanism:osmium_compressor', ['mekanism:advanced_control_circuit', 'cmr:smithing_press', 'pneumaticcraft:advanced_air_compressor'])
    mekaChorus('mekanism:combiner', ['mekanism:elite_control_circuit', 'createcasing:chorus_mixer', 'ars_nouveau:glyph_exchange'])
    mekaChorus('mekanism:crusher', ['mekanism:basic_control_circuit', 'actuallyadditions:crusher_double', 'ars_nouveau:glyph_crush'])
    mekaChorus('mekanism:energized_smelter', ['mekanism:basic_control_circuit', 'minecraft:furnace', 'ars_nouveau:glyph_smelt'])
    mekaChorus('mekanism:electric_pump', ['mekanism:basic_control_circuit', 'actuallyadditions:fluid_collector', 'pneumaticcraft:vacuum_pump'])
    mekaChorus('mekanism:rotary_condensentrator', ['mekanism:basic_control_circuit', 'create:rotation_speed_controller', 'mekanism:basic_chemical_tank'])
    mekaChorus('mekanism:electrolytic_separator', ['mekanism:basic_control_circuit', 'mekanism:electrolytic_core', 'mekanism:advanced_chemical_tank'])
    mekaChorus('mekanism:precision_sawmill', ['mekanism:basic_control_circuit', 'create:precision_mechanism', 'chipped:saw'])
    mekaChorus('mekanism:seismic_vibrator', ['mekanism:basic_control_circuit', 'ae2:quartz_vibrant_glass', 'pneumaticcraft:drill_bit_diamond'])
    mekaChorus2('mekanism:pressurized_reaction_chamber', ['mekanism:basic_control_circuit', 'mekanism:dynamic_tank', 'mekanism:basic_chemical_tank'], 'mekanism:enrichment_chamber')
    mekaChorus('mekanism:nutritional_liquifier', ['mekanism:basic_control_circuit', 'minecraft:golden_carrot', 'mob_grinding_utils:nutritious_chicken_feed'])
    mekaChorus2('mekanism:fluidic_plenisher', ['mekanism:basic_control_circuit', 'rftoolsutility:fluid_module', 'cookingforblockheads:cyan_sink'], 'mekanism:electric_pump')
    mekaChorus('mekanism:resistive_heater', ['mekanism:basic_control_circuit', 'actuallyadditions:heat_collector', 'mekanism:energy_tablet'])
    mekaChorus('mekanism:formulaic_assemblicator', ['mekanism:basic_control_circuit', 'create:cart_assembler', 'rftoolsutility:crafter3'])
    mekaChorus('mekanism:pigment_extractor', ['mekanism:basic_control_circuit', 'minecraft:dye_primer', 'ars_nouveau:glyph_extract'])
    mekaChorus('mekanism:pigment_mixer', ['mekanism:elite_control_circuit', 'minecraft:dye_primer', 'mekanism:hdpe_rod'])
    mekaChorus('mekanism:painting_machine', ['mekanism:advanced_control_circuit', 'minecraft:dye_primer', 'sophisticatedstorage:paintbrush'])
    mekaChorus('mekanism:dimensional_stabilizer', ['mekanism:ultimate_control_circuit', 'chickenchunks:spot_loader', 'powah:binding_card_dim'])
    mekaChorus('mekanism:security_desk', ['mekanism:elite_control_circuit', 'minecraft:redstone',/*'evolvedmekanism:ingot_refined_redstone',*/ 'pneumaticcraft:security_station'])
    mekaChorus('mekanism:fuelwood_heater', ['mekanism:basic_control_circuit', 'minecraft:furnace', 'actuallyadditions:wood_casing'])
    function mekaChorus(output, inputs) {
        customTables(output, 'chorus', [
            'ABCDCBA',
            'BEEFEEB',
            'CEGGGEC',
            'HIGJGKL',
            'CEGGGEC',
            'BEEFEEB',
            'ABCDCBA'
        ], {
            'A': 'actuallyadditions:empowered_enori_crystal_block',
            'B': inputs[0],
            'C': inputs[1],
            'D': inputs[2],
            'E': 'pneumaticcraft:smooth_plastic_brick_gray',
            'F': 'pneumaticcraft:module_expansion_card',
            'G': 'mekanism:steel_casing',
            'H': 'ae2:formation_core',
            'I': 'integrateddynamics:variable_transformer_output',
            'J': 'powah:machine_casing_niotic',
            'K': 'integrateddynamics:variable_transformer_input',
            'L': 'ae2:annihilation_core'
        })
    }
    function mekaChorus2(output, inputs, extra) {
        customTables(output, 'chorus', [
            'ABCDCBA',
            'BEEFEEB',
            'CEGGGEC',
            'HIGJGKL',
            'CEGGGEC',
            'BEEFEEB',
            'ABCDCBA'
        ], {
            'A': 'actuallyadditions:empowered_enori_crystal_block',
            'B': inputs[0],
            'C': inputs[1],
            'D': inputs[2],
            'E': 'pneumaticcraft:smooth_plastic_brick_gray',
            'F': 'pneumaticcraft:module_expansion_card',
            'G': 'mekanism:steel_casing',
            'H': 'ae2:formation_core',
            'I': 'integrateddynamics:variable_transformer_output',
            'J': extra,
            'K': 'integrateddynamics:variable_transformer_input',
            'L': 'ae2:annihilation_core'
        })
    }
    // Netherite Table
    mekaNetherite('mekanism:digital_miner', ['ae2:annihilation_plane', 'actuallyadditions:phantom_breaker'])
    mekaNetherite2('mekanism:purification_chamber', ['ars_nouveau:imbuement_chamber', 'supplementaries:soap'], 'mekanism:enrichment_chamber')
    mekaNetherite3('mekanism:chemical_oxidizer', ['chipped:ancient_waxed_oxidized_copper', 'mekanism:basic_chemical_tank', 'mekanism:personal_barrel'])
    mekaNetherite('mekanism:chemical_infuser', ['resourcefulshulkers:shulker_infuser', 'mekanism:basic_chemical_tank'])
    mekaNetherite2('mekanism:chemical_injection_chamber', ['pipez:gas_pipe', 'mekanism:ultimate_chemical_tank'], 'mekanism:purification_chamber')
    mekaNetherite2('mekanism:chemical_dissolution_chamber', ['mekanism:ingot_refined_obsidian', 'reliquary:midas_touchstone'], 'mekanism:purification_chamber')
    mekaNetherite3('mekanism:chemical_washer', ['reliquary:apothecary_cauldron', 'mekanism:basic_chemical_tank', 'mekanism:basic_fluid_tank'])
    mekaNetherite('mekanism:chemical_crystallizer', ['technicresources:crystalized_chorus_plate', 'minecraft:end_crystal'])
    mekaNetherite('mekanism:isotopic_centrifuge', ['technicresources:uranium_wire', 'createcasing:netherite_mixer'])
    mekaNetherite('mekanism:solar_neutron_activator', ['mekanism:hdpe_sheet', 'mekanismgenerators:solar_generator'])
    mekaNetherite('mekanism:quantum_entangloporter', ['integrateddynamics:part_extradimensional_reader', 'morefunctionalstorage:dimensional_refill_upgrade'])
    mekaNetherite('mekanism:modification_station', ['mekanism:pellet_polonium', 'mekanism:hdpe_sheet'])
    mekaNetherite3('mekanism:qio_drive_array', ['ae2:cell_component_1k', 'mekanism:personal_barrel', 'mekanism:personal_chest'])
    function mekaNetherite(output, inputs) {
        customTables(output, 'netherite', [
            'AABCDCBAA',
            'AEEEFEEEA',
            'BEGHIHGEB',
            'CEHJJJHEC',
            'KFIJLJIFM',
            'CEHJJJHEC',
            'BEGHIHGEB',
            'AEEEFEEEA',
            'AABCDCBAA',
        ], {
            'A': 'createcasing:netherite_casing',
            'B': 'mekanism:ingot_uranium',
            'C': inputs[0],
            'D': inputs[1],
            'E': 'mekanismadditions:gray_reinforced_plastic',
            'F': 'hostilenetworks:hostile_machine_casing',
            'G': 'mekanism:teleportation_core',
            'H': 'mekanism:ultimate_control_circuit',
            'I': 'pneumaticcraft:module_expansion_card',
            'J': 'mekanism:steel_casing',
            'K': 'extendedcrafting:flux_star',
            'L': 'powah:machine_casing_nitro',
            'M': 'extendedcrafting:ender_star'
        })
    }
    function mekaNetherite2(output, inputs, extra) {
        customTables(output, 'netherite', [
            'AABCDCBAA',
            'AEEEFEEEA',
            'BEGHIHGEB',
            'CEHJJJHEC',
            'KFIJLJIFM',
            'CEHJJJHEC',
            'BEGHIHGEB',
            'AEEEFEEEA',
            'AABCDCBAA',
        ], {
            'A': 'createcasing:netherite_casing',
            'B': 'mekanism:ingot_uranium',
            'C': inputs[0],
            'D': inputs[1],
            'E': 'mekanismadditions:gray_reinforced_plastic',
            'F': 'hostilenetworks:hostile_machine_casing',
            'G': 'mekanism:teleportation_core',
            'H': 'mekanism:ultimate_control_circuit',
            'I': 'pneumaticcraft:module_expansion_card',
            'J': 'mekanism:steel_casing',
            'K': 'extendedcrafting:flux_star',
            'L': extra,
            'M': 'extendedcrafting:ender_star'
        })
    }
    function mekaNetherite3(output, inputs) {
        customTables(output, 'netherite', [
            'AABCDCBAA',
            'AEEEFEEEA',
            'BEGHIHGEB',
            'CEHJJJHEC',
            'KFIJLJIFM',
            'CEHJJJHEC',
            'BEGHIHGEB',
            'AEEEFEEEA',
            'AABCDCBAA',
        ], {
            'A': 'createcasing:netherite_casing',
            'B': 'mekanism:ingot_uranium',
            'C': inputs[0],
            'D': inputs[1],
            'E': 'mekanismadditions:gray_reinforced_plastic',
            'F': 'hostilenetworks:hostile_machine_casing',
            'G': 'mekanism:teleportation_core',
            'H': 'mekanism:ultimate_control_circuit',
            'I': 'pneumaticcraft:module_expansion_card',
            'J': 'mekanism:steel_casing',
            'K': 'extendedcrafting:flux_star',
            'L': 'powah:machine_casing_nitro',
            'M': 'extendedcrafting:ender_star',
            'N': inputs[2]
        })
    }
    // Antimatter Table
    customTables('mekanism:antiprotonic_nucleosynthesizer', 'antimatter', [
        'AABCCCCCBAA',
        'ADBEEEEEBDA',
        'BBFFFGFFFBB',
        'CHFIIGIIFHC',
        'CHFIJJJIFHC',
        'CHGGJKJGGHC',
        'CHFIJJJIFHC',
        'CHFIIGIIFHC',
        'BBFFFGFFFBB',
        'ADBEEEEEBDA',
        'AABCCCCCBAA',
    ], {
        'A': 'create_enchantment_industry:super_experience_block',
        'B': 'mekanism:sps_casing',
        'C': 'mekanism:structural_glass',
        'D': 'ae2:quantum_entangled_singularity',
        'E': 'mekanism:pellet_polonium',
        'F': 'mekanismadditions:white_reinforced_plastic',
        'G': 'mekanism:pellet_antimatter',
        'H': 'mekanism:pellet_plutonium',
        'I': 'createcasing:creative_casing',
        'J': 'mekanism:steel_casing',
        'K': 'ae2:controller'
    })

    //RFTools Machines
    //Source Table
    rftoolsSource('rftoolsbase:machine_infuser', ['rftoolsbase:dimensionalshard_block', 'naturesaura:infused_stone'])
    rftoolsSource('rftoolsbuilder:space_chamber', ['minecraft:light_blue_concrete', 'pneumaticcraft:pressure_chamber_glass'])
    rftoolsSource('rftoolsbuilder:space_chamber_controller', ['rftoolsbuilder:space_chamber', 'pneumaticcraft:programmable_controller'])
    rftoolsSource('rftoolsbuilder:builder', ['buildinggadgets2:gadget_building', 'minecraft:bricks'])
    rftoolsSource('rftoolsbuilder:shield_block1', ['mekanismtools:lapis_lazuli_shield', 'minecraft:obsidian'])
    rftoolsSource('rftoolsbuilder:shield_block2', ['mekanismtools:lapis_lazuli_shield', 'rftoolsbuilder:shield_block1'])
    rftoolsSource('rftoolsbuilder:shield_block3', ['mekanismtools:lapis_lazuli_shield', 'rftoolsbuilder:shield_block2'])
    rftoolsSource('rftoolsbuilder:shield_block4', ['mekanismtools:lapis_lazuli_shield', 'rftoolsbuilder:shield_block3'])
    rftoolsSource('rftoolsbuilder:mover_control', ['minecraft:minecart', 'minecraft:redstone'])
    rftoolsSource('rftoolsbuilder:mover_controller', ['minecraft:minecart', 'minecraft:repeater'])
    rftoolsSource('rftoolsbuilder:mover_status', ['minecraft:minecart', 'minecraft:comparator'])
    rftoolsSource('rftoolsstorage:crafting_manager', ['createqol:stock_manager', 'actuallyadditions:crafter_on_a_stick'])
    rftoolsSource('rftoolsstorage:modular_storage', ['minecraft:barrel', 'create:stock_ticker'])
    rftoolsSource('rftoolsstorage:storage_scanner', ['integrateddynamics:part_display_panel', 'create:stock_ticker'])
    rftoolsSource('rftoolsutility:crafter1', ['minecraft:crafter', 'actuallyadditions:crafter_on_a_stick'])
    rftoolsSource('rftoolsutility:crafter2', ['minecraft:crafter', 'rftoolsutility:crafter1'])
    rftoolsSource('rftoolsutility:crafter3', ['minecraft:crafter', 'rftoolsutility:crafter2'])
    rftoolsSource('rftoolsutility:screen_controller', ['create:rotation_speed_controller', 'rftoolsbase:information_screen'])
    rftoolsSource('rftoolsutility:environmental_controller', ['naturesaura:eye_improved', 'pneumaticcraft:programmable_controller'])
    rftoolsSource('rftoolsutility:matter_beamer', ['minecraft:glowstone', 'minecraft:beacon'])
    rftoolsSource('rftoolsutility:spawner', ['pneumaticcraft:pressurized_spawner', 'mob_grinding_utils:entity_spawner'])
    rftoolsSource('rftoolsutility:tank', ['minecraft:bucket', 'ae2:sky_stone_tank'])
    rftoolsSource('rftoolsutility:matter_transmitter', ['naturesaura:infused_iron_block', 'minecraft:ender_pearl'])
    rftoolsSource('rftoolsutility:matter_receiver', ['minecraft:ender_pearl', 'naturesaura:infused_iron_block'])
    rftoolsSource('rftoolsutility:dialing_device', ['minecraft:redstone_torch', 'minecraft:respawn_anchor'])
    rftoolsSource('rftoolsutility:destination_analyzer', ['minecraft:ender_pearl', 'minecraft:recovery_compass'])
    rftoolsSource('rftoolsutility:matter_booster', ['supplementaries:sugar_cube', 'minecraft:redstone_block'])
    customTables('rftoolsbase:infused_machine_casing', 'source', [
        'ABCCBA',
        'DEFFED',
        'CFGHFC',
        'CFHGFC',
        'DEFFED',
        'ABCCBA'
    ], {
        'A': 'modularrouters:modular_router',
        'B': 'rftoolsbase:infused_iron_ingot',
        'C': 'modularrouters:augment_core',
        'D': 'rftoolsbase:infused_emerald',
        'E': 'integrateddynamics:logic_director',
        'F': 'technicresources:compressed_iron_plate',
        'G': 'minecraft:blue_concrete',
        'H': 'minecraft:gold_block'
    })
    function rftoolsSource(output, inputs) {
        customTables(output, 'source', [
            'ABCCBA',
            'DEFFED',
            'CFGHFC',
            'CFHGFC',
            'DEFFED',
            'ABCCBA'
        ], {
            'A': 'rftoolsbase:infused_machine_casing',
            'B': 'rftoolsbase:infused_iron_ingot',
            'C': 'modularrouters:augment_core',
            'D': 'rftoolsbase:infused_emerald',
            'E': 'integrateddynamics:logic_director',
            'F': 'technicresources:compressed_iron_plate',
            'G': inputs[0],
            'H': inputs[1]
        })
    }
    //Brass Table
    rftoolsBrass('rftoolsutility:analog', ['minecraft:comparator', 'create:analog_lever'])
    rftoolsBrass('rftoolsutility:counter', ['minecraft:gold_nugget', 'minecraft:clock'])
    rftoolsBrass('rftoolsutility:digit', ['minecraft:redstone', 'create:framed_glass_pane'])
    rftoolsBrass('rftoolsutility:invchecker', ['minecraft:chest', 'minecraft:comparator'])
    rftoolsBrass('rftoolsutility:sensor', ['minecraft:quartz', 'minecraft:comparator'])
    rftoolsBrass('rftoolsutility:sequencer', ['minecraft:redstone', 'minecraft:redstone_torch'])
    rftoolsBrass('rftoolsutility:logic', ['minecraft:redstone', 'minecraft:comparator'])
    rftoolsBrass('rftoolsutility:timer', ['minecraft:redstone_torch', 'minecraft:clock'])
    rftoolsBrass('rftoolsutility:wire', ['minecraft:redstone', 'technicresources:redstone_wire'])
    rftoolsBrass('rftoolsutility:redstone_receiver', ['minecraft:comparator', 'minecraft:ender_pearl'])
    rftoolsBrass('rftoolsutility:redstone_transmitter', ['minecraft:ender_pearl', 'minecraft:comparator'])
    rftoolsBrass('rftoolsutility:simple_dialer', ['minecraft:redstone_torch', 'minecraft:redstone_block'])
    customTables('rftoolsbase:infused_machine_base', 'brass', [
        'ABBBA',
        'BCDCB',
        'BEFEB',
        'BCDCB',
        'ABBBA'
    ], {
        'A': 'modularrouters:augment_core',
        'B': 'technicresources:compressed_iron_plate',
        'C': 'integrateddynamics:logic_director',
        'D': 'minecraft:gold_block',
        'E': 'minecraft:blue_concrete',
        'F': 'pneumaticcraft:charging_station'
    })
    function rftoolsBrass(output, inputs) {
        customTables(output, 'brass', [
            'ABBBA',
            'BCDCB',
            'BEFEB',
            'BCDCB',
            'ABBBA'
        ], {
            'A': 'modularrouters:augment_core',
            'B': 'technicresources:compressed_iron_plate',
            'C': 'integrateddynamics:logic_director',
            'D': inputs[0],
            'E': inputs[1],
            'F': 'rftoolsbase:infused_machine_base'
        })
    }

    // The Ultimate Crafts
    theUltimate('gear')
    theUltimate('plate')
    theUltimate('rod')
    theUltimate('wire')
    function theUltimate(type) {
        customTables('technicresources:the_ultimate_' + type, 'chorus', [
            '  ABC  ',
            ' DEFGH ',
            'IJKLMNO',
            'PQR STU',
            'VWXYZab',
            ' cdefg ',
            '  hij  '
        ], {
            'A': 'technicresources:tin_' + type,
            'B': 'technicresources:quartz_' + type,
            'C': 'technicresources:fluorite_' + type,
            'D': 'technicresources:iron_' + type,
            'E': 'technicresources:stone_' + type,
            'F': 'technicresources:osmium_' + type,
            'G': 'technicresources:certus_quartz_' + type,
            'H': 'technicresources:diamond_' + type,
            'I': 'technicresources:crystalized_menril_' + type,
            'J': 'technicresources:lapis_lazuli_' + type,
            'K': 'technicresources:sky_' + type,
            'L': 'technicresources:lead_' + type,
            'M': 'technicresources:andesite_alloy_' + type,
            'N': 'technicresources:steel_' + type,
            'O': 'technicresources:compressed_iron_' + type,
            'P': 'technicresources:neutron_' + type,
            'Q': 'technicresources:netherite_' + type,
            'R': 'technicresources:black_quartz_' + type,
            'S': 'technicresources:fluix_' + type,
            'T': 'technicresources:refined_obsidian_' + type,
            'U': 'technicresources:amethyst_' + type,
            'V': 'technicresources:crystalized_chorus_' + type,
            'W': 'technicresources:depth_' + type,
            'X': 'technicresources:wooden_' + type,
            'Y': 'technicresources:redstone_' + type,
            'Z': 'technicresources:copper_' + type,
            'a': 'technicresources:bronze_' + type,
            'b': 'technicresources:electrum_' + type,
            'c': 'technicresources:gold_' + type,
            'd': 'technicresources:brass_' + type,
            'e': 'technicresources:refined_glowstone_' + type,
            'f': 'technicresources:uranium_' + type,
            'g': 'technicresources:zinc_' + type,
            'h': 'technicresources:emerald_' + type,
            'i': 'technicresources:infused_iron_' + type,
            'j': 'technicresources:uraninite_' + type
        })
    }

    function customTables(output, table, pattern, keys) {
        let requirements = [];
        for (const patternIndex in pattern) {
            if (Object.prototype.hasOwnProperty.call(pattern, patternIndex)) {
                let line = pattern[patternIndex];
                let chars = line.split('')
                for (const charIndex in chars) {
                    if (Object.prototype.hasOwnProperty.call(chars, charIndex)) {
                        let char = chars[charIndex];
                        if (char == ' ') continue;
                        let slot = parseInt(patternIndex) * pattern.length + parseInt(charIndex);
                        requirements.push({
                            "type": "custommachinery:item",
                            "slot": "slot_" + slot,
                            "ingredient": {
                                "item": keys[char]
                            },
                            "mode": "input"
                        })
                    }
                }
            }
        }
        let recipe = {
            "type": "custommachinery:custom_craft",
            "machine": "technicresources:" + table + "_crafting_table",
            "requirements": requirements,
            "output": { "id": output }
        }
        event.custom(recipe)
    }
})