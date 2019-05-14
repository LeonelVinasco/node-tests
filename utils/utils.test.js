const utils = require('./utils');
const expect = require('expect');
it('Should add two numbers',()=>{
  var res = utils.add(33,11);

  expect(res).toBe(44).toBeA('number');
  //if (res !== 44){
    //throw new Error(`Expected 44, but got ${res}.`)

  //}

});

it('Should square a number',()=>{
  var resSqu = utils.square(9);

  expect(resSqu).toBe(81).toBeA('number');
  //if (resSqu !== 81){
    //throw new Error(`Expected 81, but got ${resSqu}.`)

  //}

});

it('Should expect some values',()=>{
  expect(12).toNotBe(11);

  }

);
