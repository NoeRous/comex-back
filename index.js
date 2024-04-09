const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const { sequelize } = require('./connection');
const { Author, Book } = require('./models');
const { Sequelize } = require('sequelize');

app.use(bodyParser.json());

// Habilitar CORS para todas las solicitudes
app.use(cors());

app.use(cors({
    origin: 'http://localhost:4200' // Origen permitido
  }));

app.get('/', (req, res) => {
  res.send('Hello world! noemi ');
});


app.get('/authors', async (req, res) => {
    try {
      const authors = await Author.findAll({
        include: [
          {
            model: Book,
            as: 'books',
            attributes: ['id', 'isbn', 'name', 'cantPages', 'createdAt'],
          },
        ],
      })
      return res.json({ authors });
    } catch (error) {
      console.log('Error', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  app.post('/authors', async (req, res) => {
    try {
        const { name, age } = req.body;
        console.log('name', name);

      console.log('name', name);
  
      if (!name || !age) {
        return res.status(400).json({ message: 'Bad request, name or age not found' });
      }
      const save = await Author.create({
        name,
        age
      });
      return res.status(201).json({ author: save });
    } catch (error) {
      console.log('Error', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  app.get('/books', async (req, res) => {
    try {
      const books = await Book.findAll()
      return res.json({ books });
    } catch (error) {
      console.log('Error', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  app.post('/books', async (req, res) => {
    try {

        console.log('req---------------------------------',req);
      const isbn = req.body?.isbn;
      const name = req.body?.name;
      const cantPages = req.body?.cantPages;
      const author = req.body?.author;
  
      if (!name || !cantPages || !author || !isbn) {
        return res.status(400).json({ message: 'Bad request, isbn or name or cantPages or author not found' });
      }
      const save = await Book.create({
        isbn,
        name,
        cantPages,
        authorId: author
      })
      return res.status(201).json({ save });
    } catch (error) {
      console.log('Error', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.get('/actividad', async (req, res) => {
    try {
      const actividades = await sequelize.query('select * from actividad',{type: Sequelize.QueryTypes.SELECT});

      console.log('actividades',actividades);
      return res.json({ actividades });
      
    } catch (error) {
      console.log('Error', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
  

  
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection success');
      return sequelize.sync();
    })
    .then(() => {
      console.log('Sync models');
      app.listen(port, () => {
        console.log(`Server listen on http://localhost:${port}`);
      });
    })
    .catch((error) => {
      console.error('Connection fail', error);
    });