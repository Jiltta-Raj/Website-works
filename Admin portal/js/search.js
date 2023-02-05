$(".button-click-withdrawals").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-withdrawals").click();
    }
});
$('.btn-search-withdrawals').click(function () {

    var amount = $("input[type=number][name=requestamount]").val();
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var date = $("input[type=text][name=requestdate]").val();
    var status = $("#requeststatus").val();
    //Added By Asad 24/06/2022
    var size = $("#requestsize").val();
    window.location.href = encodeURI("./withdrawals?code=" + code + "&name=" + name
            + "&date=" + date + "&amount=" + amount + "&status=" + status + "&size="+size);
});
$(".button-click-debitcredit").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-debitcredit").click();
    }
});
$('.btn-search-debitcredit').click(function () {

    var amount = $("input[type=number][name=requestamount]").val();
    var code = $("input[type=number][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var date = $("input[type=text][name=requestdate]").val();
    var status = $("#requeststatus").val();
    //Added By Asad 24/06/2022
    var size = $("#requestsize").val();
    window.location.href = encodeURI("./debitCredit?code=" + code + "&name=" + name
            + "&date=" + date + "&amount=" + amount + "&status=" + status + "&size="+size);
});
$(".button-click-rejectwithdrawals").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-rejectwithdrawals").click();
    }
});
$('.btn-search-rejectwithdrawals').click(function () {

    var amount = $("input[type=number][name=requestamount]").val();
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var date = $("input[type=text][name=requestdate]").val();
    //Added By Asad 24/06/2022
    var size = $("#requestsize").val();

    window.location.href = encodeURI("./rejectwithdrawals?code=" + code + "&name=" + name
            + "&date=" + date + "&amount=" + amount + "&size="+size);
});


$(".button-click-pendingwithdrawals").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-pendingwithdrawals").click();
    }
});
$('.btn-search-pendingwithdrawals').click(function () {

    var amount = $("input[type=number][name=requestamount]").val();
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var date = $("input[type=text][name=requestdate]").val();
    var bankname = $("input[type=text][name=requestbankname]").val();
    var accountnumber = $("input[type=text][name=requestaccountnumber]").val();
    //Added By Asad 24/06/2022
    var size = $("#requestsize").val();
    window.location.href = encodeURI("./pendingwithdrawals?code=" + code + "&name=" + name
            + "&date=" + date + "&amount=" + amount + "&bankname=" + bankname +
            "&accountnumber=" + accountnumber + "&selector=0" + "&size="+size);
});


//Added By Asad 07/07/2022
$(".button-click-pendingbankcertificates").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-pendingbankcertificates").click();
    }
});
$('.btn-search-pendingbankcertificates').click(function () {

    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var date = $("input[type=text][name=requestdate]").val();
    var bankname = $("input[type=text][name=requestbankname]").val();
    var accountnumber = $("input[type=text][name=requestaccountnumber]").val();
    var certstatus = $("input[type=text][name=requestcertstatus]").val();
    //Added By Asad 24/06/2022
    var size = $("#requestsize").val();
    window.location.href = encodeURI("./pendingbankcertificates?code=" + code + "&name=" + name
            + "&date=" + date + "&bankname=" + bankname +
            "&accountnumber=" + accountnumber + "&size="+size + "&certificatestatus=" + certstatus);
});


$(".button-click-merchants").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-merchants").click();
    }
});
$('.btn-search-merchants').click(function () {

    var amount = $("input[type=number][name=requesttotalamount]").val();
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var businessname = $("input[type=text][name=requestbusinessname]").val();
//    var numbertransactions =
//            $("input[type=number][name=requestnoftransactions]").val();
    var numbertransactions = checkUndefined($("#requestnoftransactions").val());
    var commission = $("input[type=number][name=requestcommission]").val();
    var contactnumber = $("input[type=text][name=requestcontactno]").val();
    var category = $("#requestcategory").val();
    //Added by Anju on 09/08/2022
    var datefrom = checkUndefined($("input[type=text][name=requestdatefrom]").val());
    var dateto = checkUndefined($("input[type=text][name=requestdateto]").val());
    //ADded By Asad 24/06/2022
    var size = $("#requestsize").val();
    
    
    if(numbertransactions > 9999){
        swal("No of transactions is invalid!", {button: false,});
    }else{
        window.location.href = encodeURI("./merchants?code=" + code + "&name=" + name + "&businessname=" + businessname
            + "&amount=" + amount + "&numbertransactions=" + numbertransactions
            + "&commissionamount=" + commission
            + "&contactnumber=" + contactnumber + "&category=" + category + "&size="+size
            + "&datefrom=" +datefrom + "&dateto="+ dateto);
    }
    
});



$(".button-click-transactions").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-transactions").click();
    }
});
$('.btn-search-transactions').click(function () {
    var status = $("#requeststatus").val();
    var amount = $("input[type=number][name=requesttotalamount]").val();
    var datefrom = $("input[type=text][name=requestdatefrom]").val();
    var dateto = $("input[type=text][name=requestdateto]").val();
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var contactnumber = $("input[type=text][name=requestcontactno]").val();
    var transactionkey = $("input[type=text][name=requesttransactionkey]").val();
    var bankgivenkey = $("input[type=text][name=requestbankgivenkey]").val();

    window.location.href = encodeURI("./transactions?status=" + status + "&amount="
            + amount
            + "&datefrom=" + datefrom + "&dateto=" + dateto
            + "&code=" + code + "&name=" + name
            + "&contactnumber=" + contactnumber
            + "&transactionkey=" + transactionkey
            + "&bankgivenkey=" + bankgivenkey);
});


$(".button-click-vmtransactions").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-vmtransactions").click();
    }
});
$('.btn-search-vmtransactions').click(function () {
    var status = $("#requeststatus").val();
    var amount = $("input[type=number][name=requesttotalamount]").val();
    var datefrom = $("input[type=text][name=requestdatefrom]").val();
    var dateto = $("input[type=text][name=requestdateto]").val();
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var contactnumber = $("input[type=text][name=requestcontactno]").val();
    var transactionkey = $("input[type=text][name=requesttransactionkey]").val();
    var bankgivenkey = $("input[type=text][name=requestbankgivenkey]").val();
    //Added By Asad 24/06/2022
    var size = $("#requestsize").val();
    
    window.location.href = encodeURI("./vmtransactions?status=" + status + "&amount="
            + amount
            + "&datefrom=" + datefrom + "&dateto=" + dateto
            + "&code=" + code + "&name=" + name
            + "&contactnumber=" + contactnumber
            + "&transactionkey=" + transactionkey
            + "&bankgivenkey=" + bankgivenkey
            + "&size="+size);
});



$(".button-click-incompletetransaction").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-incompletetransaction").click();
    }
});
$('.btn-search-incompletetransaction').click(function () {

    var amount = $("input[type=number][name=requesttotalamount]").val();
    var datefrom = $("input[type=text][name=requestdatefrom]").val();
    var dateto = $("input[type=text][name=requestdateto]").val();
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var bankgivenkey = $("input[type=text][name=requestbankgivenkey]").val();
    var contactnumber = $("input[type=text][name=requestcontactno]").val();
    var transactionkey = $("input[type=text][name=requesttransactionkey]").val();
    //Added By Asad 24/06/2022
    var size = $("#requestsize").val();

    window.location.href = encodeURI("./incompletetransactions?amount=" + amount
            + "&datefrom=" + datefrom + "&dateto=" + dateto
            + "&code=" + code + "&name=" + name
            + "&bankGivenkey=" + bankgivenkey
            + "&contactnumber=" + contactnumber
            + "&transactionkey=" + transactionkey
            + "&size="+size);
});

$('.btn-search-dailytransactions').click(function () {
    //Commented By Asad 19/07/2022 
    //var date = $("input[type=text][name=requestdate]").val();
    var datefrom = $("input[type=text][name=requestdatefrom]").val();
    var dateto = $("input[type=text][name=requestdateto]").val();
    //Added By Asad 24/06/2022
    var size = $("#requestsize").val();
    window.location.href = encodeURI ("./dailysummarys?date=" + datefrom + "&dateto=" + dateto + "&size="+size);
});

$(".button-click-merchant-cashbook").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-merchant-cashbook").click();
    }
});
$('.btn-search-merchant-cashbook').click(function () {
    var amount = $("input[type=number][name=requestamount]").val();
    var datefrom = $("input[type=text][name=requestdatefrom]").val();
    var dateto = $("input[type=text][name=requestdateto]").val();
    var id = $("#merchantusername").text();
    //Added By Asad 26/06/2022
    var size = $("#requestsize").val();
    id = $.trim(id);

    window.location.href = encodeURI("./merchantcashbook?id=" + id + "&datefrom=" +
            datefrom + "&amount=" + amount + "&dateto=" +
            dateto + "&size="+size);

});

$(".button-click-merchant-withdrawal").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-merchant-withdrawal").click();
    }
});
$('.btn-search-merchant-withdrawal').click(function () {
    var id = $("#merchantusername").text();
    id = $.trim(id);

    var amount = $("input[type=number][name=requestamount]").val();
    var date = $("input[type=text][name=requestdate]").val();
    var status = $("#requeststatus").val();
    var size = $("#requestsize").val();
    window.location.href = encodeURI("./merchantwithdrawal?id=" + id +
            "&date=" + date + "&amount=" + amount + "&status=" + status + "&size="+size);
});
$(".button-click-merchant-transactions").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-merchant-transactions").click();
    }
});
$('.btn-search-merchant-transactions').click(function () {
    var id = $("#merchantusername").text();
    id = $.trim(id);

    var status = $("#requeststatus").val();
    var amount = $("input[type=number][name=requesttotalamount]").val();
    var datefrom = $("input[type=text][name=requestdatefrom]").val();
    var dateto = $("input[type=text][name=requestdateto]").val();
    var contactnumber = $("input[type=text][name=requestcontactno]").val();
    var size = $("#requestsize").val();
    window.location.href = encodeURI("./merchanttransaction?id=" + id + "&status=" +
            status + "&amount="
            + amount
            + "&datefrom=" + datefrom + "&dateto=" + dateto
            + "&contactnumber=" + contactnumber + "&size="+size);
});

$('.btn-search-reverse-transaction').click(function () {
    var date = $("input[type=text][name=requestdate]").val();
    window.location.href = "./reversetransaction?date=" + date;
});

$('.btn-search-approve-transaction').click(function () {
    var date = $("input[type=text][name=requestdate]").val();
    window.location.href = "./approvetransaction?date=" + date;
});

$('.btn-search-daily_summary-transaction').click(function () {
    var date = $("input[type=text][name=requestdate]").val();
    window.location.href = "./dailysummary?date=" + date;
});

$(".button-click-block-merchant").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-block-merchant").click();
    }
});
$('.btn-search-block-merchant').click(function () {
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var contactnumber = $("input[type=text][name=requestcontactno]").val();

    window.location.href = encodeURI("./blockmerchant?code=" + code + "&name=" + name
            + "&contactnumber=" + contactnumber);
});
$(".button-click-wallettransactions").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-wallettransactions").click();
    }
});
$('.btn-search-wallettransactions').click(function () {

    var amount = $("input[type=number][name=requesttotalamount]").val();
    var datefrom = $("input[type=text][name=requestdatefrom]").val();
    var dateto = $("input[type=text][name=requestdateto]").val();
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();

    window.location.href = encodeURI("./wallettransactions?amount="
            + amount
            + "&datefrom=" + datefrom + "&dateto=" + dateto
            + "&code=" + code + "&name=" + name);
});
$(".button-click-withdrawalrequestmadebyadmin").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-withdrawalrequestmadebyadmin").click();
    }
});
$('.btn-search-withdrawalrequestmadebyadmin').click(function () {

    var amount = $("input[type=number][name=requestamount]").val();
    var code = $("input[type=text][name=requestcode]").val();
    var date = $("input[type=text][name=requestdate]").val();
    window.location.href = encodeURI("./withdrawalrequestmadebyadmin?code=" + code
            + "&date=" + date + "&amount=" + amount);
});
$(".button-click-invoices").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-invoices").click();
    }
});
$('.btn-search-invoices').click(function () {
    var amount = $("input[type=number][name=requestamount]").val();
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var date = $("input[type=text][name=requestdate]").val();
    var status = $("#requeststatus").val();
    var requestinvoicekey = $("#requestinvoicekey").val();
    //Added By Asad 24/06/2022
    var size = $("#requestsize").val();
    window.location.href = encodeURI("./invoices?code=" + code + "&name=" + name
            + "&date=" + date + "&amount=" + amount + "&status=" + status
            + "&invoiceKey=" + requestinvoicekey + "&size="+size);
});
$(".button-click-merchantinvoice").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-merchantinvoice").click();
    }
});
$('.btn-search-merchantinvoice').click(function () {
    var amount = $("input[type=number][name=requestamount]").val();
    var code = $("#merchantusername").text();
    code = $.trim(code);
    var date = $("input[type=text][name=requestdate]").val();
    var status = $("#requeststatus").val();
    var requestinvoicekey = $("#requestinvoicekey").val();
    var size = $("#requestsize").val();
    window.location.href = encodeURI("./merchantinvoices?code=" + code
            + "&date=" + date + "&amount=" + amount + "&status=" + status
            + "&invoiceKey=" + requestinvoicekey + "&size="+size);
});

$('.btn-search-failedtransaction').click(function () {
    var date = $("input[type=text][id=approvedate]").val();
    window.location.href = "./failedtransactions?date=" + date;
});

$('.btn-search-ftfSummarys').click(function () {
    var date = $("input[type=text][id=txt-ftf-file-date]").val();
    window.location.href = "./ftfSummarys?date=" + date;
});
$(".button-click-ftffile").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-ftffile").click();
    }
});
$('.btn-search-ftffile').click(function () {
    var id = $(this).attr('data-id');
    var category = $(this).attr('data-category');
    var amount = $("input[type=number][name=requestamount]").val();
    var code = $("input[type=number][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var date = $("input[type=text][name=requestdate]").val();
    var bankname = $("input[type=text][name=requestbankname]").val();
    var accountnumber = $("input[type=text][name=requestaccountnumber]").val();
    window.location.href = encodeURI("./ftfview?code=" + code + "&name=" + name
            + "&date=" + date + "&amount=" + amount + "&bankname=" + bankname +
            "&accountnumber=" + accountnumber + "&filename=" + id +
            "&category=" + category + "&selector=0");
});
$('.btn-search-burganftffile').click(function () {
    var id = $(this).attr('data-id');
    var category = $(this).attr('data-category');
    var amount = $("input[type=number][name=requestamount]").val();
    var code = $("input[type=number][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var date = $("input[type=text][name=requestdate]").val();
    var bankname = $("input[type=text][name=requestbankname]").val();
    var accountnumber = $("input[type=text][name=requestaccountnumber]").val();
    window.location.href = encodeURI("./ftfburganview?code=" + code + "&name=" + name
            + "&date=" + date + "&amount=" + amount + "&bankname=" + bankname +
            "&accountnumber=" + accountnumber + "&filename=" + id +
            "&category=" + category + "&selector=0");
});
$(".button-click-gallery").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-gallery").click();
    }
});
$('.btn-search-gallery').click(function () {

    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var date = $("input[type=text][name=requestdate]").val();

    window.location.href = encodeURI("./gallery?code=" + code + "&name=" + name
            + "&date=" + date);
});
$('.btn-search-gallery-merchant').click(function () {

    var code = $("input[type=text][name=requestcode]").val();
    var date = $("input[type=text][name=requestdate]").val();

    window.location.href = "./merchantgallery?id=" + code+ "&date=" + date;
});
$('.btn-search-users').click(function () {

    var email = $("input[type=text][name=email]").val();
    var name = $("input[type=text][name=name]").val();


    window.location.href = "./usersview?email=" + email + "&name=" + name;
});
$(".button-click-broadcastmessagereceiverview").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-broadcastmessagereceiverview").click();
    }
});
$('.btn-search-broadcastmessagereceiverview').click(function () {
    var code = $("input[type=number][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var date = $("input[type=text][name=requestdate]").val();
    //Added By Asad 24/06/2022
    var size = $("#requestsize").val();
    window.location.href = encodeURI("./broadcastmessagereceivers?code=" + code + "&name=" + name
            + "&date=" + date + "&size="+size);
});
$(document).ready(function () {
    $(".commentsd").click(function (event) {
        console.log("sdfsdgsdg");
//         var id=$(this).data('id');
//           var url='<?php echo site_url("v3/withdrawal/rejectcomment") ?>';
//          jQuery.ajax({
//                        type: "POST",
//                        url: url,
//                        dataType: 'json',
//                        data: {id: id},
//                        success: function (res) {
//                            if (res)
//                            {
//                                 $("#comment_data").html(res.comment);
//                                
//                            }
//                            else
//                            {
//                               
//                                  $("#comment_data").html("Error calling the web service.");
//                            }
//                        },
//                        error: function () {
//                         
//                              $("#comment_data").html("Error calling the web service.");
//                        }
//                    });

        $('#myModal').modal('show');
    });

});
$(".button-click-incompletevmtransactions").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-incompletevmtransactions").click();
    }
});
$('.btn-search-incompletevmtransactions').click(function () {
   
    var amount = $("input[type=number][name=requesttotalamount]").val();
    var datefrom = $("input[type=text][name=requestdatefrom]").val();
    var dateto = $("input[type=text][name=requestdateto]").val();
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var contactnumber = $("input[type=text][name=requestcontactno]").val();
    var transactionkey = $("input[type=text][name=requesttransactionkey]").val();
    var bankgivenkey = $("input[type=text][name=requestbankgivenkey]").val();
    //Added By Asad 24/06/2022
    var size = $("#requestsize").val();

    window.location.href = encodeURI("./incompletevmtransactions?amount="
            + amount
            + "&datefrom=" + datefrom + "&dateto=" + dateto
            + "&code=" + code + "&name=" + name
            + "&contactnumber=" + contactnumber
            + "&transactionkey=" + transactionkey
            + "&bankgivenkey=" + bankgivenkey
            + "&size="+size);
});
$(".button-click-completevmtransactions").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-completevmtransactions").click();
    }
});
$('.btn-search-completevmtransactions').click(function () {
    var status = $("#requeststatus").val();
    var amount = $("input[type=number][name=requesttotalamount]").val();
    var datefrom = $("input[type=text][name=requestdatefrom]").val();
    var dateto = $("input[type=text][name=requestdateto]").val();
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var contactnumber = $("input[type=text][name=requestcontactno]").val();
    var transactionkey = $("input[type=text][name=requesttransactionkey]").val();
    var bankgivenkey = $("input[type=text][name=requestbankgivenkey]").val();
    //Added By Asad 24/06/2022
    var size = $("#requestsize").val();

    window.location.href = encodeURI("./completevmtransactions?status=" + status + "&amount="
            + amount
            + "&datefrom=" + datefrom + "&dateto=" + dateto
            + "&code=" + code + "&name=" + name
            + "&contactnumber=" + contactnumber
            + "&transactionkey=" + transactionkey
            + "&bankgivenkey=" + bankgivenkey
            + "&size="+size);
});

$('.btn-load-merchantprofile').click(function () {
    var merchantcode =  $("input[type=text][name=requestmerchantcode]").val();;
    merchantcode = $.trim(merchantcode);
   window.location.href = "./merchantcashbook?id=" + merchantcode ;
});

$(".button-click-balanceissue-merchant").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-balanceissue-merchant").click();
    }
});
$('.btn-search-balanceissue-merchant').click(function () {

    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var businessname = $("input[type=text][name=businessname]").val();
    window.location.href = encodeURI("./balanceissuemerchant?code=" + code + "&name=" + name
            + "&businessname=" + businessname);
});

$('.btn-search-amex-transactions').click(function () {
    var status = $("#requeststatus").val();
    var amount = $("input[type=number][name=requesttotalamount]").val();
    var datefrom = $("input[type=text][name=requestdatefrom]").val();
    var dateto = $("input[type=text][name=requestdateto]").val();
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var contactnumber = $("input[type=text][name=requestcontactno]").val();
    var transactionkey = $("input[type=text][name=requesttransactionkey]").val();
    var bankgivenkey = $("input[type=text][name=requestbankgivenkey]").val();
    //Added By Asad 24/06/2022
    var size = $("#requestsize").val();

    window.location.href = encodeURI("./amextransactions?status=" + status + "&amount="
            + amount
            + "&datefrom=" + datefrom + "&dateto=" + dateto
            + "&code=" + code + "&name=" + name
            + "&contactnumber=" + contactnumber
            + "&transactionkey=" + transactionkey
            +"&bankgivenkey=" + bankgivenkey
            + "&size="+size);
});

$(".button-click-amex-transactions").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-amex-transactions").click();
    }
});

$('.btn-search-ftfaubkandnonaubksummarys').click(function () {
    var date = $("input[type=text][id=txt-ftf-file-date]").val();
    window.location.href = "./ftfAubkAndNonAubkSummarys?date=" + date;
});
$(".button-click-ftfaubkandnonaubksummarys").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-ftfaubkandnonaubksummarys").click();
    }
});

$(".button-click-userlog").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-logs-log").click();
    }
});
$('.btn-search-logs-log').click(function () {
    var id = $("#user_code").text();
    id = $.trim(id);
    var date = $("input[type=text][name=requestdate]").val();
    window.location.href = encodeURI("./userhistory?id=" + id 
     + "&date=" + date);
});

$(".button-click-merchant-documents").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search--merchant-documents").click();
    }
});
$('.btn-search--merchant-documents').click(function () {
    var id = $("#merchantusername").text();
    id = $.trim(id);
    var date = $("input[type=text][name=requestdate]").val();
    var requestfilename = $("input[type=text][name=requestfilename]").val();
    var requestfiletype = $("input[type=text][name=requestfiletype]").val();
    var requestuploadby = $("input[type=text][name=requestuploadby]").val();
    ViewProgressBar();
    window.location.href = encodeURI("./merchantdocuments?id="+ id 
            + "&date=" + date + "&filename=" + requestfilename
            + "&filetype=" + requestfiletype + "&uploadby=" + requestuploadby
            );
});

$(".button-click-documents").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-documents").click();
    }
});
$('.btn-search-documents').click(function () {
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var date = $("input[type=text][name=requestdate]").val();
    var requestfilename = $("input[type=text][name=requestfilename]").val();
    var requestfiletype = $("input[type=text][name=requestfiletype]").val();
    var requestuploadby = $("input[type=text][name=requestuploadby]").val();
    ViewProgressBar();
    window.location.href = encodeURI("./documents?code=" + code + "&name=" + name 
            + "&date=" + date + "&filename=" + requestfilename
            + "&filetype=" + requestfiletype + "&uploadby=" + requestuploadby
            );
});

$(".button-click-balancetransfer-merchant").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-balancetransfer-merchant").click();
    }
});
$('.btn-search-balancetransfer-merchant').click(function () {

    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    
    window.location.href = encodeURI("./balancetransfer?code=" + code + "&name="
            + name);
});

$('.btn-search-balancetransfer-history').click(function () {
    var date = $("input[type=text][name=date]").val();
    window.location.href = "./balancetransferhistory?date=" + date;
});
$(".button-click-balance-transfer-history").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-balancetransfer-history").click();
    }
});

$(".button-click-balancetransfersummary-history").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-balancetransfersummary-history").click();
    }
});
$('.btn-search-balancetransfersummary-history').click(function () {
     var id=$(this).data('id');
    var amount = $("input[type=number][name=requestamount]").val();
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var status = $("#requeststatus").val();
    window.location.href = encodeURI("./balancetransfersummary?code=" + code + "&name=" + name
            + "&id=" + id + "&amount=" + amount + "&status=" + status);
});

$(".button-click-merchant-view-summary").keyup(function(event) {
    
    if (event.keyCode === 13) {
        document.getElementById("btn-search-merchant-view-summary").click();
    }
});
$('.btn-search-merchant-view-summary').click(function () {

    var amount = $("input[type=number][name=requesttotalamount]").val();
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var businessname = $("input[type=text][name=requestbusinessname]").val();
    var numbertransactions =
            $("input[type=number][name=requestnoftransactions]").val();
    var numbertransactions = checkUndefined($("#requestnoftransactions").val());
    var email = $("input[type=text][name=requestemail]").val();
    var contactnumber = $("input[type=text][name=requestcontactno]").val();
    var category = $("#requestcategory").val();
    //Added by Anju on 14/08/2022
    //var datefrom = checkUndefined($("input[type=text][name=requestdatefrom]").val());
    //var dateto = checkUndefined($("input[type=text][name=requestdateto]").val());
    //Added By Asad 24/06/2022
    var size = $("#requestsize").val();
    
    if(numbertransactions > 9999){
        swal("No of transactions is invalid!", {button: false,});
    }else{
        window.location.href = encodeURI("./merchantreport?code=" + code + "&name=" + name + "&businessname=" + businessname
            + "&amount=" + amount + "&numbertransactions=" + numbertransactions
            + "&email=" + email
            + "&contactnumber=" + contactnumber + "&category=" + category + "&size="+size
            );
    }
    
});

$(".button-click-kyc-records").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-kyc-records").click();
    }
});
$('.btn-search-kyc-records').click(function () {
    var question = $("input[type=text][name=requestquestion]").val();
    var category = $("#requestcategory").val();
    window.location.href = encodeURI("./kyc?question=" + question + "&category="
            + category);
});

$(".button-click-gateway-owners").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-gateway-owners").click();
    }
});
$('.btn-search-gateway-owners').click(function () {

   var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var businessname = $("input[type=text][name=requestbusinessname]").val();
    var portalid =
            $("input[type=text][name=requestportalid]").val();
    var requestproductionresourcekey = $("input[type=number][name=requestproductionresourcekey]").val();
    var requestdevelopmentresourcekey = $("input[type=text][name=requestdevelopmentresourcekey]").val();
    //Added By Asad 24/06/2022
    var size = $("#requestsize").val();
   window.location.href = encodeURI("./gatewayowners?code=" + code + "&name=" + name + "&businessname=" + businessname
            + "&portalid=" + portalid + "&requestproductionresourcekey=" + requestproductionresourcekey
            + "&requestdevelopmentresourcekey=" + requestdevelopmentresourcekey + "&size="+size);
   
    
});

$(".button-click-merchantwindow").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-merchantwindow").click();
    }
});
$('.btn-search-merchantwindow').click(function () {

    var amount = $("input[type=number][name=requesttotalamount]").val();
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var businessname = $("input[type=text][name=requestbusinessname]").val();
//    var numbertransactions =
//            $("input[type=number][name=requestnoftransactions]").val();
    var numbertransactions = $("#requestnoftransactions").val();
    var commission = $("input[type=number][name=requestcommission]").val();
    var contactnumber = $("input[type=text][name=requestcontactno]").val();
    var category = $("#requestcategory").val();
    
    if(numbertransactions > 9999){
        swal("No of transactions is invalid!", {button: false,});
    }else{
        window.location.href = encodeURI("./merchantwindow?code=" + code + "&name=" + name + "&businessname=" + businessname
            + "&amount=" + amount + "&numbertransactions=" + numbertransactions
            + "&commissionamount=" + commission
            + "&contactnumber=" + contactnumber + "&category=" + category);
    }
    
});

$(".button-click-latest-merchants").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-latest-merchants").click();
    }
});
$('.btn-search-latest-merchants').click(function () {

    var amount = $("input[type=number][name=requesttotalamount]").val();
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var businessname = $("input[type=text][name=requestbusinessname]").val();
//    var numbertransactions =
//            $("input[type=number][name=requestnoftransactions]").val();
    var numbertransactions = $("#requestnoftransactions").val();
    var commission = $("input[type=number][name=requestcommission]").val();
    var contactnumber = $("input[type=text][name=requestcontactno]").val();
    var category = $("#requestcategory").val();
    var size = $("#requestsize").val();
    var datefrom = $("input[type=text][name=requestdatefrom]").val();
    var dateto = $("input[type=text][name=requestdateto]").val();
    
    if(numbertransactions > 9999){
        swal("No of transactions is invalid!", {button: false,});
    }else{
        window.location.href = encodeURI("./latestmerchants?code=" + code + "&name=" + name + "&businessname=" + businessname
            + "&amount=" + amount + "&numbertransactions=" + numbertransactions
            + "&commissionamount=" + commission
            + "&contactnumber=" + contactnumber + "&category=" + category + "&size="+size
            + "&datefrom="+datefrom+ "&dateto="+dateto);//Added by Anju on 09-08-2022
    }
    
});

$(".button-click-withdrawa-request-merchants").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-withdrawa-request-merchants").click();
    }
});
$('.btn-search-withdrawa-request-merchants').click(function () {

    var amount = $("input[type=number][name=requesttotalamount]").val();
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var businessname = $("input[type=text][name=requestbusinessname]").val();
//    var numbertransactions =
//            $("input[type=number][name=requestnoftransactions]").val();
    var numbertransactions = checkUndefined($("#requestnoftransactions").val());
    var commission = $("input[type=number][name=requestcommission]").val();
    var contactnumber = $("input[type=text][name=requestcontactno]").val();
    var category = 2;
    //Added by Anju on 14-08-2022
    var datefrom = checkUndefined($("input[type=text][name=requestdatefrom]").val());
    var dateto = $("input[type=text][name=requestdateto]").val();
    //Added By Asad 26/06/2022
    var size = $("#requestsize").val();
    if(numbertransactions > 9999){
        swal("No of transactions is invalid!", {button: false,});
    }else{
        window.location.href = encodeURI("./withdrawalrequestmerchants?code=" + code + "&name=" + name + "&businessname=" + businessname
            + "&amount=" + amount + "&numbertransactions=" + numbertransactions
            + "&commissionamount=" + commission
            + "&contactnumber=" + contactnumber + "&category=" + category + "&size="+size
             + "&datefrom="+datefrom+ "&dateto="+dateto);//Added by Anju on 14-08-2022
    }
    
});

$(".button-click-profile-update-merchants").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-profile-update-merchants").click();
    }
});
$('.btn-search-profile-update-merchants').click(function () {

    var amount = $("input[type=number][name=requesttotalamount]").val();
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var businessname = $("input[type=text][name=requestbusinessname]").val();
//    var numbertransactions =
//            $("input[type=number][name=requestnoftransactions]").val();
    var numbertransactions = checkUndefined($("#requestnoftransactions").val());
    var commission = $("input[type=number][name=requestcommission]").val();
    var contactnumber = $("input[type=text][name=requestcontactno]").val();
    var category = 1;
    //Added by Anju on 14-08-2022
    var datefrom = checkUndefined($("input[type=text][name=requestdatefrom]").val());
    var dateto = checkUndefined($("input[type=text][name=requestdateto]").val());
    //Added By Asad 24/06/2022
    var size = $("#requestsize").val();

    if(numbertransactions > 9999){
        swal("No of transactions is invalid!", {button: false,});
    }else{
        window.location.href = encodeURI("./profileupdatemerchants?code=" + code + "&name=" + name + "&businessname=" + businessname
            + "&amount=" + amount + "&numbertransactions=" + numbertransactions
            + "&commissionamount=" + commission
            + "&contactnumber=" + contactnumber + "&category=" + category + "&size="+size
            + "&datefrom="+datefrom+ "&dateto="+dateto);//Added by Anju on 14-08-2022
    }
    
});

$(".button-click-profile-and-withdrawal-request-merchants").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-profile-and-withrawal-update-merchants").click();
    }
});
$('.btn-search-profile-and-withrawal-update-merchants').click(function () {

    var amount = $("input[type=number][name=requesttotalamount]").val();
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var businessname = $("input[type=text][name=requestbusinessname]").val();
//    var numbertransactions =
//            $("input[type=number][name=requestnoftransactions]").val();
    var numbertransactions = checkUndefined($("#requestnoftransactions").val());
    var commission = $("input[type=number][name=requestcommission]").val();
    var contactnumber = $("input[type=text][name=requestcontactno]").val();
    var category = 3;
    //Added by Anju on 14-08-2022
    var datefrom = checkUndefined($("input[type=text][name=requestdatefrom]").val());
    var dateto = checkUndefined($("input[type=text][name=requestdateto]").val());
    //Added By Asad 24/06/2022
    var size = $("#requestsize").val();
    
    if(numbertransactions > 9999){
        swal("No of transactions is invalid!", {button: false,});
    }else{
        window.location.href = encodeURI("./profileupdatewithwithdrawalrequestmerchants?code=" + code + "&name=" + name + "&businessname=" + businessname
            + "&amount=" + amount + "&numbertransactions=" + numbertransactions
            + "&commissionamount=" + commission
            + "&contactnumber=" + contactnumber + "&category=" + category + "&size="+size
             + "&datefrom="+datefrom+ "&dateto="+dateto);//Added by Anju on 14-08-2022
    }
    
});

$('.btn-advance-search-merchants').click(function () {

    var amount = $("input[type=number][name=requesttotalamount]").val();
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var businessname = $("input[type=text][name=requestbusinessname]").val();
//    var numbertransactions =
//            $("input[type=number][name=requestnoftransactions]").val();
    var numbertransactions = checkUndefined($("#requestnoftransactions").val());
    var commission = $("input[type=number][name=requestcommission]").val();
    var contactnumber = $("input[type=text][name=requestcontactno]").val();
    var category = $("#requestcategory").val();
    //Added by Anju on 16-08-2022
    var datefrom = checkUndefined($("input[type=text][name=requestdatefrom]").val());
    var dateto = checkUndefined($("input[type=text][name=requestdateto]").val());
    //Added By Asad 24/06/2022
    var size = $("#requestsize").val();
    
    if(numbertransactions > 9999){
        swal("No of transactions is invalid!", {button: false,});
    }else{
        window.location.href = encodeURI("./merchants?code=" + code + "&name=" + name + "&businessname=" + businessname
            + "&amount=" + amount + "&numbertransactions=" + numbertransactions
            + "&commissionamount=" + commission
            + "&contactnumber=" + contactnumber + "&category=" + category + "&size="+size
            + "&datefrom="+datefrom+ "&dateto="+dateto);
    }

});

$(".button-click-systembalance").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-systembalance").click();
    }
});
$('.btn-search-systembalance').click(function () {
    var datefrom = $("input[type=text][name=requestdatefrom]").val();
    var dateto = $("input[type=text][name=requestdateto]").val();
    //Added By Asad 24/06/2022
    var size = $("#requestsize").val();
    
    window.location.href = encodeURI("./systembalance?datefrom=" + datefrom 
            + "&dateto=" + dateto + "&size="+size);
});


$('.btn-search-fee-free-merchant').click(function () {
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var businessname = $("input[type=text][name=requestbusinessname]").val();
    var status = $("#requeststatus").val();
    window.location.href = encodeURI("./feefreemerchant?code=" + code + "&name=" + name
            + "&businessname=" + businessname  + "&status=" + status);
});

$(".button-click-fee-free-merchant").keyup(function(event) {
    
    if (event.keyCode === 13) {
        document.getElementById("btn-search-fee-free-merchant").click();
    }
});

$(".button-click-rentals").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-rentals").click();
    }
});
$('.btn-search-rentals').click(function () {
    
    
    
    var status = $("#requeststatus").val();
    var amount = $("input[type=number][name=requestamount]").val();
    var datefrom = $("input[type=text][name=requestdatefrom]").val();
    var dateto = $("input[type=text][name=requestdateto]").val();
    var code = $("input[type=text][name=requestcode]").val();
    var name = $("input[type=text][name=requestname]").val();
    var customername = $("input[type=text][name=requestcustomername]").val();
    var customermobile = $("input[type=text][name=requestcustomermobile]").val();
    //Added By Asad 24/06/2022
    var size = $("#requestsize").val();
    
    window.location.href = encodeURI("./rentals?status=" + status+ "&amount=" + amount
            +"&code=" + code + "&name=" + name
            + "&datefrom=" + datefrom  + "&dateto=" + dateto  
            + "&customername=" + customername + "&customermobile=" + customermobile + "&size="+size);
});

$(".button-click-fee").keyup(function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn-search-fee").click();
    }
});
$('.btn-search-fee').click(function () {
    
     var status = $("#requeststatus").val();
    var amount = $("input[type=number][name=reqamount]").val();
    var datefrom = $("input[type=text][name=reqdatefrom]").val();
    var dateto = $("input[type=text][name=reqdateto]").val();
    var customername = $("input[type=text][name=reqname]").val();
    var size = $("#requestsize").val();
    window.location.href = encodeURI("./fee?status=" + status+ "&amount=" + amount
            + "&datefrom=" + datefrom
            + "&dateto=" + dateto
            + "&customername=" + customername + "&size="+size);
});

function checkUndefined(value) {
    if (typeof value === 'undefined') {
        return "";
    } else {
        return value;
    }
}