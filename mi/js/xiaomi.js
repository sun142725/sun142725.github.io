window.onload=function(){
	let banner=document.querySelector('.background');
	let img=banner.querySelectorAll('img');
	let lis=banner.querySelectorAll('li');
	let lefts=banner.querySelector('.left');
	let rights=banner.querySelector('.right');
	console.log(lis);
	for(let i=0;i<lis.length;i++){
		lis[i].onclick=function(){
            for(let j=0;j<img.length;j++){
            	img[j].style.display='none';
			    lis[j].className='';
            }
            img[i].style.display='block'
		    lis[i].className='hot'
		}
	}
	lefts.onmouseenter=function(){
		lefts.style.background='rgba(0,0,0,0.4)';
		lefts.style.color='white';
	}
	lefts.onmouseleave=function(){
		lefts.style.background='';
		lefts.style.color='#757575';
	}
	rights.onmouseenter=function(){
		rights.style.background='rgba(0,0,0,0.4)';
		rights.style.color='white';
	}
	rights.onmouseleave=function(){
		rights.style.background='';
		rights.style.color='#757575';
	}
	lefts.onclick=function(){
		move1();
	}
	rights.onclick=function(){
		move();
	}
	let cur=0;
	let t=setInterval(move,2000);
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	function move(){
		cur++;
		if(cur == img.length){
			cur=0;
		}
		for(let i=0;i<img.length;i++){
			img[i].style.display='none';
			lis[i].className='';
		}
		img[cur].style.display='block'
		lis[cur].className='hot'
	}
	// let curr=0;
	function move1(){
		cur--;
		if(cur == -1){
			cur=img.length-1;
		}
		for(let i=0;i<img.length;i++){
			img[i].style.display='none';
			lis[i].className='';
		}
		img[cur].style.display='block'
		lis[cur].className='hot'
	}

	// 尝试封装
	$("img.lazy").lazyload();
	let what4=$(".what4:has('div')");
	/*what4.hover(function(){
		$(this).find('.xialala').stop(true,true);
        $(this).find('.xialala').slideToggle('slow');
        if($(this).find('.xialala').height() == 285){
        	$(this).find('.xialala').show();
        }
	})*/
	/*$(".banner1").hover(function(){
		$(this).find(".hidden").toggle()
	})*/
	 
}