let data = new Date()
const options = { year: 'numeric', month: 'numeric', day: 'numeric'};
data = data.toLocaleDateString(undefined, options)
console.log(data)
console.log(localStorage.data_antiga)

if (localStorage.data_antiga){
    if (localStorage.data_antiga == data){
        console.log('entrei')
        if (localStorage.word0){
            console.log(localStorage.word0 + 0)
            row = 1
        }

        if (localStorage.word1){
            console.log(localStorage.word1 + 1)
            row = 2
        }

        if (localStorage.word2){
            console.log(localStorage.word2 + 2)
            row = 3
        }

        if (localStorage.word3){
            console.log(localStorage.word3 + 3)
            row = 4
        }

        if (localStorage.word4){
            console.log(localStorage.word4 + 4)
            row = 5
        }

        if (localStorage.word5){
            console.log(localStorage.word5 + 5)
            row = 6
        }
    }else{
        localStorage.clear()
        localStorage.setItem('data_antiga', data);
        console.log(localStorage.data_antiga)
    }
}else{
    localStorage.clear()
    localStorage.setItem('data_antiga', data);
    console.log(localStorage.data_antiga)
}

let height = 6
let width = 5

if(!row){
    var row = 0
}
var col = 0

var gameOver = false;
// var word = "SQUID";
let wordList = ['sagaz',
                'mexer',
                'termo',
                'nobre',
                'senso',
                'algoz',
                'afeto',
                'plena',
                'sutil',
                'vigor',
                'fazer',
                'audaz',
                'assim',
                'sanar',
                'inato',
                'cerne',
                'fosse',
                'ideia',
                'poder',
                'moral',
                'desde',
                'torpe',
                'muito',
                'justo',
                'honra',
                'sobre',
                'anexo',
                'etnia',
                'sonho',
                'tange',
                'lapso',
                'amigo',
                'expor',
                'haver',
                'tempo',
                'dengo',
                'pesar',
                'posse',
                'genro',
                'coser',
                'causa',
                'corja',
                'dizer',
                'prole',
                'tenaz',
                'dever',
                'saber',
                'digno',
                'ceder',
                'prado',
                'comum',
                'sendo',
                'temor',
                'culto',
                'assaz',
                'atroz',
                'mundo',
                'pauta',
                'censo',
                'fugaz',
                'ainda',
                'cozer',
                'valha',
                'denso',
                'estar',
                'forte',
                'vulgo',
                'pudor',
                'regra',
                'dogma',
                'louco',
                'criar',
                'banal',
                'impor',
                'jeito',
                'ordem',
                'pedir',
                'clava',
                'prosa',
                'feliz',
                'servo',
                'viril',
                'coisa',
                'manso',
                'ontem',
                'presa',
                'falar',
                'cunho',
                'forma',
                'dever',
                'mesmo',
                'meiga',
                'afago',
                'fluir',
                'venda',
                'limbo',
                'posso',
                'visar',
                'temer',
                'acaso',
                'pleno',
                'puder',
                'valor',
                'cisma',
                'bruma',
                'lugar',
                'afins',
                'certo',
                'gerar',
                'obter',
                'crise',
                'matiz',
                'praxe',
                'senil',
                'havia',
                'todos',
                'fluxo',
                'enfim',
                'abrir',
                'ritmo',
                'falso',
                'tomar',
                'calvo',
                'reter',
                'vital',
                'favor',
                'bravo',
                'grato',
                'vivaz',
                'legal',
                'laico',
                'burro',
                'olhar',
                'possa',
                'levar',
                'ameno',
                'reles',
                'tecer',
                'casta',
                'selar',
                'morte',
                'anelo',
                'fator',
                'rogar',
                'noite',
                'citar',
                'farsa',
                'cabal',
                'achar',
                'falta',
                'adiar',
                'nicho',
                'coeso',
                'ouvir',
                'fardo',
                'brega',
                'viver',
                'ativo',
                'sinto',
                'gente',
                'exato',
                'imune',
                'passo',
                'sonso',
                'amplo',
                'dúbio',
                'linda',
                'tendo',
                'cesta',
                'sulco',
                'lavra',
                'leigo',
                'sexta',
                'cesta',
                'calvo',
                'tropa',
                'amora',
                'arroz',
                'chuva',
                'deixa',
                'calma',
                'deter',
                'vamos',
                'rever',
                'gesto',
                'humor',
                'atuar',
                'pobre',
                'feixe',
                'ajuda',
                'outro',
                'igual',
                'velho',
                'ponto',
                'claro',
                'hiato',
                'ideal',
                'sonsa',
                'terno',
                'ambos',
                'remar',
                'fonte',
                'marco',
                'jovem',
                'leito',
                'capaz',
                'inata',
                'terra',
                'doido',
                'horda',
                'xeque',
                'relva',
                'ficar',
                'algum',
                'velar',
                'apoio',
                'vazio',
                'tanto',
                'vimos',
                'rigor',
                'verso',
                'entre',
                'dorso',
                'botar',
                'frase',
                'pouco',
                'signo',
                'sente',
                'massa',
                'coesa',
                'cruel',
                'raiva',
                'prece',
                'ambas',
                'feito',
                'fauna',
                'morar',
                'peste',
                'minha',
                'papel',
                'casto',
                'covil',
                'credo',
                'preso',
                'ciclo',
                'fauna',
                'lazer',
                'furor',
                'brisa',
                'flora',
                'chata',
                'maior',
                'vetor',
                'trama',
                'houve',
                'pegar',
                'nossa',
                'aceso',
                'beata',
                'adeus',
                'banjo',
                'manha',
                'setor',
                'vulto',
                'breve',
                'senda',
                'seita',
                'vasto',
                'salvo',
                'ardor',
                'livro',
                'peixe',
                'morro',
                'sorte',
                'comer',
                'prado',
                'reger',
                'plano',
                'saiba',
                'acaso',
                'segue',
                'rezar',
                'carro',
                'nunca',
                'junto',
                'mudar',
                'acima',
                'chulo',
                'fitar',
                'parar',
                'fluir',
                'treta',
                'fugir',
                'andar',
                'grupo',
                'bando',
                'prazo',
                'leite',
                'gerir',
                'lenda',
                'motim',
                'norma',
                'tosco',
                'rapaz',
                'brava',
                'parte',
                'campo',
                'tenso',
                'exame',
                'arcar',
                'psico',
                'tirar',
                'reino',
                'agora',
                'praga',
                'solda',
                'praia',
                'quota',
                'risco',
                'corpo',
                'antes',
                'logro',
                'sumir',
                'preto',
                'traga',
                'voraz',
                'fixar',
                'pompa',
                'cheio',
                'quase',
                'texto',
                'exijo',
                'filho',
                'certa',
                'apego',
                'prova',
                'alado',
                'solto',
                'caixa',
                'turva',
                'acesa',
                'conta',
                'grave',
                'ligar',
                'verbo',
                'parva',
                'apelo',
                'tocar',
                'lindo',
                'trupe',
                'pardo',
                'festa',
                'livre',
                'fenda',
                'fraco',
                'sabia',
                'opaco',
                'afora',
                'navio',
                'barca',
                'ficha',
                'astro',
                'fatos',
                'faixa',
                'elite',
                'lidar',
                'mente',
                'fatal',
                'supra',
                'autor',
                'firme',
                'magia',
                'grata',
                'verba',
                'cioso',
                'bater',
                'pique',
                'calda',
                'coisa',
                'salve',
                'macio',
                'atual',
                'molho',
                'abrir',
                'posto',
                'supor',
                'torso',
                'vezes',
                'turvo',
                'longe',
                'asilo',
                'extra',
                'judeu',
                'curso',
                'caber',
                'porta',
                'besta',
                'rouca',
                'desta',
                'zelar',
                'combo',
                'nosso',
                'culpa',
                'bioma',
                'menos',
                'ereto',
                'finda',
                'paira',
                'agudo',
                'feudo',
                'advir',
                'meigo',
                'tetra',
                'super',
                'facho',
                'suave',
                'amena',
                'rumor',
                'tenda',
                'pilar',
                'turma',
                'museu',
                'chama',
                'geral',
                'local',
                'optar',
                'boato',
                'medir',
                'rubro',
                'pacto',
                'crime',
                'folga',
                'brabo',
                'penta',
                'letal',
                'ponha',
                'drama',
                'poema',
                'aluno',
                'mesma',
                'cacho',
                'feroz',
                'vigia',
                'aroma',
                'chato',
                'golpe',
                'vetar',
                'pasmo',
                'monte',
                'rival',
                'teste',
                'piada',
                'finjo',
                'coral',
                'ecoar',
                'axila',
                'daqui',
                'verde',
                'poeta',
                'carta',
                'monge',
                'plebe',
                'clima',
                'passa',
                'cetro',
                'ébano',
                'tacha',
                'ateia',
                'calmo',
                'briga',
                'falha',
                'venha',
                'roupa',
                'macro',
                'busca',
                'conto',
                'sarau',
                'idoso',
                'pluma',
                'cargo',
                'aviso',
                'tribo',
                'fruto',
                'tarde',
                'farta',
                'chefe',
                'berro',
                'vento',
                'grama',
                'virar',
                'civil',
                'arado',
                'surto',
                'seixo',
                'ornar',
                'saldo',
                'assar',
                'traje',
                'bruta',
                'pedra',
                'manga',
                'beijo',
                'nuvem',
                'amiga',
                'fosso',
                'troca',
                'casar',
                'trato',
                'magma',
                'porte',
                'vedar',
                'depor',
                'arfar',
                'canso',
                'dever',
                'itens',
                'amado',
                'tutor',
                'irado',
                'gruta',
                'bazar',
                'cifra',
                'gabar',
                'renda',
                'pinho',
                'pinto',
                'perto',
                'bruto',
                'rural',
                'jejum',
                'laudo',
                'pasma',
                'pavor',
                'inter',
                'feita',
                'tchau',
                'cegar',
                'fossa',
                'minar',
                'odiar',
                'troco',
                'vagar',
                'vadio',
                'molde',
                'clero',
                'pomar',
                'amada',
                'negar',
                'canto',
                'rocha',
                'cinto',
                'largo',
                'paiol',
                'visto',
                'bolsa',
                'horto',
                'ileso',
                'morfo',
                'densa',
                'xucro',
                'marca',
                'jogar',
                'podar',
                'vista',
                'chula',
                'penso',
                'vasta',
                'frota',
                'cheia',
                'bulir',
                'piche',
                'linha',
                'peito',
                'resto',
                'tenha',
                'santo',
                'misto',
                'fundo',
                'volta',
                'manto',
                'cerca',
                'narco',
                'natal',
                'monta',
                'velha',
                'jazer',
                'campo',
                'ferpa',
                'preço',
                'chaga',
                'mover',
                'letra',
                'cosmo',
                'etapa',
                'retro',
                'seiva',
                'matar',
                'folia',
                'coroa',
                'vinho',
                'trago',
                'punha',
                'ceita',
                'final',
                'sabor',
                'barro',
                'redor',
                'louro',
                'rente',
                'sigla',
                'salva',
                'bolso',
                'firma',
                'dança',
                'queda',
                'farol',
                'torna',
                'folha',
                'enjoo',
                'lutar',
                'solta',
                'lousa',
                'tumba',
                'mimar',
                'burra',
                'baixa',
                'salmo',
                'fugir',
                'ousar',
                'todas',
                'veloz',
                'corar',
                'zumbi',
                'calor',
                'longo',
                'reler',
                'forro',
                'justa',
                'vazia',
                'penca',
                'cacto',
                'gueto',
                'farto',
                'chave',
                'logia',
                'mania',
                'lucro',
                'quite',
                'repor',
                'sugar',
                'sexto',
                'custo',
                'subir',
                'ultra',
                'urgir',
                'passe',
                'sadio',
                'refil',
                'valer',
                'versa',
                'lento',
                'louca',
                'usual',
                'nariz',
                'corte',
                'ceifa',
                'modal',
                'ferir',
                'garra',
                'anzol',
                'pluma',
                'outra',
                'dados',
                'grife',
                'diabo',
                'raiar',
                'pavio',
                'trair',
                'pagar',
                'roubo',
                'pazes',
                'dique',
                'xampu',
                'tacho',
                'podre',
                'missa',
                'surra',
                'filme',
                'abono',
                'caber',
                'cisco',
                'fazer',
                'dobro',
                'domar',
                'digna',
                'couve',
                'posta',
                'notar',
                'bruxa',
                'barra',
                'reger',
                'volto',
                'toque']

let wordListDay = {'22/08/2022': 'SAGAZ',
                '23/08/2022': 'MEXER',
                '24/08/2022': 'TERMO',
                '25/08/2022': 'NOBRE',
                '26/08/2022': 'SENSO',
                '27/08/2022': 'ALGOZ',
                '28/08/2022': 'AFETO',
                '29/08/2022': 'PLENA',
                '30/08/2022': 'SUTIL',
                '31/08/2022': 'VIGOR',
                '01/09/2022': 'FAZER',}
                // 'audaz',
                // 'assim',
                // 'sanar',
                // 'inato',
                // 'cerne',
                // 'fosse',
                // 'ideia',
                // 'poder',
                // 'moral',
                // 'desde',
                // 'torpe',
                // 'muito',
                // 'justo',
                // 'honra',
                // 'sobre',
                // 'anexo',
                // 'etnia',
                // 'sonho',
                // 'tange',
                // 'lapso',
                // 'amigo',
                // 'expor',
                // 'haver',
                // 'tempo',
                // 'dengo',
                // 'pesar',
                // 'posse',
                // 'genro',
                // 'coser',
                // 'causa',
                // 'corja',
                // 'dizer',
                // 'prole',
                // 'tenaz',
                // 'dever',
                // 'saber',
                // 'digno',
                // 'ceder',
                // 'prado',
                // 'comum',
                // 'sendo',
                // 'temor',
                // 'culto',
                // 'assaz',
                // 'atroz',
                // 'mundo',
                // 'pauta',
                // 'censo',
                // 'fugaz',
                // 'ainda',
                // 'cozer',
                // 'valha',
                // 'denso',
                // 'estar',
                // 'forte',
                // 'vulgo',
                // 'pudor',
                // 'regra',
                // 'dogma',
                // 'louco',
                // 'criar',
                // 'banal',
                // 'impor',
                // 'jeito',
                // 'ordem',
                // 'pedir',
                // 'clava',
                // 'prosa',
                // 'feliz',
                // 'servo',
                // 'viril',
                // 'coisa',
                // 'manso',
                // 'ontem',
                // 'presa',
                // 'falar',
                // 'cunho',
                // 'forma',
                // 'dever',
                // 'mesmo',
                // 'meiga',
                // 'afago',
                // 'fluir',
                // 'venda',
                // 'limbo',
                // 'posso',
                // 'visar',
                // 'temer',
                // 'acaso',
                // 'pleno',
                // 'puder',
                // 'valor',
                // 'cisma',
                // 'bruma',
                // 'lugar',
                // 'afins',
                // 'certo',
                // 'gerar',
                // 'obter',
                // 'crise',
                // 'matiz',
                // 'praxe',
                // 'senil',
                // 'havia',
                // 'todos',
                // 'fluxo',
                // 'enfim',
                // 'abrir',
                // 'ritmo',
                // 'falso',
                // 'tomar',
                // 'calvo',
                // 'reter',
                // 'vital',
                // 'favor',
                // 'bravo',
                // 'grato',
                // 'vivaz',
                // 'legal',
                // 'laico',
                // 'burro',
                // 'olhar',
                // 'possa',
                // 'levar',}

// let guessList = ["aahed", "aalii", "aargh", "aarti", "abaca", "abaci", "abacs", "abaft",]

// guessList = guessList.concat(wordList);

var word = wordListDay[data];
console.log(word);

window.onload = function(){
    intialize();
}

function intialize() {

    // Create the game board
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            // <span id="0-0" class="tile">P</span>
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            // tile.classList.add("correct");
            if (localStorage.word0 && r == 0){
                tile.innerText = localStorage.word0[c].toUpperCase();
                if (tile.innerHTML == word[c]){
                    tile.classList.add("correct");
                } else if (tile.innerHTML == word[0] || tile.innerHTML == word[1] || tile.innerHTML == word[2] || tile.innerHTML == word[3] || tile.innerHTML == word[4]){
                    tile.classList.add("present")
                } else {
                    tile.classList.add("absent");
                }
            }else if (r == 0){
                tile.innerText = ''
            }
            if (localStorage.word1 && r == 1){
                tile.innerText = localStorage.word1[c].toUpperCase();
                if (tile.innerHTML == word[c]){
                    tile.classList.add("correct");
                } else if (tile.innerHTML == word[0] || tile.innerHTML == word[1] || tile.innerHTML == word[2] || tile.innerHTML == word[3] || tile.innerHTML == word[4]){
                    tile.classList.add("present")
                } else {
                    tile.classList.add("absent");
                }
            }else if (r == 1){
                tile.innerText = ''
            }
            if (localStorage.word2 && r == 2){
                tile.innerText = localStorage.word2[c].toUpperCase();
                if (tile.innerHTML == word[c]){
                    tile.classList.add("correct");
                } else if (tile.innerHTML == word[0] || tile.innerHTML == word[1] || tile.innerHTML == word[2] || tile.innerHTML == word[3] || tile.innerHTML == word[4]){
                    tile.classList.add("present")
                } else {
                    tile.classList.add("absent");
                }
            }else if (r == 2){
                tile.innerText = ''
            }
            if (localStorage.word3 && r == 3){
                tile.innerText = localStorage.word3[c].toUpperCase();
                if (tile.innerHTML == word[c]){
                    tile.classList.add("correct");
                } else if (tile.innerHTML == word[0] || tile.innerHTML == word[1] || tile.innerHTML == word[2] || tile.innerHTML == word[3] || tile.innerHTML == word[4]){
                    tile.classList.add("present")
                } else {
                    tile.classList.add("absent");
                }
            }else if (r == 3){
                tile.innerText = ''
            }
            if (localStorage.word4 && r == 4){
                tile.innerText = localStorage.word4[c].toUpperCase();
                if (tile.innerHTML == word[c]){
                    tile.classList.add("correct");
                } else if (tile.innerHTML == word[0] || tile.innerHTML == word[1] || tile.innerHTML == word[2] || tile.innerHTML == word[3] || tile.innerHTML == word[4]){
                    tile.classList.add("present")
                } else {
                    tile.classList.add("absent");
                }
            }else if (r == 4){
                tile.innerText = ''
            }
            if (localStorage.word5 && r == 5){
                tile.innerText = localStorage.word5[c].toUpperCase();
                if (tile.innerHTML == word[c]){
                    tile.classList.add("correct");
                } else if (tile.innerHTML == word[0] || tile.innerHTML == word[1] || tile.innerHTML == word[2] || tile.innerHTML == word[3] || tile.innerHTML == word[4]){
                    tile.classList.add("present")
                } else {
                    tile.classList.add("absent");
                }
            }else if (r == 5){
                tile.innerText = ''
            }
            document.getElementById("board").appendChild(tile);
        }
        
    }

    // Create the key board
    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", " "],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫" ]
    ]

    for (let i = 0; i < keyboard.length; i++) {
        let currRow = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for (let j = 0; j < currRow.length; j++) {
            let keyTile = document.createElement("div");

            let key = currRow[j];
            keyTile.innerText = key;
            if (key == "Enter") {
                keyTile.id = "Enter";
            }
            else if (key == "⌫") {
                keyTile.id = "Backspace";
            }
            else if ("A" <= key && key <= "Z") {
                keyTile.id = "Key" + key; // "Key" + "A";
            } 

            keyTile.addEventListener("click", processKey);

            if (key == "Enter") {
                keyTile.classList.add("enter-key-tile");
            } else {
                keyTile.classList.add("key-tile");
            }
            keyboardRow.appendChild(keyTile);
        }
        document.body.appendChild(keyboardRow);
    }
    

    // Listen for Key Press
    document.addEventListener("keyup", (e) => {
        processInput(e);
    })
}

function processKey() {
    e = { "code" : this.id };
    processInput(e);
}

function processInput(e) {
    if (gameOver) return; 

    // alert(e.code);
    if ("KeyA" <= e.code && e.code <= "KeyZ") {
        if (col < width) {
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            if (currTile.innerText == "") {
                currTile.innerText = e.code[3];
                col += 1;
            }
        }
    }
    else if (e.code == "Backspace") {
        if (0 < col && col <= width) {
            col -=1;
        }
        let currTile = document.getElementById(row.toString() + '-' + col.toString());
        currTile.innerText = "";
        document.getElementById("answer").innerText = "";
    }

    else if (e.code == "Enter") {
        if (col == width){
            update();
        }
    }

    if (!gameOver && row == height) {
        gameOver = true;
        document.getElementById("answer").innerText = word;
    }
}

function update() {
    let guess = "";
    document.getElementById("answer").innerText = "";

    //string up the guesses into the word
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;
        guess += letter;
    }

    guess = guess.toLowerCase(); //case sensitive
    console.log(guess);
    

    if (!wordList.includes(guess)) {
        document.getElementById("answer").innerText = "Not in word list";
        return;
    }

    if (wordList.includes(guess)) {
        localStorage.setItem(`word${row}`, guess);
    }
    
    //start processing guess
    let correct = 0;

    let letterCount = {}; //keep track of letter frequency, ex) KENNY -> {K:1, E:1, N:2, Y: 1}
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];

        if (letterCount[letter]) {
           letterCount[letter] += 1;
        } 
        else {
           letterCount[letter] = 1;
        }
    }

    console.log(letterCount);

    //first iteration, check all the correct ones first
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        //Is it in the correct position?
        if (word[c] == letter) {
            currTile.classList.add("correct");

            let keyTile = document.getElementById("Key" + letter);
            keyTile.classList.remove("present");
            keyTile.classList.add("correct");

            correct += 1;
            letterCount[letter] -= 1; //deduct the letter count
        }

        if (correct == width) {
            gameOver = true;
        }
    }

    console.log(letterCount);
    //go again and mark which ones are present but in wrong position
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        // skip the letter if it has been marked correct
        if (!currTile.classList.contains("correct")) {
            //Is it in the word?         //make sure we don't double count
            if (word.includes(letter) && letterCount[letter] > 0) {
                currTile.classList.add("present");
                
                let keyTile = document.getElementById("Key" + letter);
                if (!keyTile.classList.contains("correct")) {
                    keyTile.classList.add("present");
                }
                letterCount[letter] -= 1;
            } // Not in the word or (was in word but letters all used up to avoid overcount)
            else {
                currTile.classList.add("absent");
                let keyTile = document.getElementById("Key" + letter);
                keyTile.classList.add("absent")
            }
        }
    }

    row += 1; //start new row
    col = 0; //start at 0 for new row
}

if (word.toLowerCase() == localStorage.word0 || word.toLowerCase() == localStorage.word1 || word.toLowerCase() == localStorage.word2 || word.toLowerCase() == localStorage.word3 || word.toLowerCase() == localStorage.word4 || word.toLowerCase() == localStorage.word5){
    console.log('venceu')
    row = 13
    alert('Você venceu o jogo!')
}
