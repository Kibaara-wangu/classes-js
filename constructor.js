class Car {
    constructor(make, model, year, isAvailable) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable;
    }
    toggleAvailability() {
        this.isAvailable = !this.isAvailable;
    }
}
const wagon = new Car('limousine', 'volkswagen', 2020, 'true')
console.log({wagon});
class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
        this.car = car;
        this.renterName = renterName;
        this.rentalStartDate = new Date(rentalStartDate);
        this.rentalEndDate = new Date(rentalEndDate);
    }
    calculateRentalDuration() {
        const  differenceInMilliseconds = this.rentalEndDate - this.rentalStartDate;
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
        return differenceInDays;
    }
}
const bus = new Rental ('volkswagen', 'Esther', "2024-4-26", "2024-6-26")
console.log({bus});




class Rental{
    constructor(car,rentalName,rentalStart,rentalEnd){
        this,car=car;
        this.rentalName=rentalName;
        this.rentalStrart=rentalStart;
        this,rentalEnd=rentalEnd;
    }
    calculateRentalDuration(){
        const time = this.rentalEnd-this.rentalStrart
        return time
    }

}

const car = { make: 'Toyota', model: 'Hilux' };
const rentalStart = new Date('2024-04-26');
const rentalEnd = new Date('2024-06-26');

const rental = new Rental(car, 'Blessing Kagure', rentalStart, rentalEnd);
const rentalDuration= rentalEnd-rentalStart;
console.log(`Rental duration is ${rentalDuration} months`);




