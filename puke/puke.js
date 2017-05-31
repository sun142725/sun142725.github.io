/**
 * Created by 孙继红 on 2017/5/26.
 */
$(function(){
    let color=['r','m','b','f'];
    let draw=$(".draw");
    let cc={},arr=[];
    let lei,shu,lefts,tops;
    let num=0;
    let box=$(".box");
    let puke;
    first=null;
    for(let i=0;i<52;i++){
        lei=color[Math.floor(Math.random()*4)];
        shu=Math.ceil(Math.random()*13);
        while(cc[lei+'_'+shu]){
            lei=color[Math.floor(Math.random()*4)];
            shu=Math.ceil(Math.random()*13);
        }
        cc[lei+'_'+shu]="true";
        puke=$("<div><img></div>").data("num",shu);
        arr.push(puke);
        puke.find("img").attr("src",`img/puke/${lei}_${shu}.jpg`);
    }
    for(let j=0;j<7;j++){
        for(let k=0;k<(j+1);k++){
            lefts=367.5-60*j+k*120;
            tops=50*j;
            num++;
            $(arr[num]).addClass("puke")
                .prop("id",j+"_"+k)
                .appendTo(box)
                .delay(30*num)
                .animate({left:lefts,top:tops,opacity:"1"})
        }
    }
    for(num=num+1;num<=arr.length;num++){
        $(arr[num]).addClass("puke")
            .attr("honghong","zuo")
            .delay(30*num)
            .animate({left:247.5,top:500,opacity:"1"})
            .appendTo(box)
    }
    $("img:only-child").parent().click(function(){
        let coord=$(this).prop("id").split("_");
        let ele=$(`#${parseInt(coord[0])+1}_${coord[1]}`);
        let ele1=$(`#${parseInt(coord[0])+1}_${parseInt(coord[1])+1}`);
        if(ele.length==1 || ele1.length){
            return;
        }
        $(this).toggleClass("active");
            if($(this).hasClass("active")){
                $(this).animate({top:"-=10"})
            }else{
                $(this).animate({top:"+=10"})
            }
     // console.log($(this).data("num"));

        if($(this).data("num")==13){
            $(".active").animate({top:"0",left:"735"},function(){
                $(this).remove()
            })
        }
        if(!first){
            first=this;
        }else{
            let sum=$(first).data("num")+$(this).data("num");
            if(sum == 13){
                $(".active").animate({top:"0",left:"735"},function(){
                    $(this).remove()
                });
                first=null;
            }else{
                $(".active").animate({top:"+=10"},function(){
                    $(this).removeClass("active")
                });
                first=null;
            }
        }
    });

   let z=0;
    draw.click(function(){
        z++;
        $("div[honghong]:last").removeAttr("honghong")
            // .removeClass("active")
            .css("zIndex",z)
            .animate({left:"+=240"})
            .attr("longer","you");
        if($("div[honghong]").length == 0){
            $("div[longer]").removeAttr("longer")
                .attr("honghong","zuo")
                .css("zIndex",0)
                // .delay(30*z)
                .animate({left:"-=240"})
        }
    })

});