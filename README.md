# Practing restful routing and basic set up using Node.js
* Node packages used
```
express
ejs
body-parser
request
mongoose
```
* Database Type
```
MongoDB
```
* RESTful Routes
```
Name         Url            Verb      Desc.
============================================================
index   /todo           Get         shows all Tasks in db
New     /todo           Get        shows form to add new Task
Create  /todo           Post        Posts to task in db
Show    /todo/:id       Get         Shows info of one Task
Edit    /todo/:id/edit   Get         Show edit form for that Task
Update  /todo/:id        Put         update in database
Destroy /todo/:id        DELETE      delete that task

```
