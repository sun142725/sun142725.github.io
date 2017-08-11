$(function(){
    let jindu=$(".progress-bar progress-bar-danger");

function kuai(ctx,score){
        let t;
        let num=0;
        ctx.lineWidth=5;
        ctx.strokeStyle='#EB5424';
        ctx.fillStyle='#EB5424';
        ctx.lineCap="round";
        ctx.textAlign='center';
        ctx.font='bold 24px 宋体';
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
            ctx.arc(50,50,45,-Math.PI/2,angle);
            ctx.stroke();
            ctx.fillText(`${num}%`,50,50 )
        }
    }
		let canvas=$("canvas");
		let canvasBox = $(".canvas");
		function sjh_donghua(){
			
        	for (let i = 0; i < canvas.length; i++) {
            	$(canvasBox[i]).delay(300*i).animate({
              	  transformX: "0"
            	}, 1500, () => {
                	var ctx = canvas[i].getContext('2d');
                	if (i == 0) {
                 	   kuai(ctx, 90)
               	 } else if (i == 1) {
               	     kuai(ctx, 90)
               	 } else if (i == 2) {
              		      kuai(ctx, 80)
                	} else if (i == 3) {
                   	 kuai(ctx, 80)
               	 }
          	  })
     	   }
   	 }
		
	$(window).on('hashchange', () => {
		if (location.hash == '#resume') {
    	sjh_donghua()
    	}else{
    	for(let i=0;i<canvas.length;i++){
                    var ctx=canvas[i].getContext('2d');
                    if(i==0){
                        ctx.clearRect(0,0,100,100)
                    }else if(i==1){
                        ctx.clearRect(0,0,100,100)
                    }else if(i==2){
                        ctx.clearRect(0,0,100,100)
                    }else if(i==3){
                        ctx.clearRect(0,0,100,100)
                    }
                }
    		}
})
		let switchs=true;
		let switchs2=true;
		$(window).on('scroll',()=>{
			if($('#resume').offset().top < scrollY+100 && $('#about').offset().top > scrollY){
//			location.hash =  '#resume'
				if(switchs){
					switchs = false;
					sjh_donghua()
				}
		}
			if($('#contact').offset().top < scrollY+400){
//			location.hash =  '#resume'
				if(switchs2){
					switchs = false;
					$(".mottoL").css("transform","translateX(0)")
					$(".mottoR").css("transform","translateX(0)")
				}
		}
		})
		
})