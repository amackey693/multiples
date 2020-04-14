

import {multiples} from './../js/multiples.js'

describe('mutiples', () => {
  test('function returns a number', ()=>{
    expect(typeof multiples()).toEqual('number');
  })
})