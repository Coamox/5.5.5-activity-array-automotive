//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

class Car extends VehicleModule 
{
    constructor(make, model, year, color, mileage)
    {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    //if passenger less than maximumPassengers then availableRoom == true
    loadPassenger(num)
    {
        if((num + this.passengers) <= this.maxPassengers)
        {
            return this.availableRoom = true;
        }
    }

    //if fuel is greater than 0, then start == true
    start()
    {
        if (this.fuel > 0)
        {
            return this.started = true;
        }
        else
        {
            return this.started = false;
        }
    }

    //if mileage is greater than 30000, time for maintenance == true
    checkService(mileage)
    {
       if(this.mileage > 30000)
       {
        return this.scheduleService = true;
       }
    }


}

//this shows how to call from this module...
let myNewCar = new Car("Mecury", "Sedan", "1965", "color", "mileage");
console.log(myNewCar.make)
