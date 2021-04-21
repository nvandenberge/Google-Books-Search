const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
    {
        id: "1",
        title: "Code: The Hidden Language of Computer Hardware and Software",
        authors: ["Charles Petzold"],
        description:
          "What do flashlights, the British invasion, black cats, and seesaws have to do with computers? In CODE, they show us the ingenious ways we manipulate language and invent new means of communicating with each other. And through CODE, we see how this ingenuity and our very human compulsion to communicate have driven the technological innovations of the past two centuries. Using everyday objects and familiar language systems such as Braille and Morse code, author Charles Petzold weaves an illuminating narrative for anyone who’s ever wondered about the secret inner life of computers and other smart machines. It’s a cleverly illustrated and eminently comprehensible story—and along the way, you’ll discover you’ve gained a real context for understanding today’s world of PCs, digital media, and the Internet. No matter what your level of technical savvy, CODE will charm you—and perhaps even awaken the technophile within.",
        image: "http://books.google.com/books/content?id=iptCAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "http://books.google.com/books?id=gYlQAAAAMAAJ&dq=Code:+The+Hidden+Language+of+Computer+Hardware+and+Software&hl=&source=gbs_api",
      },
      {
        id: "2",
        title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
        authors: ["Ashlee Vance"],
        description:
          "In the spirit of Steve Jobs and Moneyball, Elon Musk is both an illuminating and authorized look at the extraordinary life of one of Silicon Valley's most exciting, unpredictable, and ambitious entrepreneurs - a real-life Tony Stark - and a fascinating exploration of the renewal of American invention and its new makers. Elon Musk spotlights the technology and vision of Elon Musk, the renowned entrepreneur and innovator behind SpaceX, Tesla, and SolarCity, who sold one of his Internet companies, PayPal, for $1.5 billion. Ashlee Vance captures the full spectacle and arc of the genius' life and work, from his tumultuous upbringing in South Africa and flight to the United States to his dramatic technical innovations and entrepreneurial pursuits. Vance uses Musk's story to explore one of the pressing questions of our age: Can the nation of inventors and creators who led the modern world for a century still compete in an age of fierce global competition? He argues that Musk - one of the most unusual and striking figures in American business history - is a contemporary, visionary amalgam of legendary inventors and industrialists, including Thomas Edison, Henry Ford, Howard Hughes,and Steve Jobs. More than any other entrepreneur today, Musk has dedicated his energies and his own vast fortune to inventing a future that is as rich and far reaching as the visionaries of the golden age of science-fiction fantasy.",
        image: "http://books.google.com/books/content?id=Ma4sjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "http://books.google.com/books?id=Ma4sjwEACAAJ&dq=Elon+Musk:+Tesla,+SpaceX,+and+the+Quest+for+a+Fantastic+Future&hl=&source=gbs_api",
      },
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
