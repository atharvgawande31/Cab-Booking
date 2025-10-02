// --- Global Car Data Array ---
// This array contains 25 detailed entries for consistency across all pages (list, detail, booking).
const GLOBAL_CAR_DATA = [
    // 1. Maruti Suzuki Ertiga (7-Seater MUV)
    {
        id: 1,
        name: "Maruti Suzuki Ertiga",
        category: "7-Seater MUV",
        price: 2500,
        originalPrice: 2800,
        rating: 4.7,
        reviews: 580,
        specs: {
            passengers: 7, luggage: 2, fuel: "CNG/Petrol", transmission: "Manual",
            engine: "1.5L K15C Smart Hybrid", fuelEconomy: "20.5 kmpl", year: 2022, color: "Auburn Red"
        },
        features: ["Manual Climate Control", "Rear AC Vents", "Bluetooth Connectivity", "Dual Airbags", "ABS with EBD", "Keyless Entry", "Power Steering"],
        description: "The Maruti Suzuki Ertiga is a highly popular and reliable 7-seater MUV, perfect for large families and group travel. It offers excellent fuel economy and comfort for long journeys across India.",
        includedServices: ["Comprehensive Insurance", "24/7 Roadside Assistance", "GPS Optional"],
        location: "Pune, Maharashtra",
        available: true,
        image:"images/ertiga.jpg"
    },
    // 2. Toyota Innova Crysta (7-Seater Premium)
    {
        id: 2,
        name: "Toyota Innova Crysta",
        category: "7-Seater Premium",
        price: 4000,
        originalPrice: 4500,
        rating: 4.9,
        reviews: 920,
        specs: {
            passengers: 7, luggage: 3, fuel: "Diesel", transmission: "Automatic",
            engine: "2.4L Diesel", fuelEconomy: "15.3 kmpl", year: 2023, color: "White Pearl Crystal Shine"
        },
        features: ["Automatic Climate Control", "Premium Fabric Seats", "7-inch Touchscreen", "Hill Start Assist", "Vehicle Stability Control", "Ambient Lighting", "Power Steering", "Parking Sensors"],
        description: "The Toyota Innova Crysta sets the standard for premium MUVs in India, offering unmatched comfort, safety, and a powerful yet refined driving experience. Ideal for executive travel and long-distance hauling.",
        includedServices: ["Comprehensive Insurance", "24/7 Roadside Assistance", "Unlimited Mileage"],
        location: "Mumbai, Maharashtra",
        available: true,
         image:"images/innova.jpg"
    },
    // 3. Hyundai Creta (5-Seater SUV)
    {
        id: 3,
        name: "Hyundai Creta",
        category: "5-Seater SUV",
        price: 3000,
        originalPrice: 3200,
        rating: 4.8,
        reviews: 750,
        specs: {
            passengers: 5, luggage: 2, fuel: "Petrol", transmission: "Automatic",
            engine: "1.5L MPi", fuelEconomy: "17.7 kmpl", year: 2024, color: "Phantom Black"
        },
        features: ["Panoramic Sunroof", "Ventilated Front Seats", "10.25-inch Infotainment", "Six Airbags", "Electric Parking Brake", "Bose Premium Sound", "Cruise Control"],
        description: "The Hyundai Creta is a feature-packed 5-seater SUV known for its modern styling, comfortable interior, and smooth automatic transmission. A great choice for families exploring city and highway roads.",
        includedServices: ["Comprehensive Insurance", "24/7 Roadside Assistance", "Free GPS Navigation"],
        location: "Bangalore, Karnataka",
        available: true,
         image:"images/creta.jpg"
    },
    // 4. Maruti Swift Dzire (4-Seater Sedan)
    {
        id: 4,
        name: "Maruti Swift Dzire",
        category: "4-Seater Sedan",
        price: 1800,
        originalPrice: 2000,
        rating: 4.6,
        reviews: 1200,
        specs: {
            passengers: 4, luggage: 2, fuel: "Petrol", transmission: "Manual",
            engine: "1.2L K Series", fuelEconomy: "23.2 kmpl", year: 2021, color: "Magma Grey"
        },
        features: ["Spacious Boot", "Bluetooth Connectivity", "Manual AC", "Dual Airbags", "Rear Parking Sensors", "Steering Mounted Controls"],
        description: "The Maruti Swift Dzire is a reliable, fuel-efficient sedan, perfect for short trips, business travel, and navigating city traffic. It provides a comfortable and economical rental option.",
        includedServices: ["Comprehensive Insurance", "24/7 Roadside Assistance", "Unlimited Mileage"],
        location: "Delhi, NCR",
        available: true,
         image:"images/swift.jpg"
    },
    // 5. Hyundai Grand i10 (4-Seater Hatchback)
    {
        id: 5,
        name: "Hyundai Grand i10",
        category: "4-Seater Hatchback",
        price: 1500,
        originalPrice: 1700,
        rating: 4.4,
        reviews: 1500,
        specs: {
            passengers: 4, luggage: 1, fuel: "Petrol", transmission: "Manual",
            engine: "1.2L Kappa", fuelEconomy: "21.0 kmpl", year: 2020, color: "Titan Grey"
        },
        features: ["Manual AC", "Keyless Entry", "Power Windows", "ABS", "Bluetooth"],
        description: "Compact and easy to drive, the Grand i10 is ideal for city commutes and short local excursions. Highly economical and maneuverable.",
        includedServices: ["Comprehensive Insurance", "24/7 Roadside Assistance"],
        location: "Ahmedabad, Gujarat",
        available: true,
         image:"images/i10.jpg"
    },
    // 6. Honda Amaze (4-Seater Sedan)
    {
        id: 6,
        name: "Honda Amaze",
        category: "4-Seater Sedan",
        price: 2200,
        originalPrice: 2400,
        rating: 4.7,
        reviews: 650,
        specs: {
            passengers: 4, luggage: 2, fuel: "Diesel", transmission: "Automatic",
            engine: "1.5L i-DTEC", fuelEconomy: "24.7 kmpl", year: 2023, color: "Platinum White Pearl"
        },
        features: ["Paddle Shifters", "Cruise Control", "Rear View Camera", "Dual Airbags", "ABS with EBD"],
        description: "Offering a smooth automatic ride and exceptional mileage, the Honda Amaze is a comfortable choice for longer drives and highway cruising.",
        includedServices: ["Comprehensive Insurance", "Unlimited Mileage"],
        location: "Chennai, Tamil Nadu",
        available: true,
         image:"images/swift.jpg"
    },
    // 7. Tata Tiago (4-Seater Hatchback)
    {
        id: 7,
        name: "Tata Tiago",
        category: "4-Seater Hatchback",
        price: 1300,
        originalPrice: 1500,
        rating: 4.3,
        reviews: 900,
        specs: {
            passengers: 4, luggage: 1, fuel: "Petrol", transmission: "Manual",
            engine: "1.2L Revotron", fuelEconomy: "20.0 kmpl", year: 2021, color: "Tectonic Blue"
        },
        features: ["City Mode Driving", "Corner Stability Control", "Harman Infotainment", "Dual Airbags"],
        description: "Known for its build quality and safety, the Tata Tiago offers a robust and budget-friendly rental option.",
        includedServices: ["Basic Insurance"],
        location: "Jaipur, Rajasthan",
        available: false,
         image:"images/tiago.jpg"
    },
    // 8. Kia Seltos (5-Seater Premium SUV)
    {
        id: 8,
        name: "Kia Seltos",
        category: "5-Seater Premium SUV",
        price: 3500,
        originalPrice: 3800,
        rating: 4.8,
        reviews: 700,
        specs: {
            passengers: 5, luggage: 2, fuel: "Diesel", transmission: "Automatic",
            engine: "1.5L CRDi", fuelEconomy: "18.5 kmpl", year: 2023, color: "Gravity Grey"
        },
        features: ["Ventilated Seats", "Bose Sound System", "Heads-Up Display", "Six Airbags", "360-degree Camera"],
        description: "The Seltos offers sharp styling and a premium cabin experience. It’s perfect for those who want comfort, technology, and status.",
        includedServices: ["Comprehensive Insurance", "Free GPS Navigation"],
        location: "Hyderabad, Telangana",
        available: true,
         image:"images/mg.jpg"
    },
    // 9. Tata Nexon (5-Seater Compact SUV)
    {
        id: 9,
        name: "Tata Nexon",
        category: "5-Seater Compact SUV",
        price: 2800,
        originalPrice: 3000,
        rating: 4.7,
        reviews: 800,
        specs: {
            passengers: 5, luggage: 2, fuel: "Petrol", transmission: "Manual",
            engine: "1.2L Turbocharged Revotron", fuelEconomy: "17.0 kmpl", year: 2022, color: "Flame Red"
        },
        features: ["Electronic Stability Program", "Traction Control", "Voice Alerts", "Sunroof (Manual)"],
        description: "A highly-rated SUV for safety (5-star GNCAP), the Nexon is a dependable and stylish option for urban and light off-road travel.",
        includedServices: ["Comprehensive Insurance", "24/7 Roadside Assistance"],
        location: "Lucknow, Uttar Pradesh",
        available: true,
         image:"images/tiago.jpg"

    },
    // 10. Mahindra XUV300 (5-Seater Compact SUV)
    {
        id: 10,
        name: "Mahindra XUV300",
        category: "5-Seater Compact SUV",
        price: 2900,
        originalPrice: 3100,
        rating: 4.6,
        reviews: 500,
        specs: {
            passengers: 5, luggage: 2, fuel: "Diesel", transmission: "Automatic",
            engine: "1.5L Turbo Diesel", fuelEconomy: "20.1 kmpl", year: 2021, color: "Aqua Marine"
        },
        features: ["Smart Steering Modes", "Dual Zone Climate Control", "Seven Airbags", "All-Wheel Disc Brakes"],
        description: "Known for its robust performance and leading safety features, the XUV300 offers a solid and powerful compact SUV experience.",
        includedServices: ["Comprehensive Insurance", "Unlimited Mileage"],
        location: "Varanasi, Uttar Pradesh",
        available: true,
         image:"images/alcazar.jpg"
    },
    // 11. Mahindra Scorpio (7-Seater Rugged SUV)
    {
        id: 11,
        name: "Mahindra Scorpio",
        category: "7-Seater Rugged SUV",
        price: 3800,
        originalPrice: 4200,
        rating: 4.6,
        reviews: 600,
        specs: {
            passengers: 7, luggage: 3, fuel: "Diesel", transmission: "Manual",
            engine: "2.2L mHawk", fuelEconomy: "16.5 kmpl", year: 2020, color: "Stealth Black"
        },
        features: ["4X4 Capability (select units)", "Tough Suspension", "Projector Headlamps", "Rear AC Vents"],
        description: "A true workhorse, the Mahindra Scorpio is perfect for long, challenging road trips and rugged terrain across the country.",
        includedServices: ["Comprehensive Insurance", "24/7 Roadside Assistance"],
        location: "Kolkata, West Bengal",
        available: true,
         image:"images/scorpio.jpg"
    },
    // 12. Kia Carens (7-Seater Premium MUV)
    {
        id: 12,
        name: "Kia Carens",
        category: "7-Seater Premium MUV",
        price: 3600,
        originalPrice: 3900,
        rating: 4.8,
        reviews: 450,
        specs: {
            passengers: 7, luggage: 2, fuel: "Petrol", transmission: "Automatic",
            engine: "1.5L Turbo GDi", fuelEconomy: "16.2 kmpl", year: 2024, color: "Imperial Blue"
        },
        features: ["Electric Sunroof", "Ventilated Seats", "Bose Premium Sound", "Six Airbags", "Digital Cluster"],
        description: "The Carens offers a luxurious and tech-filled interior, making it a comfortable and stylish choice for families requiring 7 seats.",
        includedServices: ["Comprehensive Insurance", "Free GPS Navigation"],
        location: "Ahmedabad, Gujarat",
        available: true,
         image:"images/mg.jpg"
    },
    // 13. Renault Triber (7-Seater Budget)
    {
        id: 13,
        name: "Renault Triber",
        category: "7-Seater Budget",
        price: 2100,
        originalPrice: 2300,
        rating: 4.2,
        reviews: 700,
        specs: {
            passengers: 7, luggage: 1, fuel: "Petrol", transmission: "Manual",
            engine: "1.0L Energy", fuelEconomy: "19.0 kmpl", year: 2021, color: "Electric Blue"
        },
        features: ["Modular Seating (removable 3rd row)", "Easy-R AMT", "Rear Parking Sensors"],
        description: "The most affordable 7-seater option, the Triber is practical and efficient, ideal for budget-conscious group travel.",
        includedServices: ["Basic Insurance"],
        location: "Coimbatore, Tamil Nadu",
        available: true,
         image:"images/renoult.jpg"
    },
    // 14. MG Hector Plus (6-Seater SUV)
    {
        id: 14,
        name: "MG Hector Plus",
        category: "6-Seater SUV",
        price: 4200,
        originalPrice: 4600,
        rating: 4.7,
        reviews: 350,
        specs: {
            passengers: 6, luggage: 3, fuel: "Petrol", transmission: "Automatic",
            engine: "1.5L Turbo Hybrid", fuelEconomy: "14.0 kmpl", year: 2023, color: "Starry Black"
        },
        features: ["Internet Inside (Connected Car Tech)", "Infinity Sound System", "Captain Seats (Middle Row)", "Sunroof"],
        description: "A technologically advanced SUV offering spacious captain seats, perfect for executive travel or a small group prioritizing comfort.",
        includedServices: ["Comprehensive Insurance", "Free GPS Navigation", "Additional Driver (Free)"],
        location: "Pune, Maharashtra",
        available: true,
         image:"images/hector.jpg"
    },
    // 15. Ford Endeavour (7-Seater Full-Size SUV) - High End Mock
    {
        id: 15,
        name: "Ford Endeavour",
        category: "7-Seater Full-Size SUV",
        price: 5500,
        originalPrice: 6000,
        rating: 4.9,
        reviews: 400,
        specs: {
            passengers: 7, luggage: 4, fuel: "Diesel", transmission: "Automatic",
            engine: "2.0L Bi-Turbo", fuelEconomy: "13.9 kmpl", year: 2020, color: "Diffused Silver"
        },
        features: ["Terrain Management System", "Active Noise Cancellation", "Panoramic Sunroof", "Power-folding 3rd Row"],
        description: "A powerful, imposing, and supremely comfortable full-size SUV for the ultimate Indian road trip experience.",
        includedServices: ["Comprehensive Insurance", "24/7 Roadside Assistance", "Unlimited Mileage", "Free GPS"],
        location: "Goa",
        available: true,
         image:"images/Ford.jpg"
    },
    // 16. Maruti Ciaz (4-Seater Executive Sedan)
    {
        id: 16,
        name: "Maruti Ciaz",
        category: "4-Seater Executive Sedan",
        price: 2300,
        originalPrice: 2500,
        rating: 4.5,
        reviews: 800,
        specs: {
            passengers: 4, luggage: 3, fuel: "Petrol", transmission: "Automatic",
            engine: "1.5L Smart Hybrid", fuelEconomy: "20.6 kmpl", year: 2022, color: "Metallic Magma Grey"
        },
        features: ["Spacious Rear Seating", "Cruise Control", "LED Projector Headlamps", "Rear Sunshade"],
        description: "The Ciaz offers unmatched rear seat comfort in its segment, making it ideal for business travel and long highway drives.",
        includedServices: ["Comprehensive Insurance", "24/7 Roadside Assistance"],
        location: "Jaipur, Rajasthan",
        available: true,
         image:"images/ciaz.jpg"
    },
    // 17. Volkswagen Polo (4-Seater Premium Hatchback)
    {
        id: 17,
        name: "Volkswagen Polo",
        category: "4-Seater Premium Hatchback",
        price: 1700,
        originalPrice: 1900,
        rating: 4.6,
        reviews: 950,
        specs: {
            passengers: 4, luggage: 1, fuel: "Petrol", transmission: "Manual",
            engine: "1.0L TSI", fuelEconomy: "18.2 kmpl", year: 2021, color: "Flash Red"
        },
        features: ["Solid Build Quality", "Sporty Drive", "ABS with EBD", "Dual Airbags"],
        description: "Known for its driving dynamics and solid German build, the Polo is a favourite for those who enjoy driving.",
        includedServices: ["Basic Insurance"],
        location: "Chandigarh, Punjab",
        available: true,
         image:"images/Polo.jpg"
    },
   
    // 20. Citroen C3 (4-Seater Crossover)
    {
        id: 20,
        name: "Citroen C3",
        category: "4-Seater Crossover",
        price: 1600,
        originalPrice: 1800,
        rating: 4.3,
        reviews: 250,
        specs: {
            passengers: 4, luggage: 1, fuel: "Petrol", transmission: "Manual",
            engine: "1.2L PureTech", fuelEconomy: "19.8 kmpl", year: 2023, color: "Polar White"
        },
        features: ["10-inch Infotainment", "Citroen Comfort Suspension", "Large Cabin Space"],
        description: "A quirky French car known for its comfortable ride quality and spacious interior, making city bumps a non-issue.",
        includedServices: ["Basic Insurance"],
        location: "Goa, North",
        available: true,
         image:"images/citron.jpg"
    },
    // 21. Skoda Slavia (4-Seater Executive Sedan)
    {
        id: 21,
        name: "Skoda Slavia",
        category: "4-Seater Executive Sedan",
        price: 2700,
        originalPrice: 3000,
        rating: 4.7,
        reviews: 350,
        specs: {
            passengers: 4, luggage: 3, fuel: "Petrol", transmission: "Automatic",
            engine: "1.0L TSI", fuelEconomy: "18.7 kmpl", year: 2024, color: "Tornado Red"
        },
        features: ["Premium Interior Finish", "Electric Sunroof", "Six Airbags", "Traction Control", "Large Boot"],
        description: "A German-engineered sedan offering sharp looks, powerful performance, and a touch of luxury for business or pleasure.",
        includedServices: ["Comprehensive Insurance", "Unlimited Mileage"],
        location: "Kochi, Kerala",
        available: true,
         image:"images/skoda.jpg"
    },
    // 22. Hyundai Alcazar (6-Seater Premium SUV)
    {
        id: 22,
        name: "Hyundai Alcazar",
        category: "6-Seater Premium SUV",
        price: 3700,
        originalPrice: 4000,
        rating: 4.8,
        reviews: 400,
        specs: {
            passengers: 6, luggage: 2, fuel: "Diesel", transmission: "Automatic",
            engine: "1.5L CRDi", fuelEconomy: "20.4 kmpl", year: 2023, color: "Taiga Brown"
        },
        features: ["Captain Seats", "Panoramic Sunroof", "Ventilated Seats", "360-degree Camera", "Bose Audio"],
        description: "A premium 6-seater version of the Creta, offering more space and luxury features for comfortable group travel.",
        includedServices: ["Comprehensive Insurance", "Free GPS Navigation", "Additional Driver (Free)"],
        location: "Hyderabad, Telangana",
        available: true,
         image:"images/alcazar.jpg"
    },
    // 23. Audi A4 (4-Seater Luxury Sedan) - High End Mock
    {
        id: 23,
        name: "Audi A4",
        category: "4-Seater Luxury Sedan",
        price: 8000,
        originalPrice: 9000,
        rating: 4.9,
        reviews: 150,
        specs: {
            passengers: 4, luggage: 3, fuel: "Petrol", transmission: "Automatic",
            engine: "2.0L TFSI", fuelEconomy: "14.8 kmpl", year: 2023, color: "Mythos Black"
        },
        features: ["Virtual Cockpit", "Leather Upholstery", "Three-Zone Climate Control", "High-Performance Drive"],
        description: "The pinnacle of luxury and style. Rent the Audi A4 for special occasions or top-tier corporate travel.",
        includedServices: ["Premium Comprehensive Insurance", "24/7 Priority Assistance", "Unlimited Mileage"],
        location: "Mumbai, Maharashtra",
        available: true,
         image:"images/audi.jpg"
    },
    // 24. Maruti Baleno (4-Seater Premium Hatchback)
    {
        id: 24,
        name: "Maruti Baleno",
        category: "4-Seater Premium Hatchback",
        price: 1850,
        originalPrice: 2050,
        rating: 4.5,
        reviews: 1100,
        specs: {
            passengers: 4, luggage: 1, fuel: "Petrol", transmission: "Manual",
            engine: "1.2L DualJet", fuelEconomy: "22.3 kmpl", year: 2022, color: "Celestial Blue"
        },
        features: ["Heads-up Display (HUD)", "360 View Camera", "ABS with EBD", "Suzuki Connect"],
        description: "A spacious and feature-rich hatchback offering excellent fuel efficiency and comfort for city travel.",
        includedServices: ["Comprehensive Insurance"],
        location: "Pune, Maharashtra",
        available: true,
         image:"images/baleno.jpg"
    },
    // 25. Tata Harrier (5-Seater Premium SUV)
    {
        id: 25,
        name: "Tata Harrier",
        category: "5-Seater Premium SUV",
        price: 3650,
        originalPrice: 3950,
        rating: 4.7,
        reviews: 600,
        specs: {
            passengers: 5, luggage: 3, fuel: "Diesel", transmission: "Automatic",
            engine: "2.0L Kryotec Diesel", fuelEconomy: "16.8 kmpl", year: 2024, color: "Oberon Black"
        },
        features: ["Advanced Driver Assistance Systems (ADAS)", "Panoramic Sunroof", "Terrain Response Modes", "JBL Audio"],
        description: "A commanding SUV known for its road presence, robust build, and comfortable ride quality for long-haul journeys.",
        includedServices: ["Comprehensive Insurance", "Unlimited Mileage", "Free GPS Navigation"],
        location: "Delhi, NCR",
        available: true,
         image:"images/baleno.jpg"
    }
];