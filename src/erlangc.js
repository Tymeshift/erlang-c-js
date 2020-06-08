import Decimal from "decimal.js";

const factorialCache = [new Decimal("1"), new Decimal("1")];
export const getFactorial = (n) => {
  if (n < 0) {
    throw new Error("n cannot be negative");
  }
  let i = 2;
  if (typeof factorialCache[n] != "undefined") return factorialCache[n];
  let result = factorialCache[i - 1];
  for (; i <= n; i++) factorialCache[i] = result = result.times(i.toString());
  return result;
};
//due to memoization following line will cache first 100 elements
getFactorial(100);

export const getIntensity = (volume, aht, intervalLength) => {
  return volume * (aht / intervalLength);
};

export const getAN = (intensity, agents) => {
  return new Decimal(intensity).toPower(agents);
};

export const getX = (AN, factorial, intensity, agents) => {
  return AN.dividedBy(factorial).times(agents / (agents - intensity));
};

export const getY = (intensity, agents) => {
  let sum = new Decimal(0);
  for (let i = 0; i < agents; i++) {
    const iFact = getFactorial(i);
    const aPowI = new Decimal(intensity).toPower(i);
    sum = sum.plus(aPowI.dividedBy(iFact));
  }
  return sum;
};

export const getPW = (X, Y) => {
  return X.dividedBy(Y.plus(X));
};

export const getErlangC = (AN, factorial, intensity, agents) => {
  const X = getX(AN, factorial, intensity, agents);
  const Y = getY(intensity, agents);
  const PW = getPW(X, Y);
  return PW;
};

export const getServiceLevel = (
  erlangC,
  intensity,
  agents,
  targetTime,
  aht
) => {
  return (
    1 - erlangC.times(Math.exp(-(agents - intensity) * (targetTime / aht)))
  );
};

export const getFullServiceLevel = (intensity, agents, targetTime, aht) => {
  const factorial = getFactorial(agents);
  const AN = getAN(intensity, agents);
  const erlangC = getErlangC(AN, factorial, intensity, agents);
  const serviceLevel = getServiceLevel(
    erlangC,
    intensity,
    agents,
    targetTime,
    aht
  );
  return serviceLevel;
};

export const checkMaxOccupancy = (intensity, agents, maxOccupancy) => {
  let occupancy = intensity / agents;
  while (occupancy > maxOccupancy) {
    agents += 1;
    occupancy = intensity / agents;
  }
  return agents;
};

/*
 *
 * Calculate number of agents needed for a specific service level to handle incoming volume of arrivals per time interval
 * volume - incoming number of arrivals per time interval
 * intervalLength - time interval in seconds
 * aht - average handle time in seconds
 * targetServiceLevel - service level goal, the percentage of calls answered within the acceptable waiting time (0 <= targetServiceLevel < 1)
 * targetTime - target answer time, acceptable wait time in seconds
 * maxOccupancy - maximum occupancy rate (0 <= maxOccupancy <= 1)
 * shrinkage - shrinkage rate (0 <= shrinkage < 1)
 */
export const getNumberOfAgents = (
  volume,
  intervalLength,
  aht,
  targetServiceLevel,
  targetTime,
  maxOccupancy,
  shrinkage
) => {
  const intensity = getIntensity(volume, aht, intervalLength);
  let agents = Math.floor(intensity) + 1;
  while (
    getFullServiceLevel(intensity, agents, targetTime, aht) < targetServiceLevel
  ) {
    agents += 1;
  }
  if (maxOccupancy > 0) {
    agents = checkMaxOccupancy(intensity, agents, maxOccupancy);
  }

  agents = Math.ceil(agents / (1 - shrinkage));

  return agents;
};
