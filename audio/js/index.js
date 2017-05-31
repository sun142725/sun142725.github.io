/**
 * Created by 孙继红 on 2017/5/16.
 */
window.onload=function(){
    let audio=document.querySelector('audio');
    let songs=document.querySelector('.songs');
    let author=document.querySelector('.anthor');
    let uls=document.querySelector('ul');
    let play=document.querySelector('.play');
    let back=document.querySelector('.back');
    let next=document.querySelector('.next');
    let curTime=document.querySelector('.left');
    let allTime=document.querySelector('.right');
    let current=document.querySelector('.current');
    let cir=document.querySelector('.cir');
    let index=0;
    renger(database[index]);
    back.onclick=function(){
        index--;
        if(index == -1){
            index=database.length-1;
        }
        renger(database[index]);
        audio.play();
        play.classList.add('icon-bofang1')
    };
    next.onclick=function(){
        index++;
        if(index == database.length){
            index=0;
        }
        renger(database[index]);
        audio.play();
        play.classList.add('icon-bofang1')
    };
    play.onclick=function(){
        if(audio.paused){
            audio.play();
            play.classList.add('icon-bofang1');
        }else{
            audio.pause();
            play.classList.remove('icon-bofang1');
        }
    };
    let i=x=0;
    audio.ontimeupdate=function(){
     let currentTime=Time(audio.currentTime);
     curTime.innerText=currentTime;
     let bi=audio.currentTime/audio.duration;
     current.style.width= bi*100+'%';
     cir.style.left=bi*200+'px';
     let string='';
     database[index].lyrics.forEach(function(value,index){
         if(value.time == currentTime){
             x=index;
             if(index<5){
                 i=0;
             }else{
                 i=index-5;
             }
         }
     });
     for(let j=i;j<database[index]['lyrics'].length;j++){
         uls.innerHTML="";
         if(j == x){
             string+=`
             <li class="hot">
                ${database[index]['lyrics'][j]['lyric']}
             </li>`
         }else{
             string += `
             <li>
                ${database[index]['lyrics'][j]['lyric']}
             </li>`
         }
     }
        uls.innerHTML = string;
        if(audio.ended){
            index++;
            if(index == database.length){
                index=0;
            }
            renger(database[index])
            audio.play();
        }
    };
    function Time(time){
        let m=Math.floor(time / 60) >= 10?Math.floor(time / 60):'0'+Math.floor(time / 60);
        let s=Math.floor(time % 60) >= 10?Math.floor(time % 60):'0'+Math.floor(time % 60);
        return `${m}:${s}`
    }
    /*id: "0", songs: "阴天", name: "莫文蔚", src: "music/阴天.mp3", alltime:"04:02", photo: "images/mww.jpg", lyrics: [
        {time: "00:02", lyric: "阴天"},*/

    function renger(obj){
        songs.innerText=obj.songs;
        author.innerText=obj.name;
        audio.src=obj.src;
        let string='';
        obj.lyrics.forEach(function(value,index){
            string += `
            <li>${value.lyric}</li>
            `
        });
        // console.log(string)
        uls.innerHTML="";
        uls.innerHTML=string;
        allTime.innerText=obj.alltime;
    }
};