# Iska Utils - Documentation Index

This document provides an overview of the commands and scripting systems provided by the Iska Utils mod.

## Commands Added by the Mod

### `/iska_utils_macro list|test`

- `list` - Displays a list of all loaded macro commands
- `test` - Allows testing macro commands without actually executing them

### `/iska_utils_stage add|remove|list|set|clear`

- `add` - Adds a stage, with parameters:
  * `world`, `player`, or `team` to indicate the stage type (if `player` or `team`, a target must be specified)
  * `stage` - The string identifier for the stage (recommended to avoid spaces)
  * `silent` - Optional boolean (`true|false`, default `false`) to suppress chat feedback

- `remove` - Removes a stage, with parameters:
  * `world`, `player`, or `team` to indicate the stage type (if `player` or `team`, a target must be specified)
  * `stage` - The string identifier for the stage to remove
  * `silent` - Optional boolean (`true|false`, default `false`) to suppress chat feedback

- `list` - Displays stages, with parameters:
  * `world` - Shows stages saved for the world
  * `player` - Shows stages saved for the player (target is an optional parameter, default `@s`)
  * `team` - Shows stages saved for the team (target is an optional parameter, default `@s`)
  * `all` - Shows stages saved for world, player, and team (target is an optional parameter, default `@s`)

- `set` - Similar to add/remove, with parameters:
  * `world`, `player`, or `team` to indicate the stage type (if `player` or `team`, a target must be specified)
  * `stage` - The string identifier for the stage
  * `value` - Boolean (`true|false`) where `true` adds the stage and `false` removes it
  * `silent` - Optional boolean (`true|false`, default `false`) to suppress chat feedback

- `clear` - Removes all stages, with parameters:
  * `world`, `player`, `team`, or `all` to indicate which stages to clear (if `player`, `team`, or `all`, target can be specified, default `@s`)
  * `silent` - Optional boolean (`true|false`, default `false`) to suppress chat feedback

### `/iska_utils_shop reload|info|currencies|categories|entries|balance`

- `reload` - Reloads all shop configurations from files
- `info` - Shows general information about the shop system
- `currencies` - Lists all available currencies
- `categories` - Lists all available categories
- `entries` - Lists all shop entries (optionally filtered by category)
- `balance` - Shows the current team's balance

### `/iska_utils_team`

Team management commands for the shop system:

- `create <teamName>` - Creates a new team
- `delete [teamName]` - Deletes own team or specified team (admin only)
- `rename <newName> [teamName]` - Renames own team or specified team
- `transfer <newLeader> [teamName]` - Transfers team leadership
- `add <player> [teamName]` - Adds player to team (admin only)
- `remove <player> [teamName]` - Removes player from team
- `info [teamName]` - Shows team information
- `list` - Lists all teams
- `balance [teamName] [currencyId]` - Shows team balance
- `addCurrency <currencyId> <amount> [team|player] [target]` - Adds currency to team (admin only)
- `removeCurrency <currencyId> <amount> [team|player] [target]` - Removes currency from team (admin only)
- `setCurrency <currencyId> <amount> [team|player] [target]` - Sets team currency balance (admin only)
- `invite <player> [teamName]` - Invites player to team
- `accept <teamName>` - Accepts team invitation
- `leave` - Leaves current team
- `assistant add|remove|list <player> [teamName]` - Manages team assistants

## Scripting System

All files are JSON format and should be placed in their respective directories/folders.
The default base directory can be changed in the mod's config file (currently set to: `kubejs/external_scripts`).

Files are identified by their `type` parameter:

- `iska_utils:commands_macro` - For declaring custom commands that group multiple commands with various conditions and parameters.
  * Location: `kubejs/external_scripts/iska_utils_macros/`

- `iska_utils:command_item` - For declaring items that execute a series of commands, including macros.
  * Location: `kubejs/external_scripts/command_items/`

- `iska_utils:stage_item` - For declaring stages that limit items, allowing filtering by inventory. For example, this can block items that go into curios slots.
  * Location: `kubejs/external_scripts/stage_items/`

- `iska_utils:plates` - For declaring custom plates that apply potion effects, direct damage, or predefined statuses like fire and freeze.
  * Location: `kubejs/external_scripts/potion_plates/`

- `iska_utils:structure` - For declaring custom structures that can be placed manually or automatically with the Structure Placer Machine.
  * Location: `kubejs/external_scripts/iska_utils_structures/`
  * Documentation: See README.md in the structures folder for complete examples and features

- `iska_utils:structure_monouse_item` - For declaring monouse items that give materials and place structures as rewards.
  * Location: `kubejs/external_scripts/iska_utils_structures/`

- `iska_utils:shop_currency` - For declaring custom currencies for the shop system.
  * Location: `kubejs/external_scripts/shop/currencies/`

- `iska_utils:shop_category` - For declaring categories to organize shop entries.
  * Location: `kubejs/external_scripts/shop/categories/`

- `iska_utils:shop_entry` - For declaring items available in the shop with prices and properties.
  * Location: `kubejs/external_scripts/shop/entries/`
  * Documentation: See README.txt in the shop folder for complete examples and NBT support

## Advanced Features

### Sub-Command Implementation

The system supports implementing sub-commands using the static parameter type and conditional execution with stages.
See the README.md file in the iska_utils_macros folder for a complete example and explanation.

### Command Reloading

All commands can be reloaded with the standard `/reload` command or the improved version provided by this mod: `/reloader`.
This allows you to modify commands at any time. If you change a default generated file, set `overwritable` to `false` in the file to prevent it from being regenerated.

---

Generated by Iska Utils
