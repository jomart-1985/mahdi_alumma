//localStorage.setItem("fullsmode", "false");



var gg ;

document.addEventListener("fullscreenchange", function () {
    gg = (document.fullscreen)? "full" : "not ";

	if(gg == "full"){
		
		document.getElementById('FullS').innerHTML="تعطيل الحجم الكلي F11";
        	
	}
	else{
		
		document.getElementById('FullS').innerHTML="تحجيم كلي للشاشة F11";
        		
	}
}, false);

document.addEventListener("mozfullscreenchange", function () {
    gg = (document.mozFullScreen)? "full" : "not ";
	
	if(gg == "full"){
		
		document.getElementById('FullS').innerHTML="تعطيل الحجم الكلي F11";	
		
	}
	else{
		document.getElementById('FullS').innerHTML="تحجيم كلي للشاشة F11";
        	
	
	}
	
}, false);

document.addEventListener("webkitfullscreenchange", function () {
    gg = (document.webkitIsFullScreen)? "full" : "not ";
		//alert(gg);
	
	if(gg == "full"){
	
		document.getElementById('FullS').innerHTML="تعطيل الحجم الكلي F11";	
		
		
		
	}
	else{
		document.getElementById('FullS').innerHTML="تحجيم كلي للشاشة F11";
		
       		
	}
}, false);

document.addEventListener("msfullscreenchange", function () {
    gg = (document.msFullscreenElement)? "full" : "not ";
	
	if(gg == "full"){
		
		document.getElementById('FullS').innerHTML="تعطيل الحجم الكلي F11";
        	
	}
	else{
		document.getElementById('FullS').innerHTML="تحجيم كلي للشاشة F11";
       	
	}
}, false);



if (typeof process !== "undefined" && typeof require !== "undefined") {
if(localStorage.getItem("fullsmode")== "true"){
  var docElm = document.documentElement;
  if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        }


document.getElementById('FullS').innerHTML="تعطيل الحجم الكلي F11";

}
else{
	
document.getElementById('FullS').innerHTML="تحجيم كلي للشاشة F11";
}
}


function toggfullScreen() {

    var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null);

    var docElm = document.documentElement;
    if (isInFullScreen) {
        
		 if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
		
		localStorage.setItem("fullsmode", "false");
	
    }else{
	
	
	    if (typeof process !== "undefined" && typeof require !== "undefined") {
			
			if(localStorage.getItem("fullsmode")=="true"){
			 
			  
	    
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        }

         if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
			 localStorage.setItem("fullsmode", "false");
       
			}
			else{
      
		if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        }
			   
              localStorage.setItem("fullsmode", "true");
			}
			
		}
		else{
		
	    if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        }
       
		
		}
    }
}


document.getElementById("FullS").onclick = function () {


	
	
	if(getbooleanindexopage()=="3"){
		
	 var dropdowns = document.getElementsByClassName("dropdown-content");
       var i;
       for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
         if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
         }
       }
	   
	}
	
	if(getbooleanindexopage()=="2"){
		
	 var dropdowns = document.getElementsByClassName("dropdown-content");
       var i;
       for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
         if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
         }
       }
	   
	}
	
	
	if(getbooleanindexopage()=="1"){
		
	 $('.ui-popup').popup('close');
	}
	
	toggfullScreen.call(); 
	};


document.onkeydown = keydown;

function keydown(e) {
  var evtobj = window.event ? event : e
  if (evtobj.keyCode == 122){
	  
  evtobj.keyCode = 0;
  evtobj.returnValue = false;
  
toggfullScreen.call();
  }
} 


