const productsData = [
  // Samsung - Electronics
  { id: "p1", name: "Samsung Galaxy S22", c_id: "c1", b_id: "b1", image: "https://images.unsplash.com/photo-1611222020173-fd1e124b4b31?auto=format&fit=crop&w=800&q=80" },
  { id: "p2", name: "Samsung Smart TV", c_id: "c1", b_id: "b1", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80" },
  { id: "p3", name: "Samsung Galaxy Buds", c_id: "c1", b_id: "b1", image: "https://images.unsplash.com/photo-1611003228941-c471bbc6f9d4?auto=format&fit=crop&w=800&q=80" },

  // Apple
  { id: "p4", name: "iPhone 14", c_id: "c1", b_id: "b2", image: "https://images.unsplash.com/photo-1660666827634-55d2c2c4b1ed?auto=format&fit=crop&w=800&q=80" },
  { id: "p5", name: "MacBook Pro", c_id: "c1", b_id: "b2", image: "https://images.unsplash.com/photo-1587614382346-ac7f1a129bbb?auto=format&fit=crop&w=800&q=80" },
  { id: "p6", name: "Apple Watch", c_id: "c1", b_id: "b2", image: "https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?auto=format&fit=crop&w=800&q=80" },

  // Sony
  { id: "p7", name: "Sony WH-1000XM5", c_id: "c1", b_id: "b3", image: "https://images.unsplash.com/photo-1585386959984-a41552262b40?auto=format&fit=crop&w=800&q=80" },
  { id: "p8", name: "Sony Bravia TV", c_id: "c1", b_id: "b3", image: "https://images.unsplash.com/photo-1565614731413-9276dddb7f6e?auto=format&fit=crop&w=800&q=80" },
  { id: "p9", name: "Sony PlayStation 5", c_id: "c1", b_id: "b3", image: "https://images.unsplash.com/photo-1606813902782-7b2e5c72fa20?auto=format&fit=crop&w=800&q=80" },

  // Zara - Fashion
  { id: "p10", name: "Zara Men’s Jacket", c_id: "c2", b_id: "b4", image: "https://images.unsplash.com/photo-1618354691264-cb4a89dd7f3d?auto=format&fit=crop&w=800&q=80" },
  { id: "p11", name: "Zara Women’s Dress", c_id: "c2", b_id: "b4", image: "https://images.unsplash.com/photo-1602810313324-7dc4fa583c4a?auto=format&fit=crop&w=800&q=80" },
  { id: "p12", name: "Zara Sneakers", c_id: "c2", b_id: "b4", image: "https://images.unsplash.com/photo-1611262588024-d12430b09a47?auto=format&fit=crop&w=800&q=80" },

  // Nike
  { id: "p13", name: "Nike Air Max", c_id: "c2", b_id: "b5", image: "https://images.unsplash.com/photo-1600181959106-3e4f690c17e5?auto=format&fit=crop&w=800&q=80" },
  { id: "p14", name: "Nike T-Shirt", c_id: "c2", b_id: "b5", image: "https://images.unsplash.com/photo-1602810313354-3e30c2ac7335?auto=format&fit=crop&w=800&q=80" },
  { id: "p15", name: "Nike Backpack", c_id: "c2", b_id: "b5", image: "https://images.unsplash.com/photo-1607082349565-e1a479bd907f?auto=format&fit=crop&w=800&q=80" },

  // H&M
  { id: "p16", name: "H&M Jeans", c_id: "c2", b_id: "b6", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6953?auto=format&fit=crop&w=800&q=80" },
  { id: "p17", name: "H&M Hoodie", c_id: "c2", b_id: "b6", image: "https://images.unsplash.com/photo-1602810313317-c6368c3d2636?auto=format&fit=crop&w=800&q=80" },
  { id: "p18", name: "H&M Cap", c_id: "c2", b_id: "b6", image: "https://images.unsplash.com/photo-1520975911443-db578e5d78e9?auto=format&fit=crop&w=800&q=80" },

  // IKEA - Home
  { id: "p19", name: "IKEA Chair", c_id: "c3", b_id: "b7", image: "https://images.unsplash.com/photo-1598300052435-73d2b2f49cbb?auto=format&fit=crop&w=800&q=80" },
  { id: "p20", name: "IKEA Table", c_id: "c3", b_id: "b7", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
  { id: "p21", name: "IKEA Lamp", c_id: "c3", b_id: "b7", image: "https://images.unsplash.com/photo-1616627983935-418c7924f1c7?auto=format&fit=crop&w=800&q=80" },

  // Prestige
  { id: "p22", name: "Prestige Pressure Cooker", c_id: "c3", b_id: "b8", image: "https://images.unsplash.com/photo-1586201375761-83865001e31b?auto=format&fit=crop&w=800&q=80" },
  { id: "p23", name: "Prestige Mixer", c_id: "c3", b_id: "b8", image: "https://images.unsplash.com/photo-1620912189863-cbfa369ab3b1?auto=format&fit=crop&w=800&q=80" },
  { id: "p24", name: "Prestige Induction Cooktop", c_id: "c3", b_id: "b8", image: "https://images.unsplash.com/photo-1611862433786-9b31f0db3526?auto=format&fit=crop&w=800&q=80" },

  // Whirlpool
  { id: "p25", name: "Whirlpool Refrigerator", c_id: "c3", b_id: "b9", image: "https://images.unsplash.com/photo-1581579185169-1d73e83665c6?auto=format&fit=crop&w=800&q=80" },
  { id: "p26", name: "Whirlpool Washing Machine", c_id: "c3", b_id: "b9", image: "https://images.unsplash.com/photo-1616627983687-babf6332df3e?auto=format&fit=crop&w=800&q=80" },
  { id: "p27", name: "Whirlpool Microwave", c_id: "c3", b_id: "b9", image: "https://images.unsplash.com/photo-1620671722036-09c977bde8f3?auto=format&fit=crop&w=800&q=80" },

  // L'Oreal - Beauty
  { id: "p28", name: "L'Oreal Face Wash", c_id: "c4", b_id: "b10", image: "https://images.unsplash.com/photo-1589910401759-ff152d4181cb?auto=format&fit=crop&w=800&q=80" },
  { id: "p29", name: "L'Oreal Shampoo", c_id: "c4", b_id: "b10", image: "https://images.unsplash.com/photo-1598532338171-6ef5f8942c90?auto=format&fit=crop&w=800&q=80" },
  { id: "p30", name: "L'Oreal Night Cream", c_id: "c4", b_id: "b10", image: "https://images.unsplash.com/photo-1580747292903-3353efbb3455?auto=format&fit=crop&w=800&q=80" },

  // Nivea
  { id: "p31", name: "Nivea Lotion", c_id: "c4", b_id: "b11", image: "https://images.unsplash.com/photo-1587049352842-4abde0f6f0c3?auto=format&fit=crop&w=800&q=80" },
  { id: "p32", name: "Nivea Face Cream", c_id: "c4", b_id: "b11", image: "https://images.unsplash.com/photo-1620912189863-cbfa369ab3b1?auto=format&fit=crop&w=800&q=80" },
  { id: "p33", name: "Nivea Soap", c_id: "c4", b_id: "b11", image: "https://images.unsplash.com/photo-1580910051074-3348a6f92d04?auto=format&fit=crop&w=800&q=80" },

  // Dove
  { id: "p34", name: "Dove Shampoo", c_id: "c4", b_id: "b12", image: "https://images.unsplash.com/photo-1621321055410-5f3fa9c48cc6?auto=format&fit=crop&w=800&q=80" },
  { id: "p35", name: "Dove Conditioner", c_id: "c4", b_id: "b12", image: "https://images.unsplash.com/photo-1631060096974-7b5ae89c781b?auto=format&fit=crop&w=800&q=80" },
  { id: "p36", name: "Dove Beauty Bar", c_id: "c4", b_id: "b12", image: "https://images.unsplash.com/photo-1618912213043-d75303b61825?auto=format&fit=crop&w=800&q=80" },

  // Adidas - Sports
  { id: "p37", name: "Adidas Running Shoes", c_id: "c5", b_id: "b13", image: "https://images.unsplash.com/photo-1600181959106-3e4f690c17e5?auto=format&fit=crop&w=800&q=80" },
  { id: "p38", name: "Adidas Tracksuit", c_id: "c5", b_id: "b13", image: "https://images.unsplash.com/photo-1603575448529-ef32f1f40632?auto=format&fit=crop&w=800&q=80" },
  { id: "p39", name: "Adidas Gym Bag", c_id: "c5", b_id: "b13", image: "https://images.unsplash.com/photo-1514826786317-59744fe2a9b0?auto=format&fit=crop&w=800&q=80" },

  // Puma
  { id: "p40", name: "Puma Hoodie", c_id: "c5", b_id: "b14", image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80" },
  { id: "p41", name: "Puma Shoes", c_id: "c5", b_id: "b14", image: "https://images.unsplash.com/photo-1611078489935-5e3c032a3fdc?auto=format&fit=crop&w=800&q=80" },
  { id: "p42", name: "Puma Socks", c_id: "c5", b_id: "b14", image: "https://images.unsplash.com/photo-1581076504357-43cf56e57074?auto=format&fit=crop&w=800&q=80" },

  // Decathlon
  { id: "p43", name: "Decathlon Tent", c_id: "c5", b_id: "b15", image: "https://images.unsplash.com/photo-1571019613914-85f342c1d4a9?auto=format&fit=crop&w=800&q=80" },
  { id: "p44", name: "Decathlon Hiking Shoes", c_id: "c5", b_id: "b15", image: "https://images.unsplash.com/photo-1526403228965-6d33d0f25e12?auto=format&fit=crop&w=800&q=80" },
  { id: "p45", name: "Decathlon Water Bottle", c_id: "c5", b_id: "b15", image: "https://images.unsplash.com/photo-1574790398664-df062fe3db4d?auto=format&fit=crop&w=800&q=80" }
];


export default productsData;