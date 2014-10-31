$(function(){

  var taskForm = $("#new_task");

  var createTask = ( function() {
    var taskData = taskForm.serialize();

    var createTaskPromise = $.ajax( { data: taskData,
                                    type: "POST",
                                    url: "/tasks"
      });

    createTaskPromise.done(appendTask);
    createTaskPromise.fail( function(response) {
      var errors = $('#errors');
      errors.html(response.responseText);
    });

    return false;
  });

  var appendTask = function(theTask) {
    $('#errors').empty();
    var findList = $("#task-list"); 
    findList.append(theTask);
  };
  
  taskForm.on("submit", createTask);
});
