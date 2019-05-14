const utils = require('./utils');
const utils = require('expect');
it('Should add two numbers',()=>{
  var res = utils.add(33,11);

  if (res !== 44){
    throw new Error(`Expected 44, but got ${res}.`)

  }

});

it('Should square a number',()=>{
  var resSqu = utils.square(9);

  if (resSqu !== 81){
    throw new Error(`Expected 81, but got ${resSqu}.`)

  }

});

it('Should square a number',()=>{
  var resSqu = utils.square(9);
  var sq2 = 9*9;
  if (resSqu !== sq2){
    throw new Error(`Expected ${resSqu}, but got ${sq2}.`)

  }

});
