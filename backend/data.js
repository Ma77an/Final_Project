import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Matan',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Omer',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Noa BenSa HaZona',
      slug: 'noa-bensa-hazona',
      category: 'Vegaina',
      image: '/images/p1.jpg',
      price: 2,
      countInStock: 10,
      brand: 'Sharmuta',
      rating: 10,
      numReviews: 10000000000,
      description: 'זונה מבית טוב',
    },
    {
      // _id: '2',
      name: 'MatanGa HaZayan',
      slug: 'matanga-hazayan',
      category: 'bulbul',
      image: '/images/p2.jpg',
      price: 20000000000,
      countInStock: 0,
      brand: 'Pimp',
      rating: 1.5,
      numReviews: 10000000000000,
      description: 'מלא בדיכאון וכל טוב',
    },
    {
      // _id: '3',
      name: 'Almogiii Sara Da Virgin',
      slug: 'almogii-sara',
      category: 'Vegaina',
      image: '/images/p3.jpg',
      price: 20000,
      countInStock: 2,
      brand: 'Virgins',
      rating: 10,
      numReviews: 1000,
      description: 'מחפשת בותל להיום בערב דחוף!!!!!!!',
    },
    {
      // _id: '4',
      name: 'Shanin Yamin Lo Smol',
      slug: 'shani-lo-smol',
      category: 'Vegaina',
      image: '/images/p4.jpg',
      price: 9,
      countInStock: 0,
      brand: 'Sharmuta',
      rating: 8,
      numReviews: 100,
      description: 'רק ימין גם במין',
    },
  ],
};

export default data;
