{
    //
    
    const concatenateArray = <T>(...arrays: T[][]): T[] => { 
        if(arrays.length === 0) return [];
        if(arrays.length === 1) return arrays[0];
        return arrays[0].concat(concatenateArray(...arrays.slice(1)));
    }

    const result1 = concatenateArray(['a','b'], ['c']);
    const result2 = concatenateArray([1,2], [3,4],[5]);
    console.log({result1, result2});

    //
}