$('.page-index').toggle(function(){
  $('.route-box,.coordpath').removeAttr('style');
  $('.reout-yellow').show();
},
  /*function(){
  $('.route-box,.coordpath').removeAttr('style');
  $('.reout-yellow').show();
  $('.coordpath-yellow').eq(0).addClass('coordpath-yellow-01');
  $('.coordpath-yellow').eq(1).addClass('coordpath-yellow-02');
},function(){
  $('.coordpath-yellow').eq(8).addClass('coordpath-yellow-09');
  setTimeout(function(){
    $('.coordpath-yellow').eq(2).addClass('coordpath-yellow-03');
    $('.coordpath-yellow').eq(3).addClass('coordpath-yellow-04');
    $('.coordpath-yellow').eq(4).addClass('coordpath-yellow-05');
    $('.coordpath-yellow').eq(5).addClass('coordpath-yellow-06');
  },1000);
},function(){
  $('.coordpath-yellow').eq(6).addClass('coordpath-yellow-07');
  $('.coordpath-yellow').eq(7).addClass('coordpath-yellow-08');
},*/function(){
  $('.route-box').removeAttr('style');
  $('.reout-red').show();
  $('.coordpath-yellow').hide();
  $('.coordpath-red').eq(0).addClass('coordpath-red-01');
},function(){
  $('.coordpath-red').eq(1).addClass('coordpath-red-02');
  $('.coordpath-red').eq(2).addClass('coordpath-red-03');
},function(){
  $('.route-box').removeAttr('style');
  $('.reout-violet').show();
  $('.coordpath-red').hide();
  $('.coordpath-violet').eq(0).addClass('coordpath-violet-01');
},function(){
  $('.route-box').removeAttr('style');
  $('.reout-blue').show();
  $('.coordpath-violet').hide();
  $('.coordpath-blue').eq(0).addClass('coordpath-blue-01');
},function(){
  $('.coordpath-blue').eq(1).addClass('coordpath-blue-02');
},function(){
  $('.coordpath-blue').eq(2).addClass('coordpath-blue-03');
},function(){
  location.reload();
});

