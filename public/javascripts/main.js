/**
 * Created by elad on 8/10/16.
 */
$(document).ready(function () {

    $(this).find('form').submit(function () {
        event.preventDefault();
        $("#url-test").removeClass("alert-danger");
        $("#url-test").removeClass("alert-success");
        $("#url-test").text("");
        var graph = {
            local_graph_id: $(this).find('#local_graph_id').val()
        }
        if ($(this).find('#graph_width').val()){
            graph.graph_width = $(this).find('#graph_width').val()
        }
        if ($(this).find('#graph_height').val()){
            graph.graph_height = $(this).find('#graph_height').val()
        }
        $.ajax({
            method: 'POST',
            url: '/api/add' + "?name=" + $(this).find('#name').val(),
            data: JSON.stringify(graph),
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        }).done(function (data) {
            console.log(data);
            var message = "";
            if (data.hasOwnProperty('error')) {
                $("#url-test").addClass("alert-danger");
                message = data.error;
                console.log(data.error);
            } else {
                message = "Graph Added";
                    $("#url-test").addClass("alert-success");
            }
            $("#url-test").text(message).delay( 2000 );
            location.reload();
        });
    });
});
