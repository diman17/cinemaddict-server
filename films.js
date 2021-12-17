const films = [
  {
    id: "1",
    title: "The Dance of Life",
    age: "18+",
    rating: "9.7",
    director: "Quentin Tarantino",
    writters: ["Silas Howard", "Layla Barnes", "Raphael Taylor"],
    actors: ["Gage Sanchez", "Jayla Watson", "Reyna Allen"],
    date: "10/09/1992",
    country: "USA",
    duration: "173",
    genre: "Thriller",
    srcPoster: "./images/posters/the-dance-of-life.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.",
    comments: [
      {
        id: "1",
        srcEmoji: "./images/emoji/smile.png",
        text: "Greate movie!!!",
        author: "Yash Hughes",
        day: `15/12/2021`,
      },
      {
        id: "2",
        srcEmoji: "./images/emoji/smile.png",
        text: "not bad",
        author: "Owen James",
        day: `12/12/2021`,
      },
    ],
    isWatchlist: false,
    isWatched: true,
    isFavorite: true,
  },
  {
    id: "2",
    title: "Popeye meets Sinbad",
    age: "16+",
    rating: "8.9",
    director: "Anthony Mann",
    writters: ["Seth Roberts", "Maverick Williams", "Zack James"],
    actors: ["Urina Gray", "Zayne Nelson", "Valencia Smith"],
    date: "23/01/1989",
    country: "USA",
    duration: "132",
    genre: "Drama",
    srcPoster: "./images/posters/popeye-meets-sinbad.png",
    description:
      "In rutrum ac purus sit amet tempus. Nunc fermentum tortor ac porta dapibus. Aliquam erat volutpat.",
    comments: [
      {
        id: "1",
        srcEmoji: "./images/emoji/sleeping.png",
        text: "Boring...",
        author: "Ezekiel Roberts",
        day: `10/11/2021`,
      },
    ],
    isWatchlist: true,
    isWatched: false,
    isFavorite: false,
  },
];

module.exports = films;
