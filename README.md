# Ecommerce Backend

## Description
This project is an ecommerce backend to an ecommerce client. It uses [sequelize](https://sequelize.org/) for database management and [mysql](https://www.mysql.com/) as a database.
It has various routes using express that the client can call to create, read, update and delete information.

## Usage
### Start the app
```npm start```

### Source the db
```
mysql -u root -p
source db/schema.sql
```

### Seed the db
```npm run seed```

Then try out the various routes located in the routes/api folder.
