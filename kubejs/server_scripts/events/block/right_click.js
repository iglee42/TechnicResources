BlockEvents.rightClicked(event => {
    let server = event.getServer()
    let player = event.getEntity()
    let block = event.getBlock()
    let level = block.getLevel()
    let item = event.getItem()
    if (level.isClientSide()) return;
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
            if (!player.isCreative()) {
                item.setCount(item.count - 1)
            }
            server.runCommandSilent(`fill ${x - 3} ${y} ${z - 3} ${x + 3} ${y + 6} ${z + 3} bedrock outline`)
            server.runCommandSilent(`fill ${x - 2} ${y} ${z - 2} ${x + 2} ${y + 4} ${z + 2} air replace bedrock`)
            server.runCommandSilent(`fill ${x - 3} ${y} ${z - 3} ${x + 3} ${y} ${z + 3} bedrock replace air`)
            server.runCommandSilent(`setblock ${x - 1} ${y} ${z} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x + 1} ${y} ${z} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x} ${y} ${z - 1} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x} ${y} ${z + 1} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x - 1} ${y + 6} ${z} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x + 1} ${y + 6} ${z} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x} ${y + 6} ${z - 1} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x} ${y + 6} ${z + 1} technicresources:glowrock`)
            server.runCommandSilent(`fill ${x} ${y} ${z} ${x} ${y} ${z} technicresources:bedrock_room_manager replace bedrock`)
            server.runCommandSilent("playsound minecraft:block.anvil.land master @a " + block.x + " " + block.y + " " + block.z + " 0.25")
            level.getBlock(block.getPos()).set(block.id, { 'stage': '1' })
            player.stages.add('chapter_0')
        } else {
            player.displayClientMessage(Text.red('You already used room upgrader tier 2'), true)
        }
    }
    if (item.id == 'technicresources:room_upgrader_2' && block.id == 'technicresources:bedrock_room_manager' && parseInt(block.getProperties().get("stage")) === 1) {
        if (!player.stages.has('chapter_1')) {
            let { x, y, z } = block;
            if (!player.isCreative()) {
                item.setCount(item.count - 1)
            }
            server.runCommandSilent(`fill ${x - 4} ${y} ${z - 4} ${x + 4} ${y + 8} ${z + 4} bedrock outline`)
            server.runCommandSilent(`fill ${x - 3} ${y} ${z - 3} ${x + 3} ${y + 6} ${z + 3} air replace bedrock`)
            server.runCommandSilent(`fill ${x - 4} ${y} ${z - 4} ${x + 4} ${y} ${z + 4} bedrock replace air`)
            server.runCommandSilent(`setblock ${x - 2} ${y} ${z} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x + 2} ${y} ${z} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x} ${y} ${z - 2} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x} ${y} ${z + 2} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x - 1} ${y + 8} ${z} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x + 1} ${y + 8} ${z} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x} ${y + 8} ${z - 1} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x} ${y + 8} ${z + 1} technicresources:glowrock`)
            server.runCommandSilent(`fill ${x} ${y} ${z} ${x} ${y} ${z} technicresources:bedrock_room_manager replace bedrock`)
            server.runCommandSilent("playsound minecraft:block.anvil.land master @a " + block.x + " " + block.y + " " + block.z + " 0.25")
            level.getBlock(block.getPos()).set(block.id, { 'stage': '2' })
            player.stages.add('chapter_1')
        } else {
            player.displayClientMessage(Text.red('You already used room upgrader'), true)
        }
    }
    if (item.id === 'minecraft:iron_hoe' && block.id === 'technicresources:bedrock_room_manager' && !player.isCrouching() && parseInt(block.getProperties().get("stage")) === 2) {
        let currentStage = block.getProperties().get("stage")
        block.set('technicresources:dirt', { 'stage': currentStage })
        event.cancel()
    } else if (item.id === 'minecraft:air' && block.id === 'technicresources:dirt' && player.isCrouching()) {
        let currentStage = block.getProperties().get("stage")
        level.getBlock(block.getPos()).set('technicresources:bedrock_room_manager', { 'stage': currentStage })
        event.cancel()
    }
    if (item.id == 'technicresources:room_upgrader_3' && block.id == 'technicresources:bedrock_room_manager' && parseInt(block.getProperties().get("stage")) === 2) {
        if (!player.stages.has('chapter_2')) {
            let { x, y, z } = block;
            if (!player.isCreative()) {
                item.setCount(item.count - 1)
            }
            server.runCommandSilent(`fill ${x - 5} ${y} ${z - 5} ${x + 5} ${y + 10} ${z + 5} bedrock outline`)
            server.runCommandSilent(`fill ${x - 4} ${y} ${z - 4} ${x + 4} ${y + 8} ${z + 4} air replace bedrock`)
            server.runCommandSilent(`fill ${x - 5} ${y} ${z - 5} ${x + 5} ${y} ${z + 5} bedrock replace air`)
            server.runCommandSilent(`setblock ${x - 3} ${y} ${z} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x + 3} ${y} ${z} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x} ${y} ${z - 3} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x} ${y} ${z + 3} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x - 1} ${y + 10} ${z} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x + 1} ${y + 10} ${z} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x} ${y + 10} ${z - 1} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x} ${y + 10} ${z + 1} technicresources:glowrock`)
            server.runCommandSilent(`fill ${x} ${y} ${z} ${x} ${y} ${z} technicresources:bedrock_room_manager replace bedrock`)
            server.runCommandSilent("playsound minecraft:block.anvil.land master @a " + block.x + " " + block.y + " " + block.z + " 0.25")
            level.getBlock(block.getPos()).set(block.id, { 'stage': '3' })
            player.stages.add('chapter_2')
        } else {
            player.displayClientMessage(Text.red('You already used room upgrader'), true)
        }
    }
    if (item.id == 'technicresources:room_upgrader_4' && block.id == 'technicresources:bedrock_room_manager' && parseInt(block.getProperties().get("stage")) === 3) {
        if (!player.stages.has('chapter_3')) {
            let { x, y, z } = block;
            if (!player.isCreative()) {
                item.setCount(item.count - 1)
            }
            server.runCommandSilent(`fill ${x - 6} ${y} ${z - 6} ${x + 6} ${y + 12} ${z + 6} bedrock outline`)
            server.runCommandSilent(`fill ${x - 5} ${y} ${z - 5} ${x + 5} ${y + 10} ${z + 5} air replace bedrock`)
            server.runCommandSilent(`fill ${x - 6} ${y} ${z - 6} ${x + 6} ${y} ${z + 6} bedrock replace air`)
            server.runCommandSilent(`setblock ${x - 4} ${y} ${z} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x + 4} ${y} ${z} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x} ${y} ${z - 4} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x} ${y} ${z + 4} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x - 1} ${y + 12} ${z} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x + 1} ${y + 12} ${z} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x} ${y + 12} ${z - 1} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x} ${y + 12} ${z + 1} technicresources:glowrock`)
            server.runCommandSilent(`fill ${x} ${y} ${z} ${x} ${y} ${z} technicresources:bedrock_room_manager replace bedrock`)
            server.runCommandSilent("playsound minecraft:block.anvil.land master @a " + block.x + " " + block.y + " " + block.z + " 0.25")
            level.getBlock(block.getPos()).set(block.id, { 'stage': '4' })
            player.stages.add('chapter_3')
        } else {
            player.displayClientMessage(Text.red('You already used room upgrader'), true)
        }
    }
    if (item.id == 'technicresources:room_upgrader_5' && block.id == 'technicresources:bedrock_room_manager' && parseInt(block.getProperties().get("stage")) === 4) {
        if (!player.stages.has('chapter_4')) {
            let { x, y, z } = block;
            if (!player.isCreative()) {
                item.setCount(item.count - 1)
            }
            server.runCommandSilent(`fill ${x - 7} ${y} ${z - 7} ${x + 7} ${y + 14} ${z + 7} bedrock outline`)
            server.runCommandSilent(`fill ${x - 6} ${y} ${z - 6} ${x + 6} ${y + 12} ${z + 6} air replace bedrock`)
            server.runCommandSilent(`fill ${x - 7} ${y} ${z - 7} ${x + 7} ${y} ${z + 7} bedrock replace air`)
            server.runCommandSilent(`setblock ${x - 5} ${y} ${z} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x + 5} ${y} ${z} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x} ${y} ${z - 5} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x} ${y} ${z + 5} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x - 1} ${y + 14} ${z} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x + 1} ${y + 14} ${z} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x} ${y + 14} ${z - 1} technicresources:glowrock`)
            server.runCommandSilent(`setblock ${x} ${y + 14} ${z + 1} technicresources:glowrock`)
            server.runCommandSilent(`fill ${x} ${y} ${z} ${x} ${y} ${z} technicresources:bedrock_room_manager replace bedrock`)
            server.runCommandSilent("playsound minecraft:block.anvil.land master @a " + block.x + " " + block.y + " " + block.z + " 0.25")
            level.getBlock(block.getPos()).set(block.id, { 'stage': '5' })
            player.stages.add('chapter_4')
        } else {
            player.displayClientMessage(Text.red('You already used room upgrader'), true)
        }
    }
});