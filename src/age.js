export class galactic {
  constructor(birthdate, lifeExpectancy){
    this.birthdate = birthdate;
    this.lifeExpectancy = lifeExpectancy;
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
}
