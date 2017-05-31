window.onload=function(){
    let navd=document.getElementsByClassName('navdson')
    // console.log(navd[0])
    navd[0].style.zIndex='1'
    let navindex=0
    let navt=setInterval(nav,3000)
    function nav(){
    	++navindex
    	if(navindex==navd.length){
    		navindex=0;
    	}
    	for(let i=0;i<navd.length;i++){
    		navd[i].style.display='none';
    	}
    	navd[navindex].style.display='block'
    }
     

     let headword=document.getElementsByClassName('headword');
     for(let i=0;i<headword.length;i++){
     	let maotou=headword[i].getElementsByTagName('img')[0]
     	// console.log(maotou)
     	headword[i].onmouseenter=function(){
     		maotou.style.transform='translateY(-10px)'
     	}
     	headword[i].onmouseleave=function(){
     		maotou.style.transform='translateY(0)'
     	}
     }
     


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


        let hgroupleft=document.getElementsByClassName('hgroupleft')
        let hidden=document.getElementsByClassName('hidden')
        // console.log(hidden)
        // console.log(hgroupleft)
        for(let i=0;i<hidden.length;i++){
        	hgroupleft[i].onmouseenter=function(){
        		hidden[i].style.display='block'
        	}
            hgroupleft[i].onmouseleave=function(){
        		hidden[i].style.display='none'
        	}
        }

        let paizi=document.getElementsByClassName('paizi')
        let zhezhao=document.getElementsByClassName('zhezhao')
        // console.log(paizi[0])
        for(let i=0;i<paizi.length;i++){
        paizi[i].onmouseover=function(){
        	zhezhao[i].style.opacity='1'
        }
        paizi[i].onmouseout=function(){
        	zhezhao[i].style.opacity='0'
        }
       }

       let paizi24=document.getElementsByClassName('paizi24')[0]
       // console.log(paizi24)
       let paizi241=paizi24.getElementsByTagName('span')[0]
       let paizi242=paizi24.getElementsByTagName('a')[0]
       // console.log(paizi242)
       paizi24.onmouseover=function(){
       	paizi24.style.background='red'
       	paizi241.style.transform='rotate(360deg)'
       	paizi241.style.borderColor='#fff'
       	paizi242.style.color='#fff'
       }
       paizi24.onmouseout=function(){
       	paizi24.style.background='#FFFFFF'
       	paizi241.style.transform='rotate(0deg)'
       	paizi241.style.borderColor='#999999'
       	paizi242.style.color='#999999'
       }




       // 检测滚动轮
       let sections=document.getElementsByClassName('section')[0]
       let navs=document.getElementsByClassName('topp')[0]
       let asideleft=document.getElementsByClassName('asideleft')[0]
       let mao=asideleft.getElementsByTagName('a')
       let mulu=document.querySelectorAll('.beautiful')
       let asideL=document.querySelector('.asideleft')
       // console.log(mulu)
       let cainixihuan=document.getElementsByClassName('cai')[0]
       let wh=innerHeight;
       let cainitop=cainixihuan.offsetTop;
       let toparr=[];
       mulu.forEach(function(value,index){
             toparr.push(value.offsetTop)
            })
       toparr.push(cainitop,0)
       // console.log(sections);
       
       let xuimg=sections.getElementsByTagName('img')
       window.onscroll=function(){
        let tops=document.body.scrollTop;
        let flag1=true;
        if(tops>=800){
          if(flag1){
            flag1=!flag1
         navs.style.transform='translateY(50px)'
         }
          }else if(tops<800){
            if(flag1){
            flag1=!flag1
          navs.style.transform='translateY(-50px)'
           }
          }

          let flag3=true;
        if(tops>=800){
          if(flag3){
            flag3=!flag3
         asideL.style.height='332px'
         asideL.style.width='36px'
         asideL.style.opacity='1';
         }
          }else if(tops<800){
            if(flag3){
            flag3=!flag3
          asideL.style.height='0px'
          asideL.style.width='0px'
          asideL.style.opacity='0';
           }
          }
          // let asid=0;
          for(let i=0;i<colorarr.length;i++){
              for(let j=0;j<colorarr.length;j++){
                mao[j].style.background='';
              }
              if(tops + wh > toparr[i]+1000){ 
              mao[i].style.background=colorarr[i];
              console.log(mao[i].style.background)
            aside=i;

            // flag2=false;  
         }
         // flag2=true;
        }
            
            let imgtop=[]
             for(let j=0;j<xuimg.length;j++){
              imgtop.push(xuimg[j].offsetTop)
            }
              for(let k=0;k<imgtop.length;k++){
                if(tops + wh > imgtop[k]){
                xuimg[k]['src']=xuimg[k]['title']
                 }
              } 
       }
       let aside=0,flag2=true;
       let colorarr=['#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#F7A945','#DD2727','#ACACAC']
       for(let i=0;i<mao.length;i++){
              mao[i].onclick=function(){
              mao[aside].style.background='';
              mao[i].style.background=colorarr[i];
              aside=i;
              flag2=false;
              animate(document.body,{scrollTop:toparr[i]+500},function(){flag2=true});
             }
          }
}