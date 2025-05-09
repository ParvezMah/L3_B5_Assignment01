{
//
    interface Product {
        name: string;
        price: number;
    }

    const getMostExpensiveProduct = (products: Product[]): Product | null => {
        if(products.length === 0 ){
            return null;
        }

        let mostExpensive = products[0];

        for (const product of products){
            if(product.price > mostExpensive.price){
                mostExpensive = product;
            }
        }

        return mostExpensive;
    }

    const products = [
        { name: "Pen", price: 10},
        { name: "NoteBook", price: 25},
        { name: "BackPack", price: 500},
        { name: "Pencil", price: 17},
    ]


    const resul1 = getMostExpensiveProduct(products);
    console.log({resul1});



//
}