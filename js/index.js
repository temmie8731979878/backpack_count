var load = function(){
    let l = [0, 1, 10, 24, 2473]; // red, purple, yellow, white, gray

    
    document.getElementById("red").innerHTML = "自主存儲單位數量: " + l[0].toString();
    document.getElementById("purple").innerHTML = "公事包數量: " + l[1].toString();
    document.getElementById("yellow").innerHTML = "探險家背包數量: " + l[2].toString();
    document.getElementById("white").innerHTML = "腰包數量: " + l[3].toString();
    document.getElementById("gray").innerHTML = "老舊袋子數量: " + l[4].toString();
    document.getElementById("need").innerHTML = "還需要的老舊袋子數量: " + (75000 - l[0]*75000 - l[1]*3000 - l[2]*150 - l[3]*10 - l[4]).toString();
    document.getElementById("progress_bar").innerHTML = '<div class="percent">' + Math.floor((l[0]*75000 + l[1]*3000 + l[2]*150 + l[3]*10 + l[4])/75000*100).toString() + '%</div><progress value="' + (l[0]*75000 + l[1]*3000 + l[2]*150 + l[3]*10 + l[4]).toString() + '" max="75000" class="progress_bar" id="progress_bar"></progress>'
}

load();