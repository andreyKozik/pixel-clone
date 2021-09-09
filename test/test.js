const assert = require('assert');
const operations = require('../src/js/tests');

describe('Fahrenheit-to-Celsius', () => {
	it('Degree conversion Fahrenheit to Celsius', () => {
		assert.equal(operations.conversionCelsius(`32°`), `0°`);
	});
})

