import express from 'express';


const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, World!' });
}); 

app.get('/notes', (req, res) => {
    res.status(200).json({ message: 'Retrieved all notes' });
});

app.get('/notes/:notesId', (req, res) => {
    res.status(200).json({ message: 'Retrieved note with ID: id_param' })
})

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});