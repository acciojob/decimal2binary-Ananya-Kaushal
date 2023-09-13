function decimalToBinary(num) {
  //Write you code here
let a='';
	while(num!=0)
		{
			let r=num%2;
			a=r+a;
			num=parseInt(num/2);
		}
	return a;
  
}

window.decimalToBinary = decimalToBinary;
