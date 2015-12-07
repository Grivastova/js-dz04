var a = 10;
var b = 30;
var c = 20;
var d = 5;

function second(){
	if(a>b && b>c && c>d){
		a=a*20;
		b=b*10;
		c=c*5;
	}
	else if (a>b && b>d && d>c) {
		a=a*20;
		b=b*10;
		d=d*5;
	}
	else if (a>d && d>c && c>b){
		a=a*20;
		d=d*10;
		c=c*5;
	}	
	else if (a>c && c>d && d>b){
		a=a*20;
		c=c*10;
		d=d*5;
	}	
	else if (a>d && d>b && b>c){
		a=a*20;
		d=d*10;
		b=b*5;
	}	
	else if (a>c && c>b && b>d){
		a=a*20;
		c=c*10;
		b=b*5;
	}

	

	else if(b>a && a>c && c>d){
		b=b*20
		a=a*10
		c=c*5
	}
	else if(b>c && c>a && a>d){
		b=b*20
		c=c*10
		a=a*5
	}
	else if(b>d && d>c && c>a){
		b=b*20
		d=d*10
		c=c*5
	}
	else if(b>c && c>d && d>a){
		b=b*20
		c=c*10
		d=d*5
	}
	else if(b>d && d>a && a>c){
		b=b*20
		d=d*10
		a=a*5
	}
	else if(b>a && a>d && d>c){
		b=b*20
		a=a*10
		d=d*5
	}

	

	else if (c>a && a>b && b>d) {
		c=c*20
		a=a*10
		b=b*5
	}
	else if (c>a && a>d && d>b) {
		c=c*20
		a=a*10
		d=d*5
	}
	else if (c>b && b>a && a>d) {
		c=c*20
		b=b*10
		a=a*5
	}
	else if (c>b && b>d && d>a) {
		c=c*20
		b=b*10
		d=d*5
	}
	else if (c>d && d>b && b>a) {
		c=c*20
		d=d*10
		b=b*5
	}
	else if (c>d && d>a && a>b) {
		c=c*20
		d=d*10
		a=a*5

	}
	

	else if (d>a && a>b && b>c) {
		d=d*20
		a=a*10
		b=b*5
	}
	else if (d>a && a>c && c>b) {
		d=d*20
		a=a*10
		c=c*5
	}
	else if (d>b && b>a && a>c) {
		d=d*20
		b=b*10
		a=a*5
	}
	else if (d>b && b>c && c>a) {
		d=d*20
		b=b*10
		c=c*5
	}
	else if (d>c && c>a && a>b) {
		d=d*20
		c=c*10
		a=a*5
	}
	else if (d>c && c>b && b>a) {
		d=d*20
		c=c*10
		b=b*5
	}
}









/*
	if(a > b && a > c && a > d){
		a = a * 20;
		if(b > c && b > d){
			b = b * 10;
			if(c > d){
				c = c * 5;
			}
			else{
				d = d * 5;
			}
		}
		else if(c > b && c > d){
			c = c * 10;
			if(b > d){
				b = b * 5;
			}
			else{
				d = d * 5;
			}
		}
		else if(d > b && d > c){
			d = d * 10;
			if(b > c){
				b = b * 5;
			}
			else{
				c = c * 5;
			}
		}
	}
*/
}





function first(){
	if(a > b && b > c){
		a = a * 10;
		b = b * 5;
	}
	else if(a > c && c > b){
		a = a * 10;
		c = c * 5;
	}
	else if (b>a && a>c){
		b = b *10;
		a = a*5;
	}
	else if (b>c && c>a) {
		b =b*10;
		c =c*5;
	}
	else if (c>b && b>a) {
		c=c*10;
		b=b*5;
	}
	else if (c>a && a>b) {
		c=c*10;
		a=a*5;
	}
}

first();
console.log("a = " + a + " b = " + b + " c = " + c);