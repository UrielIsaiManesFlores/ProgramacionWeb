
window.onload = function()
{
    document.getElementById("btnMENU").addEventListener("click",function()
    {
        document.getElementById("miMenu").classList.toggle("menuEscondido");
        document.getElementById("miContenido").classList.toggle("contenidoMenuEscondido");

    });
}
