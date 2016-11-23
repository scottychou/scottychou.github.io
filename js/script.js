$(document).ready(function(){
  $('.nav-button').on('click',function(){
    $('.main-section').hide(500);
    var mainSectionId = $(this).attr('data-main-section-id');
    $('#'+mainSectionId).show(500);
  });
});
