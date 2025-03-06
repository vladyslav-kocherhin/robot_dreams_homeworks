import { IWaterHeater } from './i-water-heater';

// Конкретна реалізація бойлера

class Boiler implements IWaterHeater {
    public heatWater(): void {
        console.log('Boiler is heating water...');
    }
}

export { Boiler };
