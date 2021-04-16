function mostrarNota(nota) {
    if(nota < 0 || nota == null){
        return null
    }
    else if(nota >= 90)  {
        return 'A'
    }
    else if(nota <= 89 && nota >= 80) {
        return 'B'
    }   
    else if(nota <= 79 && nota >= 70) {
        return 'C'
    }
    else if(nota <= 69 && nota >= 60){
        return 'D'
    }
    else {
        return 'F'
    }
}

var myFamily = {
    receitas: [10, 2, 5, 70],
    despesas: [900, 800],

}

function somaVetorSimples(vetor){
    let total = 0
    for(let valor of vetor) {
        total += valor

    }
    console.log(total)
}

function somaVetorDoida(vetor){

    let resultado = vetor.reduce((resultado, valor) => {
        return resultado += valor
    }, 0)
    return resultado
}
function saldoFamilia(myFamily){
    let somaReceitas = somaVetorDoida(myFamily.receitas)
    let somaDespesas = somaVetorDoida(myFamily.despesas)

    console.log(somaReceitas)
    console.log(somaDespesas)

    if(somaReceitas - somaDespesas > 0){
        console.log("Saldo positivo")
    } else {
        console.log("Saldo negativo")
    }
}

function converterTemperatura(temperatura){
    if(temperatura.includes('C') || temperatura.includes('c')){
        let valorTemp = Number(temperatura.split(' ')[0])
        let tempFahrenheit = (valorTemp * 9/5) + 32
        return tempFahrenheit + " graus Fahrenheit"
    }
    if(temperatura.includes('F') || temperatura.includes('f')){
        let valorTemp = Number(temperatura.split(' ')[0])
        let tempCelsius = (valorTemp - 32) * 5/9
        return tempCelsius + " graus Celsius"
    } else {
        throw new Error("Temperatura não identificada.")
    }
}

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Intelingência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
]

//Contar o n de categorias e o n de livros em cada categoria
//Contar o n de autores
//Mostrar os livros do autor AC
//Transformar a funçao acima em uma funçao que ira receber o nome do autor e devolver os livros desse autor

function numeroCategoriasELivros(booksByCategory){
    let i = 0
    let authorsVet = []
    let aCBooks = []
    var qttCategory = booksByCategory.length
    console.log("Quantidade de categorias: " + qttCategory)
    for(books of booksByCategory){

        // var categoryAndBooks = [
        //     {
        //         Categoria: booksByCategory[i].category,
        //         Quantidade_de_Livros: booksByCategory[i].books.length
        //     }
        // ]

        // var categoryAndBooksV2 = [
        //     "Categoria:",
        //     booksByCategory[i].category,
        //     "Quantidade de Livros:",
        //     booksByCategory[i].books.length
        // ]
        
        for(authors of booksByCategory[i].books){
            // authorsVet.unshift(authors)
            // console.log(authors.author)
            if(!(authorsVet.includes(authors.author))){
                authorsVet.unshift(authors.author)
            }
        }

        for(augustCuryBooks of booksByCategory[i].books){
            if(augustCuryBooks.author == "Augusto Cury"){
                aCBooks.unshift(augustCuryBooks.title)
            }
        }

        console.log("Categoria: " + booksByCategory[i].category)
        console.log("Quantidade de livros: " + booksByCategory[i].books.length)

        
        i++
    }   
    console.log("Quantidade de autores: " + authorsVet.length)
    console.log("Livros do Augusto Cury: " + aCBooks)    
}   

function livrosDoAutor(autor){
    let i = 0
    let livros = []
    while(i < booksByCategory.length) {
        for(books of booksByCategory[i].books){
            if(books.author === autor){
                livros.unshift(books.title)
            }
        }
        i++
    }
    console.log("Livros do " + autor + ": " + livros)
}
