//
// Object destructuring
//

const person= {
    name: 'Rajesh',
    age:10,
    location:{
                city:'Hyderabad',
                temp:98
            }

}

const {name = 'Anonymous', age} = person; // if name doesnot exist in person it will display the default name as Anonymous

console.log(`${name} is ${age}`);

const {city , temp : temperature} = person.location; // can rename the field temp to temperature

if(city && temperature)
{
    console.log(`It's ${temperature} in ${city}`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);

//
// Array destructuring
//

const item = ['coffee (hot)','100','200','300'];

const [itemName, ,mediumcost] = item;


console.log(`A medium ${itemName} cost ${mediumcost}`);