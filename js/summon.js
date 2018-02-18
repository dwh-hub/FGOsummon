var sevent5 = new Array("002","008","037","052","059","060","062","065","075","076","077","084","085","097","098","099","113","118","119","143","144");
var sevent4 = new Array("005","006","010","011","014","018","029","030","041","046","047","048","058","066","067","074","078","082","087","089","094","100","101","102","103","109","116","120","121","122","123","140","145","146","147");

var saber5 = new Array("002","008","076");
var archer5 = new Array("060","077","084");
var lancer5 = new Array("085","119","143");
var rider5 = new Array("065","118","144");
var caster5 = new Array("037","062","113");
var RAssassin5 = new Array("059","075");
var berserker5 = new Array("052","097","098");

var saber4 = new Array("005","006","010","101","121","123");
var archer4 = new Array("011","014","122");
var lancer4 = new Array("018","078","087","102","140","146");
var rider4 = new Array("029","030","066","094","099");
var caster4 = new Array("067","074","100","103","120","145");
var assassin4 = new Array("041","046","147");
var berserker4 = new Array("047","048","058","082","089","116");

var craft5 = new Array("031","032","033","034","035","040","048","057","058","067","075","175","185","188","263","400");
var craft4 = new Array("021","022","023","024","025","026","027","028","029","030","038","039","047","056","066","073","074","098","176","182","183","184","186","264","401");

var quartz = 167;
var useQuartz = 0;
var baodi = 0;
var times = 0;
var money = 0;

$("#oneS").on("click", function(){
  oneSummon(1);
});
$("#tenS").on("click", function(){
  tenSummon();
});
function Aplay(){
  let auto = $("#auto_buy").prop("checked");
  if(auto){
    quartz += 167;
    money += 518;
    $("#money").text(money);
    return;
  }
  let buy = confirm("圣晶石不足，是否充？(氪一单吧，先生)");
  if (buy) {
  	quartz += 167;
    money += 518;
  	confirm("购买成功！");
  	$(".quartz").text(quartz);
    $("#money").text(money);
  } else {
  	confirm("取消充值(骗氪失败)");
  }
}

// 单抽
function oneSummon(){
  clearSummmon();
  // 扣石头
  if (quartz < 3) {
  	Aplay();
  } else {
  	quartz -= 3;
    times += 1;
    useQuartz += 1;
    $("#useQuartz").text(useQuartz);
    $(".quartz").text(quartz);
    $("#times").text(times);
    summon(1);
  }
}
// 十连
function tenSummon() {
  if (quartz < 30) {
  	Aplay();
  } else {
  	quartz -= 30;
    useQuartz += 30;
    times += 10;
    $("#useQuartz").text(useQuartz);
  	$(".quartz").text(quartz);
    $("#times").text(times);
  }
  for (let i = 1; i <= 10; i++) {
  	summon(i);
  }
  if (baodi = 10) {
    let bd = Math.ceil(Math.random()*10);
    let LZ4 = Math.floor(Math.random()*craft5.length);
    let imgurl = "http://fgowiki.com/fgo/equip/"+craft4[LZ4]+".jpg"
    $("#r_" + bd).attr("src", imgurl);
    baodi = 0;
    console.log("baodi" + baodi);
  } else {
    console.log("baodi" + baodi);
    baodi = 0;
  }
}

function clearSummmon(){
  for(let i = 1; i <= 10; i++){
    $("#r_" + i).attr("src", "");
  }
}

function summon(i){
  var PR = Math.random();
  if (PR <= 0.01) {
    let star5 = Math.floor(Math.random()*sevent5.length);
    let imgurl = "http://file.fgowiki.591mogu.com/fgo/head/"+sevent5[star5]+".jpg";
    $("#r_" + i).attr("src", imgurl);
    $("#serv5").prepend("<img class=\"img-thumbnail\" src=\""+imgurl+"\"></img> ");
    console.log(star5);
  } else if(PR <= 0.04 && PR > 0.01) {
    let star4 = Math.floor(Math.random()*sevent4.length);
    let imgurl = "http://file.fgowiki.591mogu.com/fgo/head/"+sevent4[star4]+".jpg";
    $("#r_" + i).attr("src", imgurl);
    $("#serv4").prepend("<img class=\"img-thumbnail\" src=\""+imgurl+"\"></img> ");
    console.log(star4);
  } else if(PR <= 0.08 && PR > 0.04) {
    let LZ5 = Math.floor(Math.random()*craft5.length);
    let imgurl = "http://fgowiki.com/fgo/equip/"+craft5[LZ5]+".jpg"
    $("#r_" + i).attr("src", imgurl);
    $("#craft5").prepend("<img class=\"img-thumbnail\" src=\""+imgurl+"\"></img> ");
    console.log(LZ5);
  } else if(PR <= 0.20 && PR > 0.08) {
    let LZ4 = Math.floor(Math.random()*craft5.length);
    let imgurl = "http://fgowiki.com/fgo/equip/"+craft4[LZ4]+".jpg"
    $("#r_" + i).attr("src", imgurl);
    $("#craft4").prepend("<img class=\"img-thumbnail\" src=\""+imgurl+"\"></img> ");
    console.log(LZ4);
  } else {
    let imgurl = "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1004026919,1933524333&fm=27&gp=0.jpg"
    $("#r_" + i).attr({
      "src" : imgurl,
      "width" : 138
    });
    $("#r_" + i).height(140);
    baodi += 1;
  }
  return PR;
}
