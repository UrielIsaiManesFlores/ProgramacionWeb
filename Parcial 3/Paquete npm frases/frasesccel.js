let frases = ["El respeto al derecho ajeno es la paz", "No contaban con mmi astucia",
"La tierra es de quien la trabaja", "El que madruga Dios lo ayuda" ];

function obtenerfrase(){
    let indice = Math.floor(Math.random() * frases.length)
    return frases[indice];
}

module.exports.obtenerfrase = obtenerfrase;

// console.log(module);