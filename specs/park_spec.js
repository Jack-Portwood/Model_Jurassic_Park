const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let trex;
  let trex2;
  let brachiosuars;
  let stegosaurus;
  let velociraptor;
  let dilophosaurus;

  beforeEach(function () {

    park = new Park('Jurassic Park', 10);
    trex = new Dinosaur("t-rex", "carnivore", 50);
    trex2 = new Dinosaur("t-rex", "carnivore", 70);
    brachiosuars = new Dinosaur("brachiosuars", "herbivore", 40);
    stegosaurus = new Dinosaur("stegosaurus", "herbivore", 20);
    velociraptor = new Dinosaur("velociraptor", "carnivore", 30);
    dilophosaurus = new Dinosaur("dilophosaurus", "omivore", 100);
  })

  it('should have a name', function() {
  const expect = park.getName();
  assert.strictEqual(expect, "Jurassic Park")})

  it('should have a ticket price', function (){
    const expect = park.getTicketPrice();
    assert.deepStrictEqual(expect, 10);
  });

  it('should have a collection of dinosaurs', function() {
    const expect = park.getDinoColSize();
    assert.deepStrictEqual(expect, 0);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDino(trex);
    const expect = park.getDinoColSize();
    assert.deepStrictEqual(expect, 1);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDino(trex);
    park.addDino(brachiosuars)
    park.removeDino()
    const expect = park.getDinoColSize();
    assert.deepStrictEqual(expect, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDino(trex);
    park.addDino(trex2);
    park.addDino(brachiosuars);
    park.addDino(stegosaurus);
    park.addDino(velociraptor);
    park.addDino(dilophosaurus);
    const actual = park.mostVisitors();
    assert.deepStrictEqual(actual, dilophosaurus);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
     park.addDino(trex);
     park.addDino(trex2);
     park.addDino(brachiosuars);
     park.addDino(stegosaurus);
     park.addDino(velociraptor);
     park.addDino(dilophosaurus);
     const actual = park.allOfParticularSpecies('t-rex');
     const expected = [trex,trex2]
     assert.deepStrictEqual(actual, expected )
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDino(trex);
    park.addDino(trex2);
    park.addDino(brachiosuars);
    park.addDino(stegosaurus);
    park.addDino(velociraptor);
    park.addDino(dilophosaurus);
    const expected = park.totalNumVis()
    assert.deepStrictEqual(expected, 310)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDino(trex);
    park.addDino(trex2);
    park.addDino(brachiosuars);
    park.addDino(stegosaurus);
    park.addDino(velociraptor);
    park.addDino(dilophosaurus);
    const expected =park.totalNumVisYear();
    assert.deepStrictEqual(expected, 113150);
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDino(trex);
    park.addDino(trex2);
    park.addDino(brachiosuars);
    park.addDino(stegosaurus);
    park.addDino(velociraptor);
    park.addDino(dilophosaurus);
    const expected = park.totalRevenueYear()
    assert.deepStrictEqual(expected, 1131500);

  });

  it('should remove all dinosaurs of a particular species', function(){
    park.addDino(trex);
    park.addDino(trex2);
    park.addDino(brachiosuars);
    park.addDino(stegosaurus);
    park.addDino(velociraptor);
    park.addDino(dilophosaurus);
    const actual = park.removeCertainSpeices('t-rex')
    const expected = [brachiosuars, stegosaurus, velociraptor, dilophosaurus];
    assert.deepStrictEqual(actual, expected)
  })


  it(
    "should Provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type", function(){
      park.addDino(trex);
      park.addDino(trex2);
      park.addDino(brachiosuars);
      park.addDino(stegosaurus);
      park.addDino(velociraptor);
      park.addDino(dilophosaurus);
      const actual = park.dietAndNumbers()
      const expected = { carnivore: 3, herbivore: 2, omivore:1};
      assert.deepStrictEqual(actual, expected)
    });

});
