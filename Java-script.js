



// var player = prompt("How many times has Real Madrid won the Champions League?");
// if(player == 13){
//   alert("correct answer");
// }else{
//   alert("sorry try again!");
// }
  
    //var champion=prompt ("How many times has Real Madrid won the Champions League?");
    
    //while (champion != 13) {
    //champion = prompt ("Sorry incorrect awnswer, please enter How many times has Real Madrid won the Champions League?");
    // }
   // if (champion == 13) {
  // alert ("THAT IS THE GREAT AWNSWER");

   

   //var showorder=function () {
    //input
    //var orderimage='';
   // var numberofimages;
    //processing
     //   numberofimages = prompt('how many img do want to see?');
      //  for (let ctr =0;ctr < numberofimages; ctr++) {
        //    if (userorder === 'ramos') {
              //  orderimage +='<img class="style" src="imag/ramos">';
            
     //   }
   // }
  //  //output
   // return orderimage;
 //};
//} 

var showorder=function () {
    //input
    
    var userorder = prompt ('what is the player do you want to see,varan or benzema');
    var orderimage='';
    var numberofimages;

    //processing
    while (userorder !== 'varan' && userorder !== 'benzema') {
        userorder = ('pleas choose varan or benzema');
        }
        numberofimages = prompt('how many times do you want to see?');
        for (let ctr =0;ctr < numberofimages; ctr++) {
            if (userorder === 'varan') {
                orderimage +='<img class="style" src="img/varan.jpg">';
            } else if (userorder === 'benzema'){
                orderimage=orderimage + '<img class="style" src="img/benzema.jpg">';
        }
    }

    //output
    return orderimage;
};

    
