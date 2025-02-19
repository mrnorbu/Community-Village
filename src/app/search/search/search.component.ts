import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavBarComponent } from '../../home/nav-bar/nav-bar.component';
import { GlobalEnums } from '../../globalEnums.enum';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports:[CommonModule,NgxPaginationModule,NavBarComponent]
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  page: number = 1;
  GlobalEnums =GlobalEnums;
activeTab:GlobalEnums=GlobalEnums.village;
today= new Date();

    /*Dynamic color to regions*/
 colorClasses = [
  { bg: 'bg-blue-500/10', text: 'text-blue-500', hover: 'hover:bg-blue-500' },
  { bg: 'bg-red-500/10', text: 'text-red-500', hover: 'hover:bg-red-500' },
  { bg: 'bg-green-500/10', text: 'text-green-500', hover: 'hover:bg-green-500' },
  { bg: 'bg-purple-500/10', text: 'text-purple-500', hover: 'hover:bg-purple-500' }
  ];

  Villages= [
    {
      name: "Lachen",
      region:  "North Sikkim",
      description: "A picturesque Himalayan village, Lachen is the gateway to Gurudongmar Lake. Experience the traditional lifestyle and breathtaking mountain views.",
      image: "assets/images/villages/lachen.jpg",
      altitude: "2,750m",
      category: "Cultural & Scenic"
    },
    {
      name: "Lachung",
      region:  "North Sikkim",
      description: "Known for its stunning landscapes, apple orchards, and the famous Yumthang Valley. Experience traditional Sikkimese architecture and warm hospitality.",
      image: "assets/images/villages/lachung.jpg",
      altitude: "2,600m",
      category: "Cultural & Nature"
    },

    {
      name: "Hee-Bermoik",
      region: "West Sikkim", 
      description: "A serene village known for its traditional farming practices and stunning views of Kanchenjunga. Experience authentic rural Sikkimese lifestyle.",
      image: "assets/images/villages/hee-bermoik.jpg",
      altitude: "1,800m",
      category: "Agriculture & Scenic"
    },

    {
      name: "Kewzing",
      region: "South Sikkim",
      description: "A peaceful village known for its monastery and traditional carpet weaving. Perfect for experiencing local culture and meditation.",
      image: "assets/images/villages/kewzing.jpg",
      altitude: "1,900m",
      category: "Spiritual & Craft"
    },
    {
     
      name: "Lingee",
      region:"South Sikkim",
      description: "Known for its traditional farming practices and cardamom plantations. Experience authentic rural Sikkimese lifestyle.",
      image: "assets/images/villages/lingee.jpg",
      altitude: "1,500m",
      category: "Agriculture & Culture"
    },
    {
      name: "Martam",
      region:"East Sikkim",
      description: "Known for its organic farming practices and traditional handicrafts. Experience the authentic rural lifestyle and learn about sustainable agriculture.",
      image: "assets/images/villages/martam.jpg",
      altitude: "1,450m",
      category: "Agriculture & Crafts"
    },
    {
      name: "Namchi",
      region: "South Sikkim",
      description: "Known for its religious sites and flower festivals. Home to the world's largest statue of Guru Padmasambhava.",
      image: "assets/images/villages/namchi.jpg",
      altitude: "1,675m",
      category: "Religious & Cultural"
    },
    {
      name: "Pelling",
      region:"West Sikkim",
      description: "Offers the best views of Kanchenjunga. Famous for Pemayangtse Monastery and ancient ruins of Rabdentse Palace.",
      image: "assets/images/villages/pelling.jpg",
      altitude: "2,150m",
      category: "Heritage & Scenic"
    },
    {
      name: "Rinchenpong",
      region: "West Sikkim",
      description: "Famous for its ancient monastery and stunning views of Kanchenjunga. Known for organic farming and traditional handicrafts.",
      image: "assets/images/villages/rinchenpong.jpg",
      altitude: "1,700m",
      category: "Culture & Agriculture"
    },
    {
      name: "Yuksom",
      region: "West Sikkim",
      description: "The first capital of Sikkim, rich in history and culture. Starting point for many popular treks in the Kanchenjunga region.",
      image: "assets/images/villages/yuksom.jpg",
      altitude: "1,780m",
      category: "Heritage & Trekking"
    }
  ];


  Homestays = [
    {
      name: "Lachung Valley Homestay",
      description: "Experience authentic Sikkimese hospitality in this traditional family home with modern amenities, offering stunning views of the Lachung Valley.",
      image: "assets/images/homestays/homestay1.jpg",
      location: "North Sikkim",
      price: 2500,
      amenities: ["Mountain View", "Traditional Kitchen", "Garden", "Hot Water"]
    },
    {
      name: "Yuksom Heritage House",
      description: "Stay in a charming heritage house in Yuksom, the first capital of Sikkim. Perfect base for trekking and cultural exploration.",
      image: "assets/images/homestays/homestay2.jpg",
      location: "West Sikkim",
      price: 2000,
      amenities: ["Heritage Building", "Garden View", "Trekking Base", "WiFi"]
    },
    {
      name: "Rinchenpong Eco Stay",
      description: "Eco-friendly homestay with organic farm, offering panoramic views of the Kanchenjunga range and traditional Sikkimese cuisine.",
      image: "assets/images/homestays/homestay3.jpg",
      location: "West Sikkim",
      price: 1800,
      amenities: ["Organic Farm", "Mountain View", "Local Cuisine", "Peaceful"]
    },
    {
      name: "Martam Village Retreat",
      description: "Experience rural Sikkimese life in this cozy homestay surrounded by cardamom fields and mountain views.",
      image: "assets/images/homestays/homestay4.jpg",
      location: "East Sikkim",
      price: 2200,
      amenities: ["Cardamom Fields", "Local Guide", "Home Cooking", "Terrace"]
    },
    {
      name: "Namchi Cultural Home",
      description: "Located near famous monasteries, this homestay offers cultural experiences and comfortable accommodation with modern amenities.",
      image: "assets/images/homestays/homestay5.jpg",
      location: "South Sikkim",
      price: 2300,
      amenities: ["Cultural Tours", "Modern Amenities", "Temple View", "Parking"]
    },
    {
      name: "Pelling Mountain View Lodge",
      description: "Spectacular views of the Kanchenjunga range from every room, featuring traditional architecture with modern comforts.",
      image: "assets/images/homestays/homestay6.jpg",
      location: "West Sikkim",
      price: 2800,
      amenities: ["Mountain View", "Sunrise View", "Traditional Decor", "Balcony"]
    },
    {
      name: "Ravangla Tea Garden Stay",
      description: "Nestled among tea gardens, this peaceful homestay offers a unique experience with organic tea tasting and garden tours.",
      image: "assets/images/homestays/homestay7.jpg",
      location: "South Sikkim",
      price: 2100,
      amenities: ["Tea Garden", "Organic Food", "Garden Tours", "Meditation Space"]
    },
    {
      name: "Gangtok Heritage Cottage",
      description: "A beautifully restored heritage cottage in the heart of Gangtok, combining traditional charm with urban convenience.",
      image: "assets/images/homestays/homestay8.jpg",
      location: "East Sikkim",
      price: 3000,
      amenities: ["City View", "Heritage Architecture", "Modern Kitchen", "Library"]
    },
    {
      name: "Dzongu Riverside Retreat",
      description: "Authentic Lepcha homestay by the river, offering unique cultural experiences and traditional Lepcha cuisine.",
      image: "assets/images/homestays/homestay9.jpg",
      location: "North Sikkim",
      price: 1900,
      amenities: ["River View", "Cultural Experience", "Traditional Food", "Nature Walks"]
    },
    {
      name: "Lingee Valley House",
      description: "Remote and peaceful homestay offering authentic rural Sikkimese lifestyle with stunning valley views.",
      image: "assets/images/homestays/homestay10.jpg",
      location: "South Sikkim",
      price: 1700,
      amenities: ["Valley View", "Farm Activities", "Local Cuisine", "Hiking Trails"]
    },
    {
      name: "Kewzing Buddhist Lodge",
      description: "Located near ancient monasteries, this peaceful homestay offers spiritual ambiance and traditional Buddhist hospitality.",
      image: "assets/images/homestays/homestay12.jpg",
      location: "South Sikkim",
      price: 2400,
      amenities: ["Monastery View", "Meditation Hall", "Prayer Wheels", "Peaceful Garden"]
    },
    {
      name: "Zuluk Mountain Home",
      description: "High-altitude homestay on the historic Silk Route, offering breathtaking views and adventure opportunities.",
      image: "assets/images/homestays/homestay1.jpg",
      location: "East Sikkim",
      price: 2600,
      amenities: ["High Altitude", "Silk Route View", "Adventure Base", "Warm Bedding"]
    }
  ];
  
  Activities = [
      {
        name: "Bird Watching Tour",
        description: "Explore Sikkim's rich avian diversity with expert guides. Spot rare Himalayan species in their natural habitat.",
        image: "assets/images/activities/birdwatching.jpg",
        price: 1500,
        location: "North Sikkim",
        village: "Lachen",
        includes: ["Expert Guide", "Equipment", "Refreshments", "Transport"],
        tags: ["Nature", "Wildlife", "Photography"]
      },
      {
        name: "Cardamom Plantation Visit",
        description: "Visit organic cardamom plantations and learn about traditional farming methods and spice processing.",
        image: "assets/images/activities/cardamom.jpg",
        price: 800,
        location: "South Sikkim",
        village: "Ravangla",
        includes: ["Farm Tour", "Spice Tasting", "Local Guide", "Traditional Snacks"],
        tags: ["Agriculture", "Cultural", "Educational"]
      },
      {
        name: "Cultural Dance Workshop",
        description: "Learn traditional Sikkimese dances from local performers and understand the cultural significance.",
        image: "assets/images/activities/culturaldance.jpg",
        price: 1200,
        location: "East Sikkim",
        village: "Gangtok",
        includes: ["Dance Instruction", "Traditional Costume", "Photo Session", "Refreshments"],
        tags: ["Culture", "Dance", "Traditional"]
      },
      {
        name: "Flower Show Visit",
        description: "Experience the vibrant display of Sikkim's native flowers, including rare orchids and rhododendrons.",
        image: "assets/images/activities/flowershow.jpg",
        price: 500,
        location: "East Sikkim",
        village: "Gangtok",
        includes: ["Guided Tour", "Photography Session", "Information Booklet"],
        tags: ["Nature", "Photography", "Educational"]
      },
      {
        name: "Monastery Tour",
        description: "Visit ancient Buddhist monasteries and learn about Sikkim's spiritual heritage and monastic life.",
        image: "assets/images/activities/monastery.jpg",
        price: 1000,
        location: "West Sikkim",
        village: "Pelling",
        includes: ["Buddhist Guide", "Prayer Flag Workshop", "Traditional Tea"],
        tags: ["Spiritual", "Cultural", "Historical"]
      },
      {
        name: "Mountain Biking Adventure",
        description: "Explore scenic mountain trails on two wheels with experienced guides and quality equipment.",
        image: "assets/images/activities/mountainbiking.jpg",
        price: 2500,
        location: "West Sikkim",
        village: "Yuksom",
        includes: ["Bike Rental", "Safety Gear", "Guide", "Energy Snacks"],
        tags: ["Adventure", "Sports", "Nature"]
      },
      {
        name: "Tea Garden Experience",
        description: "Visit famous tea estates, learn about tea processing, and enjoy tea tasting sessions.",
        image: "assets/images/activities/teagarden.jpg",
        price: 1200,
        location: "South Sikkim",
        village: "Temi",
        includes: ["Garden Tour", "Tea Tasting", "Processing Demo", "Tea Package"],
        tags: ["Agriculture", "Educational", "Culinary"]
      },
      {
        name: "Traditional Craft Workshop",
        description: "Learn traditional Sikkimese crafts like thangka painting or carpet weaving from local artisans.",
        image: "assets/images/activities/traditional.jpg",
        price: 1500,
        location: "East Sikkim",
        village: "Rumtek",
        includes: ["Materials", "Expert Training", "Take-Home Creation", "Certificate"],
        tags: ["Culture", "Crafts", "Educational"]
      },
      {
        name: "Traditional Weaving Class",
        description: "Learn the art of traditional Sikkimese weaving using local techniques and patterns.",
        image: "assets/images/activities/traditionalweaving.jpg",
        price: 1800,
        location: "South Sikkim",
        village: "Namchi",
        includes: ["Weaving Materials", "Expert Instruction", "Traditional Attire", "Souvenir"],
        tags: ["Culture", "Crafts", "Traditional"]
      },
      {
        name: "Trekking Experience",
        description: "Guided treks through scenic mountain trails with stunning views of the Himalayas.",
        image: "assets/images/activities/trekking.jpg",
        price: 3000,
        location: "North Sikkim",
        village: "Lachung",
        includes: ["Guide", "Basic Gear", "Meals", "First Aid"],
        tags: ["Adventure", "Nature", "Trekking"]
      },
      {
        name: "Yak Herding Experience",
        description: "Spend time with local yak herders and learn about traditional high-altitude farming.",
        image: "assets/images/activities/yakherding.jpg",
        price: 2000,
        location: "North Sikkim",
        village: "Lachen",
        includes: ["Herding Experience", "Traditional Meals", "Wool Crafting", "Photo Session"],
        tags: ["Culture", "Agriculture", "Traditional"]
      }
  ];
  
   Products= [
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
  
    Events= [
        {
          name: "Sikkim International Cherry Blossom Festival",
          description: "Annual festival celebrating the blooming of cherry blossoms with cultural performances, local food, and art exhibitions.",
          date: "2025-03-01",
          duration: "3 days",
          location: "East Sikkim",
          venue: "Gangtok",
          category: "Cultural Festival",
          price: "Free Entry",
          highlights: [
            "Cherry Blossom Photography",
            "Cultural Performances",
            "Local Food Stalls",
            "Art Exhibition"
          ],
          organizer: "Tourism Department of Sikkim"
        },
        {
          name: "Namchi Mahotsav",
          description: "Traditional festival showcasing Sikkimese culture through dance, music, and local handicrafts.",
          date: "2024-03-05",
          duration: "4 days",
          location: "South Sikkim",
          venue: "Namchi",
          category: "Cultural Festival",
          price: "Free Entry",
          highlights: [
            "Traditional Dance Shows",
            "Handicraft Exhibition",
            "Folk Music Performances",
            "Local Cuisine"
          ],
          organizer: "Namchi District Administration"
        },
        {
          name: "Sikkim Tea Festival",
          description: "Celebration of Sikkim's tea culture featuring tea tasting, plantation tours, and workshops.",
          date: "2024-03-10",
          duration: "2 days",
          location: "South Sikkim",
          venue: "Temi Tea Garden",
          category: "Cultural Event",
          price: 500,
          highlights: [
            "Tea Tasting Sessions",
            "Plantation Tours",
            "Tea Making Workshops",
            "Local Snacks Pairing"
          ],
          organizer: "Temi Tea Estate"
        },
        {
          name: "Sikkim Mountain Biking Festival",
          description: "Adventure sports event featuring mountain biking competitions and trails exploration.",
          date: "2024-03-15",
          duration: "3 days",
          location: "West Sikkim",
          venue: "Pelling",
          category: "Sports",
          price: 1500,
          highlights: [
            "Mountain Biking Competition",
            "Trail Exploration",
            "Equipment Exhibition",
            "Adventure Workshops"
          ],
          organizer: "Sikkim Adventure Sports Association"
        },
        {
          name: "Sikkim Organic Festival",
          description: "Showcase of Sikkim's organic farming practices, products, and sustainable agriculture.",
          date: "2024-03-18",
          duration: "4 days",
          location: "East Sikkim",
          venue: "MG Marg, Gangtok",
          category: "Agriculture",
          price: "Free Entry",
          highlights: [
            "Organic Product Display",
            "Farming Workshops",
            "Cooking Demonstrations",
            "Seed Exchange"
          ],
          organizer: "Sikkim Organic Mission"
        }
      ];
    
  

getDynamicClass(input: number): string {
  // Calculate the index based on the input value
  const index = (input - 1) % this.colorClasses.length;
  const { bg, text, hover } = this.colorClasses[index]; // Destructure the selected color class

  return `${bg} ${text} ${hover}`; // Return the combined class string
}

   
    setActiveTabs(selectedTab:GlobalEnums)
    {
      this.activeTab=selectedTab;
      this.page=1;
    }

    getDaysLeft(eventDate: string): string {
      const event = new Date(eventDate);
      const today = new Date(); // Use a fresh instance to avoid stale values
      const diffTime = event.getTime() - today.getTime();
      const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    
      return daysLeft <= 0 ? 'Ended' : `${daysLeft} days left`;
    }    


}
