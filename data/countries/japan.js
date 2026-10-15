/* Japan: full dossier. See docs/SCHEMA.md for the shape of this object. */
window.TRAVEL.data.register({
  code: 'JP',
  name: 'Japan',
  reviewed: '2026',
  tagline: 'Easy to travel, hard to read. Signage and apps carry you further than language does.',

  languageBarrier: {
    level: 'high',
    summary: 'Japanese uses three writing systems and little of it is guessable. Spoken English is limited outside hotels and major attractions. None of that makes the country hard to travel: the systems are built for people who cannot read them, staff are patient, and a phone camera translates almost everything.',
    whatWorks: [
      'Google Translate with the Japanese pack downloaded. Camera mode reads menus, medicine boxes and signs offline.',
      'Pointing. It is normal and nobody is offended. Point at the photo, hold up fingers for how many.',
      'Written numbers. Write prices, dates and times on paper or a phone screen.',
      'Train station staff at the manned gate. Show them your destination in writing and they will point you to the right platform.',
      'Photo menus and ticket vending machines. Most casual restaurants have one or both.'
    ],
    hardMoments: [
      'Small family restaurants with a handwritten menu and no photos.',
      'Pharmacies, where you need to describe a symptom rather than name a product.',
      'Phone calls, including restaurant reservations and taxi dispatch. Have the hotel call for you.',
      'Rural bus timetables, which are often paper-only and in kanji.'
    ]
  },

  overview: {
    intro: 'Japan is one of the easiest countries in the world to travel with a family who does not speak the language. Trains run to the minute, streets are safe at night, children are welcomed almost everywhere, and tap water is drinkable. The difficulty is not safety or logistics, it is reading and ordering.',
    bestTime: 'Late March to early April for cherry blossom (crowded, expensive). Mid-October to early December for clear skies and autumn colour, the easiest weather for walking. Avoid late July and August: hot and very humid, hard on young children. Mid-June to mid-July is rainy season.',
    avoidDates: 'Golden Week (29 April to 5 May), Obon (mid-August) and New Year (28 December to 4 January). Domestic travel peaks, prices spike and trains sell out.',
    timeZone: 'JST, UTC+9. No daylight saving.',
    typicalTrip: '10 to 14 days covers Tokyo, Kyoto and one more stop (Osaka, Hiroshima or Hakone) at a sane pace. Under 7 days, pick one base.',
    withKids: 'Very easy. Baby changing rooms in every department store and station, kid menus at chain restaurants, strollers accepted on trains outside rush hour, and 24-hour convenience stores for snacks and emergencies.'
  },

  entry: {
    note: 'For US passport holders. Rules differ by nationality and change; confirm on the official links before booking.',
    rows: [
      ['Visa', 'Not required for tourism up to 90 days for US, UK, Canadian, Australian and EU passport holders.'],
      ['Passport validity', 'Must be valid for your stay. Japan does not require six months beyond departure, but airlines sometimes do.'],
      ['Onward ticket', 'Immigration can ask for proof of onward or return travel.'],
      ['Arrival paperwork', 'Immigration and customs forms are now QR codes generated in advance on Visit Japan Web. Register each traveler, including children, before you fly and screenshot the QR codes.'],
      ['Customs limits', 'Declare cash over ¥1,000,000 equivalent. Meat products, including jerky and sausage, are prohibited and actively checked.'],
      ['Medication', 'Some common over-the-counter drugs are illegal here. See the Health section before packing anything.']
    ],
    links: [
      { label: 'Visit Japan Web (arrival QR codes)', url: 'https://services.digital.go.jp/en/visit-japan-web/' },
      { label: 'Japan immigration: visa exemptions', url: 'https://www.mofa.go.jp/j_info/visit/visa/short/novisa.html' },
      { label: 'Japan Customs: prohibited items', url: 'https://www.customs.go.jp/english/summary/passenger.htm' }
    ]
  },

  money: {
    currency: 'Japanese yen (JPY, ¥)',
    cards: 'Cards and contactless work at chains, hotels, department stores, big restaurants and most convenience stores. Small restaurants, older shops, shrines, local buses, markets and some ticket machines are cash only. Carry ¥10,000 to ¥20,000 in cash per day for a family and treat cash as the fallback.',
    atms: 'Use ATMs inside 7-Eleven (Seven Bank), Lawson or the post office. Bank ATMs often reject foreign cards and many close overnight. 7-Eleven ATMs have an English menu and run 24 hours.',
    tipping: 'No tipping, anywhere. Not in restaurants, not in taxis, not for housekeeping. Leaving money on the table causes confusion and sometimes a staff member chasing you down the street.',
    taxRefund: 'Tax-free shopping on purchases over ¥5,000 at participating stores. Show your passport at the register. Keep the goods sealed and the receipt attached until you leave.',
    costs: [
      ['Convenience store meal', '¥500 to ¥900 per person'],
      ['Casual restaurant dinner, family of four', '¥4,000 to ¥8,000'],
      ['Ramen or gyudon bowl', '¥700 to ¥1,200'],
      ['Tokyo to Kyoto, one way, reserved shinkansen', 'about ¥14,000 per adult'],
      ['Subway ride in Tokyo', '¥180 to ¥330'],
      ['Mid-range family hotel room', '¥18,000 to ¥40,000 per night']
    ]
  },

  connectivity: {
    sim: 'Buy an eSIM before you fly (Ubigi, Airalo, Sakura Mobile and others) and activate on landing. It is cheaper and faster than an airport counter. If anyone in the group has an older phone without eSIM support, rent a pocket wifi device instead and share it.',
    wifi: 'Free wifi at stations, convenience stores and cafés is common but often needs a sign-in form. Do not plan your navigation around it.',
    apps: [
      { name: 'Google Maps', why: 'Reliable for trains, including platform numbers and which car to board. Works better here than almost anywhere else.' },
      { name: 'Google Translate', why: 'Download the Japanese offline pack. Camera mode reads menus and packaging.' },
      { name: 'Safety tips', why: 'Official JNTO disaster app. Pushes earthquake, tsunami and typhoon warnings in English.' },
      { name: 'Japan Transit Planner or Navitime', why: 'Better than Maps for comparing train routes and reserved seats.' },
      { name: 'GO', why: 'Taxi hailing. Works in large cities and avoids a phone call.' }
    ]
  },

  transport: {
    headline: 'Trains are the spine of any Japan trip and you will barely need a car.',
    items: [
      { name: 'IC card (Suica, Pasmo, ICOCA)', detail: 'A tap-to-ride card that also pays at convenience stores and vending machines. Add Suica or Pasmo to Apple Wallet and top it up with a card: no queue, no shortage, and it works on your watch. Physical card sales for visitors have been restricted at times, so the phone route is the safe choice. Children aged 6 to 11 need a child IC card, bought at a station counter with a passport.' },
      { name: 'Shinkansen', detail: 'Book reserved seats for any trip with luggage or kids. On the Tokaido and Sanyo lines, suitcases over 160cm total dimensions require a free oversized baggage reservation; without it you can be fined. Each passenger may bring two normal suitcases.' },
      { name: 'Japan Rail Pass', detail: 'Prices rose sharply in late 2023 and the pass no longer pays off for a simple Tokyo to Kyoto round trip. Price your actual route first, then compare. Regional passes (JR East, Kansai, Sanyo) are usually the better value for a two-city family trip.' },
      { name: 'Luggage forwarding (takkyubin)', detail: 'Send suitcases hotel to hotel overnight for roughly ¥2,000 to ¥3,000 per bag and travel with a day pack. This single trick transforms a family trip with children and stairs. Ask your hotel front desk; they fill in the form for you.' },
      { name: 'Taxis', detail: 'Clean, metered and expensive. Doors open automatically, do not touch them. Drivers rarely speak English, so show the destination on a map or have the hotel write the address in Japanese.' },
      { name: 'Driving', detail: 'Left side of the road. You must carry an International Driving Permit obtained before you leave home, plus your home licence. Only worth it for rural areas such as Hokkaido, the Noto peninsula or Okinawa.' }
    ]
  },

  etiquette: [
    { rule: 'Take your shoes off where you see a step up, a shoe rack or tatami matting.', why: 'Homes, temples, some restaurants, ryokan and school-style museum rooms. Wear socks without holes.' },
    { rule: 'Do not eat or drink while walking, and keep your voice down on trains.', why: 'Phone calls on trains are the one thing people visibly disapprove of. Set phones to silent (manner mode).' },
    { rule: 'Carry your rubbish until you find a bin.', why: 'Public bins were removed decades ago. Convenience stores and station platforms have some. A plastic bag in your day pack solves it.' },
    { rule: 'Queue properly and stand where the floor markings tell you.', why: 'Platforms, lifts and bus stops are all marked. Following the paint is the whole system.' },
    { rule: 'Hand money to a cashier on the small tray, not into their hand.', why: 'Expected almost everywhere.' },
    { rule: 'Tattoos may bar you from public baths, pools and some gyms.', why: 'Cover small ones with a patch, or book a private family bath (kashikiri) instead.' },
    { rule: 'No tipping, and do not haggle.', why: 'Prices are fixed and service is included.' }
  ],

  safety: {
    overall: 'Japan has very low violent crime and petty theft is rare by world standards. The real risks are natural hazards, heat in summer, and getting separated in extremely crowded places.',
    emergencyNotes: 'Dial 119 for fire and ambulance, 110 for police. Ambulances are free. Operators may not speak English: say your location first, slowly, then "English please". The Japan Visitor Hotline (050-3816-2787) runs 24 hours in English, Chinese and Korean and will help you with an emergency or a translation.',
    hazards: [
      { name: 'Earthquakes', what: 'Common and usually harmless. Drop, cover under a table, hold on. Do not run outside. Hotels have torches and instructions in the room. Install the Safety tips app for English alerts, which arrive seconds before the shaking.' },
      { name: 'Typhoons', what: 'August to October. Trains shut down pre-emptively with a day of notice (keikaku unkyu), which strands travel plans rather than endangering you. Build a buffer day into any trip in that window.' },
      { name: 'Summer heat', what: 'Tokyo and Kyoto reach 35C with brutal humidity. Heatstroke sends tourists to hospital every year. Plan indoor afternoons, carry water and salt candy, and use the cooling sheets sold in every drugstore.' },
      { name: 'Crowd crush', what: 'Shibuya at Halloween, big festivals and some fireworks nights. Agree a meeting point rather than relying on phones, which fail when a hundred thousand people share one cell tower.' }
    ],
    scams: [
      'Touts in Kabukicho and Roppongi offering bars or clubs. Walk past. Drink-spiking and inflated bills are a real and documented problem in those two districts.',
      'Fake monk figures in tourist areas asking for donations.',
      'Nothing else, really. Pickpocketing is rare and taxi drivers do not take the long way.'
    ],
    lostAndFound: 'Japan recovers lost property at a rate that will surprise you. Report a lost item at the nearest police box (koban) or the station lost-property office. Phones, wallets and cameras are routinely returned with the cash still inside.',
    withKids: 'Lost children are handed to station staff or a koban. Write your hotel name and your phone number on a card in each child\'s pocket, in Japanese if you can, and photograph your children each morning so you have same-day clothing details.',
    advisoryNote: 'Japan has sat at the lowest advisory level for years, but check the live page before you go. Levels change without much warning.'
  },

  health: {
    water: 'Tap water is safe everywhere, including from station fountains. Ice and salads are fine.',
    food: 'Food hygiene standards are high. Raw fish and raw egg are normal here and served safely; whether you eat them is a preference, not a safety question.',
    vaccines: 'No special vaccines required. Routine vaccinations should be current. Check the CDC page for the current recommendation.',
    medications: {
      warning: 'This is the single most common way travelers get in trouble in Japan.',
      points: [
        'Pseudoephedrine is prohibited. That means most Sudafed, many combination cold medicines, and Vicks inhalers cannot be brought in.',
        'Codeine over 1% and most amphetamine-based ADHD medication (Adderall, Vyvanse) are prohibited outright, with no permission process. Discuss alternatives with your doctor months ahead.',
        'Up to one month of most other prescription medication is fine for personal use. Bring it in the original labelled packaging with a copy of the prescription.',
        'Larger quantities, injectables and some controlled drugs need a Yakkan Shoumei import certificate, applied for by email a few weeks in advance and free of charge.'
      ],
      link: { label: 'Japan MHLW: bringing medication into Japan', url: 'https://www.mhlw.go.jp/english/policy/health-medical/pharmaceuticals/01.html' }
    },
    pharmacy: 'A drugstore (ドラッグストア) sells painkillers, fever medicine, rehydration drinks and children\'s formulations. The sign 薬 means medicine. Use Google Translate camera on the box, or show the pharmacist the symptom written out. Paracetamol is sold as "acetaminophen" and children\'s syrup is widely available.',
    doctors: 'Walk-in clinics are cheap and fast but rarely English speaking. Ask your hotel to call ahead. In Tokyo, the Himawari service (03-5285-8181) finds English-speaking clinics; AMDA International Medical Information Center covers the rest of the country. For an emergency, dial 119 and say "English please".',
    insurance: 'Travel medical insurance matters here because you pay up front. A clinic visit is modest, but a hospital admission or an air ambulance is not. Carry your policy number on your phone and on paper.',
    allergies: 'Allergy awareness in restaurants is improving but inconsistent, and cross-contamination is common in small kitchens. Japan requires labelling for eight allergens: egg, milk, wheat, buckwheat, peanut, shrimp, crab and walnut. Everything else, including fish broth, is often unlabelled. Use the allergy card in the Food section and treat "probably fine" as a no.'
  },

  embassy: {
    country: 'United States',
    note: 'Phone numbers and addresses are shown as published by the State Department and verified against multiple sources, but confirm on the official site before you rely on them. Hours and appointment rules change often.',
    main: {
      name: 'U.S. Embassy Tokyo',
      address: '1-10-5 Akasaka, Minato-ku, Tokyo 107-8420',
      phone: '+81 3-3224-5000',
      afterHours: '+81 3-3224-5000 (ask for the duty officer)',
      email: 'TokyoACS@state.gov',
      url: 'https://jp.usembassy.gov/',
      covers: 'Tokyo plus Chiba, Fukushima, Gunma, Ibaraki, Kanagawa, Nagano, Niigata, Saitama, Shizuoka, Tochigi, Yamagata and Yamanashi.'
    },
    others: [
      { name: 'U.S. Consulate General Osaka-Kobe', note: 'Covers Osaka, Kyoto, Nara, Hyogo and most of western Honshu.', url: 'https://jp.usembassy.gov/embassy-consulates/osaka/' },
      { name: 'U.S. Consulate General Fukuoka', note: 'Covers Kyushu.', url: 'https://jp.usembassy.gov/embassy-consulates/fukuoka/' },
      { name: 'U.S. Consulate General Sapporo', note: 'Covers Hokkaido.', url: 'https://jp.usembassy.gov/embassy-consulates/sapporo/' },
      { name: 'U.S. Consulate General Naha', note: 'Covers Okinawa.', url: 'https://jp.usembassy.gov/embassy-consulates/naha/' }
    ],
    otherNationalities: [
      { country: 'United Kingdom', url: 'https://www.gov.uk/world/organisations/british-embassy-tokyo' },
      { country: 'Canada', url: 'https://www.international.gc.ca/country-pays/japan-japon/tokyo.aspx' },
      { country: 'Australia', url: 'https://japan.embassy.gov.au/' }
    ]
  },

  food: {
    intro: 'Japanese food is far more varied than sushi, and most of it is mild, lightly seasoned and child-friendly. Two things make it tricky for restricted eaters: dashi, a broth made from dried bonito fish, is in a huge share of savoury dishes including vegetable ones, and soy sauce is brewed with wheat. Filter the list below with your travelers set up and it will tell you where those land.',
    survival: {
      title: 'The convenience store is your safety net',
      body: '7-Eleven, Lawson and FamilyMart are everywhere, open all night, and sell genuinely decent food: rice balls, egg sandwiches, fried chicken, fruit, yoghurt, bread, hot noodles and cold milk. Packaging is photographed on the shelf label and the camera translator handles the ingredient list. If a meal out goes wrong or a child refuses dinner, you are three minutes from a reliable fix.'
    },
    orderingWithoutLanguage: [
      'Look for the ticket vending machine (shokkenki) by the door. Press the photo, take the ticket, hand it over. No conversation required.',
      'Ichiran ramen gives you a paper order sheet with English boxes for broth strength, garlic, spice level and extras. It is the most restriction-friendly ramen in the country.',
      'Conveyor sushi chains (Sushiro, Kura Sushi, Hama Sushi) have touchscreens with English and photographs. Children love them and nobody has to speak.',
      'Marugame Seimen udon is a canteen line: point at what you want as you slide your tray along.',
      'CoCo Ichibanya curry has a tick-box order form with English, including spice levels from 0 to 10 and portion size.',
      'Department store basements (depachika) are enormous food halls where everything is visible behind glass. Point, hold up fingers, done.',
      'Say "kore o kudasai" (this one please) while pointing. It works every time.'
    ],
    allergyCard: {
      intro: 'Show this on your phone at the counter before you order. Fill in the blank with the words you need from the list underneath.',
      japanese: 'アレルギーがあります。次のものを食べられません：＿＿＿＿。だし・ソース・調味料に含まれていても食べられません。確認をお願いします。',
      english: 'I have an allergy. I cannot eat the following: ____. I also cannot eat it when it is in broth, sauce or seasoning. Please check for me.',
      words: [
        ['Egg', '卵', 'tamago'], ['Milk and dairy', '乳製品', 'nyūseihin'], ['Wheat', '小麦', 'komugi'],
        ['Buckwheat', 'そば', 'soba'], ['Peanut', '落花生', 'rakkasei'], ['Tree nuts', 'ナッツ', 'nattsu'],
        ['Shrimp', 'えび', 'ebi'], ['Crab', 'かに', 'kani'], ['Fish', '魚', 'sakana'],
        ['Fish broth (dashi)', 'だし', 'dashi'], ['Shellfish and seafood', '魚介類', 'gyokairui'],
        ['Soy', '大豆', 'daizu'], ['Sesame', 'ごま', 'goma'], ['Pork', '豚肉', 'butaniku'],
        ['Beef', '牛肉', 'gyūniku'], ['Chicken', '鶏肉', 'toriniku'], ['Meat of any kind', '肉', 'niku'],
        ['Alcohol', 'お酒', 'osake']
      ]
    },
    dishes: [
      { id: 'onigiri', name: 'Onigiri (rice ball)', native: 'おにぎり', romaji: 'onigiri',
        blurb: 'Triangular rice parcel wrapped in seaweed, sold cold in every convenience store for about ¥150. The salt (shio) and kelp (kombu) fillings are the plainest; salmon and tuna-mayo are the most popular.',
        contains: [], mayContain: ['fish', 'soy_sauce'], traits: ['plain', 'kid', 'cheap'], spice: 0,
        where: 'Convenience stores, station kiosks', price: '¥', order: 'The shelf label is photographed. Camera-translate the filling if it matters.' },
      { id: 'shio-ramen', name: 'Ramen (shio or shoyu)', native: 'ラーメン', romaji: 'rāmen',
        blurb: 'Wheat noodles in a clear salt or soy broth, usually with pork slices, spring onion and half an egg. The national comfort food and almost always mild.',
        contains: ['gluten', 'soy_sauce', 'pork', 'egg'], mayContain: ['fish_broth', 'sesame'],
        omit: { pork: 'Ask for "chāshū nuki" to leave out the pork, though the broth itself is usually pork or chicken based.', egg: 'Ask for "tamago nuki".' },
        traits: ['kid'], spice: 0, where: 'Ramen shops everywhere', price: '¥', order: 'Ticket machine by the door. Ichiran lets you tick every option in English.' },
      { id: 'tonkotsu-ramen', name: 'Tonkotsu ramen', native: '豚骨ラーメン', romaji: 'tonkotsu rāmen',
        blurb: 'Rich, cloudy ramen from a pork bone broth simmered for a day. Heavier and more filling than shio ramen.',
        contains: ['pork', 'gluten', 'soy_sauce', 'egg'], mayContain: ['sesame'],
        traits: [], spice: 0, where: 'Hakata-style shops, Ichiran, Ippudo', price: '¥' },
      { id: 'udon', name: 'Kake udon', native: 'うどん', romaji: 'udon',
        blurb: 'Thick, soft, chewy wheat noodles in a light broth. The gentlest thing on most menus and the dish picky children accept most often.',
        contains: ['gluten', 'fish_broth', 'soy_sauce'], mayContain: [],
        traits: ['plain', 'kid', 'cheap'], spice: 0, where: 'Marugame Seimen, station stands', price: '¥',
        order: 'At Marugame you slide a tray along and point. Plain kake udon is the base bowl.' },
      { id: 'soba', name: 'Soba', native: 'そば', romaji: 'soba',
        blurb: 'Thin buckwheat noodles, served hot in broth or cold with dipping sauce. Nuttier and more adult than udon.',
        contains: ['gluten', 'fish_broth', 'soy_sauce'], mayContain: [],
        traits: [], spice: 0, where: 'Soba shops, station stands', price: '¥',
        order: 'Most soba is a wheat and buckwheat blend, so it is not gluten free. Pure buckwheat (jūwari) exists but the dipping sauce still contains wheat.' },
      { id: 'karaage', name: 'Karaage (fried chicken)', native: '唐揚げ', romaji: 'karaage',
        blurb: 'Bite-sized marinated fried chicken, crisp and juicy. Sold hot at every convenience store counter and on every izakaya menu.',
        contains: ['chicken', 'gluten', 'soy_sauce'], mayContain: ['egg', 'sesame'],
        traits: ['plain', 'kid'], spice: 0, where: 'Convenience stores, izakaya, food courts', price: '¥' },
      { id: 'tonkatsu', name: 'Tonkatsu', native: 'とんかつ', romaji: 'tonkatsu',
        blurb: 'Breadcrumbed deep-fried pork cutlet with shredded cabbage and rice. Comes as a set meal with miso soup.',
        contains: ['pork', 'gluten', 'egg'], mayContain: ['soy_sauce', 'fish_broth'],
        traits: ['plain'], spice: 0, where: 'Tonkatsu specialists, family restaurants', price: '¥¥' },
      { id: 'chicken-katsu-curry', name: 'Katsu curry', native: 'カツカレー', romaji: 'katsu karē',
        blurb: 'Japanese curry is thick, sweet and barely spicy, closer to a gravy than an Indian curry. With a breaded cutlet on top it is the single most reliable family order in the country.',
        contains: ['gluten', 'chicken', 'egg'], mayContain: ['dairy', 'beef', 'pork', 'soy_sauce'],
        traits: ['plain', 'kid'], spice: 1, where: 'CoCo Ichibanya, Go Go Curry, family restaurants', price: '¥',
        order: 'At CoCo Ichibanya the order form is in English: pick protein, rice size and spice 0 to 10. Zero is genuinely mild.' },
      { id: 'gyudon', name: 'Gyudon (beef bowl)', native: '牛丼', romaji: 'gyūdon',
        blurb: 'Simmered beef and onion over rice. Served in about ninety seconds for under ¥600, which makes it the default cheap family dinner.',
        contains: ['beef', 'soy_sauce', 'gluten'], mayContain: ['egg'],
        traits: ['plain', 'kid', 'cheap'], spice: 0, where: 'Yoshinoya, Sukiya, Matsuya', price: '¥',
        order: 'Matsuya has a ticket machine; Sukiya has picture menus and kid portions.' },
      { id: 'yakitori', name: 'Yakitori', native: '焼き鳥', romaji: 'yakitori',
        blurb: 'Chicken grilled on skewers, salted or glazed with sweet soy. Order a few at a time. Ask for "shio" (salt) to skip the sauce.',
        contains: ['chicken', 'soy_sauce'], mayContain: ['organ', 'sesame', 'alcohol'],
        omit: { soy_sauce: 'Ask for "shio" (salted) instead of "tare" (sauce) to avoid the soy glaze.' },
        traits: ['kid'], spice: 0, where: 'Izakaya, yakitori counters, festival stalls', price: '¥',
        order: 'Some skewers are liver, heart or gizzard. "Momo" is thigh and "negima" is thigh with spring onion: both are plain meat.' },
      { id: 'tamagoyaki', name: 'Tamagoyaki', native: '卵焼き', romaji: 'tamagoyaki',
        blurb: 'Layered, slightly sweet rolled omelette, served warm or cold. Children eat this when they refuse everything else.',
        contains: ['egg'], mayContain: ['fish_broth', 'soy_sauce'],
        traits: ['plain', 'kid'], spice: 0, where: 'Markets, sushi counters, bento boxes', price: '¥' },
      { id: 'kappa-maki', name: 'Cucumber roll', native: 'かっぱ巻き', romaji: 'kappa maki',
        blurb: 'Rice and cucumber rolled in seaweed. No fish, no cooking, no surprises: the sushi order for people who do not want sushi.',
        contains: [], mayContain: [], traits: ['plain', 'kid', 'veg'], spice: 0,
        where: 'Any sushi restaurant, conveyor chains, supermarkets', price: '¥' },
      { id: 'inari', name: 'Inari sushi', native: 'いなり寿司', romaji: 'inarizushi',
        blurb: 'Sweet fried tofu pouch stuffed with sushi rice. Sweet, soft, no fish, and sold everywhere.',
        contains: ['soy'], mayContain: ['fish_broth', 'soy_sauce'], traits: ['plain', 'kid', 'veg'], spice: 0,
        where: 'Supermarkets, sushi shops, markets', price: '¥' },
      { id: 'nigiri', name: 'Nigiri sushi', native: '握り寿司', romaji: 'nigirizushi',
        blurb: 'Raw fish pressed onto seasoned rice. At conveyor chains it costs about ¥120 a plate and the touchscreen shows photos, so nobody has to commit in advance.',
        contains: ['raw_fish', 'fish'], mayContain: ['shellfish', 'soy_sauce', 'sesame'],
        traits: ['adventurous'], spice: 0, where: 'Sushiro, Kura Sushi, Hama Sushi, sushi counters', price: '¥ to ¥¥¥',
        order: 'Cooked and no-fish options on the same belt: egg (tamago), cucumber roll, inari, corn, fried chicken, chips and cake. A conveyor restaurant feeds a mixed family better than almost anything else.' },
      { id: 'tempura', name: 'Tempura', native: '天ぷら', romaji: 'tenpura',
        blurb: 'Vegetables and prawns in a very light batter, fried and served with dipping sauce or over rice. Sweet potato and pumpkin tempura are usually the children\'s favourites.',
        contains: ['gluten', 'egg'], mayContain: ['shellfish', 'fish_broth', 'soy_sauce'],
        omit: { shellfish: 'Order the vegetable-only set (yasai tempura) to avoid prawns.' },
        traits: ['plain', 'kid'], spice: 0, where: 'Tempura shops, soba shops, department store halls', price: '¥¥' },
      { id: 'okonomiyaki', name: 'Okonomiyaki', native: 'お好み焼き', romaji: 'okonomiyaki',
        blurb: 'A thick savoury pancake of cabbage and batter, griddled at your table and topped with sauce, mayonnaise and bonito flakes. A genuinely fun meal with children.',
        contains: ['gluten', 'egg', 'fish_broth', 'pork'], mayContain: ['shellfish', 'soy_sauce', 'dairy'],
        omit: { pork: 'Order it with just cheese or vegetables instead of pork.' },
        traits: ['kid'], spice: 0, where: 'Osaka and Hiroshima especially', price: '¥¥',
        order: 'The bonito flakes on top are fish. Ask for "katsuobushi nuki" to leave them off.' },
      { id: 'takoyaki', name: 'Takoyaki', native: 'たこ焼き', romaji: 'takoyaki',
        blurb: 'Golf-ball-sized batter spheres with a piece of octopus inside, molten hot and topped with sauce and bonito. Street food, eaten with a toothpick.',
        contains: ['gluten', 'egg', 'shellfish', 'fish_broth'], mayContain: ['soy_sauce', 'dairy'],
        traits: ['adventurous', 'street'], spice: 0, where: 'Osaka street stalls, festivals', price: '¥',
        order: 'Let them cool for two minutes. The inside burns mouths, and this catches children out every single time.' },
      { id: 'miso-soup', name: 'Miso soup', native: '味噌汁', romaji: 'misoshiru',
        blurb: 'Fermented soybean broth with tofu and seaweed, served with nearly every set meal. Mild and salty.',
        contains: ['soy', 'fish_broth'], mayContain: ['shellfish'],
        traits: ['plain'], spice: 0, where: 'Included with most set meals', price: '¥',
        order: 'The broth is nearly always bonito-based, which rules it out for vegetarians and anyone avoiding fish.' },
      { id: 'edamame', name: 'Edamame', native: '枝豆', romaji: 'edamame',
        blurb: 'Salted green soybeans in the pod. Squeeze them into your mouth. Children treat it as a game.',
        contains: ['soy'], mayContain: [], traits: ['plain', 'kid', 'veg'], spice: 0,
        where: 'Izakaya, supermarkets, convenience stores', price: '¥' },
      { id: 'shabu', name: 'Shabu-shabu', native: 'しゃぶしゃぶ', romaji: 'shabu-shabu',
        blurb: 'You cook thin slices of beef and vegetables in a pot of broth at the table, then dip them in sauce. Interactive, shared and easy to control what each person eats.',
        contains: ['beef', 'soy_sauce', 'soy'], mayContain: ['raw_egg', 'sesame', 'fish_broth', 'gluten'],
        traits: ['kid'], spice: 0, where: 'Shabu chains such as Shabu-Yo and Nabezo', price: '¥¥',
        order: 'All-you-can-eat shabu chains have tablet ordering with photos, and children under about six are often free.' },
      { id: 'kare-pan', name: 'Curry bread', native: 'カレーパン', romaji: 'karē pan',
        blurb: 'Deep-fried bread roll filled with mild Japanese curry. Convenience store breakfast or an emergency snack.',
        contains: ['gluten', 'egg'], mayContain: ['beef', 'pork', 'dairy', 'chicken'],
        traits: ['plain', 'kid'], spice: 1, where: 'Bakeries, convenience stores', price: '¥' },
      { id: 'melon-pan', name: 'Melon pan and bakery bread', native: 'メロンパン', romaji: 'meron pan',
        blurb: 'Sweet bun with a crisp cookie crust. Japanese bakeries are superb, and milk bread, cream buns and fruit sandwiches rescue breakfast for fussy eaters.',
        contains: ['gluten', 'egg', 'dairy'], mayContain: [], traits: ['plain', 'kid'], spice: 0,
        where: 'Bakeries, convenience stores, station shops', price: '¥' },
      { id: 'shojin', name: 'Shojin ryori (temple vegetarian)', native: '精進料理', romaji: 'shōjin ryōri',
        blurb: 'Buddhist temple cuisine built entirely on vegetables, tofu and kelp broth with no meat, fish or dashi. The one reliably vegetarian meal tradition in Japan, and genuinely good.',
        contains: ['soy'], mayContain: ['soy_sauce', 'sesame'], traits: ['veg'], spice: 0,
        where: 'Temples in Kyoto, Koyasan and Kamakura', price: '¥¥¥',
        order: 'Book a day ahead through your hotel. Confirm "dashi nashi" since some modern versions cheat with bonito.' },
      { id: 'matcha-soft', name: 'Matcha soft serve', native: '抹茶ソフトクリーム', romaji: 'matcha sofuto',
        blurb: 'Green tea ice cream, sold at every tourist site. Bitter-sweet and less sugary than western ice cream. Vanilla and mixed swirls are always available too.',
        contains: ['dairy'], mayContain: ['gluten'], traits: ['kid', 'plain'], spice: 0,
        where: 'Everywhere tourists walk', price: '¥' },
      { id: 'mochi', name: 'Mochi and dango', native: '餅・団子', romaji: 'mochi, dango',
        blurb: 'Pounded glutinous rice, chewy and sticky, plain or filled with sweet bean paste.',
        contains: [], mayContain: ['soy', 'sesame', 'peanuts', 'dairy'], traits: ['kid'], spice: 0,
        where: 'Festivals, sweet shops, supermarkets', price: '¥',
        order: 'A genuine choking hazard for children under about five and for older adults. Cut it small, and supervise. Japan reports deaths from this every New Year.' },
      { id: 'yakisoba', name: 'Yakisoba', native: '焼きそば', romaji: 'yakisoba',
        blurb: 'Wheat noodles stir-fried with cabbage, pork and a sweet brown sauce. Festival food and a convenience store staple.',
        contains: ['gluten', 'soy_sauce', 'pork'], mayContain: ['fish_broth', 'shellfish'],
        omit: { pork: 'Festival stalls will often leave the pork out if you point and shake your head.' },
        traits: ['plain', 'kid', 'street'], spice: 0, where: 'Festivals, food courts, convenience stores', price: '¥' }
    ],
    chains: [
      { name: 'CoCo Ichibanya', why: 'Curry with an English tick-box form. Spice from 0 to 10, portion size, and any topping. The most controllable meal in Japan.' },
      { name: 'Sushiro / Kura Sushi / Hama Sushi', why: 'Conveyor sushi with English touchscreens and a long list of non-fish plates. Cheap, fast and entertaining for children.' },
      { name: 'Saizeriya', why: 'Italian-Japanese, absurdly cheap, picture menu with numbered items you write on a slip. Pasta, corn soup, pizza for children who are done with Japanese food.' },
      { name: 'Gusto / Sukiya / Ootoya', why: 'Family restaurants with photo menus, kids\' plates, booths, high chairs and a drink bar.' },
      { name: 'Mos Burger', why: 'Burgers, including a rice-bun version. Allergen charts are published on the Japanese website for every item.' },
      { name: 'Marugame Seimen', why: 'Point-and-pick udon canteen. You see every item before choosing.' },
      { name: 'Ichiran', why: 'Ramen in a booth with a written English order sheet, so you never speak to anyone.' },
      { name: '7-Eleven / Lawson / FamilyMart', why: 'The fallback at any hour: rice balls, sandwiches, fried chicken, fruit, yoghurt, milk, hot noodles.' }
    ],
    phrases: [
      { en: 'This one, please (while pointing)', native: 'これをください', say: 'ko-re o ku-da-sai' },
      { en: 'Do you have an English menu?', native: '英語のメニューはありますか', say: 'ei-go no me-nyū wa a-ri-mas ka' },
      { en: 'I have a food allergy', native: '食物アレルギーがあります', say: 'sho-ku-mo-tsu a-re-ru-gī ga a-ri-mas' },
      { en: 'I cannot eat fish broth (dashi)', native: 'だしが食べられません', say: 'da-shi ga ta-be-ra-re-ma-sen' },
      { en: 'Without pork, please', native: '豚肉抜きでお願いします', say: 'bu-ta-ni-ku nu-ki de o-ne-gai shi-mas' },
      { en: 'Not spicy, please', native: '辛くしないでください', say: 'ka-ra-ku shi-nai-de ku-da-sai' },
      { en: 'I am vegetarian', native: '私はベジタリアンです', say: 'wa-ta-shi wa be-ji-ta-ri-an des' },
      { en: 'Is there a children\'s menu?', native: 'お子様メニューはありますか', say: 'o-ko-sa-ma me-nyū wa a-ri-mas ka' },
      { en: 'Two adults, two children', native: '大人二人、子供二人です', say: 'o-to-na fu-ta-ri, ko-do-mo fu-ta-ri des' },
      { en: 'The bill, please', native: 'お会計お願いします', say: 'o-kai-kei o-ne-gai shi-mas' },
      { en: 'It was delicious', native: 'おいしかったです', say: 'oi-shi-kat-ta des' }
    ]
  }
});

/* Japan, part two: activities, language help and emergency scenarios.
   register() merges into the record above. */
window.TRAVEL.data.register({
  code: 'JP',

  activities: [
    { id: 'teamlab', name: 'teamLab Planets', native: 'チームラボプラネッツ', city: 'Tokyo (Toyosu)',
      blurb: 'A barefoot walk through rooms of projected light, mirrors and knee-deep warm water. No explanation needed, no language required, and children react to it the way adults react to a cathedral.',
      ages: { min: 0, bestFrom: 4 }, energy: 'moderate', hours: '1.5 to 2 hours', indoor: true, cost: '¥¥',
      language: 'easy', stroller: false, wheelchair: 'partial', bookAhead: 'required',
      accessNote: 'Water rooms cannot be done in a wheelchair or with a stroller; staff hold them for you and some rooms can be skipped.',
      tags: ['hands_on', 'pop_culture', 'views'], familyPick: true,
      tips: ['Wear shorts or a skirt. You roll trousers to the knee and wade.', 'Leave strollers and bags in the free lockers.', 'Timed entry sells out weeks ahead in high season.'] },

    { id: 'shinkansen', name: 'Ride the shinkansen', native: '新幹線', city: 'Tokyo to Kyoto and beyond',
      blurb: 'Two hours and fifteen minutes at 285km/h, with Mt Fuji out of the right-hand window about 40 minutes from Tokyo. For a child who likes trains this outranks every attraction in the country.',
      ages: { min: 0 }, energy: 'low', hours: '2 to 3 hours', indoor: true, cost: '¥¥¥',
      language: 'some', stroller: true, wheelchair: true, bookAhead: 'recommended',
      tags: ['trains', 'views'], familyPick: true,
      languageNote: 'Reserve at a green ticket machine with the English button, or at a JR ticket office where staff handle it in writing.',
      tips: ['Sit on the right (seats D and E) going Tokyo to Kyoto for Mt Fuji.', 'Reserve oversized luggage space if a bag exceeds 160cm total, or risk a fine.', 'Buy an ekiben bento on the platform and eat it on board: that is the done thing.'] },

    { id: 'nara-deer', name: 'Nara deer park', native: '奈良公園', city: 'Nara',
      blurb: 'Twelve hundred wild sika deer roam a public park beside an enormous bronze Buddha. They bow for crackers, which children find hilarious for about an hour.',
      ages: { min: 0, bestFrom: 3 }, energy: 'moderate', hours: 'half a day with the temple', indoor: false, cost: 'free',
      language: 'easy', stroller: true, wheelchair: 'partial', heatExposed: true, crowded: true, bookAhead: 'no',
      tags: ['animals', 'nature', 'history', 'religious'], familyPick: true,
      tips: ['Crackers are ¥200 from licensed stalls. Do not feed anything else.', 'Deer headbutt and nip when they smell food. Keep snacks sealed in a bag, not in a pocket.', 'A toddler holding food at deer height gets knocked over. Hold the crackers yourself and let them hand one over at a time.', 'Todai-ji temple next door holds the Great Buddha and is worth the entry fee.'] },

    { id: 'fushimi-inari', name: 'Fushimi Inari shrine', native: '伏見稲荷大社', city: 'Kyoto',
      blurb: 'Thousands of vermilion gates in a tunnel up a wooded mountain. Free, open all night, and the most photographed place in Japan.',
      ages: { min: 0, bestFrom: 5 }, energy: 'high', hours: '45 minutes to 3 hours depending how far you climb', indoor: false, cost: 'free',
      language: 'easy', stroller: false, wheelchair: false, stairs: true, heatExposed: true, crowded: true, bookAhead: 'no',
      accessNote: 'The lower gates are flat and paved; the mountain route is continuous uneven stone steps.',
      tags: ['religious', 'nature', 'views', 'history'],
      tips: ['Go before 8am or after 6pm. In the middle of the day the first stretch is shoulder to shoulder.', 'The crowds thin out dramatically after the first twenty minutes of climbing.', 'You do not have to reach the summit. Turn around at the Yotsutsuji viewpoint, about 45 minutes up.'] },

    { id: 'ghibli-museum', name: 'Ghibli Museum', native: '三鷹の森ジブリ美術館', city: 'Mitaka, Tokyo',
      blurb: 'Hayao Miyazaki designed this himself: a deliberately maze-like building with a rooftop robot, a cat bus children can climb on, and an exclusive short film shown nowhere else.',
      ages: { min: 0, bestFrom: 4 }, energy: 'low', hours: '2 to 3 hours', indoor: true, cost: '¥¥',
      language: 'some', stroller: false, wheelchair: 'partial', bookAhead: 'required',
      accessNote: 'Strollers must be left at the entrance. The building is intentionally full of small stairs and narrow spiral steps.',
      tags: ['museum', 'pop_culture', 'hands_on'], familyPick: true,
      languageNote: 'Exhibits have little English, and the short film has no dialogue, so language is not really a barrier. Booking is the barrier.',
      tips: ['Tickets go on sale on the 10th of the month before your visit and sell out in minutes. Overseas buyers use an authorised agent or the lottery.', 'Photography is banned inside. This is enforced.', 'Not the same thing as Ghibli Park near Nagoya, which is larger, outdoors and separately ticketed.'] },

    { id: 'disneysea', name: 'Tokyo DisneySea', native: '東京ディズニーシー', city: 'Urayasu, near Tokyo',
      blurb: 'The best-regarded Disney park in the world, themed as a set of harbours and built for adults as much as children. Fantasy Springs added Frozen, Tangled and Peter Pan areas.',
      ages: { min: 0 }, energy: 'high', hours: 'full day', indoor: false, cost: '¥¥¥',
      language: 'some', stroller: true, wheelchair: true, crowded: true, motion: true, bookAhead: 'required',
      tags: ['themepark', 'pop_culture'],
      tips: ['Buy dated tickets online in advance; the park sells out and gate sales are not guaranteed.', 'Download the Tokyo Disney Resort app before you arrive. Standby passes and food orders run through it.', 'Signage and show content are mostly Japanese, which rarely matters for rides but does for shows.'] },

    { id: 'usj-nintendo', name: 'Super Nintendo World at Universal Studios Japan', native: 'スーパー・ニンテンドー・ワールド', city: 'Osaka',
      blurb: 'A physical Mario level with interactive blocks, a Mario Kart ride and a wearable wrist band that keeps score. Donkey Kong Country opened alongside it.',
      ages: { min: 0, bestFrom: 6 }, energy: 'high', hours: 'full day', indoor: false, cost: '¥¥¥',
      language: 'some', stroller: true, wheelchair: 'partial', crowded: true, motion: true, bookAhead: 'required',
      tags: ['themepark', 'pop_culture'],
      tips: ['Entry to the Nintendo area needs a timed area ticket on busy days, included with an Express Pass or claimed free in the app.', 'Mario Kart has a 122cm height minimum, which catches families out.', 'Weekdays outside Japanese school holidays are dramatically quieter.'] },

    { id: 'kaiyukan', name: 'Osaka Aquarium Kaiyukan', native: '海遊館', city: 'Osaka',
      blurb: 'One of the largest aquariums in the world, built as a spiral walk down through the Pacific. Whale sharks in the central tank, and a touch pool with rays.',
      ages: { min: 0 }, energy: 'low', hours: '2 to 3 hours', indoor: true, cost: '¥¥',
      language: 'easy', stroller: true, wheelchair: true, bookAhead: 'recommended',
      tags: ['animals', 'hands_on'], familyPick: true,
      tips: ['A good rainy-day or heat-wave plan.', 'The route is one way and downhill, which is easy with a stroller.', 'Combine with the Tempozan ferris wheel next door.'] },

    { id: 'senso-ji', name: 'Senso-ji temple and Nakamise street', native: '浅草寺・仲見世通り', city: 'Tokyo (Asakusa)',
      blurb: 'Tokyo\'s oldest temple, approached through a few hundred metres of stalls selling snacks, fans and souvenirs. The easiest introduction to Japan on day one.',
      ages: { min: 0 }, energy: 'moderate', hours: '2 hours', indoor: false, cost: 'free',
      language: 'easy', stroller: true, wheelchair: true, crowded: true, heatExposed: true, bookAhead: 'no',
      tags: ['religious', 'history', 'shopping', 'food'],
      tips: ['Arrive before 9am and you will have the main hall nearly to yourself.', 'Draw an omikuji fortune for ¥100. If it is bad luck, tie it to the rack and leave it behind.', 'Street food here is a reliable first taste: melon pan, taiyaki, grilled rice crackers.'] },

    { id: 'arashiyama', name: 'Arashiyama bamboo grove', native: '嵐山竹林', city: 'Kyoto',
      blurb: 'A flat paved path through a dense bamboo forest, plus a river, a temple garden and a monkey mountain nearby.',
      ages: { min: 0 }, energy: 'low', hours: '1 hour for the grove, half a day for the area', indoor: false, cost: 'free',
      language: 'easy', stroller: true, wheelchair: true, crowded: true, bookAhead: 'no',
      tags: ['nature', 'views', 'religious'],
      tips: ['The grove itself takes fifteen minutes to walk. Go at sunrise if you want the photograph without a crowd.', 'The monkey park is a steep twenty-minute climb and not stroller friendly, but the monkeys are genuinely wild and the view is the best in Kyoto.', 'The Sagano scenic railway and the riverboat are both good with children.'] },

    { id: 'hiroshima-peace', name: 'Hiroshima Peace Memorial Museum and Park', native: '広島平和記念資料館', city: 'Hiroshima',
      blurb: 'The most affecting museum in Japan, and deliberately hard to walk through. The park outside holds the A-Bomb Dome and the children\'s peace monument hung with paper cranes.',
      ages: { min: 0, bestFrom: 11 }, energy: 'low', hours: '2 to 3 hours', indoor: true, cost: '¥',
      language: 'easy', stroller: true, wheelchair: true, bookAhead: 'no',
      tags: ['history', 'museum'],
      languageNote: 'Full English captions throughout, plus an English audio guide.',
      tips: ['The exhibits include photographs of injured children and personal belongings of people who died. Decide in advance whether your younger children see the main hall, and talk about it beforehand.', 'The park, the dome and the crane monument work for any age and carry much of the meaning on their own.', 'Fold paper cranes before you travel and add them to the monument. It gives children a reason to be there.'] },

    { id: 'miyajima', name: 'Miyajima and the floating gate', native: '宮島・厳島神社', city: 'Near Hiroshima',
      blurb: 'A ferry to an island where a vermilion shrine gate stands in the sea at high tide and on sand at low tide. Wild deer wander the village streets.',
      ages: { min: 0 }, energy: 'moderate', hours: 'half a day', indoor: false, cost: '¥',
      language: 'easy', stroller: true, wheelchair: 'partial', motion: true, heatExposed: true, bookAhead: 'no',
      tags: ['religious', 'nature', 'views', 'animals', 'food'], familyPick: true,
      tips: ['Check the tide table before you go: high tide for the floating photograph, low tide to walk out to the gate.', 'The ferry takes ten minutes and is covered by a JR pass on the JR line.', 'Grilled oysters and momiji manju cakes are the local food, cooked in front of you.'] },

    { id: 'sumo', name: 'Sumo tournament or morning practice', native: '大相撲', city: 'Tokyo, Osaka, Nagoya, Fukuoka',
      blurb: 'Bouts last seconds and the ritual around them lasts minutes. Six tournaments a year, fifteen days each; outside those dates, some stables let visitors watch morning training.',
      ages: { min: 0, bestFrom: 6 }, energy: 'low', hours: '2 hours to a full day', indoor: true, cost: '¥¥',
      language: 'some', stroller: 'partial', wheelchair: 'partial', bookAhead: 'required',
      tags: ['history', 'views'],
      languageNote: 'Rent the English radio guide at the venue, or the whole thing is just men pushing each other over.',
      tips: ['Tournaments: January, May and September in Tokyo, March in Osaka, July in Nagoya, November in Fukuoka.', 'Cheap upper seats are fine; the ring is visible from everywhere.', 'Arrive late afternoon for the top-division bouts if children will not sit through a whole day.'] },

    { id: 'onsen-private', name: 'Private family onsen bath', native: '貸切風呂', city: 'Hakone, Kinosaki, Beppu, anywhere rural',
      blurb: 'A hot spring bath booked for your family alone, usually by the hour at a ryokan. Removes every awkward question about nudity, tattoos and children at once.',
      ages: { min: 0 }, energy: 'low', hours: '45 to 60 minutes', indoor: true, cost: '¥¥',
      language: 'some', stroller: true, wheelchair: 'partial', bookAhead: 'required',
      tags: ['relax', 'hands_on'], familyPick: true,
      tips: ['Public baths usually refuse visible tattoos. A private bath (kashikiri or kazoku-buro) sidesteps the rule entirely.', 'Wash at the seated showers first. You enter the water already clean, and soap never goes in the bath.', 'Water is often 42C and too hot for small children to stay in long. Dip, cool down, repeat.'] },

    { id: 'cooking-class', name: 'Ramen, sushi or wagashi class', native: '料理教室', city: 'Tokyo, Kyoto, Osaka',
      blurb: 'Two or three hours making the food you have been eating, taught in English, ending in lunch. The most reliable way to get a real conversation with a Japanese person on a short trip.',
      ages: { min: 0, bestFrom: 7 }, energy: 'low', hours: '2 to 3 hours', indoor: true, cost: '¥¥',
      language: 'easy', stroller: 'partial', wheelchair: 'partial', bookAhead: 'required',
      tags: ['food', 'hands_on'], familyPick: true,
      languageNote: 'Book one advertised in English. Instructors are used to visitors who speak none.',
      tips: ['Tell them about allergies and restrictions when you book, not on the day. Most will adapt the menu.', 'Sushi rolling and gyoza folding suit children better than knife work.', 'Classes in a private home are usually better value than the ones in commercial kitchens.'] },

    { id: 'shibuya-sky', name: 'Shibuya Sky', native: '渋谷スカイ', city: 'Tokyo',
      blurb: 'An open rooftop 230m above the Shibuya crossing, with nothing between you and the view but a glass rail. Sunset slots sell out first.',
      ages: { min: 0, bestFrom: 5 }, energy: 'low', hours: '1 hour', indoor: false, cost: '¥¥',
      language: 'easy', stroller: 'partial', wheelchair: true, evening: true, crowded: true, bookAhead: 'required',
      tags: ['views'],
      tips: ['Book the slot about 40 minutes before sunset to get daylight, dusk and the lit city in one visit.', 'Loose items including phones must go in a locker on the open deck, so bring a wrist strap or use the paid photo service.', 'Closed in rain and high wind, with refunds. Have a backup plan.'] },

    { id: 'kyoto-rail-museum', name: 'Kyoto Railway Museum', native: '京都鉄道博物館', city: 'Kyoto',
      blurb: 'Fifty-three real locomotives including a first-generation shinkansen, a working turntable, a steam train you can ride, and a huge diorama. Hands-on in a way most Japanese museums are not.',
      ages: { min: 0, bestFrom: 2 }, energy: 'low', hours: '2 to 4 hours', indoor: true, cost: '¥',
      language: 'easy', stroller: true, wheelchair: true, bookAhead: 'no',
      tags: ['trains', 'museum', 'hands_on'], familyPick: true,
      tips: ['The best rainy-day plan in Kyoto with young children.', 'The steam locomotive ride costs a little extra and sells tickets on the day.', 'Walking distance from Kyoto station, so it fits an arrival or departure morning.'] },

    { id: 'sanrio-puroland', name: 'Sanrio Puroland', native: 'サンリオピューロランド', city: 'Tama, Tokyo',
      blurb: 'An entirely indoor Hello Kitty theme park: gentle rides, musicals and character meet-and-greets. Aimed squarely at under-eights and the adults who grew up with it.',
      ages: { min: 0, bestFrom: 2 }, energy: 'moderate', hours: 'half a day', indoor: true, cost: '¥¥',
      language: 'some', stroller: true, wheelchair: true, crowded: true, bookAhead: 'recommended',
      tags: ['themepark', 'pop_culture'],
      tips: ['Indoors throughout, which makes it a genuinely good rainy or very hot day option.', 'Shows are in Japanese but are mostly song and dance.', 'An hour from central Tokyo, so treat it as a half-day trip rather than an afternoon.'] },

    { id: 'hakone-loop', name: 'Hakone loop', native: '箱根', city: 'Hakone',
      blurb: 'A circuit of mountain railway, cable car, ropeway over a sulphur valley, pirate ship across a lake and Mt Fuji views, done as one ticketed loop.',
      ages: { min: 0, bestFrom: 4 }, energy: 'moderate', hours: 'full day', indoor: false, cost: '¥¥',
      language: 'some', stroller: 'partial', wheelchair: 'partial', motion: true, bookAhead: 'no',
      tags: ['views', 'nature', 'trains', 'relax'],
      tips: ['The Hakone Freepass covers every leg of the loop and is far cheaper than individual tickets.', 'Fuji hides behind cloud most summer afternoons. Winter mornings have the clearest odds.', 'Eat a black egg boiled in the volcanic springs at Owakudani. Children will either love this or refuse it entirely.'] },

    { id: 'tsukiji-outer', name: 'Tsukiji outer market food walk', native: '築地場外市場', city: 'Tokyo',
      blurb: 'Hundreds of stalls selling grilled scallops, tamagoyaki on a stick, strawberry skewers and knives. The inner fish auction moved to Toyosu, but the eating is still here.',
      ages: { min: 0, bestFrom: 5 }, energy: 'moderate', hours: '2 hours', indoor: false, cost: '¥',
      language: 'easy', stroller: false, wheelchair: 'partial', crowded: true, bookAhead: 'no',
      accessNote: 'Narrow lanes packed with people and delivery carts. A stroller is a real obstacle here.',
      tags: ['food', 'shopping'],
      tips: ['Go between 8am and 10am. Many stalls shut by early afternoon and most close on Sundays.', 'Carry cash in small notes. Plenty of stalls take nothing else.', 'Eat standing beside the stall you bought from rather than walking with food.'] },

    { id: 'shinjuku-gyoen', name: 'Shinjuku Gyoen garden', native: '新宿御苑', city: 'Tokyo',
      blurb: 'A large, quiet, beautifully kept garden with lawns children can actually run on, a greenhouse, and a teahouse. Costs ¥500 and buys back an afternoon.',
      ages: { min: 0 }, energy: 'low', hours: '1 to 2 hours', indoor: false, cost: '¥',
      language: 'easy', stroller: true, wheelchair: true, bookAhead: 'no',
      tags: ['nature', 'relax'], familyPick: true,
      tips: ['Schedule this deliberately as a recovery afternoon in the middle of a packed Tokyo week.', 'No alcohol and no ball games, which is why it stays calm.', 'Closed Mondays, except during cherry blossom and chrysanthemum seasons.'] },

    { id: 'kimono-gion', name: 'Kimono rental and a Gion walk', native: '着物レンタル・祇園', city: 'Kyoto',
      blurb: 'Rent a kimono for the day, get dressed by someone who knows how, and walk the old wooden streets of Gion and Higashiyama in it.',
      ages: { min: 0, bestFrom: 5 }, energy: 'moderate', hours: 'half a day', indoor: false, cost: '¥¥',
      language: 'some', stroller: 'partial', wheelchair: false, heatExposed: true, crowded: true, bookAhead: 'recommended',
      tags: ['hands_on', 'history', 'shopping'],
      tips: ['Child sizes exist and shops enjoy dressing families together.', 'The wooden sandals are uncomfortable after an hour. Ask for the softer sandals, or carry your own shoes.', 'Private alleys in Gion are residential and photography is banned in parts of Hanamikoji. The fines are real.'] },

    { id: 'snow-monkeys', name: 'Jigokudani snow monkeys', native: '地獄谷野猿公苑', city: 'Nagano',
      blurb: 'Wild Japanese macaques sitting in a steaming hot spring in the snow, a thirty-minute walk through forest from the car park.',
      ages: { min: 0, bestFrom: 6 }, energy: 'high', hours: 'half a day from Nagano', indoor: false, cost: '¥',
      language: 'easy', stroller: false, wheelchair: false, bookAhead: 'no',
      accessNote: 'A 1.6km uneven forest trail, icy in winter. Not possible with wheels of any kind.',
      tags: ['animals', 'nature'],
      tips: ['Best from December to March, when the monkeys actually use the bath. In summer they are around but not in the water.', 'Rent or bring boot crampons in winter. The path ices over and people fall.', 'Do not look a macaque in the eye or show food. They are wild and they will take it.'] }
  ],

  language: {
    script: 'Japanese is written in three systems at once: hiragana and katakana (phonetic, 46 characters each) and kanji (thousands of Chinese characters). Katakana is the useful one for a visitor because it spells out foreign words, so コーヒー really does read "kōhī". Learning to recognise ten or fifteen katakana shapes pays off on menus faster than anything else.',
    pronunciation: 'Five clean vowels: a as in father, i as in machine, e as in bed, o as in bone, u as in flute. Every syllable gets even weight, so TO-KYO-O not toe-KEY-oh. Say each syllable in the "say it" column separately and you will be understood.',
    politeness: 'Adding "sumimasen" before a question and "onegai shimasu" after a request covers most of what politeness requires from a visitor. Nobody expects you to speak Japanese, and any attempt is received warmly.',
    phrasebook: [
      { group: 'The essential six', items: [
        { en: 'Hello / good afternoon', native: 'こんにちは', say: 'kon-ni-chi-wa' },
        { en: 'Thank you', native: 'ありがとうございます', say: 'a-ri-ga-tō go-zai-mas' },
        { en: 'Excuse me / sorry / hello, over here', native: 'すみません', say: 'su-mi-ma-sen' },
        { en: 'Please (when asking for something)', native: 'お願いします', say: 'o-ne-gai shi-mas' },
        { en: 'Yes / no', native: 'はい / いいえ', say: 'hai / ī-e' },
        { en: 'I don\'t understand', native: 'わかりません', say: 'wa-ka-ri-ma-sen' }
      ] },
      { group: 'Getting help', items: [
        { en: 'Do you speak English?', native: '英語を話せますか', say: 'ei-go o ha-na-se-mas ka' },
        { en: 'Please write it down', native: '書いてください', say: 'kai-te ku-da-sai' },
        { en: 'Please say that again slowly', native: 'もう一度ゆっくりお願いします', say: 'mō i-chi-do yuk-ku-ri o-ne-gai shi-mas' },
        { en: 'Where is the toilet?', native: 'トイレはどこですか', say: 'toi-re wa do-ko des ka' },
        { en: 'How much is it?', native: 'いくらですか', say: 'i-ku-ra des ka' },
        { en: 'Can I pay by card?', native: 'カードで払えますか', say: 'kā-do de ha-ra-e-mas ka' },
        { en: 'I am lost', native: '道に迷いました', say: 'mi-chi ni ma-yoi-mash-ta' },
        { en: 'Please take me to this address (show your phone)', native: 'この住所までお願いします', say: 'ko-no jū-sho ma-de o-ne-gai shi-mas' }
      ] },
      { group: 'Trains and directions', items: [
        { en: 'Which platform for Kyoto?', native: '京都行きのホームはどこですか', say: 'kyō-to yu-ki no hō-mu wa do-ko des ka' },
        { en: 'Is this the right train?', native: 'この電車で合っていますか', say: 'ko-no den-sha de at-te i-mas ka' },
        { en: 'One adult, two children, please', native: '大人一枚、子供二枚お願いします', say: 'o-to-na i-chi-mai, ko-do-mo ni-mai o-ne-gai shi-mas' },
        { en: 'Where is the luggage locker?', native: 'コインロッカーはどこですか', say: 'koin-rok-kā wa do-ko des ka' },
        { en: 'Is there an elevator?', native: 'エレベーターはありますか', say: 'e-re-bē-tā wa a-ri-mas ka' }
      ] },
      { group: 'With children', items: [
        { en: 'Where is the baby changing room?', native: 'おむつ替えの場所はどこですか', say: 'o-mu-tsu ga-e no ba-sho wa do-ko des ka' },
        { en: 'Do you have a high chair?', native: '子供用の椅子はありますか', say: 'ko-do-mo yō no i-su wa a-ri-mas ka' },
        { en: 'My child is lost', native: '子供が迷子になりました', say: 'ko-do-mo ga mai-go ni na-ri-mash-ta' },
        { en: 'Is this OK for children?', native: '子供でも大丈夫ですか', say: 'ko-do-mo de-mo dai-jō-bu des ka' }
      ] },
      { group: 'Medical and emergency', items: [
        { en: 'Help!', native: '助けて', say: 'tas-ke-te' },
        { en: 'Please call an ambulance', native: '救急車を呼んでください', say: 'kyū-kyū-sha o yon-de ku-da-sai' },
        { en: 'Please call the police', native: '警察を呼んでください', say: 'kei-sa-tsu o yon-de ku-da-sai' },
        { en: 'Where is the hospital?', native: '病院はどこですか', say: 'byō-in wa do-ko des ka' },
        { en: 'Where is a pharmacy?', native: '薬局はどこですか', say: 'yak-kyo-ku wa do-ko des ka' },
        { en: 'I am sick / it hurts here', native: '具合が悪いです / ここが痛いです', say: 'gu-ai ga wa-rui des / ko-ko ga i-tai des' },
        { en: 'I have a fever', native: '熱があります', say: 'ne-tsu ga a-ri-mas' },
        { en: 'My passport was stolen', native: 'パスポートを盗まれました', say: 'pas-po-to o nu-su-ma-re-mash-ta' }
      ] }
    ],
    signs: [
      ['入口', 'iriguchi', 'Entrance'],
      ['出口', 'deguchi', 'Exit'],
      ['非常口', 'hijōguchi', 'Emergency exit'],
      ['お手洗い / トイレ', 'otearai / toire', 'Toilet'],
      ['男 / 女', 'otoko / onna', 'Men / women'],
      ['駅', 'eki', 'Station'],
      ['改札', 'kaisatsu', 'Ticket gate'],
      ['のりば', 'noriba', 'Boarding point, platform'],
      ['指定席 / 自由席', 'shiteiseki / jiyūseki', 'Reserved seat / unreserved seat'],
      ['精算機', 'seisanki', 'Fare adjustment machine, for when you underpaid'],
      ['大人 / 子供', 'otona / kodomo', 'Adult / child fare'],
      ['現金のみ', 'genkin nomi', 'Cash only'],
      ['営業中 / 準備中', 'eigyōchū / junbichū', 'Open / not yet open'],
      ['定休日', 'teikyūbi', 'Regular closing day'],
      ['本日休業', 'honjitsu kyūgyō', 'Closed today'],
      ['禁煙', 'kin\'en', 'No smoking'],
      ['立入禁止', 'tachiiri kinshi', 'No entry'],
      ['危険', 'kiken', 'Danger'],
      ['無料 / 有料', 'muryō / yūryō', 'Free / paid'],
      ['薬', 'kusuri', 'Medicine, marks a pharmacy'],
      ['コインロッカー', 'koin rokkā', 'Coin locker'],
      ['案内所', 'annaisho', 'Information desk']
    ],
    tips: [
      'Download the Japanese offline pack in Google Translate before you fly. Camera mode then works in a basement restaurant with no signal.',
      'Photograph your hotel\'s business card on arrival. Showing it to a taxi driver solves the hardest conversation of the day.',
      'Let the hotel front desk make phone calls for you: restaurant bookings, taxi dispatch, confirming a closure. They expect to and it takes them a minute.',
      'Train station staff at the manned gate will solve almost any travel problem if you write the destination down.',
      'Learn to recognise 円 (yen) and the kanji for one through ten. Handwritten prices in markets use them.'
    ]
  },

  scenarios: [
    { situation: 'Someone needs a doctor or an ambulance',
      steps: [
        'Dial 119. Say your address or the nearest landmark first, slowly, then "English please".',
        'Ambulances are free. There is no charge for the ride, only for treatment.',
        'For a non-emergency, ask the hotel to phone a clinic. In Tokyo, Himawari (03-5285-8181) finds English-speaking doctors; elsewhere use AMDA International Medical Information Center.',
        'Take your passport, insurance details and any medication boxes with you. Expect to pay at the desk and claim it back later.'
      ] },
    { situation: 'A passport is lost or stolen',
      steps: [
        'Report it at the nearest police box (koban) and get the written report. You need that paper for the next step.',
        'Contact your embassy or the nearest consulate the same day. For US citizens that is the Tokyo embassy or the consulate covering your region.',
        'You will need photos, the police report, ID and a fee. An emergency passport can usually be issued quickly, but not instantly.',
        'This is why you photograph every passport before you leave and keep a copy somewhere separate from the originals.'
      ] },
    { situation: 'An earthquake starts',
      steps: [
        'Get under a table and hold on to a leg. Do not run outside: falling glass and signage cause most injuries.',
        'After the shaking stops, open a door so it cannot jam shut, and put shoes on.',
        'Follow hotel staff instructions. Every hotel has a drilled plan and a torch in the room.',
        'If you are near the coast and feel a long shake, move inland and uphill without waiting for an official warning.'
      ] },
    { situation: 'A typhoon is forecast for your travel day',
      steps: [
        'Watch for a planned suspension announcement (keikaku unkyu). Railways publish these roughly 24 hours ahead and then stop running.',
        'Rebook the shinkansen before the announcement rather than after. Reserved seats on the day either side vanish quickly.',
        'If you are flying, check with the airline directly: Japanese carriers waive change fees for named typhoons.',
        'Stock up on convenience store food the night before and plan an indoor day.'
      ] },
    { situation: 'A child gets separated from you',
      steps: [
        'Tell the nearest station staff member or go to a police box. Lost children are handled calmly and constantly here.',
        'Agree in advance that a lost child stays put and finds a uniformed staff member rather than searching for you.',
        'Put a card in each child\'s pocket with your name, mobile number and hotel name, ideally written in Japanese by the hotel.',
        'Photograph your children each morning so you can show exactly what they are wearing.'
      ] },
    { situation: 'You left something on a train',
      steps: [
        'Note the train time, the line, the car number and the station you boarded at, then tell any station staff.',
        'JR and the subway operators run central lost-property offices and things genuinely do turn up, often the same day.',
        'For a phone, ask them to search by its colour and case rather than the make.',
        'If it was in a taxi, the receipt has the company and car number on it. Keep taxi receipts.'
      ] }
  ],

  links: [
    { label: 'US travel advisory for Japan (live)', url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/japan-travel-advisory.html' },
    { label: 'CDC travel health: Japan', url: 'https://wwwnc.cdc.gov/travel/destinations/traveler/none/japan' },
    { label: 'UK FCDO advice: Japan', url: 'https://www.gov.uk/foreign-travel-advice/japan' },
    { label: 'Japan National Tourism Organization', url: 'https://www.japan.travel/en/' },
    { label: 'Japan Visitor Hotline (24h, English)', url: 'https://www.japan.travel/en/plan/hotline/' },
    { label: 'JR East: Japan Rail Pass pricing', url: 'https://www.jreast.co.jp/multi/en/pass/japan_rail_pass.html' }
  ]
});
