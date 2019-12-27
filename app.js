var express = require('express');
var app = express();
var path = require('path');
require('dotenv').config();
require('html');
require('./router/main.js')(app);    //경로를 직접 지정하지 않으면 node_modules 를 참조하게 해야한다.
                                    //우리가 만든 모듈은 그 파일이 들어있는 경로를 정확하게 지정해주어야 한다.
                                    // ./router/main 이라고 적어도 된다.
                                    //app을 인자로 준다: express 실행한 것을 전달해주어야 한다.

//기본 views 폴더 세팅
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //뷰를 보는 엔진으로 ejs를 채택.
app.engine('html', require('ejs').renderFile);  //html은 ejs로 렌더파일 해주겠다

//ejs 엔진은 왜 쓸까?
//ex) node.js에서 파일을 데이터베이스에서 끌어오거나, 데이터를 html 문서에 보여주고 싶다.
//기존에는 javascript에서 뿌려주는 방식
//ejs를 사용하면 렌더링을 하면서 데이터를 뿌려줄 수 있다.

//ejs 대신 pug 사용 가능 -> 더 간단하지만, 기존 html 문서의 형식을 많이 깨뜨린다.




//라우터

app.get('/test', (req, res) => {
    res.render('index', {data : "안녕하세요~~!~!",
                        data1 : {
                            name: "서동민 ",
                            desc: "ㅎㅎ"
                        }});    //파일을 렌더링. index.ejs 파일을! (views 폴더 안에서 찾아서)
                        //data, db 등 다양한 표현 가능
    
});



var port = process.env.PORT;
app.listen(port, () => {
    console.log(`서버가 시작되었습니다: http://localhost:${port}`)
});

