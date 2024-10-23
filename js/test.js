function run(n){
	var output = []
	for(let i = 1; i <= n; i++) {
        while(i % 2 == 0) {
            output.push(i);
        }
    }
    // output.join(",")
	
	console.log(output);
}

run(5)