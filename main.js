var arrlength=prompt("Enter the length of array");
var a=[];
var b=[];
var temp;
var n=prompt("Enter the laragest numbre finding")
for(let i=0;i<arrlength;i++){
	a[i]=prompt("Enter the"+(i+1)+"value");
}
document.write("a="+a+"<br>"+"<br>");
for(i=0;i<a.length;i++){
	for(j=i+1;j<a.length;j++){
		 if(a[i]<a[j]){
			 temp=a[i];
			 a[i]=a[j];
			 a[j]=temp;
		 }
	}
	b.push(a[i]);
}
document.write("The value is 2nd Laragest value:"+b[n-1]);