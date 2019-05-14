const utils = require('./utils');
const expect = require('expect');

it('Should add two numbers',()=>{
  var res = utils.add(33,11);

  expect(res).toBe(44).toBeA('number');
  //if (res !== 44){
    //throw new Error(`Expected 44, but got ${res}.`)

  //}

});

//if the done function is not added, mocha will pass the
//test case as checked, before it waits for the callback
//that takes one minute.
it('should asyncAdd two numbers',(done)=>{
  utils.asyncAdd(4,3, (sum)=>{
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should async square a number', (done)=>{
  utils.asyncSquare(5, (res)=>{
    expect(res).toBe(25).toBeA('number');
    done();
  });
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
