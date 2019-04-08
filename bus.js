const Bus = function(routeNumber, distance = 0, destination, passengers = []) {
  this.routeNumber = routeNumber;
  this.distance = distance;
  this.destination = destination;
  this.passengers = passengers;
}

Bus.prototype.drive = function () {
  this.distance += 10;
};

Bus.prototype.getTotalPassengers = function () {
  return this.passengers.length;
};

Bus.prototype.pickUp = function (passenger1) {
  this.passengers.push(passenger1);
}

Bus.prototype.dropOff = function (passenger2) {
  this.passengers.pop(passenger2);
}

Bus.prototype.emptyBus = function () {
  this.passengers = [];
}

module.exports = Bus;
