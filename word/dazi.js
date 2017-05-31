window.onload=function(){
    function Game(){
            this.len=5;
            this.arr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
            this.cw=window.innerWidth;
            this.speed=10;
            this.zarr=[];
    }
    Game.prototype={
        start:function(){
            for(let i=0;i<this.len;i++){
                this.getlength();
            };
            this.drop();
            this.key();
        },
    getlength:function(){
        let num=Math.floor(Math.random()*this.arr.length);
        let ele=document.createElement('div');
        let lefts=Math.random()*(this.cw-400)+200,tops=Math.random()*100;
        ele.style.cssText=`width:50px;height:50px;background:red;text-align:center;line-height:50px;border-radius:50%;position:absolute;left:${lefts}px;top:${tops}px`;
        ele.innerText=this.arr[num];
        document.body.appendChild(ele);
        this.zarr.push(ele);
        // console.log(lefts)
    },
    drop:function(){
        let self=this;
        let t=setInterval(function(){
            for(let i=0;i<self.zarr.length;i++){
                let topss = self.zarr[i].offsetTop+self.speed;
                // console.log(topss)
                self.zarr[i].style.top=topss+'px'
                if(topss > 500){
                    document.body.removeChild(self.zarr[i]);
                    self.zarr.splice(i,1)
                }
            };
            if(self.zarr.length < self.len){
                self.getlength()
            }
        },100);
    },
    key:function(){
        document.body.onkeydown=function(e){
           let code = String.fromCharCode(e.keyCode);
           console.log(code)
            for(let j=0;j<this.zarr.length;j++){
               if(code == this.zarr[j].innerText){
                   document.body.removeChild(this.zarr[j]);
                   this.zarr.splice(j,1)
               }
            }
            if(this.zarr.length < this.len){
                this.getlength();
            }
        }.bind(this);
    }
};
    let game=new Game();
    game.start();
}