mocha.setup('bdd');
var assert = chai.assert;

describe("Test", function() {
  describe("getObj", function() {
    it("Get object", function() {
      chai.assert(typeof window.Test === 'object');
    });
     
  });

});

mocha.run();

