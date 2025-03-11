const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const batteryBatches = [0, 31];

const totalBatteries = batteryBatches.reduce(
(total, batch) => total + batch,
0
);

module.exports = { totalBatteries };