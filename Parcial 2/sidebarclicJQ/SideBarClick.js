
//USANDO Vanilla Javascript
//-------------------
// window.onload = function()
// {
//     document.getElementById("btnMENU").addEventListener("click",function()
//     {
//         document.getElementById("miMenu").classList.toggle("menuEscondido");
//         document.getElementById("miContenido").classList.toggle("contenidoMenuEscondido");

//     });
// }

// //USando Libreria Jquery
// //------------------------
// $(document).ready(function(){

//     $('#btnMENU').click(function(){
//         console.log("Hiciste click en el botton");

//         $('#miMenu').toggleClass('menuEscobdido')
//         $('#miContenido').toggleClass('contenidoMenuEscondido')
//     })
// })

//USando Libreria Jquery version mas nueva
//------------------------
$(function(){

    $('#btnMENU').on("click", function(){
        console.log("Hiciste click en el button");

        $('#miMenu').toggleClass('menuEscobdido');
        $('#miContenido').toggleClass('contenidoMenuEscondido');
    })
    
})