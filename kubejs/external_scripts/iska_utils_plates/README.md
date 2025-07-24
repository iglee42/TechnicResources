# Iska Utils - Potion Plates

This directory contains configuration files for custom potion effect plates.

## Configuration Format

```json
{
  "type": "iska_utils:plates",
  "overwritable": true,
  "plates": [
    {
      "plate_type": "effect",
      "id": "iska_utils-poison",
      "effect": "minecraft:poison",
      "amplifier": 0,
      "duration": 100,
      "delay": 40,
      "hide_particles": false,
      "affects_players": true,
      "affects_mobs": true,
      "creative_tab": true,
      "player_shift_disable": true
    },
    {
      "plate_type": "damage",
      "id": "iska_utils-damage",
      "damage_type": "minecraft:generic",
      "damage": 2.0,
      "delay": 20,
      "affects_players": true,
      "affects_mobs": true,
      "creative_tab": true,
      "player_shift_disable": true
    },
    {
      "plate_type": "special",
      "id": "iska_utils-fire",
      "apply": "fire",
      "duration": 60,
      "delay": 40,
      "affects_players": true,
      "affects_mobs": true,
      "creative_tab": true,
      "player_shift_disable": true
    }
  ]
}
```

## Fields

### General Fields (all plate types)
- `plate_type`: The type of plate (`effect`, `damage`, or `special`) [required]
- `id`: Unique identifier for the plate [optional, auto-generated if not provided]
- `affects_players`: Whether this plate affects players [optional, default: true]
- `affects_mobs`: Whether this plate affects non-player entities [optional, default: true]
- `delay`: Delay in ticks between applying effects (20 ticks = 1 second) [optional, type-specific defaults]
- `creative_tab`: Whether this plate should appear in the creative tab [optional, default: true]
- `player_shift_disable`: Whether players can avoid the effect by sneaking [optional, default: true]

### Effect Plate Fields
- `effect`: The effect to apply, e.g., `minecraft:poison` [required]
- `amplifier`: The amplifier (level) of the effect, starting at 0 [optional, default: 0]
- `duration`: Duration in ticks (20 ticks = 1 second) [optional, default: 100, minimum: 60]
- `hide_particles`: Whether to hide the effect particles [optional, default: false]

### Damage Plate Fields
- `damage_type`: The damage type to apply, e.g., `minecraft:generic` [required]
- `damage`: The amount of damage to apply [required]

### Special Plate Fields
- `apply`: Special effect type (`fire`, `freeze`) [required]
- `duration`: Duration in ticks (20 ticks = 1 second) [required]

## Notes

- You can place potion plates like regular blocks. Entities standing on the plate will receive the configured effect.
- If a plate configuration with the same ID is found in multiple files, the behavior depends on the `overwritable` flag:
  - If a plate configuration has `overwritable: false`, it cannot be overwritten by other configurations
  - If a plate configuration has `overwritable: true`, it can be overwritten by configurations loaded later
  - The global `overwritable` flag applies to all plates in a file if not specified individually
- Plates are sorted alphabetically by ID for registration purposes.
- When `player_shift_disable` is true, players can avoid the effect by sneaking (shift key)
- When `creative_tab` is false, the plate won't appear in creative tabs but can still be used with commands

## Example File Locations

- KubeJS: `kubejs/external_scripts/iska_utils_plates/custom_plates.json`
- Default plates: `kubejs/external_scripts/iska_utils_plates/iska_utils_plates.json`

Changes require a game restart to apply.