const BusStop = function(name, queue = []) {
  this.name = name;
  this.queue = queue;
}

BusStop.prototype.addToQueue = function (person1) {
  this.queue.push(person1);
};


module.exports = BusStop;
