ServerEvents.recipes(e => {
    function mixing(ingredients, result, count) {
        e.custom({ "type": "create:mixing", "ingredients": [{ "tag": ingredients[0] }, { "tag": ingredients[1] }], "results": [{ "count": count, "id": result }] })
    }

    // Dyes
    mixing(['c:dyes/black', 'c:dyes/white'], 'minecraft:gray_dye', 2)
    mixing(['c:dyes/gray', 'c:dyes/white'], 'minecraft:light_gray_dye', 2)
    mixing(['c:dyes/blue', 'c:dyes/red'], 'minecraft:purple_dye', 2)
    mixing(['c:dyes/yellow', 'c:dyes/red'], 'minecraft:orange_dye', 2)
    mixing(['c:dyes/red', 'c:dyes/white'], 'minecraft:pink_dye', 2)
    mixing(['c:dyes/pink', 'c:dyes/purple'], 'minecraft:magenta_dye', 2)
    mixing(['c:dyes/blue', 'c:dyes/white'], 'minecraft:light_blue_dye', 2)
    mixing(['c:dyes/blue', 'c:dyes/green'], 'minecraft:cyan_dye', 2)
    mixing(['c:dyes/white', 'c:dyes/green'], 'minecraft:lime_dye', 2)
})