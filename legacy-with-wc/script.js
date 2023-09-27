$(document).ready(function(){
    $('#addTask').click(function(){
        var task = $('#taskInput').val().trim();
        if(task){
            // var checkBox = $('<input type="checkbox">').click(function() {
            //     $(this).parent().toggleClass('completed');
            // });
            // var taskText = $('<span class="task-text">').text(task);
            
            // var removeButton = $('<button class="remove-btn">').text('x').click(function() {
            //     $(this).parent().remove();
            // });

            // var taskCard = $('<div class="task-card">').append(checkBox, taskText, removeButton);
            var taskCard = $(`<todo-task-card>${task}</todo-task-card>`).on("todoRemoved", function(ev){
                $(ev.target).remove()
            })
            $('#taskList').append(taskCard);
            $('#taskInput').val('');
        }
    });

    $('#taskInput').keypress(function(e){
        if(e.which == 13){
            $('#addTask').click();
        }
    });
});
