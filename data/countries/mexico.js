/* Mexico: full dossier. */
window.TRAVEL.data.register({
  code: 'MX',
  name: 'Mexico',
  reviewed: '2026',
  tagline: 'Safety here is a question about specific states, not about the country. Read the state-by-state advisory before anything else.',

  languageBarrier: {
    level: 'moderate',
    summary: 'Spanish is phonetic and the most studied second language in the US, so many visitors arrive with some. English is common in Cancún, Los Cabos, Puerto Vallarta and the tourist parts of Mexico City, and thin everywhere else, including most of Oaxaca and the colonial interior.',
    whatWorks: [
      'Spanish reads exactly as written. Five pure vowels, no silent letters except h.',
      'Market stalls and taquerías show you the food. Point and count on your fingers.',
      'Mexicans are patient with bad Spanish and will meet you halfway more readily than almost anywhere.',
      'Google Translate camera handles menus, bus signs and pharmacy boxes.'
    ],
    hardMoments: [
      'Negotiating anything: taxi fares, market prices, a changed hotel booking.',
      'Bus stations, where destinations and times are announced only in Spanish.',
      'Anything involving police or officialdom, where you want the embassy on the phone.'
    ]
  },

  overview: {
    intro: 'Mexico is enormous and generalisations about it are useless. Yucatán and Mexico City are statistically safer than many US cities; parts of Guerrero, Michoacán and Tamaulipas are under do-not-travel warnings. The food is some of the best in the world and the archaeology is extraordinary. Plan around the heat, the altitude and the state-level advisories, and the rest is easy.',
    bestTime: 'November to April is dry and comfortable almost everywhere. May is brutally hot inland. June to October is hurricane season on both coasts, wettest from August.',
    avoidDates: 'Semana Santa (Easter week) and Christmas to New Year, when domestic travel peaks and coastal prices double. Hurricane risk on the Caribbean coast peaks in September.',
    timeZone: 'Mostly UTC-6 (Mexico City). Mexico abolished daylight saving in most of the country in 2022, so the gap to US time changes twice a year.',
    typicalTrip: '10 days for Mexico City plus Oaxaca, or the Yucatán circuit of Mérida, Valladolid and the coast. Do not try to combine the Pacific and Caribbean coasts in one trip.',
    withKids: 'Warm, welcoming and genuinely child-centred. Families eat out together late, children are fussed over, and most food is mild unless you add the salsa.'
  },

  entry: {
    note: 'For US passport holders. Rules differ by nationality; confirm on the official links.',
    rows: [
      ['Visa', 'Not required for tourism up to 180 days for US, Canadian, UK, EU, Australian and Japanese passport holders.'],
      ['Passport validity', 'Must be valid for the duration of your stay.'],
      ['Entry record', 'The paper FMM tourist card has been replaced at most airports by a digital record and a stamp. The officer writes the number of days granted in your passport. Check it: they do not always give 180.'],
      ['Children', 'Children travelling with one parent or without parents may be asked for a notarised consent letter. Rules are inconsistently enforced but the refusal happens at the airport, so carry one.'],
      ['Tourist tax', 'Quintana Roo (Cancún, Tulum, Playa del Carmen) charges a visitor tax paid online. Some states add their own.']
    ],
    links: [
      { label: 'Mexican National Migration Institute', url: 'https://www.inm.gob.mx/' },
      { label: 'Visitax for Quintana Roo', url: 'https://www.visitax.gob.mx/' }
    ]
  },

  money: {
    currency: 'Mexican peso (MXN, $). Prices are written with a dollar sign, which catches people out.',
    cards: 'Cards work in hotels, supermarkets, chain restaurants and tourist areas. Markets, taquerías, small towns, collectivos and most archaeological sites are cash only. Carry small notes: nobody can change a 500.',
    atms: 'Use ATMs inside a bank branch during opening hours, never a standalone machine on the street. Always decline the machine\'s currency conversion. Card skimming is a genuine and persistent problem.',
    tipping: 'Expected, unlike Spain. 10 to 15% in restaurants, 20 to 50 pesos per bag for porters, and a few pesos for the person who bags your groceries or watches your car. Check whether "propina" is already added in tourist areas.',
    taxRefund: 'A limited VAT refund exists for tourists at major airports with a minimum spend and card payment. Not worth structuring your shopping around.',
    costs: [
      ['Street tacos, each', '15 to 30 pesos'],
      ['Comida corrida (set lunch)', '80 to 150 pesos'],
      ['Family dinner, mid-range restaurant', '600 to 1,200 pesos'],
      ['Chichén Itzá entry, foreign adult', 'about 700 pesos combined'],
      ['Mexico City metro single', '5 pesos'],
      ['Uber across Mexico City', '80 to 200 pesos']
    ]
  },

  connectivity: {
    sim: 'Telcel has by far the best coverage, including at ruins and on highways. An eSIM from Telcel or an international provider is simplest. Avoid relying on AT&T Mexico outside cities.',
    wifi: 'Good in hotels and cafés in cities, unreliable on the coast and absent in rural Yucatán and Oaxaca.',
    apps: [
      { name: 'Uber or DiDi', why: 'In Mexico City this is a safety measure, not a convenience: the trip is tracked and you never negotiate a fare.' },
      { name: 'Google Maps', why: 'Good for driving and city transit. Download offline maps for the Yucatán where signal drops.' },
      { name: 'Google Translate', why: 'Camera mode for menus and signs; offline Spanish pack for the ruins.' },
      { name: 'Mi Policía or 911 app', why: 'The national emergency number is 911 and operates in English in tourist areas.' }
    ]
  },

  transport: {
    headline: 'Fly between regions, use Uber in cities, and take the first-class buses, which are genuinely excellent.',
    items: [
      { name: 'First-class buses (ADO, ETN, Primera Plus)', detail: 'Reclining seats, air conditioning, films, bathrooms and online booking. Far better than intercity buses in most of the world and the standard way to move around the Yucatán and the colonial interior.' },
      { name: 'Uber and DiDi', detail: 'In Mexico City, use these rather than hailing a street taxi. The ride is tracked, the fare is fixed, and you avoid the small but real risk of an express kidnapping from a hailed cab. In Cancún, Uber has a long-running conflict with the taxi union, so check locally.' },
      { name: 'Mexico City metro', detail: 'Five pesos a ride, enormous, and packed at rush hour. Front carriages are reserved for women and children during busy periods and that rule is enforced.' },
      { name: 'Driving', detail: 'Mexican law requires Mexican liability insurance; your home policy is not valid. Toll roads (cuota) are expensive and far safer and faster than the free roads (libre). Do not drive between cities after dark anywhere in the country.' },
      { name: 'Colectivos', detail: 'Shared vans running fixed routes for very little money. The practical way to reach cenotes and beaches on the Riviera Maya. Cash only, flag them down on the roadside.' }
    ]
  },

  etiquette: [
    { rule: 'Greet people before you ask for anything.', why: '"Buenos días" first, then the question. Skipping it is read as rude in a way it is not in the US.' },
    { rule: 'Use "mande" or "disculpe", not "qué", when you did not hear something.', why: '"Qué?" alone sounds sharp.' },
    { rule: 'Tip the people who are not on a payroll.', why: 'Grocery baggers, car watchers and musicians often work on tips alone.' },
    { rule: 'Ask before photographing people, especially in indigenous communities in Oaxaca and Chiapas.', why: 'Some communities prohibit it outright and the signs are posted.' },
    { rule: 'Do not call yourself American in a way that excludes Mexicans.', why: 'Mexico is in North America. "Estadounidense" is the precise word.' }
  ],

  safety: {
    overall: 'This is the one country where you must read the advisory at state level before you book anything. The US State Department rates each of the 32 states separately, and they range from "exercise normal precautions" to "do not travel". Tourist destinations in Yucatán, Quintana Roo, Mexico City, Oaxaca city and Baja California Sur are visited safely by millions of families a year. Some other states are genuinely dangerous.',
    emergencyNotes: 'Dial 911, free from any phone, with English-speaking operators in tourist areas. There is also a dedicated tourist assistance line, 078, for lost documents, complaints and road help.',
    hazards: [
      { name: 'Regional crime', what: 'Cartel violence is concentrated in specific states and is almost never aimed at tourists, but bystanders are hurt. Check the state-level advisory and take it seriously: it names specific municipalities, not vague regions.' },
      { name: 'Road travel at night', what: 'The single most repeated piece of advice from every government: do not drive between cities after dark, anywhere in Mexico. Unlit roads, livestock, unmarked topes (speed bumps) and roadblocks.' },
      { name: 'Altitude in Mexico City', what: '2,240m. Expect breathlessness, poor sleep and headaches for the first two days, worse for children and anyone over 65. Take the first day slowly and drink more water than feels necessary.' },
      { name: 'Heat and sun on the Yucatán', what: 'Chichén Itzá and Uxmal have no shade and routinely exceed 35C with high humidity. Arrive at opening, leave by noon.' },
      { name: 'Cenotes and riptides', what: 'Cenotes are deep, cold and have no shallow end in many cases. Lifeguards are not universal. On the Pacific coast, riptides are strong and drownings are common.' }
    ],
    scams: [
      'ATM skimming. Use machines inside bank branches only, and check your account during the trip.',
      'Taxi drivers in Cancún and Mexico City quoting a fare "because the meter is broken". Use Uber or an authorised airport taxi booked at a desk inside the terminal.',
      'Timeshare presentations disguised as a free tour, transfer or activity, usually pitched at the airport or hotel lobby.',
      'Police asking for an on-the-spot fine. Ask for the written ticket (infracción) and say you will pay at the station. Note the officer\'s badge number.',
      'Jet ski and rental damage claims on the coast. Photograph everything before you take it out.'
    ],
    lostAndFound: 'Report theft to the state prosecutor\'s office (Ministerio Público) for the written denuncia, which insurers and consulates require. The tourist assistance line 078 will help you find the right office and often provides an interpreter.',
    withKids: 'Mexico is affectionate toward children and they are welcome everywhere, late. The real risks are sun, water and road safety rather than crime. Car seats are not supplied by most taxis or rental agencies, so bring your own if that matters to you.',
    advisoryNote: 'Mexico\'s advisory is issued state by state and changes regularly. The single most important link on this page is the advisory below: open it and search for the specific states you plan to visit.'
  },

  health: {
    water: 'Do not drink the tap water anywhere, including Mexico City. Hotels supply purified water (agua purificada), and it is cheap everywhere. Ice in hotels, restaurants and established bars is made from purified water and is fine; ice from a street cart is a gamble.',
    food: 'Street food is often safer than restaurant food because you watch it being cooked in front of you. The rule is heat and turnover: a busy stall cooking to order is low risk, a lukewarm buffet is high risk. Avoid raw salad and unpeeled fruit washed in tap water.',
    vaccines: 'Hepatitis A and typhoid are commonly recommended for travel outside resorts. Check the CDC page, and discuss with a travel clinic six weeks before you go.',
    medications: {
      warning: 'Mexico is relaxed about most medication, with two things to know.',
      points: [
        'Many drugs that need a prescription at home are sold over the counter here, including antibiotics. That is convenient and also a reason to be careful about self-prescribing.',
        'Controlled substances, including some ADHD medication and strong painkillers, need your prescription and ideally a doctor\'s letter. Carry them in labelled original packaging.',
        'Counterfeit pills are a documented and lethal problem in pharmacies in tourist areas, particularly anything sold as oxycodone, Xanax or Adderall. Buy only from a major chain pharmacy, and never from a street vendor.',
        'Bring your own children\'s fever and rehydration medicine so you are not reading an unfamiliar label at 3am.'
      ]
    },
    pharmacy: 'Farmacias are everywhere and many have a consulting doctor attached for about 50 pesos, who will see you immediately for a minor problem. Farmacias del Ahorro, Guadalajara and Benavides are the large reliable chains.',
    doctors: 'Private hospitals in Mexico City, Mérida, Guadalajara and Cancún are excellent and much cheaper than US equivalents, but they expect payment or an insurance guarantee up front. Public clinics will stabilise an emergency.',
    insurance: 'Essential. Get a policy that covers medical evacuation, which matters on the coast and in rural areas where the nearest serious hospital can be hours away.',
    allergies: 'Awareness is limited and cross-contamination is common. The ingredients to ask about are nuts, because mole sauces are often built on almonds, peanuts or sesame; dairy, which is in more dishes than you would guess; and lard (manteca), which is used in refried beans, tamales and tortillas in ways that catch vegetarians out. Corn tortillas are naturally gluten free, which makes Mexico genuinely easy for coeliacs as long as you avoid flour tortillas.'
  },

  embassy: {
    country: 'United States',
    note: 'Verified against State Department listings. Confirm on the official site before relying on it. Mexico has one of the largest US consular networks in the world.',
    main: {
      name: 'U.S. Embassy Mexico City',
      address: 'Paseo de la Reforma 305, Colonia Cuauhtémoc, 06500 Mexico City',
      phone: '+52 55 5080 2000',
      afterHours: '+52 55 5080 2000 then extension 0 for the duty officer',
      email: 'ACSMexicoCity@state.gov',
      url: 'https://mx.usembassy.gov/',
      covers: 'Mexico City and the centre of the country.'
    },
    others: [
      { name: 'U.S. Consular Agency Cancún and Playa del Carmen', note: 'Covers Quintana Roo and the Riviera Maya.', url: 'https://mx.usembassy.gov/embassy-consulates/' },
      { name: 'U.S. Consulate General Mérida', note: 'Covers Yucatán and Campeche.', url: 'https://mx.usembassy.gov/embassy-consulates/merida/' },
      { name: 'U.S. Consulate General Guadalajara', note: 'Covers Jalisco and the west.', url: 'https://mx.usembassy.gov/embassy-consulates/guadalajara/' },
      { name: 'U.S. Consular Agency Oaxaca, Los Cabos and Puerto Vallarta', note: 'Limited services in the main tourist regions.', url: 'https://mx.usembassy.gov/embassy-consulates/' }
    ],
    otherNationalities: [
      { country: 'United Kingdom', url: 'https://www.gov.uk/world/organisations/british-embassy-mexico-city' },
      { country: 'Canada', url: 'https://www.international.gc.ca/country-pays/mexico-mexique/mexico.aspx' },
      { country: 'Australia', url: 'https://mexico.embassy.gov.au/' }
    ]
  },

  food: {
    intro: 'Mexican food is not inherently spicy. The heat lives in the salsa on the table, which means you control it completely. Corn, not wheat, is the base of most of it, which makes Mexico unusually easy for coeliacs. The hidden ingredients to ask about are lard in beans and tamales, which surprises vegetarians, and nuts or seeds in mole, which can be a serious problem.',
    survival: {
      title: 'Quesadillas, beans, rice and fruit will carry any child through',
      body: 'A plain cheese quesadilla on a corn tortilla exists in every restaurant and market in the country, costs almost nothing, and contains nothing surprising. Add rice, beans, grilled chicken and a fruit shake and you have a complete week of meals for an unadventurous eater. Agua frescas and licuados (fruit blended with water or milk) are the easiest way to get fluid into children in the heat.'
    },
    orderingWithoutLanguage: [
      'Taquerías show you the meats on the griddle. Point and say how many: "dos de pollo" is two chicken.',
      'The comida corrida is a fixed set lunch: soup, rice, a main, a drink, for 80 to 150 pesos. Written on a board, served fast, no menu needed.',
      '"Sin picante" means not spicy, and "la salsa aparte" means salsa on the side. Both are understood everywhere.',
      '"Sin manteca" (without lard) is the question vegetarians need. "¿Tiene manteca?" asks whether a dish has it.',
      'Markets have a food section with stalls cooking to order and everything visible on the counter. The best and cheapest eating in Mexico.'
    ],
    allergyCard: {
      intro: 'Show this before ordering. Allergy awareness is limited, so be explicit and be willing to walk away.',
      local: 'Tengo alergia grave. No puedo comer: ____. Tampoco en la salsa, el caldo, el aceite ni la manteca. ¿Puede preguntar en la cocina, por favor? Es muy importante.',
      english: 'I have a severe allergy. I cannot eat: ____. Not in the salsa, stock, oil or lard either. Could you ask in the kitchen, please? It is very important.',
      words: [
        ['Nuts', 'nueces', 'NWEH-ses'], ['Peanut', 'cacahuate', 'ka-ka-WA-teh'],
        ['Sesame', 'ajonjolí', 'a-hon-ho-LEE'], ['Dairy and milk', 'lácteos', 'LAK-teh-os'],
        ['Cheese', 'queso', 'KEH-so'], ['Egg', 'huevo', 'WEH-vo'], ['Gluten and wheat', 'gluten, trigo', 'GLOO-ten, TREE-go'],
        ['Fish', 'pescado', 'pes-KA-do'], ['Shellfish and prawn', 'mariscos, camarón', 'ma-REES-kos, ka-ma-RON'],
        ['Pork', 'puerco', 'PWER-ko'], ['Lard', 'manteca', 'man-TEH-ka'], ['Chicken', 'pollo', 'PO-yo'],
        ['Beef', 'res', 'res'], ['Meat', 'carne', 'KAR-neh'], ['Chili and spice', 'chile, picante', 'CHEE-leh, pee-KAN-teh'],
        ['Soy', 'soya', 'SO-ya']
      ]
    },
    dishes: [
      { id: 'tacos-pastor', name: 'Tacos al pastor', native: 'Tacos al pastor', blurb: 'Pork marinated in chili and achiote, stacked on a vertical spit with a pineapple on top, shaved onto small corn tortillas with onion and coriander. The best thing to eat in Mexico City.',
        contains: ['pork'], mayContain: ['gluten'], traits: ['street', 'cheap'], spice: 1,
        where: 'Taquerías everywhere, best after 9pm', price: '$',
        order: 'The meat itself is mild. The heat comes from the salsa you add, so take it on the side.' },
      { id: 'quesadilla', name: 'Quesadilla', native: 'Quesadilla', blurb: 'Melted cheese folded in a tortilla, griddled. In Mexico City, asking for a quesadilla without specifying cheese genuinely gets you one without cheese, which is a national joke.',
        contains: ['dairy'], mayContain: ['gluten', 'lard'], omit: { dairy: 'Order the filling without cheese: mushroom, squash flower or beans.' },
        traits: ['plain', 'kid', 'veg', 'cheap'], spice: 0, where: 'Everywhere', price: '$',
        order: 'Ask for a corn tortilla (de maíz) rather than flour (de harina) and it is gluten free.' },
      { id: 'guacamole', name: 'Guacamole', native: 'Guacamole', blurb: 'Avocado mashed with lime, onion, coriander and chili, often made at the table. Nothing like the supermarket version.',
        contains: [], mayContain: ['spicy'], traits: ['plain', 'kid', 'veg'], spice: 1, where: 'Everywhere', price: '$$',
        order: 'Ask for it "sin chile" and it is mild enough for any child.' },
      { id: 'elote', name: 'Elote and esquites', native: 'Elote', blurb: 'Grilled corn on the cob slathered in mayonnaise, cheese, lime and chili powder. Esquites is the same thing in a cup, off the cob, with a spoon.',
        contains: ['dairy', 'egg'], mayContain: ['spicy'], omit: { dairy: 'Ask for it "solo con limón y sal": just lime and salt.' },
        traits: ['kid', 'street', 'veg'], spice: 1, where: 'Street carts, evenings', price: '$' },
      { id: 'chilaquiles', name: 'Chilaquiles', native: 'Chilaquiles', blurb: 'Fried tortilla pieces simmered in red or green salsa until half soft, topped with cream, cheese, onion and often an egg. The national breakfast.',
        contains: ['dairy', 'spicy'], mayContain: ['egg', 'chicken', 'lard'], traits: [], spice: 2,
        where: 'Every breakfast place', price: '$',
        order: 'Green salsa is usually hotter than red. Ask for the salsa on the side and the children can have plain tortilla chips with cheese.' },
      { id: 'mole', name: 'Mole poblano', native: 'Mole poblano', blurb: 'A sauce of twenty-odd ingredients including chilies, chocolate, nuts, seeds and spices, cooked for hours and served over chicken or turkey. Dark, complex and barely sweet.',
        contains: ['nuts', 'peanuts', 'sesame', 'chicken', 'gluten'], mayContain: ['dairy', 'lard'],
        traits: ['adventurous'], spice: 2, where: 'Puebla and Oaxaca above all', price: '$$',
        order: 'Almost every mole contains nuts, peanuts or sesame. It is the single most dangerous dish in Mexico for a nut allergy, and the ingredients are never listed.' },
      { id: 'tamales', name: 'Tamales', native: 'Tamales', blurb: 'Corn dough steamed in a corn husk or banana leaf, with meat, cheese or chili inside. Breakfast food, sold from steaming pots on street corners before 9am.',
        contains: ['lard'], mayContain: ['pork', 'chicken', 'dairy', 'spicy'], traits: ['plain', 'street', 'cheap'], spice: 1,
        where: 'Street carts in the morning', price: '$',
        order: 'The dough is almost always made with lard, which rules it out for vegetarians even when the filling is cheese or sweet.' },
      { id: 'pozole', name: 'Pozole', native: 'Pozole', blurb: 'A big hominy and pork soup served with a plate of raw cabbage, radish, onion and lime to add yourself. Sunday food, and a whole meal.',
        contains: ['pork'], mayContain: ['spicy', 'chicken'], traits: [], spice: 1, where: 'Everywhere, especially Thursdays and weekends', price: '$$',
        order: 'White pozole is mild; red and green have chili cooked in. Chicken versions are common.' },
      { id: 'cochinita', name: 'Cochinita pibil', native: 'Cochinita pibil', blurb: 'Pork marinated in sour orange and achiote, wrapped in banana leaf and slow-roasted until it falls apart. Yucatán\'s great dish, served with pickled red onion.',
        contains: ['pork'], mayContain: ['gluten'], traits: ['plain'], spice: 0, where: 'Yucatán, Mérida especially', price: '$$',
        order: 'Mild on its own. The habanero salsa served alongside is genuinely very hot: keep it away from children.' },
      { id: 'pollo-asado-mx', name: 'Grilled chicken and arroz', native: 'Pollo asado con arroz', blurb: 'Marinated grilled chicken with rice and beans. The plainest thing on any Mexican menu, and the reliable order for a child.',
        contains: ['chicken'], mayContain: ['lard'], traits: ['plain', 'kid'], spice: 0, where: 'Every restaurant and rotisserie', price: '$' },
      { id: 'frijoles', name: 'Refried beans and rice', native: 'Frijoles refritos', blurb: 'Pinto or black beans cooked soft, mashed and fried, served alongside almost everything.',
        contains: [], mayContain: ['lard', 'pork', 'dairy'], traits: ['plain', 'kid', 'cheap'], spice: 0, where: 'With every meal', price: '$',
        order: 'Traditionally fried in lard. "¿Los frijoles tienen manteca?" is the question for a vegetarian.' },
      { id: 'ceviche', name: 'Ceviche', native: 'Ceviche', blurb: 'Raw fish or prawn cured in lime juice with onion, tomato, coriander and chili, eaten with tostadas. Coastal, cold and excellent in heat.',
        contains: ['raw_fish', 'fish'], mayContain: ['shellfish', 'spicy'], traits: ['adventurous'], spice: 1,
        where: 'Both coasts', price: '$$',
        order: 'The lime cures but does not cook the fish. Eat it only where turnover is high and it is kept cold.' },
      { id: 'churros-mx', name: 'Churros', native: 'Churros', blurb: 'Fried dough in sugar and cinnamon, sometimes filled with caramel. Sold from stands and from the famous all-night churrerías in Mexico City.',
        contains: ['gluten'], mayContain: ['dairy', 'egg'], traits: ['kid', 'plain', 'street'], spice: 0, where: 'Street stands, markets, El Moro in CDMX', price: '$' },
      { id: 'agua-fresca', name: 'Aguas frescas and licuados', native: 'Agua fresca', blurb: 'Fruit, water and a little sugar, blended and served cold by the litre: hibiscus, tamarind, horchata, watermelon, lime. Licuados are the same with milk.',
        contains: [], mayContain: ['dairy', 'nuts'], traits: ['kid', 'plain'], spice: 0, where: 'Markets and every restaurant', price: '$',
        order: 'Made with purified water in restaurants and established stalls. Horchata is rice-based and often contains milk.' },
      { id: 'tres-leches', name: 'Pastel de tres leches', native: 'Tres leches', blurb: 'Sponge cake soaked in three kinds of milk, topped with cream. Very sweet, very wet, and on every dessert menu.',
        contains: ['dairy', 'egg', 'gluten'], mayContain: [], traits: ['kid'], spice: 0, where: 'Everywhere', price: '$' },
      { id: 'paletas', name: 'Paletas', native: 'Paletas', blurb: 'Real-fruit ice lollies from a paletería, in flavours from mango with chili to rice pudding. Better than any commercial ice lolly.',
        contains: [], mayContain: ['dairy', 'nuts', 'spicy'], traits: ['kid', 'plain'], spice: 0, where: 'Paleterías in every town', price: '$',
        order: 'Water-based (de agua) are dairy free; cream-based (de leche) are not. The chili-dusted mango ones surprise children.' }
    ],
    chains: [
      { name: 'Market food halls', why: 'Every town has one. Stalls cook to order in front of you, everything is visible, and a family with four different requirements can eat at four stalls and sit together.' },
      { name: 'Any busy taquería', why: 'High turnover means fresh food. A queue of locals is the only hygiene rating you need.' },
      { name: 'Comida corrida places', why: 'Fixed-price set lunches posted on a board, served in minutes, 80 to 150 pesos. The way Mexicans actually eat lunch.' },
      { name: 'Oxxo', why: 'Convenience stores on every corner: purified water, snacks, phone top-ups and clean, predictable packaged food at any hour.' },
      { name: 'Vips, Toks or Sanborns', why: 'Sit-down family chains with picture menus, air conditioning, high chairs and a mix of Mexican and plain western food. Dull, reliable, and sometimes exactly what is needed.' }
    ],
    phrases: [
      { en: 'A table for four, please', native: 'Una mesa para cuatro, por favor', say: 'OO-na MEH-sa PA-ra KWA-tro' },
      { en: 'Not spicy, please', native: 'Sin picante, por favor', say: 'seen pee-KAN-teh por fa-VOR' },
      { en: 'Salsa on the side', native: 'La salsa aparte', say: 'la SAL-sa a-PAR-teh' },
      { en: 'Does this have lard?', native: '¿Tiene manteca?', say: 'tee-EH-neh man-TEH-ka' },
      { en: 'Does this have nuts?', native: '¿Tiene nueces o cacahuate?', say: 'tee-EH-neh NWEH-ses o ka-ka-WA-teh' },
      { en: 'I have a severe allergy', native: 'Tengo una alergia grave', say: 'TEN-go OO-na a-LER-hee-a GRA-veh' },
      { en: 'Is the water purified?', native: '¿El agua es purificada?', say: 'el A-gwa es poo-ree-fee-KA-da' },
      { en: 'The bill, please', native: 'La cuenta, por favor', say: 'la KWEN-ta por fa-VOR' }
    ]
  },

  activities: [
    { id: 'teotihuacan', name: 'Teotihuacán', native: 'Teotihuacán', city: 'Near Mexico City',
      blurb: 'A pre-Aztec city with two enormous pyramids on a three-kilometre avenue. Nobody knows who built it. An hour from Mexico City and the best archaeology within reach of the capital.',
      ages: { min: 0, bestFrom: 6 }, energy: 'high', hours: 'half a day', indoor: false, cost: '$',
      language: 'some', stroller: false, wheelchair: 'partial', stairs: true, heatExposed: true, bookAhead: 'no',
      accessNote: 'Dirt and gravel over a large site with no shade. Pyramid climbing is restricted and varies.',
      tags: ['history', 'views'],
      tips: ['Arrive at opening. By 11am the sun on the avenue is relentless and there is nowhere to hide from it.', 'Climbing access to the pyramids has been restricted at times for conservation. Check before you build the day around it.', 'A hot air balloon at sunrise over the site is the splurge, and it is genuinely worth it.'] },

    { id: 'chichen', name: 'Chichén Itzá', native: 'Chichén Itzá', city: 'Yucatán',
      blurb: 'The Maya pyramid of Kukulcán, where the spring equinox throws a serpent-shaped shadow down the staircase. Also the most crowded and most aggressively vendored site in Mexico.',
      ages: { min: 0, bestFrom: 7 }, energy: 'moderate', hours: '3 hours', indoor: false, cost: '$$',
      language: 'some', stroller: 'partial', wheelchair: 'partial', heatExposed: true, crowded: true, bookAhead: 'recommended',
      tags: ['history', 'views'],
      tips: ['Be at the gate for opening at 8am. Tour buses from Cancún arrive at 10.30 and it becomes unbearable.', 'You cannot climb the pyramid. Nobody has been allowed to since 2008.', 'Pair it with a cenote on the way back; Ik Kil is the famous one and Yokdzonot is the quieter, community-run alternative.'] },

    { id: 'cenote', name: 'Swimming in a cenote', native: 'Cenote', city: 'Yucatán and Quintana Roo',
      blurb: 'Freshwater sinkholes in the limestone, some open to the sky with vines hanging in, some in caves lit by a single shaft of light. The water is clear, cold and very deep.',
      ages: { min: 0, bestFrom: 5 }, energy: 'moderate', hours: '2 to 3 hours', indoor: false, cost: '$',
      language: 'easy', stroller: false, wheelchair: false, stairs: true, bookAhead: 'no',
      accessNote: 'Access is usually a steep wooden or stone staircase into the ground.',
      tags: ['water', 'nature'], familyPick: true,
      tips: ['Life jackets are compulsory at most cenotes and included in the entry fee. Many have no shallow end at all.', 'Sunscreen and insect repellent are banned in the water and rinse showers are provided. Bring none, or apply after.', 'Community-run cenotes away from the main road are cheaper, emptier and better than the famous ones.'] },

    { id: 'xochimilco', name: 'Xochimilco trajineras', native: 'Xochimilco', city: 'Mexico City',
      blurb: 'Painted flat-bottomed boats punted through the surviving Aztec canals, with floating mariachi bands and food boats pulling alongside. Loud, chaotic and enormous fun.',
      ages: { min: 0 }, energy: 'low', hours: '2 to 3 hours', indoor: false, cost: '$$',
      language: 'some', stroller: 'partial', wheelchair: 'partial', motion: true, heatExposed: true, bookAhead: 'no',
      tags: ['water', 'food', 'relax'], familyPick: true,
      tips: ['Boats are hired by the hour at a posted rate, for the whole boat not per person. Agree the price and the duration before you step on.', 'Weekends are a party; weekdays are calm and much better with small children.', 'Bring cash for the food and music boats, and your own drinks if you prefer.'] },

    { id: 'frida', name: 'Frida Kahlo Museum', native: 'Museo Frida Kahlo', city: 'Mexico City (Coyoacán)',
      blurb: 'The cobalt-blue house where Kahlo was born, lived and died, with her studio, wheelchair at the easel, and corsets still in place.',
      ages: { min: 0, bestFrom: 10 }, energy: 'low', hours: '1.5 hours', indoor: true, cost: '$$',
      language: 'easy', stroller: false, wheelchair: 'partial', crowded: true, bookAhead: 'required',
      tags: ['museum', 'history'],
      tips: ['Tickets must be bought online, dated and timed, often days ahead. There is effectively no walk-up option.', 'The house is small and the timed slots still feel crowded. Take the earliest one.', 'Coyoacán around it is the nicest neighbourhood in the city for a slow afternoon and a market lunch.'] },

    { id: 'lucha', name: 'Lucha libre', native: 'Lucha libre', city: 'Mexico City',
      blurb: 'Masked wrestling as pantomime: acrobatics, heroes and villains, a crowd that heckles in rhyme. Two hours of pure spectacle that needs no Spanish at all.',
      ages: { min: 0, bestFrom: 7 }, energy: 'low', hours: '2 to 3 hours', indoor: true, cost: '$',
      language: 'easy', stroller: false, wheelchair: 'partial', evening: true, crowded: true, bookAhead: 'recommended',
      tags: ['pop_culture', 'hands_on'], familyPick: true,
      tips: ['Arena México on Friday nights is the big one; Arena Coliseo is smaller and rowdier.', 'Buy a mask outside for your children. Everyone does.', 'The heckling is extremely crude. Nobody under about ten will understand it, which is probably for the best.'] },

    { id: 'oaxaca-cooking', name: 'Oaxaca market and cooking class', native: 'Clase de cocina', city: 'Oaxaca',
      blurb: 'Shop in the market with a cook, then spend the afternoon grinding chilies on a stone metate and making mole and tortillas from scratch.',
      ages: { min: 0, bestFrom: 8 }, energy: 'moderate', hours: '4 to 5 hours', indoor: true, cost: '$$',
      language: 'easy', stroller: 'partial', wheelchair: 'partial', bookAhead: 'required',
      tags: ['food', 'hands_on', 'shopping'], familyPick: true,
      tips: ['Tell them about nut allergies when booking: mole is built on nuts and seeds and cannot simply be adapted.', 'Making tortillas by hand holds children\'s attention far longer than anything else in the day.', 'The market walk is half the value. Chapulines (grasshoppers) will be offered, and refusing is fine.'] },

    { id: 'monarch', name: 'Monarch butterfly reserves', native: 'Santuario de la mariposa monarca', city: 'Michoacán and Estado de México',
      blurb: 'Millions of monarchs overwintering in fir forests at 3,000m, so dense the branches bend and the air is loud with wings. Only from roughly November to March.',
      ages: { min: 0, bestFrom: 8 }, energy: 'high', hours: 'full day', indoor: false, cost: '$',
      language: 'some', stroller: false, wheelchair: false, bookAhead: 'recommended',
      accessNote: 'A steep 1 to 2km climb at 3,000m altitude. Horses can be hired for part of it.',
      tags: ['animals', 'nature'],
      tips: ['Season only: roughly mid-November to mid-March, best in February.', 'The altitude makes the climb much harder than the distance suggests. Hire a horse for anyone who will struggle.', 'Check the state advisory for Michoacán before planning this; the Estado de México sanctuaries are an alternative.'] },

    { id: 'merida-colonial', name: 'Mérida and the colonial Yucatán', native: 'Mérida', city: 'Yucatán',
      blurb: 'A relaxed colonial city with free music in the squares most evenings, pastel streets, and the best Yucatecan food anywhere. The easiest base in Mexico with children.',
      ages: { min: 0 }, energy: 'low', hours: '2 to 3 days', indoor: false, cost: '$',
      language: 'some', stroller: true, wheelchair: 'partial', heatExposed: true, bookAhead: 'no',
      tags: ['history', 'food', 'relax', 'shopping'], familyPick: true,
      tips: ['Free concerts and dancing in the main square happen most nights; the Monday vaquería is the one to catch.', 'Mérida is consistently rated among the safest cities in Mexico, which makes it a good first stop for a nervous family.', 'Use it as a base for Uxmal, Celestún flamingos and the cenote towns rather than moving hotels constantly.'] },

    { id: 'snorkel-reef', name: 'Snorkelling the Mesoamerican reef', native: 'Arrecife', city: 'Cozumel, Akumal, Puerto Morelos',
      blurb: 'The second-largest barrier reef in the world, reachable from shore in places, with turtles grazing in the seagrass at Akumal.',
      ages: { min: 0, bestFrom: 6 }, energy: 'moderate', hours: 'half a day', indoor: false, cost: '$$',
      language: 'easy', stroller: false, wheelchair: false, motion: true, heatExposed: true, bookAhead: 'recommended',
      tags: ['water', 'animals', 'nature'], familyPick: true,
      tips: ['Only reef-safe sunscreen is permitted, and it is enforced at Akumal and in the national parks.', 'Akumal now requires a guide and a life vest to swim with the turtles, with numbers capped.', 'Sargassum seaweed blooms can cover the Caribbean beaches from April to August. Check recent reports before booking a beach-dependent trip.'] }
  ],

  language: {
    script: 'Latin alphabet with ñ and accented vowels. Everything is pronounced as written, so you can read aloud from a sign or menu and be understood even without knowing the meaning.',
    pronunciation: 'Five pure vowels. "J" is a throat-clearing h. "Ll" is a y sound. Unlike Spain, "c" before e or i and "z" are a plain s, so cerveza is ser-VEH-sa. Mexican Spanish is spoken more slowly and clearly than Peninsular Spanish, which helps.',
    politeness: 'Mexican Spanish is notably more formal and warmer than Spain\'s. Use "usted" with anyone older or in a service role, greet before asking, and add "por favor" generously. "Mande?" is the polite way to say you did not hear.',
    phrasebook: [
      { group: 'The essential six', items: [
        { en: 'Good morning / good afternoon', native: 'Buenos días / Buenas tardes', say: 'BWEH-nos DEE-as / BWEH-nas TAR-des' },
        { en: 'Thank you very much', native: 'Muchas gracias', say: 'MOO-chas GRA-see-as' },
        { en: 'Excuse me', native: 'Disculpe', say: 'dees-KOOL-peh' },
        { en: 'Please', native: 'Por favor', say: 'por fa-VOR' },
        { en: 'Yes / no', native: 'Sí / No', say: 'see / no' },
        { en: 'I don\'t understand', native: 'No entiendo', say: 'no en-tee-EN-do' }
      ] },
      { group: 'Getting help', items: [
        { en: 'Do you speak English?', native: '¿Habla inglés?', say: 'AH-bla een-GLES' },
        { en: 'Where is the bathroom?', native: '¿Dónde está el baño?', say: 'DON-deh es-TA el BAN-yo' },
        { en: 'How much?', native: '¿Cuánto cuesta?', say: 'KWAN-to KWES-ta' },
        { en: 'Can you write it down?', native: '¿Puede escribirlo?', say: 'PWEH-deh es-kree-BEER-lo' },
        { en: 'I need help', native: 'Necesito ayuda', say: 'neh-seh-SEE-to a-YOO-da' },
        { en: 'Help!', native: '¡Auxilio!', say: 'owk-SEE-lee-o' }
      ] },
      { group: 'Getting about', items: [
        { en: 'How much to…? (before you get in)', native: '¿Cuánto cuesta a…?', say: 'KWAN-to KWES-ta a' },
        { en: 'Please use the meter', native: 'Con taxímetro, por favor', say: 'kon tak-SEE-meh-tro' },
        { en: 'Take me to this address', native: 'Lléveme a esta dirección', say: 'YEH-veh-meh a ES-ta dee-rek-see-ON' },
        { en: 'Two adults, two children', native: 'Dos adultos, dos niños', say: 'dos a-DOOL-tos, dos NEEN-yos' },
        { en: 'Where does the bus to… leave from?', native: '¿De dónde sale el camión a…?', say: 'deh DON-deh SA-leh el ka-mee-ON a' }
      ] },
      { group: 'Medical and trouble', items: [
        { en: 'I need a doctor', native: 'Necesito un médico', say: 'neh-seh-SEE-to oon MEH-dee-ko' },
        { en: 'Call an ambulance', native: 'Llame una ambulancia', say: 'YA-meh OO-na am-boo-LAN-see-a' },
        { en: 'Where is the pharmacy?', native: '¿Dónde hay una farmacia?', say: 'DON-deh eye OO-na far-MA-see-a' },
        { en: 'My child is sick', native: 'Mi hijo está enfermo', say: 'mee EE-ho es-TA en-FER-mo' },
        { en: 'I want to call my embassy', native: 'Quiero llamar a mi embajada', say: 'kee-EH-ro ya-MAR a mee em-ba-HA-da' },
        { en: 'I would like the written ticket', native: 'Quiero la infracción por escrito', say: 'kee-EH-ro la een-frak-see-ON por es-KREE-to' }
      ] }
    ],
    signs: [
      ['Salida', 'sa-LEE-da', 'Exit'],
      ['Entrada', 'en-TRA-da', 'Entrance'],
      ['Jale / Empuje', 'HA-leh / em-POO-heh', 'Pull / push'],
      ['Abierto / Cerrado', 'a-bee-ER-to / ser-RA-do', 'Open / closed'],
      ['Baños / Sanitarios', 'BAN-yos', 'Toilets'],
      ['Damas / Caballeros', 'DA-mas / ka-ba-YEH-ros', 'Women / men'],
      ['Agua purificada', 'A-gwa poo-ree-fee-KA-da', 'Purified water, safe to drink'],
      ['No potable', 'no po-TA-bleh', 'Not drinking water'],
      ['Tope', 'TO-peh', 'Speed bump. Unmarked, vicious, everywhere.'],
      ['Cuota / Libre', 'KWO-ta / LEE-breh', 'Toll road / free road'],
      ['Farmacia', 'far-MA-see-a', 'Pharmacy'],
      ['Urgencias', 'oor-HEN-see-as', 'Emergency department'],
      ['Precaución', 'preh-kow-see-ON', 'Caution'],
      ['Prohibido el paso', 'pro-ee-BEE-do el PA-so', 'No entry']
    ],
    tips: [
      'Mexican Spanish is slower and clearer than Spain\'s, so if you learned Spanish at school you will understand more here than you expect.',
      'Learn the food words before the grammar. "Sin picante", "sin manteca" and "la salsa aparte" do more work than any verb conjugation.',
      'Agree taxi prices before getting in, or use Uber so there is nothing to agree.',
      'Download offline maps and the Spanish translation pack. Signal drops completely between Yucatán towns and inside archaeological sites.'
    ]
  },

  scenarios: [
    { situation: 'A police officer asks for an on-the-spot payment',
      steps: [
        'Stay polite. Ask for the written ticket: "Quiero la infracción por escrito, por favor."',
        'Say you will pay at the station or the bank, which is the lawful process.',
        'Note the officer\'s name, badge number and patrol car number, visibly.',
        'If it continues, call 078, the tourist assistance line, or your consulate. Pressure for a cash payment is not legal and officers know it.'
      ] },
    { situation: 'Someone needs a doctor',
      steps: [
        'Dial 911. Tourist areas have English-speaking operators.',
        'For a minor problem, go to a pharmacy with an attached consulting doctor. You will be seen in minutes for about 50 pesos.',
        'For anything serious, go to a private hospital and expect to pay or guarantee payment up front. Call your insurer as you go.',
        'Keep every receipt and the discharge report for the claim.'
      ] },
    { situation: 'Your passport is lost or stolen',
      steps: [
        'Report it to the Ministerio Público and get the written denuncia.',
        'Call the nearest consulate. Mexico has consulates and consular agencies in Cancún, Mérida, Guadalajara, Oaxaca, Los Cabos and Puerto Vallarta, not just the Mexico City embassy.',
        'You cannot leave the country without a travel document, so start this the same day.',
        'Use the 078 tourist line if you need an interpreter for the police report.'
      ] },
    { situation: 'A hurricane is forecast',
      steps: [
        'Hurricane season runs June to November on both coasts, peaking in September.',
        'Follow your hotel\'s instructions; large resorts have practised plans and designated shelters.',
        'Fill water containers, charge everything and withdraw cash before it arrives: power and card networks go down.',
        'Airlines waive change fees for named storms. Rebook early, before the airport closes rather than after.'
      ] },
    { situation: 'Stomach trouble sets in',
      steps: [
        'Rehydrate first. Oral rehydration salts (suero or Electrolit) are in every pharmacy and convenience store.',
        'Stick to bottled water, plain rice, bananas and toast for 24 hours.',
        'See a doctor if there is blood, a high fever, or if a child stops passing urine. Children dehydrate much faster than adults.',
        'Antibiotics are sold over the counter here, which is not a reason to self-prescribe them.'
      ] }
  ],

  links: [
    { label: 'US travel advisory for Mexico, state by state (live)', url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/mexico-travel-advisory.html' },
    { label: 'CDC travel health: Mexico', url: 'https://wwwnc.cdc.gov/travel/destinations/traveler/none/mexico' },
    { label: 'UK FCDO advice: Mexico', url: 'https://www.gov.uk/foreign-travel-advice/mexico' },
    { label: 'Visitax (Quintana Roo visitor tax)', url: 'https://www.visitax.gob.mx/' },
    { label: 'INAH: archaeological sites and opening hours', url: 'https://www.inah.gob.mx/' }
  ]
});
