$(window).ready(function() {
  var $form = $('form#test-form'),
      url = 'https://script.google.com/macros/u/2/s/AKfycbwUeVGEHvlEYiB7WlHz241bBtm6l5Uy_Y67D8d8EBxjzJJeNWmT/exec'

  $('#submit-form').on('click', function(e) {
    e.preventDefault();
    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serializeObject()
    }).success(
      // do something
    );
  })
});