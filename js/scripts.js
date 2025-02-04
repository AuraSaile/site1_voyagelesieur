const btplus = document.querySelector(".js-plus");
const colTransport = document.querySelector(".conteneur-transport");

btplus.addEventListener("click", fouvreferme);

function fouvreferme(){
        /*console.log("allo");*/
        colTransport.classList.toggle("col-transport-invisble");

}