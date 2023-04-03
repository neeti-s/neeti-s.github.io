
 
 //https://codepen.io/Gexon/pen/rNyqyPK

 if ("ontouchstart" in window){ 

window.addEventListener("load", glavna_funkcija);

               function glavna_funkcija(){
               imgs = document.getElementsByTagName("img");                       
                       let t = 10;
                       let naziv_diva = "";
                       for (img of imgs){
                                       
                                       naziv_diva = "alignnone size-medium wp-image-"+[t];
                                       img.id = naziv_diva;
                                       
                                       
                                       document.getElementById(img.id).addEventListener("touchstart", dotaknut_ekran);
                                      img.style.position  = "relative";                                                                  
                                           t--;
                        }
                        let povrsina = document.getElementById("primary"); 
                       povrsina.addEventListener("touchmove", pomeranje_po_ekranu);
                        povrsina.addEventListener("touchend", kraj_dodira);
           
     
                        var the_moving_div;
                        the_last_mouse_positionX;
                        the_last_mouse_positionY;
                        
                        function dotaknut_ekran(ev){
                                                ev.preventDefault();
                                               the_moving_div            = ev.target.id;      // remember which div has been selected 
                                               the_last_mouse_positionX = ev.touches[0].clientX;        // remember where the mouse was when it was clicked
                                                the_last_mouse_positionY = ev.touches[0].clientY;
                                               
                              
                                                     //alert( the_last_mouse_positionX);
                                              
                                               for (img of imgs) {
                                                               
                                                                      
                                                         if (img.style.zIndex > ev.target.style.zIndex ) {
                                                                       
                                                               img.style.zIndex = img.style.zIndex - 1;
                                                                             
                                                              }
                                                   }
                                                                
                                               ev.target.style.zIndex = imgs.length;
                                              //  ev.target.style.position = "absolute";
                                               let pomeri =  ev.target.getBoundingClientRect();
                                              
                                             if(pomeri.top < 20 ){
                                                         
                                                         window.scrollBy(0, -10);
                                              
                                                 }
                                                 
                                                 if( (pomeri.top + ev.target.offsetHeight+150) > screen.height){
                                                     
                                                    window.scrollBy(0, 10/*pomeri.top + ev.target.offsetHeight +100  - screen.height*/);
                                                    
                                                 }
                                        }
                                        
             function pomeranje_po_ekranu(ev){
                 //ev.preventDefault();
                 if(the_moving_div == "") return;
                 var d = document.getElementById(the_moving_div);
                 d.style.left = d.offsetLeft + ev.touches[0].clientX -  the_last_mouse_positionX + "px";
                 d.style.top = d.offsetTop + ev.touches[0].clientY -  the_last_mouse_positionY + "px";
                     
                 the_last_mouse_positionX  = ev.touches[0].clientX;
                 the_last_mouse_positionY = ev.touches[0].clientY;
                 
                let pomeri =  d.getBoundingClientRect();
                 
                if(pomeri.top < 10 ){ 
                        
                                 window.scrollBy(0, -20);
                         
                 }
                 if(screen.height - pomeri.bottom < 50 ){
                         
                                                     window.scrollBy(0, d.offsetLeft + ev.touches[0].clientX -  the_last_mouse_positionX);
                                                     
                 }
                    // alert( d.offsetLeft);
             }
             
             function kraj_dodira(ev){
             //ev.preventDefault();
             if (the_moving_div == "") return;
               document.getElementById(the_moving_div).style.border = "none";             // hide the border again
               the_moving_div = "";
             
             }
      }	
}

else
{




imgs = document.getElementsByTagName("img");     
     let t = 10;
   
     let naziv_diva = "";
     for (img of imgs){
         
         naziv_diva = "alignnone size-medium wp-image-"+[t];
         img.id = naziv_diva;
         //document.getElementsByClassName(naziv_diva).onmousedown = onMouseDown;
         
         document.getElementById(img.id).onmousedown = onMouseDown;
                                       //img.style.top = t*50+ "px";
                                       
                                       
       //	img.onmousedown = onMouseDown,
       //document.getElementById("broj nodova").innerHTML = img.className;
       t--;
         //if(img.className == naziv_diva){
         // document.getElementById("nesto").innerHTML = naziv_diva;
         
         //document.getElementsByClassName(naziv_diva).onmousedown = onMouseDown;
           //img.onmousedown = onMouseDown;
           //document.getElementById("nesto").innerHTML =t++;
           //t++;
         //	}
           
       }		
       
     /*let stil = document.getElementsByClassName(entry-content);
                       stil.style.float = "";*/
     //odredjivanje onih divova koje treba da budu draggable KRAJ
     
     
          // for (div of divs)  div.onmousedown = onMouseDown,
     
     //document.getElementById(div.id).onmousedown = onMouseDown;
     
     //div.getElementsByTagName("img").onmousedown = onMouseDown
     //var c = div.children.onmousedown = onMouseDown;
     //let duzina = div.childNodes.length;
     //let dete = div.children,
     /*for(let j = 0; j < duzina; j++){
       if(dete[j].tagName.toLowerCase() == "img"){
       dete[j].onmousedown = onMouseDown;
       }
     }*/
     
     //for (div of divs)
     //divs[0].childNodes.onmousedown=onMouseDown;
     
          let i = 0;
      //let a;
          let niz = []; //niz prvo da utvrdimo koordinate za slike pa posle da ih ponovo nakon absolute vratiom inicijalizujemo
           for (img of imgs) {
           
                                    niz.push(img.offsetTop+'px');
                              niz.push(img.offsetLeft+'px');
                             // niz.push(img.offsetRight+'px');
                              //niz.push(img.offsetBottom+'px');
                                  
                                   //let tacka = img.getBoundingClientRect();
      
      niz.push(img.getBoundingClientRect().top+"px");
                            niz.push(img.getBoundingClientRect().left+"px");
                          
                                  // img.style.zIndex =i+ 1;
                             img.style.cursor ="move";
                          //  img.style.float= "none";
                            // img.style.top = niz[i];
                            // img.style.left = niz[i+1];
                            
                             
                           //  img.style.top = niz[i];
                          //   img.style.left = niz[i+1];
                             
                             img.style.position  = "relative";
                            // img.style.right = niz[i+2];
                             //img.style.bottom = niz[i+3];
     //div.childNodes.style.zIndex =i+ 1,
      // a = div.children,
      
      // document.getElementById("broj nodova").innerHTML = a[0].tagName;
     //a[0].style.zIndex =i+ 1,
     //document.getElementsByClassName(img.className).style.zIndex = i +1;
                       
                      
     i++;}
     
     
     /*imgs = document.getElementsByTagName("img");
           for (img of imgs) img.onmousedown = onMouseDown,
     img.style.zIndex =i+ 1, i++;*/
                       
           
           document.onmousemove = onMouseMove;
           document.onmouseup   = onMouseUp;
           
          
           
           var the_moving_div = ''; 
           var the_last_mouse_position = { x:0, y:0 };
           
           
           
           function onMouseDown(e) {
               e.preventDefault();
               the_moving_div            = e.target.id;      // remember which div has been selected 
               the_last_mouse_position.x = e.clientX;        // remember where the mouse was when it was clicked
               the_last_mouse_position.y = e.clientY;
               //e.target.style.border = "2px solid blue";     // highlight the border of the div
           
              
             
              // document.getElementById("paragraf").innerHTML = div.style.zIndex;
               
                
               
               //document.getElementById("hajde").innerHTML = imgs.length;
               for (img of imgs) {
       
       //g = document.getElementById(img.id).style.zIndex;
       
       
               //document.getElementById("broj nodova").innerHTML = "shdjhasjdh";
                 if (img.style.zIndex > e.target.style.zIndex ) {
                    // put all other divs behind the selected one			
                  img.style.zIndex = img.style.zIndex - 1
         //document.getElementById(img.id).style.zIndex = img.style.zIndex;
         }
                   }
                   // e.target.style.zIndex = divs.length; 
          e.target.style.zIndex = imgs.length;
                                       // e.target.style.position = "absolute";
         // e.target.children[0].style.zIndex = divs.length;
         // div.getElementsByTagName("img").style.zIndex = divs.length;  // put this div  on top
         //document.getElementById("broj nodova").innerHTML = e.target.children[0].style.zIndex;
           }
           
           function onMouseMove(e) {
               e.preventDefault();
               if (the_moving_div == "") return;
               var d = document.getElementById(the_moving_div);
               d.style.left = d.offsetLeft + e.clientX - the_last_mouse_position.x + "px";     // move the div by however much the mouse moved
               d.style.top  = d.offsetTop  + e.clientY - the_last_mouse_position.y + "px";
               the_last_mouse_position.x = e.clientX;                                          // remember where the mouse is now
               the_last_mouse_position.y = e.clientY;
               
           }
           
           function onMouseUp(e) {
               e.preventDefault();
               if (the_moving_div == "") return;
               document.getElementById(the_moving_div).style.border = "none";             // hide the border again
               the_moving_div = "";
           }
           
}      
        