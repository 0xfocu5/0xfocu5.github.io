// 设置页脚博主会动的心
$(document).ready(function(e){
    $('.copyright').html('©2020-2021 <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> 燕乘风');
})

// 移除页脚样式
var app = document.getElementById('footer');
app.removeAttribute('id')

/*添加图片top*/
var top_up = "<img id='upj' class='upj' style='max-width: 1000%; transform: translate(-70px,-70px);' src='https://focu5.oss-accelerate.aliyuncs.com/blog/up.gif' title='回到顶部' >";
/*添加到返回顶部按钮下*/
document.getElementById("go-up").innerHTML += top_up;

//去除banner图
//var full_page = document.getElementsByClassName("full_page");
//if (full_page.length != 0) {
//  full_page[0].style.background = "transparent";
//}