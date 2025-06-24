const { expect } = require('chai');
const { scuberGreetingForFeet } = require('./index');

// index.test.js

describe('scuberGreetingForFeet', () => {
  it('gives customers a free sample if the ride is less than or equal to 400 feet', () => {
    expect(scuberGreetingForFeet(199)).to.equal('This one is on me!');
    expect(scuberGreetingForFeet(400)).to.equal('This one is on me!');
  });

  it('charges 20 dollars for a distance between 400 and 2000 feet', () => {
    expect(scuberGreetingForFeet(401)).to.equal('That will be twenty bucks.');
    expect(scuberGreetingForFeet(1500)).to.equal('That will be twenty bucks.');
    expect(scuberGreetingForFeet(2000)).to.equal('That will be twenty bucks.');
  });

  it('charges 30 dollars for a distance over 2000 feet', () => {
    expect(scuberGreetingForFeet(2001)).to.equal('I will gladly take your thirty bucks.');
    expect(scuberGreetingForFeet(2500)).to.equal('I will gladly take your thirty bucks.');
  });

  it('does not allow rides over 2500 feet', () => {
    expect(scuberGreetingForFeet(2501)).to.equal('No can do.');
    expect(scuberGreetingForFeet(3000)).to.equal('No can do.');
  });
});

// We recommend installing an extension to run mocha tests.