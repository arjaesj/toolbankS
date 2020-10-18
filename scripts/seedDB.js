const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/toolbanks"
);

const userSeed = [
    {
        username: "TMNElson",
        email: "moleMan@sinister6.com",
        password: "weHateSpiderMan",
        fullname: "Tim Mole Nelson",
        address: "915 W Foothill Blvd #281 Claremont, California, 91711",
        imageUrl: "https://toolbanksimages.s3-ap-southeast-2.amazonaws.com/mole-man-147007.jpg"
    },
    {
        username: "IMStark",
        email: "IMStark@avergers.com",
        password: "playboyGenius",
        fullname: "Anthony Edward Stark",
        address: "10880 Malibu Point, Malibu, California, 90265",
        imageUrl: "https://toolbanksimages.s3-ap-southeast-2.amazonaws.com/mole-man-147007.jpg"
    },
    {
        username: "TOdinson",
        email: "TOdinson@avergers.com",
        password: "strongerstAvenger",
        fullname: "Thor Odinson",
        address: "200 Park Ave, New York, NY 10166, United States",
        imageUrl: "https://toolbanksimages.s3-ap-southeast-2.amazonaws.com/odinson.jpeg"
    }
];

const toolSeed = [
  {
    toolName: "Electric Drill",
    userName: "TMNelson",
    price: "9.99",
    description: "Brand new, never been used, only one drill bit = #8",
    imageUrl: "https://toolbanksimages.s3-ap-southeast-2.amazonaws.com/elecDrill.png",
    datePosted: new Date(Date.now())
  },
  {
    toolName: "Electric Saw",
    userName: "IMStark",
    price: "12.99",
    description: "Good working condition, renter to provide saw blades",
    imageUrl: "https://toolbanksimages.s3-ap-southeast-2.amazonaws.com/elecSaw.png",
    datePosted: new Date(Date.now())
  },
  {
    toolName: "Awesome Hammer",
    userName: "TOdinson",
    price: "9.99",
    description: "Reliable tool in a very well maintained condition. Don't need to be worthy to weild",
    imageUrl: "https://toolbanksimages.s3-ap-southeast-2.amazonaws.com/hammer.png",
    datePosted: new Date(Date.now())
  },
  {
    toolName: "Long Nose Plier",
    userName: "IMStark",
    price: "1.99",
    description: "Brand new, never been used, 8-inch long nose pliers with cutter used for cutting and grasping or bending small objects; Machined jaws for a slip-resistant grip;",
    imageUrl: "https://toolbanksimages.s3-ap-southeast-2.amazonaws.com/longnose.png",
    datePosted: new Date(Date.now())
  },
  {
    toolName: "Lawnmower",
    userName: "TMNelson",
    price: "19.99",
    description: "Petrol powered with sharp blades. Doesn't dig a hole though your lawn.",
    imageUrl: "https://toolbanksimages.s3-ap-southeast-2.amazonaws.com/lawnmower.png",
    datePosted: new Date(Date.now())
  },
  {
    toolName: "Set of 2 Wrench",
    userName: "IMStark",
    price: "5.99",
    description: "Used extensively but still in working condition. Made from Vibranium, manufactured in Wakanda.",
    imageUrl: "https://toolbanksimages.s3-ap-southeast-2.amazonaws.com/wrench2x.png",
    datePosted: new Date(Date.now())
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Tool.remove({})
  .then(() => db.Tool.collection.insertMany(toolSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
