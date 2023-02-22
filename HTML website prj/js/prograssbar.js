function InitProgressBar(){
    var $div = $("<div>", { id: 'ProgressBarContainer'});
    $($div).appendTo('body');
    var innerContent= "<div class='modal fade' id='loading1' data-rms tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true' style='width:100%'>"+
                            "<div class='progress progress-striped active' style='margin: 25% auto;width:100%; max-width:400px;'>"+
                                "<div class='progress-bar' role='progressbar' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100' style='width:100%;' >" +
                                "</div>"+
                            "</div>"+
                      "</div>";
    !($div).html(innerContent);
}

function ViewProgressBar() {
    $('#loading1').modal({ backdrop: 'static' });
}

function RedirectWithProgressBar(obj) {
    $('#loading1').modal({ backdrop: 'static' });
    window.location.href = obj.href;
}

function HideProgressBar() {
    $('#loading1').modal('hide');
}