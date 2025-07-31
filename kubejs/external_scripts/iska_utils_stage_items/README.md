# Stage Item System

This system allows you to define restrictions on items based on player or world stages.

## JSON File Format

JSON files should follow this format:

```json
{
  "type": "iska_utils:stage_item",
  "overwritable": true,
  "restrictions": [
    {
      "stages_logic": "AND",
      "stages": [
          {"stage_type": "player", "stage": "example_stage", "is": false},
          {"stage_type": "world", "stage": "example_world_stage", "is": false}
      ],
      "containers_whitelist": true,
      "containers_list": [
        "net.namespace.inventory.container.ExampleContainer"
      ],
      "other_case":[
        "right_click",
        "left_click",
        "main_hand",
        "off_hand"
      ],
      "items":[
        "minecraft:example_item",
        "#c:example_tag"
      ],
      "consequence":"block_drop"
    }
  ]
}
```

## DEF_OR Example

You can use DEF_OR logic to apply different restrictions based on specific conditions:

```json
{
  "type": "iska_utils:stage_item",
  "overwritable": true,
  "restrictions": [
    {
      "stages_logic": "DEF_OR",
      "stages": [
          {"stage_type": "player", "stage": "example_stage", "is": false},
          {"stage_type": "world", "stage": "example_world_stage", "is": false},
          {"stage_type": "player", "stage": "admin", "is": true}
      ],
      "if":[
        {
          "conditions":[0],
          "containers_whitelist": true,
          "containers_list": [
              "net.namespace.inventory.container.ExampleCraftingContainer"
          ],
          "items":[
            "minecraft:diamond_sword"
          ],
          "consequence":"drop"
        },
        {
          "conditions":[1],
          "containers_list": [
              "net.namespace.inventory.container.ExampleChestContainer"
          ],
          "other_case":[
              "right_click",
              "left_click"
          ],
          "items":[
            "minecraft:nether_star"
          ],
          "consequence":"block_delete"
        }
      ]
    }
  ]
}
```

A specific case to apply this to is with a curio item; you can drop/delete the curio item if the player doesn't have the required stage.
The container class for Curios in Minecraft 1.21.1 is `top.theillusivec4.curios.common.inventory.container.CuriosContainer`.
Note that the Curios mod author has a habit of changing the container class name with each Minecraft version update.

## Available Logic Types

- `AND`: All conditions must be true
- `OR`: At least one condition must be true
- `DEF_OR`: Custom logic using the `if` attribute, where any condition set can match
- `DEF_AND`: Custom logic where all conditions in `if` must be true

## Container Filtering

Container filtering is controlled by two parameters:

- `containers_whitelist`: When `true`, only the containers in the list are affected; when `false`, all containers EXCEPT those in the list are affected
- `containers_list`: A list of container class names to include or exclude based on the whitelist setting

## Other Case Contexts

The `other_case` field allows specifying additional contexts where restrictions should be applied:

- `right_click`: Block right-click usage of the item
- `left_click`: Block left-click usage of the item
- `main_hand`: Apply restriction when item is in main hand
- `off_hand`: Apply restriction when item is in off hand

These are all optional and can be used in any combination, in both regular restrictions and inside `if` conditions.

## Possible Consequences

- `drop`: Drops the item on the ground
- `delete`: Completely removes the item
- `block`: Blocks usage of the item without removing it (applies to other_case contexts)
- `block_drop`: Blocks usage of the item and drops it (for non-container contexts specified in other_case)
- `block_delete`: Blocks usage of the item and deletes it (for non-container contexts specified in other_case)

## Reloading Configurations

Configurations are loaded at server startup and can be reloaded using the `/reload` command.

## Messages

The system will display a message to the player when an item restriction is applied. This helps players understand why certain items are being removed from containers they access. The message will indicate whether items were dropped, deleted, or blocked based on the restriction settings.
