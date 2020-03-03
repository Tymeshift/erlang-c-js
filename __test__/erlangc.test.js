import {
  getFactorial,
  getIntensity,
  getAN,
  getX,
  getY,
  getPW,
  getErlangC,
  getServiceLevel,
  getFullServiceLevel,
  checkMaxOccupancy,
  getNumberOfAgents
} from "../src/erlangc";

describe("Erlang C formula", () => {
  it("should calculate correct factorial", () => {
    expect(getFactorial(0).toString()).toEqual("1");
    expect(getFactorial(1).toString()).toEqual("1");
    expect(getFactorial(2).toString()).toEqual("2");
    expect(getFactorial(3).toString()).toEqual("6");
    expect(getFactorial(99).toString()).toEqual("9.3326215443944152712e+155");
    expect(getFactorial(199).toString()).toEqual("3.9432893368239525186e+372");
    expect(() => getFactorial(-1)).toThrow("n cannot be negative");
  });
  it("should calculate intensity", () => {
    expect(getIntensity(45, 420, 3600)).toEqual(5.25);
  });
  it("should calculate AN", () => {
    expect(getAN(10, 11).toString()).toEqual("100000000000");
  });
  it("should calculate erlang top row (X)", () => {
    const agents = 11;
    const intensity = 10;

    expect(
      getX(
        getAN(intensity, agents),
        getFactorial(agents),
        intensity,
        agents
      ).toString()
    ).toEqual("27557.319223985890653");
  });
  it("should calculate erlang sum (Y)", () => {
    const agents = 11;
    const intensity = 10;

    expect(getY(intensity, agents).toString()).toEqual("12842.305114638447972");
  });

  it("should calculate erlang Pw", () => {
    const agents = 11;
    const intensity = 10;
    const Y = getY(intensity, agents);
    const X = getX(
      getAN(intensity, agents),
      getFactorial(agents),
      intensity,
      agents
    );
    expect(getPW(X, Y).toString()).toEqual("0.68211820468933237413");
  });

  it("should get erlang C result", () => {
    const agents = 11;
    const intensity = 10;
    expect(
      getErlangC(
        getAN(intensity, agents),
        getFactorial(agents),
        intensity,
        agents
      ).toString()
    ).toEqual("0.68211820468933237413");
  });

  it("should get service level", () => {
    const agents = 11;
    const intensity = 10;
    const aht = 420;
    const targetTime = 120;
    expect(
      getServiceLevel(
        getErlangC(
          getAN(intensity, agents),
          getFactorial(agents),
          intensity,
          agents
        ),
        intensity,
        agents,
        targetTime,
        aht
      ).toString()
    ).toEqual("0.4874036579826867");
  });

  it("should check max occupancy", () => {
    const agents = 11;
    const intensity = 10;
    const maxOccupancy = 0.8;
    expect(checkMaxOccupancy(intensity, agents, maxOccupancy)).toEqual(13);
  });

  it("should get number of agents for specific service level", () => {
    const intervalLength = 3600;
    const aht = 420;
    const targetServiceLevel = 0.8;
    const targetTime = 90;
    const maxOccupancy = 0.8;
    const shrinkage = 0.2;
    expect(
      getNumberOfAgents(
        50,
        intervalLength,
        aht,
        targetServiceLevel,
        targetTime,
        maxOccupancy,
        shrinkage
      )
    ).toEqual(12);
    expect(
      getNumberOfAgents(
        10,
        intervalLength,
        aht,
        targetServiceLevel,
        targetTime,
        maxOccupancy,
        shrinkage
      )
    ).toEqual(4);
    expect(
      getNumberOfAgents(
        300,
        intervalLength,
        aht,
        targetServiceLevel,
        targetTime,
        maxOccupancy,
        shrinkage
      )
    ).toEqual(55);
    expect(
      getNumberOfAgents(
        300,
        intervalLength,
        aht,
        targetServiceLevel,
        targetTime,
        0,
        shrinkage
      )
    ).toEqual(49);
  });
});
