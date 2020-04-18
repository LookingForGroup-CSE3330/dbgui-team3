const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');

var router = express.Router();

//mysql connection
var connection = mysql.createConnection({
  host: 'backend-db',
  port: '3306',
  user: 'manager',
  password: 'Password',
  database: 'db'
});

//set up some configs for express.
const config = {
  name: 'sample-express-app',
  port: 8000,
  host: '0.0.0.0',
};

//create the express.js object
const app = express();

//create a logger object.  Using logger is preferable to simply writing to the console.
const logger = log({ console: true, file: false, label: config.name });

app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));
app.use(ExpressAPILogMiddleware(logger, { request: true }));

//Attempting to connect to the database.
connection.connect(function (err) {
  if (err)
    logger.error("Cannot connect to DB!");
  logger.info("Connected to the DB!");
});

//GET /
app.get('/', (req, res) => {
  res.status(200).send('Go to 0.0.0.0:3000.');
});

router.use((req, res, next) => {
  console.log('router being used...')
  next()
})

// Testing tables---------------------------------------------------------------

router.get('/user-table', (req, res) => {
  connection.query("select * from db.users", (err, result, fields) => {
    if(err) {
      throw err
    }
    res.send(JSON.stringify(result))
  })
})
  
router.get('/roles-table', (req, res) => {
  connection.query("select * from db.roles", (err, result, fields) => {
    if(err) {
      throw err
    }
    res.send(JSON.stringify(result))
  })
})

router.get('/userroles-table', (req, res) => {
  connection.query("select * from db.user_roles", (err, result, fields) => {
    if(err) {
      throw err
    }
    res.send(JSON.stringify(result))
  })
})

router.get('/posts-table', (req, res) => {
  connection.query("select * from db.posts", (err, result, fields) => {
    if(err) {
      throw err
    }
    res.send(JSON.stringify(result))
  })
})

router.get('/answers-table', (req, res) => {
  connection.query("select * from db.answers", (err, result, fields) => {
    if(err) {
      throw err
    }
    res.send(JSON.stringify(result))
  })
})

router.get('/tags-table', (req, res) => {
  connection.query("select * from db.tags", (err, result, fields) => {
    if(err) {
      throw err
    }
    res.send(JSON.stringify(result))
  })
})

router.get('/post-tags-table', (req, res) => {
  connection.query("select * from db.post_tags", (err, result, fields) => {
    if(err) {
      throw err
    }
    res.send(JSON.stringify(result))
  })
})

router.post('/add-ex', (req, res, next) => {
  connection.query("insert into db.test_table (value) values (?)","whatever value", (err, result, fields) => {
    if(err)   throw err
    res.send(JSON.stringify(result))
  })
})

//-------------------------------------------------------------------------------------------


// //POST /reset
// app.post('/reset', (req, res) => {
//   connection.query('drop table if exists test_table', function (err, rows, fields) {
//     if (err)
//       logger.error("Can't drop table");
//   });
//   connection.query('CREATE TABLE db.test_table (`id` INT NOT NULL AUTO_INCREMENT, `value` VARCHAR(45), PRIMARY KEY (`id`), UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);', function (err, rows, fields) {
//     if (err)
//       logger.error("Problem creating the table test_table");
//   });
//   res.status(200).send('created the table');
// });

app.use('/api', router);

//connecting the express object to listen on a particular port as defined in the config object.
app.listen(config.port, config.host, (e) => {
  if (e) {
    throw new Error('Internal Server Error');
  }
  logger.info(`${config.name} running on ${config.host}:${config.port}`);
});
