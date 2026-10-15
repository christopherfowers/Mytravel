/* Portugal: full dossier. */
window.TRAVEL.data.register({
  code: 'PT',
  name: 'Portugal',
  reviewed: '2026',
  tagline: 'The easiest country in Europe to visit without the language, and the hardest to push a stroller around.',

  languageBarrier: {
    level: 'low',
    summary: 'English is spoken remarkably widely, because Portugal subtitles foreign television instead of dubbing it, so most people under fifty have grown up hearing it. Portuguese itself looks like Spanish on the page and sounds nothing like it: heavily shushing, with swallowed vowels. Reading signs is easy; understanding speech is hard.',
    whatWorks: [
      'Just speaking English, in Lisbon, Porto and the Algarve. It works more often than not.',
      'Reading Portuguese if you know any Spanish or French. Written, it is largely decodable.',
      'Photo menus and the prato do dia (dish of the day) written on a board outside.',
      'Google Translate camera for supermarket labels and small-town menus.'
    ],
    hardMoments: [
      'Understanding spoken Portuguese, which compresses vowels until words run together.',
      'Rural Alentejo and inland villages, where English thins out.',
      'Phone calls and official appointments.'
    ]
  },

  overview: {
    intro: 'Portugal gives you most of what people go to Spain or Italy for, at lower cost, with better English, and with a gentler pace. The specific difficulty for families is terrain: Lisbon and Porto are built on steep hills paved with polished limestone cobbles that are slippery in rain and brutal with a stroller or a wheelchair.',
    bestTime: 'April to June and September to October. Warm, dry, and far emptier than July and August.',
    avoidDates: 'August, when the Algarve fills and prices double. Lisbon in mid-June is the Santo António festival, which is wonderful and extremely crowded.',
    timeZone: 'WET, UTC+0, with daylight saving. The same as the UK, an hour behind Spain.',
    typicalTrip: '8 to 10 days for Lisbon, Sintra and Porto, with the Douro valley or the Algarve if you have more.',
    withKids: 'Welcoming and relaxed, with children out late in the squares. Dinner is earlier than in Spain, around 8pm. The hills and cobbles are the real problem.'
  },

  entry: {
    note: 'For US passport holders. Rules differ by nationality; confirm on the official links.',
    rows: [
      ['Visa', 'Not required for tourism up to 90 days in any 180-day period across the Schengen area.'],
      ['Passport validity', 'Valid at least three months beyond your departure from Schengen, issued within the last ten years.'],
      ['ETIAS', 'A pre-travel authorisation for visa-exempt visitors has been repeatedly delayed. Check before booking.'],
      ['Schengen counting', 'Days in Portugal count toward the same 90 as days in Spain, France and the rest of Schengen.'],
      ['Tourist tax', 'Lisbon, Porto and several other municipalities charge a small per-person, per-night tax, collected at the accommodation.']
    ],
    links: [
      { label: 'Portuguese Immigration and Borders Service', url: 'https://www.aima.gov.pt/' },
      { label: 'EU: ETIAS status', url: 'https://travel-europe.europa.eu/etias_en' }
    ]
  },

  money: {
    currency: 'Euro (EUR, €)',
    cards: 'Cards work nearly everywhere, including small cafés. Multibanco is the national network and is excellent. Carry €30 for markets and small-town bakeries.',
    atms: 'Use Multibanco machines, which are at every bank and shopping centre. Avoid Euronet machines in tourist areas, which charge poorly. Always decline the machine\'s currency conversion.',
    tipping: 'Not expected. Round up, or leave 5 to 10% for a good restaurant meal. The bread, olives and cheese put on your table at the start (couvert) are charged for and you may politely send them back.',
    taxRefund: 'Non-EU residents can reclaim VAT on purchases over €50 from one shop. Portugal uses electronic kiosks at the airport, which are quick.',
    costs: [
      ['Espresso at the counter', '€0.80 to €1.20'],
      ['Pastel de nata', '€1.30 to €2'],
      ['Prato do dia lunch', '€8 to €14'],
      ['Family dinner, tasca, four people', '€45 to €80'],
      ['Lisbon metro single', '€1.80'],
      ['Lisbon to Porto, fast train, adult', '€25 to €45']
    ]
  },

  connectivity: {
    sim: 'An EU eSIM covers Portugal and the rest of the EU. Local operators MEO, NOS and Vodafone sell cheap tourist SIMs.',
    wifi: 'Widespread and good.',
    apps: [
      { name: 'CP (Comboios de Portugal)', why: 'Train tickets between Lisbon, Porto and the Algarve.' },
      { name: 'Bolt, Uber or FREENOW', why: 'All three operate and are cheap. Often cheaper than a taxi and avoids explaining an address.' },
      { name: 'Google Maps', why: 'Good for transit. The walking directions do not warn you about gradient, which in Lisbon genuinely matters.' },
      { name: 'Google Translate', why: 'For supermarket labels and rural menus.' }
    ]
  },

  transport: {
    headline: 'Trains between cities, trams and funiculars up the hills, and a car for the Douro and the Alentejo.',
    items: [
      { name: 'Trains', detail: 'The Alfa Pendular and Intercidades link Lisbon and Porto in under three hours. Book ahead for the cheap fares. Regional trains to Sintra and Cascais are cheap, frequent and covered by the Lisbon transit card.' },
      { name: 'Lisbon trams and funiculars', detail: 'Tram 28 climbs through the old city and is both a genuine sight and the single most pickpocketed place in Portugal. The funiculars (elevadores) save brutal climbs and are covered by a day pass.' },
      { name: 'Viva Viagem card', detail: 'A rechargeable card for Lisbon metro, bus, tram, funiculars and the trains to Sintra and Cascais. Buy one each at any metro station. Children under 4 travel free.' },
      { name: 'Driving', detail: 'Good motorways, mostly tolled, several of which are electronic-only with no booths. Ask the rental company for a transponder or you will receive fines later. City centres are narrow, steep and have restricted zones.' },
      { name: 'Hills', detail: 'Lisbon is built on seven hills paved with calçada, polished limestone that becomes an ice rink in rain. Shoes with grip matter more here than anywhere else in Europe, and a baby carrier beats a stroller.' }
    ]
  },

  etiquette: [
    { rule: 'The couvert on your table is not free.', why: 'Bread, olives, cheese and pâté are brought automatically and charged for. Say "não, obrigado" and they take it away without offence.' },
    { rule: 'Do not call it Spanish, and do not speak Spanish to Portuguese people.', why: 'They will understand you and it lands badly. English is more welcome than Spanish.' },
    { rule: 'Lunch is 12.30 to 3pm and dinner from 7.30pm.', why: 'Earlier than Spain, which makes Portugal considerably easier with young children.' },
    { rule: 'Greet with "bom dia" or "boa tarde" on entering a shop.', why: 'Standard courtesy, and it changes the tone of the interaction.' },
    { rule: 'In fado houses, stop talking when the singing starts.', why: 'Conversation during a fado set is a genuine breach, and you will be told.' }
  ],

  safety: {
    overall: 'Portugal is consistently rated one of the safest countries in the world, and violent crime against visitors is very rare. Pickpocketing on Lisbon tram 28 and in Porto\'s tourist core is the one real problem, and it is persistent.',
    emergencyNotes: 'Dial 112 for everything, free from any phone, with English-speaking operators. There is also a dedicated tourist support line, and the GNR and PSP both have tourist-facing police posts in Lisbon and Porto.',
    hazards: [
      { name: 'Pickpockets on tram 28', what: 'The single most targeted place in the country, along with Santa Justa lift queues and the Porto Ribeira. Organised teams work the crowded carriages. Keep bags in front, zipped, and phones out of back pockets.' },
      { name: 'Cobbles and hills', what: 'Calçada portuguesa is beautiful, polished and treacherous in rain. Falls are the most common tourist injury here. Shoes with real grip, and handrails on the funiculars.' },
      { name: 'Atlantic surf and riptides', what: 'The Atlantic is cold and the currents are serious, far more so than the Mediterranean. Nazaré and the west coast beaches have genuinely dangerous conditions. Swim only at flagged, lifeguarded beaches.' },
      { name: 'Wildfires', what: 'Interior and central Portugal burn in summer. Fires can close roads at short notice. Check warnings in July and August if you are driving inland.' },
      { name: 'Drug sellers in Lisbon', what: 'Men in Baixa and Bairro Alto approach tourists offering drugs, which are usually fake. Harmless, persistent and easily refused by walking on.' }
    ],
    scams: [
      'Pickpocketing rather than scams is the issue here.',
      'Taxi drivers at the airport taking a long route. Use Bolt or Uber, or the fixed-price taxi vouchers.',
      'Restaurants in Baixa with touts outside and no posted prices.',
      'The couvert charged at an inflated rate in tourist restaurants: check the menu for the price before accepting it.'
    ],
    lostAndFound: 'Report theft at a PSP station; there is a tourist police post at Praça dos Restauradores in Lisbon with multilingual officers, specifically for this. You need the written report for insurance.',
    withKids: 'Very safe, and children are welcomed in restaurants and kept up late. The practical risks are falls on cobbles, the Atlantic, and the hills exhausting small legs.'
  },

  health: {
    water: 'Tap water is safe across Portugal including the islands. It tastes heavily chlorinated in parts of the Algarve, which is why locals buy bottled.',
    food: 'Standards are high. Raw shellfish and percebes are a texture question, not a safety one. Soft cheese and cured meats carry the usual pregnancy cautions.',
    vaccines: 'No special vaccines required. Routine ones current.',
    medications: {
      warning: 'Straightforward.',
      points: [
        'Bring prescriptions in labelled original packaging with a copy of the prescription.',
        'Pharmacies (farmácia, green cross) sell most minor medicines, and pharmacists advise directly on minor complaints.',
        'Paracetamol and ibuprofen are pharmacy-only, not supermarket items. Bring your own children\'s formulations.',
        'Each district has a rotating 24-hour pharmacy, posted on every pharmacy door and online.'
      ]
    },
    pharmacy: 'Describe the symptom: "dor de cabeça" headache, "febre" fever, "tosse" cough, "dor de garganta" sore throat. Most pharmacists in cities speak English.',
    doctors: 'EU and UK visitors with an EHIC or GHIC get state care on the same terms as residents. Others pay. Urgência is the hospital emergency department; a centro de saúde handles everything else. Private clinics in Lisbon, Porto and the Algarve are fast and reasonably priced.',
    insurance: 'Worth having for private care and repatriation.',
    allergies: 'EU allergen law applies, so restaurants must be able to tell you about the fourteen named allergens. The hidden ingredient in Portugal is fish, specifically salt cod and tinned tuna, which appear in croquettes, salads and rice dishes. Pork fat is also used in things that read as vegetarian. Gluten-free (sem glúten) is reasonably well understood in cities.'
  },

  food: {
    intro: 'Portuguese food is grilled fish, pork, rice, bread and egg custard, and it is simpler than Spanish or Italian cooking. Fish is the thing to understand: bacalhau, salt cod, has hundreds of preparations and turns up in dishes that do not announce it. Spice is almost absent, apart from piri-piri served on the side, which makes Portugal easy for children.',
    survival: {
      title: 'Grilled chicken, bread, and a pastel de nata',
      body: 'Frango no churrasco, spit-grilled chicken with piri-piri on the side, is sold from counters in every town for around €8 a bird and feeds two children. Portuguese bread and cheese are excellent, the fruit is cheap, and a pastel de nata costs €1.30 and ends every argument. Between those, nobody in your family goes hungry regardless of what else they will not eat.'
    },
    orderingWithoutLanguage: [
      'The prato do dia, dish of the day, is chalked on a board outside most tascas and costs €8 to €14 with soup and a drink.',
      'Grilled chicken counters (churrasqueira) display the birds. Point and say how many, whole (inteiro) or half (meio).',
      'Pastelarias display every cake behind glass. Point.',
      '"Sem" means without: sem glúten, sem peixe, sem carne.',
      'Say "não, obrigado" to the couvert when it arrives and it goes away unbilled.'
    ],
    allergyCard: {
      intro: 'Show this before ordering. Portuguese kitchens are obliged to answer allergen questions.',
      local: 'Tenho alergia alimentar. Não posso comer: ____. Também não posso se estiver no molho, no caldo ou no óleo. Podem confirmar na cozinha, por favor?',
      english: 'I have a food allergy. I cannot eat: ____. Not in the sauce, stock or oil either. Could you check with the kitchen, please?',
      words: [
        ['Gluten', 'glúten', 'GLOO-ten'], ['Dairy and milk', 'lacticínios', 'lak-tee-SEE-nee-oosh'],
        ['Egg', 'ovo', 'OH-voo'], ['Fish', 'peixe', 'PAY-sheh'], ['Salt cod', 'bacalhau', 'ba-ka-LYAU'],
        ['Tuna', 'atum', 'a-TOON'], ['Shellfish', 'marisco', 'ma-REESH-koo'],
        ['Nuts', 'frutos secos', 'FROO-toosh SEH-koosh'], ['Peanut', 'amendoim', 'a-men-doo-EEN'],
        ['Soy', 'soja', 'SO-zha'], ['Pork', 'porco', 'POR-koo'], ['Beef', 'vaca', 'VA-ka'],
        ['Meat', 'carne', 'KAR-neh'], ['Sesame', 'sésamo', 'SEH-za-moo']
      ]
    },
    dishes: [
      { id: 'pastel-nata', name: 'Pastel de nata', native: 'Pastel de nata', blurb: 'Flaky pastry cup of egg custard, blistered black on top, served warm with cinnamon. The best pastry in Europe and it costs about €1.30.',
        contains: ['gluten', 'dairy', 'egg'], mayContain: [], traits: ['kid', 'plain'], spice: 0,
        where: 'Every pastelaria. Pastéis de Belém in Lisbon is the original.', price: '€' },
      { id: 'frango-churrasco', name: 'Frango no churrasco', native: 'Frango no churrasco', blurb: 'Whole chicken flattened and grilled over charcoal with piri-piri served separately. Sold from counters everywhere and the default Portuguese family dinner.',
        contains: ['chicken'], mayContain: ['spicy'], omit: { spicy: 'The piri-piri comes on the side, so the chicken itself is entirely mild.' },
        traits: ['plain', 'kid', 'cheap'], spice: 0, where: 'Churrasqueiras in every town', price: '€' },
      { id: 'bacalhau-bras', name: 'Bacalhau à Brás', native: 'Bacalhau à Brás', blurb: 'Shredded salt cod scrambled with egg, onion and matchstick potatoes, topped with olives. The most approachable of Portugal\'s hundreds of salt cod dishes.',
        contains: ['fish', 'egg'], mayContain: ['dairy'], traits: [], spice: 0, where: 'Everywhere', price: '€€' },
      { id: 'sardinhas', name: 'Grilled sardines', native: 'Sardinhas assadas', blurb: 'Whole sardines grilled over charcoal and eaten with bread and boiled potato. Summer food, and the smell of June in Lisbon.',
        contains: ['fish'], mayContain: [], traits: ['street'], spice: 0, where: 'Everywhere, June to September', price: '€€',
        order: 'Served whole with bones and head. Children often find this confronting.' },
      { id: 'bifana', name: 'Bifana', native: 'Bifana', blurb: 'Thin pork steaks simmered in garlic and white wine, stuffed into a crusty roll. The Portuguese sandwich, eaten standing at a counter.',
        contains: ['pork', 'gluten'], mayContain: ['alcohol', 'spicy'], traits: ['plain', 'cheap'], spice: 0,
        where: 'Snack bars and tascas everywhere', price: '€' },
      { id: 'caldo-verde', name: 'Caldo verde', native: 'Caldo verde', blurb: 'Potato soup with finely shredded kale and a slice of smoked sausage, finished with olive oil. The national soup, mild and comforting.',
        contains: ['pork'], mayContain: [], omit: { pork: 'Ask for it "sem chouriço" and it becomes a plain potato and kale soup.' },
        traits: ['plain', 'kid'], spice: 0, where: 'Everywhere, especially in winter', price: '€' },
      { id: 'francesinha', name: 'Francesinha', native: 'Francesinha', blurb: 'A sandwich of steak, sausage and ham, covered in melted cheese and drowned in a beer and tomato sauce, usually with a fried egg and chips. Porto\'s own, and an enormous undertaking.',
        contains: ['pork', 'beef', 'dairy', 'gluten', 'alcohol'], mayContain: ['egg', 'spicy'],
        traits: [], spice: 1, where: 'Porto', price: '€€' },
      { id: 'arroz-marisco', name: 'Arroz de marisco', native: 'Arroz de marisco', blurb: 'A wet, soupy rice with prawns, clams and crab, served in the pot for the table to share.',
        contains: ['shellfish', 'fish'], mayContain: ['spicy'], traits: [], spice: 1, where: 'Coastal restaurants', price: '€€€' },
      { id: 'polvo', name: 'Polvo à lagareiro', native: 'Polvo à lagareiro', blurb: 'Octopus roasted with garlic and a great deal of olive oil, with smashed potatoes. Tender, not chewy, when done properly.',
        contains: ['shellfish'], mayContain: [], traits: ['adventurous'], spice: 0, where: 'Everywhere', price: '€€€' },
      { id: 'queijo-pao', name: 'Bread, cheese and presunto', native: 'Pão, queijo e presunto', blurb: 'Portuguese bread is superb, the sheep\'s cheeses from Serra and Azeitão are world class, and presunto is the local cured ham.',
        contains: ['gluten', 'dairy', 'pork'], mayContain: [], traits: ['plain', 'kid'], spice: 0,
        where: 'Markets, grocers and every table', price: '€' },
      { id: 'prego', name: 'Prego', native: 'Prego no pão', blurb: 'A thin garlic steak in a bread roll, often eaten after a fish meal as a second course, which tells you something about Portuguese appetites.',
        contains: ['beef', 'gluten'], mayContain: ['dairy', 'egg'], traits: ['plain', 'kid'], spice: 0,
        where: 'Snack bars and restaurants', price: '€' },
      { id: 'bolinhos-bacalhau', name: 'Pastéis de bacalhau', native: 'Pastéis de bacalhau', blurb: 'Deep-fried croquettes of salt cod, potato and parsley, eaten warm or cold as a snack.',
        contains: ['fish', 'gluten', 'egg'], mayContain: ['dairy'], traits: ['street'], spice: 0,
        where: 'Pastelarias and bars everywhere', price: '€',
        order: 'They look and smell like plain potato croquettes, which catches out anyone avoiding fish.' },
      { id: 'arroz-doce', name: 'Arroz doce', native: 'Arroz doce', blurb: 'Rice pudding with lemon zest and a pattern of cinnamon dusted on top. Served cold, on every dessert trolley.',
        contains: ['dairy', 'egg'], mayContain: [], traits: ['plain', 'kid'], spice: 0, where: 'Everywhere', price: '€' },
      { id: 'bola-berlim', name: 'Bola de Berlim', native: 'Bola de Berlim', blurb: 'A sugared doughnut split and filled with egg cream, sold by vendors walking the beach shouting about them. A Portuguese summer institution.',
        contains: ['gluten', 'egg', 'dairy'], mayContain: [], traits: ['kid'], spice: 0, where: 'Beaches and pastelarias', price: '€' },
      { id: 'sumo-natural', name: 'Fresh orange juice and galão', native: 'Sumo natural, galão', blurb: 'Oranges squeezed to order for about €2, and galão, a milky coffee in a tall glass that is the Portuguese breakfast.',
        contains: [], mayContain: ['dairy'], traits: ['plain', 'kid'], spice: 0, where: 'Every café', price: '€' }
    ],
    chains: [
      { name: 'Churrasqueiras', why: 'Grilled chicken to take away, visible on the spit, about €8 a bird. The reliable family dinner.' },
      { name: 'Pastelarias', why: 'Every cake and savoury pastry visible behind glass, open from early morning. Point and pay.' },
      { name: 'Mercado da Ribeira / Time Out Market, Lisbon', why: 'A food hall of stalls from named chefs. Expensive for Portugal, but four people with four different requirements all eat at once.' },
      { name: 'Pingo Doce and Continente', why: 'Supermarkets with good prepared food, bakery and a well-marked "sem glúten" range.' },
      { name: 'Any tasca with a board outside', why: 'Family-run, prato do dia chalked up, €8 to €14 including soup. The best value eating in western Europe.' }
    ],
    phrases: [
      { en: 'A table for four, please', native: 'Uma mesa para quatro, por favor', say: 'OO-ma MEH-za PA-ra KWA-troo' },
      { en: 'No thank you (to the couvert)', native: 'Não, obrigado', say: 'nown oh-bree-GA-doo' },
      { en: 'I have a food allergy', native: 'Tenho alergia alimentar', say: 'TEN-yoo a-ler-ZHEE-a a-lee-men-TAR' },
      { en: 'Does this have fish?', native: 'Leva peixe?', say: 'LEH-va PAY-sheh' },
      { en: 'Without pork, please', native: 'Sem porco, por favor', say: 'seng POR-koo' },
      { en: 'Something simple for the children', native: 'Algo simples para as crianças', say: 'AL-goo SEEM-plesh PA-ra ash kree-AN-sash' },
      { en: 'The bill, please', native: 'A conta, por favor', say: 'a KON-ta por fa-VOR' }
    ]
  },

  activities: [
    { id: 'tram-28', name: 'Tram 28', native: 'Elétrico 28', city: 'Lisbon',
      blurb: 'A 1930s wooden tram grinding up through Alfama and Graça on streets barely wider than it is. A genuine sight rather than a tourist gimmick, and the most pickpocketed vehicle in Portugal.',
      ages: { min: 0 }, energy: 'low', hours: '45 minutes end to end', indoor: true, cost: '€',
      language: 'easy', stroller: false, wheelchair: false, crowded: true, motion: true, bookAhead: 'no',
      tags: ['trains', 'views', 'history'],
      tips: ['Board at Martim Moniz at the start of the line, early morning, to get a seat at all.', 'Keep bags closed and in front of you. Teams work this tram specifically and professionally.', 'Tram 12 covers much of the same ground with a fraction of the crowd.'] },

    { id: 'sintra-pena', name: 'Pena Palace and Sintra', native: 'Palácio da Pena', city: 'Sintra',
      blurb: 'A yellow and red fantasy castle on a forested peak, built by a king who wanted a stage set. Below it, Quinta da Regaleira has an initiation well you spiral down into underground tunnels.',
      ages: { min: 0, bestFrom: 5 }, energy: 'high', hours: 'full day', indoor: false, cost: '€€',
      language: 'easy', stroller: false, wheelchair: 'partial', stairs: true, crowded: true, bookAhead: 'required',
      accessNote: 'Steep forested hill with cobbles and steps. A shuttle bus runs from the gate to the palace door.',
      tags: ['history', 'nature', 'views'], familyPick: true,
      tips: ['Timed entry tickets are compulsory and sell out. Book days ahead and take the earliest slot.', 'The train from Lisbon takes 40 minutes and is covered by the Viva Viagem card. Driving in Sintra is miserable.', 'Quinta da Regaleira, with its wells, grottoes and tunnels, is usually the bigger hit with children than the palace.'] },

    { id: 'oceanario', name: 'Oceanário de Lisboa', native: 'Oceanário de Lisboa', city: 'Lisbon',
      blurb: 'One of the best aquariums in the world, built around a single vast central tank you circle on two levels, with sunfish, rays and sharks.',
      ages: { min: 0 }, energy: 'low', hours: '2 to 3 hours', indoor: true, cost: '€€',
      language: 'easy', stroller: true, wheelchair: true, bookAhead: 'recommended',
      tags: ['animals', 'nature'], familyPick: true,
      tips: ['Entirely step-free and genuinely stroller-friendly, which is rare in Lisbon.', 'The best wet-weather plan in the city.', 'Parque das Nações around it has a cable car, fountains children can run through and flat open space.'] },

    { id: 'belem', name: 'Belém: tower, monastery and the original nata', native: 'Belém', city: 'Lisbon',
      blurb: 'The riverside district the ships left from: a fortified tower in the water, a vast Manueline monastery, and the bakery that has made pastéis de Belém to the same secret recipe since 1837.',
      ages: { min: 0, bestFrom: 5 }, energy: 'moderate', hours: 'half a day', indoor: false, cost: '€',
      language: 'easy', stroller: true, wheelchair: 'partial', heatExposed: true, crowded: true, bookAhead: 'recommended',
      tags: ['history', 'food', 'views', 'religious'],
      tips: ['The tower has a narrow one-way spiral staircase controlled by a traffic light. Not possible with a stroller and tight for anyone claustrophobic.', 'Buy monastery tickets online to skip a long outdoor queue.', 'Eat the natas inside the bakery rather than queueing at the takeaway window; the room at the back is enormous and quicker.'] },

    { id: 'porto-douro', name: 'Porto riverfront and a Douro cruise', native: 'Ribeira e cruzeiro no Douro', city: 'Porto',
      blurb: 'Tiled houses stacked above the river, a double-decker iron bridge by a student of Eiffel, and port lodges on the opposite bank. The six-bridges cruise takes 50 minutes.',
      ages: { min: 0 }, energy: 'moderate', hours: 'half a day', indoor: false, cost: '€',
      language: 'easy', stroller: 'partial', wheelchair: 'partial', motion: true, crowded: true, bookAhead: 'no',
      tags: ['views', 'water', 'history', 'food'],
      tips: ['Walk across the top deck of the Dom Luís I bridge for the view; the metro runs on it too, with a narrow pedestrian lane.', 'The cable car on the Gaia side saves a steep climb up from the port lodges.', 'Port lodge tours usually admit children and give them juice, but check the individual house first.'] },

    { id: 'benagil', name: 'Benagil cave and the Algarve coast', native: 'Algar de Benagil', city: 'Algarve',
      blurb: 'A sea cave with a collapsed roof letting a circle of sunlight onto a hidden beach, reachable only from the water.',
      ages: { min: 0, bestFrom: 5 }, energy: 'moderate', hours: 'half a day', indoor: false, cost: '€€',
      language: 'easy', stroller: false, wheelchair: false, motion: true, heatExposed: true, bookAhead: 'recommended',
      tags: ['water', 'nature', 'views'],
      tips: ['Swimming into the cave is now prohibited and boats may no longer land inside it. Tours view it from the water.', 'Kayak and small-boat tours get closer than the large catamarans.', 'Cancelled in swell, which is common outside high summer.'] },

    { id: 'surf-lesson', name: 'Surf lesson on the Atlantic', native: 'Aula de surf', city: 'Ericeira, Lagos, Costa da Caparica',
      blurb: 'Portugal has the most consistent beginner surf in Europe and a school on every beach, with wetsuits, soft boards and instructors used to teaching children.',
      ages: { min: 6 }, energy: 'high', hours: '2 to 3 hours', indoor: false, cost: '€€',
      language: 'easy', stroller: false, wheelchair: false, heatExposed: true, bookAhead: 'recommended',
      tags: ['water', 'nature', 'hands_on'], familyPick: true,
      tips: ['The Atlantic is cold year round. Wetsuits are included and necessary even in August.', 'Beginner beaches are chosen for safety; do not freelance on an unlifeguarded one.', 'Ericeira is a world surfing reserve and the schools there are excellent.'] },

    { id: 'livraria-lello', name: 'Livraria Lello', native: 'Livraria Lello', city: 'Porto',
      blurb: 'A 1906 bookshop with a crimson staircase curving through the middle of it, carved wood and a stained glass ceiling. Small, extraordinary and permanently full.',
      ages: { min: 0, bestFrom: 7 }, energy: 'low', hours: '45 minutes', indoor: true, cost: '€',
      language: 'easy', stroller: false, wheelchair: false, stairs: true, crowded: true, bookAhead: 'required',
      tags: ['shopping', 'history'],
      tips: ['A timed ticket is required and the price is deducted from any book you buy.', 'Go at opening. It is tiny and by midday you shuffle rather than walk.', 'The Harry Potter connection is marketing rather than history, whatever the queue believes.'] },

    { id: 'obidos', name: 'Óbidos', native: 'Óbidos', city: 'Near Lisbon',
      blurb: 'A whitewashed village entirely inside medieval walls you can walk the top of, with a castle at one end and cherry liqueur served in chocolate cups.',
      ages: { min: 0, bestFrom: 6 }, energy: 'moderate', hours: 'half a day', indoor: false, cost: 'free',
      language: 'some', stroller: false, wheelchair: false, stairs: true, heatExposed: true, bookAhead: 'no',
      accessNote: 'The wall walk has no handrail on the inner side and a long drop. Not suitable for small children or anyone unsteady.',
      tags: ['history', 'views', 'shopping'],
      tips: ['The wall walk is genuinely unprotected in places. Take it seriously with children.', 'An hour from Lisbon by bus, and pairs well with Nazaré and its giant-wave beach.', 'The July medieval festival fills the village completely.'] },

    { id: 'lisbon-miradouros', name: 'Miradouro hopping by funicular', native: 'Miradouros', city: 'Lisbon',
      blurb: 'Lisbon\'s viewpoints, each a terrace with a kiosk café and the city falling away below. The funiculars and the Santa Justa lift exist precisely so you do not have to climb to them.',
      ages: { min: 0 }, energy: 'low', hours: '2 hours', indoor: false, cost: '€',
      language: 'easy', stroller: 'partial', wheelchair: 'partial', bookAhead: 'no',
      tags: ['views', 'relax'], familyPick: true,
      tips: ['The funiculars are covered by a Viva Viagem day pass, so the lifts are effectively free once you have one.', 'Miradouro da Senhora do Monte is the highest and the least crowded.', 'Most have a kiosk selling drinks and ice cream, which buys a sit-down in the middle of a hard walking day.'] }
  ],

  language: {
    script: 'Latin alphabet with accents and the cedilla ç. Written Portuguese is close enough to Spanish and Italian that you can usually guess a menu. Spoken Portuguese is another matter entirely.',
    pronunciation: 'European Portuguese swallows unstressed vowels and shushes its consonants. "S" at the end of a word is "sh", so Lisboa\'s residents say "Lish-BO-a". "ão" is a nasal "owng". Brazilian Portuguese, which you may have heard, is much more open and is not what you will hear here.',
    politeness: '"Faz favor" gets a waiter\'s attention. "Obrigado" if you are male, "obrigada" if female: the word agrees with the speaker, not the person thanked, which almost every visitor gets wrong.',
    phrasebook: [
      { group: 'The essential six', items: [
        { en: 'Good morning / good afternoon', native: 'Bom dia / Boa tarde', say: 'bong DEE-a / BO-a TAR-deh' },
        { en: 'Thank you (said by a man / by a woman)', native: 'Obrigado / Obrigada', say: 'oh-bree-GA-doo / oh-bree-GA-da' },
        { en: 'Please / excuse me', native: 'Por favor / Faz favor', say: 'por fa-VOR / fash fa-VOR' },
        { en: 'Yes / no', native: 'Sim / Não', say: 'seeng / nowng' },
        { en: 'I don\'t understand', native: 'Não compreendo', say: 'nowng kom-pree-EN-doo' },
        { en: 'Do you speak English?', native: 'Fala inglês?', say: 'FA-la een-GLESH' }
      ] },
      { group: 'Getting help', items: [
        { en: 'Where is the toilet?', native: 'Onde é a casa de banho?', say: 'ON-deh eh a KA-za deh BAN-yoo' },
        { en: 'How much is it?', native: 'Quanto custa?', say: 'KWAN-too KOOSH-ta' },
        { en: 'Can you write it down?', native: 'Pode escrever?', say: 'PO-deh esh-kreh-VER' },
        { en: 'I am lost', native: 'Estou perdido', say: 'shtoh per-DEE-doo' },
        { en: 'Help!', native: 'Socorro!', say: 'soo-KO-rroo' }
      ] },
      { group: 'Getting about', items: [
        { en: 'Which platform?', native: 'Qual é a linha?', say: 'kwal eh a LEEN-ya' },
        { en: 'Two adults, two children', native: 'Dois adultos, duas crianças', say: 'doysh a-DOOL-toosh, DOO-ash kree-AN-sash' },
        { en: 'Is there a lift?', native: 'Há elevador?', say: 'ah eh-leh-va-DOR' },
        { en: 'Take me to this address', native: 'Leve-me a esta morada', say: 'LEH-veh-meh a ESH-ta moo-RA-da' }
      ] },
      { group: 'Medical', items: [
        { en: 'I need a doctor', native: 'Preciso de um médico', say: 'preh-SEE-zoo deh oong MEH-dee-koo' },
        { en: 'Call an ambulance', native: 'Chame uma ambulância', say: 'SHA-meh OO-ma am-boo-LAN-see-a' },
        { en: 'Where is the pharmacy?', native: 'Onde é a farmácia?', say: 'ON-deh eh a far-MA-see-a' },
        { en: 'My child has a fever', native: 'O meu filho tem febre', say: 'oo meh-oo FEEL-yoo teng FEH-breh' }
      ] }
    ],
    signs: [
      ['Saída', 'sa-EE-da', 'Exit'],
      ['Entrada', 'en-TRA-da', 'Entrance'],
      ['Empurre / Puxe', 'em-POO-rreh / POO-sheh', 'Push / pull. "Puxe" means pull, which catches English speakers out.'],
      ['Aberto / Encerrado', 'a-BER-too / en-seh-RRA-doo', 'Open / closed'],
      ['Casa de banho', 'KA-za deh BAN-yoo', 'Toilet'],
      ['Homens / Senhoras', 'OH-mengsh / sen-YO-rash', 'Men / women'],
      ['Elevador', 'eh-leh-va-DOR', 'Lift, or a street funicular'],
      ['Bilheteira', 'beel-yeh-TAY-ra', 'Ticket office'],
      ['Farmácia', 'far-MA-see-a', 'Pharmacy, green cross'],
      ['Urgências', 'oor-ZHEN-see-ash', 'Emergency department'],
      ['Couvert', 'koo-VER', 'The bread and olives brought to your table, and charged for'],
      ['Prato do dia', 'PRA-too doo DEE-a', 'Dish of the day'],
      ['Sem glúten', 'seng GLOO-ten', 'Gluten free'],
      ['Cuidado', 'kwee-DA-doo', 'Caution']
    ],
    tips: [
      'Try English first in Lisbon, Porto and the Algarve. It works more often than in any other southern European country.',
      'Do not default to Spanish. It is understood and poorly received.',
      '"Obrigado" or "obrigada" depends on who is speaking, not who is thanked. Getting this right is noticed.',
      'Google Maps does not warn you about gradient. In Lisbon, check the contour before committing to a walk with a stroller.'
    ]
  },

  scenarios: [
    { situation: 'Your bag or phone is stolen',
      steps: [
        'Report it to the PSP. Lisbon has a tourist police post at Praça dos Restauradores with multilingual officers set up for exactly this.',
        'Get the written report; insurers and consulates require it.',
        'Cancel cards immediately, and keep one card separate from the other adult\'s.',
        'Tram 28, the Santa Justa queue and Porto\'s Ribeira are where almost all of this happens.'
      ] },
    { situation: 'Someone is ill or injured',
      steps: [
        'Dial 112. Operators handle English.',
        'For anything minor, go to a farmácia first. Portuguese pharmacists treat and advise directly.',
        'Urgência is the hospital emergency department and triages by colour, so a minor complaint can mean a long wait. A centro de saúde or a private clinic is faster.',
        'EU and UK visitors: carry the EHIC or GHIC. Others pay and claim back.'
      ] },
    { situation: 'Someone falls on the cobbles',
      steps: [
        'This is the most common tourist injury in Lisbon and Porto, especially in rain.',
        'Calçada becomes genuinely slippery when wet. Shoes with real grip are not optional here.',
        'For a suspected fracture, call 112; for a sprain, a pharmacy will supply strapping and advice.',
        'Take the funiculars and lifts rather than the steep descents when it is wet. They are covered by a day pass.'
      ] },
    { situation: 'The sea looks fine but it is not',
      steps: [
        'Atlantic beaches have a flag system and lifeguards in season. Red means the water is closed.',
        'Riptides on the west coast are strong and the water is cold enough to shock.',
        'Swim only at a flagged, lifeguarded beach, and keep children between the flags.',
        'If caught in a current, swim parallel to the shore rather than against it.'
      ] }
  ],

  links: [
    { label: 'US travel advisory for Portugal (live)', url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/portugal-travel-advisory.html' },
    { label: 'CDC travel health: Portugal', url: 'https://wwwnc.cdc.gov/travel/destinations/traveler/none/portugal' },
    { label: 'UK FCDO advice: Portugal', url: 'https://www.gov.uk/foreign-travel-advice/portugal' },
    { label: 'Parques de Sintra: official tickets', url: 'https://www.parquesdesintra.pt/en/' },
    { label: 'Visit Portugal (official tourism)', url: 'https://www.visitportugal.com/en' }
  ]
});
