$("#header").find(".h_to_left").find("li").hover(function() {
	var $span = $(this).find("span");
	var that = this;
	$(this).find("div").stop().slideDown().css({"z-index":'4'} );
	$(this).find("div").find("dd,dt").click(function() {
		var $Value = $(this).html();
		$span.html($Value);
		$(that).find("div").stop().slideUp();
	})
}, function() {
	$(this).find("div").stop().slideUp();
});
$("#header").find(".h_cart").on("click", function() {
	window.location.href = "../html/cart.html";
});
checkId();//是否已登录
//UpdaCarNum();//更新购物车数量
//是否已登录
function checkId(){
	var $id = $(".h_to_right").find(".Id");
	var $userid = getCookie("userName")
	if($userid){
		var username = getCookie("userName");
		$id.css({"display":"block"}).find("span").html(username);
		$id.siblings(".er").css({"display":"none"});
		$id.hover(function(){
			$(this).find("div").stop().slideDown(100);
		},function(){
			$(this).find("div").stop().slideUp(100);
		})
	}else{
		$(".h_to_right").find(".Id").css({"display":"none"}).siblings().css({"display":"block"})
	}
}
//检查购物车
checkCar();
function checkCar(){
	var $car = $("#header").find(".h_cart");
	var $footcar = $("#foot").find(".car");
	var $userid = getCookie("userName");
	var $num =  getCookie($userid + "shopnum_")? $num = getCookie($userid + "shopnum_"): $num = 0;
	var $total = getCookie($userid + "shoptotal_")?$total = getCookie($userid + "shoptotal_"): $total = "0.00";
	$car.find("b").find("em").html($num);
	$car.find("b").find("i").html($total);
	$footcar.find("b").html($num);
	$footcar.find("strong").html($total);
}

$("#header").find(".h_to_left").find("li").hover(function() {
	var $span = $(this).find("span");
	var that = this;
	$(this).find("div").stop().slideDown();
	$(this).find("div").find("dd,dt").click(function() {
		var $Value = $(this).html();
		$span.html($Value);
		$(that).find("div").stop().slideUp();
	})
}, function() {
	$(this).find("div").stop().slideUp();
});


$("#main").find(".brand").on("click", function() {
		$(this).next().slideToggle();
	})


$("#footer").find(".money").on("click",function(ev){
	var ev = window.event || ev;
	ev.cancelBubble = true;
	var $that = this;
	$(this).siblings("ul").slideToggle(100);
	var $monSpan = $(this).find("span");
	if($monSpan.hasClass("active")){
		$monSpan.removeClass("active");
	}else{
		$monSpan.addClass("active");
	}
	$(this).siblings("ul").find("li").on("click",function(){
		var $Value = $(this).html();
		$($that).find("a").html($Value);
		$("#footer").find(".mon").slideUp(100);
		
	})
	$(".f_t_m").on("mouseleave",function(){
		$monSpan.removeClass("active");
		$("#footer").find(".mon").slideUp(100);
	})
})
$("#backtop").on("click",function(){
//	alert($(window).scrollTop());
//	alert($(window).outerHeight());
//	alert($("html").outerHeight());
	$("body,html").animate({scrollTop:0},300)
})

//显示时间
showTimer();
function showTimer(){
	Timer();
	function Timer(){
	var data = new Date();
	var Newyear = data.getFullYear();
	var Newmon = data.getMonth()>9? Newmon = data.getMonth() + 1 +"":Newmon = Newmon ="0" + (data.getMonth()+1);
	var Newday = data.getDate()>9? Newday = data.getDate()+"":Newday = "0"+data.getDate();
	var Newhour = data.getHours()>9?Newhour = data.getHours()+"":Newhour = "0"+ data.getHours();
	var Newmin = data.getMinutes()>9?Newmin = data.getMinutes()+"":Newmin = "0"+ data.getMinutes();
	var Newsec = data.getSeconds()>9?Newsec = data.getSeconds()+"":Newsec = "0"+ data.getSeconds();
	$("#foot").children(".timer").find("span").html(Newyear+"."+Newmon+"."+Newday+" "+Newhour+":"+Newmin+":"+Newsec+" ")
	}
	setInterval(Timer,999);
}
function setCookie(key,value,time){
	var date = new Date();
	date = (date.getDate()　+ time);
	document.cookie = key + "=" + value + ";expire = " + date;
}
function getCookie(key){
	var data = document.cookie; 
	var Keyattr = data.split("; ");
	for(var i = 0;i<Keyattr.length;i++){
		var Key = Keyattr[i].split("=")[0];
		if(Key == key ){
			return Keyattr[i].split("=")[1];
		}
	}
	return "";
}
