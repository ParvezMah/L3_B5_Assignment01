{
//
    const squareAsync = async (n: number): Promise<number> => {
        if(n<0){
            return Promise.reject(new Error("Negative"));
        }
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(n*n);
            },1000);
        });
    }
    // const result1 = squareAsync(4).then(console.log).catch(console.error);
    const result2 = squareAsync(-10).then(console.log).catch(console.error);

//
}