let heroesLista= require('../data/heroes.json');

let heroesController ={

main: function (req,res){

    
    res.render('heroes', {heroesLista});
},

profesion: function(req,res){

    let resultado = heroesLista.find(function(heroe) {
       
        return heroe.id == req.params.id;

    })

    if(resultado){
        res.render('heroesProfesion', {resultado})
    }
    else {
        res.send("No tenemos en nuestra base ningún héroe ni heroína con ese id")
    }
    

 
/*for (let heroe of heroesLista) {
    if (heroe.id == req.params.id){

    return res.render('heroesProfesion', {heroe})
    }
    
}
*/



},
resenia: function (req,res){
    
    res.render('heroesResenia');
}
}
module.exports = heroesController;