

import {multiples} from './../js/multiples.js'

describe('mutiples', () => {
  test('function returns a number', ()=>{
    expect(typeof multiples()).toEqual('number');
  })
  test('function returns a number less then sum of all numbers', ()=>{
    expect(multiples()).toBeLessThan(500500);
  })
})