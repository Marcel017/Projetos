$(document).ready(function () {
    $('#task-form').on('submit', function (e) {
        e.preventDefault();

        const taskName = $('#task-input').val().trim();

        if (taskName !== '') {
            const newItem = $('<li></li>').text(taskName);
            $('#task-list').append(newItem);
            $('#task-input').val('');
        }
    });

    $('#task-list').on('click', 'li', function () {
        $(this).toggleClass('checked');
    });
});
