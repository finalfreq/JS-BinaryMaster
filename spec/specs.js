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

});
