function AddCarro(){
    let carro = {
        "marca": "Fiat",
        "modelo": "Uno Vivace",
        "ano": 2021,
        "cor": "preta"
    }
    console.log(carro);
}
 
function AddCarro2(){
    let carro = {
            "Marca": document.getElementById("Marca").value,
            "modelo": document.getElementById("modelo").value,
            "ano": document.getElementById("ano").value,
            "cor": document.getElementById("cor").value,
    }
    console.log(carro);
}
 
function AddCarrosArray(){
    let carros = [
        {
            "marca": "Fiat",
            "modelo": "Uno Vivace",
            "ano": 2021,
            "cor": "preta"
        },
        {
            "marca": "WW",
            "modelo": "UP",
            "ano": 2022,
            "cor": "preta"
        },
        {
            "marca": "Chevrolet",
            "modelo": "Onix",
            "ano": 2024,
            "cor": "preta"        
        }
    ];
    let carro = {
    "Marca": document.getElementById("Marca").value,
    "modelo": document.getElementById("modelo").value,
    "ano": document.getElementById("ano").value,
    "cor": document.getElementById("cor").value,
}
    console.push(carro);
 
    console.log(carros);
}
 
 