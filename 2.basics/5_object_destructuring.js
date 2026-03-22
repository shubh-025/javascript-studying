const course = {
    coursename: "js in hindi",
    price: "100",
    instructor: "hitesh"
}

// course.instructor  //can get lengthy

const {instructor} = course
console.log(instructor);

// or to get it more shorter
const {instructor: ins} = course
console.log(ins);

// thats how we destructure object

// this concept is from react (dont stress)
// so we also use destructuring there
// const navbar = (props.company) => {

// }

// navbar(company = "shubh")

// destructuring is done using { }



// APIs ------------------------------------------

// earlier values from api used to come in xml
// now they come in json ( json is nothing but object)

// {
//     "name": "shubh",
//     "coursename": "js lets go",
//     "price": "free"
// }
// object has name but json isnt given any name 
// its keys and values are string (no. and true false arent string in values)

// we might also get api's as array
[
    {},
    {},
    {}
]

// famous api randomuserme
// we have tools like json formatter which helps us understand and visualize the json we get after calling an api




