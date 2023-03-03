//                                      reduce()
// ========================================================================================

const rockets = [
  { country: 'Rusia', launches: 32 },
  { country: 'US', launches: 23 },
  { country: 'China', launches: 16 },
  { country: 'Europe', launches: 7 },
  { country: 'India', launches: 4 },
  { country: 'Japan', launches: 3 },
];

const totalLaunches = rockets.reduce((previous, current) => previous + current.launches, 0);

console.log(totalLaunches);