


// function makeTransaction (quantity, pricePerDroid ){
//     const totalPrice = pricePerDroid * quantity;{
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`};
    
//     }
// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"


// function getShippingMessage(country, price, deliveryFee){
//    const totalPrice = price + deliveryFee;{
//     return `Shipping to ${country} will cost ${totalPrice} credits`
//    } ;
// }
// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

// function makeTransaction(quantity, pricePerDroid, customerCredits){
//     const totalPrice = quantity * pricePerDroid;
//     if(totalPrice>customerCredits){
//         return "Insufficient funds!"
//     } else {
//         return `You ordered ${quantity} droids worth ${totalPrice} credits!`
//     };
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"




// function formatMessage(message, maxLength){
//     const messegeLength= message.length;
//     if(messegeLength<=maxLength){
//         return message
//     }
//     else {
//         return message.slice(0,maxLength)+'...'

//     }
// }
// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"



// function checkForSpam(message){
//     const newMessage = message.toLowerCase();
//     if(newMessage.includes('spam')||newMessage.includes('sale')){
//         return true
//     }
//     else {
//         return false}
// }


// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true


// function getShippingCost(country){
//     let price;
//     switch (country) {
//         case "China":
//         price = 100;
//         break;
//         case "Chile":
//             price = 250;
//             break;
//             case "Australia":
//                 price = 170;
//                 break;
//                 case "Jamaica":
//         price = 120;
//         break;

//             default: return "Sorry, there is no delivery to your country"
//     }
//     return `Shipping to ${country} will cost ${price} credits`
// }


// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"


// function slugify(title){
//     const newTitle=title.toLowerCase();
//     const slug = newTitle.split(" ").join('-');
// return slug;
// }
// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"


// function makeArray (firstArray, secondArray, maxLength){
//     const newArray = firstArray.concat(secondArray);
//         if (newArray.length>maxLength){
//             return newArray.slice(0, maxLength)
//         }
//         return newArray;
//     }
//     console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
//     console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
//     console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
//     console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
//     console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
//     console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
    


// function filterArray(numbers, value){
//     const newArray=[];
//     for (let i = 0; i < numbers.length; i++){
//     if(numbers[i] > value){
//         newArray.push(numbers[i]);
//     }
// }
// return newArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]



// 



// const getUsersWithFriend=(users, friendName)=>users.filter(user=>user.friends.includes(friendName));
// const allUsers = [
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"]
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"]
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"]
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"]
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"]
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"]
//     }
//   ];
  
//   console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
//   // [
//   //   {
//   //     name: "Sharlene Bush",
//   //     friends: ["Briana Decker", "Sharron Pace"]
//   //   },
//   //   {
//   //     name: "Sheree Anthony",
//   //     friends: ["Goldie Gentry", "Briana Decker"]
//   //   }
//   // ]
  
//   console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
//   // [
//   //   {
//   //     name: "Elma Head",
//   //     friends: ["Goldie Gentry", "Aisha Tran"]
//   //   },
//   //   {
//   //     name: "Sheree Anthony",
//   //     friends: ["Goldie Gentry", "Briana Decker"]
//   //   }
//   // ]
  
//   console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []
  

// const sortByDescendingFriendCount=users=>{
//     return users.toSorted((a,b)=>b.friends.length-a.friends.length);
// }
// console.log(
//     sortByDescendingFriendCount([
//       {
//         name: "Moore Hensley",
//         friends: ["Sharron Pace"],
//         gender: "male"
//       },
//       {
//         name: "Sharlene Bush",
//         friends: ["Briana Decker", "Sharron Pace"],
//         gender: "female"
//       },
//       {
//         name: "Ross Vazquez",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         gender: "male"
//       },
//       {
//         name: "Elma Head",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         gender: "female"
//       },
//       {
//         name: "Carey Barr",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         gender: "male"
//       },
//       {
//         name: "Blackburn Dotson",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         gender: "male"
//       },
//       {
//         name: "Sheree Anthony",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         gender: "female"
//       }
//     ])
//   );
//   // [
//   //   {
//   //     name: "Ross Vazquez",
//   //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//   //     gender: "male"
//   //   },
//   //   {
//   //     name: "Sharlene Bush",
//   //     friends: ["Briana Decker", "Sharron Pace"],
//   //     gender: "female"
//   //   },
//   //   {
//   //     name: "Elma Head",
//   //     friends: ["Goldie Gentry", "Aisha Tran"],
//   //     gender: "female"
//   //   },
//   //   {
//   //     name: "Carey Barr",
//   //     friends: ["Jordan Sampson", "Eddie Strong"],
//   //     gender: "male"
//   //   },
//   //   {
//   //     name: "Blackburn Dotson",
//   //     friends: ["Jacklyn Lucas", "Linda Chapman"],
//   //     gender: "male"
//   //   },
//   //   {
//   //     name: "Sheree Anthony",
//   //     friends: ["Goldie Gentry", "Briana Decker"],
//   //     gender: "female"
//   //   },
//   //   {
//   //     name: "Moore Hensley",
//   //     friends: ["Sharron Pace"],
//   //     gender: "male"
//   //   }
//   // ]
  

const getTotalBalanceByGender=(users, gender)=>{
    return users
        .filter(user => user.gender === gender)
        .reduce((total, user) => total + user.balance, 0);
};

const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863
