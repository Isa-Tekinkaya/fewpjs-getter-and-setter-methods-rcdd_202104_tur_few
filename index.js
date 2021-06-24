// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius;
  }
  set diameter(radius){
   return this.radius *2
  }
  set circumference(diameter){
   return  Math.PI * this.diameter
  }
  set area(area){
   return Math.PI * (this.area *2)
  }
  
  get diameter(){
    return this.radius *2
  }
  get circumference(){
    return  Math.PI * this.diameter
  }
  get area(){
    return Math.PI * (this.radius *2)
  }
  
}
