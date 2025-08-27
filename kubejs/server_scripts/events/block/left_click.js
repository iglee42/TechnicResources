BlockEvents.leftClicked(event => {
    let server = event.getServer()
    let player = event.getEntity()
    let block = event.getBlock()
    let level = block.getLevel()
    let item = event.getItem()
    if (level.isClientSide()) return;
    if (item.id === "minecraft:air" && block.id === "minecraft:bedrock" && Math.random() <= 0.15) {
        player.give('1x technicresources:bedrock_shard')
        player.attack(1)
        event.cancel()
    }
});