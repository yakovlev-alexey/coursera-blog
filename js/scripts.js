$(document).ready(function () {
  $(".hoverable").mouseover(
    function (e) {
      e.stopPropagation();
      $(this).css('transform', 'scale(1.03)');
    }).mouseout(
      function () {
        $(this).css('transform', 'scale(1)');
      });
})

