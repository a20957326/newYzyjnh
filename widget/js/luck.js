$(function() {
	/*纪念奖*/
	var luck = {
		index: -5, //当前转动到哪个位置，起点位置
		count: 0, //总共有多少个位置
		timer: 0, //setTimeout的ID，用clearTimeout清除
		speed: 20, //初始转动速度
		times: 0, //转动次数
		cycle: 50, //转动基本次数：即至少需要转动多少次再进入抽奖环节
		prize: -1, //中奖位置
		init: function(id) {
			if($("#" + id).find(".luck-unit").length > 0) {
				$luck = $("#" + id);
				$units = $luck.find(".luck-unit");
				this.obj = $luck;
				this.count = $units.length;
				$luck.find(".luck-unit-" + this.index).addClass("active");
			};
		},

		roll: function() {
			var index = this.index;
			var count = this.count;
			var luck = this.obj;
			$(luck).find(".luck-unit-" + index).removeClass("active");
			index += 1;
			if(index > count - 1) {
				index = 0;
			};
			$(luck).find(".luck-unit-" + index).addClass("active");
			this.index = index;
			return false;
		},
		stop: function(index) {
			this.prize = index;
			return false;
		}
	};

	function roll() {
		luck.times += 1;
		luck.roll();
		if(luck.times > luck.cycle + 10 && luck.prize == luck.index) {
			clearTimeout(luck.timer);
			luck.prize = -1;
			luck.times = 0;
			click = false;
		} else {
			if(luck.times < luck.cycle) {
				luck.speed -= 10;
			} else if(luck.times == luck.cycle) {
				var index = Math.random() * (luck.count) | 0;
				luck.prize = index;
			} else {
				if(luck.times > luck.cycle + 10 && ((luck.prize == 0 && luck.index == 7) || luck.prize == luck.index + 1)) {
					luck.speed += 110;
				} else {
					luck.speed += 20;
				}
			}
			if(luck.speed < 40) {
				luck.speed = 40;
			};

			luck.timer = setTimeout(roll, luck.speed);
		}
		return false;
	}

	//闪灯效果
	var num = 0;
	var num1 = 0;
	var num2 = 0
	$(".luck").attr("class", function() {
		setInterval(function() {
			num++;
			if(num % 2 == 0) {
				$('#luck').addClass("luck2");
			} else {
				$('#luck').addClass("luck");
				$('#luck').removeClass('luck2');
			}
		}, 200)
	});
	$(".lottery").attr("class", function() {
		setInterval(function() {
			num1++;
			if(num1 % 2 == 0) {
				$('#lottery').addClass("luck2");
			} else {
				$('#lottery').addClass("luck");
				$('#lottery').removeClass('luck2');
			}
		}, 200)
	});
	$(".gameContent").attr("class", function() {
		setInterval(function() {
			num2++;
			if(num2 % 2 == 0) {
				$('#gameContent').addClass("shandeng4");
			} else {
				$('#gameContent').addClass("gameContent");
				$('#gameContent').removeClass('shandeng4');
			}
		}, 200)
	});
	/*纪念奖*/
	/*君悦奖*/
	var lottery = {

		index1: -1, //当前转动到哪个位置，起点位置

		count1: 0, //总共有多少个位置

		timer1: 0, //setTimeout的ID，用clearTimeout清除

		speed1: 20, //初始转动速度

		times1: 0, //转动次数

		cycle1: 50, //转动基本次数：即至少需要转动多少次再进入抽奖环节

		prize1: -1, //中奖位置

		init1: function(idx) {

			if($("#" + idx).find(".lottery-unit").length > 0) {

				$lottery = $("#" + idx);

				$units1 = $lottery.find(".lottery-unit");

				this.obj1 = $lottery;

				this.count1 = $units1.length;

				$lottery.find(".lottery-unit-" + this.index1).addClass("active1");

			};

		},

		roll1: function() {

			var index1 = this.index1;

			var count1 = this.count1;

			var lottery = this.obj1;

			$(lottery).find(".lottery-unit-" + index1).removeClass("active1");

			index1 += 1;

			if(index1 > count1 - 1) {

				index1 = 0;

			};

			$(lottery).find(".lottery-unit-" + index1).addClass("active1");

			this.index1 = index1;

			return false;

		},

		stop1: function(index) {

			this.prize1 = index1;

			return false;

		}

	};

	function roll1() {

		lottery.times1 += 1;

		lottery.roll1();

		if(lottery.times1 > lottery.cycle1 + 10 && lottery.prize1 == lottery.index1) {

			clearTimeout(lottery.timer1);

			lottery.prize1 = -1;

			lottery.times1 = 0;

			click1 = false;

		} else {

			if(lottery.times1 < lottery.cycle1) {

				lottery.speed1 -= 10;

			} else if(lottery.times1 == lottery.cycle1) {

				var index = Math.random() * (lottery.count1) | 0;

				lottery.prize1 = index;

			} else {

				if(lottery.times1 > lottery.cycle1 + 10 && ((lottery.prize1 == 0 && lottery.index1 == 7) || lottery.prize1 == lottery.index1 + 1)) {

					lottery.speed1 += 110;

				} else {

					lottery.speed1 += 20;

				}

			}

			if(lottery.speed1 < 40) {

				lottery.speed1 = 40;

			};

			//console.log(lottery.times+'^^^^^^'+lottery.speed+'^^^^^^^'+lottery.prize);

			lottery.timer1 = setTimeout(roll1, lottery.speed1);
		}
		return false;
	}
	var click = false;
	var click1 = false;
	window.onload = function() {
		luck.init('luck');
		lottery.init1('lottery');
		$("#btn").click(function() {
			//按下弹起效果
			$("#btn").addClass("cjBtnDom");
			setTimeout(function() {
				$("#btn").removeClass("cjBtnDom");
			}, 200);

			if(click) {
				return false;
			} else {
				luck.speed = 100;
				roll();
				click = true;
				return false;
			}
			/*if($(".luck-unit").hasClass("active")){
				$(".layer_bg").show();
			   $(".Winnerrewords").fadeIn();
			};*/
		});
		$("#btn1").click(function() {
			$("#btn1").addClass("cjBtnDom");
			setTimeout(function() {
				$("#btn1").removeClass("cjBtnDom");
			}, 200);
			if(click1) {
				return false;
			} else {
				lottery.speed1 = 100;
				roll1();
				click1 = true;
				return false;
			}
		});
	};
});