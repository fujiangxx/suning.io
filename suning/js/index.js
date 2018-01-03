window.onload=function(){
    {
        let navLeft=document.querySelector(".gddw");
        let navLeftli=navLeft.querySelectorAll(".nav-left ul li");
        let title=document.querySelector(".title-for-floors");
        let titleli=title.querySelectorAll(".title ul li");
        let totop=document.querySelector(".nav-left .litop");
        var flag=true;
        window.onscroll=function(){
            let st=document.documentElement.scrollTop;//浏览器滚动的速度
            if(flag){
                if(st>1000){
                    navLeft.style.display="block";
                }else{
                    navLeft.style.display="none";
                }
                titleli.forEach(function (ele,index) {
                    if(st<titleli[0].offsetTop){
                        navLeftli[0].classList.add("active");
                        for(let i=0;i<navLeftli.length;i++){
                            navLeftli[i].classList.remove("active")
                        }
                        navLeftli[0].classList.add("active");
                    }
                    if(st>=ele.offsetTop){
                        navLeftli[0].classList.add("active");
                        for(let i=0;i<navLeftli.length;i++){
                            navLeftli[i].classList.remove("active")
                        }
                        navLeftli[index+1].classList.add("active");
                    }
                })
            }
        }
        //跳回顶部
        totop.onclick=function(){
            let st=document.documentElement.scrollTop;
            let speed=st*30/1000;
            let t=setInterval(function(){
                st-=speed;
                if(st<=0){
                    st=0;
                    clearInterval(t);
                }
                document.documentElement.scrollTop=st;
            },30)
        }
        //楼层跳转
        navLeftli.forEach(function(el,index){
            el.onclick=function(){
                flag=false;
                let now=document.documentElement.scrollTop;
                let target=titleli[index].offsetTop;
                let speed=(target-now)*30/300;
                for(let i=0;i<navLeftli.length;i++){
                    navLeftli[i].classList.remove("active");
                }
                let time=0;
                let t=setInterval(function(){
                    now+=speed;
                    time+=30;
                    if(time==300){
                        clearInterval(t);
                        now=target;
                        flag=true;
                    }
                    document.documentElement.scrollTop=now;
                },30)
                el.classList.add("active");
            }
        })

    }
    
}