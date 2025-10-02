const allCars = [
    {
        id: "1",
        name: "BMW 3 Series",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop&q=60",
        price: 89,
        rating: 4.8,
        passengers: 5,
        transmission: "Automatic",
        fuel: "Gasoline",
        category: "Luxury Sedan",
        description: "Experience luxury and performance with the BMW 3 Series. This premium sedan offers exceptional comfort, cutting-edge technology, and superior driving dynamics.",
        features: ["Premium Sound System", "Leather Seats", "Navigation System", "Bluetooth", "Air Conditioning", "Backup Camera"],
        specs: {
            engine: "2.0L Turbocharged",
            horsepower: "255 HP",
            topSpeed: "155 mph",
            acceleration: "5.8 seconds 0-60 mph"
        }
    },
    {
        id: "2", 
        name: "Mercedes C-Class",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60",
        price: 95,
        rating: 4.9,
        passengers: 5,
        transmission: "Automatic", 
        fuel: "Gasoline",
        category: "Luxury Sedan",
        description: "The Mercedes C-Class combines elegance with advanced technology. Enjoy a smooth, comfortable ride with premium amenities and exceptional build quality.",
        features: ["Premium Sound System", "Leather Seats", "Navigation System", "Bluetooth", "Air Conditioning", "Sunroof"],
        specs: {
            engine: "2.0L Turbocharged", 
            horsepower: "241 HP",
            topSpeed: "149 mph",
            acceleration: "6.0 seconds 0-60 mph"
        }
    },
    {
        id: "3",
        name: "Audi A4",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&auto=format&fit=crop&q=60",
        price: 85,
        rating: 4.7,
        passengers: 5,
        transmission: "Automatic",
        fuel: "Gasoline", 
        category: "Luxury Sedan",
        description: "The Audi A4 offers sophisticated design and advanced quattro all-wheel drive technology. Perfect for those who value precision and luxury.",
        features: ["Quattro AWD", "Premium Sound System", "Leather Seats", "Navigation System", "Bluetooth", "Air Conditioning"],
        specs: {
            engine: "2.0L TFSI Turbocharged",
            horsepower: "248 HP", 
            topSpeed: "155 mph",
            acceleration: "5.7 seconds 0-60 mph"
        }
    },
    {
        id: "4",
        name: "Tesla Model S",
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&auto=format&fit=crop&q=60",
        price: 120,
        rating: 4.9,
        passengers: 5,
        transmission: "Automatic",
        fuel: "Electric",
        category: "Electric Luxury",
        description: "Experience the future of driving with the Tesla Model S. Revolutionary electric performance, cutting-edge autonomous features, and unmatched efficiency.",
        features: ["Autopilot", "Premium Sound System", "Heated Seats", "Navigation System", "Supercharging", "Air Conditioning"],
        specs: {
            engine: "Dual Motor Electric",
            horsepower: "670 HP",
            topSpeed: "155 mph",
            acceleration: "3.1 seconds 0-60 mph"
        }
    },
    {
        id: "5",
        name: "Range Rover Sport", 
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&auto=format&fit=crop&q=60",
        price: 150,
        rating: 4.8,
        passengers: 7,
        transmission: "Automatic",
        fuel: "Gasoline",
        category: "Luxury SUV",
        description: "The Range Rover Sport delivers uncompromising luxury with exceptional off-road capability. Premium materials, advanced technology, and commanding presence.",
        features: ["All-Terrain Response", "Premium Sound System", "Leather Seats", "Navigation System", "Bluetooth", "Panoramic Sunroof"],
        specs: {
            engine: "3.0L Supercharged V6",
            horsepower: "340 HP",
            topSpeed: "140 mph",
            acceleration: "6.9 seconds 0-60 mph"
        }
    },
    {
        id: "6",
        name: "Porsche 911",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=60", 
        price: 200,
        rating: 4.9,
        passengers: 2,
        transmission: "Manual",
        fuel: "Gasoline",
        category: "Sports Car",
        description: "The iconic Porsche 911 represents the pinnacle of sports car engineering. Pure driving pleasure with legendary performance and timeless design.",
        features: ["Sport Chrono Package", "Premium Sound System", "Sport Seats", "Navigation System", "Bluetooth", "Sport Exhaust"],
        specs: {
            engine: "3.0L Twin-Turbo Flat-6",
            horsepower: "379 HP",
            topSpeed: "182 mph",
            acceleration: "4.0 seconds 0-60 mph"
        }
    }
];

// Get featured cars (first 3)
function getFeaturedCars() {
    return allCars.slice(0, 3);
}

// Get all cars
function getAllCars() {
    return allCars;
}

// Get car by ID
function getCarById(id) {
    return allCars.find(car => car.id === id);
}

// Filter cars based on search criteria
function filterCars(searchTerm = "", categoryFilter = "all", priceFilter = "all") {
    return allCars.filter(car => {
        const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === "all" || car.category === categoryFilter;
        const matchesPrice = priceFilter === "all" || 
            (priceFilter === "budget" && car.price < 100) ||
            (priceFilter === "premium" && car.price >= 100 && car.price < 150) ||
            (priceFilter === "luxury" && car.price >= 150);
        
        return matchesSearch && matchesCategory && matchesPrice;
    });
}

// Create car card HTML
function createCarCard(car, showBookButton = true) {
    const bookButton = showBookButton 
        ? `<a href="/car-details.html?id=${car.id}" class="btn btn-primary">Book Now</a>`
        : '';
        
    return `
        <div class="car-card">
            <div class="car-image-container">
                <img src="${car.image}" alt="${car.name}" class="car-image">
            </div>
            <div class="car-content">
                <div class="car-header">
                    <div class="car-info">
                        <h3>${car.name}</h3>
                        <p class="car-category">${car.category}</p>
                    </div>
                    <div class="car-rating">
                        <svg class="star-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span class="rating-value">${car.rating}</span>
                    </div>
                </div>
                
                <div class="car-specs">
                    <div class="car-spec">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                        <span>${car.passengers}</span>
                    </div>
                    <div class="car-spec">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="3"/>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                        </svg>
                        <span>${car.transmission}</span>
                    </div>
                    <div class="car-spec">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 16.5v2A2.5 2.5 0 0 0 5.5 21h13a2.5 2.5 0 0 0 2.5-2.5v-2"/>
                            <path d="M8 21V10a4 4 0 0 1 8 0v11"/>
                            <path d="M12 3v1"/>
                            <path d="M12 6v1"/>
                        </svg>
                        <span>${car.fuel}</span>
                    </div>
                </div>
                
                <div class="car-footer">
                    <div class="car-price">
                        <span class="price-amount">$${car.price}</span>
                        <span class="price-period">/day</span>
                    </div>
                    ${bookButton}
                </div>
            </div>
        </div>
    `;
}