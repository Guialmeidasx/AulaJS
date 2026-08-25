// Array que armazenará os carros
let carros = [
    {
        marca: "Fiat",
        modelo: "Uno Vivace",
        ano: 2021,
        cor: "Preta"
    },

    {
        marca: "Volkswagen",
        modelo: "UP",
        ano: 2022,
        cor: "Preta"
    },

    {
        marca: "Chevrolet",
        modelo: "Onix",
        ano: 2024,
        cor: "Preta"
    }
];


// Função para adicionar um carro
function AddCarrosArray() {

    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let ano = document.getElementById("ano").value;
    let cor = document.getElementById("cor").value;

    // Verifica se os campos foram preenchidos
    if (marca === "" || modelo === "" || ano === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Criação do objeto carro
    let carro = {
        marca: marca,
        modelo: modelo,
        ano: ano,
        cor: cor
    };

    // Adiciona o objeto ao array
    carros.push(carro);

    // Mostra os carros na tela
    MostrarCarros();

    // Limpa os campos
    document.getElementById("marca").value = "";
    document.getElementById("modelo").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("cor").value = "#000000";
}


// Função para mostrar os carros
function MostrarCarros() {

    let lista = document.getElementById("listaCarros");

    lista.innerHTML = "";

    carros.forEach(function(carro, indice) {

        lista.innerHTML += `
            <div class="carro">

                <h3>${indice + 1}. ${carro.marca} ${carro.modelo}</h3>

                <p><strong>Ano:</strong> ${carro.ano}</p>

                <p>
                    <strong>Cor:</strong>
                    <span 
                        class="cor"
                        style="background-color: ${carro.cor}">
                    </span>
                </p>

            </div>
        `;
    });
}


// Mostra os carros iniciais
MostrarCarros();
