$(document).ready(function() {
    $("a[rel='popup']").click(function(e) {
        e.preventDefault(); // Evita el comportamiento por defecto del enlace
        var url = $(this.attr('href'));
        var caracteristicas = "height=700,width=800,scrollTo,resizable=1,scrollbars=1,location=0";
        window.open(this.href, 'Popup', caracteristicas);
    });
});
