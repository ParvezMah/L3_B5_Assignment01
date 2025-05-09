{
//
    class Vehicle {
        private make: string;
        private year: number;

        constructor(make: string, year:number){
            this.make = make;
            this.year = year;
        }

        public getInfo():string{
            return `Make: ${this.make}, Year: ${this.year}`;
        }
    }

    class Car extends Vehicle {
        private model: string;

        constructor(make: string, year:number, model: string){
            super(make,year);
            this.model = model;
        }

        public getModel():string{
            return `Model: ${this.model}`;
        }
    }

    const car1 = new Car("BYD", 2023, "YangWeng E7");
    const car2 = new Car("BYD", 2024, "YangWeng E8");
    const car3 = new Car("BYD", 2025, "YangWeng E9");

    console.log(car1.getInfo())
    console.log(car1.getModel())

//
}