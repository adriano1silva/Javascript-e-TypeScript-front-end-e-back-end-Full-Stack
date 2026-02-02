// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toString();

// function getDayWeekText (diaSemana) {
//     let diaSemanaTexto;

//     switch (diaSemana){
//     case 0:
//     diaSemanaTexto = 'domingo';
//     return diaSemanaTexto
//     case 1:
//     diaSemanaTexto = 'segunda-feira';
//     return diaSemanaTexto
//     case 2:
//     diaSemanaTexto = 'terça-feira';
//     return diaSemanaTexto
//     case 3:
//     diaSemanaTexto = 'quarta-feira';
//     return diaSemanaTexto
//     case 4:
//     diaSemanaTexto = 'quinta-feira';
//     return diaSemanaTexto
//     case 5:
//     diaSemanaTexto = 'sexta-feira';
//     return diaSemanaTexto
//     case 6:
//     diaSemanaTexto = 'sabado';
//     return diaSemanaTexto
//     default: 
//     diaSemanaTexto = '';
//     }
// }

// function getNameMonth (numeroMes) {
//     let NomeMesTexto;

//     switch (numeroMes){
//     case 0:
//     NomeMesTexto = 'janeiro';
//     return SemanaTexto
//     case 1:
//     NomeMesTexto = 'fevereiro';
//     return NomeMesTexto
//     case 2:
//     NomeMesTexto = 'março';
//     return NomeMesTexto
//     case 3:
//     NomeMesTexto = 'abril';
//     return NomeMesTexto
//     case 4:
//     NomeMesTexto = 'maio';
//     return NomeMesTexto
//     case 5:
//     NomeMesTexto = 'junho';
//     return NomeMesTexto
//     case 6:
//     NomeMesTexto = 'julho';
//     return NomeMesTexto
//     case 7:
//     NomeMesTexto = 'agosto';
//     return NomeMesTexto
//     case 8:
//     NomeMesTexto = 'setembro';
//     return NomeMesTexto
//     case 9:
//     NomeMesTexto = 'outubro';
//     return NomeMesTexto
//     case 10:
//     NomeMesTexto = 'novembro';
//     return NomeMesTexto
//     case 11:
//     NomeMesTexto = 'dezembro';
//     return NomeMesTexto
//     default: 
//     NomeMesTexto = '';
//     }
// }

// function zeroAEsquerda (num) {
//     return num >= 10 ? num : `0${num}`;
// }


// function createDate (data){
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDayWeekText(diaSemana);
//     const nomeMes = getNameMonth(numeroMes);
    
//     return (`${nomeDia}, ${data.getDate()} de ${nomeMes} ` +
//            `de ${data.getFullYear()} ` +
//             `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
//     );
// }
// h1.innerHTML = createDate(data);

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle:"full", timeStyle:"short"});