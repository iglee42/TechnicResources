//priority 0
JEIEvents.hideItems(event => {
    var hided = [
      /*/mekanism:creative_chemical_tank/,
      /mekanism:creative_fluid_tank/,
      'technicresources:incomplete_advanced_component',
      'technicresources:incomplete_basic_component',
      'technicresources:incomplete_elite_component',
      'technicresources:incomplete_tier_installer',
      'technicresources:incomplete_ultimate_component'*/
      /icons:*/
    ]
    event.hide(hided.sort());
    
    /*var machineUpgrade = ['mekanism:basic_smelting_factory', 'mekanism:basic_enriching_factory', 'mekanism:basic_crushing_factory', 'mekanism:basic_compressing_factory', 'mekanism:basic_combining_factory', 'mekanism:basic_purifying_factory', 'mekanism:basic_injecting_factory', 'mekanism:basic_infusing_factory', 'mekanism:basic_sawing_factory', 'mekanism:ultimate_smelting_factory', 'mekanism:ultimate_enriching_factory', 'mekanism:ultimate_crushing_factory', 'mekanism:ultimate_compressing_factory', 'mekanism:ultimate_combining_factory', 'mekanism:ultimate_purifying_factory', 'mekanism:ultimate_injecting_factory', 'mekanism:ultimate_infusing_factory', 'mekanism:ultimate_sawing_factory', 'mekanism:elite_smelting_factory', 'mekanism:elite_enriching_factory', 'mekanism:elite_crushing_factory', 'mekanism:elite_compressing_factory', 'mekanism:elite_combining_factory', 'mekanism:elite_purifying_factory', 'mekanism:elite_injecting_factory', 'mekanism:elite_infusing_factory', 'mekanism:elite_sawing_factory', 'mekanism:advanced_smelting_factory', 'mekanism:advanced_enriching_factory', 'mekanism:advanced_crushing_factory', 'mekanism:advanced_compressing_factory', 'mekanism:advanced_combining_factory', 'mekanism:advanced_purifying_factory', 'mekanism:advanced_injecting_factory', 'mekanism:advanced_infusing_factory', 'mekanism:advanced_sawing_factory']
    machineUpgrade.forEach(function (machine) {
        event.hide(machine);
    });*/
});
JEIEvents.addItems(event => {
	
	event.add([
    //Item.of('mekanism:creative_fluid_tank'),
    //Item.of('mekanism:creative_chemical_tank'),
  ]);
  
});

JEIEvents.removeCategories(event=>{
  /*event.remove('twilightforest:uncrafting_table')
  event.remove('minecraft:plugins/tag')*/
});
