const fs  = require("fs");
const path = require("path");

const obj = [
    {
        "name": "波浪",										
        "photographer": "蚂蚁",						
        "desc": "木落雁嗷嗷，洞庭波浪高",		
        "picPath": "data/pic/pic-3.png"		
      },
      {
        "name": "落日",
        "photographer": "蚂蚁",
        "desc": "长河落日圆",
        "picPath": "data/pic/pic-1.png"
      },
]

const filepath = path.join(__dirname,"web/data", "obj.json")
fs.writeFile(filepath, JSON.stringify(obj), (err) => {
    if (err){
        console.error("save error")
        return;
    }
    console.info("save success!");
});

