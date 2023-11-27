BlockEvents.rightClicked(event => {
    let server = event.getServer()
    let player = event.getEntity()
    let block = event.getBlock()
    let item = event.getItem()
    if (item.id == 'technicresources:bedrock_breaker' && block.id == 'compactmachines:machine_small') {
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
    if (item.id == 'technicresources:compact_upgrader' && block.id == 'compactmachines:machine_tiny') {
        block.set('compactmachines:machine_small')
        item.setCount(item.count - 1)
        server.runCommandSilent("playsound minecraft:block.anvil.use master @a " + block.x + " " + block.y + " " + block.z + " 0.25")
    }
});