$(document).ready(function() {
  $('.nav-list li a').each(function() {
      var $href = $(this).attr('href');
      if (location.pathname.endsWith($href)) {
          $(this).addClass('active');
      } else {
          $(this).removeClass('active');
      }
  });
});
