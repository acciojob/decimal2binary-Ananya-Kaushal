function decimalToBinary(num) {
  //Write you code here
let a='';
	while(num!=0)
		{
			let r=num%2;
			a=a+r;
			num=parseInt(num/2);
		}
	return (String)a;
  
}

window.decimalToBinary = decimalToBinary;
