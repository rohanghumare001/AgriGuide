
  // Start with empty data (or keep some pre-filled if you want)
  const stateData = {
    "Maharashtra": {
      capital: " Mumbai",
      farmers: " 1.5 crore (15 million+)",
      Main_crops:"Cotton, sugarcane, soybean, jowar, wheat, rice, pulses, grapes, pomegranates, bananas",
      Economy:"Agriculture contributes significantly along with industry and services; major producer of cotton, sugarcane, and fruits",
      Challenges:"Water scarcity, droughts, and dependence on monsoon, especially in Vidarbha & Marathwada",
      info: "Maharashtra is one of India’s largest agricultural states, with diverse crop production and strong contributions to the national food supply, but farmers often struggle with climate and water-related issues.",
    },
    "Goa": {
      capital: " Panaji",
      farmers: " Around 1.2 lakh (120,000) farmers",
      Main_crops:"Paddy (rice), coconut, cashew, arecanut, sugarcane, mango, jackfruit, banana",
      Economy:"Agriculture is small compared to tourism and mining but remains vital for rural livelihoods; cashew and coconut are key cash crops",
      Challenges:"Declining interest in farming due to urbanization, shrinking cultivable land, labor shortages, and heavy dependence on monsoon",
      info: "Goa’s agriculture is mainly traditional and subsistence-based, with rice and cashew as leading crops. While tourism dominates the economy, farming still supports many rural households.",
    },
    "Karnataka": {
      capital: " Bengaluru",
      farmers: " Around 76 lakh (7.6 million) farmers",
      Main_crops:"Ragi, jowar, rice, maize, sugarcane, cotton, pulses, oilseeds, coffee, spices, fruits (mango, banana)",
      Economy:"Agriculture is a major contributor; Karnataka is the largest producer of coffee and silk in India, and also a leading state in horticulture production",
      Challenges:"Irregular rainfall, frequent droughts, water scarcity, fragmented landholdings, and market fluctuations",
      info: "Karnataka’s agriculture is diverse with both food and cash crops, supported by strong horticulture and plantation crops. Despite water and climate challenges, it remains a key contributor to the state’s economy and India’s coffee production.",
    },
    "Kerala": {
      capital: " Thiruvananthapuram",
      farmers: " Around 36 lakh (3.6 million) farmers",
      Main_crops:"Coconut, rubber, rice, banana, spices (black pepper, cardamom, ginger, turmeric), tea, coffee, cashew",
      Economy:"Agriculture plays a key role along with remittances and tourism; Kerala is the largest producer of coconut, black pepper, and natural rubber in India",
      Challenges:"Small and fragmented landholdings, declining youth interest in farming, soil degradation, floods, and heavy dependence on cash crops",
      info: "Kerala’s agriculture is dominated by plantation and cash crops, especially spices and coconut, making it vital for both state and national exports. However, challenges like shrinking farmland and climate risks affect long-term sustainability.",
    },
    "Tamilnadu": {
      capital: " Chennai",
      farmers: "  Around 85 lakh (8.5 million) farmers",
      Main_crops:"Rice (paddy), sugarcane, cotton, maize, groundnut, pulses, banana, coconut, mango, sunflower",
      Economy:"Agriculture is an important sector; Tamil Nadu is a leading producer of rice, bananas, coconuts, flowers, and sugarcane, and also strong in dairy and poultry farming",
      Challenges:"Water scarcity, over-dependence on monsoons, declining groundwater, fragmentation of land, and urbanization pressure",
      info: "Tamil Nadu has a well-diversified agricultural base with strong food crop and horticulture production. Despite challenges of water shortage and land fragmentation, it remains one of India’s top states in rice, fruit, and flower cultivation.",
    },
    "Andhra": {
      capital: " Amaravati (proposed), administrative functions in Vijayawada and Visakhapatnam",
      farmers: " Around 62 lakh (6.2 million) farmers",
      Main_crops:"Rice (paddy), maize, groundnut, pulses, sugarcane, cotton, chilies, tobacco, mango, banana",
      Economy:"Agriculture is the backbone of the state; Andhra Pradesh is known as the “Rice Bowl of India” and is also the top producer of chilies and mangoes",
      Challenges:"Cyclones, floods, droughts, soil salinity in coastal areas, water management issues, and market price fluctuations",
      info: "Andhra Pradesh has a strong agricultural base dominated by rice cultivation, along with fruits and spices. Despite natural calamities and water-related challenges, it remains a leading agricultural state in India.",
    },
    "Telangana": {
      capital: " Hyderabad",
      farmers: " Around 55–60 lakh cultivators ( 55% of the population depends on agriculture)",
      Main_crops:"Rice (paddy is the staple), cotton, maize, pulses, groundnut, chillies, and oilseeds.",
      Economy:"Agriculture contributes about 16–18% of Telangana’s GSDP. The state is one of the largest producers of rice and cotton in India.",
      Challenges:"Dependence on monsoon despite irrigation projects",
      info: "Telangana is known as the “Rice Bowl of India (South)”, with the Kaleshwaram Lift Irrigation Project playing a big role in irrigation. The government also runs the Rythu Bandhu scheme, providing direct financial support to farmers.",
    },
    "Rajasthan": {
      capital: " Jaipur",
      farmers: " Around 60–65 lakh cultivators (62% of the population depends on agriculture)",
      Main_crops:"Wheat, barley, pulses, bajra (pearl millet), maize, mustard, and groundnut. Rajasthan is the largest producer of bajra, mustard, and wool in India.",
      Economy:"Agriculture contributes about 25% of Rajasthan’s GSDP. Animal husbandry (sheep, goat, and camel rearing) is also a major part of rural economy.",
      Challenges:"Low rainfall and frequent droughts (arid & semi-arid climate)",
      info: "Rajasthan is India’s largest state by area with diverse agro-climatic zones. The Indira Gandhi Canal has transformed parts of the Thar Desert into fertile land. Livestock rearing and dairy (especially camel and goat) play a major role alongside crop farming.",
    },
    "Gujarat": {
      capital: " Gandhinagar",
      farmers: " Around 45–50 lakh cultivators (≈ 50% of population engaged in agriculture & allied activities)",
      Main_crops:"Cotton, groundnut, rice, wheat, bajra, maize, pulses, sugarcane, and fruits like mango & banana. Gujarat is India’s largest producer of cotton and groundnut.",
      Economy:"Agriculture contributes about 20% of Gujarat’s GSDP. The state is a leader in agro-based industries, dairy (Amul – Anand model), and fisheries.",
      Challenges:"Salinity and water scarcity in Saurashtra & Kutch regions",
      info: "Gujarat has a strong cooperative farming model (Amul Dairy revolution). The state promotes modern irrigation like drip & sprinkler systems. Kutch region is emerging in horticulture and organic farming despite being arid.",
    },
    "MP": {
      capital: " Bhopal",
      farmers: "Around 70–75 lakh cultivators (65% of the population depends on agriculture)",
      Main_crops:"Wheat, soybean, gram (chickpea), rice, maize, pulses, oilseeds, and cotton. MP is the largest producer of soybean, gram, and pulses in India.",
      Economy:"Agriculture contributes about 28% of MP’s GSDP. The state is called the “Soybean State of India” and also plays a major role in wheat and pulse production.",
      Challenges:"Uneven rainfall and frequent droughts in Bundelkhand region",
      info: "Madhya Pradesh is known as the “Heart of India” and is a leading state in agricultural output. The Narmada River valley provides fertile land, and irrigation projects are boosting crop production.",
    },
    "UP": {
      capital: " Lucknow",
      farmers: " Around 1.5–1.6 crore cultivators (70% of the population depends on agriculture)",
      Main_crops:"Sugarcane, wheat, rice, pulses, potatoes, maize, and oilseeds. UP is the largest producer of sugarcane, wheat, and potatoes in India.",
      Economy:"Agriculture contributes about 25% of UP’s GSDP. The state is called the “Sugar Bowl of India” and is a major contributor to India’s food grain stock.",
      Challenges:"Small and fragmented land holdings",
      info: "Uttar Pradesh is India’s most populous state and a leading food grain producer. The Ganga-Yamuna Doab region is very fertile, making UP a hub of agriculture. Sugarcane-based industries and dairying also provide large-scale rural employment.",
    },
    "Odisha": {
      capital: " Bhubaneswar",
      farmers: " Around 45–50 lakh cultivators (65% of the population depends on agriculture & allied sectors)",
      Main_crops:"Rice (dominant crop), pulses, oilseeds, maize, jute, groundnut, sugarcane, coconut, cashew, and vegetables. Odisha is known as the “Rice Bowl of Eastern India.”",
      Economy:"Agriculture contributes about 20% of Odisha’s GSDP. Fisheries, horticulture, and livestock also play important roles.",
      Challenges:"Frequent cyclones and floods due to coastal location",
      info: "Odisha’s agriculture is rice-dominated, with more than 75% of cultivable land under paddy. The state government promotes millets, fisheries, and tribal farming practices. Odisha is also among India’s largest producers of cashew and coconut.",
    },
    "Chhattisgarh": {
      capital: " Raipur",
      farmers: " Around 37–40 lakh cultivators (≈ 65% of the population depends on agriculture)",
      Main_crops:"Rice (dominant), maize, pulses, oilseeds, sugarcane, and minor millets. Chhattisgarh is known as the “Rice Bowl of India (Central)”.",
      Economy:"Agriculture contributes about 18–20% of the state’s GSDP. The majority of rural households depend on paddy farming, while forest produce also supports tribal communities.",
      Challenges:"Heavy dependence on monsoon (irrigation coverage is low)",
      info: "Chhattisgarh is a major rice-producing state with fertile plains in the central region. The government is promoting millets, pulses, and organic farming, along with schemes to support tribal farmers and forest-based livelihoods.",
    },
    "Jharkhand": {
      capital: " Ranchi",
      farmers: " Around 25–30 lakh cultivators (≈ 60% of the population depends on agriculture)",
      Main_crops:"Rice (kharif), pulses, maize, wheat, oilseeds, millets, and horticultural crops like lac, fruits (mango, litchi), vegetables, and medicinal plants.",
      Economy:"Agriculture contributes about 15–17% of Jharkhand’s GSDP. The state is rich in minerals, so agriculture is secondary but still vital for rural livelihoods.",
      Challenges:"Undulating & hilly terrain, limiting large-scale farming",
      info: "Jharkhand has a mix of tribal and smallholder farming systems. While rice dominates, the state has strong potential in horticulture, lac cultivation, and organic farming. Government schemes are focusing on millets, irrigation, and tribal farmer support.",
    },
    "Bengal": {
      capital: " Kolkata",
      farmers: " Around 55–60 lakh cultivators (≈ 65% of the population depends on agriculture & allied activities)",
      Main_crops:"Rice (largest producing state), jute, potato, sugarcane, maize, pulses, oilseeds, tea (Darjeeling), and fruits like mango, banana, and litchi.",
      Economy:"Agriculture contributes about 20% of West Bengal’s GSDP. The state is the largest producer of rice, jute, and vegetables in India, and a leading producer of tea and fish (inland & aquaculture).",
      Challenges:"Frequent floods and cyclones in coastal & delta regions",
      info: "West Bengal is called the “Food Basket of Eastern India”, leading in rice, fish, jute, and tea production. The fertile Gangetic plains and abundant rainfall make it agriculturally rich, while Sundarbans region faces unique farming challenges.",
    },
    "Bihar": {
      capital: " Panaji",
      farmers: " Around 1.2 lakh (120,000) farmers",
      Main_crops:"Paddy (rice), coconut, cashew, arecanut, sugarcane, mango, jackfruit, banana",
      Economy:"Agriculture is small compared to tourism and mining but remains vital for rural livelihoods; cashew and coconut are key cash crops",
      Challenges:"Declining interest in farming due to urbanization, shrinking cultivable land, labor shortages, and heavy dependence on monsoon",
      info: "Goa’s agriculture is mainly traditional and subsistence-based, with rice and cashew as leading crops. While tourism dominates the economy, farming still supports many rural households.",
    },
    "Haryana": {
      capital: " Chandigarh (shared with Punjab",
      farmers: " Around 20–22 lakh cultivators (55% of the population depends on agriculture & allied activities)",
      Main_crops:"Wheat, rice, sugarcane, cotton, maize, bajra, barley, pulses, and oilseeds. Haryana is among the top producers of wheat, rice, and milk in India.",
      Economy:"Agriculture contributes about 18% of Haryana’s GSDP. The state played a key role in the Green Revolution, and has high farm mechanization and irrigation coverage.",
      Challenges:"Declining groundwater table due to over-irrigation (paddy cultivation)",
      info: "Haryana is one of India’s most agriculturally advanced states with high productivity of wheat and rice. The state is also a leader in dairy, horticulture, and poultry farming.",
    },
    "Delhi": {
      capital: " New Delhi (also the National Capital of India)",
      farmers: " Around 50–70 thousand cultivators (very small share, as Delhi is largely urbanized)",
      Main_crops:"Vegetables (cauliflower, cabbage, brinjal, spinach, okra, tomato), cereals (wheat, bajra, maize), pulses, fruits, and fodder crops.",
      Economy:"Agriculture contributes less than 1% to Delhi’s GSDP. Farming is limited but important for peri-urban vegetable supply to Delhi markets. Dairy and poultry also support rural households.",
      Challenges:"Rapid urbanization reducing cultivable land",
      info: "Delhi’s agriculture is now mainly vegetable and dairy-focused, supplying fresh produce to the city’s population. Despite limited area, urban and peri-urban farming, rooftop gardens, and hydroponics are emerging trends.",
    },
    "Panjab": {
      capital: " Chandigarh (shared with Haryana)",
      farmers: " Around 22–25 lakh cultivators (≈ 65% of the population depends on agriculture & allied sectors)",
      Main_crops:"Wheat, rice (paddy), maize, sugarcane, cotton, barley, pulses, and fruits like kinnow (citrus). Punjab is called the “Granary of India” and contributes a major share to India’s food grain buffer stock.",
      Economy:"Agriculture contributes about 25% of Punjab’s GSDP. The state has one of the highest levels of farm mechanization and irrigation coverage in India.",
      Challenges:"Declining groundwater table due to over-irrigation (especially rice)",
      info: "Punjab is one of the most agriculturally advanced states in India, central to the Green Revolution. It remains a leading producer of wheat and rice, with high productivity, but now focuses on crop diversification, horticulture, and dairy to ensure sustainable farming.",
    },
    "Uttarakhand": {
      capital: " Dehradun (Winter), Gairsain (Summer)",
      farmers: " Around 9–10 lakh cultivators (55–60% of the population depends on agriculture & allied activities)",
      Main_crops:"Rice, wheat, maize, pulses, oilseeds, sugarcane, potato, fruits (apple, peach, plum), and spices. The state is also famous for organic farming and medicinal plants.",
      Economy:"Agriculture contributes about 15–17% of Uttarakhand’s GSDP. Horticulture, floriculture, and dairy also play a growing role.",
      Challenges:"Declining interest in farming due to urbanization, shrinking cultivable land, labor shortages, and heavy dependence on monsoon",
      info: "Uttarakhand is known for hill and organic farming. The state promotes horticulture, floriculture, medicinal & aromatic plants, and eco-friendly farming. Apple and off-season vegetable cultivation are key strengths.",
    },
    "Himachal": {
      capital: " Shimla",
      farmers: " Around 9–10 lakh cultivators (≈ 70% of the population depends on agriculture & horticulture)",
      Main_crops:"Maize, wheat, barley, rice, pulses, potato, and fruits. Himachal is world-famous for apples and also produces peach, plum, apricot, litchi, and kiwifruit. Floriculture and off-season vegetables (tomato, capsicum, peas) are also important.",
      Economy:"Agriculture contributes about 13–15% of the state’s GSDP. Horticulture (especially apple economy) is a backbone for rural income.",
      Challenges:"Mountainous terrain and limited cultivable land",
      info: "Himachal Pradesh is known as the “Apple State of India”. The state is shifting from traditional cereals to horticulture, floriculture, and organic farming. Off-season vegetables and high-value crops are helping farmers increase income.",
    },

    "JK": {
      capital: " Srinagar",
      farmers: " Around 9–10 lakh cultivators (≈ 60% of the population depends on agriculture & allied activities)",
      Main_crops:"Rice, maize, wheat, barley, pulses, oilseeds, and saffron. J&K is world-famous for apples, cherries, walnuts, almonds, apricots, and saffron (Pampore region).",
      Economy:"Agriculture contributes about 16–18% of J&K’s GSDP. Horticulture is a major income source, with apples and dry fruits forming the backbone of rural livelihood.",
      Challenges:"Mountainous terrain and limited plain land",
      info: "Jammu & Kashmir is called the “Fruit Bowl of India”, producing premium apples, walnuts, almonds, cherries, and saffron. The government is promoting high-density apple plantations, cold storage, floriculture, and organic farming to boost farm income.",
    },

    "Ladakh": {
      capital: " Leh & Kargil",
      farmers: " Around 60–70 thousand cultivators (a smaller share, as much of Ladakh is cold desert)",
      Main_crops:"Barley (staple crop), wheat, buckwheat, peas, vegetables (carrot, radish, potato, cabbage), and fruits like apricot & apple in warmer valleys.",
      Economy:"Agriculture contributes a small share to Ladakh’s economy (mostly subsistence farming). Horticulture (especially apricot in Kargil & Leh) and animal husbandry (yak, sheep, goat, pashmina wool) are very important.",
      Challenges:"Harsh cold desert climate with very short growing season",
      info: "Ladakh has a unique cold desert farming system. Traditional farming focuses on barley and vegetables, while horticulture (apricots, apples) and pashmina goat rearing are gaining importance. Solar greenhouses and drip irrigation are being promoted to extend the growing season.",
    },
    "Sikkim": {
      capital: " Gangtok",
      farmers: "Around 3–3.5 lakh cultivators (≈ 65% of the population depends on agriculture & allied sectors)",
      Main_crops:"Maize, paddy, wheat, barley, buckwheat, pulses, potato, ginger, cardamom, oranges, and vegetables. Sikkim is famous for large cardamom (biggest producer in India) and organic fruits & vegetables.",
      Economy:"Agriculture contributes about 15–17% of Sikkim’s GSDP. The state is a leader in organic farming and exports organic produce worldwide.",
      Challenges:"Hilly and mountainous terrain limiting large-scale farming",
      info: "Sikkim is India’s first fully organic state (2016). It is world-famous for large cardamom, ginger, oranges, and organic vegetables. The government promotes eco-friendly, sustainable, and organic farming practices to boost farmer income.",
    },
    "Haryana": {
      capital: " Chandigarh (shared with Punjab)",
      farmers: " Around 20–22 lakh cultivators (55% of the population depends on farming & allied activities)",
      Main_crops:"Wheat, rice (paddy), sugarcane, cotton, maize, bajra, pulses, oilseeds, and vegetables. Haryana is among the top producers of wheat, rice, milk, and cotton in India.",
      Economy:"Agriculture contributes about 18% of Haryana’s GSDP. The state was a key player in the Green Revolution, with high productivity, strong irrigation, and mechanization.",
      Challenges:"Declining groundwater due to intensive paddy cultivation",
      info: "Haryana is one of the most advanced farming states, with strong emphasis on food grains, dairy, and horticulture. It is also India’s second-largest contributor of food grains to the central pool after Punjab.",
    },


  };

  // Show info function
  function showInfo(state) {
    let data = stateData[state];

    if (!data) {
      // If info not already defined → ask user to enter it
      const capital = prompt(`Enter the capital of ${state}:`);
      const farmers = prompt(`Enter the farmers of ${state}:`);
      const info = prompt(`Enter some information about ${state}:`);
      

      if (capital && farmers && info && Main_crops && Economy && Challenges) {
        data = { capital, farmers, info,Main_crosp,Economy,Challenges};
        stateData[state] = data; // Save for future clicks
      } else {
        alert("Incomplete details entered!");
        return;
      }
    }

    // Show data in info box
    document.getElementById("stateName").innerText = state;
    document.getElementById("stateInfo").innerHTML =
      `<strong>Capital:</strong> ${data.capital}<br><br>
       <strong>Farmers:</strong> ${data.farmers}<br><br>
       <strong>Main crops:</strong> ${data.Main_crops}<br><br>
       <strong>Economy Contributes:</strong> ${data.Economy}<br><br>
       <strong>Challenges:</strong> ${data.Challenges}<br><br>
       <strong>Agriculcture Info:</strong> ${data.info}<br><br>`;

    // Show image if provided
    document.getElementById("stateImage").innerHTML = data.image
      ? `<img src="${data.image}" alt="${state} image" style="width:200px;margin-top:10px;border:2px solid #ccc;border-radius:8px;">`
      : "";
  }
