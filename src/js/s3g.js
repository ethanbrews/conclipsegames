$(document).ready(function() { 
    $('#file_download_large_list').hide();

    if (!localStorage.getItem('viewed_s3g')){
        if (window.innerWidth > 600) {
            setTimeout(function () {
                $('.tap-target').tapTarget('open');
            }, 750);
        } else {
            $("#download-fab").addClass("pulse");
            setTimeout(function() { $("#download-fab").removeClass("pulse"); }, 4000)
        }
        localStorage.setItem('viewed_s3g','yes');
    }

});
$("#file_download_large_btn").click(function() {
    $("#file_download_large_btn").hide();
    $('#file_download_large_list').slideDown(200);
});
$(document).mouseup(function (e)
                    {
    var container = $("#file_download_large_list");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.slideUp(200);
        $("#file_download_large_btn").show();    
    }
});