const restaurants = [
  {
    id: 1,
    name: "Spice Palace",
    cuisine: ["North Indian", "Biryani"],
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1200&auto=format&fit=crop",
    avgPrice: 250,
    menu: [
      { id: 1, name: "Butter Chicken", desc: "Creamy tomato gravy", price: 220 },
      { id: 2, name: "Paneer Tikka", desc: "Charred cottage cheese", price: 180 }
    ]
  },
  {
    id: 2,
    name: "Sushi Studio",
    cuisine: ["Japanese", "Sushi"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    avgPrice: 400,
    menu: [
      { id: 1, name: "Salmon Nigiri", desc: "Fresh salmon slice", price: 300 },
      { id: 2, name: "Miso Soup", desc: "Savory seaweed soup", price: 80 }
    ]
  },
  {
    id: 3,
    name: "Pasta Fiesta",
    cuisine: ["Italian", "Continental"],
    image: "https://images.unsplash.com/photo-1521389508051-d7ffb5dc8e8d?q=80&w=1200&auto=format&fit=crop",
    avgPrice: 350,
    menu: [
      { id: 1, name: "Pasta Alfredo", desc: "Creamy white sauce pasta", price: 260 },
      { id: 2, name: "Garlic Bread", desc: "Fresh and crispy", price: 90 }
    ]
  },
  {
    id: 4,
    name: "Burger Hub",
    cuisine: ["American", "Fast Food"],
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop",
    avgPrice: 220,
    menu: [
      { id: 1, name: "Cheese Burger", desc: "Loaded with cheese", price: 150 },
      { id: 2, name: "French Fries", desc: "Crispy golden fries", price: 80 }
    ]
  },
  {
    id: 5,
    name: "Taco Amigos",
    cuisine: ["Mexican"],
    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1200&auto=format&fit=crop",
    avgPrice: 300,
    menu: [
      { id: 1, name: "Beef Taco", desc: "Spicy & juicy beef filling", price: 180 },
      { id: 2, name: "Nachos", desc: "Crispy nachos with cheese dip", price: 120 }
    ]
  },
  {
    id: 6,
    name: "Green Bowl",
    cuisine: ["Healthy", "Salads"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
    avgPrice: 200,
    menu: [
      { id: 1, name: "Greek Salad", desc: "Fresh veggies & feta cheese", price: 160 },
      { id: 2, name: "Veg Sandwich", desc: "Whole grain bread", price: 120 }
    ]
  },
  {
    id: 7,
    name: "The Curry House",
    cuisine: ["South Indian", "Chettinad"],
    image: "https://images.unsplash.com/photo-1601050690597-df3b781c0f39?q=80&w=1200&auto=format&fit=crop",
    avgPrice: 180,
    menu: [
      { id: 1, name: "Chicken Chettinad", desc: "Spicy Chettinad-style", price: 200 },
      { id: 2, name: "Idli Sambar", desc: "Soft idlis with hot sambar", price: 70 }
    ]
  },
  {
    id: 8,
    name: "Pizza Planet",
    cuisine: ["Italian", "Fast Food"],
    image: "https://images.unsplash.com/photo-1548365328-8b849e5d0f09?q=80&w=1200&auto=format&fit=crop",
    avgPrice: 320,
    menu: [
      { id: 1, name: "Pepperoni Pizza", desc: "Classic pepperoni & cheese", price: 350 },
      { id: 2, name: "Veggie Pizza", desc: "Loaded with veggies", price: 300 }
    ]
  },
  {
    id: 9,
    name: "Shawarma Street",
    cuisine: ["Arabic", "Lebanese"],
    image: "https://images.unsplash.com/photo-1601924582970-9238e3400b76?q=80&w=1200&auto=format&fit=crop",
    avgPrice: 180,
    menu: [
      { id: 1, name: "Chicken Shawarma", desc: "Juicy roasted chicken", price: 120 },
      { id: 2, name: "Falafel Wrap", desc: "Crispy falafel with tahini", price: 90 }
    ]
  },
  {
    id: 10,
    name: "Biryani Central",
    cuisine: ["Hyderabadi", "Mughlai"],
    image: "https://images.unsplash.com/photo-1604908176784-22f08a45eeb1?q=80&w=1200&auto=format&fit=crop",
    avgPrice: 260,
    menu: [
      { id: 1, name: "Hyderabadi Biryani", desc: "Authentic dum biryani", price: 250 },
      { id: 2, name: "Chicken 65", desc: "Spicy deep-fried chicken", price: 150 }
    ]
  },
  {
    id: 11,
    name: "Cafe Mocha",
    cuisine: ["Cafe", "Desserts"],
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
    avgPrice: 150,
    menu: [
      { id: 1, name: "Cappuccino", desc: "Rich foamy coffee", price: 120 },
      { id: 2, name: "Chocolate Cake", desc: "Soft and creamy", price: 140 }
    ]
  },
  {
    id: 12,
    name: "Dragon Wok",
    cuisine: ["Chinese", "Asian"],
    image: "https://images.unsplash.com/photo-1554456857-4dd3c0aeae8c?q=80&w=1200&auto=format&fit=crop",
    avgPrice: 220,
    menu: [
      { id: 1, name: "Fried Rice", desc: "Veg fried rice", price: 130 },
      { id: 2, name: "Chilli Chicken", desc: "Spicy & flavorful", price: 200 }
    ]
  },
  {
    id: 13,
    name: "BBQ Nation",
    cuisine: ["Barbeque", "Grill"],
    image: "https://images.unsplash.com/photo-1555992336-cbf7d1766aad?q=80&w=1200&auto=format&fit=crop",
    avgPrice: 450,
    menu: [
      { id: 1, name: "BBQ Chicken", desc: "Smoky grilled chicken", price: 350 },
      { id: 2, name: "Grilled Veggies", desc: "Smoked & seasoned", price: 180 }
    ]
  },
  {
    id: 14,
    name: "The Breakfast Spot",
    cuisine: ["Breakfast", "Cafe"],
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
    avgPrice: 180,
    menu: [
      { id: 1, name: "Pancakes", desc: "Soft and sweet", price: 140 },
      { id: 2, name: "Omelette", desc: "Cheese & herbs", price: 90 }
    ]
  },
  {
    id: 15,
    name: "Kebab Factory",
    cuisine: ["Mughlai", "Grill"],
    image: "https://images.unsplash.com/photo-1630422446565-9a25d85c3042?q=80&w=1200&auto=format&fit=crop",
    avgPrice: 300,
    menu: [
      { id: 1, name: "Seekh Kebab", desc: "Juicy minced meat kebab", price: 220 },
      { id: 2, name: "Tandoori Chicken", desc: "Clay oven roasted", price: 260 }
    ]
  }
];

export default restaurants;
