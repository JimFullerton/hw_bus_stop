const Bus = require('../bus');
const Person = require('../person');
const BusStop = require('../bus_stop');

describe('busRoute', () => {
  let testBus;
  let alice;
  let bob;
  let eve;
  let testStopA;
  let testStopB;
  let testStopC;

  beforeEach(() => {
    testBus = new Bus (22, 0, `Ocean Terminal`, []);
    alice = new Person (`Alice`, 27);
    bob = new Person (`Bob`, 37);
    eve = new Person (`Eve`, 47);
    testStopA = new BusStop (`Princes Street`, []);
    testStopB = new BusStop (`George Street`, []);
    testStopC = new BusStop (`St Andrew Square`, []);
  });

  test('A bus should have a route number', () => {
    expect(testBus.routeNumber).toBe(22);
  });

  test('A bus should have a destination', () => {
    expect(testBus.destination).toBe("Ocean Terminal");
  });

  test('A bus should start out with no distance travelled', () => {
    expect(testBus.distance).toBe(0);
  });

  test('A bus should start out with no passengers', () => {
    expect(testBus.getTotalPassengers()).toBe(0);
  });

  test('A bus should start be able to pick up passengers', () => {
    testBus.pickUp(alice);
    expect(testBus.getTotalPassengers()).toBe(1);
  });

  test('A bus should start be able to drop off passengers', () => {
    testBus.pickUp(alice);
    testBus.pickUp(bob);
    testBus.dropOff(bob);
    expect(testBus.getTotalPassengers()).toBe(1);
  });

  test('A bus should increment its distance travelled when instructed', () => {
    testBus.drive();
    expect(testBus.distance).toBe(10);
  });

  test('A bus can be emptied out at its terminus', () => {
    testBus.pickUp(alice);
    testBus.pickUp(bob);
    testBus.pickUp(eve);
    testBus.emptyBus();
    expect(testBus.getTotalPassengers()).toBe(0);
  });

});
