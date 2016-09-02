$(function(){
  $('a[lang]').on('click', function(){
    $('hr[lang]').hide();
    $('section[lang]').hide();
    $('hr[lang=' + this.lang + ']').show();
    $('section[lang=' + this.lang + ']').show();
  });
});