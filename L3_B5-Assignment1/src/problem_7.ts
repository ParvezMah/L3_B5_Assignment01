{
//

    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    const getDayType = (day : Day) : string => {
        if(day === Day.Saturday || day === Day.Sunday ){
            return "Weekend";
        }
        else{
            return "WeekDays";
        }
    }

    const result1 = getDayType(Day.Monday);
    const result2 = getDayType(Day.Sunday);
    console.log({result1, result2});

//
}