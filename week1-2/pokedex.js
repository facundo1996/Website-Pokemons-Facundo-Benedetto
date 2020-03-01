
window.addEventListener('load',function(){
    let pokemon = []
    
    for(let contador=1;contador<=150;contador++){
        fetch("https://pokeapi.co/api/v2/pokemon/"+contador)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            let namepok = myJson.name;
            let typepok = myJson.types[0].type.name;

            let typepok2 = ''
            if (myJson.types[1]) typepok2 = ", "+myJson.types[1].type.name

            let xhtml = ""
            xhtml+="<div class='alldiv' id='pok"+contador+"'><img class='imgpokedex' src="+myJson.sprites.front_default+">"
            xhtml+="<h3 class='h3name'>"+namepok.charAt(0).toUpperCase()+namepok.slice(1)+"</h3>"
            xhtml+="<h3 class='h3type'>Type: "+typepok+typepok2+"</h3>"
            xhtml+="<button class='addfav'>Add to favs</button></div>"
            document.getElementById("pokemonsdiv").innerHTML+=xhtml
            

            pokemon[contador] = {
                id: contador,
                image: myJson.sprites.front_default,
                name: namepok,
                type: typepok+typepok2
            }
            
        })
    }
})













    /*     fetch("https://pokeapi.co/api/v2/pokemon/"+contador)
        .then(response => response.json(carcacteristicas))
        .then(json => console.log(json.name, "este anda"))

    */
        /* console.log(Object.values(pokemon))
        const {name} = ;
        console.log(name) */

    
    /* request.open('GET', pokemon.geturl);
    request.responseType = 'text';
    request.onload = function() {
        let obj = JSON.parse(request.responseText);
        document.getElementById("pokemonsdiv").innerHTML+="<h3>"+obj.name+"</h3>"
        document.getElementById("pokemonsdiv").innerHTML+="<p>"+obj.id+"</p>"
        document.getElementById("pokemonsdiv").innerHTML+="<img src="+pokemon.image+"></img>"

        console.log(obj.name);
        document.getElementById("image1").setAttribute("src",pokemon.image) 

    }; 
    request.send(); */
