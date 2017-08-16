function editTable () {
	//检测到点击
	//显示input并且传值给input
	
}



js代码能不能点击表格任意一单元格得到那个单元格的行数
<script type="text/javascript">
document.onclick = function(e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    if(target.tagName.toLowerCase() === "<a href="https://www.baidu.com/s?wd=td&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1Y3m1c4mhPbnHRsuyfsPjmk0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3EPHRsPj61nj6z" target="_blank" class="baidu-highlight">td</a>") {
        var rowIdx = target.parentNode.rowIndex + 1;
        alert("第 " + rowIdx + " 行");
    }
};
</script>


1.复制原来那个单元格里面的内容到一个变量
2.将那个单元格的内容替换为一个输入框(input)
3.将那个变量的内容赋值给输入框
反向操作：
1.取得输入框里的内容并赋值给一个变量
2.将单元格清空，并将那个变量的值填写到单元格里
追问
这个点击单元格变为可编辑我会了，但是现在是想说，如果有一个修改按钮存在，我在点击这个按钮后，想让table里面的某一个单元格变为可编辑怎么实现呢
追答
原理都是一样的，最多在触发的时候附加上对应单元格的相关参数就可以了
比方说你想改变4行2列的单元个，那么可能参数就是4_2，或者就是2个参数4和2，然后根据你的参数再去找到那个单元格
这个可以根据你自己的喜好来做了


检测到点击之后，就在 td 里生成个 input，输入好后获取 input 的值，设置成 td 的 innerHTML 即可











根据按钮寻找对应的table元素；
隐藏/显示按妞，jq的hide/show 
禁用：将table中的所有元素循环禁用，如过有些是不需要禁用的，可以增加一些自定义字段进行判断；
启用：同禁用相同；
代码：Ps: 因为你没给代码，所以，我这里的布局肯定跟你不同。

//代码没有经过测试，直接在编辑器中写的。

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
<html>
    <head>
    <style type="text/css">
        #okBtn{display:none;}
    </style>
    </head>
    <body>
        <!-- 第一个table -->
        <div class="table">
            <div class="btn">
                <button id="editBtn">修改</button>
                <button id="okBtn">确定</button>
            </div>
            <table>
                <tr><td><input type="text" /></td></tr>
            </table>
        </div>
        <!-- 第二个table -->
        <div class="table">
         
        </div>
    </body>
</html>
//js代码

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
//引入jquery.js
<script type="text/javascrpt".
    $(function(){
        //绑定事件
        //修改
        $('body').delegate('#editBtn",'click',function(ev){
           //按钮切换
           ev = ev || window.event;
           var t = ev.srcElement || ev.target,$t = $(t),$p = $t.parent(),$table = $p.find('table');
           $p.find('#editBtn').css('display','none');
           $p.find('#okBtn').css('display','block');
           //启用table
           $table.find('input').each(function(){
               var $ele = $(this);
               $ele.disabled = false;
           });
        });
        //确定
        $('body').delegate('#okBtn','click',function(){
            //此处与修改正好相反，如果这里不会的话，再追问。
        });
    });
</script>
