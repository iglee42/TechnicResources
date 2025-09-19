//priority 0
RecipeViewerEvents.removeEntries("item", event => {
  var hided = [
    /icons:/,
    'create:iron_sheet',
    'createaddition:electrum_sheet',
    'create:golden_sheet',
    'createaddition:zinc_sheet',
    'create:brass_sheet',
    'create:copper_sheet',
    'hammerlib:gears/wooden',
    'hammerlib:gears/stone',
    'hammerlib:gears/copper',
    'hammerlib:gears/iron',
    'hammerlib:gears/gold',
    'hammerlib:gears/diamond',
    'hammerlib:gears/netherite',
    'pneumaticcraft:compressed_iron_gear',
    'avaritia:neutron_gear',
    'createaddition:iron_rod',
    'createaddition:electrum_rod',
    'createaddition:gold_rod',
    'createaddition:brass_rod',
    'createaddition:copper_rod',
    'pneumaticcraft:compressed_iron_gear',
    'avaritia:neutron_gear',
    'createaddition:iron_wire',
    'createaddition:electrum_wire',
    'createaddition:gold_wire',
    'createaddition:copper_wire',
    'extendedcrafting:basic_table',
    'extendedcrafting:advanced_table',
    'extendedcrafting:elite_table',
    'extendedcrafting:ultimate_table',
    'extendedcrafting:basic_auto_table',
    'extendedcrafting:advanced_auto_table',
    'extendedcrafting:elite_auto_table',
    'extendedcrafting:ultimate_auto_table',
    'packagedexcrafting:basic_crafter',
    'packagedexcrafting:advanced_crafter',
    'packagedexcrafting:elite_crafter',
    'packagedexcrafting:ultimate_crafter',
    /mekanism:basic_.*_factory/,
    /mekanism:advanced_.*_factory/,
    /mekanism:elite_.*_factory/,
    /mekanism:ultimate_.*_factory/,
    'create:powdered_obsidian',
    'createaddition:diamond_grit',
    'pneumaticcraft:copper_nugget',
    'create:copper_nugget',
    'technicresources:empty',
  ]
  event.remove(/createcasing:.+_encased_.+/)
  event.remove(hided);
  event.remove(/ae2:facade/);
  event.remove(/create_dragons_plus:.+_bucket/)
});

RecipeViewerEvents.removeEntries("fluid", event => {
  global.colors.forEach(color => {
    event.remove(Fluid.of("create_dragons_plus:" + color + "_dye"));
  })
  event.remove(Fluid.of('create_dragons_plus:dragon_breath'));
})
RecipeViewerEvents.addEntries('item', event => {

  event.add([
    Item.of('ae2:facade[ae2:facade_item="minecraft:stone"]'),
    Item.of('mekanism:creative_fluid_tank'),
    Item.of('mekanism:creative_chemical_tank'),
    Item.of('rftoolsbuilder:mover_controller'),
  ]);

});

RecipeViewerEvents.removeCategories(event => {
  /*event.remove('twilightforest:uncrafting_table')
  event.remove('minecraft:plugins/tag')*/
});
