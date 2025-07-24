# Command Items - External Configuration

This directory contains configuration files for command items that perform automated actions.

## Format

The format is JSON with the following structure:

```json
{
  "id": "unique-item-id",
  "creative_tab": true,
  "stack_size": 64,
  "is_foil": false,
  "cooldown": 20,
  "stages_logic": "AND",
  "stages": [
    {
      "stage_type": "player",
      "stage": "some_stage",
      "is": true
    }
  ],
  "do": [
    {
      "onUse": [
        {"execute": "say Hello World!"}
      ]
    },
    {
      "onTick": [
        {"delay": 20},
        {"execute": "say Tick!"}
      ]
    }
  ]
}
```

## Fields

### General Fields
- `id`: Unique identifier for the command item (required)
- `creative_tab`: Whether the item should appear in the creative tab (optional, default: true)
- `stack_size`: Maximum stack size for this item (optional, default: 64, range: 1-64)
- `is_foil`: Whether the item should have an enchantment glint (optional, default: false)
- `cooldown`: Cooldown in ticks (20 ticks = 1 second) between actions (optional, default: 0)
- `stages_logic`: Logic for evaluating stages (optional, values: "AND", "OR", "DEF_AND", "DEF_OR", default: "AND")
  - "AND": All stages must be satisfied
  - "OR": At least one stage must be satisfied
  - "DEF_AND": Stages are defined per action with AND logic
  - "DEF_OR": Stages are defined per action with OR logic
- `stages`: List of stage conditions that must be met for the item to function

### Special Stage System for DEF Logic
When using `stages_logic: "DEF_AND"` or `stages_logic: "DEF_OR"`, you can create a special initialization system:

1. Include a stage called `initialized` in your item definition:
```json
"stages": [
  {
    "stage_type": "player",
    "stage": "initialized",
    "is": true
  }
]
```

2. In your tick actions, set this stage:
```json
{
  "onTick": [
    {"execute": "iska_utils_stage add player initialized true"}
  ]
}
```

3. The system will automatically check if the item has been initialized.
   If not, it will be removed from inventory after the first tick.
   This is useful for one-time use items that should be removed if their
   initialization fails for any reason.

### Item Properties
- `stack_size`: The number of items in the stack (optional, default: 64)
- `is_foil`: Whether the item is a foil (optional, default: false)
- `cooldown`: The cooldown in ticks (20 ticks = 1 second) between actions (optional, default: 0)

### Stage Condition Fields
- `stage_type`: Type of stage, e.g., "player", "world", or "team" (optional, default: "player")
- `stage`: Name of the stage (required)
- `is`: Whether the stage should be set (true) or not set (false) (optional, default: true)

### Action Blocks
- `onTick`: Actions to perform every tick
- `onUse`: Actions to perform when the item is used
- `onFinishUse`: Actions to perform when the item use is finished
- `onUseOn`: Actions to perform when the item is used on a block
- `onHitEntity`: Actions to perform when the item hits an entity
- `onSwing`: Actions to perform when the item is swung
- `onDrop`: Actions to perform when the item is dropped
- `onReleaseUsing`: Actions to perform when the use is released

### Action Types
- `execute`: Execute a command (e.g., `{"execute": "say Hello World!"}`)
- `delay`: Delay next actions by ticks (e.g., `{"delay": 20}`)
- `item`: Perform an item action (e.g., `{"item": "consume"}`)
- `if`: Conditional execution based on stage conditions (see example below)

### Item Action Values
- `consume`: Consume one item from the stack
- `delete`: Delete the item in hand
- `delete_all`: Delete all items of this type in inventory
- `drop`: Drop the item in hand
- `drop_all`: Drop all items of this type in inventory
- `damage`: Damage the item

## Important Notes

- **Final Actions**: The actions like `drop`, `drop_all`, `delete` and `delete_all` must always be the last in a command block to ensure the correct execution of subsequent commands.

- **Logical Spinlocks**: Stages can be used to create logical spinlocks, as demonstrated in the World Initializer example.

## Example: World Initialization Item

```json
{
  "id": "world_init",
  "creative_tab": true,
  "stack_size": 1,
  "stages_logic": "DEF_AND",
  "stages": [
    {
      "stage_type": "world",
      "stage": "initialized",
      "is": true
    }
  ],
  "do": [
    {
      "onTick": [
        {"execute": "iska_utils_stage add world initialized true"},
        {"execute": "say World initialized!"},
        {"item": "consume"}
      ]
    }
  ]
}
```

## Conditional Example with IF

```json
{
  "onTick": [
    {"if": [
        {"conditions":[0,1]},
        {"execute": "say Condition met!"},
        {"item": "delete_all"}
    ]}
  ]
}
```

## Notes

- Command items are loaded during game startup from JSON files in this directory.
- Changes require a game restart to take effect.
- You can create as many command item configurations as needed.
