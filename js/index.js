$(function(){


    /*获取元素*/
    var $banner=$(".sn_banner");
    /*获取宽度*/
    var width=$banner.width();
    /*获取图片的ul*/
    var $imgBox=$banner.find("ul:eq(0)");
    /*获取点盒子*/
    var $pointBox=$banner.find('ul:last');
    var animateFuc=function(){
        $imgBox.animate({'transform':'translateX('+(-index*width)+'px)'},200,'swing',function(){

            if(index>=9){
                index=1;
                $imgBox.css({'transform':'translateX('+(-index*width)+'px)'});
            }else if(index<=0){
                index=8;
                $imgBox.css({'transform':'translateX('+(-index*width)+'px)'});
            }
            /*点盒子对应滑动*/
            $pointBox.find('li').removeClass('now').eq(index-1).addClass("now");

        })
    }
    /*自动滚动*/
    var index=0;
    var timer=setInterval(function(){
        index++;
        /*动画 animate  需要动画的属性对象  动画的长度  动画的速度 动画执行完成的回调函数*/
        animateFuc();

    },5000);
    /*手势滑动*/

    $imgBox.on('swipeLeft',function () {
        /*下一张*/
        index ++;
        console.log(index);
        animateFuc();
    }).on('swipeRight',function () {
        /*上一张*/
        index --;
        console.log(index);
        animateFuc();
    });


    })
