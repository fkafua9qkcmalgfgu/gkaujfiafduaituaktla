$('#favorite').on('click', function(e) {
    
    var bookmarkURL = window.location.href;
    var bookmarkTitle = document.title;
    var triggerDefault = false;

    if (window.sidebar && window.sidebar.addPanel) {
        // Firefox version < 23
        window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
    }
    
    else if ((window.sidebar && (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)) || (window.opera && window.print)) {

        // Firefox version >= 23 and Opera Hotlist 
        var $this = $(this); 
        $this.attr('href', bookmarkURL); 
        $this.attr('title', bookmarkTitle); 
        $this.attr('rel', 'sidebar'); 
        $this.off(e); 
        triggerDefault = true; 
    }
    
    else if (window.external && ('AddFavorite' in window.external)) { 

        // IE Favorite 
        window.external.AddFavorite(bookmarkURL, bookmarkTitle); 

    }
    else {
        
        // WebKit - Safari/Chrome 
        alert((navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D 키를 눌러 즐겨찾기에 등록하실 수 있습니다.');
    }
    
    return triggerDefault; 
});
$(function() {
    var tbl = $( ".table_type2" );
    
    tbl.find('tbody tr > td').mouseenter(function() {
        $( this ).parents('tr').addClass( "hover" );
    });
    tbl.find('tbody td').mouseleave(function() {
        $( this ).parents('tr').removeClass( "hover" );
    });
});
$(function()
{
    $('.checks label').on('click' ,function()
    {
        var checkboxId = $(this).attr('for');

        if($('#' + checkboxId).is(':checked') == false)
        {
            $(this).parents('.checks').addClass('on');
        }
        else if($('#' + checkboxId).is(':checked') == true)
        {
            $(this).parents('.checks').removeClass('on');
        }
    });
    $('[class*="radioWrap_st"] label').click(function()
    {
        $('[class*="radioWrap_st"] label').removeClass('on');
        $(this).addClass('on');

        $('[class*="radioWrap_st"] input[type="radio"]').attr('checked', false);
        $('#'+$(this).attr('for')).attr('checked', true);
    });
    $('[class*="select_type"] select').focusin(function(){
        $(this).parents('[class*="select_type"]').addClass('focus');
    });
    $('[class*="select_type"] select').focusout(function(){
        $(this).parents('[class*="select_type"]').removeClass('focus');
    });
    
    $('[class*="select_type"]').each( function() {
        var selT = $(this).find('.sel_txt');
        var setSelected = function(selTag) {
            var selected = selTag.find('option:selected').addClass('on');
            selT.html( selected.text() );
        };
        
        setSelected( $(this).find('select') );
        
        selT.html( $(this).find('option:selected').addClass('on').text() );
        
        $(this).find('select').off('change.select').on('change.select', function() {
            $(this).find('option').removeClass('on');
            setSelected( $(this) );
        });
    });
    $('[class*="input_type"] input').focusin(function(){
        $(this).parents('[class*="input_type"]').addClass('focus');
    });
    $('[class*="input_type"] input').focusout(function(){
        $(this).parents('[class*="input_type"]').removeClass('focus');
    });
    $('[class*="textarea_type"] textarea').focusin(function(){
        $(this).parents('[class*="textarea_type"]').addClass('focus');
    });
    $('[class*="textarea_type"] textarea').focusout(function(){
        $(this).parents('[class*="textarea_type"]').removeClass('focus');
    });
});
// $(function () {
//     $(".tab_content").hide();
//     $(".tab_content:first").show().addClass("on");
//     $("ul.tabs li a").click(function () {
//         $("ul.tabs li a").removeClass("on");
//         $(this).addClass("on");
//         $(".tab_content").hide().removeClass("on");
//         var activeTab = $(this).attr("rel");
//         $(".tab_content").fadeIn(200, function() {
//             $(this).addClass("on");
//         });
//     });
// });
$(function(){
    $(window).scroll(function() {
        var _scrTop = $(window).scrollTop();
        var _scrHeight = $(window).height();
        if (_scrTop >= 1) {
            $("body").addClass("scrolled");
        } else {
            $("body").removeClass("scrolled");
        }
        if (_scrTop >= $(document).height() - $(window).height() - 0) {
            $("body").addClass("lastScroll");
        } else {
            $("body").removeClass("lastScroll");
        }
        if (_scrTop >= 30) {
            $("#header").addClass("scrolled");
        } else {
            $("#header").removeClass("scrolled");
        }
    });
});

/* --------------------------------------------
 * m_gnb
/* ------------------------------------------ */
$(function(){
    var scr = $(window).width();
    var clickDelay = 500,
        clickDelayTimer = null;
    
    $(document).on('click', '.btn_gnb', function (e) {
        e.preventDefault();
        if (clickDelayTimer === null) {
    
            var $burger = $(this);
            $burger.toggleClass('active');
    
            if (!$burger.hasClass('active')) {
                $burger.addClass('closing');
                $('html, body').css('overflow','');
                $('body').removeClass('menuPanel_open').css('height','100%');
            } else {
                $("html, body").css('overflow','hidden');
                $('body').addClass('menuPanel_open').css('height','auto');
            }
    
            clickDelayTimer = setTimeout(function () {
                $burger.removeClass('closing');
                clearTimeout(clickDelayTimer);
                clickDelayTimer = null;
            }, clickDelay);
        }
        return false;
    });
});
/* --------------------------------------------
 * motion | waypoint
/* ------------------------------------------ */
$(function(){
    $('.motion').each(function(){
        
        var $this = $(this);
        
        $this.waypoint(function() {
            
            $this.addClass('ani');
            this.destroy();
        }, {
            offset: "85%"
        });
    });
});

jQuery(function($){
    var faqItem = $('.accd_lst_sms > ul > li');
    //faqItem.addClass('a_hide');
    // faqItem.find('.answer').hide();
    
    if(faqItem.hasClass('opened') === true){
        $('.opened').removeClass('a_hide').addClass('active');
        $('.opened').find('.answer').show();
    }

    $('.accd_lst_sms > ul > li > .qusetion > a').click(function(){
        var onFaqItem = $(this).parents('.accd_lst_sms > ul > li:first');
        if(onFaqItem.hasClass('a_hide')){
            onFaqItem.removeClass('a_hide').addClass('active');
            onFaqItem.find('.answer').slideDown(300, function() {
            });
            
        } else {
            onFaqItem.removeClass('active').addClass('a_hide');
            onFaqItem.find('.answer').slideUp(300);
        }
        return false;
    });

    var windowWidth = $(window).width();
    if (windowWidth > 690) { //pc
    } else if (windowWidth <= 690) { //mobile
        $('.btn_gift_auto').click(function(){
            scrOffset = $('#pin_panel').offset();
            $('body,html').animate({ scrollTop: scrOffset.top - 200 });
        });
    }
});