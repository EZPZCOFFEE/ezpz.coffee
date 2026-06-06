export interface CityData {
  slug: string;
  name: string;
  region: string;
  country: "CA" | "US";
  population: string;
  coffeeContext: string;
  neighborhoods: string[];
  marketInsight: string;
  industryContext: Record<string, string>;
}

export interface IndustryData {
  slug: string;
  name: string;
  namePlural: string;
  useCase: string;
  painPoint: string;
  brandBenefit: string;
  stat: string;
  cta: string;
}

export interface ProductData {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  moq: string;
  turnaround: string;
  priceRange: string;
  keyFeature: string;
  bodyIntro: string;
}

export interface ComboData {
  product: string;
  industry: string;
  city: string;
}

// ── City data ─────────────────────────────────────────────────────────────────

export const CITIES: Record<string, CityData> = {
  montreal: {
    slug: "montreal",
    name: "Montreal",
    region: "QC",
    country: "CA",
    population: "2.1 million",
    coffeeContext:
      "Montreal's specialty coffee scene is one of Canada's most developed, with over 400 independent cafés and a customer base that genuinely rewards quality and presentation.",
    neighborhoods: ["Mile End", "Plateau-Mont-Royal", "Old Montreal", "Rosemont", "Griffintown"],
    marketInsight:
      "Montreal businesses benefit from a bilingual, design-conscious consumer base that responds strongly to branded packaging—especially in the food and hospitality sectors.",
    industryContext: {
      restaurants:
        "Montreal's 6,000+ restaurants range from world-class French bistros in Old Montreal to trendy mile-end brunch spots, all competing for brand recognition in a saturated market.",
      hotels:
        "From boutique hotels in Griffintown to luxury properties downtown, Montreal's hotel industry serves 11 million visitors annually who increasingly expect elevated in-room experiences.",
      boutiques:
        "Montreal's retail scene—particularly in Plateau-Mont-Royal and Old Montreal—is anchor to hundreds of independent boutiques where branded coffee gifts drive repeat customer loyalty.",
      gyms:
        "Montreal's wellness market spans CrossFit boxes, boutique cycling studios, and yoga-centric gyms, all looking to build tribe-like brand communities around their identity.",
      offices:
        "With over 550,000 office workers in Greater Montreal—especially in tech, finance, and pharma—corporate gifting and branded amenities are a standard part of client retention.",
      spas:
        "Montreal's spa industry—from downtown day spas to Laurentian destination retreats—uses premium branded products as part of the holistic, elevated experience guests pay for.",
    },
  },
  toronto: {
    slug: "toronto",
    name: "Toronto",
    region: "ON",
    country: "CA",
    population: "2.9 million",
    coffeeContext:
      "Toronto is Canada's largest coffee market, with a deeply competitive specialty scene across King West, Kensington Market, and the Financial District that demands standout branding.",
    neighborhoods: ["King West", "Distillery District", "Kensington Market", "Yorkville", "Liberty Village"],
    marketInsight:
      "Toronto's multicultural, trend-forward consumer base sets national retail and hospitality benchmarks—what resonates here often spreads to other Canadian cities within 12 months.",
    industryContext: {
      restaurants:
        "Toronto has over 8,000 restaurants and is home to some of Canada's most Instagrammed dining experiences—branded touchpoints like coffee packaging have become a differentiator.",
      hotels:
        "Toronto's hospitality sector welcomes over 27 million visitors per year, with hotel brands competing fiercely on in-room amenity quality and recognizable presentation.",
      boutiques:
        "From Yorkville luxury to Queen West indie retail, Toronto boutiques use branded coffee as a memorable gift-with-purchase and a tool to extend the in-store experience at home.",
      gyms:
        "Toronto's fitness market is Canada's largest, with thousands of boutique studios and large-format gyms all vying for member loyalty through branded merchandise and experiences.",
      offices:
        "Toronto's Bay Street and tech corridor house hundreds of firms that rely on branded corporate gifts to maintain client relationships and onboard new team members impressively.",
      spas:
        "Toronto's high-end spa and wellness market in Yorkville and Bloor West caters to a clientele that expects luxury at every touchpoint, including branded retail take-homes.",
    },
  },
  vancouver: {
    slug: "vancouver",
    name: "Vancouver",
    region: "BC",
    country: "CA",
    population: "675,000 (metro 2.6M)",
    coffeeContext:
      "Vancouver's coffee culture is among North America's most sophisticated, driven by the city's proximity to Pacific trade routes and a population that prioritizes artisan food experiences.",
    neighborhoods: ["Gastown", "Mount Pleasant", "Yaletown", "Kitsilano", "Commercial Drive"],
    marketInsight:
      "Vancouver consumers are particularly sustainability-minded—businesses that lead with eco-conscious, locally-branded packaging see stronger loyalty and word-of-mouth than those using generic product.",
    industryContext: {
      restaurants:
        "Vancouver's restaurant scene is globally recognized, particularly in Gastown and Yaletown, where diners expect cohesive brand experiences from the menu to the takeout packaging.",
      hotels:
        "Vancouver hosts over 11 million tourists annually, and its hotel industry—from boutique Yaletown properties to North Shore retreats—competes on authentic West Coast branding.",
      boutiques:
        "Kitsilano and Gastown boutiques serve customers who prioritize local, handcrafted products—branded coffee sits perfectly within that aesthetic and price point.",
      gyms:
        "Vancouver's outdoor-oriented fitness culture—from commercial studios to yoga retreats in Whistler—prizes authenticity and brand mission over mainstream messaging.",
      offices:
        "Vancouver's tech sector (often called 'Silicon North') is home to thousands of studios and startups that use branded gifting to recruit talent and impress clients.",
      spas:
        "Vancouver's wellness industry is one of Canada's fastest-growing, with spa clients who view premium branded products as an extension of the mindful lifestyle they're investing in.",
    },
  },
  calgary: {
    slug: "calgary",
    name: "Calgary",
    region: "AB",
    country: "CA",
    population: "1.3 million",
    coffeeContext:
      "Calgary's coffee scene has evolved rapidly alongside its booming population, with a growing base of specialty cafés in Kensington and 17th Ave serving an affluent, quality-conscious market.",
    neighborhoods: ["Kensington", "17th Avenue", "East Village", "Inglewood", "Beltline"],
    marketInsight:
      "Calgary businesses benefit from Alberta's high average household income—consumers here readily pay premium for quality branded products and associate packaging with product quality.",
    industryContext: {
      restaurants:
        "Calgary's restaurant industry has rebounded strongly post-pandemic, with 17th Ave and East Village leading a new generation of dining concepts that prioritize total brand cohesion.",
      hotels:
        "Calgary's hotel market serves both the corporate travel circuit and Stampede visitors—peak seasons create intense competition for memorable branded touchpoints.",
      boutiques:
        "Kensington and Inglewood boutiques serve a gift-oriented clientele looking for premium local products—branded coffee bags are a natural fit for seasonal gifting displays.",
      gyms:
        "Calgary's active lifestyle culture (skiing, cycling, CrossFit) supports a dense gym market where brand identity matters as much as programming quality.",
      offices:
        "Calgary's energy sector and growing tech presence create significant demand for premium corporate gifts and branded client experiences.",
      spas:
        "Calgary's urban spa market caters to high-income professionals seeking respite—branded retail add-ons help spas generate incremental revenue per visit.",
    },
  },
  ottawa: {
    slug: "ottawa",
    name: "Ottawa",
    region: "ON",
    country: "CA",
    population: "1.0 million",
    coffeeContext:
      "Ottawa's coffee culture has grown steadily around Glebe, Westboro, and ByWard Market, with a civil-service and tech workforce that sustains consistent café traffic year-round.",
    neighborhoods: ["Glebe", "Westboro", "ByWard Market", "Hintonburg", "Little Italy"],
    marketInsight:
      "Ottawa's large government and tech sector creates steady demand for professional corporate gifts, while the city's tourism base (4.5 million visitors/year) fuels hotel and hospitality branding needs.",
    industryContext: {
      restaurants:
        "Ottawa's ByWard Market and Elgin Street dining corridors attract both locals and government workers—branded coffee creates a consistent hospitality touchpoint across table and to-go formats.",
      hotels:
        "Ottawa hotels serve a steady stream of government delegates, conference attendees, and tourists visiting Parliament Hill—in-room branded amenities reinforce the capital city experience.",
      boutiques:
        "Westboro and Glebe boutiques serve an educated, affluent demographic with strong preferences for locally-sourced, thoughtfully branded products.",
      gyms:
        "Ottawa's active, health-conscious population—fueled partly by a large public-sector workforce with work-life balance priorities—supports a thriving boutique fitness market.",
      offices:
        "Ottawa's government contractors, law firms, and tech companies (Shopify, Kinaxis) rely on polished branded gifts to communicate professionalism to clients and recruits.",
      spas:
        "Ottawa spas cater to professionals seeking high-quality relaxation—branded retail helps them capture incremental revenue while extending the spa experience beyond the visit.",
    },
  },
  "new-york": {
    slug: "new-york",
    name: "New York",
    region: "NY",
    country: "US",
    population: "8.3 million",
    coffeeContext:
      "New York is North America's most competitive coffee market, where every restaurant, hotel, and boutique brand is judged by the quality and design of everything they serve.",
    neighborhoods: ["Brooklyn", "Lower East Side", "West Village", "Williamsburg", "Tribeca"],
    marketInsight:
      "New York's premium consumer is the most brand-literate in the world—packaging that looks generic is immediately disqualifying, while distinctive design can go viral on social media overnight.",
    industryContext: {
      restaurants:
        "With over 27,000 restaurants, New York's dining scene is the world's most competitive—every branded touchpoint is an opportunity to convert a one-time diner into a loyal regular.",
      hotels:
        "New York's luxury hotel market—from boutique Tribeca properties to Midtown flagships—competes intensely on in-room experience quality and brand memorability.",
      boutiques:
        "New York boutiques in Soho, Williamsburg, and the West Village set global retail trends—branded coffee is a high-margin, high-visibility addition to any gifting floor.",
      gyms:
        "New York's boutique fitness scene (SoulCycle, Equinox, independent boxes) is one of the world's most brand-obsessed, where merchandise quality reflects directly on studio reputation.",
      offices:
        "New York's financial, legal, and creative industries rely on impeccable branded gifts to maintain relationships with clients in the world's most competitive business environment.",
      spas:
        "New York spa clients—among the highest-spending in the world—expect every retail product to reflect the standard of the treatment they just received.",
    },
  },
  chicago: {
    slug: "chicago",
    name: "Chicago",
    region: "IL",
    country: "US",
    population: "2.7 million",
    coffeeContext:
      "Chicago's coffee culture is anchored in neighborhoods like Wicker Park, Logan Square, and River North, where a discerning food-and-drink community has elevated specialty coffee to an art form.",
    neighborhoods: ["Wicker Park", "Logan Square", "River North", "West Loop", "Lincoln Park"],
    marketInsight:
      "Chicago's food scene is nationally recognized—the city's restaurant and hospitality industries are particularly responsive to branded packaging that signals quality and local identity.",
    industryContext: {
      restaurants:
        "Chicago's restaurant scene is one of the US's most celebrated, especially in West Loop and Logan Square—branded coffee creates a consistent identity thread across the entire dining experience.",
      hotels:
        "Chicago hosts 58 million visitors annually, with a hotel industry that serves conventions, sports events, and leisure travelers all year—in-room branded products are a key differentiator.",
      boutiques:
        "Chicago's independent boutique scene in Wicker Park and Lincoln Park thrives on curated, local-feeling product selections where branded coffee is a natural category addition.",
      gyms:
        "Chicago's fitness market is large and increasingly boutique-oriented, with gym members who value brand identity and community as much as the workout itself.",
      offices:
        "Chicago's Loop and River North house major financial and professional services firms that use high-quality branded gifts to sustain client relationships year-round.",
      spas:
        "Chicago's urban wellness market—particularly in Lincoln Park and Gold Coast—serves a clientele that views premium branded take-homes as part of the luxury value proposition.",
    },
  },
  miami: {
    slug: "miami",
    name: "Miami",
    region: "FL",
    country: "US",
    population: "450,000 (metro 6.2M)",
    coffeeContext:
      "Miami's coffee culture blends Latin espresso tradition with modern specialty trends—a city where coffee is culturally significant and brand presentation is taken seriously.",
    neighborhoods: ["Wynwood", "Brickell", "South Beach", "Design District", "Little Havana"],
    marketInsight:
      "Miami's hospitality and tourism industry is among the US's most lucrative—hotels, restaurants, and wellness venues all compete aggressively on visual identity and guest experience.",
    industryContext: {
      restaurants:
        "Miami's restaurant scene—spanning Wynwood street food to Brickell fine dining—is a global stage where brand presentation directly influences press coverage and social reach.",
      hotels:
        "Miami's hotel industry is world-class, serving 24 million tourists annually—luxury properties in South Beach and Brickell use branded amenities to reinforce their premium positioning.",
      boutiques:
        "Miami's Design District and Wynwood boutiques cater to style-forward, international clientele who respond strongly to artisan, design-led branded products.",
      gyms:
        "Miami's year-round outdoor culture and wellness obsession create one of the US's densest boutique fitness markets—branding is essential for gyms competing for the same members.",
      offices:
        "Miami's growing tech and finance corridor in Brickell and Doral serves a business community that increasingly relies on branded gifting to compete with more established markets.",
      spas:
        "Miami's luxury spa market—in South Beach, Bal Harbour, and Coral Gables—serves an internationally affluent clientele who expect impeccable branded retail at every level.",
    },
  },
  seattle: {
    slug: "seattle",
    name: "Seattle",
    region: "WA",
    country: "US",
    population: "730,000",
    coffeeContext:
      "Seattle is the birthplace of modern American coffee culture—a city where coffee literacy is universal and branded packaging is scrutinized by some of the world's most knowledgeable consumers.",
    neighborhoods: ["Capitol Hill", "Ballard", "Fremont", "South Lake Union", "Pioneer Square"],
    marketInsight:
      "Seattle consumers have the highest coffee knowledge per capita in the US—they reward authenticity and penalize generic branding instantly, making well-designed custom packaging essential.",
    industryContext: {
      restaurants:
        "Seattle's restaurant scene—from Capitol Hill neighborhood spots to Pike Place Market staples—values local provenance and authentic branding above all else.",
      hotels:
        "Seattle's tech-driven tourism and business travel market create a hotel industry that needs to impress detail-oriented guests who notice and discuss product quality.",
      boutiques:
        "Seattle's Ballard and Fremont boutiques serve a conscientious, design-aware shopper who actively seeks out locally branded, quality-first products.",
      gyms:
        "Seattle's outdoor and fitness culture—tied to its hiking, cycling, and climbing communities—supports a boutique gym market where brand story matters deeply.",
      offices:
        "Seattle's tech giants (Amazon, Microsoft, Expedia) and their vast supplier ecosystems have normalized high-quality branded corporate gifts as table stakes.",
      spas:
        "Seattle's wellness industry reflects the city's mindfulness culture—spas and retreat centers use premium branded products to close the loop between in-treatment and at-home experience.",
    },
  },
  "los-angeles": {
    slug: "los-angeles",
    name: "Los Angeles",
    region: "CA",
    country: "US",
    population: "3.9 million",
    coffeeContext:
      "Los Angeles has one of the US's most sophisticated specialty coffee markets, with Silver Lake, Venice, and DTLA each hosting world-class roasters whose branding influences global trends.",
    neighborhoods: ["Silver Lake", "Venice", "DTLA", "West Hollywood", "Arts District"],
    marketInsight:
      "LA's entertainment and media industry means branded products are constantly in visual media—a well-designed coffee bag photographed at a brand activation can earn millions of impressions.",
    industryContext: {
      restaurants:
        "LA's restaurant scene is one of the world's most-photographed—every detail, including branded coffee packaging, is potential content for media coverage and social virality.",
      hotels:
        "Los Angeles welcomes 50 million visitors annually—hotels in Beverly Hills, Santa Monica, and DTLA compete on every detail of the guest experience, including in-room coffee quality.",
      boutiques:
        "West Hollywood and Silver Lake boutiques serve a celebrity-adjacent, highly trend-aware clientele—branded coffee bags are a natural complement to elevated retail curation.",
      gyms:
        "LA's boutique fitness industry is the US's most fashion-forward—gyms in Venice Beach and West Hollywood treat branded merchandise as a direct revenue stream and brand amplifier.",
      offices:
        "LA's entertainment, tech, and media companies rely on premium branded gifts to impress talent, clients, and partners in an industry where perception shapes reality.",
      spas:
        "LA's spa industry is nationally influential—luxury day spas and wellness retreats in Beverly Hills and Malibu are trendsetters whose branded retail choices ripple outward.",
    },
  },
  austin: {
    slug: "austin",
    name: "Austin",
    region: "TX",
    country: "US",
    population: "960,000",
    coffeeContext:
      "Austin's coffee scene has exploded alongside the city's tech boom—South Congress and East Austin are home to world-class cafés serving a young, brand-conscious professional population.",
    neighborhoods: ["South Congress", "East Austin", "Domain", "6th Street", "Mueller"],
    marketInsight:
      "Austin's rapid growth has made it one of the US's hottest hospitality markets—new hotels, restaurants, and wellness businesses open weekly, all competing to establish brand identity fast.",
    industryContext: {
      restaurants:
        "Austin's restaurant scene is one of the US's fastest-growing, with East Austin leading a wave of concept-driven, visually distinctive dining brands that live and die by social media.",
      hotels:
        "Austin's hotel market has added thousands of rooms in recent years to meet demand from SXSW, Formula 1, and year-round tech tourism—branded amenities help new properties stand out quickly.",
      boutiques:
        "South Congress boutiques serve Austin's creative class—a community that actively supports local brands and expects boutique purchases to come with a story and a visual identity.",
      gyms:
        "Austin's fitness culture is as strong as its tech culture—boutique gyms and CrossFit boxes compete hard for members who are simultaneously loyal to brands and quick to switch.",
      offices:
        "Austin's tech corridor (Amazon, Apple, Tesla, Oracle all have major presences) has created massive demand for premium corporate gifting that reflects the city's innovation identity.",
      spas:
        "Austin's growing wellness industry caters to stressed tech workers and health-conscious locals—branded take-homes help spas convert first-time visitors into regular clients.",
    },
  },
  denver: {
    slug: "denver",
    name: "Denver",
    region: "CO",
    country: "US",
    population: "715,000",
    coffeeContext:
      "Denver's coffee culture is deeply tied to its outdoor lifestyle identity—RiNo and Capitol Hill are home to specialty roasters whose branding reflects the city's adventurous, quality-first ethos.",
    neighborhoods: ["RiNo", "Capitol Hill", "LoDo", "Cherry Creek", "Baker"],
    marketInsight:
      "Denver consumers are highly brand-loyal when a brand authentically reflects their values—outdoor lifestyle, sustainability, and quality craftsmanship all resonate strongly in this market.",
    industryContext: {
      restaurants:
        "Denver's RiNo and LoDo restaurant scene is nationally recognized for its quality and creativity—branded coffee is part of the cohesive identity these establishments work hard to build.",
      hotels:
        "Denver's hotel market serves ski tourists, outdoor enthusiasts, and a growing business travel sector—in-room branded coffee ties the experience to the quality promise.",
      boutiques:
        "Cherry Creek and RiNo boutiques serve a well-educated, outdoors-oriented shopper who values artisan products and authentic brand stories over mass-market alternatives.",
      gyms:
        "Denver's fitness culture—anchored in outdoor sport and wellness—supports one of the US's most active boutique gym scenes, where brand identity is central to member recruitment.",
      offices:
        "Denver's growing tech and energy sectors have created significant demand for premium corporate gifting that communicates both professionalism and the city's casual-innovative culture.",
      spas:
        "Denver's spa and wellness scene caters to active professionals seeking recovery and relaxation—branded retail products serve as both revenue drivers and guest experience amplifiers.",
    },
  },
};

// ── Industry data ─────────────────────────────────────────────────────────────

export const INDUSTRIES: Record<string, IndustryData> = {
  restaurants: {
    slug: "restaurants",
    name: "Restaurant",
    namePlural: "Restaurants",
    useCase:
      "Serve branded coffee at the table, offer bags for retail sale, include as part of a gift card package, or use as staff welcome gifts during onboarding.",
    painPoint:
      "Most restaurants pour exceptional coffee but serve it in generic bags that could have come from any grocery store—a missed opportunity to extend the brand experience beyond the table.",
    brandBenefit:
      "Branded coffee turns every takeout bag and retail shelf into a marketing touchpoint, reminding guests of your restaurant long after the meal ends.",
    stat: "Restaurants that add branded retail products see an average 8–12% increase in ancillary revenue per cover.",
    cta: "Get a quote for your restaurant",
  },
  hotels: {
    slug: "hotels",
    name: "Hotel",
    namePlural: "Hotels",
    useCase:
      "Place branded bags in rooms as welcome amenities, feature them in your minibar offering, sell them in the lobby shop, or include them in corporate rate packages.",
    painPoint:
      "Generic hotel coffee is one of the most universally mocked in-room amenities—guests tweet about it. Branded specialty coffee is tweeted about for entirely different reasons.",
    brandBenefit:
      "In-room branded coffee signals that your hotel cares about the full guest experience, not just the headline features—a detail that drives review scores and repeat bookings.",
    stat: "Hotels offering premium branded in-room coffee report a 15% improvement in amenity-related review scores on TripAdvisor and Google.",
    cta: "Request hotel pricing",
  },
  boutiques: {
    slug: "boutiques",
    name: "Boutique",
    namePlural: "Boutiques",
    useCase:
      "Stock branded bags as a high-margin retail product, bundle them as gift-with-purchase promotions, feature them in seasonal gift boxes, or sell them as standalone gifts.",
    painPoint:
      "Boutiques spend enormous energy curating every product on the floor—but coffee, a natural gift category, is often left to generic options that don't match the store's aesthetic.",
    brandBenefit:
      "Branded coffee is a high-margin, low-footprint retail product that gives customers a reason to return, reinforces your store's identity, and photographs beautifully for social content.",
    stat: "Boutiques that add private-label food and beverage products report 20–30% higher average transaction values on gift-oriented purchases.",
    cta: "Get boutique pricing",
  },
  gyms: {
    slug: "gyms",
    name: "Gym",
    namePlural: "Gyms & Studios",
    useCase:
      "Sell branded bags at the front desk, include them in new member welcome kits, use them as competition prizes, or feature them in seasonal merchandise drops.",
    painPoint:
      "Gyms invest heavily in branded apparel but overlook consumables—branded coffee is a daily-use product that keeps your gym's identity in members' homes 365 days a year.",
    brandBenefit:
      "Coffee is the #1 pre-workout ritual for over 60% of gym members—a branded bag on their kitchen counter is a daily touchpoint that reinforces loyalty and drives word-of-mouth.",
    stat: "Fitness studios that sell branded consumables report 25% higher member retention vs. those that sell apparel only.",
    cta: "Get gym & studio pricing",
  },
  offices: {
    slug: "offices",
    name: "Office",
    namePlural: "Offices & Corporate",
    useCase:
      "Give branded bags as client gifts, welcome new employees with a branded gift box, send to prospects as a memorable cold-outreach tactic, or stock for in-office premium coffee service.",
    painPoint:
      "Most corporate gifts are immediately forgotten—branded coffee is consumed daily, keeping your company name top-of-mind with clients for weeks after the initial gesture.",
    brandBenefit:
      "A well-designed branded coffee bag sitting on a client's kitchen counter or desk is a daily brand impression that costs a fraction of traditional advertising.",
    stat: "Corporate gifting studies show branded food/beverage gifts have a 73% higher recipient retention rate vs. branded merchandise.",
    cta: "Get corporate pricing",
  },
  spas: {
    slug: "spas",
    name: "Spa",
    namePlural: "Spas & Wellness Centers",
    useCase:
      "Sell branded bags in your retail area, include them in treatment packages, feature them in seasonal gift sets, or offer them as add-ons to loyalty program redemptions.",
    painPoint:
      "Spas carefully curate every product in their treatment rooms but often leave the retail area stocked with generic brand names that undermine the premium experience they've built.",
    brandBenefit:
      "Branded coffee lets guests take the spa's identity home—a ritual product that reinforces the wellness mindset and the emotional connection to their experience.",
    stat: "Spas with curated branded retail offerings report 35% higher retail attachment rates and 18% higher lifetime client value.",
    cta: "Get spa & wellness pricing",
  },
};

// ── Product data ───────────────────────────────────────────────────────────────

export const PRODUCTS: Record<string, ProductData> = {
  "custom-coffee-bags": {
    slug: "custom-coffee-bags",
    name: "Custom Coffee Bags",
    shortName: "custom bags",
    tagline: "Your brand. Your roast. Delivered.",
    moq: "as few as 12 bags",
    turnaround: "7–10 business days",
    priceRange: "$12–$28 per bag",
    keyFeature: "full custom printing on resealable kraft or matte bags with one-way degassing valve",
    bodyIntro:
      "Custom coffee bags combine specialty-roasted coffee with full-color custom printing—so your brand is front and center every time someone reaches for their morning cup.",
  },
  "white-label-coffee": {
    slug: "white-label-coffee",
    name: "White Label Coffee",
    shortName: "white label coffee",
    tagline: "Professional coffee under your brand, ready to scale.",
    moq: "starting at 24 units",
    turnaround: "5–7 business days",
    priceRange: "$10–$22 per bag",
    keyFeature: "consistent house blends or single origins with your branding applied at our roastery",
    bodyIntro:
      "White label coffee lets you sell or serve high-quality specialty coffee under your own brand name—without the overhead of sourcing, roasting, or fulfillment.",
  },
  "branded-coffee-bags": {
    slug: "branded-coffee-bags",
    name: "Branded Coffee Bags",
    shortName: "branded bags",
    tagline: "Make your mark on every morning.",
    moq: "as few as 12 bags",
    turnaround: "7–10 business days",
    priceRange: "$13–$30 per bag",
    keyFeature: "premium label printing on specialty coffee bags with full brand identity integration",
    bodyIntro:
      "Branded coffee bags marry great coffee with intentional design—giving your business a physical presence in customers' daily routines that no digital ad can replicate.",
  },
};

// ── 50 valid combos ────────────────────────────────────────────────────────────

export const COMBOS: ComboData[] = [
  // custom-coffee-bags × restaurants (10)
  { product: "custom-coffee-bags", industry: "restaurants", city: "montreal" },
  { product: "custom-coffee-bags", industry: "restaurants", city: "toronto" },
  { product: "custom-coffee-bags", industry: "restaurants", city: "vancouver" },
  { product: "custom-coffee-bags", industry: "restaurants", city: "calgary" },
  { product: "custom-coffee-bags", industry: "restaurants", city: "ottawa" },
  { product: "custom-coffee-bags", industry: "restaurants", city: "new-york" },
  { product: "custom-coffee-bags", industry: "restaurants", city: "chicago" },
  { product: "custom-coffee-bags", industry: "restaurants", city: "miami" },
  { product: "custom-coffee-bags", industry: "restaurants", city: "seattle" },
  { product: "custom-coffee-bags", industry: "restaurants", city: "los-angeles" },

  // custom-coffee-bags × hotels (8)
  { product: "custom-coffee-bags", industry: "hotels", city: "montreal" },
  { product: "custom-coffee-bags", industry: "hotels", city: "toronto" },
  { product: "custom-coffee-bags", industry: "hotels", city: "vancouver" },
  { product: "custom-coffee-bags", industry: "hotels", city: "calgary" },
  { product: "custom-coffee-bags", industry: "hotels", city: "chicago" },
  { product: "custom-coffee-bags", industry: "hotels", city: "miami" },
  { product: "custom-coffee-bags", industry: "hotels", city: "new-york" },
  { product: "custom-coffee-bags", industry: "hotels", city: "austin" },

  // custom-coffee-bags × boutiques (5)
  { product: "custom-coffee-bags", industry: "boutiques", city: "montreal" },
  { product: "custom-coffee-bags", industry: "boutiques", city: "toronto" },
  { product: "custom-coffee-bags", industry: "boutiques", city: "vancouver" },
  { product: "custom-coffee-bags", industry: "boutiques", city: "new-york" },
  { product: "custom-coffee-bags", industry: "boutiques", city: "los-angeles" },

  // custom-coffee-bags × offices (3)
  { product: "custom-coffee-bags", industry: "offices", city: "toronto" },
  { product: "custom-coffee-bags", industry: "offices", city: "montreal" },
  { product: "custom-coffee-bags", industry: "offices", city: "calgary" },

  // white-label-coffee × restaurants (5)
  { product: "white-label-coffee", industry: "restaurants", city: "montreal" },
  { product: "white-label-coffee", industry: "restaurants", city: "toronto" },
  { product: "white-label-coffee", industry: "restaurants", city: "vancouver" },
  { product: "white-label-coffee", industry: "restaurants", city: "new-york" },
  { product: "white-label-coffee", industry: "restaurants", city: "chicago" },

  // white-label-coffee × hotels (5)
  { product: "white-label-coffee", industry: "hotels", city: "montreal" },
  { product: "white-label-coffee", industry: "hotels", city: "toronto" },
  { product: "white-label-coffee", industry: "hotels", city: "vancouver" },
  { product: "white-label-coffee", industry: "hotels", city: "new-york" },
  { product: "white-label-coffee", industry: "hotels", city: "miami" },

  // white-label-coffee × gyms (3)
  { product: "white-label-coffee", industry: "gyms", city: "toronto" },
  { product: "white-label-coffee", industry: "gyms", city: "montreal" },
  { product: "white-label-coffee", industry: "gyms", city: "vancouver" },

  // branded-coffee-bags × boutiques (4)
  { product: "branded-coffee-bags", industry: "boutiques", city: "montreal" },
  { product: "branded-coffee-bags", industry: "boutiques", city: "toronto" },
  { product: "branded-coffee-bags", industry: "boutiques", city: "new-york" },
  { product: "branded-coffee-bags", industry: "boutiques", city: "los-angeles" },

  // branded-coffee-bags × restaurants (4)
  { product: "branded-coffee-bags", industry: "restaurants", city: "montreal" },
  { product: "branded-coffee-bags", industry: "restaurants", city: "toronto" },
  { product: "branded-coffee-bags", industry: "restaurants", city: "vancouver" },
  { product: "branded-coffee-bags", industry: "restaurants", city: "denver" },

  // branded-coffee-bags × spas (3)
  { product: "branded-coffee-bags", industry: "spas", city: "montreal" },
  { product: "branded-coffee-bags", industry: "spas", city: "toronto" },
  { product: "branded-coffee-bags", industry: "spas", city: "miami" },
];

export function getComboSlug(combo: ComboData): string {
  return `${combo.product}-for-${combo.industry}-${combo.city}`;
}

export function parseComboSlug(
  slug: string
): { product: ProductData; industry: IndustryData; city: CityData } | null {
  const productSlugs = Object.keys(PRODUCTS);
  const industrySlugs = Object.keys(INDUSTRIES);
  const citySlugs = Object.keys(CITIES).sort((a, b) => b.length - a.length);

  let matchedProduct: ProductData | null = null;
  let remainder = "";

  for (const ps of productSlugs) {
    const prefix = `${ps}-for-`;
    if (slug.startsWith(prefix)) {
      matchedProduct = PRODUCTS[ps];
      remainder = slug.slice(prefix.length);
      break;
    }
  }

  if (!matchedProduct) return null;

  let matchedCity: CityData | null = null;
  let matchedIndustry: IndustryData | null = null;

  for (const cs of citySlugs) {
    const suffix = `-${cs}`;
    if (remainder.endsWith(suffix)) {
      const industrySlug = remainder.slice(0, remainder.length - suffix.length);
      if (INDUSTRIES[industrySlug]) {
        matchedCity = CITIES[cs];
        matchedIndustry = INDUSTRIES[industrySlug];
        break;
      }
    }
  }

  if (!matchedCity || !matchedIndustry) return null;

  const isValid = COMBOS.some(
    (c) =>
      c.product === matchedProduct!.slug &&
      c.industry === matchedIndustry!.slug &&
      c.city === matchedCity!.slug
  );

  if (!isValid) return null;

  return { product: matchedProduct, industry: matchedIndustry, city: matchedCity };
}
