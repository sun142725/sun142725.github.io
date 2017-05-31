/*
* @Author: 孙继红
* @Date:   2017-05-29 13:06:28
* @Last Modified by:   孙继红
* @Last Modified time: 2017-05-31 10:09:46
*/

$(function(){
	let navd=$(".navdson");
    let navindex=0
    let navt=setInterval(nav,3000)
    function nav(){
    	++navindex
    	if(navindex==navd.length){
    		navindex=0;
    	}
    	navd.css({display:"none"})
    	navd[navindex].style.display='block'
    }

    /*var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true,
    
    // 如果需要分页器
    pagination: '.swiper-pagination'
    }) */

    let banner=document.getElementsByClassName('bannerlun')
	let luna=document.querySelectorAll('.bannerdian>a')
	let bannerb=document.getElementsByClassName('bannertoo')[0]
	
	  let imgwidth=banner[0].offsetWidth
    let current=0,next=0;
    bannerb.onmouseenter=function(){
      clearInterval(bant)
    }
    bannerb.onmouseleave=function(){
      bant=setInterval(banmove,2000)
    }
    for(let i=0;i<luna.length;i++){
      luna[i].onclick=function(){
        next=i;
        if(next>current){
      banner[next].style.left=imgwidth+'px';
     animate(banner[current],{left:-imgwidth});
     animate(banner[next],{left:0});
     luna[current].className=''
     current=next;
     luna[next].className='hot'
     }
     if(next<current){
      banner[next].style.left=-imgwidth+'px';
     animate(banner[current],{left:imgwidth});
     animate(banner[next],{left:0});
     luna[current].className=''
     current=next;
     luna[next].className='hot'
     }
  }

    }
    let bant=setInterval(banmove,2000)
    function banmove(){
       next++;
       if(next==banner.length){
        next=0
       }
     banner[next].style.left=imgwidth+'px';
     animate(banner[current],{left:-imgwidth});
     animate(banner[next],{left:0});
     luna[current].className=''
     current=next;
     luna[next].className='hot'
    }








    let hgroup=$(".hgroupleft");
    hgroup.hover(function(){
    	$(this).find(".hidden").css({display:"block"})
    },function(){
    	$(this).find(".hidden").css({display:"none"})
    })
    let zhezhao=$('.zhezhao');
    zhezhao.hover(function(){
    	$(this).css({opacity:"1"})
    },function(){
    	$(this).css({opacity:"0"})
    })
    $("img.lazy").lazyload();
    let section=$(".section");
    let navs=$(".topp")
       let asideleft=$(".asideleft")
       let mao=asideleft.find("a")
       let mulu=$(".beautiful")
       // console.log(mulu.length)
       let cainixihuan=$(".cai")
       let wh=innerHeight;
       let cainitop=cainixihuan.offset().top;
       let toparr=[];
       let colorarr=['#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#F7A945','#DD2727']
       let aside=0,flag2=true;
       for(let i=0;i < mulu.length;i++){
       	 toparr.push($(mulu[i]).offset().top);
       } 
       toparr.push(cainitop,0)
        console.log(toparr)
       $(window).scroll(function(){
       	let tops=$("body").scrollTop();
       	// console.log(tops)
       	let flag1=true;
        if(tops>=800){
          if(flag1){
            flag1=!flag1
         navs.css("transform",'translateY(50px)')
         asideleft.css({width:"36",height:"332",opacity:"1"})
         }
          }else if(tops<800){
            if(flag1){
            flag1=!flag1
          navs.css("transform",'translateY(-50px)')
          asideleft.css({width:"0",height:"0",opacity:"0"})
           }
          }
          let flag3=true;
          for(let i=0;i<colorarr.length;i++){
              
              if(tops + wh > toparr[i]+500){ 
              $(mao[aside]).css("background",'');
              $(mao[i]).css("background",colorarr[i]);
              aside=i;

            flag3=false;  
         }
         flag3=true;
        }
       
       for(let i=0;i<mao.length;i++){
              mao[i].onclick=function(){
              $(mao[aside]).css("background",'');
              $(mao[i]).css("background",colorarr[i]);
              aside=i;
              flag3=false;
              /*$("body").animate(function(){
              	$(this).scrollTop(`${toparr[i]}+500`)
              })*/
              animate(document.body,{scrollTop:toparr[i]},function(){flag3=true});
             }
          }
       })
})