{
//
    type ItemsType = {
        title: string, 
        rating: number
    }

    const filterByRating = (items : ItemsType[]) : ItemsType[]=> {
        return items.filter((item)=> item.rating >=4);
    }

    const Books = [
        {title: "To Kill a Mockingbird", rating: 4.28 },
        {title: "1984", rating: 4.19 },
        {title: "The Great Gatsby", rating: 3.93 },
        {title: "Pride and Prejudice", rating: 4.27 },
        {title: "The Cather in the Rye", rating: 3.91 },
    ]

    const result1 = filterByRating(Books);
    console.log({result1})


//
}