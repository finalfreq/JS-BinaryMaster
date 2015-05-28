describe("baseMaster", function() {
  it("returns the decimal value of a binary input.", function() {
    expect(baseMaster("1", 2)).to.equal(1);
  });
  it("returns the decimal value of any binary input", function() {
    expect(baseMaster("00100011", 2)).to.equal(35);
  });
  it("returns the decimal value of any binary input", function() {
    expect(baseMaster("0000001010011010", 2)).to.equal(666);
  });
  it("returns the decimal value of any trinary input", function() {
    expect(baseMaster("02121", 3)).to.equal(70);
  });
  it("returns the decimal value of any decimal input", function() {
    expect(baseMaster("69", 10)).to.equal(69);
  });
  it("returns the decimal value of any hex input", function() {
    expect(baseMaster("231ef0", 16)).to.equal(2301680);
  });
  it("supports hex values in uppercase", function() {
    expect(baseMaster("231EF0", 16)).to.equal(2301680);
  });
});
