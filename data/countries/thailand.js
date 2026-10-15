/* Thailand: full dossier. */
window.TRAVEL.data.register({
  code: 'TH',
  name: 'Thailand',
  reviewed: '2026',
  tagline: 'Fish sauce is in nearly everything and "not spicy" means something different here. Both are solvable if you know before you order.',

  languageBarrier: {
    level: 'high',
    summary: 'Thai has its own alphabet and is tonal: the same syllable said with five different pitches is five different words. You will not pick it up in two weeks and nobody expects you to. English is common in Bangkok hotels, Phuket, Samui and tourist Chiang Mai, and scarce otherwise.',
    whatWorks: [
      'Photo menus, which are nearly universal in restaurants that see tourists.',
      'Google Translate camera for Thai script, plus the offline pack. Thai script has no spaces between words, so the camera does better than you will.',
      'Pointing at the wok cart. Street food is cooked in front of you and you can see every ingredient.',
      'Numbers written down. Thai uses Arabic numerals alongside Thai ones, so prices are usually readable.',
      'A smile and a wai. Thai service culture is extremely accommodating if you are polite.'
    ],
    hardMoments: [
      'Explaining an allergy in a street-food setting where nobody reads English.',
      'Taxi destinations: say a Thai place name with the wrong tone and you will be driven somewhere else entirely.',
      'Pharmacies and clinics outside Bangkok and the resorts.',
      'Bus and ferry schedules, often handwritten in Thai only.'
    ]
  },

  overview: {
    intro: 'Thailand is set up for visitors better than almost anywhere: cheap, warm, easy to move around, and genuinely welcoming to children. The three things that catch families out are the heat, which is relentless, the food, where chili and fish sauce are structural rather than optional, and the scams, which are well-organised around the main tourist sites.',
    bestTime: 'November to February is cool and dry, which is the only comfortable time for walking around with children. March to May is brutally hot, peaking over 40C in April. June to October is the rainy season: warm downpours rather than all-day rain, cheaper and far less crowded.',
    avoidDates: 'Songkran (13 to 15 April) is a nationwide water fight, which is either the highlight of your trip or completely impossible with small children, with no middle ground. Chinese New Year and Christmas to New Year fill the islands.',
    timeZone: 'ICT, UTC+7. No daylight saving.',
    typicalTrip: '12 to 14 days for Bangkok, Chiang Mai and one island. Internal flights are cheap and save days that overnight buses would eat.',
    withKids: 'Thai people adore children and yours will be picked up, photographed and fussed over constantly. Facilities are good in cities, thin on islands. Heat and food are the two real planning problems.'
  },

  entry: {
    note: 'For US passport holders. Thailand has changed its visa-exemption rules several times recently; confirm on the official link before booking.',
    rows: [
      ['Visa', 'Visa exemption on arrival for tourism for many nationalities including the US, UK, EU, Canada and Australia. The permitted length has changed repeatedly, so check the current figure.'],
      ['Passport validity', 'At least six months beyond your arrival date. This is enforced strictly at check-in.'],
      ['Arrival card', 'Thailand has moved to a digital arrival card (TDAC) completed online before travel. Fill it in for every traveler, children included.'],
      ['Onward ticket', 'Airlines routinely refuse boarding without proof of onward travel within the permitted stay. This is enforced at the departure airport, not in Thailand.'],
      ['Overstaying', 'Fined per day and can mean detention and a ban. Count your days carefully.']
    ],
    links: [
      { label: 'Thai Ministry of Foreign Affairs: visa information', url: 'https://www.mfa.go.th/en/page/visa' },
      { label: 'Thailand Digital Arrival Card', url: 'https://tdac.immigration.go.th/' }
    ]
  },

  money: {
    currency: 'Thai baht (THB, ฿)',
    cards: 'Hotels, malls, chains and mid-range restaurants take cards. Street food, markets, songthaews, small guesthouses and most of the islands are cash. Carry small notes; nobody at a food stall can change a 1,000.',
    atms: 'Every foreign-card withdrawal carries a fixed ATM fee of around 220 baht on top of your bank\'s charges, so take out larger amounts less often. Always decline the machine\'s currency conversion.',
    tipping: 'Not traditional but increasingly expected in tourist areas. Round up a taxi fare, leave 20 to 50 baht for good restaurant service, and tip massage therapists 50 to 100 baht. Many restaurants add a 10% service charge, in which case nothing more is needed.',
    taxRefund: 'VAT refund for tourists on purchases over 2,000 baht per shop per day from participating stores, claimed at the airport with the goods available for inspection.',
    costs: [
      ['Street food plate', '50 to 80 baht'],
      ['Restaurant meal for four', '600 to 1,500 baht'],
      ['Bangkok BTS Skytrain ride', '17 to 62 baht'],
      ['Hour-long Thai massage', '300 to 500 baht'],
      ['Grand Palace entry, adult', 'about 500 baht'],
      ['Domestic flight, Bangkok to Chiang Mai', '1,000 to 2,500 baht']
    ]
  },

  connectivity: {
    sim: 'Buy a tourist SIM or eSIM from AIS, TrueMove or dtac. Coverage is excellent even on small islands, and data is extremely cheap. Airport counters are fast and used to tourists, though an eSIM bought beforehand is simpler.',
    wifi: 'Everywhere, free and generally fast, including on many islands.',
    apps: [
      { name: 'Grab', why: 'The regional Uber. Taxis, private cars, motorbikes and food delivery. Removes every fare negotiation and is the single most useful app here.' },
      { name: 'Google Maps', why: 'Reliable in cities, including the BTS and MRT. Less reliable for rural addresses.' },
      { name: 'Google Translate', why: 'Download the Thai pack. Camera mode handles the script, which you cannot.' },
      { name: 'Bolt', why: 'A cheaper Grab competitor in Bangkok and Chiang Mai.' }
    ]
  },

  transport: {
    headline: 'Internal flights between regions, Grab in cities, and ferries to the islands.',
    items: [
      { name: 'Grab and ride hailing', detail: 'Fixed price shown before you accept, route tracked, no haggling and no language needed. In Bangkok it is almost always cheaper than a negotiated taxi and the single easiest way to move a family around.' },
      { name: 'BTS Skytrain and MRT', detail: 'Clean, cheap, air-conditioned and the only reliable way to beat Bangkok traffic. Children under 90cm ride free. Buy a stored-value card rather than queueing for tokens each time.' },
      { name: 'Metered taxis', detail: 'Insist on the meter ("meter, please") or walk away. A driver who refuses the meter is overcharging, and that is the most common minor scam in the country.' },
      { name: 'Tuk-tuks', detail: 'Fun once, and usually more expensive than a taxi. Agree the price before you get in. A tuk-tuk driver offering a cheap all-day tour is taking you to gem and tailor shops for commission.' },
      { name: 'Internal flights', detail: 'AirAsia, Thai Lion, Nok and Bangkok Airways connect everywhere cheaply. A 90-minute flight to Chiang Mai beats a 12-hour overnight bus with children.' },
      { name: 'Ferries and speedboats', detail: 'Book the larger ferries rather than speedboats where possible: they are far more comfortable in swell. Check the weather: services between Phuket, Phi Phi and Krabi are cancelled in rough seas, especially May to October.' },
      { name: 'Motorbike rental', detail: 'The leading cause of tourist death and injury in Thailand. Most travel insurance will not pay if you had no motorbike licence. If you still do it, wear a helmet and photograph the bike before you take it.' }
    ]
  },

  etiquette: [
    { rule: 'Never touch anyone\'s head, and never point your feet at a person or a Buddha image.', why: 'The head is the highest and most sacred part of the body, the feet the lowest. This includes patting a child on the head, which visitors do instinctively.' },
    { rule: 'Cover shoulders and knees at every temple, adults and children alike.', why: 'Enforced at the Grand Palace, where you will be sent to rent clothes. Carry a scarf and a pair of light trousers.' },
    { rule: 'Take your shoes off before entering a temple building, a home or many shops.', why: 'Look for the pile of shoes at the door.' },
    { rule: 'Never say anything critical about the monarchy.', why: 'Lèse-majesté is a serious criminal offence with long prison sentences, and it applies to foreigners and to things posted online.' },
    { rule: 'Do not lose your temper in public.', why: 'Visible anger makes you lose face and ends any chance of the problem being solved. Stay calm and smiling and things happen faster.' },
    { rule: 'Women should not touch a monk or hand him anything directly.', why: 'Place the object down for him to pick up instead.' }
  ],

  safety: {
    overall: 'Thailand is generally safe for violent crime against tourists. The real dangers are road traffic, which has one of the worst death rates in the world, water and drowning, and heat. Scams are organised and persistent around the main Bangkok sights but cost money rather than safety.',
    emergencyNotes: 'Tourist Police on 1155 is the number to use: free, 24 hours, English-speaking, and they coordinate with the regular services. Otherwise 191 for police, 1669 for an ambulance, 199 for fire.',
    hazards: [
      { name: 'Roads and motorbikes', what: 'Thailand has among the highest road death rates in the world, and tourists on rented scooters make up a large share. Travel insurance usually excludes motorbike injury without a valid licence, leaving families with bills in the tens of thousands. Use Grab.' },
      { name: 'Heat and humidity', what: '35C with high humidity for months at a time. Children overheat faster than adults and often stop complaining when it gets serious. Plan indoor middays, carry water constantly, and use the malls, which are enormous, free and freezing.' },
      { name: 'Water and riptides', what: 'Drowning is a leading cause of tourist death. Many beaches have no lifeguard. Red flags on Phuket beaches mean the water is closed, and people drown every monsoon season ignoring them.' },
      { name: 'Mosquito-borne illness', what: 'Dengue is present year-round and peaks in the rainy season. There is no prophylactic: repellent, long sleeves at dawn and dusk, and air conditioning are the defence. Malaria is limited to some border areas.' },
      { name: 'Animals', what: 'Do not touch stray dogs, cats or monkeys. Rabies is present. Monkeys at temples and Lopburi steal bags, sunglasses and food, and they bite.' },
      { name: 'Air quality', what: 'Northern Thailand, Chiang Mai especially, has a severe smoke season from burning roughly February to April, with readings that are genuinely hazardous. Check before booking Chiang Mai in those months, particularly with asthmatic children.' }
    ],
    scams: [
      'The "Grand Palace is closed today" scam. A friendly stranger near the entrance tells you it is shut for a ceremony and arranges a tuk-tuk tour instead, which ends at gem and tailor shops. The Grand Palace is open every day.',
      'Gem shops promising resale profit. The stones are worthless and the money is not recoverable.',
      'Jet ski and motorbike damage claims: you return the vehicle and are shown pre-existing damage and surrounded until you pay. Photograph and film everything before you take it.',
      'Taxi drivers refusing the meter, or claiming your hotel is closed or full and offering another one that pays commission.',
      'Tailors promising a bespoke suit in 24 hours for a price that is too good.',
      'Ping pong shows and bar touts in Patpong and Patong, where the bill at the end is enormous and intimidation follows.'
    ],
    lostAndFound: 'Call the Tourist Police on 1155 first. They speak English, will accompany you to the local police station, and handle insurance reports for tourists routinely.',
    withKids: 'Thai culture is extremely warm toward children: expect strangers to pick up your toddler. Nothing sinister is meant by it. The practical risks are heat, traffic and water, in that order, not crime.'
  },

  health: {
    water: 'Do not drink the tap water. Bottled water is cheap and everywhere. Ice in restaurants and from bags is commercially produced from treated water and is generally fine; the cylindrical ice with a hole is the commercial kind.',
    food: 'Street food is excellent and generally safe when cooked to order in front of you at a busy stall. Avoid pre-cooked food sitting warm, raw shellfish, and cut fruit that has been sitting unrefrigerated.',
    vaccines: 'Hepatitis A and typhoid are commonly recommended. Japanese encephalitis and rabies vaccines are considered for longer or rural trips. See a travel clinic six to eight weeks ahead.',
    medications: {
      warning: 'Thailand enforces its drug laws strictly and the rules differ from home.',
      points: [
        'Carry prescriptions in original labelled packaging with a copy of the prescription.',
        'Some medications that are routine elsewhere, including certain strong painkillers and ADHD stimulants, are controlled here. Check before you pack and carry a doctor\'s letter.',
        'Pharmacies sell many prescription-only drugs over the counter, including antibiotics, which is convenient and not a reason to self-prescribe.',
        'Cannabis law in Thailand has changed repeatedly in recent years and remains in flux. Do not assume anything about its legal status, and never carry it across a border.'
      ]
    },
    pharmacy: 'Boots and Watsons are in every mall with English-speaking staff. Independent pharmacies are cheaper and often just as good. Bring your own children\'s fever medicine and rehydration salts so you are not deciphering a Thai label at night.',
    doctors: 'Private hospitals in Bangkok, Phuket and Chiang Mai are outstanding and are a destination for medical tourism. Bumrungrad and Bangkok Hospital have international departments with English-speaking staff and will handle insurance directly. Costs are a fraction of US prices but still require payment or a guarantee.',
    insurance: 'Essential, and read the exclusions. Motorbike injury without a licence, and often any motorbike injury at all, is excluded by most policies. Make sure it covers evacuation from an island, which is where costs escalate.',
    allergies: 'Difficult, and worth taking seriously. Fish sauce (nam pla) is the salt of Thai cooking and is in most savoury dishes including vegetable ones. Dried shrimp and shrimp paste (kapi) are in curry pastes and som tam. Peanuts are everywhere and are often added as a garnish at the last second. Cross-contamination at street stalls is universal: one wok, one spatula, all day. For a severe nut or shellfish allergy, eat at restaurants rather than stalls and carry the card below in Thai.'
  },

  food: {
    intro: 'Thai cooking balances hot, sour, salty and sweet, and the salty element is almost always fish sauce. That single fact shapes everything for vegetarians and anyone with a fish allergy: a vegetable stir fry is not vegetarian by default. Chili is the other structural issue, and "not spicy" requested in English still arrives hotter than most western palates expect. Both are manageable with the right phrases.',
    survival: {
      title: 'Chicken rice, pad thai and mango sticky rice',
      body: 'Khao man gai (poached chicken on rice) is plain, mild, cheap and sold everywhere, and is the single most reliable meal for an unadventurous child in Thailand. Add fried rice, grilled chicken skewers, fresh fruit and mango sticky rice and you have a week of food with no chili in sight. 7-Eleven is on every corner with toasties, fruit, yoghurt and cold drinks when all else fails.'
    },
    orderingWithoutLanguage: [
      'Most tourist-facing restaurants have photo menus with numbers. Point at the picture.',
      '"Mai phet" (not spicy) is the single most useful phrase in the country. Say it twice and still expect some heat.',
      '"Mai sai nam pla" means no fish sauce. "Jay" (เจ) means strictly vegan in the Buddhist sense and is the most reliably understood vegetarian word.',
      'Food courts in malls use a prepaid card: load it at the counter, point at the stall you want, tap, and refund the balance on the way out. The easiest meal in Thailand with children.',
      'Street stalls show raw ingredients in trays. Point at what you want in the wok.'
    ],
    allergyCard: {
      intro: 'Show this at the counter before ordering. For a severe allergy, screenshot it, and prefer restaurants over street stalls where one wok serves everything.',
      local: 'ฉันแพ้อาหาร กินไม่ได้: ____ ถ้ามีในน้ำปลา ซอส หรือน้ำซุป ก็กินไม่ได้ค่ะ/ครับ ช่วยตรวจสอบให้หน่อยได้ไหมคะ/ครับ อันตรายมาก',
      english: 'I have a food allergy. I cannot eat: ____. I also cannot eat it if it is in the fish sauce, the sauce or the stock. Could you check for me please? It is very dangerous.',
      words: [
        ['Peanut', 'ถั่วลิสง', 'tua li-song'], ['Nuts', 'ถั่ว', 'tua'],
        ['Fish sauce', 'น้ำปลา', 'nam pla'], ['Shrimp paste', 'กะปิ', 'ka-pi'],
        ['Shrimp and prawn', 'กุ้ง', 'goong'], ['Crab', 'ปู', 'poo'], ['Fish', 'ปลา', 'pla'],
        ['Oyster sauce', 'น้ำมันหอย', 'nam man hoi'], ['Egg', 'ไข่', 'khai'], ['Milk and dairy', 'นม', 'nom'],
        ['Wheat and gluten', 'แป้งสาลี', 'paeng sa-lee'], ['Soy', 'ถั่วเหลือง', 'tua lueang'],
        ['Sesame', 'งา', 'nga'], ['Pork', 'หมู', 'moo'], ['Chicken', 'ไก่', 'gai'],
        ['Beef', 'เนื้อวัว', 'nuea wua'], ['Chili', 'พริก', 'prik'], ['Coconut milk', 'กะทิ', 'ka-ti']
      ]
    },
    dishes: [
      { id: 'khao-man-gai', name: 'Khao man gai (chicken rice)', native: 'ข้าวมันไก่', romaji: 'khao man gai',
        blurb: 'Poached chicken sliced over rice cooked in the chicken stock, with a bowl of clear soup and a sharp ginger sauce on the side. Plain, mild and sold on every street.',
        contains: ['chicken'], mayContain: ['soy_sauce', 'gluten'], traits: ['plain', 'kid', 'cheap'], spice: 0,
        where: 'Street stalls and food courts everywhere', price: '฿',
        order: 'The sauce is the only hot element and it comes separately. This is the safest order in Thailand for a child.' },
      { id: 'pad-thai', name: 'Pad thai', native: 'ผัดไทย', romaji: 'pad thai',
        blurb: 'Rice noodles stir-fried with tamarind, egg, bean sprouts and tofu or prawn, with crushed peanuts, chili flakes and lime added at the table.',
        contains: ['egg', 'peanuts', 'fish', 'soy'], mayContain: ['shellfish', 'gluten'],
        omit: { peanuts: 'The peanuts are a garnish added last: "mai sai tua" leaves them off, though the wok is still shared.', egg: 'Ask for "mai sai khai".' },
        traits: ['kid'], spice: 1, where: 'Everywhere, best from a street cart', price: '฿',
        order: 'The sauce contains fish sauce and often dried shrimp, so it is not vegetarian unless made specifically as jay.' },
      { id: 'khao-pad', name: 'Khao pad (fried rice)', native: 'ข้าวผัด', romaji: 'khao pad',
        blurb: 'Fried rice with egg, onion and your choice of chicken, pork, prawn or crab. The most adaptable dish on any Thai menu.',
        contains: ['egg', 'fish'], mayContain: ['shellfish', 'chicken', 'pork', 'soy_sauce', 'gluten'],
        omit: { egg: 'Ask for "mai sai khai".', fish: 'Ask for "mai sai nam pla", though most cooks will substitute soy sauce rather than leave out salt.' },
        traits: ['plain', 'kid', 'cheap'], spice: 0, where: 'Everywhere', price: '฿' },
      { id: 'tom-yum', name: 'Tom yum goong', native: 'ต้มยำกุ้ง', romaji: 'tom yum goong',
        blurb: 'Hot and sour prawn soup with lemongrass, galangal, lime leaf and chili. The most famous Thai dish and genuinely fierce.',
        contains: ['shellfish', 'fish', 'spicy'], mayContain: ['dairy'], traits: ['adventurous'], spice: 3,
        where: 'Everywhere', price: '฿฿',
        order: 'Tom kha gai, the coconut and chicken version, is far milder and is the one to order with children.' },
      { id: 'green-curry', name: 'Green curry', native: 'แกงเขียวหวาน', romaji: 'gaeng khiao wan',
        blurb: 'Coconut curry with green chili paste, Thai basil, bamboo and chicken. "Sweet green" in Thai, which refers to the colour, not the heat level.',
        contains: ['chicken', 'fish', 'shellfish', 'spicy'], mayContain: ['nuts'], traits: [], spice: 3,
        where: 'Everywhere', price: '฿฿',
        order: 'The curry paste contains shrimp paste and fish sauce, so no Thai curry is vegetarian unless specifically made jay. Massaman is the mildest curry and the best bet for a child.' },
      { id: 'massaman', name: 'Massaman curry', native: 'แกงมัสมั่น', romaji: 'gaeng massaman',
        blurb: 'A mild, sweet, almost stew-like curry of beef or chicken with potato, onion and peanuts, scented with cinnamon and cardamom. The least spicy curry in Thailand.',
        contains: ['peanuts', 'fish', 'beef'], mayContain: ['shellfish', 'chicken', 'nuts'], traits: ['plain'], spice: 1,
        where: 'Everywhere', price: '฿฿',
        order: 'Mild enough for most children, but peanuts are in the paste itself and cannot be left out.' },
      { id: 'moo-ping', name: 'Moo ping (pork skewers)', native: 'หมูปิ้ง', romaji: 'moo ping',
        blurb: 'Marinated pork grilled on bamboo skewers over charcoal, sold from carts from dawn. Sweet, smoky and eaten with a bag of sticky rice.',
        contains: ['pork', 'soy_sauce', 'gluten'], mayContain: ['fish'], traits: ['plain', 'kid', 'street', 'cheap'], spice: 0,
        where: 'Street carts, mornings and evenings', price: '฿' },
      { id: 'gai-yang', name: 'Gai yang (grilled chicken)', native: 'ไก่ย่าง', romaji: 'gai yang',
        blurb: 'Whole or half chicken marinated and grilled slowly over charcoal, sold with sticky rice. Isaan food, and everywhere.',
        contains: ['chicken'], mayContain: ['fish', 'soy_sauce', 'spicy'], traits: ['plain', 'kid'], spice: 0,
        where: 'Street stalls and Isaan restaurants', price: '฿' },
      { id: 'som-tam', name: 'Som tam (papaya salad)', native: 'ส้มตำ', romaji: 'som tam',
        blurb: 'Green papaya pounded in a mortar with lime, fish sauce, dried shrimp, peanuts and a terrifying number of chilies. Sour, crunchy and the default hot dish.',
        contains: ['fish', 'shellfish', 'peanuts', 'spicy'], mayContain: [], traits: ['adventurous'], spice: 3,
        where: 'Street stalls everywhere', price: '฿',
        order: 'Ask for "mai phet" and watch how many chilies go in the mortar. Even one is noticeable. The dried shrimp and fish sauce are structural.' },
      { id: 'pad-see-ew', name: 'Pad see ew', native: 'ผัดซีอิ๊ว', romaji: 'pad see ew',
        blurb: 'Wide flat rice noodles stir-fried in dark soy with egg, Chinese broccoli and pork or chicken. Smoky, savoury and completely unspicy.',
        contains: ['soy_sauce', 'gluten', 'egg'], mayContain: ['pork', 'chicken', 'fish'],
        traits: ['plain', 'kid'], spice: 0, where: 'Noodle stalls everywhere', price: '฿',
        order: 'The best noodle dish for children: no chili at all, unlike its cousin pad kee mao.' },
      { id: 'spring-rolls', name: 'Fresh and fried spring rolls', native: 'ปอเปี๊ยะ', romaji: 'por pia',
        blurb: 'Fried vegetable rolls with a sweet dipping sauce, or fresh ones in soft rice paper with herbs and prawn.',
        contains: ['gluten'], mayContain: ['shellfish', 'peanuts', 'fish', 'egg', 'pork'], traits: ['kid', 'street'], spice: 0,
        where: 'Markets and restaurants', price: '฿',
        order: 'The dipping sauce usually contains peanuts or fish sauce even when the roll does not.' },
      { id: 'khao-niao-mamuang', name: 'Mango sticky rice', native: 'ข้าวเหนียวมะม่วง', romaji: 'khao niao mamuang',
        blurb: 'Warm sticky rice soaked in sweet coconut milk with slices of ripe mango and a pinch of salt. The best dessert in Southeast Asia and naturally free of dairy, egg, gluten and nuts.',
        contains: [], mayContain: ['sesame'], traits: ['kid', 'plain', 'veg'], spice: 0,
        where: 'Markets and street stalls, best March to May', price: '฿',
        order: 'Sometimes topped with toasted mung beans or sesame. Ask for it plain if that matters.' },
      { id: 'roti', name: 'Roti', native: 'โรตี', romaji: 'roti',
        blurb: 'Thin dough stretched, fried on a hot plate with butter, then filled with banana and egg and drizzled with condensed milk. Street dessert, made in front of you.',
        contains: ['gluten', 'dairy', 'egg'], mayContain: [], traits: ['kid', 'street'], spice: 0,
        where: 'Night markets', price: '฿' },
      { id: 'coconut-ice', name: 'Coconut ice cream', native: 'ไอติมกะทิ', romaji: 'i-tim kati',
        blurb: 'Coconut milk ice cream served in half a coconut shell with peanuts, sticky rice and sweetcorn on top.',
        contains: [], mayContain: ['peanuts', 'dairy'], traits: ['kid', 'plain'], spice: 0,
        where: 'Markets and street carts', price: '฿',
        order: 'The ice cream itself is coconut based and dairy free, but the toppings are added by default. Ask for it plain.' },
      { id: 'fresh-fruit', name: 'Cut fruit from a cart', native: 'ผลไม้', romaji: 'phonlamai',
        blurb: 'Pineapple, mango, watermelon, guava and rose apple, peeled, bagged and sold on ice for twenty baht. The easiest way to get something fresh into a child in the heat.',
        contains: [], mayContain: [], traits: ['plain', 'kid', 'veg', 'cheap', 'street'], spice: 0,
        where: 'Street carts on every corner', price: '฿',
        order: 'Buy from a cart with ice and high turnover. The chili-salt dip offered alongside is optional and very much not for children.' },
      { id: 'khanom-krok', name: 'Khanom krok', native: 'ขนมครก', romaji: 'khanom krok',
        blurb: 'Little coconut-rice pancakes cooked in a dimpled pan, crisp outside and molten in the middle, sold hot in paper bags.',
        contains: [], mayContain: ['dairy'], traits: ['kid', 'street', 'veg'], spice: 0,
        where: 'Markets and street carts', price: '฿' }
    ],
    chains: [
      { name: 'Mall food courts', why: 'Load a prepaid card, point at any stall, tap. Air conditioned, clean, cheap, and twenty different cuisines so everyone eats what they want. The best family meal solution in Thailand.' },
      { name: '7-Eleven', why: 'On every corner, open all night: toasties, fruit, yoghurt, cold drinks, nappies, sunscreen and medicine. The fallback at any hour.' },
      { name: 'Khao man gai and khao kha moo stalls', why: 'Single-dish specialists. Plain, mild, cooked all day, and visible before you order.' },
      { name: 'MK Restaurants', why: 'Thai hotpot chain in every mall. You cook at the table so you control exactly what everyone eats, and children love it.' },
      { name: 'Cabbages and Condoms, and other restaurant-grade kitchens', why: 'For a serious allergy, a sit-down restaurant with a separate kitchen is far safer than a one-wok street stall.' }
    ],
    phrases: [
      { en: 'Not spicy, please', native: 'ไม่เผ็ด', say: 'mai phet' },
      { en: 'Really not spicy at all', native: 'ไม่เผ็ดเลย', say: 'mai phet loey' },
      { en: 'No fish sauce', native: 'ไม่ใส่น้ำปลา', say: 'mai sai nam pla' },
      { en: 'No peanuts', native: 'ไม่ใส่ถั่ว', say: 'mai sai tua' },
      { en: 'I am vegetarian (strict, Buddhist sense)', native: 'กินเจ', say: 'gin jay' },
      { en: 'I have a food allergy', native: 'ฉันแพ้อาหาร', say: 'chan pae ahan' },
      { en: 'This one, please', native: 'เอาอันนี้', say: 'ao an nee' },
      { en: 'Delicious', native: 'อร่อย', say: 'a-roi' },
      { en: 'The bill, please', native: 'เช็คบิล', say: 'check bin' }
    ]
  },

  activities: [
    { id: 'elephant-sanctuary', name: 'Ethical elephant sanctuary', native: 'ปางช้าง', city: 'Chiang Mai, Kanchanaburi',
      blurb: 'Observing rescued elephants in forest enclosures: feeding, watching them bathe themselves, and learning why the tourist industry around them was so damaging.',
      ages: { min: 0, bestFrom: 5 }, energy: 'moderate', hours: 'half or full day', indoor: false, cost: '฿฿฿',
      language: 'easy', stroller: false, wheelchair: 'partial', heatExposed: true, bookAhead: 'required',
      tags: ['animals', 'nature', 'hands_on'], familyPick: true,
      tips: ['Never ride an elephant, and be sceptical of bathing experiences: both require the animal to be broken to human handling. Choose observation-only places.', 'Elephant Nature Park in Chiang Mai is the best known of the genuine sanctuaries; several others follow the same model. Look for no riding, no performing, no bathing with tourists.', 'Full-day options include a long minibus ride on winding roads, which matters if anyone gets carsick.'] },

    { id: 'grand-palace', name: 'Grand Palace and Wat Pho', native: 'พระบรมมหาราชวัง', city: 'Bangkok',
      blurb: 'Gold spires, mirrored mosaic and the Emerald Buddha, then the 46-metre reclining Buddha next door at Wat Pho. The two essential Bangkok sights, ten minutes apart.',
      ages: { min: 0, bestFrom: 6 }, energy: 'moderate', hours: '3 to 4 hours for both', indoor: false, cost: '฿฿',
      language: 'some', stroller: 'partial', wheelchair: 'partial', heatExposed: true, crowded: true, bookAhead: 'no',
      tags: ['religious', 'history', 'views'],
      tips: ['Strict dress code: shoulders and knees covered for everyone including children. They rent cover-ups at the gate but the queue is long.', 'Go at 8.30am opening. By 11am the heat on the white stone is punishing and there is no shade.', 'If anyone tells you it is closed today, they are lying to sell you a tuk-tuk tour. It is open every day.'] },

    { id: 'cooking-class-th', name: 'Thai cooking class with a market tour', native: 'เรียนทำอาหารไทย', city: 'Chiang Mai, Bangkok',
      blurb: 'Shop in a local market, then cook four dishes from scratch, pounding your own curry paste in a stone mortar. Taught in English, ending in lunch.',
      ages: { min: 0, bestFrom: 8 }, energy: 'low', hours: '4 to 6 hours', indoor: true, cost: '฿฿',
      language: 'easy', stroller: 'partial', wheelchair: 'partial', bookAhead: 'required',
      tags: ['food', 'hands_on', 'shopping'], familyPick: true,
      tips: ['Tell them about allergies when booking. Most will adapt a curry paste to leave out shrimp paste if asked in advance, which they cannot do on the day.', 'Chiang Mai classes on a farm outside town are cheaper and better than the city-centre ones.', 'Children usually get a shorter, less knife-heavy version. Ask when booking rather than assuming.'] },

    { id: 'ayutthaya', name: 'Ayutthaya ruins by bicycle', native: 'อยุธยา', city: 'Near Bangkok',
      blurb: 'The ruined capital of the old Siamese kingdom: brick temples, rows of headless Buddhas, and a famous stone Buddha head wrapped in tree roots. Flat enough to cycle between sites.',
      ages: { min: 0, bestFrom: 7 }, energy: 'moderate', hours: 'full day from Bangkok', indoor: false, cost: '฿',
      language: 'some', stroller: 'partial', wheelchair: 'partial', heatExposed: true, bookAhead: 'no',
      tags: ['history', 'views'],
      tips: ['Go by train from Bangkok: slow, cheap, scenic and far more interesting than a tour bus.', 'Start at 7am. There is almost no shade among the ruins and it is unbearable after 11.', 'Hire bicycles at the station. The site is spread out and walking between temples in that heat is a mistake.'] },

    { id: 'island-snorkel', name: 'Island hopping and snorkelling', native: 'ดำน้ำตื้น', city: 'Krabi, Phuket, Koh Tao',
      blurb: 'Longtail or speedboat between limestone islands, with snorkelling stops over coral and a beach lunch. The postcard version of Thailand.',
      ages: { min: 0, bestFrom: 5 }, energy: 'moderate', hours: 'full day', indoor: false, cost: '฿฿',
      language: 'easy', stroller: false, wheelchair: false, motion: true, heatExposed: true, bookAhead: 'recommended',
      tags: ['water', 'nature', 'animals'],
      tips: ['Longtail boats are slower, cheaper and far less sickening than speedboats in swell.', 'Rash vests beat sunscreen: reef-safe sunscreen is required in national parks and children burn through anything in that sun.', 'Trips are cancelled in rough weather from roughly May to October on the Andaman side. Build in a spare day.'] },

    { id: 'night-market', name: 'A night market', native: 'ตลาดกลางคืน', city: 'Chiang Mai, Bangkok, everywhere',
      blurb: 'Hundreds of stalls of food, clothes and tat, open from dusk, cooler than the day and cheap enough that nobody has to agree on one restaurant.',
      ages: { min: 0 }, energy: 'moderate', hours: '2 to 3 hours', indoor: false, cost: '฿',
      language: 'easy', stroller: 'partial', wheelchair: 'partial', evening: true, crowded: true, bookAhead: 'no',
      tags: ['food', 'shopping'], familyPick: true,
      tips: ['The best solution for a family with four different food requirements: everyone buys their own and you sit at a shared table.', 'Carry small notes. Nobody can change a thousand-baht note for a forty-baht plate.', 'Chiang Mai\'s Sunday Walking Street is the best of them, and is completely impassable with a stroller.'] },

    { id: 'muay-thai', name: 'Muay Thai match', native: 'มวยไทย', city: 'Bangkok, Chiang Mai, Phuket',
      blurb: 'Thai boxing with live music, ritual dancing before each bout, and a betting crowd that makes more noise than the fighters.',
      ages: { min: 0, bestFrom: 10 }, energy: 'low', hours: '2 to 3 hours', indoor: true, cost: '฿฿',
      language: 'easy', stroller: false, wheelchair: 'partial', evening: true, crowded: true, bookAhead: 'recommended',
      tags: ['hands_on', 'pop_culture'],
      tips: ['It is a real combat sport and there is blood. Decide in advance whether that suits your children.', 'Early bouts feature young and junior fighters; the main events are last and the crowd peaks then.', 'Ringside is expensive and loud. The upper tiers give a better view of the whole spectacle for a fraction of the price.'] },

    { id: 'temple-chiang-mai', name: 'Doi Suthep temple', native: 'วัดพระธาตุดอยสุเทพ', city: 'Chiang Mai',
      blurb: 'A golden chedi on a mountain above Chiang Mai, reached by a 306-step naga staircase or a funicular, with the whole valley below.',
      ages: { min: 0, bestFrom: 5 }, energy: 'moderate', hours: 'half a day', indoor: false, cost: '฿',
      language: 'some', stroller: false, wheelchair: 'partial', stairs: true, heatExposed: true, bookAhead: 'no',
      accessNote: 'A funicular avoids the 306 steps, though the terrace itself still has steps.',
      tags: ['religious', 'views', 'history'],
      tips: ['Shoulders and knees covered, shoes off on the terrace.', 'The red songthaew trucks from Chiang Mai old town are the standard way up and cost a fixed fare per person.', 'Go early for the view: by midday the valley is usually hazy, and in burning season it is invisible.'] },

    { id: 'floating-market', name: 'Floating market', native: 'ตลาดน้ำ', city: 'Near Bangkok',
      blurb: 'Boats selling food and fruit along narrow canals. Damnoen Saduak is the famous, touristy one; Amphawa in the late afternoon is where Thai families actually go.',
      ages: { min: 0 }, energy: 'low', hours: 'half a day', indoor: false, cost: '฿฿',
      language: 'some', stroller: false, wheelchair: false, motion: true, heatExposed: true, crowded: true, bookAhead: 'recommended',
      tags: ['food', 'water', 'shopping'],
      tips: ['Go at opening, around 7am, or it is a boat jam of tour groups photographing each other.', 'Amphawa on a Friday, Saturday or Sunday evening is far more authentic and has fireflies on the boat trip afterwards.', 'Agree the boat price before you get in and know whether it is per person or per boat.'] },

    { id: 'thai-massage', name: 'Thai massage', native: 'นวดแผนไทย', city: 'Everywhere',
      blurb: 'An hour of being stretched, folded and pressed, fully clothed, on a mat. Vigorous rather than relaxing, and roughly the price of a sandwich at home.',
      ages: { min: 12 }, energy: 'low', hours: '1 to 2 hours', indoor: true, cost: '฿',
      language: 'easy', stroller: false, wheelchair: 'partial', bookAhead: 'no',
      tags: ['relax'],
      tips: ['Say "bao bao" for gentle if the pressure is too much. Traditional Thai massage is genuinely forceful.', 'A foot massage is the easier introduction and takes 30 minutes.', 'Avoid it if anyone is pregnant, has had recent surgery, or has back or joint problems.'] }
  ],

  language: {
    script: 'Thai has its own 44-consonant alphabet, written left to right with no spaces between words. You will not learn to read it in a fortnight, which is why the camera translator matters more here than in Europe.',
    pronunciation: 'Thai is tonal: five tones, and the same syllable at different pitches means different words. "Mai" alone can mean new, not, wood, burn or a question marker. Say phrases simply and in context and people will work out what you mean. Thai also has polite particles: men end sentences with "khrap", women with "kha", and using them makes everything land better.',
    politeness: 'The wai, palms together at chest height with a slight bow, greets and thanks. Return one that is offered to you, but do not wai service staff or children. Never raise your voice.',
    phrasebook: [
      { group: 'The essential six', items: [
        { en: 'Hello (man speaking / woman speaking)', native: 'สวัสดีครับ / สวัสดีค่ะ', say: 'sa-wat-dee khrap / sa-wat-dee kha' },
        { en: 'Thank you', native: 'ขอบคุณ', say: 'khop khun khrap / kha' },
        { en: 'Excuse me / sorry', native: 'ขอโทษ', say: 'kho thot' },
        { en: 'Yes / no', native: 'ใช่ / ไม่ใช่', say: 'chai / mai chai' },
        { en: 'I don\'t understand', native: 'ไม่เข้าใจ', say: 'mai khao jai' },
        { en: 'No problem / never mind', native: 'ไม่เป็นไร', say: 'mai pen rai' }
      ] },
      { group: 'Getting help', items: [
        { en: 'Do you speak English?', native: 'พูดภาษาอังกฤษได้ไหม', say: 'phut pasa angkrit dai mai' },
        { en: 'Where is the toilet?', native: 'ห้องน้ำอยู่ที่ไหน', say: 'hong nam yu tee nai' },
        { en: 'How much?', native: 'เท่าไหร่', say: 'tao rai' },
        { en: 'Too expensive', native: 'แพงไป', say: 'paeng pai' },
        { en: 'Please write it down', native: 'เขียนให้หน่อย', say: 'khian hai noi' },
        { en: 'Help!', native: 'ช่วยด้วย', say: 'chuay duay' }
      ] },
      { group: 'Getting about', items: [
        { en: 'Please use the meter', native: 'เปิดมิเตอร์ด้วย', say: 'poet mi-ter duay' },
        { en: 'Go to this address (show it)', native: 'ไปที่นี่', say: 'pai tee nee' },
        { en: 'Stop here, please', native: 'จอดตรงนี้', say: 'jot trong nee' },
        { en: 'Where is the pier?', native: 'ท่าเรืออยู่ที่ไหน', say: 'tha ruea yu tee nai' }
      ] },
      { group: 'Medical and trouble', items: [
        { en: 'I need a doctor', native: 'ต้องการหมอ', say: 'tong kan mor' },
        { en: 'Call an ambulance', native: 'เรียกรถพยาบาล', say: 'riak rot pha-ya-baan' },
        { en: 'Hospital', native: 'โรงพยาบาล', say: 'rong pha-ya-baan' },
        { en: 'Pharmacy', native: 'ร้านขายยา', say: 'raan khai ya' },
        { en: 'My child is sick', native: 'ลูกไม่สบาย', say: 'luk mai sabai' },
        { en: 'Call the tourist police', native: 'เรียกตำรวจท่องเที่ยว', say: 'riak tamruat thong-tiao' }
      ] }
    ],
    signs: [
      ['ทางออก', 'thang ok', 'Exit'],
      ['ทางเข้า', 'thang khao', 'Entrance'],
      ['ห้องน้ำ', 'hong nam', 'Toilet'],
      ['ชาย / หญิง', 'chai / ying', 'Men / women'],
      ['เปิด / ปิด', 'poet / pit', 'Open / closed'],
      ['ห้าม', 'ham', 'Forbidden'],
      ['อันตราย', 'antarai', 'Danger'],
      ['โรงพยาบาล', 'rong phayaban', 'Hospital'],
      ['ตำรวจ', 'tamruat', 'Police'],
      ['เจ', 'jay', 'Vegan, in the Buddhist sense. A yellow and red sign on a food stall.'],
      ['เผ็ด', 'phet', 'Spicy'],
      ['ระวัง', 'rawang', 'Caution, watch out'],
      ['ท่าเรือ', 'tha ruea', 'Pier, ferry terminal'],
      ['น้ำดื่ม', 'nam duem', 'Drinking water']
    ],
    tips: [
      'Download the Thai offline pack before you land. Thai script has no word spaces and the camera translator handles it far better than any phrasebook.',
      'Have your hotel write your destination in Thai and photograph it. Tones mean a spoken place name often fails where the written one always works.',
      'Use Grab instead of talking to taxi drivers. It removes the single most common point of friction in Thailand.',
      '"Mai phet" is the most valuable phrase you will learn. Say it, then say it again, and still expect heat.',
      'Learn "khrap" or "kha" at the end of sentences. It costs nothing and changes how every interaction goes.'
    ]
  },

  scenarios: [
    { situation: 'You are scammed, robbed or in trouble',
      steps: [
        'Call the Tourist Police on 1155 first. Free, 24 hours, English-speaking, and set up specifically for this.',
        'They will meet you or send you to the right station, and will interpret for the report.',
        'Get the written police report for your insurer, and photograph it.',
        'For a jet ski or motorbike damage claim where you are being surrounded and pressured, call 1155 on the spot rather than paying. That alone usually ends it.'
      ] },
    { situation: 'Someone needs medical care',
      steps: [
        'Call 1669 for an ambulance, or go directly to a private hospital, which is usually faster.',
        'Bumrungrad and Bangkok Hospital in Bangkok, Bangkok Hospital Phuket and Chiang Mai Ram have international departments with English-speaking staff.',
        'Expect to pay or show an insurance guarantee on arrival. Call your insurer as you travel there.',
        'On an island, the clinic will stabilise and transfer to the mainland. That evacuation is what your insurance is really for.'
      ] },
    { situation: 'Heat is affecting someone',
      steps: [
        'Get them into air conditioning. Malls, 7-Elevens and hotel lobbies are all freezing and nobody minds.',
        'Rehydration salts from any 7-Eleven, not just water. Plain water does not replace salt.',
        'In children, heat exhaustion looks like unusual quietness, refusing to drink and flushed skin rather than complaining.',
        'If someone stops sweating, becomes confused, or vomits repeatedly, that is heatstroke. Call 1669.'
      ] },
    { situation: 'A monkey or dog has bitten or scratched someone',
      steps: [
        'Wash the wound with soap and running water for fifteen minutes, immediately. This matters more than anything else you do.',
        'Go to a hospital the same day. Rabies is present in Thailand and post-exposure treatment must begin quickly.',
        'Treatment is available at any major hospital and is routine here.',
        'Keep children away from monkeys at temples entirely. They approach because they are used to taking food, and they bite.'
      ] },
    { situation: 'Your passport is lost or stolen',
      steps: [
        'Call 1155 and file a police report. You cannot get a replacement without it.',
        'Contact your embassy in Bangkok, or the Chiang Mai consulate if you are in the north.',
        'You will also need to visit Thai immigration to replace the entry stamp before you can leave the country.',
        'Start the same day. The immigration step adds time that people do not expect.'
      ] }
  ],

  links: [
    { label: 'US travel advisory for Thailand (live)', url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/thailand-travel-advisory.html' },
    { label: 'CDC travel health: Thailand', url: 'https://wwwnc.cdc.gov/travel/destinations/traveler/none/thailand' },
    { label: 'UK FCDO advice: Thailand', url: 'https://www.gov.uk/foreign-travel-advice/thailand' },
    { label: 'Thailand Digital Arrival Card', url: 'https://tdac.immigration.go.th/' },
    { label: 'Tourism Authority of Thailand', url: 'https://www.tourismthailand.org/' }
  ]
});
