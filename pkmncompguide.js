
function showSection(id, prev) {
    document.getElementById(id).style.display = "block";
    let elem = document.querySelector(('#'+prev+' .glow'));
    if(elem){
    elem.classList.remove('glow');
    elem.classList.add('bradius');
    }
}


//   function showSection(id, prev) {
//     document.getElementById(id).style.display = "block";
//     let elem = document.querySelector(('#'+prev+' .glow'));
//     if(elem){
//       elem.classList.remove('glow');
//     }
//   }