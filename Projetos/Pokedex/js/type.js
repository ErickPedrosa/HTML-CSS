const allTypes = [
    "normal", 1, 
    "fire", 1, 
    "water", 1, 
    "grass", 1, 
    "flying", 1, 
    "fighting", 1, 
    "poison", 1, 
    "electric", 1, 
    "ground", 1, 
    "rock", 1, 
    "psychic", 1, 
    "ice", 1, 
    "bug", 1, 
    "ghost", 1, 
    "steel", 1, 
    "dragon",1, 
    "dark", 1, 
    "fairy", 1
]

let danoRecebido;
let danoCausado;

function inicializaArray(){
    let dano = [];
    allTypes.forEach( (x, i) => {
        dano.push(x);
    } )

    return dano;
}


const getType = (pokemon) => {

    
    danoRecebido = inicializaArray();
    danoCausado = inicializaArray();
    
    let ok = false;
    let first = true;

    console.log("1");
    do {
        
        if(first){


            pokemon.types.forEach( async (element) => {
                console.log("2");
        
                const APIResponse = await fetch(`https://pokeapi.co/api/v2/type/${element.type.name}`);
                
        
                console.log("3");
                
                if(APIResponse.status === 200){
                    const data = await APIResponse.json();
                    console.log("4");
        
        
                    calcAdvantages(data);
                
                    console.log("5");
        
                }
                console.log("6");
                ok == true;
                
            } )



            first = false;
        }
        
    
    console.log("7");
    } while (ok);
    return [danoRecebido, danoCausado];
}


function calcAdvantages(type) {

    type.damage_relations.no_damage_to.forEach( (t) => {
        danoCausado[allTypes.indexOf(t.name) + 1] = -1;
        //console.log("Não da dano em " + t.name);
        
    })

    type.damage_relations.no_damage_from.forEach( (t) => {
        danoRecebido[allTypes.indexOf(t.name) + 1] = -1;
        //console.log("Não recebe dano de " + t.name);
        
    })

    type.damage_relations.double_damage_to.forEach( (t) => {
        danoCausado[allTypes.indexOf(t.name) + 1] += (1/2);
        //console.log("Da o dobro de dano em " + t.name);
        
    })

    type.damage_relations.double_damage_from.forEach( (t) => {
        danoRecebido[allTypes.indexOf(t.name) + 1] += (1/2);
        //console.log("Recebe o dobro de dano de " + t.name);
        
    })

    type.damage_relations.half_damage_from.forEach( (t) => {
        danoCausado[allTypes.indexOf(t.name) + 1] -= (1/2);
        //console.log("Da metade do dano em " + t.name);
        
    })

    type.damage_relations.half_damage_from.forEach( (t) => {
        danoRecebido[allTypes.indexOf(t.name) + 1] -= (1/2);
        //console.log("Recebe metade do dano de " + t.name);
        
    })

    /*
    -1 : Não recebe/da dano; 
    0 : Recebe/da um quarto do dano;
    0,5 : Recebe/da metade do dano;
    1 : Recebe/da dano normal;
    1,5 : Recebe/da o dobro do dano;
    2 : Recebe/da o quadruplo do dano;
    */
        
    //console.log(allTypes);
    //console.log(danoRecebido);
    //console.log(danoCausado);
}


