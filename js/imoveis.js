$(document).ready(function(){

    setTimeout(function(){

        $('#data-area').parallax({imageSrc: '../Imagens/light-bulb-with-tree-inside.jpg'})
        $('#apply-area').parallax({imageSrc: '../Imagens/Pattern.png'})
    });

    // Filtro do portfólio

    $('.filter-btn').on('click', function(){
        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active')

        if(type == 'dsg-btn') {
            eachBoxes('dsg', boxes)
        } else if (type == 'dev-btn'){
            eachBoxes('dev', boxes);
        } else if (type == 'seo-btn'){
            eachBoxes('seo', boxes);
        } else {
            eachBoxes('all', boxes);
        }
    })

    function eachBoxes(type, boxes) {
        if(type == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function(){
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                }
            })
        }
    }

});