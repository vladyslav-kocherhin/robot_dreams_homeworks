/* Абстракція для водонагрівача:
IWaterHeater – це інтерфейс, який описує поведінку водонагрівача, але не вказує, як саме він нагріває воду*/

interface IWaterHeater {
    heatWater(): void;
}

export { IWaterHeater };
