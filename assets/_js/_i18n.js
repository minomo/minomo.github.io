$(function(){
  $('a[lang]').on('click', function(){
    $('hr[lang]').hide();
    $('section[lang]').hide();
    $('li[lang]').hide();
    $('li[lang=' + this.lang + ']').show();
    $('hr[lang=' + this.lang + ']').show();
    $('section[lang=' + this.lang + ']').show();
  });
});