<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" >
    <head>
        <title>Payle graphs </title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">
<!--        <meta name="_csrf" th:content="${_csrf.token}" />
        <meta name="_csrf_header" th:content="${_csrf.headerName}" />-->
        <link rel="shortcut icon" href="img/favicon.jpg">
        
        <!-- CSS -->
        <link href="css/bootstrap.css" rel="stylesheet">
        <link href="css/bootstrap-datetimepicker.css" rel="stylesheet" media="screen">
        <link href="css/dataTables.bootstrap.css" rel="stylesheet"/>
        <link href="css/style.css" rel="stylesheet">
        <link href="css/fontello.css" rel="stylesheet"/>
        <link href="css/responsive.css" rel="stylesheet" type="text/css"/>
        <link rel="stylesheet" type="text/css" href="css/jquery-ui.css">
        <link href="css/jquery.tagit.css" rel="stylesheet">
        <link href="css/bootstrap-datepicker3.css" rel="stylesheet">
        <link href="css/bootstrap-datepicker3.min.css" rel="stylesheet">
        <link href="css/jquery.tagsinput.css" rel="stylesheet" type="text/css"/>
        <link href="css/tokenize2.min.css" rel="stylesheet">
        <script>
        /*<![CDATA[*/
            var mall_url = "http:\/\/sandmall.payleq8.com:3000\/admall?tky=";
            var mall_url_initialize = "https:\/\/sandbox.payleq8.com\/paylemall\/api\/mall\/auth\/initializeAdmin";
            /*]]>*/
        </script>
    <script src="js/ChartNew.js"></script>
    <script src="js/canvasjs.min.js"></script>
    <script>
            /*<![CDATA[*/
            var txtActiveMerchants = "Active merchants";
            var txtInActiveMerchants = "Inactive merchants";
            var txtBlacklistMerchants = "??text.blacklistmerchants_en??";
            var txtMerchantStatus = "Merchant status";
            
            var merchants = {"activeCount":42105,"inactiveCount":702,"blacklistCount":662};
            
            var txtKnetTransactions = "Knet Transactions";
            var txtVisamasterTransactions = "Visa Master Transactions";
            var txtAllTransaction = "All transaction";
            var txtNetProfit = "Net profit(KD)";
            var txtNetCash = "Net Cash(KD)";
             /*]]>*/
          </script>
    <!--<script src="js/graphs.js"></script>-->
    </head>
    <body onload="graphLoad()">
        <div id="wrapper">
            <div id="header">
                <div class="logo">
                    <img class="logo-img" src="img/logo-4.png"/>
                </div>
                <div class="dropdown dropdown-index">
                    <button class="btn  dropdown-toggle" type="button" id="menu1"
                            data-toggle="dropdown">
                        <span id="username_text">payleadmin</span> <span class="glyphicon glyphicon-cog"></span>
                        <input value="payleadmin" type="text" hidden="" id="username_text_dev">
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right dropdown-margin-top"
                        role="menu" aria-labelledby="menu1">
                        <li role="presentation"><a role="menuitem" tabindex="-1"
                            href="./changepassword">Change Password</a>
                        </li>
                        <li role="presentation"><a role="menuitem" tabindex="-1"
                            href="./updateprofile">Profile</a>
                        </li>
                        <li role="presentation"><a role="menuitem" tabindex="-1"
                            href="./logout">Logout</a>
                        </li>
                    </ul>
                </div>
                <span class="l-button-content">
            <a href="./graphs?lang=en" class="language-button-red">
                English</a>
            <a href="./graphs?lang=ar" 
               class="language-button-green">العربية</a>
        </span>
                <div>
                   <span class="glyphicon glyphicon-save-file shw_account" ></span>
                </div>
            </div>
            <div id="content">
            <div class="all-balance-div">
                <div class="all-balence-center">

                    <div class="yellow-tag-top ">
                        <span>Profit</span>
                        <label id='lbl_profit'> 00.00 KD</label>
                    </div>

                    <div class="yellow-tag-top">
                        <span>Earn</span><label id='lbl_merchenthave'> 00.00 KD</label>
                    </div>
                    <div class="yellow-tag-top">
                        <span>Request</span><label id='lbl_pendingwithdrawal'>00.00 KD</label>
                    </div>
                </div>
            </div>
            
            <div class="nav">
                <ul>
                    <li><a href="./latestmerchants"><span 
                                class="glyphicon glyphicon-retweet"></span>
                                <span>Merchants</span></a></li>
                    <li><a href="./transactions"><span
                                class="icon-banknotes"></span>
                                <span>Transactions</span></a></li>
                    <li><a href="./dailysummarys"><span
                                class="icon-banknotes"></span>
                                <span>Transaction Summary</span></a></li>
                    <li><a href="./incompletetransactions"><span
                                class="icon-banknotes"></span>
                                <span>Incomplete Transactions</span></a></li>
<!--                    <li><a th:href="@{./failedtransactions}"><span
                                class="icon-banknotes"></span>
                                <span th:utext="#{text.failedtransactionsummary}"></span></a></li>-->
                    <li><a href="./vmtransactions"><span
                                class="icon-banknotes"></span>
                                <span>Visa Master Transactions</span></a></li>
                    <li><a href="./incompletevmtransactions"><span
                                                   class="icon-banknotes"></span>
                                                   <span>Incomplete VM</span></a></li>
                    <li><a href="./completevmtransactions"><span
                                class="icon-banknotes"></span>
                                <span>Complete VM</span></a></li>
                    <li><a href="./wallettransactions"><span
                                class="icon-banknotes"></span>
                    <span>Payle wallet</span></a>
                    </li>
                    <li><a href="./amextransactions"><span
                                class="icon-banknotes"></span>
                    <span>Amex transactions</span></a>
                     </li>
                    <li><a href="./withdrawals"><span
                            class="glyphicon glyphicon-credit-card"></span>
                            <span>Withdrawals</span></a>
                    </li>
                   
                     <li><a href="./pendingwithdrawals"><span
                                class="glyphicon glyphicon-credit-card"></span>
                                <span>Pending withdrawals</span></a>
                    </li>
                      <li><a href="./rejectwithdrawals"><span
                                class="glyphicon glyphicon-credit-card"></span>
                                <span>Rejected withdrawals</span></a>
                    </li>
                    <li><a href="./debitCredit"><span class="glyphicon glyphicon-comment"></span>
                            <span>Debit/Credit</span></a></li>

                    <li><a href="./ftfAubkAndNonAubkSummarys"><span
                                class="glyphicon glyphicon-list-alt"></span>
                                <span>FTF Files</span>
                        </a></li>

                    <li><a href="./broadcastmessagereceivers"><span
                                class="glyphicon glyphicon-comment"></span>
                                <span>Message</span> </a></li>
                    <li><a href="./gallery"><span
                                class="glyphicon glyphicon-picture"></span>
                                <span>Gallery</span> </a></li>
                    <li><a href="./graphs"><span
                                class="glyphicon glyphicon-signal"></span>
                                <span>Graphs</span> </a></li>

                    <li><a href="./settings"><span
                                class="glyphicon glyphicon-cog"></span>
                                <span>Settings</span></a></li>
                    <li><a href="./invoices"><span
                                class="glyphicon glyphicon-cog"></span>
                                <span>Invoice</span></a></li>

                    <li><a href="./merchantreport"><span
                                class="glyphicon glyphicon-cog"></span>
                                <span>Report</span></a></li>            

                     
                    <li><a href="#" id="btn-goto-mall"><span 
                                class="glyphicon glyphicon-cog"></span>
                                <span>Mall</span></a></li>            
                    <li><a href="./gatewayowners" ><span 
                                class="glyphicon glyphicon-cog"></span>
                                <span>gateway owners</span></a></li>  
                    <li><a href="./systembalance" ><span 
                                class="glyphicon glyphicon-cog"></span>
                                <span>System balance</span></a></li> 
                    <li><a href="./rentals"><span
                                class="glyphicon glyphicon-cog"></span>
                                <span>Rental</span></a></li>

                    <li><a href="./pendingbankcertificates"><span
                                class="glyphicon glyphicon-list-alt"></span>
                                <span>Bank Certificates</span></a></li>
                    
                   
                </ul>
            </div>
            <div class="body-header">
            <div id="breadcrumb"><a href="./merchants">Home</a> 
                &gt;  <span>Graphs</span></div>
        </div>
            <div class="clearfix"></div><br/>
            <div></div>
            <div></div>
            <div></div>
           
            <div>
            <div class="heading-line2">
                <label>Graphs</label>
                <div class="clearfix"></div>
            </div>
            
            <!--    search here-->
            <div class="">
                <div class="searchbox set-6">
                    <div class="form-group">
                        <input class="form-control datepicker-input" type="text"
                               name="requestdatefrom" 
                               value=""
                               placeholder="Date">
                    </div>
                    <div class="row">
                        <lable  class="validation" id="datepickerg1v" style="color: red;"></lable>
                    </div>
                </div>
                <div class="searchbox set-6">
                    <div class="form-group ">
                        <input class="form-control datepicker-input"  type="text"
                               name="requestdateto" 
                               value=""
                               placeholder="To Date">
                    </div>
                    <div class="row">
                        <lable  class="validation" id="datepickerg2v" style="color: red;"></lable>
                    </div>
                </div>
                
                 <div class="searchbox-1">
                    <button class="btn btn-success btn-right-controle btn-search-systemclearance">
                        <span class="glyphicon glyphicon-refresh"></span><span>Search</span>
                    </button>
                </div>
            </div>
    <!--    search end-->
    
            <div class="clearfix"></div>
<br />

<!--    grid view here-->
        <div class="card-body " style="padding: 25px; padding-left:290px ">
                <div class="row">
                    <div class="col-lg-10">
                        <div  id="chart-legend"></div>
                        <canvas id="data-chart" width="800" height="500"></canvas>
                    </div>
                </div>
            </div> 
            <div id="knet"  class="card-body " style="padding: 5px ;padding-left:278px ">
                <div class="col-lg-10">
                    <div  id="chart-legend1"></div>
                    <canvas id="data-chart2" width="800" height="500"></canvas>
                </div>
            </div>
            <div id="vm" class="card-body " style="padding: 5px; padding-left:292px ">
                <div class="row">
                    <div class="col-lg-10">
                        <div  id="chart-legend2"></div>
                        <canvas id="data-chart3" width="800" height="500"></canvas>
                    </div>
                </div>
            </div>

            <div id="all" class="card-body " style="padding: 5px; padding-left:290px ">
                <div class="row">
                    <div class="col-lg-10">
                        <div  id="chart-legend3"></div>
                        <canvas id="data-chart4" width="800" height="500"></canvas>
                    </div>
                </div>
            </div>
            <div id="profit" class="card-body " style="padding: 5px; padding-left:290px ">
                <div class="row">
                    <div class="col-lg-10">
                        <div  id="chart-legend4"></div>
                        <canvas id="data-chart5" width="800" height="500"></canvas>
                    </div>
                </div>
            </div>
            <div id="cash" class="card-body " style="padding: 5px; padding-left:290px ">
                <div class="row">
                    <div class="col-lg-10">
                        <div  id="chart-legend5"></div>
                        <canvas id="data-chart6" width="800" height="500"></canvas>
                    </div>

                </div>
            </div>
<!--    grid view end-->
        </div>
            <div class="modal fade" id="model_comment" tabindex="-1" 
                 role="dialog"
             aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal"
                                    aria-label="Close"><span aria-hidden="true">
                                    &times;</span></button>
                            <h4 class="modal-title" id="myModalLabel">Comments</h4>
                        </div>
                         <div class="m-row">
                            <div class="m-col">
                              <div class="m-data" id='comment_data'></div>
                            </div>
                        </div>
                        
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default"
                                    data-dismiss="modal">Close</button>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="model_transaction" tabindex="-1" 
                 role="dialog"
             aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal"
                                    aria-label="Close"><span aria-hidden="true">
                                    &times;</span></button>
<!--                            <h4 class="modal-title" id="myModalLabel"
                                th:utext="#{text.managesuccesstransaction}">
                                Manage success transaction</h4>-->
                            <h4 class="modal-title" id="lblTransactionTitle">
                                Manage success transaction</h4>
                        </div>
                        <div class="modal-body">   
                            <div class="row" style="margin-bottom: 10px;"><br />
                                <div class="col-sm-12">

                                     <div class="lable-list">
                                     <div class="row">
                                         <div class="col-md-6">
                                         <label><div>Name:-</div><span id="txtName"></span></label>
                                         <label><div id="lblTextDate"></div> <span id="txtReversDate"></span></label>
                                         <!--<label id="lblTextDate">:- <span id="txtReversDate"></span></label>-->
                                         <label><span id="txtReversDate"></span></label>
                                         <label><div>Buyer ip:-</div> <span id="txtBuyerIp"></span></label>
                                         <label><div>Card type:-</div> <span id="txtCardType"></span></label>
                                         <label><div>Amount:-</div>  <span id="txtAmount"></span></label>
                                         <label><div>Full amount:-</div> <span id="txtFinalAmount"></span></label>
                                         </div>
                                         <div class="col-md-6">
                                         <label><div>Date:-</div> <span id="txtDate"></span></label>
                                         <label><div>Merchant code:-</div> <span id="txtMerchantCode"></span></label>
                                         <label><div>Status:-</div> <span id="txtStatus"></span></label>
                                         <label><div>Buyer:-</div> <span id="txtBuyer"></span></label>
                                         <label><div>Earn:-</div> <span id="txtEarn"></span></label>
                                         <label><div>Transaction Key:-</div> <span id="txtTransactionKey"></span></label>
                                         </div>
                                     </div>
                                    </div>
                                    <div class="form-group">
                                        <label><div>Comments:-</div>
                                        <span id="txtComments"></span></label>
                                    </div>
                                </div>
                            </div>





                            </div>
<!--                         <div class="m-row">
                            <div class="m-col">
                              <div class="m-data" id='trans_data'></div>
                            </div>
                        </div>-->
                        
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default"
                                    data-dismiss="modal">Close</button>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="model-reason" 
                 tabindex="-1" role="dialog" 
                 aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content"> 
                    <div class="modal-header">
                        <label>Reason</label>   
                        <button type="button" class="close" data-dismiss="modal">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Close</span>
                        </button>
                    </div>
                    <div class="modal-body">   
                        <div class="row" style="margin-bottom: 10px;"><br />
                        <div class="col-sm-12">
                            <div class="form-group">
                                <label>Comments</label>
                                :- <span id="reason_comment"/>
                            </div>
                            <div class="form-group">
                                <label>Reason</label> :- 
                                <span id="reason_responsecomment"/>
                             </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div class="modal fade" id="by-url-model" 
                 role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content"></div>
                </div>
            </div>
            <div class="modal fade" id="by-url-model-update-profile" 
                 role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content"></div>
                </div>
            </div>
            <div class="modal fade" id="by-url-model-withdrawal-reject" 
                 role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content"></div>
                </div>
            </div>
            <div class="modal fade" id="by-url-model-bank-certificate-reject" 
                 role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content"></div>
                </div>
            </div>
            
            <div class="modal fade" id="by-url-model-blacklist-confirm" 
                 role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content"></div>
                </div>
            </div>
            <div class="modal fade" id="by-url-model-kyc-questions" 
                 role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content"></div>
                </div>
            </div>
            
            <div class="modal fade" id="model_infor" tabindex="-1" 
                 role="dialog"
             aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal"
                                    aria-label="Close"><span aria-hidden="true">
                                    &times;</span></button>
                            <h4 class="modal-title" id="modal_infor_title">
                                header here</h4>
                        </div>
                        <div class="modal-body">  
                             <div class="row" style="margin-bottom: 10px;"><br />
                                <div class="col-sm-12 " id="modal_infor_content" >
                              
                                </div>
                             </div>    
                        </div>
                        <div class="clearfix"></div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default"
                                    data-dismiss="modal">Close</button>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="pop4" role="dialog" 
                 aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog  modal-md">
                    <div class="modal-content">
                        <img id="m_img" width="100%"/>
                    </div>
                </div>
            </div>
            
            <div class="modal fade" id="embedURLPOP" role="dialog" 
                 aria-labelledby="myModalLabel" aria-hidden="true">
                
                <div class="modal-dialog  modal-md">
                    <div class="modal-content" style="padding:10px;">
                        <div class="form-group col-md-6">
                        <label for="bank-certificate-popup-merchant-name-popup" value="name">Name</label>
                        <input readonly="readonly" class="form-control" id="bank-certificate-popup-merchant-name-popup">
                        </input>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="bank-certificate-popup-merchant-iban-popup" value="iban">IBAN</label>
                        <input readonly="readonly" class="form-control" id="bank-certificate-popup-merchant-iban-popup">
                        </input>
                        </div>
                        <embed id="m_embed" width="100%" height="600" />
                    </div>
                </div>
            </div>
            
            <div class="modal fade" id="model_broadcastmessage" tabindex="-1" 
                 role="dialog"
             aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal"
                                    aria-label="Close"><span aria-hidden="true">
                                    &times;</span></button>
                            <h4 class="modal-title" id="myModalLabel">Message</h4>
                        </div>
                         <div class="m-row">
                            <div class="m-col">
                              <div class="m-data" id='broadcastmessage_data'></div>
                            </div>
                        </div>
                        
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default"
                                    data-dismiss="modal">Close</button>
                           
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <footer class="footer">
                &copy; All rights reserved.
            </footer>
            
            
        </div>
        <!-- Bootstrap core JavaScript
        ================================================== -->
        <script src="js/jquery-2.1.1.min.js"></script>
        <script src="js/jquery.tagsinput.js" type="text/javascript"></script>
        
        <script src ="js/jquery-dateformat.min.js"></script>
        <script src="js/jquery.dataTables.min.js"></script>
        <script src="js/ui_1.11.4_jquery-ui.min.js"></script>
        <script src="js/prograssbar.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/dataTables.bootstrap.js"></script>
        <script src="js/dropdown.js"></script>
        <script src="js/modal.js"></script>
        <script src="js/tag-it.min.js"></script>
        <script src="js/bootstrap-datepicker.min.js"></script>
        <script src="js/axios.min.js"></script>
        <script src="js/sweetalert.min.js"></script> 
        <script src="js/main.js"></script>
        <script src="js/balance.js"></script>
        <script src="js/print.js"></script>
        <script src="js/search.js"></script>
        <script src="js/mail.js"></script>
        <script src="js/model-helper.js"></script>
        <script src="js/confirmation.js"></script>
        <script src="js/graphs.js"></script>
        <script src="js/submit.js"></script>
        <script src="js/bodycontentload.js"></script>
        <script src="js/tokenize2.min.js"></script>
        <script src="js/tag.js"></script>
        <script>
            $('.dropdown-toggle').dropdown();
        </script>
        
        <script> InitProgressBar();</script>
</body>
</html>
