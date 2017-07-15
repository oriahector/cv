var langs = ['en', 'es'];
var langCode = '';
var langJS = null;

var translate = function(jsdata) {
    $("[tkey]").each(function(index) {
        var strTr = jsdata[$(this).attr('tkey')];
        $(this).html(strTr);
    });
}

langCode = navigator.language.substr(0, 2);

if (langCode in langs)
    $.getJSON('lang/' + langCode + '.json', translate);
else
    $.getJSON('lang/en.json', translate);

$('.header__left__lang--es').css('text-decoration', 'underline');
$('.header__left__lang--es').on('click', function() {
    $.getJSON('lang/en.json', translate);
    $(this).css('text-decoration', 'underline');
    $('.header__left__lang').css('text-decoration', 'none');
    $('#download').attr('href', 'img/hmo_english.pdf')


});

$('.header__left__lang').on('click', function() {
    $.getJSON('lang/es.json', translate);
    $(this).css('text-decoration', 'underline');
    $('.header__left__lang--es').css('text-decoration', 'none');
    $('#download').attr('href', 'img/hmo_spanish.pdf')

});