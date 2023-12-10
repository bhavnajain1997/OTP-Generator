var otpGen = document.querySelector('.otp-generator');
var btnGen = document.querySelector('.btn-gen');
var body = document.querySelector('body');


btnGen.addEventListener('click',function(){
    var otp =[];
    var digits = "0123456789"
    var num;
//var digits = "0123456789";
    for(i=0;i<4;i++){
        num = digits[Math.floor(Math.random() * 10)]; 
    otp.push(num);  
    otpGen.innerHTML = otp.join('');
    }
    
    // alert("Thankyou for submitting");
    //  }
  
})


   

   
 






