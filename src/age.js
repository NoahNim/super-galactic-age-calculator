export class galactic {
  constructor(birthdate, lifeExpectancy, age){
    this.birthdate = birthdate;
    this.lifeExpectancy = lifeExpectancy;
    this.age = age;
  }

  ageInSeconds(){
    let today = new Date();
    let userDate = new Date(this.birthdate);
    return Math.floor((today.getTime() - userDate.getTime()) / 1000);
  }
  earthAge(){
    let ageEarth = Math.floor(this.ageInSeconds() / 31536000);
    return ageEarth;
  }
  mercuryAge(){
    let ageMercury = Math.floor(this.ageInSeconds() / 31536000 / .24);
    return ageMercury;
  }
  venusAge(){
    let ageVenus = Math.floor(this.ageInSeconds() / 31536000 / .62);
    return ageVenus;
  }
  marsAge(){
    let ageMars = Math.floor(this.ageInSeconds() / 31536000 / 1.88);
    return ageMars;
  }
  jupiterAge(){
    let ageJupiter = Math.floor(this.ageInSeconds() / 31536000 / 11.86);
    return ageJupiter;
  }
  mercuryLifeExpectancy(){
    let mercuryLifeExpectancy = Math.floor(this.lifeExpectancy/.24);
    let userAge = Math.floor(this.age/.24);
    let surpassed = userAge - mercuryLifeExpectancy;
    if (userAge > mercuryLifeExpectancy) {
      return 'Wow you surpassed this planets life expectancy by ' + surpassed;
    } else {
    return mercuryLifeExpectancy;
    }
  }
  venusLifeExpectancy(){
    let venusLifeExpectancy = Math.floor(this.lifeExpectancy/.62);
    let userAge = Math.floor(this.age/.62);
    let surpassed = userAge - venusLifeExpectancy;
    if (userAge > venusLifeExpectancy) {
      return 'Wow you surpassed this planets life expectancy by ' + surpassed;
    } else {
    return venusLifeExpectancy;
    }
  }
  marsLifeExpectancy(){
    let marsLifeExpectancy = Math.floor(this.lifeExpectancy/1.88);
    let userAge = Math.floor(this.age/1.88);
    let surpassed = userAge - marsLifeExpectancy;
    if (userAge > marsLifeExpectancy) {
      return 'Wow you surpassed this planets life expectancy by ' + surpassed;
    } else {
    return marsLifeExpectancy;
    }
  }
  jupiterLifeExpectancy(){
    let jupiterLifeExpectancy = Math.floor(this.lifeExpectancy/11.86);
    let userAge = Math.floor(this.age/11.86);
    let surpassed = userAge - jupiterLifeExpectancy;
    if (userAge > jupiterLifeExpectancy) {
      return 'Wow you surpassed this planets life expectancy by ' + surpassed;
    } else {
    return jupiterLifeExpectancy;
    }
  }
}
