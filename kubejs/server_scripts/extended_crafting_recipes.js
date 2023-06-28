ServerEvents.recipes(event =>{    


    function shaped(pattern,keys,result,count) {
        event.custom({
            "type": "extendedcrafting:shaped_table",
            "pattern": pattern,
            "key": keys,
            "result":{
                "item": result,
                "count": count
            }
        })
    }
    function shapedTier(pattern,keys,result,count,tier) {
        event.custom({
            "type": "extendedcrafting:shaped_table",
            "tier": tier,
            "pattern": pattern,
            "key": keys,
            "result":{
                "item": result,
                "count": count
            }
        })
    }
})