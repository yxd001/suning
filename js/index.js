$(function(){


    /*��ȡԪ��*/
    var $banner=$(".sn_banner");
    /*��ȡ���*/
    var width=$banner.width();
    /*��ȡͼƬ��ul*/
    var $imgBox=$banner.find("ul:eq(0)");
    /*��ȡ�����*/
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
            /*����Ӷ�Ӧ����*/
            $pointBox.find('li').removeClass('now').eq(index-1).addClass("now");

        })
    }
    /*�Զ�����*/
    var index=0;
    var timer=setInterval(function(){
        index++;
        /*���� animate  ��Ҫ���������Զ���  �����ĳ���  �������ٶ� ����ִ����ɵĻص�����*/
        animateFuc();

    },5000);
    /*���ƻ���*/

    $imgBox.on('swipeLeft',function () {
        /*��һ��*/
        index ++;
        console.log(index);
        animateFuc();
    }).on('swipeRight',function () {
        /*��һ��*/
        index --;
        console.log(index);
        animateFuc();
    });


    })
