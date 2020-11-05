module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (!item.name) {
    throw new Error("Your item requires a name");
  }
  if (!item.durability) {
    throw new Error("Your item requires a durability");
  }
  if (!item.enchantment) {
    throw new Error("Your item requires an enchantment");
  }

  if (item.enchantment === 20) {
    return { ...item };
  }

  item.enchantment += 1;
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  if (!item.name) {
    throw new Error("Your item requires a name");
  }
  if (!item.durability) {
    throw new Error("Your item requires a durability");
  }
  if (!item.enchantment) {
    throw new Error("Your item requires an enchantment");
  }
  item.durability = 100;
  return { ...item };
}

function get(item) {
  return { ...item };
}
