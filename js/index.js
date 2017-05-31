$(function(){
    $('#dowebok').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        anchors: ['page1', 'page2', 'page3', 'page4'],
        menu: '#menu',
        afterLoad: function(anchorLink, index){
            if(index == 2){
                $('.section2').find('.head').delay(300).animate({
                    left: '0'
                }, 1500, 'easeOutExpo');
                $('.section2').find('.word').delay(300).animate({
                    left: '0'
                }, 1500, 'easeOutExpo');
                let canvas=$("canvas");
                for(let i=0;i<canvas.length;i++){
                    let ctx=canvas[i].getContext('2d');
                    if(i==0){
                        kuai(ctx,90)
                    }else if(i==1){
                        kuai(ctx,90)
                    }else if(i==2){
                        kuai(ctx,80)
                    }else if(i==3){
                        kuai(ctx,80)
                    }
                }
            }
            if(index == 3){
                $('.section3').find('.head').delay(300).animate({
                    bottom: '0'
                }, 1500, 'easeOutExpo');

            }
            if(index == 4){
                $('.section4').find('.head1').delay(500).fadeIn(2000);
                $('.section4').find('.head2').delay(1500).fadeIn(2000);
                $('.section4').find('.head3').delay(2500).fadeIn(2000);
                $('.section4').find('.head4').delay(3500).fadeIn(2000);
                $('.section4').find('.head5').delay(4500).animate({
                    bottom: '0'
                }, 2000, 'easeOutExpo');
                $('.section4').find('.head6').delay(5500).fadeIn(2000);
                $('.section4').find('.head7').delay(6500).fadeIn(2000);
                $('.section4').find('.head8').delay(7500).animate({
                    left: '0'
                }, 2000, 'easeOutExpo');
                $('.section4').find('.head9').delay(8500).animate({
                    left: '0'
                }, 2000, 'easeOutExpo');
                $('.section4').find('.head10').delay(10000).fadeIn(3000);
            }
        },
        onLeave: function(index, direction){
            if(index == '2'){
                $('.section2').find('.head').animate({
                    left: '-120%'
                }, 1500, 'easeOutExpo');
                $('.section2').find('.word').animate({
                    left: '120%'
                }, 1500, 'easeOutExpo');
            }
            if(index == '3'){
                $('.section3').find('.head').animate({
                    bottom: '-120%'
                }, 1500, 'easeOutExpo');
            }
            if(index == '4'){
                $('.section4').find('.head').fadeOut(2000);
                $('.section4').find('.head5').animate({
                    bottom: '-120%'
                }, 2000, 'easeOutExpo');
                $('.section4').find('.head8').animate({
                    left: '-120%'
                }, 2000, 'easeOutExpo');
                $('.section4').find('.head9').animate({
                    left: '120%'
                }, 2000, 'easeOutExpo');
            }
        }
    });
    let mulu=$(".headnav");
    let mulus=mulu.find("li");
    let liebiao=$(".progect").find("li");
       mulu.click(function(e){
           console.log(e);
           $(this).find("li").removeClass("hot");
           $(e.target).addClass("hot");
           if($(mulus[0]).hasClass("hot")){
               liebiao.css("display","block");
           }else if($(mulus[1]).hasClass("hot")){
               liebiao.css("display","block");
               $(liebiao[6]).hide();
               $(liebiao[7]).hide();
           }else if($(mulus[2]).hasClass("hot")){
               liebiao.css("display","block");
               $(liebiao[0]).hide();
               $(liebiao[1]).hide();
               $(liebiao[7]).hide();
           }else if($(mulus[3]).hasClass("hot")){
               liebiao.css("display","block");
               $(liebiao[0]).hide();
               $(liebiao[1]).hide();
               $(liebiao[3]).hide();
               $(liebiao[6]).hide();
               $(liebiao[7]).hide();
           }else if($(mulus[4]).hasClass("hot")){
               liebiao.css("display","block");
               $(liebiao[0]).hide();
               $(liebiao[1]).hide();
               $(liebiao[2]).hide();
               $(liebiao[3]).hide();
               $(liebiao[4]).hide();
               $(liebiao[5]).hide();
           }
       });

    function kuai(ctx,score){
        let t;
        let num=0;
        ctx.lineWidth=10;
        ctx.strokeStyle='#EB5424';
        ctx.fillStyle='#EB5424';
        ctx.lineCap="round";
        ctx.textAlign='center';
        ctx.font='bold 40px 宋体';
        ctx.textBaseline='middle';
        t=setInterval(farme,30);
        function farme(){
            ctx.clearRect(0,0,300,300);
            num++;
            if(num == score){
                clearInterval(t);
            }
            let angle=(num*360/100-90)/180*Math.PI;
            ctx.beginPath();
            ctx.arc(75,75,50,-Math.PI/2,angle);
            ctx.stroke();
            ctx.fillText(`${num}%`,75,75)
        }
    }
});