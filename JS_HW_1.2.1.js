function simple_number(n) {
    result=[];
    for (let i = 1; i <= n; i++) {
        for (let j = 2; j <= i; j++) {
            if (i % j === 0 && j < i) {
                // console.log(i, 'И все таки оно делится!');
                break;
            } else if (j === i) {
                result = result + i + ' ';
                // console.log(i);
            } 
        } 
    }
    return result;
 }

console.time();
console.log(simple_number(process.argv[2]));
console.timeEnd();