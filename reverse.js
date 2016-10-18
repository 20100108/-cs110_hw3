const reverse = function(arr){
    let N = [];
	for (let i=arr.length-1; i>-1; i=i-1){
	     N[N.length]=arr[i];
	}
	 return N;
} 
  const reversedArray=reverse(["homework", "cs", "my", "is", "It"]);
     console.log(reversedArray);




