{
    //

        const processValue = (value : string | number) : number => {
            if(typeof value === "string"){
                return value.length;
            }
            else{
                return value * 2;
            }
        }

        const result1 = processValue("Parvez");
        const result2 = processValue(25);


    //
}