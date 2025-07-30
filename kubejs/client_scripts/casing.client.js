//priority: 9002
const $ModsUtils = Java.loadClass('fr.iglee42.igleelib.api.utils.ModsUtils')

ClientEvents.lang('en_us', event => {
    for (const c in global.casings) {
        let casing = global.casings[c];
        casing.blocks.forEach(block => {
            event.add(`block.createcasing.${block.getId().getPath()}`, $ModsUtils.getUpperName(block.getId().getPath(), "_"));
        });
        if (casing.gearbox !== null) {
            event.add(`item.createcasing.vertical_${casing.name}_gearbox`,$ModsUtils.getUpperName("vertical_" + casing.name + "_gearbox", "_"));
        }
    }
    for (const cog in global.cogwheels) {
        let cogwheel = global.cogwheels[cog];
        cogwheel.blocks.forEach(block => {
            event.add(`block.createcasing.${block.getId().getPath()}`, $ModsUtils.getUpperName(block.getId().getPath(), "_"));
        });
    }
});
ClientEvents.generateAssets("last", event => {
    const { casings, textures, cogwheels } = global;

    for (const c in casings) {
        let casing = casings[c];
        event.blockState("createcasing:" + casing.name + "_casing", gen => {
            gen.variant("", v => v.model(textures.namespace + ":block/casings/" + casing.name));
        })
        event.blockModel(textures.namespace + ":casings/" + casing.name, model => {
            model.parent("block/cube_all");
            model.texture("all", textures.namespace + ":block/" +  textures.casings + "/" + casing.name);
        });
        event.itemModel("createcasing:"+casing.name +"_casing", model => {
            model.parent(textures.namespace  + ":block/"+ textures.casings + "/" + casing.name);
        });

        if (casing.encasedShaft !== null) {
            event.blockState("createcasing:" + casing.name + "_encased_shaft", gen => {
                gen.variant("axis=x", v => v.model(textures.namespace + ":block/shafts/" + casing.name).x(90).y(90).uvlock());
                gen.variant("axis=y", v => v.model(textures.namespace + ":block/shafts/" + casing.name).uvlock());
                gen.variant("axis=z", v => v.model(textures.namespace + ":block/shafts/" + casing.name).x(90).y(180).uvlock());
            })
            event.blockModel(textures.namespace + ":shafts/" + casing.name, model => {
                model.parent("create:block/encased_shaft/block");
                model.texture("casing", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("opening", textures.namespace + ":block/" + textures.gearboxes + "/" + casing.name);
            });
            event.itemModel("createcasing:" + casing.name + "_encased_shaft", model => {
                model.parent("create:block/encased_shaft/item");
                model.texture("casing", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("opening", textures.namespace + ":block/" + textures.gearboxes + "/" + casing.name);
            });
        }
        if (casing.encasedCogwheel !== null) {
            event.blockState("createcasing:" + casing.name + "_encased_cogwheel", gen => {
                gen.variant("axis=x,bottom_shaft=false,top_shaft=false", v => v.model(textures.namespace + ":block/encased_cogwheels/" + casing.name).x(90).y(90));
                gen.variant("axis=x,bottom_shaft=false,top_shaft=true", v => v.model(textures.namespace + ":block/encased_cogwheels/top_" + casing.name).x(90).y(90));
                gen.variant("axis=x,bottom_shaft=true,top_shaft=false", v => v.model(textures.namespace + ":block/encased_cogwheels/bottom_" + casing.name).x(90).y(90));
                gen.variant("axis=x,bottom_shaft=true,top_shaft=true", v => v.model(textures.namespace + ":block/encased_cogwheels/top_bottom_" + casing.name).x(90).y(90));

                gen.variant("axis=y,bottom_shaft=false,top_shaft=false", v => v.model(textures.namespace + ":block/encased_cogwheels/" + casing.name));
                gen.variant("axis=y,bottom_shaft=false,top_shaft=true", v => v.model(textures.namespace + ":block/encased_cogwheels/top_" + casing.name));
                gen.variant("axis=y,bottom_shaft=true,top_shaft=false", v => v.model(textures.namespace + ":block/encased_cogwheels/bottom_" + casing.name));
                gen.variant("axis=y,bottom_shaft=true,top_shaft=true", v => v.model(textures.namespace + ":block/encased_cogwheels/top_bottom_" + casing.name));
                
                gen.variant("axis=z,bottom_shaft=false,top_shaft=false", v => v.model(textures.namespace + ":block/encased_cogwheels/" + casing.name).x(90).y(180));
                gen.variant("axis=z,bottom_shaft=false,top_shaft=true", v => v.model(textures.namespace + ":block/encased_cogwheels/top_" + casing.name).x(90).y(180));
                gen.variant("axis=z,bottom_shaft=true,top_shaft=false", v => v.model(textures.namespace + ":block/encased_cogwheels/bottom_" + casing.name).x(90).y(180));
                gen.variant("axis=z,bottom_shaft=true,top_shaft=true", v => v.model(textures.namespace + ":block/encased_cogwheels/top_bottom_" + casing.name).x(90).y(180));
            })

            event.blockModel(textures.namespace + ":encased_cogwheels/" + casing.name, model => {
                model.parent("create:block/encased_cogwheel/block");
                model.texture("1", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("4", textures.namespace + ":block/" + textures.gearboxes + "/" + casing.name);
                model.texture("casing", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("side", textures.namespace + ":block/" + textures.encasedCogwheels + "/" + casing.name);
                model.texture("particle", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
            });
            event.blockModel(textures.namespace + ":encased_cogwheels/top_" + casing.name, model => {
                model.parent("create:block/encased_cogwheel/block_top");
                model.texture("1", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("4", textures.namespace + ":block/" + textures.gearboxes + "/" + casing.name);
                model.texture("casing", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("side", textures.namespace + ":block/" + textures.encasedCogwheels + "/" + casing.name);
                model.texture("particle", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
            });
            event.blockModel(textures.namespace + ":encased_cogwheels/bottom_" + casing.name, model => {
                model.parent("create:block/encased_cogwheel/block_bottom");
                model.texture("1", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("4", textures.namespace + ":block/" + textures.gearboxes + "/" + casing.name);
                model.texture("casing", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("side", textures.namespace + ":block/" + textures.encasedCogwheels + "/" + casing.name);
                model.texture("particle", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
            });
            event.blockModel(textures.namespace + ":encased_cogwheels/top_bottom_" + casing.name, model => {
                model.parent("create:block/encased_cogwheel/block_top_bottom");
                model.texture("1", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("4", textures.namespace + ":block/" + textures.gearboxes + "/" + casing.name);
                model.texture("casing", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("side", textures.namespace + ":block/" + textures.encasedCogwheels + "/" + casing.name);
                model.texture("particle", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
            });
            event.itemModel("createcasing:"+casing.name+"_encased_cogwheel", model => {
                model.parent("create:block/encased_cogwheel/item");
                model.texture("1", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("4", textures.namespace + ":block/" + textures.gearboxes + "/" + casing.name);
                model.texture("casing", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("side", textures.namespace + ":block/" + textures.encasedCogwheels + "/" + casing.name);
                model.texture("particle", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
            });
        }
        if (casing.encasedLargeCogwheel !== null) {
            event.blockState("createcasing:" + casing.name + "_encased_large_cogwheel", gen => {
                gen.variant("axis=x,bottom_shaft=false,top_shaft=false", v => v.model(textures.namespace + ":block/encased_large_cogwheels/" + casing.name).x(90).y(90));
                gen.variant("axis=x,bottom_shaft=false,top_shaft=true", v => v.model(textures.namespace + ":block/encased_large_cogwheels/top_" + casing.name).x(90).y(90));
                gen.variant("axis=x,bottom_shaft=true,top_shaft=false", v => v.model(textures.namespace + ":block/encased_large_cogwheels/bottom_" + casing.name).x(90).y(90));
                gen.variant("axis=x,bottom_shaft=true,top_shaft=true", v => v.model(textures.namespace + ":block/encased_large_cogwheels/top_bottom_" + casing.name).x(90).y(90));

                gen.variant("axis=y,bottom_shaft=false,top_shaft=false", v => v.model(textures.namespace + ":block/encased_large_cogwheels/" + casing.name));
                gen.variant("axis=y,bottom_shaft=false,top_shaft=true", v => v.model(textures.namespace + ":block/encased_large_cogwheels/top_" + casing.name));
                gen.variant("axis=y,bottom_shaft=true,top_shaft=false", v => v.model(textures.namespace + ":block/encased_large_cogwheels/bottom_" + casing.name));
                gen.variant("axis=y,bottom_shaft=true,top_shaft=true", v => v.model(textures.namespace + ":block/encased_large_cogwheels/top_bottom_" + casing.name));

                gen.variant("axis=z,bottom_shaft=false,top_shaft=false", v => v.model(textures.namespace + ":block/encased_large_cogwheels/" + casing.name).x(90).y(180));
                gen.variant("axis=z,bottom_shaft=false,top_shaft=true", v => v.model(textures.namespace + ":block/encased_large_cogwheels/top_" + casing.name).x(90).y(180));
                gen.variant("axis=z,bottom_shaft=true,top_shaft=false", v => v.model(textures.namespace + ":block/encased_large_cogwheels/bottom_" + casing.name).x(90).y(180));
                gen.variant("axis=z,bottom_shaft=true,top_shaft=true", v => v.model(textures.namespace + ":block/encased_large_cogwheels/top_bottom_" + casing.name).x(90).y(180));
            })

            event.blockModel(textures.namespace + ":encased_large_cogwheels/" + casing.name, model => {
                model.parent("create:block/encased_large_cogwheel/block");
                model.texture("1", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("4", textures.namespace + ":block/" + textures.gearboxes + "/" + casing.name);
                model.texture("casing", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("side", textures.namespace + ":block/" + textures.encasedCogwheels + "/" + casing.name + "_connected");
                model.texture("particle", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
            });
            event.blockModel(textures.namespace + ":encased_large_cogwheels/top_" + casing.name, model => {
                model.parent("create:block/encased_large_cogwheel/block_top");
                model.texture("1", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("4", textures.namespace + ":block/" + textures.gearboxes + "/" + casing.name);
                model.texture("casing", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("side", textures.namespace + ":block/" + textures.encasedCogwheels + "/" + casing.name + "_connected");
                model.texture("particle", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
            });
            event.blockModel(textures.namespace + ":encased_large_cogwheels/bottom_" + casing.name, model => {
                model.parent("create:block/encased_large_cogwheel/block_bottom");
                model.texture("1", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("4", textures.namespace + ":block/" + textures.gearboxes + "/" + casing.name);
                model.texture("casing", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("side", textures.namespace + ":block/" + textures.encasedCogwheels + "/" + casing.name + "_connected");
                model.texture("particle", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
            });
            event.blockModel(textures.namespace + ":encased_large_cogwheels/top_bottom_" + casing.name, model => {
                model.parent("create:block/encased_large_cogwheel/block_top_bottom");
                model.texture("1", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("4", textures.namespace + ":block/" + textures.gearboxes + "/" + casing.name);
                model.texture("casing", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("side", textures.namespace + ":block/" + textures.encasedCogwheels + "/" + casing.name + "_connected");
                model.texture("particle", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
            });
            event.itemModel("createcasing:" + casing.name + "_encased_large_cogwheel", model => {
                model.parent("create:block/encased_large_cogwheel/item");
                model.texture("1", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("4", textures.namespace + ":block/" + textures.gearboxes + "/" + casing.name);
                model.texture("casing", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("side", textures.namespace + ":block/" + textures.encasedCogwheels + "/" + casing.name + "_connected");
                model.texture("particle", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
            });
        }

        // if (casing.encasedPipe !== null) {
        //     console.log(textures.namespace + ":block/encased_pipes/flat_" + casing.name)
        //     event.multipartState("createcasing:" + casing.name + "_encased_fluid_pipe", gen => {
        //         gen.part("down=false",v=>v.model(textures.namespace + ":block/encased_pipes/flat_" + casing.name).x(-90));
        //         gen.part("down=true", v => v.model(textures.namespace + ":block/encased_pipes/open_" + casing.name).x(-90));
        //         gen.part("up=false", v => v.model(textures.namespace + ":block/encased_pipes/flat_" + casing.name).x(90));
        //         gen.part("up=true", v => v.model(textures.namespace + ":block/encased_pipes/open_" + casing.name).x(90));
        //         gen.part("west=false", v => v.model(textures.namespace + ":block/encased_pipes/flat_" + casing.name).y(90));
        //         gen.part("west=true", v => v.model(textures.namespace + ":block/encased_pipes/open_" + casing.name).y(90));
        //         gen.part("east=false", v => v.model(textures.namespace + ":block/encased_pipes/flat_" + casing.name).y(270));
        //         gen.part("east=true", v => v.model(textures.namespace + ":block/encased_pipes/open_" + casing.name).y(270));
        //         gen.part("north=false", v => v.model(textures.namespace + ":block/encased_pipes/flat_" + casing.name).y(180));
        //         gen.part("north=true", v => v.model(textures.namespace + ":block/encased_pipes/open_" + casing.name).y(180));
        //         gen.part("south=false", v => v.model(textures.namespace + ":block/encased_pipes/flat_" + casing.name));
        //         gen.part("south=true", v => v.model(textures.namespace + ":block/encased_pipes/open_" + casing.name));
        //         console.log(gen.toJson())
        //     })

        //     event.blockModel(textures.namespace + ":encased_pipes/flat_" + casing.name, model => {
        //         model.parent("create:block/encased_fluid_pipe/block_flat");
        //         model.texture("0", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
        //         model.texture("particle", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
        //     });
        //     event.blockModel(textures.namespace + ":encased_pipes/open_" + casing.name, model => {
        //         model.parent("createcasing:block/templates/pipe_block_open");
        //         model.texture("1", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
        //         model.texture("particle", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
        //     });
        // }
        if (casing.gearbox !== null) {
            event.blockState("createcasing:" + casing.name + "_gearbox", gen => {
                gen.variant("axis=x", v => v.model(textures.namespace + ":block/gearboxes/" + casing.name).x(90).y(90).uvlock());
                gen.variant("axis=y", v => v.model(textures.namespace + ":block/gearboxes/" + casing.name).uvlock());
                gen.variant("axis=z", v => v.model(textures.namespace + ":block/gearboxes/" + casing.name).x(90).y(180).uvlock());
            })

            event.blockModel(textures.namespace + ":gearboxes/" + casing.name, model => {
                model.parent("create:block/gearbox/block");
                model.texture("0", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("1", textures.namespace + ":block/" + textures.gearboxes + "/" + casing.name);
                model.texture("particle", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
            });
            event.itemModel("createcasing:" + casing.name + "_gearbox", model => {
                model.parent("create:block/gearbox/item");
                model.texture("0", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("1", textures.namespace + ":block/" + textures.gearboxes + "/" + casing.name);
                model.texture("particle", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
            });
            event.itemModel("createcasing:vertical_" + casing.name + "_gearbox", model => {
                model.parent("create:block/gearbox/item_vertical");
                model.texture("gearbox_top", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("gearbox", textures.namespace + ":block/" + textures.gearboxes + "/" + casing.name);
                model.texture("particle", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
            });
        }

        if (casing.depot !== null) {
            event.blockState("createcasing:" + casing.name + "_depot", gen => {
                gen.variant("", v => v.model(textures.namespace + ":block/depots/" + casing.name).uvlock());
            })

            event.blockModel(textures.namespace + ":depots/" + casing.name, model => {
                model.parent("create:block/depot/block");
                model.texture("1", textures.namespace + ":block/" + textures.depotSides + "/" + casing.name);
                model.texture("2", textures.namespace + ":block/" + textures.depotTops + "/" + casing.name);
                model.texture("3", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("particle", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
            });
            event.itemModel("createcasing:" + casing.name + "_depot", model => {
                model.parent(textures.namespace + ":block/depots/" + casing.name);
            });
        }

        if (casing.press !== null) {
            event.blockState("createcasing:" + casing.name + "_press", gen => {
                gen.variant("facing=east", v => v.model(textures.namespace + ":block/presses/" + casing.name).y(90));
                gen.variant("facing=west", v => v.model(textures.namespace + ":block/presses/" + casing.name).y(270));
                gen.variant("facing=south", v => v.model(textures.namespace + ":block/presses/" + casing.name).y(180));
                gen.variant("facing=north", v => v.model(textures.namespace + ":block/presses/" + casing.name));
            })

            event.blockModel(textures.namespace + ":presses/" + casing.name, model => {
                model.parent("create:block/mechanical_press/block");
                model.texture("4", textures.namespace + ":block/" + textures.pressSides + "/" + casing.name);
                model.texture("mechanical_press_top", textures.namespace + ":block/" + textures.pressTops + "/" + casing.name);
                model.texture("mechanical_press_bottom", textures.namespace + ":block/" + textures.pressBottoms + "/" + casing.name);
                model.texture("gearbox_top", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("gearbox", textures.namespace + ":block/" + textures.gearboxes + "/" + casing.name);
                model.texture("particle", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
            });
            event.itemModel("createcasing:" + casing.name + "_press", model => {
                model.parent("create:block/mechanical_press/item");
                model.texture("8", textures.namespace + ":block/" + textures.pressSides + "/" + casing.name);
                model.texture("mechanical_press_top", textures.namespace + ":block/" + textures.pressTops + "/" + casing.name);
                model.texture("mechanical_press_bottom", textures.namespace + ":block/" + textures.pressBottoms + "/" + casing.name);
                model.texture("gearbox_top", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
                model.texture("gearbox", textures.namespace + ":block/" + textures.gearboxes + "/" + casing.name);
                model.texture("particle", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
            });
        }
        if (casing.mixer !== null) {
            event.blockState("createcasing:" + casing.name + "_mixer", gen => {
                gen.variant("", v => v.model(textures.namespace + ":block/mixers/" + casing.name));
            })

            event.blockModel(textures.namespace + ":mixers/" + casing.name, model => {
                model.parent("create:block/mechanical_mixer/block");
                model.texture("4", textures.namespace + ":block/" + textures.mixerSides + "/" + casing.name);
                model.texture("11", textures.namespace + ":block/" + textures.pressTops + "/" + casing.name);
                model.texture("2", textures.namespace + ":block/" + textures.gearboxes + "/" + casing.name);
                model.texture("particle", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
            });
            event.itemModel("createcasing:" + casing.name + "_mixer", model => {
                model.parent("create:block/mechanical_mixer/item");
                model.texture("4", textures.namespace + ":block/" + textures.mixerSides + "/" + casing.name);
                model.texture("11", textures.namespace + ":block/" + textures.pressTops + "/" + casing.name);
                model.texture("2", textures.namespace + ":block/" + textures.gearboxes + "/" + casing.name);
                model.texture("particle", textures.namespace + ":block/" + textures.casings + "/" + casing.name);
            });
        }
    }


    for (const cog in cogwheels) {
        let cogwheel = cogwheels[cog];
        let name = cogwheel.name;
        if (cogwheel.cogwheel !== null) {
            event.blockState("createcasing:"+name+"_cogwheel", gen => {
                gen.variant("axis=y", v => v.model(textures.namespace + ":block/cogwheels/" + name))
                gen.variant("axis=z", v => v.model(textures.namespace + ":block/cogwheels/" + name).x(90).y(180))
                gen.variant("axis=x", v => v.model(textures.namespace + ":block/cogwheels/" + name).x(90).y(90))
            })
            event.blockModel(textures.namespace + ":cogwheels/"+ name, gen => {
                gen.parent("create:block/cogwheel")
                gen.texture("1_2", textures.namespace + ":block/" + textures.cogwheels + "/" + name);
            })
            event.blockModel(textures.namespace + ":cogwheels/" + name + "_shaftless", gen => {
                gen.parent("create:block/cogwheel_shaftless")
                gen.texture("1_2", textures.namespace + ":block/" + textures.cogwheels + "/" + name);
            })
            event.itemModel("createcasing:"+name+"_cogwheel", gen => {
                gen.parent("create:block/cogwheel")
                gen.texture("1_2", textures.namespace + ":block/" + textures.cogwheels + "/" + name);
            })
        }

        if (cogwheel.largeCogwheel !== null) {
            event.blockState("createcasing:" + name + "_large_cogwheel", gen => {
                gen.variant("axis=y", v => v.model(textures.namespace + ":block/large_cogwheels/" + name))
                gen.variant("axis=z", v => v.model(textures.namespace + ":block/large_cogwheels/" + name).x(90).y(180))
                gen.variant("axis=x", v => v.model(textures.namespace + ":block/large_cogwheels/" + name).x(90).y(90))
            })
            event.blockModel(textures.namespace + ":large_cogwheels/" + name, gen => {
                gen.parent("create:block/large_cogwheel")
                gen.texture("4", textures.namespace + ":block/" + textures.largeCogwheels + "/" + name);
            })
            event.blockModel(textures.namespace + ":large_cogwheels/" + name + "_shaftless", gen => {
                gen.parent("create:block/large_cogwheel_shaftless")
                gen.texture("4", textures.namespace + ":block/" + textures.largeCogwheels + "/" + name);
            })
            event.itemModel("createcasing:" + name + "_large_cogwheel", gen => {
                gen.parent("create:block/large_cogwheel")
                gen.texture("4", textures.namespace + ":block/" + textures.largeCogwheels + "/" + name);
            })
        }
    }
});
