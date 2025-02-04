$(document).ready(function() {
    // Función para verificar la visibilidad de los elementos
    function revealTimelineItems() {
        $('.timeline-item').each(function() {
            var itemPosition = $(this).offset().top;
            var scrollPosition = $(window).scrollTop() + $(window).height();

            // Si el item es visible en la pantalla, le añadimos la clase 'visible'
            if (scrollPosition > itemPosition) {
                $(this).addClass('visible');
            }
        });
    }

    // Llamamos a la función cuando se hace scroll
    $(window).on('scroll', function() {
        revealTimelineItems();
    });

    // Llamamos a la función al cargar la página para los elementos ya visibles
    revealTimelineItems();
});
