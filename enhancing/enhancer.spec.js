const enhancer = require("./enhancer.js");

describe("tests the enchancer", () => {
  describe("test the repair function", () => {
    it("accepts an item and returns a new item with durability restored to 100", () => {
      expect(
        enhancer.repair({
          name: "this",
          durability: 80,
          enchantment: 19,
        })
      ).toEqual({
        name: "this",
        durability: 100,
        enchantment: 19,
      });
      expect(() =>
        enhancer.repair({
          name: "this",
          enchantment: 19,
        })
      ).toThrow();
      expect(() =>
        enhancer.repair({
          name: "this",
          durability: 80,
        })
      ).toThrow();
      expect(() =>
        enhancer.repair({
          enchantment: 19,
          durability: 80,
        })
      ).toThrow();
    });
  });

  describe("test the success function", () => {
    it("accepts an item and returns a modified item", () => {
      expect(
        enhancer.success({
          name: "this",
          durability: 80,
          enchantment: 18,
        })
      ).toEqual({
        name: "this",
        durability: 80,
        enchantment: 19,
      });
      expect(
        enhancer.success({
          name: "this",
          durability: 80,
          enchantment: 20,
        })
      ).toEqual({
        name: "this",
        durability: 80,
        enchantment: 20,
      });
    });
  });
});
