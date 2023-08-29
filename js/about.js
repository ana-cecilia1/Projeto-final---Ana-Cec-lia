
window.addEventListener('load', function(){
   //PARA MUDAR COR DE FUNDO  
  setInterval(function(){
    changeBgColor();}, 1000);
 
});

function changeBgColor(){
  function random(number){
    return Math.floor(Math.random() * (number + 1));
  };

  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)} )`;
  document.body.style.backgroundColor = rndCol;
}



