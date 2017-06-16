
$(document).ready(function($) {

	/*Cлайдер*/

	function htmSlider(){
		/* Зададим следующие параметры */

		/* Обертка слайдера */
		var slideWrap = jQuery('.slide-wrap');
		var slideWrap1 = jQuery('.slide-wrap1');
		/* кнопки вперед/назад и старт/пауза */
		var nextLink = jQuery('.next-slide');
		var prevLink = jQuery('.prev-slide');

		/* ширина слайда с отступами */
		var slideWidth = 3 * jQuery('.slide-item').outerWidth();/*Возвращает значение внешней ширины (включая по умолчанию border и padding) для первого совпавшего элемента в наборе.*/
		/* смещение слайдера */
		var scrollSlider = slideWrap.position().left - slideWidth;

		/* Клик по ссылке на следующий слайд */
		nextLink.click(function(){
			if(!slideWrap.is(':animated')) {

				var srcimg=slideWrap.find('.slide-item:eq(0)').children('img').attr('src');
				slideWrap.append($('<div/>').addClass('slide-item').append($('<img/>').attr({src:srcimg,alt:"Фото слайд"})).append($('<span/>').addClass("slide-cover")));
				slideWrap
					.animate({left: scrollSlider},4000, function(){
						slideWrap.find('.slide-item:eq(0)').remove();
						slideWrap
							.find('.slide-item:eq(0),.slide-item:eq(1)')
							.appendTo(slideWrap)
							.parent()
							.css({'left': 0});

						slideWrap1
							.find('.slide-item1:eq(-1),.slide-item1:eq(-2),.slide-item1:eq(-3)')
							.prependTo(slideWrap1)
							.parent()
							.css({'right': 0});

					});
			}
		});



		/* Клик по ссылке на предыдующий слайд */
		prevLink.click(function(){
			if(!slideWrap.is(':animated')) {
				var srcimg=slideWrap.find('.slide-item:eq(-3)').children('img').attr('src');
				// slideWrap.prepend($('<div/>').addClass('slide-item').append($('<img/>').attr('src',srcimg)));

				slideWrap
					.css({'left':scrollSlider})
					.find('.slide-item:eq(-1),.slide-item:eq(-2)')
					.prependTo(slideWrap)
					.parent()
					.prepend($('<div/>').addClass('slide-item').append($('<img/>').attr('src',srcimg)).append($('<span/>').addClass("slide-cover")))
					.animate({left: 0}, 4000,function(){
						slideWrap.find('.slide-item:eq(-1)').remove();
					});

				slideWrap1
					.find('.slide-item1:eq(0),.slide-item1:eq(1),.slide-item1:eq(2)')
					.appendTo(slideWrap1)
					.parent()
					.css({'left': 0});
			}

		});

		/*Клик на точку*/
		$('.slide-item1').click( function(){
				var newCircle=$(this).find('img');
				var oldCircle=$('.slide-item1 img[src="images/sliderCircle.png"]');

				var numNeCircle=$(this).index();
				var numOldCircle=oldCircle.parent().index();
				var diff=numNewCircle-numOldCircle;
				var diff1=numOldCircle-numNewCircle;
				/*Если число новой точки больше старой*/
				if(!slideWrap.is(':animated')&&numNewCircle>numOldCircle&&(numNewCircle-numOldCircle)<=2){
					newCircle.attr('src',"images/sliderCircle.png");
					oldCircle.attr('src',"images/sliderRing.png");
					var slideWidth1 = diff * $('.slide-item').outerWidth();
					var scrollSlider1 = slideWrap.position().left - slideWidth1;

					slideWrap
						.animate({left:scrollSlider1}, 2000, function(){
							slideWrap
								.find('.slide-item:lt('+ diff +')')
								.appendTo(slideWrap)
								.parent()
								.css({'left': 0});
						});
				}
				else if(!slideWrap.is(':animated')&&numNewCircle>numOldCircle&&(numNewCircle-numOldCircle)==3){
					newCircle.attr('src',"images/sliderCircle.png");
					oldCircle.attr('src',"images/sliderRing.png");
					var slideWidth1 = diff*$('.slide-item').outerWidth();
					var scrollSlider1 = slideWrap.position().left - slideWidth1;

					var srcimg=slideWrap.find('.slide-item:eq(0)').children('img').attr('src');
					slideWrap.append($('<div/>').addClass('slide-item').append($('<img/>').attr({src:srcimg,alt:"Фото слайд"})).append($('<span/>').addClass("slide-cover")));

					slideWrap
						.animate({left:scrollSlider1}, 3000, function(){
							slideWrap.find('.slide-item:eq(0)').remove();
							slideWrap
								.find('.slide-item:lt('+(diff-1)+')')
								.appendTo(slideWrap)
								.parent()
								.css({'left': 0});
						});
				}
				else if(!slideWrap.is(':animated')&&numNewCircle>numOldCircle&&(numNewCircle-numOldCircle)==4){
					newCircle.attr('src',"images/sliderCircle.png");
					oldCircle.attr('src',"images/sliderRing.png");
					var slideWidth1 = diff*$('.slide-item').outerWidth();
					var scrollSlider1 = slideWrap.position().left - slideWidth1;

					var srcimg1=slideWrap.find('.slide-item:eq(0)').children('img').attr('src');
					var srcimg2=slideWrap.find('.slide-item:eq(1)').children('img').attr('src');
					slideWrap.append($('<div/>').addClass('slide-item').append($('<img/>').attr({src:srcimg1,alt:"Фото слайд"})).append($('<span/>').addClass("slide-cover")))
						.append($('<div/>').addClass('slide-item').append($('<img/>').attr({src:srcimg2,alt:"Фото слайд"})).append($('<span/>').addClass("slide-cover")));

					slideWrap
						.animate({left:scrollSlider1}, 4000, function(){
							slideWrap.find('.slide-item:eq(0),.slide-item:eq(1)').remove();
							slideWrap
								.find('.slide-item:lt('+(diff-2)+')')
								.appendTo(slideWrap)
								.parent()
								.css({'left': 0});
						});
				}
				/*Если число новой точки меньше старой*/
				else if(!slideWrap.is(':animated')&&numNewCircle<numOldCircle&&(numOldCircle-numNewCircle)<=2){
					newCircle.attr('src',"images/sliderCircle.png");
					oldCircle.attr('src',"images/sliderRing.png");
					var slideWidth2 = diff1*$('.slide-item').outerWidth();
					var scrollSlider2 = slideWrap.position().left - slideWidth2;

					//var srcimg3=slideWrap.find('.slide-item:eq(-3)').children('img').attr('src');
					//alert('-'+diff1);
					var diffMi=-diff1;
					slideWrap
						.css({'left':scrollSlider2})
						.find('.slide-item:gt('+(diffMi-1)+')')
						.prependTo(slideWrap)
						.parent()
						//.prepend($('<div/>').addClass('slide-item').append($('<img/>').attr('src',srcimg3)))
						.animate({left: 0}, 2000,function(){

						});
				}
				else if(!slideWrap.is(':animated')&&numNewCircle<numOldCircle&&(numOldCircle-numNewCircle)==3){
					newCircle.attr('src',"images/sliderCircle.png");
					oldCircle.attr('src',"images/sliderRing.png");
					var slideWidth2 = diff1*$('.slide-item').outerWidth();
					var scrollSlider2 = slideWrap.position().left - slideWidth2;

					var srcimg3=slideWrap.find('.slide-item:eq(-3)').children('img').attr('src');
					var diffMi=-diff1;

					slideWrap
						.css({'left':scrollSlider2})
						.find('.slide-item:gt('+(diffMi)+')')
						.prependTo(slideWrap)
						.parent()
						.prepend($('<div/>').addClass('slide-item').append($('<img/>').attr('src',srcimg3)).append($('<span/>').addClass("slide-cover")))
						.animate({left: 0}, 3000,function(){
							slideWrap.find('.slide-item:eq(-1)').remove();
						});
				}
				else if(!slideWrap.is(':animated')&&numNewCircle<numOldCircle&&(numOldCircle-numNewCircle)==4){
					newCircle.attr('src',"images/sliderCircle.png");
					oldCircle.attr('src',"images/sliderRing.png");
					var slideWidth2 = diff1*$('.slide-item').outerWidth();
					var scrollSlider2 = slideWrap.position().left - slideWidth2;

					var srcimg3=slideWrap.find('.slide-item:eq(-3)').children('img').attr('src');
					var srcimg4=slideWrap.find('.slide-item:eq(-4)').children('img').attr('src');
					var diffMi=-diff1;


					slideWrap
						.css({'left':scrollSlider2})
						.find('.slide-item:gt('+(diffMi+1)+')')
						.prependTo(slideWrap)
						.parent()
						.prepend($('<div/>').addClass('slide-item').append($('<img/>').attr('src',srcimg3)).append($('<span/>').addClass("slide-cover")))
						.prepend($('<div/>').addClass('slide-item').append($('<img/>').attr('src',srcimg4)).append($('<span/>').addClass("slide-cover")))
						.animate({left: 0}, 4000,function(){
							slideWrap.find('.slide-item:eq(-1),.slide-item:eq(-2)').remove()

						});
				}
			}
		);


		$('.slider1+div').prepend('<img/>');
		$('.slide-wrap').on('click','.slide-cover',function(e){
			e.stopPropagation();
			e.stopImmediatePropagation();
			var nameImg=$(this).prev().attr('src');
			var num=nameImg.charAt(12);
			var newNameImg="images/photo"+num+".jpg";
			/*alert(num);*/
			if(window.innerWidth < 701) {
				$('.slider1+div').fadeIn("slow").addClass('preview').css({'height':'200px','width':'200px'}).animate({opacity:"1"},500).find('img').attr({src:newNameImg,width:'200px',height:'200px'});
				$('#fade').css({'display':'block'});
			}
			else if(window.innerWidth<901) {
				$('.slider1+div').fadeIn("slow").addClass('preview').css({'height':'350px','width':'350px'}).animate({opacity:"1"},500).find('img').attr({src:newNameImg,width:'350px',height:'350px'});
				$('#fade').css({'display':'block'});
			}
			else {
				$('.slider1+div').fadeIn("slow").addClass('preview').css({'height':'500px','width':'500px'}).animate({opacity:"1"},500).find('img').attr({src:newNameImg,width:'500px',height:'500px'});
				$('#fade').css({'display':'block'});
			}

			$('.preview').find('img').next().click(function(e){
				e.stopPropagation();
				e.stopImmediatePropagation();
				var nameImg=$(this).prev().attr('src');
				var num=nameImg.charAt(12);
				num--;
				/*alert(num);*/
				if(num>0){
					$('.preview').find('img').css('opacity','0').attr({src:'images/photo'+num+'.jpg'}).stop(false, true).animate({ opacity:"1"}, 1000);
				}
				if(num<=0){
					num=5;
					$('.preview').find('img').css('opacity', '0').attr({src:'images/photo'+num+'.jpg'}).stop(false, true).animate({ opacity:"1"}, 1000);
					return num;
				}

			}).addClass('left').next().click(function(e){
				e.stopPropagation();
				e.stopImmediatePropagation();
				var nameImg=$('.preview img').attr('src');
				var num=nameImg.charAt(12);
				num++;
				/*alert(num);*/
				if(num < 6){
					$('.preview').find('img').css('opacity', '0').attr({src:'images/photo'+ num + '.jpg'}).stop(false, true).animate({ opacity:"1"}, 1000);
				}
				if(num >=6 ){
					num = 1;
					$('.preview').find('img').css('opacity', '0').attr({src:'images/photo'+ num +'.jpg'}).stop(false, true).animate({ opacity:"1"}, 1000);
					return num;
				}
			}).addClass('right');


		});
		$(document).click(function(e) {
			if ($('.preview').css('display') == 'block'){
				$('.preview').fadeOut("slow");
				$('#fade').css({'display':'none'});
			}
		});

	}

	/* иницилизируем функцию слайдера */
	htmSlider();

	/*Hover in jQuery*/
	$('.slide-wrap').on('mouseover','.slide-item',function(){
		var fullPath = $('img',this).attr('src');
		var arr = fullPath.split("/");
		var nameFile = arr[arr.length - 1];
		var pathToFile = arr;
			pathToFile.splice(arr.length - 1, 1);
			pathToFile = pathToFile.join();
		var nameImage = nameFile.split(".");
			nameImage = nameImage[0];

		var pattern = /\.[a-z]+/;
		var formatImage = pattern.exec(nameFile);
			formatImage = formatImage[0];

		var newImg = pathToFile + "/" + nameImage + "hover" + formatImage;
		$('span',this).css({visibility:'visible',opacity:'1',background:'url('+ newImg + ')center/cover'});

	});

	$('.slide-wrap').on('mouseout','.slide-item',function(){
		$('span',this).css({visibility:'hidden',opacity:'o',background:'none'})
	});


});



