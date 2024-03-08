ServerEvents.recipes(event => {

  //Cogwheel
  deploying('create:cogwheel',['create:shaft','minecraft:cobblestone'],false,1)
  deploying('create:large_cogwheel', ['create:cogwheel', 'minecraft:cobblestone'], false, 1)
  
  itemApplication('minecraft:cobblestone', 'technicresources:calcite_pebble', 'createcasing-kubejs:stone_casing')
  
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
          "item": output
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
