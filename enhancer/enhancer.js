const enhancer = {
  success(item) {
    enhancedInt = parseInt(item.enhancement, 10);
    return enhancedInt;
  },

  fail(item) {
    if (item.enhancement < 15 && item.durability < 25) {
      return { ...item };
    }
    const enhancement =
      item.enhancement < 15 ? item.enhancement - 1 : item.enhancement;
    const durability =
      item.enhancement < 15 ? item.durability - 5 : item.durability;
    return { ...item, durability, enhancement };
  },

  repair(item) {
    return {
      ...item,
      durability: 100
    };
  }
};

module.exports = {
  enhancer
};

const item1 = {
  name: "sword",
  type: "weapon",
  durability: 20,
  enhancement: "+5"
};

const levels = {
  16: "PRI",
  17: "DUO",
  18: "TRI",
  19: "TET",
  20: "PEN"
};
