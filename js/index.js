var load = function(){
    let l = [0, 4, 45, 121, 8940]; // red, purple, yellow, white, gray

    document.getElementById("red").innerHTML = `自主存儲單位數量: ${l[0]}`;
    document.getElementById("purple").innerHTML = `公事包數量: ${l[1]}`;
    document.getElementById("yellow").innerHTML = `探險家背包數量: ${l[2]}`;
    document.getElementById("white").innerHTML = `腰包數量: ${l[3]}`;
    document.getElementById("gray").innerHTML = `老舊袋子數量: ${l[4]}`;
    document.getElementById("need").innerHTML = `還需要的老舊袋子數量: ${75000 - l[0]*75000 - l[1]*3000 - l[2]*150 - l[3]*10 - l[4]}`;

    var max = Math.floor((l[0]*75000 + l[1]*3000 + l[2]*150 + l[3]*10 + l[4])/75000*10000)/100;
    document.getElementById("progress_bar_1").innerHTML = `
    <div class="percent">${max}%</div>
    <progress value="${max*750}" max="75000" class="progress_bar_1" id="progress_bar_1"></progress>;
    `
}

load();
