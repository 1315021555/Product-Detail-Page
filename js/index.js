//作用：将所有的DOM元素对象全部加载完毕后再执行函数
window.onload = function(){

    //声明一个记录点击的缩略图下标
    var imgIndex = 0;

    navPathDataBind();
    bigClassBind();
    thumbnailData();
    thumbnailClick();
    thumbnailLeftRightClick();

    //路径导航的数据渲染
    function navPathDataBind(){
        /*
        思路：
        1. 先获取路径导航的页面元素
        2. 再来获取所需要的数据
        3. 由于数据是需要动态产生的，那么相应的dom元素也应该是动态产生的
        4. 遍历数据创建DOM元素，最后一条只创建a标签，没有i标签
        */

        //1、获取路径导航元素
        var navPath = document.querySelector('#wrapper #content .contentMain #navPath');
        console.log(navPath);
        //2.获取数据
        var path = goodData.path;
        console.log(path);
        //遍历创建数据
        for (var i =0;i<path.length;i++){
            if (i ==path.length-1){
                var aNode = document.createElement("a");
                aNode.innerText = path[i].title;
                navPath.appendChild(aNode);
            }else{
                //创建a标签
            var aNode = document.createElement("a");
            aNode.innerText = path[i].title;
            aNode.href = path[i].url;
            //创建i标签
            var iNode = document.createElement("i");
            iNode.innerText = '/';

            //在navPath中追加a和i标签
            navPath.appendChild(aNode);
            navPath.appendChild(iNode);
            }

        }
    }

    //放大镜的移入移出效果
    function bigClassBind(){
        /* 
        思路：
        1、获取小图框元素对象，并且设置移入事件（onmouseenter）
        2、动态创建蒙版元素和大图框、大图片元素
        3、移出时移除蒙版和大图框
         */

        //获取imagessrc数据
        var imagessrc = goodData.imagessrc;

        //获取leftTop元素
        var leftTop = document.querySelector('#wrapper #content .contentMain #center #left #leftTop');
        //获取小图框元素
        var smallPic = document.querySelector('#wrapper #content .contentMain #center #left #leftTop #smallPic');
        //设置移入的事件
        smallPic.onmouseenter = function(){ 
            //创建蒙版元素
            var maskDiv = document.createElement('div');
            maskDiv.className = 'mask';

            //创建大图框元素
            var bigPic = document.createElement('div');
            bigPic.id =  'bigPic';

            //创建大图片元素
            var bigImg = document.createElement('img');
            bigImg.src= imagessrc[imgIndex].s;

            //大图框来追加大图片,小图框追加蒙版
            bigPic.appendChild(bigImg);
            smallPic.appendChild(maskDiv);

            //LeftTop追加大图框
            leftTop.appendChild(bigPic);


            //设置移动事件
            smallPic.onmousemove = function(event){
                var left = event.clientX - smallPic.getBoundingClientRect().left-maskDiv.offsetWidth/2; 
                var top = event.clientY - smallPic.getBoundingClientRect().top-maskDiv.offsetHeight/2; 
                //移动边界判读
                if (left<0) left =0;
                else if (left > smallPic.clientWidth -maskDiv.offsetWidth) left = smallPic.clientWidth -maskDiv.offsetWidth;

                if (top<0) top =0;
                else if (top > smallPic.clientHeight -maskDiv.offsetHeight) top=smallPic.clientHeight -maskDiv.offsetHeight;

                maskDiv.style.left = left +'px';
                maskDiv.style.top = top +'px';

                //移动的比例 =  蒙版元素移动的距离 / 大图片元素移动的距离
                var scale = (smallPic.clientWidth - maskDiv.offsetWidth)  / (bigImg.offsetWidth - bigPic.clientWidth);
                //console.log(scale);     //0.495

                bigImg.style.left = -left/scale +'px';
                bigImg.style.top = -top/scale +'px';

                
            }
            //设置移出事件
            smallPic.onmouseleave = function(){
                smallPic.removeChild(maskDiv);
                leftTop.removeChild(bigPic);
            }

        }
    }

    //动态渲染放大镜缩略图的数据
    function thumbnailData(){
        /*
        思路：
        1、先获取ul
        2、再获取data.js文件下的goodData->imagessrc
        3、遍历数组，根据数组创建li元素 
        4、让ul追加li
         */


        //1、获取ul
        var ul = document.querySelector('#wrapper #content .contentMain #center #left #leftBottom #piclist ul');
        //2、获取imagessrc数据
        var imagessrc = goodData.imagessrc;
        //3、遍历数组，创建li
        for (var i = 0; i<imagessrc.length;i++){
            //4、创建li
            var newLi = document.createElement('li');
            //5、创建img
            var newImg = document.createElement('img');
            newImg.src= imagessrc[i].s;
            //6、让li追加img
            newLi.appendChild(newImg);
            //7、让ul追加li
            ul.appendChild(newLi);

        }
    }

    //点击缩略图实现图片的切换
    function thumbnailClick(){
    /*
            思路：
            1、获取所有li元素，并且循环绑定点击事件
            2、点击缩略图，需要确定其下标位置来找对应图片路径来替换现有src的值 
            */

            //1、获取所有li元素
            var liNode = document.querySelectorAll('#wrapper #content .contentMain #center #left #leftBottom #piclist ul li');
            var smallPic_img = document.querySelector('#wrapper #content .contentMain #center #left #leftTop #smallPic img')
            var imagessrc = goodData.imagessrc;

            //小图的路径默认和imagessrc的第一个元素相同
            smallPic_img.src = imagessrc[0].s;
            //2、循环绑定点击事件
            for (let i=-0;i<liNode.length;i++){
                liNode[i].onclick = function(){
                    //console.log(i);
                    imgIndex=i;
                     //变化小图路径
                    smallPic_img.src = imagessrc[imgIndex].s;
                }
            }
    }

    //点击箭头实现缩略图轮播效果
    function thumbnailLeftRightClick(){
        /* 
        思路:
        1、获取左右按钮
        2、获取可视的div以及li元素（计算移动距离）
        3、绑定点击事件
        */

        //1、获取箭头元素
        var pre = document.querySelector('.pre');
        var next = document.querySelector('.next');
        //2、获取div以及li
        var piclist = document.querySelector('#piclist');
        var ul = document.querySelector('#piclist ul');
        var liNode = document.querySelectorAll('#piclist ul li')
        //console.log(ul,liNode);


        //计算：
        var start = 0;
        var step = 2*(liNode[0].offsetWidth +20);
        //最大位移 = （图片总数-div中的图片数）*（li宽度+20）
        var endPosition = (liNode.length-5)*(liNode[0].offsetWidth+20);
        
        //绑定事件
        next.onclick = function(){
            start += step;
            if (start > endPosition) start = endPosition;
            ul.style.left = -start +'px';
        }

        pre.onclick = function(){
            start -= step;
            if (start < 0) start = 0;
            ul.style.left = -start +'px';
        }
    }



    

}