const paragrafos = document.querySelector('.paragrafos'); 

const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorDoBody = estilosBody.backgroundColor;
console.log(backgroundColorDoBody)

for ( let p of ps) {
  
  p.style.backgroundColor = backgroundColorDoBody;
  p.style.color = 'white';

}