// const myNum = [1,2,3,4,5,6,7,8,9,10];

// const newNum = myNum.filter((val)=> {
//     return val > 4})
// console.log(newNum);

const books = [
    { name: "The Great Gatsby", genre: "Fiction", publication: "1925", edition: "1st", price: 10.99 },
    { name: "To Kill a Mockingbird", genre: "Fiction", publication: "1960", edition: "1st", price: 8.99 },
    { name: "1984", genre: "Dystopian", publication: "1949", edition: "1st", price: 12.99 },
    { name: "Moby Dick", genre: "Adventure", publication: "1851", edition: "1st", price: 9.99 },
    { name: "War and Peace", genre: "Historical", publication: "1869", edition: "1st", price: 15.99 },
    { name: "Pride and Prejudice", genre: "Romance", publication: "1813", edition: "1st", price: 7.99 },
    { name: "The Catcher in the Rye", genre: "Fiction", publication: "1951", edition: "1st", price: 6.99 },
    { name: "The Hobbit", genre: "Fantasy", publication: "1937", edition: "1st", price: 10.49 },
    { name: "Ulysses", genre: "Modernist", publication: "1922", edition: "1st", price: 13.99 },
    { name: "The Odyssey", genre: "Epic", publication: "8th Century BC", edition: "1st", price: 11.99 },
    { name: "The Divine Comedy", genre: "Epic", publication: "1320", edition: "1st", price: 14.99 },
    { name: "Brave New World", genre: "Dystopian", publication: "1932", edition: "1st", price: 8.49 },
    { name: "Crime and Punishment", genre: "Psychological", publication: "1866", edition: "1st", price: 11.49 },
    { name: "Great Expectations", genre: "Fiction", publication: "1861", edition: "1st", price: 7.49 },
    { name: "Catch-22", genre: "Satire", publication: "1961", edition: "1st", price: 9.49 },
    { name: "Anna Karenina", genre: "Realist", publication: "1877", edition: "1st", price: 12.49 },
    { name: "Don Quixote", genre: "Adventure", publication: "1615", edition: "1st", price: 13.49 },
    { name: "One Hundred Years of Solitude", genre: "Magic Realism", publication: "1967", edition: "1st", price: 10.49 },
    { name: "The Brothers Karamazov", genre: "Philosophical", publication: "1880", edition: "1st", price: 14.49 },
    { name: "Jane Eyre", genre: "Romance", publication: "1847", edition: "1st", price: 7.99 }
  ];
  

  const userBooks = books.filter((val)=>{
    return val.genre === 'Fiction' && val.publication >= 2000
  })
  console.log(userBooks);
  