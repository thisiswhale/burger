# Burger Logger


## Overview
This [app](https://burger-log-whale.herokuapp.com/) that lets users input the names of burgers they'd like to eat.

Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.

Your app will store every burger in a database, whether devoured or not.

<p align="center"><img width="700" height="450" src="https://user-images.githubusercontent.com/16066443/39609099-20bd1c5e-4efb-11e8-98e0-cb17a97af356.gif"></p>

---
#### Programs used:
* MySQL
* Node
* Express
* Express-handlebars to generate HTML DOM
* ORM
* MVC design format

---
#### File directory
```
.
├── config
│   ├── connection.js
│   └── orm.js
├── controllers
│   └── burgers_controller.js
├── db
│   ├── schema.sql
│   └── seeds.sql
├── models
│   └── burger.js
├── node_modules
├── package.json
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.png
│   └── test.html
├── server.js
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```
