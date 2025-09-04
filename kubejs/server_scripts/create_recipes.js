ServerEvents.recipes(event => {

  event.shapeless('createaddition:electrum_block', '9x createaddition:electrum_ingot')
  event.shapeless('9x createaddition:electrum_ingot', 'createaddition:electrum_block')

  // Cogwheels
  deploying('createcasing:stone_cogwheel', ['create:shaft', 'minecraft:cobblestone'], false, 1)
  deploying('createcasing:stone_large_cogwheel', ['createcasing:stone_cogwheel', 'minecraft:cobblestone'], false, 1)
  deploying('createcasing:andesite_cogwheel', ['create:shaft', 'minecraft:andesite'], false, 1)
  deploying('createcasing:andesite_large_cogwheel', ['createcasing:andesite_cogwheel', 'minecraft:andesite'], false, 1)
  deploying('createcasing:granite_cogwheel', ['create:shaft', 'minecraft:granite'], false, 1)
  deploying('createcasing:granite_large_cogwheel', ['createcasing:granite_cogwheel', 'minecraft:granite'], false, 1)
  deploying('createcasing:diorite_cogwheel', ['create:shaft', 'minecraft:diorite'], false, 1)
  deploying('createcasing:diorite_large_cogwheel', ['createcasing:diorite_cogwheel', 'minecraft:diorite'], false, 1)
  deploying('createcasing:tuff_cogwheel', ['create:shaft', 'minecraft:tuff'], false, 1)
  deploying('createcasing:tuff_large_cogwheel', ['createcasing:tuff_cogwheel', 'minecraft:tuff'], false, 1)
  deploying('createcasing:deepslate_cogwheel', ['create:shaft', 'minecraft:deepslate'], false, 1)
  deploying('createcasing:deepslate_large_cogwheel', ['createcasing:deepslate_cogwheel', 'minecraft:deepslate'], false, 1)
  deploying('createcasing:blackstone_cogwheel', ['create:shaft', 'minecraft:blackstone'], false, 1)
  deploying('createcasing:blackstone_large_cogwheel', ['createcasing:blackstone_cogwheel', 'minecraft:blackstone'], false, 1)
  deploying('createcasing:basalt_cogwheel', ['create:shaft', 'minecraft:basalt'], false, 1)
  deploying('createcasing:basalt_large_cogwheel', ['createcasing:basalt_cogwheel', 'minecraft:basalt'], false, 1)

  // Casings
  itemApplication('minecraft:stripped_oak_wood', 'create:stone_alloy', 'createcasing:stone_casing')
  itemApplication('minecraft:stripped_spruce_wood', 'create:andesite_alloy', 'create:andesite_casing')
  itemApplication('minecraft:stripped_dark_oak_wood', 'create:brass_alloy', 'create:brass_casing')
  itemApplication('minecraft:stripped_acacia_wood', 'create:copper_alloy', 'create:copper_casing')
  itemApplication('minecraft:stripped_birch_wood', 'create:granite_alloy', 'createcasing:granite_casing')
  itemApplication('minecraft:stripped_jungle_wood', 'create:diorite_alloy', 'createcasing:diorite_casing')
  itemApplication('minecraft:stripped_mangrove_wood', 'create:tuff_alloy', 'createcasing:tuff_casing')
  itemApplication('minecraft:stripped_cherry_wood', 'create:deepslate_alloy', 'createcasing:deepslate_casing')
  itemApplication('minecraft:stripped_crimson_hyphae', 'create:blackstone_alloy', 'createcasing:blackstone_casing')
  itemApplication('minecraft:stripped_warped_hyphae', 'create:basalt_alloy', 'createcasing:basalt_casing')
  itemApplication('ars_nouveau:stripped_blue_archwood_wood', 'create:source_alloy', 'createcasing:source_casing')
  itemApplication('ars_nouveau:stripped_green_archwood_wood', 'create:source_alloy', 'createcasing:source_casing')
  itemApplication('ars_nouveau:stripped_red_archwood_wood', 'create:source_alloy', 'createcasing:source_casing')
  itemApplication('ars_nouveau:stripped_purple_archwood_wood', 'create:source_alloy', 'createcasing:source_casing')
  itemApplication('integrateddynamics:menril_wood_stripped', 'create:chorus_alloy', 'createcasing:chorus_casing')

  itemApplication('create:copper_casing', 'create:iron_alloy', 'createcasing:iron_casing')
  itemApplication('createcasing:iron_casing', 'create:red_iron_alloy', 'createcasing:red_iron_casing')
  itemApplication('createcasing:iron_casing', 'create:zinc_alloy', 'createcasing:zinc_casing')
  itemApplication('createcasing:zinc_casing', 'create:gold_alloy', 'createcasing:gold_casing')
  itemApplication('createcasing:gold_casing', 'create:tin_alloy', 'createcasing:tin_casing')
  itemApplication('createcasing:gold_casing', 'create:lead_alloy', 'createcasing:lead_casing')
  itemApplication('createcasing:tin_casing', 'create:osmium_alloy', 'createcasing:osmium_casing')
  itemApplication('createcasing:lead_casing', 'create:osmium_alloy', 'createcasing:osmium_casing')
  itemApplication('createcasing:osmium_casing', 'create:electrum_alloy', 'createcasing:electrum_casing')
  itemApplication('createcasing:osmium_casing', 'create:uranium_alloy', 'createcasing:uranium_casing')
  itemApplication('createcasing:electrum_casing', 'create:netherite_alloy', 'createcasing:netherite_casing')
  itemApplication('createcasing:uranium_casing', 'create:netherite_alloy', 'createcasing:netherite_casing')

  itemApplication('createcasing:netherite_casing', 'create:shadow_steel', 'create:shadow_steel_casing')
  itemApplication('createcasing:netherite_casing', 'create:refined_radiance', 'create:refined_radiance_casing')

  // Dyes
  mixing(['c:dyes/black', 'c:dyes/white'], 'minecraft:gray_dye', 2)
  mixing(['c:dyes/gray', 'c:dyes/white'], 'minecraft:light_gray_dye', 2)
  mixing(['c:dyes/blue', 'c:dyes/red'], 'minecraft:purple_dye', 2)
  mixing(['c:dyes/yellow', 'c:dyes/red'], 'minecraft:orange_dye', 2)
  mixing(['c:dyes/red', 'c:dyes/white'], 'minecraft:pink_dye', 2)
  mixing(['c:dyes/pink', 'c:dyes/purple'], 'minecraft:magenta_dye', 2)
  mixing(['c:dyes/blue', 'c:dyes/white'], 'minecraft:light_blue_dye', 2)
  mixing(['c:dyes/blue', 'c:dyes/green'], 'minecraft:cyan_dye', 2)
  mixing(['c:dyes/white', 'c:dyes/green'], 'minecraft:lime_dye', 2)

  milling('technicresources:oak_sprout', [{ "id": "minecraft:stick" }, { "chance": 0.25, "id": "minecraft:stick" }])

  milling('minecraft:gravel', [{ "chance": 0.6, "id": "minecraft:iron_nugget" }, { "chance": 0.6, "id": "minecraft:iron_nugget" }, { "chance": 0.6, "id": "minecraft:iron_nugget" }, { "id": "minecraft:flint" }])

  // Applied Storage Cells
  deploying('ae2:spatial_storage_cell_2', ['ae2:spatial_cell_housing', 'ae2:spatial_cell_component_2'], false, 1)
  deploying('ae2:spatial_storage_cell_16', ['ae2:spatial_cell_housing', 'ae2:spatial_cell_component_16'], false, 1)
  deploying('ae2:spatial_storage_cell_128', ['ae2:spatial_cell_housing', 'ae2:spatial_cell_component_128'], false, 1)
  deploying('ae2:item_storage_cell_1k', ['ae2:item_cell_housing', 'ae2:cell_component_1k'], false, 1)
  deploying('ae2:item_storage_cell_4k', ['ae2:item_cell_housing', 'ae2:cell_component_4k'], false, 1)
  deploying('ae2:item_storage_cell_16k', ['ae2:item_cell_housing', 'ae2:cell_component_16k'], false, 1)
  deploying('ae2:item_storage_cell_64k', ['ae2:item_cell_housing', 'ae2:cell_component_64k'], false, 1)
  deploying('ae2:item_storage_cell_256k', ['ae2:item_cell_housing', 'ae2:cell_component_256k'], false, 1)
  deploying('ae2:fluid_storage_cell_1k', ['ae2:fluid_cell_housing', 'ae2:cell_component_1k'], false, 1)
  deploying('ae2:fluid_storage_cell_4k', ['ae2:fluid_cell_housing', 'ae2:cell_component_4k'], false, 1)
  deploying('ae2:fluid_storage_cell_16k', ['ae2:fluid_cell_housing', 'ae2:cell_component_16k'], false, 1)
  deploying('ae2:fluid_storage_cell_64k', ['ae2:fluid_cell_housing', 'ae2:cell_component_64k'], false, 1)
  deploying('ae2:fluid_storage_cell_256k', ['ae2:fluid_cell_housing', 'ae2:cell_component_256k'], false, 1)
  deploying('appmek:chemical_storage_cell_1k', ['appmek:chemical_cell_housing', 'ae2:cell_component_1k'], false, 1)
  deploying('appmek:chemical_storage_cell_4k', ['appmek:chemical_cell_housing', 'ae2:cell_component_4k'], false, 1)
  deploying('appmek:chemical_storage_cell_16k', ['appmek:chemical_cell_housing', 'ae2:cell_component_16k'], false, 1)
  deploying('appmek:chemical_storage_cell_64k', ['appmek:chemical_cell_housing', 'ae2:cell_component_64k'], false, 1)
  deploying('appmek:chemical_storage_cell_256k', ['appmek:chemical_cell_housing', 'ae2:cell_component_256k'], false, 1)
  deploying('arseng:source_storage_cell_1k', ['arseng:source_cell_housing', 'ae2:cell_component_1k'], false, 1)
  deploying('arseng:source_storage_cell_4k', ['arseng:source_cell_housing', 'ae2:cell_component_4k'], false, 1)
  deploying('arseng:source_storage_cell_16k', ['arseng:source_cell_housing', 'ae2:cell_component_16k'], false, 1)
  deploying('arseng:source_storage_cell_64k', ['arseng:source_cell_housing', 'ae2:cell_component_64k'], false, 1)
  deploying('arseng:source_storage_cell_256k', ['arseng:source_cell_housing', 'ae2:cell_component_256k'], false, 1)
  deploying('megacells:item_storage_cell_1m', ['megacells:mega_item_cell_housing', 'megacells:cell_component_1m'], false, 1)
  deploying('megacells:item_storage_cell_4m', ['megacells:mega_item_cell_housing', 'megacells:cell_component_4m'], false, 1)
  deploying('megacells:item_storage_cell_16m', ['megacells:mega_item_cell_housing', 'megacells:cell_component_16m'], false, 1)
  deploying('megacells:item_storage_cell_64m', ['megacells:mega_item_cell_housing', 'megacells:cell_component_64m'], false, 1)
  deploying('megacells:item_storage_cell_256m', ['megacells:mega_item_cell_housing', 'megacells:cell_component_256m'], false, 1)
  deploying('megacells:fluid_storage_cell_1m', ['megacells:mega_fluid_cell_housing', 'megacells:cell_component_1m'], false, 1)
  deploying('megacells:fluid_storage_cell_4m', ['megacells:mega_fluid_cell_housing', 'megacells:cell_component_4m'], false, 1)
  deploying('megacells:fluid_storage_cell_16m', ['megacells:mega_fluid_cell_housing', 'megacells:cell_component_16m'], false, 1)
  deploying('megacells:fluid_storage_cell_64m', ['megacells:mega_fluid_cell_housing', 'megacells:cell_component_64m'], false, 1)
  deploying('megacells:fluid_storage_cell_256m', ['megacells:mega_fluid_cell_housing', 'megacells:cell_component_256m'], false, 1)
  deploying('megacells:chemical_storage_cell_1m', ['megacells:mega_chemical_cell_housing', 'megacells:cell_component_1m'], false, 1)
  deploying('megacells:chemical_storage_cell_4m', ['megacells:mega_chemical_cell_housing', 'megacells:cell_component_4m'], false, 1)
  deploying('megacells:chemical_storage_cell_16m', ['megacells:mega_chemical_cell_housing', 'megacells:cell_component_16m'], false, 1)
  deploying('megacells:chemical_storage_cell_64m', ['megacells:mega_chemical_cell_housing', 'megacells:cell_component_64m'], false, 1)
  deploying('megacells:chemical_storage_cell_256m', ['megacells:mega_chemical_cell_housing', 'megacells:cell_component_256m'], false, 1)
  deploying('megacells:source_storage_cell_1m', ['megacells:mega_source_cell_housing', 'megacells:cell_component_1m'], false, 1)
  deploying('megacells:source_storage_cell_4m', ['megacells:mega_source_cell_housing', 'megacells:cell_component_4m'], false, 1)
  deploying('megacells:source_storage_cell_16m', ['megacells:mega_source_cell_housing', 'megacells:cell_component_16m'], false, 1)
  deploying('megacells:source_storage_cell_64m', ['megacells:mega_source_cell_housing', 'megacells:cell_component_64m'], false, 1)
  deploying('megacells:source_storage_cell_256m', ['megacells:mega_source_cell_housing', 'megacells:cell_component_256m'], false, 1)
  deploying('megacells:bulk_item_cell', ['megacells:bulk_item_cell_housing', 'megacells:bulk_cell_component'], false, 1)
  deploying('megacells:radioactive_chemical_cell', ['megacells:radioactive_chemical_cell_housing', 'megacells:radioactive_cell_component'], false, 1)
  deploying('ae2:view_cell', ['ae2:item_cell_housing', 'extendedae:charged_entro_crystal'], false, 1)
  deploying('ae2:portable_item_cell_1k', ['ae2:portable_item_cell_housing', 'ae2:cell_component_1k'], false, 1)
  deploying('ae2:portable_item_cell_4k', ['ae2:portable_item_cell_housing', 'ae2:cell_component_4k'], false, 1)
  deploying('ae2:portable_item_cell_16k', ['ae2:portable_item_cell_housing', 'ae2:cell_component_16k'], false, 1)
  deploying('ae2:portable_item_cell_64k', ['ae2:portable_item_cell_housing', 'ae2:cell_component_64k'], false, 1)
  deploying('ae2:portable_item_cell_256k', ['ae2:portable_item_cell_housing', 'ae2:cell_component_256k'], false, 1)
  deploying('ae2:portable_fluid_cell_1k', ['ae2:portable_fluid_cell_housing', 'ae2:cell_component_1k'], false, 1)
  deploying('ae2:portable_fluid_cell_4k', ['ae2:portable_fluid_cell_housing', 'ae2:cell_component_4k'], false, 1)
  deploying('ae2:portable_fluid_cell_16k', ['ae2:portable_fluid_cell_housing', 'ae2:cell_component_16k'], false, 1)
  deploying('ae2:portable_fluid_cell_64k', ['ae2:portable_fluid_cell_housing', 'ae2:cell_component_64k'], false, 1)
  deploying('ae2:portable_fluid_cell_256k', ['ae2:portable_fluid_cell_housing', 'ae2:cell_component_256k'], false, 1)
  deploying('appmek:portable_chemical_cell_1k', ['appmek:portable_chemical_cell_housing', 'ae2:cell_component_1k'], false, 1)
  deploying('appmek:portable_chemical_cell_4k', ['appmek:portable_chemical_cell_housing', 'ae2:cell_component_4k'], false, 1)
  deploying('appmek:portable_chemical_cell_16k', ['appmek:portable_chemical_cell_housing', 'ae2:cell_component_16k'], false, 1)
  deploying('appmek:portable_chemical_cell_64k', ['appmek:portable_chemical_cell_housing', 'ae2:cell_component_64k'], false, 1)
  deploying('appmek:portable_chemical_cell_256k', ['appmek:portable_chemical_cell_housing', 'ae2:cell_component_256k'], false, 1)
  deploying('arseng:portable_source_cell_1k', ['arseng:portable_source_cell_housing', 'ae2:cell_component_1k'], false, 1)
  deploying('arseng:portable_source_cell_4k', ['arseng:portable_source_cell_housing', 'ae2:cell_component_4k'], false, 1)
  deploying('arseng:portable_source_cell_16k', ['arseng:portable_source_cell_housing', 'ae2:cell_component_16k'], false, 1)
  deploying('arseng:portable_source_cell_64k', ['arseng:portable_source_cell_housing', 'ae2:cell_component_64k'], false, 1)
  deploying('arseng:portable_source_cell_256k', ['arseng:portable_source_cell_housing', 'ae2:cell_component_256k'], false, 1)
  deploying('megacells:portable_item_cell_1m', ['megacells:portable_item_cell_housing', 'megacells:cell_component_1m'], false, 1)
  deploying('megacells:portable_item_cell_4m', ['megacells:portable_item_cell_housing', 'megacells:cell_component_4m'], false, 1)
  deploying('megacells:portable_item_cell_16m', ['megacells:portable_item_cell_housing', 'megacells:cell_component_16m'], false, 1)
  deploying('megacells:portable_item_cell_64m', ['megacells:portable_item_cell_housing', 'megacells:cell_component_64m'], false, 1)
  deploying('megacells:portable_item_cell_256m', ['megacells:portable_item_cell_housing', 'megacells:cell_component_256m'], false, 1)
  deploying('megacells:portable_fluid_cell_1m', ['megacells:portable_fluid_cell_housing', 'megacells:cell_component_1m'], false, 1)
  deploying('megacells:portable_fluid_cell_4m', ['megacells:portable_fluid_cell_housing', 'megacells:cell_component_4m'], false, 1)
  deploying('megacells:portable_fluid_cell_16m', ['megacells:portable_fluid_cell_housing', 'megacells:cell_component_16m'], false, 1)
  deploying('megacells:portable_fluid_cell_64m', ['megacells:portable_fluid_cell_housing', 'megacells:cell_component_64m'], false, 1)
  deploying('megacells:portable_fluid_cell_256m', ['megacells:portable_fluid_cell_housing', 'megacells:cell_component_256m'], false, 1)
  deploying('megacells:portable_chemical_cell_1m', ['megacells:portable_chemical_cell_housing', 'megacells:cell_component_1m'], false, 1)
  deploying('megacells:portable_chemical_cell_4m', ['megacells:portable_chemical_cell_housing', 'megacells:cell_component_4m'], false, 1)
  deploying('megacells:portable_chemical_cell_16m', ['megacells:portable_chemical_cell_housing', 'megacells:cell_component_16m'], false, 1)
  deploying('megacells:portable_chemical_cell_64m', ['megacells:portable_chemical_cell_housing', 'megacells:cell_component_64m'], false, 1)
  deploying('megacells:portable_chemical_cell_256m', ['megacells:portable_chemical_cell_housing', 'megacells:cell_component_256m'], false, 1)
  deploying('megacells:portable_source_cell_1m', ['megacells:portable_source_cell_housing', 'megacells:cell_component_1m'], false, 1)
  deploying('megacells:portable_source_cell_4m', ['megacells:portable_source_cell_housing', 'megacells:cell_component_4m'], false, 1)
  deploying('megacells:portable_source_cell_16m', ['megacells:portable_source_cell_housing', 'megacells:cell_component_16m'], false, 1)
  deploying('megacells:portable_source_cell_64m', ['megacells:portable_source_cell_housing', 'megacells:cell_component_64m'], false, 1)
  deploying('megacells:portable_source_cell_256m', ['megacells:portable_source_cell_housing', 'megacells:cell_component_256m'], false, 1)

  function mixing(ingredients, result, count) {
    event.custom({
      "type": "create:mixing",
      "ingredients": [
        {
          "tag": ingredients[0]
        },
        {
          "tag": ingredients[1]
        }
      ],
      "results": [
        {
          "count": count,
          "id": result
        }
      ]
    })
  }
  function saw(input, output, count) {
    event.custom({
      "type": "create:cutting",
      "ingredients": [
        input
      ],
      "results": [
        {
          "item": output,
          "count": count
        }
      ],
      "processingTime": 50
    })
  }
  function milling(input, result) {
    event.custom({
      "type": "create:milling",
      "ingredients": [
        {
          "item": input
        }
      ],
      "results": result,
      "processingTime": 50
    })
  }
  function mechanicalCraft(sequence, key, result, count, mirror) {
    event.custom({
      "type": "create:mechanical_crafting",
      "pattern": sequence,
      "key": key,
      "result": {
        "item": result,
        "count": count
      },
      "acceptMirrored": mirror
    })
  }
  function pressing(ingredient, result) {
    event.custom({
      "type": "create:pressing",
      "ingredients": [{
        "item": ingredient
      }],
      "results": [
        {
          "item": result
        }
      ]
    });
  }
  function deploying(result, ingredients, keepHeldItem, count) {
    event.custom({
      "type": "create:deploying",
      "ingredients": [
        {
          "item": ingredients[0]
        },
        {
          "item": ingredients[1]
        }
      ],
      "keepHeldItem": keepHeldItem,
      "results": [
        {
          "id": result,
          "count": count
        }
      ]
    });
  }
  function itemApplication(input, item, output) {
    event.custom({
      "type": "create:item_application",
      "ingredients": [
        {
          "item": input
        },
        {
          "item": item
        }
      ],
      "results": [
        {
          "id": output
        }
      ]
    })
  }
  function pressingSequenced(transitionalItem) {
    return {
      "type": "create:pressing",
      "ingredients": [{
        "item": transitionalItem
      }],
      "results": [
        {
          "id": transitionalItem
        }
      ]
    }
  }
  function deployingSequenced(transitionalItem, deployingItem) {
    return {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": transitionalItem
        },
        {
          "item": deployingItem
        }
      ],
      "keepHeldItem": false,
      "results": [
        {
          "id": transitionalItem
        }
      ]
    }
  }
  function sawSequenced(transitionalItem) {
    return {
      "type": "create:cutting",
      "ingredients": [{
        "item": transitionalItem
      }],
      "results": [
        {
          "id": transitionalItem
        }
      ],
      "processingTime": 50
    }
  }
  function sequencedAssembly(ingredient, result, count, sequence, loops, transitionalItem) {
    event.custom({
      "type": "create:sequenced_assembly",
      "ingredient": {
        "item": ingredient
      },
      "loops": loops,
      "results": [
        {
          "id": result,
          "count": count
        }
      ],
      "sequence": sequence,
      "transitionalItem": {
        "item": transitionalItem
      }
    });
  }
})
