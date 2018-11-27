$(function() {
	$(".header_fixed").on("click", function() {
		$(".fixed_divTop1").show();
	});
	$(".fixed_divTop_absoluate_close").on("click", function() {
		$(".fixed_divTop1").hide();
	});
	$(".huidaodingbu_click").on("click", function() {
		$("html, body").animate({
			scrollTop: 0
		}, 500);
		$(".fixed_divTop1").hide();
	});
	$(".headernavbtn").click(function() {
		$(".fixed_divTop1").show();
	});
	$(".AttendorderinformationHeaderright").click(function() {
		$(".fixed_divTop2").show();
	});
	$(".fixed_divTop_absoluate_closeI").click(function() {
		$(".fixed_divTop2").hide();
	});
	/*底部导航*/
	$(".BusinessOpportunitybottom ul a").click(function() {
		$(this).addClass("activepoc").siblings().removeClass("activepoc");
	});
	$(window).scroll(function() {
		var height = $(".section").height();
		if($(this).scrollTop() > height) {
			$(".myinvitebtn").show();
			$(".mycanhuibtn").show();
		} else {
			$(".myinvitebtn").hide();
			$(".mycanhuibtn").hide();
		}
	});

	$(window).on('scroll', function(e) {
		$('.yijianshengji_div').css({
			"right": "-0.8rem"
		}, 1000);
		$('.yijianbaoming_div').css({
			"right": "-0.8rem"
		}, 1000);
		$('.myinvitebtn').css({
			"right": "-0.8rem"
		}, 1000);
		$('.headernavbtn').css({
			"right": "-0.6rem"
		}, 1000);
		$('.mycanhuibtn').css({
			"right": "-0.8rem"
		}, 1000);
		$('.invationbtn2').css({
			"right": "-0.8rem"
		}, 1000);
		//鼠标停止滚动0.5s时执行的事件
		clearTimeout($.data(this, 'timer'));
		$.data(this, 'timer', setTimeout(function() {
			$('.yijianshengji_div').animate({
				"right": "0.2rem"
			}, 1000);
			$('.yijianbaoming_div').animate({
				"right": "0.2rem"
			}, 1000);
			$('.headernavbtn').animate({
				"right": "0.2rem"
			}, 1000);
			$('.mycanhuibtn').animate({
				"right": "0.2rem"
			}, 1000);
			$('.myinvitebtn').animate({
				"right": "0.2rem"
			}, 1000);
			$('.invationbtn2').animate({
				"right": "0.2rem"
			}, 1000);
		}, 500));

	});

	/*问答积分交互效果*/
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;
		var links = this.el.find('.link');
		links.on('click', {
			el: this.el,
			multiple: this.multiple
		}, this.dropdown)
	};
	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
		$this = $(this);
		$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('openlist');

		if(!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('openlist');
		}
	};
	var accordion = new Accordion($('#accordion'), false);
	/*$('.submenu li').click(function() {
		$(this).addClass('current').siblings('li').removeClass('current');
	});*/

	$(window).scroll(function() {
		var height = $(".HundredQuestionsbg").height();
		if($(this).scrollTop() > height) {
			$(".HundredQuestionsbg").addClass("HundredQuestionsbgfixed");
		} else {
			$(".HundredQuestionsbg").removeClass("HundredQuestionsbgfixed");
		}
	});
});