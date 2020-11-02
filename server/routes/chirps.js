const express = require('express');
const chirpsStore = require('../chirpstore');
const chirpsRouter = express.Router();


/*
    ALL USERS
    http://localhost:3000/api/chirps/
*/

chirpsRouter.get('/:id?', (req, res) => {
    let chirpid = req.params.id

    if (chirpid) {
        res.send(chirpsStore.GetChirp(chirpid))
    } else {
        res.send(chirpsStore.GetChirps());
    }
    res.sendStatus(200)

});

/*
    ONE USER BY ID
    http://localhost:3000/api/chirps/
*/

chirpsRouter.post('/', (req, res) => {
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
});

/*
    EDIT USER BY ID
    http://localhost:3000/api/chirps/
*/

chirpsRouter.put('/:id', (req, res) => {
    let id = req.params.id
    chirpsStore.UpdateChirp(id, req.body)
    res.sendStatus(200);
});

/*
    DELETE USER BY ID
    http://localhost:3000/api/chirps/
*/

chirpsRouter.delete('/:id', (req, res) => {
    let chirpid = req.params.id
    chirpsStore.DeleteChirp(chirpid)
    res.sendStatus(200);
});


module.exports = chirpsRouter;