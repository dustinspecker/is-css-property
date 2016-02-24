'use strict'
import cssProperties from 'just-css-properties'

/**
 * Is property a valid CSS property?
 * @param {String} property - string to verify
 * @throw {TypeError} - if property is not a string
 * @return {Boolean} - property is a valid CSS property
 */
module.exports = function (property) {
  if (typeof property !== 'string') {
    throw new TypeError('Expected property to be a string')
  }

  return cssProperties.indexOf(property.toLowerCase()) !== -1
}
