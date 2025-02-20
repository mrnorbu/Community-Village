import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

constructor() { }
private Products:any[]= [
  {
    name: "Traditional Wooden Bowls",
    description: "Handcrafted from locally sourced wood, perfect for an eco-friendly touch to your dining. Each piece tells a story of Sikkim's craftsmanship.",
    image: "assets/images/products/img-product-1.jpeg",
    price: 800,
    location: "North Sikkim",
    village: "Lachen",
    category: "Handicrafts",
    tags: ["Handmade", "Eco-friendly", "Kitchen", "Traditional"],
    artisan: "Local Wood Craftsmen Collective"
  },
  {
    name: "Traditional Woven Textiles",
    description: "Intricately woven textiles featuring traditional Sikkimese patterns and motifs, made using age-old techniques.",
    image: "assets/images/products/img-product-2.jpeg",
    price: 1500,
    location: "East Sikkim",
    village: "Gangtok",
    category: "Textiles",
    tags: ["Handwoven", "Traditional", "Fabric", "Cultural"],
    artisan: "Women's Weaving Cooperative"
  },
  {
    name: "Traditional Pickles",
    description: "Authentic Sikkimese pickles made with local ingredients and traditional recipes passed down through generations.",
    image: "assets/images/products/img-product-3.jpeg",
    price: 300,
    location: "South Sikkim",
    village: "Namchi",
    category: "Food Products",
    tags: ["Organic", "Homemade", "Culinary", "Preserves"],
    artisan: "Local Home Producers Group"
  },
  {
    name: "Premium Organic Temi Tea",
    description: "World-renowned organic tea from Sikkim's Temi Tea Garden, known for its distinct flavor and aroma.",
    image: "assets/images/products/img-product-5.jpeg",
    price: 500,
    location: "South Sikkim",
    village: "Temi",
    category: "Tea",
    tags: ["Organic", "Premium", "Beverage", "Certified"],
    artisan: "Temi Tea Estate"
  },
  {
    name: "Natural Herbal Soaps",
    description: "Natural, chemical-free soaps made with local herbs and traditional techniques for gentle skincare.",
    image: "assets/images/products/img-product-6.jpeg",
    price: 250,
    location: "West Sikkim",
    village: "Soreng",
    category: "Wellness",
    tags: ["Natural", "Handmade", "Skincare", "Herbal"],
    artisan: "Herbal Crafts Collective"
  },
  {
    name: "Organic Large Cardamom",
    description: "Premium quality large cardamom, grown organically in the hills of Sikkim, known for its intense aroma.",
    image: "assets/images/products/img-product-7.jpeg",
    price: 1200,
    location: "West Sikkim",
    village: "Rinchenpong",
    category: "Spices",
    tags: ["Organic", "Spices", "Premium", "Certified"],
    artisan: "Cardamom Farmers Association"
  },
  {
    name: "Traditional Prayer Flags",
    description: "Authentic Buddhist prayer flags made with traditional block printing and natural dyes.",
    image: "assets/images/products/img-product-8.jpeg",
    price: 400,
    location: "East Sikkim",
    village: "Rumtek",
    category: "Religious Items",
    tags: ["Spiritual", "Traditional", "Handmade", "Cultural"],
    artisan: "Monastery Crafts Group"
  }
];

getProductsData():any[]
{
  return this.Products;
}

 

}
