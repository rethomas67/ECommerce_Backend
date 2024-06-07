# ECommerce_Backend

## Description

First, the database is created from MySQL, using the command source schema_db. Then, the environment variables are entered into the .env file for the database, user, and password. Then, connection.js uses the variables via process.env calls and sets the port for MYSQL. The server.js file imports the libraries for express and sequelize, imports the custom libraries for routes and the database connection, establishes middleware for JSON and html, syncs the models to the database, and starts the server. The models category, product, tag, and producttag contain the field definitions and their attributes, default values, validations, and primary and foreign key definitions. Index.js in the models folder defines the relationships between the models (one-to-many or many-to-many for the producttags relationships). Next, the database tables are seeded with data from the console by running the 'npm run seed' script. Finally, the GET, GET by ID POST, PUT, DELETE route methods are added for each model and displays the related data for the GET methods.
Insomnia is used to verify the CRUD requests perform correctly.

## Installation

N/A

## Usage

When the user name, password, and database are added to a .env file then a connection to the database is established through sequelize. When the commands for schema(source) and seed(npm run) are entered the database is created and seeded with test data. When npm start is entered then the server is started and the sequelize models are synced to the database. The API GET routes in Insomnia display JSON results. The API routes POST, PUT, DELETE create, update, and delete data in the database.

Screencastify Link:
https://app.screencastify.com/v2/manage/videos/Ymwrbma0NrVLnzdnxU0N

The link to the GitHub repository is:
https://github.com/rethomas67/ECommerce_Backend

## Credits

N/A

## License

N/A
