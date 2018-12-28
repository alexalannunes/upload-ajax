let $btn_anexo = $('#btn_anexo');
let $input_anexo = $('#input_anexo');
let $form_send_anexo = $('#form_send_anexo');
let $texto_anexo = $('#texto_anexo');

$btn_anexo.click(function() {
  $input_anexo.trigger('click');
});

$input_anexo.change(function() {
  let value = $(this).val();
  if (value || value != '') {
    $texto_anexo.text(value.replace('C:\\fakepath\\', '')).addClass('text-success').removeClass('text-danger');
    $form_send_anexo.trigger('submit');
  } else {
    $texto_anexo.text('Por favor, selecione um anexo').removeClass('text-success').addClass('text-danger');
  }
});

$form_send_anexo.submit(function(event) {
 
  
  var data = new FormData(this);

  // data.append('id', id);

  $.ajax({
    url: 'php/upload.php',
    type: 'POST',
    cache: false,
    contentType: false,
    processData: false,
    mimeType: "multipart/form-data",
    data: data,
    success: function(data) {
      // ...
    },
    error: function() {
      //$("#texto_anexo").text('Tente novamente').removeClass('text-success').addClass('text-danger');
    }
  });
  return false;

});
