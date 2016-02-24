/* global describe, it */
'use strict'
import {expect} from 'chai'
import isCssProperty from '../lib/'

describe('is-css-property', () => {
  it('should throw a TypeError if property is a string', () => {
    const test = () => isCssProperty()

    expect(test).to.throw(TypeError, /Expected property to be a string/)
  })

  it('should return false if property is not a valid CSS property', () => {
    expect(isCssProperty('abe')).to.eql(false)
    expect(isCssProperty('lincoln')).to.eql(false)
  })

  it('should return true if property is a valid CSS property', () => {
    expect(isCssProperty('color')).to.eql(true)
    expect(isCssProperty('float')).to.eql(true)
  })

  it('should lower case property', () => {
    expect(isCssProperty('COLOR')).to.eql(true)
    expect(isCssProperty('fLoAt')).to.eql(true)
  })
})
