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
}
