$(document).ready(function () {
    $.ajax({
        url: "/api/tasks",
        method: "GET",
        success: function (data) {
            console.log(data);
            var taskMinutesArr = [];
            var taskGoalArr = [];
            var taskDateArr = [];


            for (var i in data) {
                taskMinutesArr.push(data[i].task_minutes);
                taskGoalArr.push(data[i].task_goal);
                taskDateArr.push(data[i].task_date);

            }
            // console.log(taskMinutesArr);
            // console.log(taskGoalArr);


            var ctx = $("#mycanvas");

            var barGraph = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: taskDateArr,
                    datasets: [{
                        label: "Task Minutes",
                        backgroundColor: "rgba(35, 166, 213, 0.75)",
                        data: taskMinutesArr
                    }, {
                        label: "Task Goal",
                        backgroundColor: "rgba(246, 106, 30, 0.75)",
                        data: taskGoalArr
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: "Task Minutes vs. Task Goals by date"
                    }
                }
            });
        },
        error: function (data) {
            console.log(data);
        }
    });
});
