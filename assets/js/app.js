var cl =console.log;


// 1=============================================================



var countdowninnumber=document.getElementById("timer");
// var words=document.getElementById("countbox")
// var countdownall=document.getElementById("box1")

function countdowntimer(){


 var currentdate =new Date();
 var futuredate =new Date(2022,7,15);
 // cl(`todays date is ${currentdate}`);
 // cl(`future date is ${futuredate}`);

 var diff=futuredate.getTime() - currentdate.getTime();

 var days=Math.floor(diff /(1000 * 60 * 60 * 24));
 var hours=Math.floor((diff %(1000 * 60 * 60 * 24)) / (1000* 60* 60));
 var min=Math.floor((diff %(1000 * 60 * 60 )) / (1000 *  60));
 var sec=Math.floor((diff%(1000 * 60 )) / (1000));

//  var session="pm";

//  if(hours > 12){
//      session="pm"
//     hours = hours-12  
//  }

function smallerthanten(t){
     if(t <10){
         t ="0"+t
     }

     return t;
}
days=smallerthanten(days);
hours=smallerthanten(hours);
min=smallerthanten(min);
sec=smallerthanten(sec);



countdowninnumber.innerHTML =`${days}     :  ${hours}  :  ${min} :  ${sec}  `
// words.innerHTML=countdowninnumber;
// countdownall.innerHTML=words

 setTimeout(countdowntimer,1000);

}

countdowntimer();



// 2====================================================================


// var countdown1=document.getElementById("timer1");
var countdowninnumber1=document.getElementById("timer1");
// var words1=document.getElementById("countbox11")
// var countdownall1=document.getElementById("box11")



function countdowntimer111(){


 var currentdate1 =new Date();
 var futuredate1 =new Date(2022,9,24);
 // cl(`todays date is ${currentdate}`);
 // cl(`future date is ${futuredate}`);

 var diff1=futuredate1.getTime() - currentdate1.getTime();

 var days1=Math.floor(diff1 /(1000 * 60 * 60 * 24));
 var hours1=Math.floor((diff1 %(1000 * 60 * 60 * 24)) / (1000* 60* 60));
 var min1=Math.floor((diff1 %(1000 * 60 * 60 )) / (1000 *  60));
 var sec1=Math.floor((diff1 %(1000 * 60 )) / (1000));



function smallerthan10(tt){
     if(tt <10){
         tt ="0"+tt
     }

     return tt;
}
days1=smallerthan10(days1);
hours1=smallerthan10(hours1);
min1=smallerthan10(min1);
sec1=smallerthan10(sec1);



countdowninnumber1.innerHTML =`${days1}  :  ${hours1} :   ${min1} : ${sec1}  `

 setTimeout(countdowntimer111,1000);
 



}

 countdowntimer111()



// 3=====================================================================


var countdown2=document.getElementById("timer2");


function countdowntimer11(){


 var currentdate2 =new Date();
 var futuredate2 =new Date(2023,0,26);
 // cl(`todays date is ${currentdate}`);
 // cl(`future date is ${futuredate}`);

 var diff2=futuredate2.getTime() - currentdate2.getTime();

 var days2=Math.floor(diff2 /(1000 * 60 * 60 * 24));
 var hours2=Math.floor((diff2 %(1000 * 60 * 60 * 24)) / (1000* 60* 60));
 var min2=Math.floor((diff2 %(1000 * 60 * 60 )) / (1000 *  60));
 var sec2=Math.floor((diff2 %(1000 * 60 )) / (1000));



function countdownsmallerthan10(c){
     if(c <10){
         c ="0"+c
     }

     return c;
}
days2=countdownsmallerthan10(days2);
hours2=countdownsmallerthan10(hours2);
min2=countdownsmallerthan10(min2);
sec2=countdownsmallerthan10(sec2);



 countdown2.innerHTML =`${days2}: ${hours2} :${min2} :${sec2}  `

 setTimeout(countdowntimer11,1000);
 



}
countdowntimer11()



// ===================================================


    var countd=[day,hours,min,sec]

    var countdown=documemt.getElementById("time");
    var timer=documemt.getElementById("list");


    function count(){


        var currentdate2 =new Date();
        var futuredate2 =new Date(2023,0,26);
        // cl(`todays date is ${currentdate}`);
        // cl(`future date is ${futuredate}`);
       
        var diff2=futuredate2.getTime() - currentdate2.getTime();
       
        var days2=Math.floor(diff2 /(1000 * 60 * 60 * 24));
        var hours2=Math.floor((diff2 %(1000 * 60 * 60 * 24)) / (1000* 60* 60));
        var min2=Math.floor((diff2 %(1000 * 60 * 60 )) / (1000 *  60));
        var sec2=Math.floor((diff2 %(1000 * 60 )) / (1000));
       
        


    //    var result="";
    //     for(var i=0; i<=countd.length;i++){
    //         cl(countd[i]);
    //         result +=  `<li class="list-group-item"> $ {count[i]} </li>`
    //     }
    //     cl(result);

    //     timer.innerHTML=result;

       function count10(c){
            if(c <10){
                c ="0"+c
            }
       
            return c;
       }
       days2=count10(days2);
       hours2=count10(hours2);
       min2=count10(min2);
       sec2=count10(sec2);
       
       
       
       countdown.innerHTML =`${days2}: ${hours2} :${min2} :${sec2}  `
       
        setTimeout(count,1000);
        
       
       
       
       }
       count();
       




















