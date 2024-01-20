const calculatetemp=()=>{
    const tempNumber= document.getElementById("temp").value;
    console.log( tempNumber);
    
    const tempSelected= document.getElementById('fromTemp');
    const valueTemp= fromTemp.options[tempSelected.selectedIndex].value;
    console.log( valueTemp);
    const conSelected= document.getElementById('toTemp');
    const conTemp= toTemp.options[conSelected.selectedIndex].value;
    console.log( conTemp);
  
    let result;
    
    if(valueTemp=='celsius' && conTemp=='fehrenheit1'){
      
      result = Math.round((tempNumber * 9/5)+ 32);
      document.getElementById('resultContainer').innerHTML =  '='+result +'°Fahrenhiet'; 
    }
    else if(valueTemp=='celsius' && conTemp=='kel1'){
      
      result = Number(tempNumber) +  273.15;
      document.getElementById('resultContainer').innerHTML = '=' + result +'°Kelvin'; 
    }
    else if(valueTemp=='fehrenheit' && conTemp=='celsius1'){
      
      result = Math.round((tempNumber-32) * (5/9)) ;
      document.getElementById('resultContainer').innerHTML = '=' + result +'°C'; 
    }
    else if(valueTemp=='fehrenheit' && conTemp=='kel1'){
      
      result =Math.round((tempNumber * 9/5)+ 32) + 273.15;
      document.getElementById('resultContainer').innerHTML = '=' + result +'°Kelvin'; 
    }
    else if(valueTemp=='kel' && conTemp=='celsius1'){
      
      result = Number(tempNumber)  - 273.15;
      document.getElementById('resultContainer').innerHTML = '=' + result +'°Celsius'; 
    }
    else if(valueTemp=='fehrenheit' && conTemp=='fehrenheit1'){
      
      result =Math.round((tempNumber - 273.15)+ (5/9)) + 32;
      document.getElementById('resultContainer').innerHTML = '=' + result +'°Celsius'; 
    }
    
}


