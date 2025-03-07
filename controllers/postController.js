// IMPORTIAMO FILE CONNESSIONE AL DB
const connection = require('../data/db');


// FUNZIONE PER LE ROTTE

// INDEX
function index(req, res) {

    // preparo la query
    const sql = 'SELECT * FROM posts';

    // eseguo la query
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results);
    });
}
// SHOW
function show(req, res) {
    // RECUPERIAMO L'ID E TRASFORMIAMOLO IN UN NUMERO
    const id = parseInt(req.params.id)
    // CERCHIAMO IL POSTS TRAMITE ID
    const post = posts.find(post => post.id === id);
    // FACCIAMO IL CONTROLLO 
    if (!post) {
        // IMPOSTO LO STATUS
        res.status(404)
        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    //RESTITUIAMOLO SOTTO FOTMA DI JSON
    res.json(post);
}
// STORE
function store(req, res) {
    // console.log(req.body);
    // res.send("creazione nuovo post");

    // CREIAMO UN NUOVO ID INCREMENTANDO L'ULTIMO ID PRESENTE
    const newId = posts[posts.length - 1].id + 1;
    // CREIAMO UN NUOVO OGGETTO 
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    // AGGIUNGIAMO IL NUOVO POST ALL 'ARRAY
    posts.push(newPost);

    //CONTROLLO
    console.log(posts);

    // STATUS CORRETTO E POST CREATO
    res.status(201);
    res.json(newPost);

}
// UPDATE
function update(req, res) {
    // res.send("modifica completa del post numero " + req.params.id)

    // RECUPERO ID E LO TRASFORMO IN NUMERO
    const id = parseInt(req.params.id)
    // CHERCHIAMO IL POST TRAMITE ID
    const post = posts.find(post => post.id === id);
    // CONTROLLO 
    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    //AGGIORNIAMO IL POST
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    // VERIFICA SUL TERMINALE
    console.log(posts);

    // RESTITUIAMO IL POST AGGIORNATO
    res.json(post)
}
// MODIFY
function modify(req, res) {
    // res.send("modifica parziale del post numero " + req.params.id);

    // RECUPERO ID E LO TRASFORMO IN NUMERO
    const id = parseInt(req.params.id)
    // CHERCHIAMO IL POST TRAMITE ID
    const post = posts.find(post => post.id === id);
    // CONTROLLO 
    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    //  MODIFICHIAMO I DATI DEL POST
    if (req.body.title) {
        post.title = req.body.title;
    } else {
        post.title = post.title;
    }

    // VERIFICA SUL TERMINALE
    console.log(posts);

    // RESTITUIAMO IL POST AGGIORNATO
    res.json(post)
}
// DESTROY
function destroy(req, res) {
    // RECUPERO ID E LO TRASFORMO IN NUMERO
    const id = parseInt(req.params.id)
    // CHERCHIAMO IL POST TRAMITE ID
    const post = posts.find(post => post.id === id);
    // CONTROLLO 
    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    // RIMUVIAMO IL POST DALLA LISTA
    posts.splice(posts.indexOf(post), 1);

    // VERIFICA SUL TERMINALE
    console.log(posts);

    // RESTITUIAMO LO STATUS
    res.sendStatus(204)
}

// esportiamo tutto
module.exports = { index, show, store, update, modify, destroy };