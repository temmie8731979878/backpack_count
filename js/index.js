var load = function(){
    let l = [0, 7, 306, 93, 2189]; // red, purple, yellow, white, gray

    document.getElementById("red").innerHTML = `自主存儲單位數量: ${l[0]}`;
    document.getElementById("purple").innerHTML = `公事包數量: ${l[1]}`;
    document.getElementById("yellow").innerHTML = `探險家背包數量: ${l[2]}`;
    document.getElementById("white").innerHTML = `腰包數量: ${l[3]}`;
    document.getElementById("gray").innerHTML = `老舊袋子數量: ${l[4]}`;
    document.getElementById("need").innerHTML = `還需要的老舊袋子數量: ${75000 - l[0]*75000 - l[1]*3000 - l[2]*150 - l[3]*10 - l[4]}`;

    var max = Math.floor((l[0]*75000 + l[1]*3000 + l[2]*150 + l[3]*10 + l[4])/75000*10000)/100;
    document.getElementById("progress_container_1").innerHTML = `
    <div class="progress_text" id="progress_text">${max}%</div>
    `;
    document.getElementById("progress_container_2").innerHTML = `
    <div class="progress_bg" id="progress_bg">.</div>
    <div class="progress_v" id="progress_v" style="--pixel: ${max/100*600}px">.</div>
    <div class="progress_point" id="progress_point"></div>
    `;
    console.log(max/100*600);
}

load();