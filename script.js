function decimalToBinary(num) {
  //Write you code here
	let a;
	while(num>0)
		{
			let r=num%2;
			a=a+r;
			num=num/2;
		}
	console.log(a);
  
}

window.decimalToBinary = decimalToBinary;
