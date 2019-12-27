var express = require('express');


//import(require)하기 위해 export
module.exports = function(router) {    
    console.log("여기 실행되나?");
    router.get('/', (req, res) => {
        res.render('index', {data : "안녕하세요~~!~!",
        data1 : {
            name: "서동민 ",
            desc: "ㅎㅎ"
        }});
        console.log("index");
    });
    
    router.get('/about', (req, res) => {
        res.render('about');
        console.log("about");
    });
}

