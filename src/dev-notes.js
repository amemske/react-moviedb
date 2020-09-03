//JSX
1. syntactic sugar for React.create
2. they self close
3. User defined  component should start with a capital letter
4. ypu can use js expressions in jsx
5. you can nest components just like in html
6. Nested content can be accessed in the props.children


//Js spread operators
- The spread syntax makes the array into separate arguments

//concat
const myArrayOne = [1,2,3];
const myArrayTwo = [5,6,7];

const ourArray = [...myArrayOne,...myArrayTwo];
console.log(...ourArray);

//spread operators Math functions
const numbers = [37,90,6,-23];
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

//spread operators in arguments
const fruitStand = ['Apple', 'Mango', 'Banana',];
const sellFruits = (fruit1, fruit2, fruit3) => {
  console.log(`Fruits for sale: &{fruit1}, &{fruit2}, &{fruit3}`);

}
sellFruit(...fruitStand);

//spread operators adding to a list
const fruitBasket1 = ['peach', 'orange'];
const fruitBasket2 = ['avocado', 'banana', 'watermelon', ...fruitBasket1];
console.log(fruitBasket2)


//using React states spread operators
//-useState takes two argument - a parameter and a functions

import React, { useState} from 'React'
import ReactDOM from 'react-dom'

function App(){
//React hook declaration
const[searches, setSearches] = useState([]);
const [query, setQuery] = useSate("");

const handleClick = () => {
//Add the search term to the list onClick of search button
//Actually searching would require an API call heroImage

//Save search term state to React Hooks
setSearches(search => [...searches,query])
}


//Destructuring
-create variables from values in arrays and objects
-No need to use indexes or loops!
-Works well with default options in functions
- Destructuring removes repetitions

//objects
const person = {
firstName:"Antony",
lastName: "Ngash",
city:"Nairobi"
}


//old way
const firstName = person.firstName
const lastName = person.lastName
const city = person.city

//new way
const {firstName,lastName,city } = person
console.log(firstName) //Antony


//example array Destructuring
const schools = [ 'Alliance High School','Westlands School', 'KU', 'another school']; //starts with an array
const [secondary, primary, university,...moreSchools] = schools; //Destructuring values using other names

console.log(secondary) // Alliance High schools
console.log(moreSchools)

//Destructuring with Default values
const schools = [ 'Alliance High School','Westlands School', 'KU', 'another school'];
const [secondary ='Mangu High', primary='woodley primary', university,...moreSchools] = schools; //if a value is not present the default value is used


//Destructuring use cases
// a blog may want to treat the firt blog post different from the result

const[firstPost, ...otherPosts] = blogPosts;


//object Destructuring
const student = {
  name: 'Janer',
  location: 'Mumbai',
  age: 23
}

const{name, location, age} = student;

console.log(location); // Mumbai

//default values -- object Destructuring

const student = {
  name:'Jenny'
};

const {
  name = 'Unknown student',
  location = 'Unknown location',
  age = 'Unknown age'
}

const{name,location, age} = student;

console.log(name); //Jenny
console.log(location) //Unknown location


//deconstruction in functions

function shipGenerator(options = {}){
 const {cannons= 4, engines=2,crew=10} =options;

  return `This ship has ${cannons} cannons, &{engines} engines, and &{crew} crew members.`;
}

console.log(shipGenerator({engines:10, crew:20}));//This ship has 4 cannons, 10 enignes and 20 crew members
console.log(shipGenerator({cannons:0})); //This ship has 0 cannons, 2 enignes and 10 crew members
console.log(shipGenerator()); //This ship has 4 cannons, 2 enignes and 10 crew members



//destructuring in React
props = {
    attraction: {
      address1: "350 5th Ave",
      address2: "",
      average_rating: 4,
      city: "New York",
      country: "US",
      display_address: ["350 5th Ave", "New York, NY 10118"],
      id: 9,
      latitude_coordinate: "40.748442285082",
      location: {
        created_at: "2018–03–07T03:56:20.717Z",
        id: 1,
        latitude_coordinate: 40.712775,
        longitude_coordinate: -74.005973,
        ...
      }
    },
    auth: {
      loggedIn: true,
      loggingIn: false,
      ...
    } ...
  }

//attraction component
  const Attraction = props => {
  return (
    <div auth={props.auth} key={props.attraction.id}>
      <Link
        auth={props.auth.token}
        to={`/attractions/${props.attraction.url_name}`}
        key={props.attraction.id}
      >
        <img
          alt={props.attraction.name}
          src={props.attraction.image_url}
        />
        <h1>{props.attraction.name}</h1>
      </Link>
      <StarRatings rating={props.attraction.average_rating} />
    </div>
  );
};

//attraction component destructured

const Attraction = ({ auth, attraction }) => {
  return (
    <div auth={auth} key={attraction.id}>
      <Link
        token={auth.token}
        to={`/attractions/${attraction.url_name}`}
        key={attraction.id}
      >
        <img alt={attraction.name} src={attraction.image_url} />
        <h1>{attraction.name}</h1>
      </Link>
      <StarRatings rating={attraction.average_rating} />
    </div>
  );
};

//attraction component further destructured
const Attraction = ({
  auth,
  auth: { token },
  attraction: { id, url_name, name, image_url, average_rating }
}) => {
  return (
    <div auth={auth} key={id}>
      <Link token={token} to={`/attractions/${url_name}`} key={id}>
        <img alt={name} src={image_url} />
        <h1>{name}</h1>
      </Link>
      <StarRatings rating={average_rating} />
    </div>
  );
};

//Ternery operator
//when search term is true it will display the first string otherwise it will show the second string
{searchTerm ? 'Search Result' : 'Popular Movies'}

//Looping using maps



//emutable objects



//&& operator ! operator - short circuit
