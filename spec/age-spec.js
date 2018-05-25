import { galactic } from './../src/age.js'

describe('galactic', function() {

  it('should test user age in seconds', function(){
    let testInput = new galactic('1990-04-21', 28);
    let testDate = new Date(testInput.birthdate);
    let today = new Date();

    expect(testInput.ageInSeconds()).toEqual((Math.floor((today.getTime() - testDate.getTime()) / 1000)));
  });

  it('should test users age in earth years', function(){
    let testInput = new galactic('1990-04-21', 70);
    expect(testInput.earthAge()).toEqual(28);
  });
  it('should test users age in mercury years', function(){
    let testInput = new galactic('1990-04-21', 70);
    expect(testInput.mercuryAge()).toEqual(117);
  });
  it('should test users age in venus years', function(){
    let testInput = new galactic('1990-04-21', 70);
    expect(testInput.venusAge()).toEqual(45);
  });
  it('should test users age in mars years', function(){
    let testInput = new galactic('1990-04-21', 70);
    expect(testInput.marsAge()).toEqual(14);
  });
  it('should test users age in jupiter years', function(){
    let testInput = new galactic('1990-04-21', 70);
    expect(testInput.jupiterAge()).toEqual(2);
  });
})
