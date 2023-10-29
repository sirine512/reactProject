export const data= [
    {
      id: 0,
      destination: 'Europe',
      img: 'https://media.nomadicmatt.com/europeguide.jpg',
      img1:'https://preview.redd.it/ete1ukcbbb361.jpg?auto=webp&s=9d3482e07ceba4cc17716296770dfd6e910d3b19',
      img2:'https://thefoodellers.com/wp-content/uploads/2022/01/Best-Romantic-Places-to-Visit-in-Europe.png',
      img3:'https://static.toiimg.com/photo/95013927/95013927.jpg?v=3',

      desc: 'Explore the diverse cultures and histories of Europe!',
    },
    {
      id: 1,
      destination: 'Asia',
      img: 'https://images.unsplash.com/photo-1584891769204-f355b6ed7aec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80',
      img1:'https://thedestinationexperience.com/wp-content/uploads/2023/01/pexels-stijn-dijkstra-2499699-scaled.jpg',
      img2:'https://thefoodellers.com/wp-content/uploads/2022/01/Best-Romantic-Places-to-Visit-in-Europe.png',
      img3:'https://static.toiimg.com/photo/95013927/95013927.jpg?v=3',
      desc: 'Experience the vibrant cultures and breathtaking landscapes of Asia!',
      },
      {
        id: 2,
        destination: 'Africa',
        img: 'https://www.giannipittella.com/wp-content/uploads/2020/08/Africa.jpg',
        img1:'https://i.pinimg.com/736x/77/8a/aa/778aaa76cf22433bf777a64310c68afc--masai-tanzania.jpg',
        img2:'https://thefoodellers.com/wp-content/uploads/2022/01/Best-Romantic-Places-to-Visit-in-Europe.png',
        img3:'https://static.toiimg.com/photo/95013927/95013927.jpg?v=3',
        desc: 'Go on a safari and see the wildlife of Africa.',
  },
  {
    id: 3,
    destination: 'Australia',
    img: 'https://www.puredestinations.co.uk/wp-content/uploads/2019/05/top-10-places-in-australia-luxury-australia-holiday-packages-header--1600x500.jpg',
    img1:'https://images.unsplash.com/photo-1583826688115-ff62f2c88f02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
      img2:'https://thefoodellers.com/wp-content/uploads/2022/01/Best-Romantic-Places-to-Visit-in-Europe.png',
      img3:'https://static.toiimg.com/photo/95013927/95013927.jpg?v=3',
    desc: 'Experience the natural beauty of Australia.',
  },
];

export const tours=[
    
    {
        id: 0,
        name: 'Paris',
        image: 'https://images.unsplash.com/photo-1564594736624-def7a10ab047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
        description: 'Discover the romance and culture of the City of Lights!',
        destinationId:0,
        photo:'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      
      },
      {
        id: 1,
        name: 'Rome',
        image: 'https://i.pinimg.com/736x/42/16/24/42162414a7983208c45a684fc947e505.jpg',
        description: 'Experience the ancient history and delicious cuisine of Rome!',
        destinationId:0,
        photo:'https://images.unsplash.com/photo-1596627116790-af6f46dddbda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        
      },
//Asia
      {
        id: 2,
        name: 'Tokyo',
        image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        description: 'Discover the futuristic cityscape and rich traditions of Tokyo!',
        destinationId:1,
        photo:'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80',
       
        },
        {
          id: 3,
          name: 'Bali',
          image: 'https://miro.medium.com/max/1400/0*huY1N0g9a5gMekEW',
          description: 'Relax on beautiful beaches and explore ancient temples in Bali!',
        destinationId:1,
        photo:'https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    
        },

//Africa
{
    id: 4,
    name: 'Cape Town',
    image: 'https://images.unsplash.com/photo-1576485375217-d6a95e34d043?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FwZSUyMHRvd258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    description: 'Experience the natural beauty and culture of Cape Town with our guided tours!',
    destinationId:2,
    photo:'https://images.unsplash.com/photo-1496497243327-9dccd845c35f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  
},
{
  id: 5,
  name: 'Marrakech',
  image: 'https://images.unsplash.com/photo-1548018560-cd92fb00373f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  description: 'Experience the vibrant culture and cuisine of Marrakech with our guided tours!',
  destinationId:2,
  photo:'https://images.unsplash.com/photo-1510952267577-fc96d5ca660a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
},
//Australia
{
    id: 6,
    name: 'Sydney',
    image: 'https://images.unsplash.com/photo-1549180030-48bf079fb38a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN5ZG5leSUyMGF1c3RyYWxpYXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
    description: 'Experience the beauty and excitement of Sydney with our guided tours!',
    destinationId:3,
    photo:'https://images.unsplash.com/photo-1547006933-a4ab8704ef6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',

  },
  {
    id: 7,
    name: 'Great Barrier Reef',
    image: 'https://m.fourseasons.com/alt/img-opt/~70..582,6585-0,0000-1834,6829-2786,0000/publish/content/dam/fourseasons/images/web/JTT/JTT_280_original.jpg',
    description: 'Experience the natural wonder of the Great Barrier Reef with our guided tours!',
    destinationId:3,
    photo:'https://ladyelliot.com.au/wp-content/uploads/2019/09/Gallery-5-1.jpg',
   
  },

    ];

export const plans= [
  {
    id: 0,
    name: 'Eiffel Tower Tour',
    price: 60,
    img: 'https://source.unsplash.com/800x600/?eiffeltower',
    desc: 'Visit the iconic Eiffel Tower and enjoy panoramic views of the city.',
    tourId: 0,
  },
  {
    id: 1,
    name: 'Seine River Cruise',
    price: 30,
    img: 'https://source.unsplash.com/800x600/?seineriver',
    desc: 'Take a relaxing cruise down the Seine River and see Paris from a different perspective.',
    tourId: 0,
  },
  {
    id: 2,
    name: 'Louvre Museum Tickets',
    price: 40,
    img: 'https://source.unsplash.com/800x600/?louvremuseum',
    desc: 'Explore one of the world\'s greatest art museums with tickets to the Louvre.',
    tourId: 0,
  },
  {
    id: 0,
    name: 'Colosseum Tour',
    price: 50,
    img: 'https://source.unsplash.com/800x600/?colosseum',
    desc: 'Visit the iconic Colosseum and learn about the gladiators who fought there.',
    tourId: 1,
  },
  {
    id: 1,
    name: 'Vatican Museum Tickets',
    price: 35,
    img: 'https://source.unsplash.com/800x600/?vaticanmuseum',
    desc: 'Explore the world-renowned Vatican Museum and see priceless works of art.',
    tourId: 1,
  },
  {
    id: 2,
    name: 'Pizza-Making Class',
    price: 70,
    img: 'https://source.unsplash.com/800x600/?pizza',
    desc: 'Learn how to make delicious pizza like a local with this fun cooking class.',
    tourId: 1,
  },
  {
    id: 0,
    name: 'Mount Fuji Tour',
    price: 80,
    img: 'https://source.unsplash.com/800x600/?mountfuji',
    desc: 'Visit Japan\'s most famous landmark and enjoy stunning views from the top.',
    tourId: 2,
  },
  {
      id: 1,
      name: 'Sushi-Making Class',
      price: 50,
      img: 'https://source.unsplash.com/800x600/?sushi',
      desc: 'Learn how to make sushi from a master sushi chef in this hands-on class.',
      tourId: 2,
    },
  {
      id: 2,
      name: 'Shibuya Crossing Tour',
      price: 25,
      img: 'https://source.unsplash.com/800x600/?shibuyacrossing',
      desc: 'Experience the excitement of Tokyo\'s busiest intersection with a guided tour.',
      tourId: 2,
    },
    {
      id: 0,
      name: 'Ubud Monkey Forest Tour',
      price: 30,
      img: 'https://source.unsplash.com/800x600/?monkeyforest',
      desc: 'Get up close and personal with adorable monkeys in Bali\'s famous monkey forest.',
      tourId: 3,
    },
    {
      id: 1,
      name: 'Beach Day Trip',
      price: 40,
      img: 'https://source.unsplash.com/800x600/?balibeach',
      desc: 'Soak up the sun on one of Bali\'s many beautiful beaches with this day trip.',
      tourId: 3,
    },
    {
      id: 2,
      name: 'Tanah Lot Temple Tour',
      price: 50,
      img: 'https://source.unsplash.com/800x600/?tanahlottemple',
      desc: 'Visit the stunning Tanah Lot Temple and learn about Bali\'s rich spiritual traditions.',
      tourId: 3,
    },
    {
      id: 0,
      name: 'Table Mountain Hike',
      price: 50,
      img: 'https://source.unsplash.com/800x600/?tablemountain',
      desc: 'Hike up Table Mountain for a breathtaking view of Cape Town and its surroundings.',
      tourId: 4,
    },
    {
      id: 1,
      name: 'Cape Winelands Tour',
      price: 70,
      img: 'https://source.unsplash.com/800x600/?capewinelands',
      desc: 'Visit the famous wineries of the Cape Winelands and taste some of the best South African wines.',
      tourId: 4,
    },
    {
      id: 2,
      name: 'Township Tour',
      price: 40,
      img: 'https://source.unsplash.com/800x600/?capetowntownship',
      desc: 'Learn about the history and culture of Cape Town’s townships with our local guides.',
      tourId: 4,
    },
    {
      id: 0,
      name: 'Jemaa el-Fnaa Market Tour',
      price: 25,
      img: 'https://source.unsplash.com/800x600/?jemaaelfnaamarket',
      desc: 'Explore the famous Jemaa el-Fnaa market and try some delicious Moroccan food!',
      tourId: 5,
    },
    {
      id: 1,
      name: 'Bahia Palace Tour',
      price: 30,
      img: 'https://source.unsplash.com/800x600/?bahiapalace',
      desc: 'Visit the beautiful Bahia Palace and marvel at its stunning architecture and gardens.',
      tourId: 5,
    },
    {
      id: 2,
      name: 'Atlas Mountains Trek',
      price: 80,
      img: 'https://source.unsplash.com/800x600/?atlasmountains',
      desc: 'Trek through the stunning Atlas Mountains and experience the natural beauty of Morocco.',
      tourId: 5,
    },
    {
      id: 0,
      name: 'Harbour Bridge Climb',
      price: 120,
      img: 'https://source.unsplash.com/800x600/?harbourbridgeclimb',
      desc: 'Climb the iconic Sydney Harbour Bridge for an unforgettable view of the city and its surroundings.',
      tourId: 6,
    },
    {
      id: 1,
      name: 'Bondi Beach Surfing Lesson',
      price: 70,
      img: 'https://source.unsplash.com/800x600/?bondibeachsurfing',
      desc: 'Learn how to surf at the famous Bondi Beach with our experienced instructors.',
      tourId: 6,
    },
    {
      id: 2,
      name: 'Sydney Opera House Tour',
      price: 50,
      img: 'https://source.unsplash.com/800x600/?sydneyoperahouse',
      desc: 'Visit the iconic Sydney Opera House and learn about its history and architecture.',
      tourId: 6,
    },
    {
      id: 0,
      name: 'Snorkeling Tour',
      price: 80,
      img: 'https://source.unsplash.com/800x600/?greatbarrierreefsnorkeling',
      desc: 'Explore the stunning underwater world of the Great Barrier Reef with our expert guides.',
      tourId: 7,
    },
    {
      id: 1,
      name: 'Scuba Diving Tour',
      price: 120,
      img: 'https://source.unsplash.com/800x600/?greatbarrierreefscubadiving',
      desc: 'Experience the thrill of scuba diving and discover the hidden gems of the Great Barrier Reef.',
      tourId: 7,
    },
    {
      id: 2,
      name: 'Helicopter Tour',
      price: 300,
      img: 'https://source.unsplash.com/800x600/?greatbarrierreefhelicoptertour',
      desc: 'Get a bird’s eye view of the Great Barrier Reef with our scenic helicopter tour.',
      tourId: 7,
    },

];
export default data

    
    
  