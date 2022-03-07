var load = function(){
    let l = [0, 3, 41, 76, 6040]; // red, purple, yellow, white, gray

    document.getElementById("red").innerHTML = "自主存儲單位數量: " + l[0].toString();
    document.getElementById("purple").innerHTML = "公事包數量: " + l[1].toString();
    document.getElementById("yellow").innerHTML = "探險家背包數量: " + l[2].toString();
    document.getElementById("white").innerHTML = "腰包數量: " + l[3].toString();
    document.getElementById("gray").innerHTML = "老舊袋子數量: " + l[4].toString();
    document.getElementById("need").innerHTML = "還需要的老舊袋子數量: " + (75000 - l[0]*75000 - l[1]*3000 - l[2]*150 - l[3]*10 - l[4]).toString();

    var max = Math.floor((l[0]*75000 + l[1]*3000 + l[2]*150 + l[3]*10 + l[4])/75000*10000)/100;
    document.getElementById("progress_bar_1").innerHTML = '<div class="percent">' + max.toString() + '%</div><progress value="' + (max*750).toString() + '" max="75000" class="progress_bar_1" id="progress_bar_1"></progress>';
}

load();