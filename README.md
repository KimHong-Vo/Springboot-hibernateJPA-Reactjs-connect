# Springboot-hibernateJPA-Reactjs-connect
This repository is about the way to connect Reactjs project using Axios library with Spring boot rest api, and connecting Spring boot with mySql database using Spring data jpa and hibernate

REQUIRE: Java version 11, mySql, IDE to run spring boot and reactjs( you can download spring tool suite to run two )

HOW TO RUN THIS PROJECT:
 - Front end: open your terminal and run command: 
      + npm i
      + npm install -g sass
      + npm install react-router
      + npm install react-router-dom
      + npm install axios
      + open file New.js, at line 19, change url to : http://yourLocalIp:8080/workspace/myWorkspace
      + *find your local ip by open your terminal and run ipconfig command, it's at IPv4 address
 - Back end & database: create a database has name in application.properties file in back end project

STEP BY STEP DOING
- BACK END
 + Create xample controller to consume request from Front End
1. create new starter spring boot
2. chosing dependencies: spring web
3. add rest controller in controller package to consume a request and return an object in entity
4. add @CrossOrigins to allow request from other server(ui) if it has cosr policy error in browser
    +Test with: http://localhost:8080/workspace/myWorkspace
 + Connect app to MYSQL DATABASE for crud
5. Connect database
   + 5.1.add spring data jpa and mysql driver to pom.xml file
   Link for detail: https://spring.io/guides/gs/accessing-data-mysql/
   + 5.2. create database in mySQL app, config application.properties file to connect to database
   + 5.3. add Entity model( already from step 3 ). @Entity annotation tell hibernate to make a table from class
   + 5.4. create the Repository( model ) that holds entity records, repository is an interface, it will be auto implemented by Spring into a Bean, that bean has sameName with repo but not
uppercase at first character
   + 5.4. See using @Autowired to generate bean in controller
   + 5.5. using bean for saving data to database in addWorkspace method
      + test with: http://localhost:8080/workspace/addWorkspace?name=workspace1&des=thisisWS1
   + 5.6. using bean for getting data from database in getAllWS method -- still not finish -- error at bean.findall()
     *Problem: can not return list entity as json - see at : https://ihoctot.com/spring-boot-return-list-of-objects-as-json 
- FRONT END
1. create ui
2. using axios to sent request to back end( see at New.js )
3. assign response to const[workspace, setWorkspace]
4. display response data to ui 

make spring boot can return react page
https://spring.io/guides/tutorials/react-and-spring-data-rest/

