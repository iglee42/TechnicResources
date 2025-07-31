//priority 0
RecipeViewerEvents.removeEntries("item",event => {
  var hided = [
    /mekanism:creative_chemical_tank/,
    /mekanism:creative_fluid_tank/,
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

  ]
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
RecipeViewerEvents.addEntries('item',event => {

  event.add([
    Item.of('ae2:facade[ae2:facade_item="minecraft:stone"]'),
    Item.of('mekanism:creative_fluid_tank'),
    Item.of('mekanism:creative_chemical_tank'),
  ]);

});

RecipeViewerEvents.removeCategories(event => {
  /*event.remove('twilightforest:uncrafting_table')
  event.remove('minecraft:plugins/tag')*/
});
