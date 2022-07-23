function simple_number(n) {
    result = [];
    iter: for (let i = 2; result.length < n; i++) {
            for (let num = 2; num <= Math.sqrt(i); num++) {
                if (i % num === 0) {
                // console.log("И все таки оно делится!");
                continue iter;
            }
        }
    
        let count = result.length++;
        result[count] = i;
      }
    return result;
}
    
console.time()
console.log(simple_number(process.argv[2]));
console.timeEnd()
