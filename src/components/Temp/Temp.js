import per1 from '../../assets/1.jpg'
import per2 from '../../assets/2.jpg'
import per3 from '../../assets/3.jpg'
import per4 from '../../assets/4.jpg'
import per5 from '../../assets/5.jpg'
import per6 from '../../assets/6.jpg'
import per7 from '../../assets/7.jpg'
import per8 from '../../assets/8.jpg'
import per9 from '../../assets/9.jpg'
import per10 from '../../assets/10.jpg'

const products = [
  {
    id: 1,
    name: "Dior Sauvage",
    price: 120,
    category: "men",
    rating: 5,
    isNew: false,
    description: "A bold and fresh fragrance with bergamot and ambroxan notes for confident men.",
    image: per1  
  },{
    id: 2,
    name: "Bleu de Chanel",
    price: 130,
    category: "men",
    rating: 5,
    isNew: true,
    description: "A woody aromatic scent with citrus freshness and masculine depth.",
    image: per2
  },
  {
    id: 3,
    name: "Armani Code",
    price: 110,
    category: "men",
    rating: 4,
    isNew: false,
    description: "A warm blend of tonka bean and leather, perfect for evening wear.",
    image: per3
  },
  {
    id: 4,
    name: "Versace Eros",
    price: 115,
    category: "men",
    rating: 5,
    isNew: true,
    description: "Fresh mint and vanilla create a strong and youthful fragrance.",
    image: per4
  },
  {
    id: 5,
    name: "Hugo Boss Bottled",
    price: 100,
    category: "men",
    rating: 4,
    isNew: false,
    description: "An elegant scent with apple, cinnamon, and woody notes.",
    image: per5
  },
  {
    id: 6,
    name: "Paco Rabanne 1 Million",
    price: 115,
    category: "men",
    rating: 5,
    isNew: true,
    description: "A spicy and sweet fragrance with leather and amber tones.",
    image: per6
  },
  {
    id: 7,
    name: "Prada Luna Rossa",
    price: 112,
    category: "men",
    rating: 4,
    isNew: false,
    description: "A sporty scent with lavender and fresh citrus notes.",
    image: per7
  },
  {
    id: 8,
    name: "Azzaro Wanted",
    price: 105,
    category: "men",
    rating: 4,
    isNew: true,
    description: "A vibrant fragrance with lemon, ginger, and woody base.",
    image: per8
  },
  {
    id: 9,
    name: "Chanel No. 5",
    price: 140,
    category: "women",
    rating: 5,
    isNew: false,
    description: "A timeless floral fragrance with rose and jasmine.",
    image: per9
  },
  {
    id: 10,
    name: "Black Opium",
    price: 120,
    category: "women",
    rating: 5,
    isNew: true,
    description: "A warm and addictive scent with coffee and vanilla notes.",
    image: per10
  },
  {
    id: 11,
    name: "Gucci Bloom",
    price: 110,
    category: "women",
    rating: 4,
    isNew: false,
    description: "A rich white floral fragrance inspired by blooming gardens.",
    image: per1
  },
  {
    id: 12,
    name: "Marc Jacobs Daisy",
    price: 100,
    category: "women",
    rating: 4,
    isNew: true,
    description: "Light and fresh with strawberry and violet notes.",
    image: per1 
  },
  {
    id: 13,
    name: "Armani Si",
    price: 118,
    category: "women",
    rating: 5,
    isNew: false,
    description: "A modern feminine fragrance with blackcurrant and vanilla.",
    image: per1 
},
  {
    id: 14,
    name: "Versace Bright Crystal",
    price: 108,
    category: "women",
    rating: 4,
    isNew: true,
    description: "A delicate floral scent with peony and musk.",
    image: per1
  },
  {
    id: 15,
    name: "Burberry Her",
    price: 125,
    category: "women",
    rating: 5,
    isNew: false,
    description: "A fruity gourmand fragrance with berries and creamy base.",
    image: per1
  },
  {
    id: 16,
    name: "Valentino Donna",
    price: 130,
    category: "women",
    rating: 4,
    isNew: true,
    description: "A romantic scent with rose and soft leather notes.",
    image: per1 
 },
  {
    id: 17,
    name: "Tom Ford Oud Wood",
    price: 180,
    category: "unisex",
    rating: 5,
    isNew: false,
    description: "A luxurious oud fragrance blended with spices and vanilla.",
    image: per1},
  {
    id: 18,
    name: "Baccarat Rouge 540",
    price: 200,
    category: "unisex",
    rating: 5,
    isNew: true,
    description: "A sophisticated scent with amber and woody notes.",
    image: per1 },
  {
    id: 19,
    name: "CK One",
    price: 90,
    category: "unisex",
    rating: 4,
    isNew: false,
    description: "A refreshing citrus fragrance for everyday wear.",
    image: per1
  },
  {
    id: 20,
    name: "Jo Malone English Pear",
    price: 150,
    category: "unisex",
    rating: 4,
    isNew: true,
    description: "A fruity floral scent with pear and freesia notes.",
    image: per1 },
  {
    id: 21,
    name: "Le Labo Santal 33",
    price: 190,
    category: "unisex",
    rating: 5,
    isNew: false,
    description: "A woody spicy fragrance with sandalwood and cardamom.",
    image: per1 },
  {
    id: 22,
    name: "Maison Margiela Replica",
    price: 160,
    category: "unisex",
    rating: 4,
    isNew: true,
    description: "A nostalgic scent inspired by warm memories and comfort.",
    image: per1},
  {
    id: 23,
    name: "Byredo Gypsy Water",
    price: 175,
    category: "unisex",
    rating: 5,
    isNew: false,
    description: "A fresh woody scent with vanilla and sandalwood.",
    image: per1
  },
  {
    id: 24,
    name: "Issey Miyake L’Eau d’Issey",
    price: 110,
    category: "women",
    rating: 4,
    isNew: true,
    description: "A clean aquatic fragrance with lotus and rose notes.",
    image: per1
  },
  {
    id: 25,
    name: "Mont Blanc Explorer",
    price: 105,
    category: "men",
    rating: 4,
    isNew: false,
    description: "A woody aromatic scent with bergamot and patchouli.",
    image: per1 },
  {
    id: 26,
    name: "Dolce & Gabbana Light Blue",
    price: 115,
    category: "women",
    rating: 4,
    isNew: true,
    description: "A fresh Mediterranean scent with lemon and apple.",
    image: per1  },
  {
    id: 27,
    name: "Givenchy L'Interdit",
    price: 128,
    category: "women",
    rating: 5,
    isNew: false,
    description: "A bold floral fragrance with orange blossom and vanilla.",
    image: per1 },
  {
    id: 28,
    name: "YSL Y",
    price: 122,
    category: "men",
    rating: 4,
    isNew: true,
    description: "A modern masculine scent with sage and apple notes.",
    image: per1  
  },
  {
    id: 29,
    name: "Gucci Flora Gorgeous Gardenia",
    price: 135,
    category: "women",
    rating: 5,
    isNew: false,
    description: "A sweet floral fragrance with pear blossom and gardenia.",
    image: per1
  },
  {
    id: 30,
    name: "Narciso Rodriguez For Her",
    price: 132,
    category: "women",
    rating: 4,
    isNew: true,
    description: "A sensual musky fragrance with soft floral undertones.",
    image: per1
},
];
export default products