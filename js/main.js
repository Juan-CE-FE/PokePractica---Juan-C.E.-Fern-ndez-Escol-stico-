

const URL = "https://pokeapi.co/api/v2/pokemon?limit=151";
const navMenu = document.querySelector('.menu');
const botonesColor = document.querySelectorAll('.btn-header');
const listaPokemon = document.querySelector("#listaPokemon");


botonesColor.forEach(boton => {
    boton.addEventListener('click', (event) => {
        const botonClick = event.currentTarget;
        
        navMenu.classList.remove('water', 'fire', 'electric', 'grass'); 

        if(botonClick.classList.contains('water')) {
            navMenu.classList.add('water');
        } else if(botonClick.classList.contains('fire')) {
            navMenu.classList.add('fire');
        } else if(botonClick.classList.contains('electric')) {
            navMenu.classList.add('electric');
        } else if(botonClick.classList.contains('grass')) {
            navMenu.classList.add('grass');
        }
    });
});




fetch(URL)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(pokemon => {
            fetch(pokemon.url)
                .then(response => response.json())
                .then(datosPokemon => {

                    let tiposHTML = ""; 
                    const tiposArray = datosPokemon.types;
                    
                    for (let i = 0; i < tiposArray.length; i++) {
                        const tipoActual = tiposArray[i];
                        const typeName = tipoActual.type.name;
                        
                        tiposHTML += `<p class="${typeName} tipo">${typeName}</p>`;
                    }

                    const id = '#' + datosPokemon.id; 
                    const imagenUrl = datosPokemon.sprites.other['official-artwork'].front_default;
                    
                    const div = document.createElement("div");
                    div.classList.add("pokemon");

                    div.innerHTML = `
                        <div class="pokemon-imagen">
                            <img src="${imagenUrl}" alt="${datosPokemon.name}">
                        </div>
                        <div class="pokemon-info">
                            <div class="nombre-contenedor">
                                <p class="pokemon-id">${id}</p>
                                <h2 class="pokemon-nombre">${datosPokemon.name}</h2>
                            </div>
                            <div class="pokemon-tipos">
                                ${tiposHTML}
                            </div>
                        </div>
                    `;
                    
                    listaPokemon.append(div);
                });
        });
    })
    .catch(error => console.error());