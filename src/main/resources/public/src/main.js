$(document).ready(function(){

    // document.oncontextmenu = cmenu; function cmenu() { return false; }
    // function preventSelection(element){
    //     var preventSelection = false;
    //     function addHandler(element, event, handler){
    //         if (element.attachEvent) element.attachEvent('on' + event, handler);
    //         else if (element.addEventListener) element.addEventListener(event, handler, false);  }
    //     function removeSelection(){
    //         if (window.getSelection) { window.getSelection().removeAllRanges(); }
    //         else if (document.selection && document.selection.clear)
    //             document.selection.clear();
    //     }
    //     addHandler(element, 'mousemove', function(){ if(preventSelection) removeSelection(); });
    //     addHandler(element, 'mousedown', function(event){ var event = event || window.event; var sender = event.target || event.srcElement; preventSelection = !sender.tagName.match(/INPUT|TEXTAREA/i) ;});
    //     function killCtrlA(event){
    //         var event = event || window.event;
    //         var sender = event.target || event.srcElement;
    //         if (sender.tagName.match(/INPUT|TEXTAREA/i)) return;
    //         var key = event.keyCode || event.which;
    //         if ((event.ctrlKey && key == 'U'.charCodeAt(0)) || (event.ctrlKey && key == 'A'.charCodeAt(0)) || (event.ctrlKey && key == 'S'.charCodeAt(0))){
    //             removeSelection();
    //             if (event.preventDefault) event.preventDefault();
    //             else event.returnValue = false;}
    //     }
    //     addHandler(element, 'keydown', killCtrlA);
    //     addHandler(element, 'keyup', killCtrlA);
    // }
    // preventSelection(document);



    $.ajax({
        url: "http://localhost:8080/greeting"
    }).then(function(data) {
        for (var i = 0; i < data.counter; i++) {
            $('.plugin').append('' +
                '<div class="plugin__block plugin-block">\n' +
                '                       <div class="plugin-block__image-cont">\n' +
                '                           <img class="plugin-block__image" src="">\n' +
                '                       </div>\n' +
                '                       <div class="plugin-block__content">\n' +
                '                            <div class="plugin-block__name"></div>\n' +
                '                            <div class="plugin-block__describe">\n' +
                '                            </div>\n' +
                '                       </div>\n' +
                '                    </div>' +
                '');

            var block = $('.plugin-block');
            $(block[i]).attr('data-id', i);
            var title = $('.plugin-block__name');
            $(title[i]).append(data.blockModels[i].name);
            var description = $('.plugin-block__describe');
            $(description[i]).append(data.blockModels[i].description);
            var image = $('.plugin-block__image');
            $(image[i]).attr('src',data.blockModels[i].image);
        }

        $('.plugin-block').click(function () {
            var id = $(this).attr('data-id');
            console.log(id);
            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: "/api/search",
                data: JSON.stringify(id),
                dataType: 'text',
                cache: false,
                success: function (data) {
                    $(title[id]).append(JSON.stringify(data));
                    console.log('send');
                },
                error: function () {
                    console.log('no send');
                }
            });
        });

    });





    $('.app').height($('.app').parent().parent().innerHeight() );

    $('.aside__button_all').click(function(){
        $('.fv-modal').fadeIn(300).css('display','flex');
        $('.modal__close').click(function(){
            $('.fv-modal').fadeOut(100);
        });
    });

    $('.aside__button_select').click(function(){
        $('.plugins').fadeIn(400);
        $('.main,.app-content__bg-img').fadeOut(400);
        $('.plugins-button').click(function(){
            $('.plugins').fadeOut(200);
            $('.main,.app-content__bg-img').delay(200).fadeIn(500);
        });
    });







    //
    //
    // BX24.callMethod(
    //     'landing.repo.register',
    //     params,
    //     function(result)
    //     {
    //         if(result.error())
    //         {
    //             console.error(result.error());
    //             $(".result").html('<div class="animated_hello hello_page"><div class="hello_page_title">Ошибочка вышла</div><div class="hello_page_decs">'+result.error()+'</div></div>');
    //         }
    //         else
    //         {
    //             console.info(result.data());
    //             $(".result").html('<div class="animated_hello hello_page"><div class="hello_page_title">Блок готов А</div><div class="hello_page_decs">Спасибо за установку!</div></div>');
    //         }
    //     }
    // );



});$(document).ready(function(){

    // document.oncontextmenu = cmenu; function cmenu() { return false; }
    // function preventSelection(element){
    //     var preventSelection = false;
    //     function addHandler(element, event, handler){
    //         if (element.attachEvent) element.attachEvent('on' + event, handler);
    //         else if (element.addEventListener) element.addEventListener(event, handler, false);  }
    //     function removeSelection(){
    //         if (window.getSelection) { window.getSelection().removeAllRanges(); }
    //         else if (document.selection && document.selection.clear)
    //             document.selection.clear();
    //     }
    //     addHandler(element, 'mousemove', function(){ if(preventSelection) removeSelection(); });
    //     addHandler(element, 'mousedown', function(event){ var event = event || window.event; var sender = event.target || event.srcElement; preventSelection = !sender.tagName.match(/INPUT|TEXTAREA/i) ;});
    //     function killCtrlA(event){
    //         var event = event || window.event;
    //         var sender = event.target || event.srcElement;
    //         if (sender.tagName.match(/INPUT|TEXTAREA/i)) return;
    //         var key = event.keyCode || event.which;
    //         if ((event.ctrlKey && key == 'U'.charCodeAt(0)) || (event.ctrlKey && key == 'A'.charCodeAt(0)) || (event.ctrlKey && key == 'S'.charCodeAt(0))){
    //             removeSelection();
    //             if (event.preventDefault) event.preventDefault();
    //             else event.returnValue = false;}
    //     }
    //     addHandler(element, 'keydown', killCtrlA);
    //     addHandler(element, 'keyup', killCtrlA);
    // }
    // preventSelection(document);

    $('.app').height($('.app').parent().parent().innerHeight() );

    $('.aside__button_all').click(function(){
        $('.fv-modal').fadeIn(300).css('display','flex');
        $('.modal__close').click(function(){
            $('.fv-modal').fadeOut(100);
        });
    });

    $('.aside__button_select').click(function(){
        $('.plugins').fadeIn(400);
        $('.main,.app-content__bg-img').fadeOut(400);
        $('.plugins-button').click(function(){
            $('.plugins').fadeOut(200);
            $('.main,.app-content__bg-img').delay(200).fadeIn(500);
        });
    });






    //
    // var params;
    // params = {
    //     code: 'header-banner',
    //     fields: {
    //         NAME: 'Видео dasdasdasdфон',
    //         SECTIONS: 'cover,about,gallery,video',
    //         PREVIEW: 'https://dev.ipgpromo.ru/videobg/preview.jpg',
    //         CONTENT: "<div id=\"bgndVideo\" class=\"bg-player\" data-selector=\"body\" data-code=\"6JB03j6jKR8\" data-autoplay=\"v1\" data-loop=\"v1\" data-showcontrols=\"v0\" data-mute=\"v1\" data-opacity=\"1\" data-vol=\"0\" data-grayscale=\"0\" data-blur=\"0\">\u0411\u043b\u043e\u043a \u0432\u0438\u0434\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u043f\u0440\u0430\u0432\u043a\u0438. \u0414\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043e\u043a\u0430\u0437\u0430 \u0432\u0438\u0434\u0435\u043e \u0444\u043e\u043d\u0430.<\/div>"                  },
    //     manifest: {
    //         assets: {
    //             js: [
    //                 "https://dev.ipgpromo.ru/videobg/jquery.mb.YTPlayer.min.js",
    //             ],
    //             css: [
    //                 "https://dev.ipgpromo.ru/videobg/jquery.mb.YTPlayer.min.css",
    //             ]
    //         },
    //         attrs: {
    //             '.bg-player': [
    //                 {
    //                     name: 'Селектор блока для показа видео',
    //                     attribute: 'data-selector',
    //                     type: 'text'
    //                 },
    //                 {
    //                     name: 'Ссылка на видео YouTube',
    //                     attribute: 'data-code',
    //                     type: 'text'
    //                 },
    //                 {
    //                     name: 'Автоматическое воспроизведение видео (ВНИМАНИЕ! Если отключено автоматическое воспроизведение и скрыты элементы управления, пользователь не сможет включить проигрывание видео)',
    //                     attribute: 'data-autoplay',
    //                     type: "dropdown",
    //                     items: {
    //                         'v1': 'Да',
    //                         'v0': 'Нет'
    //                     }
    //                 },
    //                 {
    //                     name: 'Зациклить видео',
    //                     attribute: 'data-loop',
    //                     type: "dropdown",
    //                     items: {
    //                         'v1': 'Да',
    //                         'v0': 'Нет'
    //                     }
    //                 },
    //                 {
    //                     name: 'Показать элементы управления проигрывателем',
    //                     attribute: 'data-showcontrols',
    //                     type: "dropdown",
    //                     items: {
    //                         'v0': 'Скрыть',
    //                         'v1': 'Показать'
    //                     }
    //                 },
    //                 {
    //                     name: 'Отключает звук',
    //                     attribute: 'data-mute',
    //                     type: "dropdown",
    //                     items: {
    //                         'v0': 'Со звуком',
    //                         'v1': 'Без звука'
    //                     }
    //                 },
    //                 {
    //                     name: 'Определяют непрозрачность видео (от 0 до 1)',
    //                     attribute: 'data-opacity',
    //                     type: 'text'
    //                 },
    //                 {
    //                     name: 'Громкость (от 0 до 100)',
    //                     attribute: 'data-vol',
    //                     type: 'text'
    //                 },
    //                 {
    //                     name: 'Фильтр оттенки серого (от 0 до 100)',
    //                     attribute: 'data-grayscale',
    //                     type: 'text'
    //                 },
    //                 {
    //                     name: 'Фильтр размытия (от 0 до 10)',
    //                     attribute: 'data-blur',
    //                     type: 'text'
    //                 }
    //             ]
    //         }
    //     }
    // };
    //
    //
    // BX24.callMethod(
    //     'landing.repo.register',
    //     params,
    //     function(result)
    //     {
    //         if(result.error())
    //         {
    //             console.error(result.error());
    //             $(".result").html('<div class="animated_hello hello_page"><div class="hello_page_title">Ошибочка вышла</div><div class="hello_page_decs">'+result.error()+'</div></div>');
    //         }
    //         else
    //         {
    //             console.info(result.data());
    //             $(".result").html('<div class="animated_hello hello_page"><div class="hello_page_title">Блок готов А</div><div class="hello_page_decs">Спасибо за установку!</div></div>');
    //         }
    //     }
    // );



});