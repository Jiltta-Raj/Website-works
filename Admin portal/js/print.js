  
$('#printbtn').click(function () {
      
   var url = $(this).attr("url")
        var myWindow = window.open(url);
        myWindow.focus();
        myWindow.print();
    });