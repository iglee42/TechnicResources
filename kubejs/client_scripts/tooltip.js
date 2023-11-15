// priority: 0
ItemEvents.tooltip(event => {
	/*var machineToUpgrade = ['mekanism:basic_energy_cube', 'mekanism:elite_fluid_tank', 'mekanism:advanced_fluid_tank', 'mekanism:advanced_energy_cube', 'mekanism:elite_energy_cube', 'mekanism:basic_chemical_tank', 'mekanism:basic_fluid_tank', 'mekanism:advanced_bin', 'mekanism:elite_bin', 'mekanism:basic_chemical_tank', 'mekanism:advanced_chemical_tank', 'mekanism:elite_chemical_tank', 'mekanism:basic_bin','mekanism:advanced_smelting_factory', 'mekanism:advanced_smelting_factory', 'mekanism:elite_smelting_factory', 'mekanism:enrichment_chamber', 'mekanism:basic_enriching_factory', 'mekanism:advanced_enriching_factory', 'mekanism:elite_enriching_factory', 'mekanism:osmium_compressor', 'mekanism:basic_crushing_factory', 'mekanism:advanced_crushing_factory', 'mekanism:elite_crushing_factory', 'mekanism:combiner', 'mekanism:basic_compressing_factory', 'mekanism:advanced_compressing_factory', 'mekanism:elite_compressing_factory', 'mekanism:crusher', 'mekanism:basic_combining_factory', 'mekanism:advanced_combining_factory', 'mekanism:elite_combining_factory', 'mekanism:metallurgic_infuser', 'mekanism:basic_purifying_factory', 'mekanism:advanced_purifying_factory', 'mekanism:elite_purifying_factory', 'mekanism:purification_chamber', 'mekanism:basic_injecting_factory', 'mekanism:advanced_injecting_factory', 'mekanism:elite_injecting_factory', 'mekanism:energized_smelter', 'mekanism:basic_infusing_factory', 'mekanism:advanced_infusing_factory', 'mekanism:elite_infusing_factory', 'mekanism:chemical_injection_chamber', 'mekanism:basic_sawing_factory', 'mekanism:advanced_sawing_factory', 'mekanism:elite_sawing_factory', 'mekanism:precision_sawmill']
	machineToUpgrade.forEach(function (machine,index) {
		event.add(machine,[
			Text.yellow("Machine can be upgrade with tier installer.")
		]);
	})*/
	event.add('technicresources:compact_upgrader', [
		Text.red('Please clear your compact machine before upgrade it !')
	])
})