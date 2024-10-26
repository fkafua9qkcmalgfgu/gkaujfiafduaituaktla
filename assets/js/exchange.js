$(function(){
    $(".btn_gift_submit").on("click", function(e){
        $(this).attr('disabled', true);
        //입금정보처리
        if(!$("input[name='bank_save']").is(":checked")){
            Cookies.set('acnt_no', '');
            Cookies.set('user_name', '');
            Cookies.set('user_tel', '');
            Cookies.set('bank_code', '');
        }
        var isBreak = false;
        switch($("input[name='order_type']").val()){
            case "CULTURELAND":
                $("input[name='pin_no[]']").each(function(index, item){
                    var pinLength = $(item).val().replace(/[^0-9]/g, "").length;
                    if((pinLength < 16 && pinLength > 0)){
                        sweetAlert("교환신청", "핀번호를 정확히 입력해주세요.", "error");
                        isBreak = true;
                        return false;
                    }
                });
                break;
            case "CULTURELAND_VOUCHER":
                $("input[name='pin_no[]']").each(function(index, item){
                    var pinLength = $(item).val().replace(/[^0-9a-zA-Z]/g, "").length;
                    var pinPrefix = $(item).val().replace(/[^0-9]/g, "").substring(0, 4);

                    console.log(pinLength);
                    if ((pinLength != 12 && pinLength != 13) && pinLength > 0) {
                        console.log(pinLength);
                        sweetAlert("교환신청", "핀번호를 정확히 입력해주세요.", "error");
                        isBreak = true;
                        return false;
                    } else if (pinPrefix === "3110" || pinPrefix === "4180") {
                        sweetAlert("교환신청", "해당 핀번호는 컬쳐랜드 상품권입니다.", "info");
                        isBreak = true;
                        return false;
                    }
                });
                break;
            case "GOOGLE_GIFTCARD_VOUCHER":
            case "HAPPYMONEY_VOUCHER":
                $("input[name='pin_no[]']").each(function(index, item){
                    var pinLength = $(item).val().replace(/[^0-9a-zA-Z]/g, "").length;
                    console.log(pinLength);
                    if ((pinLength != 12 && pinLength != 13) && pinLength > 0) {
                        console.log(pinLength);
                        sweetAlert("교환신청", "핀번호를 정확히 입력해주세요.", "error");
                        isBreak = true;
                        return false;
                    }
                });
                break;
            case "NANURI":
                $("input[name='pin_no[]']").each(function(index, item){
                    var pinLength = $(item).val().replace(/[^0-9a-zA-Z]/g, "").length;
                    if((pinLength < 20 && pinLength > 0)){
                        sweetAlert("교환신청", "핀번호를 정확히 입력해주세요.", "error");
                        isBreak = true;
                        return false;
                    }
                });
                break;
            case "HAPPYMONEY":
                $("input[name='pin_no[]']").each(function(index, item){
                    var pinLength = $(item).val().replace(/[^0-9]/g, "").length;
                    var pinCertLength = $('input[name="pin_cert[]"').eq(index).val().replace(/[^0-9]/g, "").length
                    if((pinLength < 16 && pinLength > 0)){
                        sweetAlert("교환신청", "핀번호를 정확히 입력해주세요.", "error");
                        isBreak = true;
                        return false;
                    }
                    if((pinLength == 16 && !dateValidation($('input[name="pin_cert[]"').eq(index).val().replace(/[^0-9]/g, "")))){
                        sweetAlert("교환신청", "발행일/인증번호를 정확히 입력해주세요.", "error");
                        isBreak = true;
                        return false;
                    }
                });
                break;
            case "HANDURE":
                $("input[name='pin_no[]']").each(function(index, item){
                    var pinLength = $(item).val().replace(/[^0-9a-zA-Z]/g, "").length;
                    var pinCertLength = $('input[name="pin_cert[]"').eq(index).val().replace(/[^0-9]/g, "").length
                    console.log(pinCertLength);
                    if((pinLength < 15 && pinLength > 0)){
                        sweetAlert("교환신청", "교환권 번호를 정확히 입력해주세요.", "error");
                        isBreak = true;
                        return false;
                    }
                    if((pinLength == 15 && pinCertLength != 4)){
                        sweetAlert("교환신청", "인증번호를 정확히 입력해주세요.", "error");
                        isBreak = true;

                        return false;
                    }
                });
                break;
            case "BAROBIZ":
                $("input[name='pin_no[]']").each(function(index, item){
                    var pinLength = $(item).val().replace(/[^0-9a-zA-Z]/g, "").length;
                    var pinCertLength = $('input[name="pin_cert[]"').eq(index).val().replace(/[^0-9]/g, "").length
                    console.log(pinCertLength);
                    if((pinLength < 15 && pinLength > 0)){
                        sweetAlert("교환신청", "교환권 번호를 정확히 입력해주세요.", "error");
                        isBreak = true;
                        return false;
                    }
                    if((pinLength == 15 && pinCertLength != 4)){
                        sweetAlert("교환신청", "인증번호를 정확히 입력해주세요.", "error");
                        isBreak = true;

                        return false;
                    }
                });
                break;
            case "BAROSHOP":
                $("input[name='pin_no[]']").each(function(index, item){
                    var pinLength = $(item).val().replace(/[^0-9a-zA-Z]/g, "").length;
                    var pinCertLength = $('input[name="pin_cert[]"').eq(index).val().replace(/[^0-9]/g, "").length
                    console.log(pinCertLength);
                    if((pinLength < 15 && pinLength > 0)){
                        sweetAlert("교환신청", "교환권 번호를 정확히 입력해주세요.", "error");
                        isBreak = true;
                        return false;
                    }
                    if((pinLength == 15 && pinCertLength != 4)){
                        sweetAlert("교환신청", "인증번호를 정확히 입력해주세요.", "error");
                        isBreak = true;

                        return false;
                    }
                });
                break;
            case "SANDAMALL":
                $("input[name='pin_no[]']").each(function(index, item){
                    var pinLength = $(item).val().replace(/[^0-9a-zA-Z]/g, "").length;
                    var pinCertLength = $('input[name="pin_cert[]"').eq(index).val().replace(/[^0-9]/g, "").length
                    console.log(pinCertLength);
                    if((pinLength < 15 && pinLength > 0)){
                        sweetAlert("교환신청", "교환권 번호를 정확히 입력해주세요.", "error");
                        isBreak = true;
                        return false;
                    }
                    if((pinLength == 15 && pinCertLength != 4)){
                        sweetAlert("교환신청", "인증번호를 정확히 입력해주세요.", "error");
                        isBreak = true;

                        return false;
                    }
                });
                break;
            case "BIKERUN":
                $("input[name='pin_no[]']").each(function(index, item){
                    var pinLength = $(item).val().replace(/[^0-9a-zA-Z]/g, "").length;
                    var pinCertLength = $('input[name="pin_cert[]"').eq(index).val().replace(/[^0-9]/g, "").length
                    console.log(pinCertLength);
                    if((pinLength < 15 && pinLength > 0)){
                        sweetAlert("교환신청", "교환권 번호를 정확히 입력해주세요.", "error");
                        isBreak = true;
                        return false;
                    }
                    if((pinLength == 15 && pinCertLength != 4)){
                        sweetAlert("교환신청", "인증번호를 정확히 입력해주세요.", "error");
                        isBreak = true;

                        return false;
                    }
                });
                break;
        }
        if(isBreak){
            $(this).attr('disabled', false);
            return false;
        }
        var formData = $("form[name='order_form'] :input,select")
        .filter(function(index, element) {
            return $(element).val() != '';
        })
        .serialize();
        $.ajax({
            type: 'POST',
            url: '/orders/create',
            data: formData,
            success: function(res) {
                swal({
                    title: "교환신청이 접수되었습니다.",
                    text: "내 교환내역에서 진행상황을 확인해보세요.",
                    type: "success",
                }, function() {
                    
                    location.href='/orders/' + res.order_id + '?tel=' + $("input[name='user_tel'").val();
                });
            },
            error:function(request,status,error){
                $(".btn_gift_submit").attr('disabled', false);
                switch(request.status){
                    case 401:
                        swal({
                            title: "교환신청",
                            html: true,
                            text: "신규고객님은 최초 1회 본인인증 이후 교환신청이 가능합니다.<br>연락처가 변경되신경우 본인인증을 다시 진행하셔야합니다.",
                            type: "warning",
                            confirmButtonText: "본인인증"
                        }, function() {
                            showAuthPopup();
                        });
                        break;
                    default:
                        sweetAlert("교환신청", request.responseJSON.messages.error, "error");
                        break;
                }
            }
        });

    });
    //입금정보 입력
    $("input[name='acnt_no']").val(Cookies.get('acnt_no'));
    $("input[name='user_name']").val(Cookies.get('user_name'));
    $("input[name='user_tel']").val(Cookies.get('user_tel'));
    $("select[name='bank_code']").val(Cookies.get('bank_code'));

    if($("input[name='bank_save']").is(":checked")){
        $("input[name='acnt_no']").on("change", function(){
            Cookies.set("acnt_no", $(this).val());
        });
        $("input[name='user_name']").on("change", function(){
            Cookies.set("user_name", $(this).val());
        });
        $("input[name='user_tel']").on("change", function(){
            Cookies.set("user_tel", $(this).val());
        });
        $("select[name='bank_code']").on("change", function(){
            Cookies.set("bank_code", $("#bank_code option:selected").val());
        });
    }
    $("input[name='bank_save']").on("change", function(){
        if(!$(this).is(":checked")){
            Cookies.set('acnt_no', '');
            Cookies.set('user_name', '');
            Cookies.set('user_tel', '');
            Cookies.set('bank_code', '');
        }
    });

    //초기 입력폼 셋팅
    $("ul.tabs li:first-child a").show().addClass("on");
    $("ul.tabs li a").click(function () {
        initOrderForm($(this).attr("rel"));
        $("ul.tabs li a").removeClass("on");
        $(this).addClass("on");
        $(".tab_content").hide().removeClass("on");
        $(".tab_content").fadeIn(200, function() {
            $(this).addClass("on");
        });
    });
    $("ul.tabs li a").each(function(id, item){
        if($(item).hasClass("on")){
            $(item).click();
        }
    });
    // 핀번호 추가
    $("#btn_add").on('click', function(){
        addPinNo(makePinNoTag());
    });
    // 핀번호 추출 
    $('#btn_gift_auto').on('click', function(){
        var textArea = $("#regexTextArea").val().replace(/ /g, '');
        var pinNoArray = [];
        switch($("input[name='order_type']").val()){
            case "CULTURELAND":
                pinNoArray = textArea.match(/([0-9]{16,18})|([0-9]{4})-([0-9]{4})-([0-9]{4})-([0-9]{4,6})|([0-9]{4})\s([0-9]{4})\s([0-9]{4})\s([0-9]{4,6})/g);
                break;
            case "CULTURELAND_VOUCHER":
                pinNoArray = textArea.match(/([0-9]{12,13})|([0-9]{4})-([0-9]{4})-([0-9]{4,5})|([0-9]{4})\s([0-9]{4})\s([0-9]{4,5})/g);
                break;
            case "GOOGLE_GIFTCARD_VOUCHER":
                pinNoArray = textArea.match(/([a-zA-Z0-9]{12})|([a-zA-Z0-9]{4})-([a-zA-Z0-9]{4})-([a-zA-Z0-9]{4})|([a-zA-Z0-9]{4})\s([a-zA-Z0-9]{4})\s([a-zA-Z0-9]{4})/g);
                break;
            case "HAPPYMONEY_VOUCHER":
                pinNoArray = textArea.match(/([0-9]{12,13})|([0-9]{4})-([0-9]{4})-([0-9]{4})|([0-9]{4,5})\s([0-9]{4})\s([0-9]{4,5})/g);
                break;
            case "NANURI":
                pinNoArray = textArea.match(/([a-zA-Z0-9]{20})|([0-9]{5})-([0-9]{5})-([0-9]{5})-([0-9]{5})|([0-9]{5})\s([0-9]{5})\s([0-9]{5})\s([0-9]{5})/g);
                break;
            case "HAPPYMONEY":
                pinNoArray = textArea.match(/([0-9]{16})[_/]([0-9]{8})|([0-9]{16})[-/]([0-9]{8})|([0-9]{4})-([0-9]{4})-([0-9]{4})-([0-9]{4})[_/]([0-9]{8})|([0-9]{4})-([0-9]{4})-([0-9]{4})-([0-9]{4})[-/]([0-9]{8})|([0-9]{4})\s([0-9]{4})\s([0-9]{4})\s([0-9]{4})[_/]([0-9]{8})/g);
                break;
            case "HANDURE":
                var CP = $("#regexTextArea").val().match(/[A-Z0-9]{15}/gm);
                var CA = $("#regexTextArea").val().match(/^.*인증번호: .{4}/gm);
                if(CA){
                    CA = CA[0].match(/[0-9]{4}/gm);
                    // pinNoArray.push('${CP}-${CA}');
                    pinNoArray.push(CP+'-'+CA);
                }
            case "BAROBIZ":
                var CP = $("#regexTextArea").val().match(/[A-Z0-9]{15}/gm);
                var CA = $("#regexTextArea").val().match(/^.*인증번호: .{4}/gm);
                if(CA){
                    CA = CA[0].match(/[0-9]{4}/gm);
                    // pinNoArray.push('${CP}-${CA}');
                    pinNoArray.push(CP+'-'+CA);
                }
                break;
            case "BAROSHOP":
                var CP = $("#regexTextArea").val().match(/[A-Z0-9]{15}/gm);
                var CA = $("#regexTextArea").val().match(/^.*인증번호: .{4}/gm);
                if(CA){
                    CA = CA[0].match(/[0-9]{4}/gm);
                    // pinNoArray.push('${CP}-${CA}');
                    pinNoArray.push(CP+'-'+CA);
                }
                break;
            case "SANDAMALL":
                var CP = $("#regexTextArea").val().match(/[A-Z0-9]{15}/gm);
                var CA = $("#regexTextArea").val().match(/^.*인증번호: .{4}/gm);
                if(CA){
                    CA = CA[0].match(/[0-9]{4}/gm);
                    // pinNoArray.push('${CP}-${CA}');
                    pinNoArray.push(CP+'-'+CA);
                }
                break;
            case "BIKERUN":
                var CP = $("#regexTextArea").val().match(/[A-Z0-9]{15}/gm);
                var CA = $("#regexTextArea").val().match(/^.*인증번호: .{4}/gm);
                if(CA){
                    CA = CA[0].match(/[0-9]{4}/gm);
                    // pinNoArray.push('${CP}-${CA}');
                    pinNoArray.push(CP+'-'+CA);
                }
                break;
        }

        if(!Array.isArray(pinNoArray) || pinNoArray.length == 0){
            sweetAlert("핀번호 추출", "추출할 내용이 없습니다.", "error");
            $("#regexTextArea").focus();
        }else{
            $("#regexTextArea").val("");
            $("#gift_body > .gift_row").remove();
            var tag = '';
            pinNoArray.forEach(function(item){
                item = item.toString();

                switch($("input[name='order_type']").val()){
                    case "CULTURELAND":
                        item = item.replace(/[^0-9]/g, "");
                        tag += makePinNoTag(item);
                        break;
                    case "CULTURELAND_VOUCHER":
                        item = item.replace(/[^0-9]/g, "");
                        tag += makePinNoTag(item);
                        break;
                    case "GOOGLE_GIFTCARD_VOUCHER":
                        item = item.replace(/[^0-9a-zA-Z]/g, "");
                        tag += makePinNoTag(item);
                        break;
                    case "HAPPYMONEY_VOUCHER":
                        item = item.replace(/[^0-9]/g, "");
                        tag += makePinNoTag(item);
                        break;
                    case "NANURI":
                        item = item.replace(/[^0-9a-zA-Z]/g, "");
                        tag += makePinNoTag(item);
                        break;
                    case "HAPPYMONEY":
                        item = item.replace(/[^0-9]/g, "");
                        tag += makePinNoTag(item.substring(0,16), item.substring(16,24));
                        break;
                    case "HANDURE":
                        item = item.replace(/[^0-9a-zA-Z]/g, "");
                        tag += makePinNoTag(item.substring(0,15), item.substring(15,29));
                        break;
                    case "BAROBIZ":
                        item = item.replace(/[^0-9a-zA-Z]/g, "");
                        tag += makePinNoTag(item.substring(0,15), item.substring(15,29));
                        break;
                    case "BAROSHOP":
                        item = item.replace(/[^0-9a-zA-Z]/g, "");
                        tag += makePinNoTag(item.substring(0,15), item.substring(15,29));
                        break;
                    case "SANDAMALL":
                        item = item.replace(/[^0-9a-zA-Z]/g, "");
                        tag += makePinNoTag(item.substring(0,15), item.substring(15,29));
                        break;
                    case "BIKERUN":
                        item = item.replace(/[^0-9a-zA-Z]/g, "");
                        tag += makePinNoTag(item.substring(0,15), item.substring(15,29));
                        break;
                }
                
            });
            addPinNo(tag);
        }
    });
    //App bridge start
    function setAuthInfo(ct, mn, mh, mb, cn){
		$("input[name='user_name']").val(mn);
		$("input[name='user_tel']").val(mh);
        $(".btn_gift_submit").click();
	}
    //App bridge end
    function showAuthPopup(){
        var popupWindow = window.open( "/okname/popup", "auth_popup", "left=200, top=100, width=430, height=590, scrollbar=yes" );
        popupWindow.focus();
        return;
    }
    function initOrderForm(orderType){
        $("#regexTextArea").val("");
        $("#gift_body > .gift_row").remove();
        $("input[name='order_type']").val(orderType);
        $("#btn_add").show();
        var tag = '';
        switch(orderType){
            case "CULTURELAND":
                $(".giftcard_rate").text(100 - parseInt($("#cultureland_rate").val()) + "%");
                $("#regexTextArea").attr("placeholder", "ex)\n1234-1234-1234-1234\n1234123412341234");
                for (var i = 0; i < 5; i++) tag += makePinNoTag();
                addPinNo(tag);
                break;
            case "CULTURELAND_VOUCHER":
                $(".giftcard_rate").text(100 - parseInt($("#cultureland_voucher_rate").val()) + "%");
                $("#regexTextArea").attr("placeholder", "ex)\n1234-1234-1234\n123412341234");
                for (var i = 0; i < 5; i++) tag += makePinNoTag();
                addPinNo(tag);
                break;
            case "GOOGLE_GIFTCARD_VOUCHER":
                $(".giftcard_rate").text(100 - parseInt($("#google_giftcard_voucher_rate").val()) + "%");
                $("#regexTextArea").attr("placeholder", "ex)\n1234-1234-1234\n123412341234");
                for (var i = 0; i < 5; i++) tag += makePinNoTag();
                addPinNo(tag);
                break;
            case "HAPPYMONEY_VOUCHER":
                $(".giftcard_rate").text(100 - parseInt($("#happymoney_voucher_rate").val()) + "%");
                $("#regexTextArea").attr("placeholder", "ex)\n1234-1234-1234\n123412341234");
                for (var i = 0; i < 5; i++) tag += makePinNoTag();
                addPinNo(tag);
                break;
            case "NANURI":
                $(".giftcard_rate").text(100 - parseInt($("#nanuri_rate").val()) + "%");
                $("#regexTextArea").attr("placeholder", "ex)\n12345-12345-12345-12345\n12345123451234512345");
                for (var i = 0; i < 5; i++) tag += makePinNoTag();
                addPinNo(tag);
                break;
            case "HAPPYMONEY":
                $(".giftcard_rate").text(100 - parseInt($("#happymoney_rate").val()) + "%");
                $("#regexTextArea").attr("placeholder", "ex)\n1234-1234-1234-1234_20190101\n1234-1234-1234-1234-20190101\n1234123412341234_20190101\n1234-1234-1234-1234/20190101\n1234123412341234/20190101\n");
                for (var i = 0; i < 5; i++) tag += makePinNoTag();
                addPinNo(tag);
                break;
            case "HANDURE":
                $(".giftcard_rate").text(100 - parseInt($("#handure_rate").val()) + "%");
                $("#regexTextArea").attr("placeholder", "ex)\n문자로 받으신 내용을 복사하여 붙여넣어 주세요.");
                $("#btn_add").hide();
                for (var i = 0; i < 1; i++) tag += makePinNoTag();
                addPinNo(tag);
                break;
            case "BAROBIZ":
                $(".giftcard_rate").text(100 - parseInt($("#barobiz_rate").val()) + "%");
                $("#regexTextArea").attr("placeholder", "ex)\n문자로 받으신 내용을 복사하여 붙여넣어 주세요.");
                $("#btn_add").hide();
                for (var i = 0; i < 1; i++) tag += makePinNoTag();
                addPinNo(tag);
                break;
            case "BAROSHOP":
                $(".giftcard_rate").text(100 - parseInt($("#baroshop_rate").val()) + "%");
                $("#regexTextArea").attr("placeholder", "ex)\n문자로 받으신 내용을 복사하여 붙여넣어 주세요.");
                $("#btn_add").hide();
                for (var i = 0; i < 1; i++) tag += makePinNoTag();
                addPinNo(tag);
                break;
            case "SANDAMALL":
                $(".giftcard_rate").text(100 - $("#sandamall_rate").val() + "%");
                $("#regexTextArea").attr("placeholder", "ex)\n문자로 받으신 내용을 복사하여 붙여넣어 주세요.");
                $("#btn_add").hide();
                for (var i = 0; i < 1; i++) tag += makePinNoTag();
                addPinNo(tag);
                break;
            case "BIKERUN":
                $(".giftcard_rate").text(100 - parseInt($("#bikerun_rate").val()) + "%");
                $("#regexTextArea").attr("placeholder", "ex)\n문자로 받으신 내용을 복사하여 붙여넣어 주세요.");
                $("#btn_add").hide();
                for (var i = 0; i < 1; i++) tag += makePinNoTag();
                addPinNo(tag);
                break;
            default:
                $("#regexTextArea").attr("placeholder", "");
                break;
        }
    }
    function makePinNoTag(pinNo, pinCert){
        if(!pinNo) pinNo = '';
        if(!pinCert) pinCert = '';
        var addPinNo = '';
        addPinNo += '<li class="gift_row">';
        addPinNo += '    <div class="input_type1">';
        addPinNo += '        <span class="num">1</span>';
        addPinNo += '        <p>';
    
        switch($("input[name='order_type']").val()){
            case "CULTURELAND":
                addPinNo += '<input type="tel" name="pin_no[]" value="' + pinNo + '" data-inputmask="\'mask\':\'9 9 9 9 - 9 9 9 9 - 9 9 9 9 - 9 9 9 9 9 9\'" placeholder="핀(PIN)번호 입력 (16자리~18자리)">';
                break;
            case "CULTURELAND_VOUCHER":
                addPinNo += '<input type="tel" name="pin_no[]" value="' + pinNo + '" data-inputmask="\'mask\':\'9 9 9 9 - 9 9 9 9 - 9 9 9 9 9\'" placeholder="핀(PIN)번호 입력 (12자리 ~ 13자리)">';
                break;
            case "GOOGLE_GIFTCARD_VOUCHER":
                addPinNo += '<input type="text" name="pin_no[]" value="' + pinNo + '" data-inputmask="\'mask\':\'9 9 9 9 - 9 9 9 9 - 9 9 9 9\'" placeholder="핀(PIN)번호 입력">';
                break;
            case "HAPPYMONEY_VOUCHER":
                addPinNo += '<input type="tel" name="pin_no[]" value="' + pinNo + '" data-inputmask="\'mask\':\'9 9 9 9 - 9 9 9 9 - 9 9 9 9\'" placeholder="핀(PIN)번호 입력">';
                break;
            case "NANURI":
                addPinNo += '<input type="text" name="pin_no[]" value="' + pinNo + '" placeholder="핀(PIN)번호 입력">';
                break;
            case "HAPPYMONEY":
                addPinNo += '            <span class="l"><input type="tel" name="pin_no[]" value="' + pinNo + '" data-inputmask="\'mask\':\'9 9 9 9 - 9 9 9 9 - 9 9 9 9 - 9 9 9 9\'" placeholder="핀(PIN)번호 입력"></span>';
                addPinNo += '            <span class="r"><input type="tel" name="pin_cert[]" value="' + pinCert + '" data-inputmask="\'mask\':\'9 9 9 9 9 9 9 9\'" placeholder="발행일/인증번호"></span>';
                break;
            case "HANDURE":
                addPinNo += '            <span class="l"><input type="text" minlength=15 maxlength=15 name="pin_no[]" value="' + pinNo + '" placeholder="핀(PIN)번호 입력"></span>';
                addPinNo += '            <span class="r"><input type="tel" name="pin_cert[]" value="' + pinCert + '" data-inputmask="\'mask\':\'9 9 9 9\'" placeholder="인증번호 입력"></span>';
                break;
            case "BAROBIZ":
                addPinNo += '            <span class="l"><input type="text" minlength=15 maxlength=15 name="pin_no[]" value="' + pinNo + '" placeholder="핀(PIN)번호 입력"></span>';
                addPinNo += '            <span class="r"><input type="tel" name="pin_cert[]" value="' + pinCert + '" data-inputmask="\'mask\':\'9 9 9 9\'" placeholder="인증번호 입력"></span>';
                break;
            case "BAROSHOP":
                addPinNo += '            <span class="l"><input type="text" minlength=15 maxlength=15 name="pin_no[]" value="' + pinNo + '" placeholder="핀(PIN)번호 입력"></span>';
                addPinNo += '            <span class="r"><input type="tel" name="pin_cert[]" value="' + pinCert + '" data-inputmask="\'mask\':\'9 9 9 9\'" placeholder="인증번호 입력"></span>';
                break;
            case "SANDAMALL":
                addPinNo += '            <span class="l"><input type="text" minlength=15 maxlength=15 name="pin_no[]" value="' + pinNo + '" placeholder="핀(PIN)번호 입력"></span>';
                addPinNo += '            <span class="r"><input type="tel" name="pin_cert[]" value="' + pinCert + '" data-inputmask="\'mask\':\'9 9 9 9\'" placeholder="인증번호 입력"></span>';
                break;
            case "BIKERUN":
                addPinNo += '            <span class="l"><input type="text" minlength=15 maxlength=15 name="pin_no[]" value="' + pinNo + '" placeholder="핀(PIN)번호 입력"></span>';
                addPinNo += '            <span class="r"><input type="tel" name="pin_cert[]" value="' + pinCert + '" data-inputmask="\'mask\':\'9 9 9 9\'" placeholder="인증번호 입력"></span>';
                break;
        }
        addPinNo += '        </p>';
        addPinNo += '    </div>';
        addPinNo += '</li>';
        return addPinNo;
    }
    function dateValidation(dateStr){
        var dateformat = /^(19|20)\d{2}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])$/;
        // Match the date format through regular expression
        if(dateStr.match(dateformat))
        {
            var yy = parseInt(dateStr.substring(0, 4));
            var mm = parseInt(dateStr.substring(4, 6));
            var dd = parseInt(dateStr.substring(6, 8));

            // Create list of days of a month [assume there is no leap year by default]
            var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];

            if (mm==2)
            {
                var lyear = false;

                if ( (!(yy % 4) && yy % 100) || !(yy % 400))
                {
                    lyear = true;
                }

                if ((lyear==false) && (dd>=29))
                {
                    return false;
                }

                if ((lyear==true) && (dd>29))
                {
                    return false;
                }

                return true;
            }
            else
            {
                if (dd > ListofDays[mm-1])
                {
                    return false;
                }

                return true;
            }
        }
        else
        {
            return false;
        }
    }
    function addPinNo(tag){
        $('#gift_body').append(tag);
        $('input[name="pin_no[]"]').inputmask();
        $('input[name="pin_cert[]"]').inputmask();

        var addNo = parseInt($("#gift_body li:last-child > .input_type1 > .num").html());
        $("span.num").each(function(idx, item){
            $(item).html(addNo++);
        });
    }
});