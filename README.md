# 🚗 Cadastro de Carros — JavaScript

## 📌 Sobre o projeto

Este projeto consiste em uma aplicação web simples para **cadastro e exibição de carros**, desenvolvida utilizando **HTML, CSS e JavaScript**.

O sistema permite que o usuário informe a marca, modelo, ano de fabricação e cor de um veículo. Após o cadastro, as informações são transformadas em um **objeto JavaScript** e armazenadas em um **array de objetos**.

Os carros cadastrados são exibidos diretamente na página.

## 🎯 Objetivo

O objetivo da atividade é praticar o conceito de **objetos em JavaScript**, além de trabalhar com arrays, funções, manipulação do DOM e eventos.

A atividade permite compreender como informações podem ser organizadas em objetos e posteriormente armazenadas em uma lista.

## ⚙️ Funcionalidades

O sistema permite:

* 🚘 Cadastrar carros;
* 🏷️ Informar marca;
* 🚗 Informar modelo;
* 📅 Informar ano de fabricação;
* 🎨 Escolher a cor do veículo;
* 📋 Exibir os carros cadastrados;
* ✅ Validar os campos obrigatórios.

## 🧠 Conceitos estudados

Durante o desenvolvimento foram utilizados conceitos importantes de JavaScript:

* Variáveis;
* Objetos;
* Arrays;
* Funções;
* `forEach()`;
* `push()`;
* `getElementById()`;
* `innerHTML`;
* Eventos `onclick`;
* Template literals;
* Validação de formulário;
* Manipulação do DOM.

## 📦 Objeto JavaScript

Cada carro é representado através de um objeto:

```javascript
let carro = {
    marca: "Fiat",
    modelo: "Uno Vivace",
    ano: 2021,
    cor: "Preta"
};
```

Vários objetos são armazenados dentro de um array:

```javascript
let carros = [];
```

Para adicionar um novo carro ao array é utilizado:

```javascript
carros.push(carro);
```

## 🖥️ Exemplo

O usuário pode preencher:

```text
Marca: Fiat
Modelo: Uno
Ano: 2021
Cor: Preto
```

E o sistema apresenta:

```text
1. Fiat Uno
Ano: 2021
Cor: ●
```

## 🛠️ Tecnologias utilizadas

* **HTML5**
* **CSS3**
* **JavaScript**

## 📂 Estrutura do projeto

```text
Cadastro-Carros/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── README.md
```

## ▶️ Como executar

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Abra o arquivo `index.html`.
4. Execute no navegador.
5. Preencha os dados do veículo.
6. Clique em **Adicionar Carro**.

## 🎓 Atividade acadêmica

Este projeto foi desenvolvido como **atividade acadêmica da ETEC Adolpho Berezin — Mongaguá/SP**.

A atividade tem como objetivo praticar conceitos de **JavaScript e desenvolvimento web**, com foco principalmente na criação, manipulação e armazenamento de **objetos e arrays de objetos**.

## 👨‍💻 Informações do projeto

**Instituição:** ETEC Adolpho Berezin — Mongaguá/SP

**Linguagens:** HTML, CSS e JavaScript

**Tipo:** Aplicação Web

**Atividade:** JavaScript — Objetos

**Projeto:** Cadastro de Carros

**Ano:** 2024

**Desenvolvido por:** Guilherme

---

📚 Projeto desenvolvido para fins acadêmicos e educacionais.
