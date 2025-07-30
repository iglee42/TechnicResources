ServerEvents.recipes(event => {

  event.shapeless('createaddition:electrum_block', '9x createaddition:electrum_ingot')
  event.shapeless('9x createaddition:electrum_ingot', 'createaddition:electrum_block')

  //Cogwheel
  deploying('create:cogwheel',['create:shaft','minecraft:cobblestone'],false,1)
  deploying('create:large_cogwheel', ['create:cogwheel', 'minecraft:cobblestone'], false, 1)
  
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
  itemApplication('createcasing:source_casing', 'create:shadow_steel', 'create:shadow_steel_casing')
  itemApplication('createcasing:source_casing', 'create:refined_radiance', 'create:refined_radiance_casing')

  milling('technicresources:oak_sprout', [
    {
      "item": "minecraft:stick"
    },
    {
      "chance": 0.25,
      "item": "minecraft:stick"
    }
  ])
  
  /*event.custom({
    "type": "create:milling",
    "ingredients": [
      {
        "item": "minecraft:gravel"
      }
    ],
    "results": [
      {
        "chance": 0.6,
        "item": "minecraft:iron_nugget"
      },
      {
        "chance": 0.6,
        "item": "minecraft:iron_nugget"
      },
      {
        "chance": 0.6,
        "item": "minecraft:iron_nugget"
      },
      {
        "item":"minecraft:flint"
      }
    ]
  })*/

    function saw(input,output,count){
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
    function milling(input,result) {
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
    function mechanicalCraft(sequence,key,result,count,mirror){
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
    function pressing(ingredient,result){
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
    function deploying(result,ingredients,keepHeldItem,count){
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
            "item": result,
            "count": count
          }
        ]
      });
  }
  function itemApplication(input,item,output) {
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
    function pressingSequenced(transitionalItem){
     return {
        "type": "create:pressing",
        "ingredients": [{
          "item": transitionalItem
        }],
        "results": [
          {
            "item": transitionalItem
          }
        ]
      }
    }
    function deployingSequenced(transitionalItem,deployingItem){
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
            "item": transitionalItem
          }
        ]
      }
    }
    function sawSequenced(transitionalItem){
      return {
        "type": "create:cutting",
        "ingredients": [{
          "item": transitionalItem
      }],
        "results": [
          {
            "item": transitionalItem
          }
        ],
        "processingTime": 50
      }
    }
    function sequencedAssembly(ingredient,result,count,sequence,loops,transitionalItem){
      event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
          "item": ingredient
        },
        "loops": loops,
        "results": [
          {
            "item": result,
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
