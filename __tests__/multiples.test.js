

import {multiples} from './../js/multiples.js'

describe('mutiples', () => {
  test('function returns a number', ()=>{
    expect(typeof multiples(1000)).toEqual('number');
  })
  test('function returns a number less then sum of all numbers', ()=>{
    expect(multiples(1000)).toBeLessThan(500500);
  })
  test('function returns a number less then sum of all numbers', ()=>{
    expect(multiples(1000)).toBe(233168);
  })

})