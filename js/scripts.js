let pokemonList = [
    {name:"Bulbasaur", height:0.7, types:["grass","poison"]},
    {name:"Ivysaur", height:1, types:["grass","poison"]},
    {name:"Venusaur", height:2, types:["grass","poison"]}
];

//loop
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height <1){
        document.write(pokemonList[i].name + " (Height:" + pokemonList[i].height + ") " + "that's a small pokemon." + "<br/>" + "<br/>")
    }else if (pokemonList[i].height >=1 && pokemonList[i].height <2) {
        document.write(pokemonList[i].name + " (Height:" + pokemonList[i].height + ") " + "that's an average pokemon." + "<br/>" + "<br/>")
    } else {
        document.write(pokemonList[i].name + " (Height:" + pokemonList[i].height + ") " + "that's a big pokemon." + "<br/>" + "<br/>")
    }
}

pokemonList.forEach(function(pokemon){
    document.write(pokemon.name + ': ' + '</br>' + 'Height: '+ pokemon.height + '</br>' + 'Type: ' + pokemon.types + '<br>' + '<br>')
});
    
