// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered); // 1846



// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
  
// let {numPlanets, ...discoveryYears} = planetFacts;

// console.log(discoveryYears); // ?



function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
getUserData({firstName: "Melissa"}) // ?
getUserData({}) // ?



const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
// const {numbers: {a, b}} = obj;
const {a,b} = obj.numbers



const arr = [1, 2];

// const [first, second] = arr;
// arr = [second, first];
[arr[0], arr[1]] = [arr[1], arr[0]]



const raceResults = ([first, second, third, ...rest]) => ({
    first,
    second,
    third, 
    rest
})