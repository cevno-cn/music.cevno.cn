$.get("https://v1.alapi.cn/api/comment",function(e,status){
    $('.title').html("《" + e.data.title + "》");
    $('.image>img').attr("src", e.data.image);
    $('.author').html(" - " + e.data.author);
    $('.mp3_url').attr("src", e.data.mp3_url);
    $('.comment_nickname').html(e.data.comment_nickname);
    $('.comment_avatar_url>img').attr("src", e.data.comment_avatar_url);
    $('.comment_content').html(e.data.comment_content);
});

$(function(){
    var num = parseInt(Math.random() * 7);
    $(".row").addClass("row-" + (num + 1));
    var player = $(".mp3_url")[0];
    $(".song .song_").click(function(){
        if (player.paused){
            player.play();
            $(".song .song_").css("animation","name1 5s infinite");
            // document.styleSheets[0].addRule('.song .song_::before', 'display:block');
        }else {
            player.pause();
            $(".song .song_").css("animation","");
            // document.styleSheets[0].addRule('.song .song_::before', 'display:none');
        }
    })
    $(".comment_nickname").dblclick(function(){
        $(".song .song_").css("animation","");
        // document.styleSheets[0].addRule('.song .song_::before', 'display:none');
        $.get("https://v1.alapi.cn/api/comment",function(e,status){
            $('.title').html("《" + e.data.title + "》");
            $('.image>img').attr("src", e.data.image);
            $('.author').html(" - " + e.data.author);
            $('.mp3_url').attr("src", e.data.mp3_url);
            $('.comment_nickname').html(e.data.comment_nickname);
            $('.comment_avatar_url>img').attr("src", e.data.comment_avatar_url);
            $('.comment_content').html(e.data.comment_content);
        });
    });
    player.volume = 0.299;
    setInterval(function(){
        $(".volume i").html(parseInt(player.volume*100));
    },10);
    $(".volume .jian").click(function(){
        if(player.volume == 0){
            alert("音量最低了呀")
        }
        if(player.volume < 0.02){
            player.volume = 0;
            $(".volume i").html("0");
        }else{
            player.volume -= 0.01;
        }
    })
    $(".volume .jia").click(function(){
        if(player.volume == 1){
            alert("音量最高了呀")
        }
        if(player.volume > 0.99){
            player.volume = 1;
            $(".volume i").html("100");
        }else{
            player.volume += 0.01;
        }
    });
    $(".volume span").hide();
    $(".volume").hover(function(){
        $(".volume span").stop().fadeIn();
    },function(){
        $(".volume span").stop().fadeOut();
    })
})
