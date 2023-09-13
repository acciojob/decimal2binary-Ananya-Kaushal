function decimalToBinary(num) {
  //Write you code here
	let num=7;
let a=0;
let i=1;
	while(num!=0)
		{
			let r=num%2;
			a=a+r*i;
			num=parseInt(num/2);
			i=i*10;
		}
	console.log(a);
  
}

window.decimalToBinary = decimalToBinary;
