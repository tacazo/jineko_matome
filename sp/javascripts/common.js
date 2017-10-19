// JavaScript Document
/*
function openWithLayer(url,w,h){
	var varBody = $(window).width() - 20;
	if(varBody >= 768){
		$.layer({
			type: 2,
			title: false,
			closeBtn: [0, false],
			iframe: {src: url},
			area: ["750px", "650px"],
			offset: ['30px', '']
		});
	}else{
		$.layer({
			type: 2,
			title: false,
			closeBtn: [0, false],
			iframe: {src: url},
			area: [w, h],
			offset: ['30px', '']
		});
	}
		

}*/

function showTab(num){
		trs = document.getElementById("gNav").getElementsByTagName("li");
		for(j=0; j<trs.length;j++){
			trs[j].className = "";
		}
		trs[num-1].className = "on";
		
		obj=document.getElementById("nav_tabs");
		obj.style.display = "block";
		
		for(i=1; i<=trs.length; i++){
			ti = document.getElementById("nav_tab_" + i);
			ti.style.display = "none";	
		}
		tg = document.getElementById("nav_tab_" + num);
		tg.style.display = "block";
}

function close_nav_tab(){
	
		trs = document.getElementById("gNav").getElementsByTagName("li");
		obj=document.getElementById("nav_tabs");
		obj.style.display = "none";
		for(j=0; j<trs.length;j++){
			trs[j].className = "";
		}
		for(i=1; i<=trs.length; i++){
			ti = document.getElementById("nav_tab_" + i);
			ti.style.display = "none";	
		}
}