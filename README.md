# sleact-server setting
+ 1.   node 14버전(12나 15도 괜찮음)과 MySQL을 미리 설치하기
+ 2.   npm i (root package dependencies 설치하기)
+ 3.   .env 작성하기(COOKIET_SECRET과 MYSQL_PASSWORD 비밀번호 설정)
 ```
.env
      ex)
      COOKIE_SECRET=sleactcookie
        MYSQL_PASSWORD=MYSQL_PASSWORD
```
+ 4.   config/config.json 설정(MYSQL 접속 설정)
+ 5.   npx sequelize db:create(스키마 생성)
+ 6.   npm run dev했다가 ctrl + c로 끄기(테이블 생성)
+ 7.   npx sequelize db:seed:all(기초 데이터 넣기)
+ 8.   npm run dev
+ 9.   localhost:3095에서 서버 돌아가는 중
+ 10.  백엔드 개발자가 API.md와 typings/db.ts를 남겨둔 상황
