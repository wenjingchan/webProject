function showBootTree(){
	$("#home_foot-form,#home_outsole").css('display', 'none');
	$("#home_boot-tree").css('display', 'block');
	$("#home_btn-boot-tree").addClass('home_btn-curr');
	$("#home_btn-foot-form,#home_btn-outsole").removeClass('home_btn-curr');
	$("#home_btn-foot-form,#home_btn-outsole").addClass('home_btn-storehouse');
	
}
function showFootForm(){
	$("#home_boot-tree,#home_outsole").css('display', 'none');
	$("#home_foot-form").css('display', 'block');
	$("#home_btn-foot-form").addClass('home_btn-curr');
	$("#home_btn-boot-tree,#home_btn-outsole").removeClass('home_btn-curr');
	$("#home_btn-boot-tree,#home_btn-outsole").addClass('home_btn-storehouse');
}
function showOutsole(){
	$("#home_boot-tree,#home_foot-form").css('display', 'none');
	$("#home_outsole").css('display', 'block');
	$("#home_btn-outsole").addClass('home_btn-curr');
	$("#home_btn-boot-tree,#home_btn-foot-form").removeClass('home_btn-curr');
	$("#home_btn-boot-tree,#home_btn-foot-form").addClass('home_btn-storehouse');
	
}

window.onload=function(){
	var appendNumber = 3;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 3,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
    });
    
}

$(document).ready(function() {
	$("#userHtml_nav-tab>button:eq(0)").click(function() {
		$("#userHtml_summary").css('display', 'block');
		$("#userHtml_model").css('display', 'none');		
		$("#userHtml_collection").css('display', 'none');	
		$("#userHtml_like").css('display', 'none');	
		$("#userHtml_upload").css('display', 'none');
		$("#userHtml_nav-tab>button:eq(0)").css('border-bottom', '2px solid #333');
		$("#userHtml_nav-tab>button:gt(0)").css('border-bottom', 'none');		
	});
	$("#userHtml_nav-tab>button:eq(1)").click(function() {
		$("#userHtml_summary").css('display', 'none');
		$("#userHtml_model").css('display', 'block');	
		$("#userHtml_collection").css('display', 'none');	
		$("#userHtml_like").css('display', 'none');	
		$("#userHtml_upload").css('display', 'none');
		$("#userHtml_nav-tab>button:eq(1)").css('border-bottom', '2px solid #333');
		$("#userHtml_nav-tab>button:eq(0),#userHtml_nav-tab>button:eq(2),#userHtml_nav-tab>button:eq(3),#userHtml_nav-tab>button:eq(4)").css('border-bottom', 'none');
	});
	$("#userHtml_nav-tab>button:eq(2)").click(function() {
		$("#userHtml_summary").css('display', 'none');
		$("#userHtml_model").css('display', 'none');		
		$("#userHtml_collection").css('display', 'block');	
		$("#userHtml_like").css('display', 'none');	
		$("#userHtml_upload").css('display', 'none');
		$("#userHtml_nav-tab>button:eq(2)").css('border-bottom', '2px solid #333');
		$("#userHtml_nav-tab>button:eq(0),#userHtml_nav-tab>button:eq(1),#userHtml_nav-tab>button:eq(3),#userHtml_nav-tab>button:eq(4)").css('border-bottom', 'none');	
	});
	$("#userHtml_nav-tab>button:eq(3)").click(function() {
		$("#userHtml_summary").css('display', 'none');
		$("#userHtml_model").css('display', 'none');		
		$("#userHtml_collection").css('display', 'none');	
		$("#userHtml_like").css('display', 'block');	
		$("#userHtml_upload").css('display', 'none');
		$("#userHtml_nav-tab>button:eq(3)").css('border-bottom', '2px solid #333');
		$("#userHtml_nav-tab>button:eq(0),#userHtml_nav-tab>button:eq(1),#userHtml_nav-tab>button:eq(2),#userHtml_nav-tab>button:eq(4)").css('border-bottom', 'none');
	});
	$("#userHtml_nav-tab>button:eq(4)").click(function() {
		$("#userHtml_summary").css('display', 'none');
		$("#userHtml_model").css('display', 'none');		
		$("#userHtml_collection").css('display', 'none');	
		$("#userHtml_like").css('display', 'none');	
		$("#userHtml_upload").css('display', 'block');
		$("#userHtml_nav-tab>button:eq(4)").css('border-bottom', '2px solid #333');
		$("#userHtml_nav-tab>button:lt(4)").css('border-bottom', 'none');			
	});

});

$(document).ready(function() {
	$("#visitorHtml_nav-tab>button:eq(0)").click(function() {
		$("#visitorHtml_summary").css('display', 'block');
		$("#visitorHtml_model").css('display', 'none');		
		$("#visitorHtml_collection").css('display', 'none');	
		$("#visitorHtml_like").css('display', 'none');	
		$("#visitorHtml_nav-tab>button:eq(0)").css('border-bottom', '2px solid #333');
		$("#visitorHtml_nav-tab>button:gt(0)").css('border-bottom', 'none');
	});
	$("#visitorHtml_nav-tab>button:eq(1)").click(function() {
		$("#visitorHtml_summary").css('display', 'none');
		$("#visitorHtml_model").css('display', 'block');	
		$("#visitorHtml_collection").css('display', 'none');	
		$("#visitorHtml_like").css('display', 'none');
		$("#visitorHtml_nav-tab>button:eq(1)").css('border-bottom', '2px solid #333');
		$("#visitorHtml_nav-tab>button:eq(0),#visitorHtml_nav-tab>button:eq(2),#visitorHtml_nav-tab>button:eq(3)").css('border-bottom', 'none');
	});
	$("#visitorHtml_nav-tab>button:eq(2)").click(function() {
		$("#visitorHtml_summary").css('display', 'none');
		$("#visitorHtml_model").css('display', 'none');		
		$("#visitorHtml_collection").css('display', 'block');	
		$("#visitorHtml_like").css('display', 'none');	
		$("#visitorHtml_nav-tab>button:eq(2)").css('border-bottom', '2px solid #333');
		$("#visitorHtml_nav-tab>button:eq(0),#visitorHtml_nav-tab>button:eq(1),#visitorHtml_nav-tab>button:eq(3)").css('border-bottom', 'none');
	});
	$("#visitorHtml_nav-tab>button:eq(3)").click(function() {
		$("#visitorHtml_summary").css('display', 'none');
		$("#visitorHtml_model").css('display', 'none');		
		$("#visitorHtml_collection").css('display', 'none');	
		$("#visitorHtml_like").css('display', 'block');	
		$("#visitorHtml_nav-tab>button:eq(3)").css('border-bottom', '2px solid #333');
		$("#visitorHtml_nav-tab>button:lt(3)").css('border-bottom', 'none');	
	});

});

 $(document).ready(function(){
        $(".imghover").hover(
            function(){
                $(".imghover").fadeTo(500, 0.4);
            },
            function(){
                $(".imghover").fadeTo(500,1);
            }
        )
 });

$(document).ready(function(){
        $("#search_1").click(function(){
            $("#search_2").toggle();
        });
});




$('#readmore-menu li a').click(function () {
    var f = this;
    $('#readmore-menu li a').each(function () {  this.className = this == f ? 'readmore-left-actived ' : 'readmore-left-none'   });
});


$(document).ready(function() {
    $("img.hover-pic").hover(function() {
        $(this).stop().fadeTo('slow', 0.7);
        $(this).parent().append('<img src="../img/游客放大镜.png" class="userHtml_magnifier"/>');
        var imgPositionX=$(this).offset().top;
        var imgPositionY=$(this).offset().left;
        $("img.userHtml_magnifier").offset({top:imgPositionX+90,left:imgPositionY+90});
    }, function() {
        $(this).stop().fadeTo('slow', 1);
        $(".userHtml_magnifier").remove();
    });
});



$(document).ready(function() {

    $("img.userHtml_pic").hover(function() {
        $(this).stop().fadeTo('slow', 0.7);
        $(this).parent().append('<img src="../img/游客放大镜.png" class="userHtml_magnifier"/>');
        var imgPositionX=$(this).offset().top;
        var imgPositionY=$(this).offset().left;
        $("img.userHtml_magnifier").offset({top:imgPositionX+90,left:imgPositionY+90});
    }, function() {
        $(this).stop().fadeTo('slow', 1);
        $(".userHtml_magnifier").remove();
    });

});

$(document).ready(function() {
    $("img.visitorHtml_pic").hover(function() {
        $(this).stop().fadeTo('slow', 0.7);
        $(this).parent().append('<img src="../img/游客放大镜.png" class="visitorHtml_magnifier"/>');
        var imgPositionX=$(this).offset().top;
        var imgPositionY=$(this).offset().left;
        $("img.visitorHtml_magnifier").offset({top:imgPositionX+90,left:imgPositionY+90});
    }, function() {
        $(this).stop().fadeTo('slow', 1);
        $(".visitorHtml_magnifier").remove();
    });

});