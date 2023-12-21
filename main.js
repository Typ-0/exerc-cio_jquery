$(document).ready(function () {
    $('#formulario').submit(function (event) {
        event.preventDefault();
        var tarefa = $('#inputTarefa').val();
        $('#listaTarefas').append('<li>' + tarefa + '</li>');
        $('#inputTarefa').val('');
    });
});
$(document).ready(function () {
    $(document).on('click', '#listaTarefas li', function () {
        $(this).toggleClass('concluida');
    });
});
