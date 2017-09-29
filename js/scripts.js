$(window).ready(function() {
  var $form = $('form#test-form'),
      url = 'https://script.google.com/macros/u/2/s/AKfycbwUeVGEHvlEYiB7WlHz241bBtm6l5Uy_Y67D8d8EBxjzJJeNWmT/exec'

  $form.on('submit', function(e) {
    e.preventDefault();
    console.log('bar');

    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serialize()
    }).success(
      console.log('success')
    );
  })
});