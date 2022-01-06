class Plant {
    constructor(name, hydration) {
        this.name = name;
        this.hydration = hydration;
        this.alive = hydration > 100 ? true : true;
    }

    waterPlant(waterAmount) {

        if (this.hydration > 100 || (this.hydration + waterAmount) > 100) {
            this.alive = false;
        }

        this.hydration += waterAmount;
    }

    checkHydration() {
        return `${this.name} has hydration of ${this.hydration} %`;
    }
}

const succulent = new Plant("Succulent", 10);
succulent.waterPlant(5);
console.log(succulent.alive);
console.log(succulent.checkHydration());

const hydrangea = new Plant("Hydrangea", 30);
hydrangea.waterPlant(10);
console.log(hydrangea.alive);
console.log(hydrangea.checkHydration());