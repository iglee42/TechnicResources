BlockEvents.rightClicked(event => {
    let server = event.getServer()
    let player = event.getEntity()
    let block = event.getBlock()
    let level = block.getLevel()
    let item = event.getItem()
    if (item.id == 'technicresources:bedrock_breaker' && block.id == 'compactmachines:machine_normal') {
        if (!player.isFake()) {
            if (block.getDown().id == 'minecraft:bedrock' && !player.stages.has('use_bedrock_breaker')) {
                event.getItem().count -= 1
                player.stages.add('use_bedrock_breaker')
                server.runCommandSilent("fill " + (block.x - 1) + " " + (block.y + 3) + " " + (block.z + 1) + " " + (block.x + 3) + " " + (block.y + 3) + " " + (block.z - 1) + " air replace #technicresources:bedrock_breaker")
                server.runCommandSilent("playsound minecraft:block.anvil.land master @a " + block.x + " " + block.y + " " + block.z + " 0.25")
                server.scheduleInTicks(1 * 20, callback => {
                    server.runCommandSilent("fill " + (block.x - 1) + " " + (block.y + 2) + " " + (block.z + 1) + " " + (block.x + 3) + " " + (block.y + 2) + " " + (block.z - 1) + " air replace #technicresources:bedrock_breaker")
                    server.runCommandSilent("playsound minecraft:block.anvil.land master @a " + block.x + " " + block.y + " " + block.z + " 0.25")
                });
                server.scheduleInTicks(2 * 20, callback => {
                    server.runCommandSilent("fill " + (block.x - 1) + " " + (block.y + 1) + " " + (block.z + 1) + " " + (block.x + 3) + " " + (block.y + 1) + " " + (block.z - 1) + " air replace #technicresources:bedrock_breaker")
                    server.runCommandSilent("playsound minecraft:block.anvil.land master @a " + block.x + " " + block.y + " " + block.z + " 0.25")
                });
                server.scheduleInTicks(3 * 20, callback => {
                    server.runCommandSilent("fill " + (block.x - 1) + " " + (block.y) + " " + (block.z + 1) + " " + (block.x + 3) + " " + (block.y - 1) + " " + (block.z - 1) + " air replace #technicresources:bedrock_breaker")
                    server.runCommandSilent("playsound minecraft:block.anvil.land master @a " + block.x + " " + block.y + " " + block.z + " 0.25")
                });
            } else if (player.stages.has('use_bedrock_breaker')) {
                player.displayClientMessage(Text.red('You already used a bedrock breaker'), true)
            }
        }
    }
    if (item.id == 'technicresources:room_upgrader' && block.id == 'technicresources:bedrock_room_manager' && parseInt(block.getProperties().get("stage")) === 0) {
        if (!player.stages.has('chapter_0')) {
            let { x, y, z } = block;
            item.setCount(item.count - 1)
            server.runCommandSilent(`fill ${x - 2} ${y} ${z - 2} ${x + 2} ${y} ${z + 2} bedrock replace air`)
            server.runCommandSilent(`fill ${x - 2} ${y + 6} ${z - 2} ${x + 2} ${y + 6} ${z + 2} bedrock replace air`)
            server.runCommandSilent(`fill ${x - 1} ${y + 4} ${z - 1} ${x + 1} ${y + 4} ${z + 1} air replace bedrock`)
            server.runCommandSilent("playsound minecraft:block.anvil.land master @a " + block.x + " " + block.y + " " + block.z + " 0.25")


            server.scheduleInTicks(1 * 20, callback => {
                server.runCommandSilent(`fill ${x - 2} ${y + 1} ${z - 1} ${x - 2} ${y + 3} ${z + 1} air replace bedrock`)
                server.runCommandSilent(`fill ${x - 3} ${y + 1} ${z - 2} ${x - 3} ${y + 5} ${z + 2} bedrock replace air`)
                server.runCommandSilent("playsound minecraft:block.anvil.land master @a " + block.x + " " + block.y + " " + block.z + " 0.25")
            });
            server.scheduleInTicks(2 * 20, callback => {
                server.runCommandSilent(`fill ${x - 1} ${y + 1} ${z + 2} ${x + 1} ${y + 3} ${z + 2} air replace bedrock`)
                server.runCommandSilent(`fill ${x - 2} ${y + 1} ${z + 3} ${x + 2} ${y + 5} ${z + 3} bedrock replace air`)
                server.runCommandSilent("playsound minecraft:block.anvil.land master @a " + block.x + " " + block.y + " " + block.z + " 0.25")
            });
            server.scheduleInTicks(3 * 20, callback => {
                server.runCommandSilent(`fill ${x + 2} ${y + 1} ${z - 1} ${x + 2} ${y + 3} ${z + 1} air replace bedrock`)
                server.runCommandSilent(`fill ${x + 3} ${y + 1} ${z - 2} ${x + 3} ${y + 5} ${z + 2} bedrock replace air`)
                server.runCommandSilent("playsound minecraft:block.anvil.land master @a " + block.x + " " + block.y + " " + block.z + " 0.25")
            });
            server.scheduleInTicks(4 * 20, callback => {
                server.runCommandSilent(`fill ${x - 1} ${y + 1} ${z - 2} ${x + 1} ${y + 3} ${z - 2} air replace bedrock`)
                server.runCommandSilent(`fill ${x - 2} ${y + 1} ${z - 3} ${x + 2} ${y + 5} ${z - 3} bedrock replace air`)
                server.runCommandSilent("playsound minecraft:block.anvil.use master @a " + block.x + " " + block.y + " " + block.z + " 0.25")
                level.getBlock(block.getPos()).set(block.id, { 'stage': '1' })
                player.stages.add('chapter_0')
            });

        } else {
            player.displayClientMessage(Text.red('You already used room upgrader'), true)
        }
    }
    if (item.id == 'technicresources:room_upgrader_2' && block.id == 'technicresources:bedrock_room_manager' && parseInt(block.getProperties().get("stage")) === 1) {
        if (!player.stages.has('chapter_1')) {
            let { x, y, z } = block;
            item.setCount(item.count - 1)
            server.runCommandSilent(`fill ${x - 3} ${y} ${z - 3} ${x + 3} ${y} ${z + 3} bedrock replace air`)
            server.runCommandSilent(`fill ${x - 3} ${y + 8} ${z - 3} ${x + 3} ${y + 8} ${z + 3} bedrock replace air`)
            server.runCommandSilent(`fill ${x - 2} ${y + 6} ${z - 2} ${x + 2} ${y + 4} ${z + 2} air replace bedrock`)
            server.runCommandSilent("playsound minecraft:block.anvil.land master @a " + block.x + " " + block.y + " " + block.z + " 0.25")


            server.scheduleInTicks(1 * 20, callback => {
                server.runCommandSilent(`fill ${x - 3} ${y + 1} ${z - 2} ${x - 3} ${y + 5} ${z + 2} air replace bedrock`)
                server.runCommandSilent(`fill ${x - 4} ${y + 1} ${z - 3} ${x - 4} ${y + 7} ${z + 3} bedrock replace air`)
                server.runCommandSilent("playsound minecraft:block.anvil.land master @a " + block.x + " " + block.y + " " + block.z + " 0.25")
            });
            server.scheduleInTicks(2 * 20, callback => {
                server.runCommandSilent(`fill ${x - 2} ${y + 1} ${z + 3} ${x + 2} ${y + 5} ${z + 3} air replace bedrock`)
                server.runCommandSilent(`fill ${x - 3} ${y + 1} ${z + 4} ${x + 3} ${y + 7} ${z + 4} bedrock replace air`)
                server.runCommandSilent("playsound minecraft:block.anvil.land master @a " + block.x + " " + block.y + " " + block.z + " 0.25")
            });
            server.scheduleInTicks(3 * 20, callback => {
                server.runCommandSilent(`fill ${x + 3} ${y + 1} ${z - 2} ${x + 3} ${y + 5} ${z + 2} air replace bedrock`)
                server.runCommandSilent(`fill ${x + 4} ${y + 1} ${z - 3} ${x + 4} ${y + 7} ${z + 3} bedrock replace air`)
                server.runCommandSilent("playsound minecraft:block.anvil.land master @a " + block.x + " " + block.y + " " + block.z + " 0.25")
            });
            server.scheduleInTicks(4 * 20, callback => {
                server.runCommandSilent(`fill ${x - 2} ${y + 1} ${z - 3} ${x + 2} ${y + 5} ${z - 3} air replace bedrock`)
                server.runCommandSilent(`fill ${x - 3} ${y + 1} ${z - 4} ${x + 3} ${y + 7} ${z - 4} bedrock replace air`)
                server.runCommandSilent("playsound minecraft:block.anvil.use master @a " + block.x + " " + block.y + " " + block.z + " 0.25")
                level.getBlock(block.getPos()).set(block.id, { 'stage': '2' })
                player.stages.add('chapter_1')
            });

        } else {
            player.displayClientMessage(Text.red('You already used room upgrader tier 2'), true)
        }
    }
});