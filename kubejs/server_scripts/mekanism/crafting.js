ServerEvents.recipes(e => {
    // Pellet Blocks
    e.shapeless('mekanism:block_antimatter', ['9x mekanism:pellet_antimatter'])
    e.shapeless('9x mekanism:pellet_antimatter', ['mekanism:block_antimatter'])
    e.shapeless('mekanism:block_plutonium', ['9x mekanism:pellet_plutonium'])
    e.shapeless('9x mekanism:pellet_plutonium', ['mekanism:block_plutonium'])
    e.shapeless('mekanism:block_polonium', ['9x mekanism:pellet_polonium'])
    e.shapeless('9x mekanism:pellet_polonium', ['mekanism:block_polonium'])
})