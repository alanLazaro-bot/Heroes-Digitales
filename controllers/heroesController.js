let heroesLista= require('../data/heroes.json');

let heroesController ={

main: function (req,res){

    
    res.send(heroesLista);
},

profesion: function(req,res){
 

   let resultado= heroesLista.filter(function (heroe) {
        return heroe.id == req.params.id;

    })
    res.render('heroesProfesion', {resultado})
 

},
resenia: function (req,res){
    
    res.render('heroes');
}
}
module.exports = heroesController;