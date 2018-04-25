const Mock = require('mockjs')
const {Random} = Mock
const fs = require('fs')
let arr = ["家乡味道", "进口食品", "牛奶乳品", "休闲零食", "生鲜果蔬", "米面粮油", "调味调料", "酒水饮料"]
Random.extend({
    mealType:() => {
        let item = Random.pick(arr)
        let idx = arr.indexOf(item)
        let delId = arr.splice(idx,1)
        return item
    }
})

let res = Mock.mock({
    "success":1,
    "info":"请求成功",
    "code":1001,
    "list|8":[
        {
            "title":() => Random.mealType(),
            "meallist|5-7":[
                {
                    "name":() =>Random.cword(2,5),
                    "num":() =>Random.natural(1,9999),
                    "price":() => Random.natural(1,99),
                    "img":() =>Random.image('70x70',Random.color(),"#fff",'png','!')
                }
            ]
        }
    ]
})

fs.writeFileSync('./catagory.json',JSON.stringify(res))