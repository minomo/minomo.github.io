$(function(){
  $('a[lang]').on('click', function(){
    $('section[lang]').hide();
    $('section[lang=' + this.lang + ']').show();
  });
});