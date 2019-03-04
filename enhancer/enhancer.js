module.exports = {
  success,
  fail,
  repair
};

function success(item) {}

function fail(item) {}

function repair(item) {
  const repairedItem = item;
  repairedItem.durability = 100;
  return repairedItem;
}
