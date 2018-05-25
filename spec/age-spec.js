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
})
