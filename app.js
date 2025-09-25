// Embedded CSV data
const CAMPAIGNS_CSV = `Name,Special?,Year,Theater,Short Campaign,Medium Campaign,Long Campaign,Newbie,Green,Average,Skilled,Ace,Warrior,
North Atlantic Skirmishes,No,1988,Atlantic,80,90,,1,2,2,1,,,
North Atlantic Sea Lanes,No,1988,Atlantic,90,100,,1,2,2,2,,,
Atlantic War,No,1988,Atlantic,90,100,,1,2,2,1,,,
Hold the Line,No,1983,Atlantic,80,80,,1,2,2,2,,,
Med/Black Sea Assault,No,1988,Atlantic,,120,120,1,2,2,1,,,
Invasion of Hokkaido,No,1988,Pacific,100,120,120,2,2,1,1,,,
Indonesian Soviet Influence,No,1983,Pacific,70,80,,1,2,1,,,,
Escape and Evade,Yes,1988,Pacific,,,,,,,,,,
Falkland Islands War,Yes,1982,Atlantic,80,,,1,1,2,1,,,
Destroy the Kirov,Yes,1988,Pacific,100,,,1,1,2,2,,,`;

const COMMANDERS_CSV = `Name,Type
Young (UK),Task Force Commander
Woodward (UK),Task Force Commander
Bryan,Task Force Commander
Munson,Task Force Commander
Kinsley,Task Force Commander
Bouchard,Task Force Commander
Ewen,Task Force Commander
Crutchley (Australia) ,Task Force Commander
Garnier (Canada),Task Force Commander
Galvin (NATO),Task Force Commander
Blout (NATO),Task Force Commander
Shadlers (Australia),SSN Commander
Kasai (Japan),SSN Commander
Soar (UK),SSN Commander`;

const SHIPS_CSV = `country,stype,sname,class,year_from,theatre,tags,initialCost
USA,Destroyer,USS John Rodgers DD-983,Spruance,1979,Atlantic,Helicopter SH-3 | TLAM | TA,20
USA,Frigate,USS Knox FF-1052,Knox,1969,Pacific,Helicopter SH-2 | TA,10
USA,Frigate,USS Rentz FFG-46,Oliver Hazard Perry,1984,Pacific,Helicopter SH-2 | TA,8
USA,Frigate,USS Curts FFG-38,Oliver Hazard Perry,1983,Pacific,Helicopter SH-2 | TA,8
USA,Frigate,USS Cook FF-1083,Knox,1971,Pacific,Helicopter SH-2 | TA,10
USA,Frigate,USS Crommelin FFG-37,Oliver Hazard Perry,1983,Pacific,Helicopter SH-2 | TA,8
USA,Destroyer,USS Scott DDG-995,Kidd,1981,Atlantic,Helicopter SH-2F,16
USA,Destroyer,USS Mahan DDG-42,Farragut,1960,Atlantic,,12
USA,Destroyer,USS Dewey DDG-45,Farragut,1959,Atlantic,,12
USA,Destroyer,USS Richard E. Byrd DDG-23,Charles F. Adams,1964,Atlantic,,12
USA,Destroyer,USS Spruance DD-963,Spruance,1975,Atlantic,,20
USA,Frigate,USS Reuben James FFG-57,Oliver Hazard Perry,1986,Pacific,,8
USA,Frigate,USS Kirk FF-1087,Knox,1972,Pacific,Helicopter SH-2 | TA,10
USA,Frigate,USS Barbey FF-1088,Knox,1972,Pacific,Helicopter SH-2 | TA,10
USA,Frigate,USS O'Callahan FF-1051,Garcia,1968,Pacific,Helicopter SH-2,6
USA,Frigate,USS Brewton FF-1086,Knox,1972,Pacific,Helicopter SH-2 | TA,10
USA,Cruiser,USS Bunker Hill CG-52,Ticonderoga,1986,Pacific,Helicopter SH-60B | TLAM(VLS) | TA | Missile Shield,26
USA,Cruiser,USS Antietam CG-54,Ticonderoga,1987,Pacific,Helicopter SH-60B | TLAM(VLS) | TA | Missile Shield,26
USA,Cruiser,USS Mobile Bay CG-53,Ticonderoga,1987,Pacific,Helicopter SH-60B | TLAM(VLS) | TA | Missile Shield,26
USA,Cruiser,USS Halsey CG-23,Leahy,1963,Pacific,,16
USA,Cruiser,USS Texas CGN-39,Virginia,1977,Pacific,TLAM,20
USA,Cruiser,USS Sterett CG-31,Belknap,1967,Pacific,Command Ship | Helicopter SH-2,18
USA,Battleship,USS Missouri BB-63,Iowa,1986,Pacific,Command Ship | Helicopter | RQ-2 | TLAM,20
USA,Battleship,USS Iowa BB-61,Iowa,1984,Atlantic,Command Ship | Helicopter | RQ-2 | TLAM,20
USA,Cruiser,USS Gridley CG-21,Leahy,1963,Atlantic,,16
USA,Cruiser,USS Ticonderoga CG-47,Ticonderoga,1983,Atlantic,Helicopter SH-60B | TA | Missile Shield,22
USA,Cruiser,USS Wainwright CG-28,Belknap,1966,Atlantic,Command Ship | Helicopter SH-2,18
USA,Cruiser,USS Leyte Gulf CG-55,Ticonderoga,1987,Atlantic,Helicopter SH-60B | TLAM(VLS) | TA | Missile Shield,26
USA,Cruiser,USS Virginia CGN-38,Virginia,1976,Atlantic,TLAM,20
USA,Destroyer,USS Waddell DDG-24,Charles F. Adams,1964,Pacific,,12
USA,Destroyer,USS Cochrane DDG-21,Charles F. Adams,1964,Pacific,,12
USA,Destroyer,USS Paul Foster DD-964,Spruance,1976,Pacific,Helicopter SH-3 | TLAM | TA,20
USA,Destroyer,USS Fletcher DD-992,Spruance,1980,Pacific,Helicopter SH-3 | TLAM | TA,20
USA,Destroyer,USS Callaghan DDG-994,Kidd,1980,Pacific,Helicopter SH-2F,16
USA,Destroyer,USS Cushing DD-985,Spruance,1979,Pacific,Helicopter SH-3 | TLAM | TA,20
USA,Destroyer,USS Preble DDG-46,Farragut,1960,Pacific,,12
USA,Frigate,USS Pharris FF-1094,Knox,1974,Atlantic,Helicopter SH-2,10
USA,Frigate,USS Truett FF-1095,Knox,1974,Atlantic,Helicopter SH-2 | TA,10
USA,Frigate,USS Valdez FF-1096,Knox,1974,Atlantic,Helicopter SH-2 | TA,10
USA,Frigate,USS Voge FF-1047,Garcia,1966,Atlantic,Helicopter SH-2,6
USA,Frigate,USS De Wert FFG-45,Oliver Hazard Perry,1983,Atlantic,Helicopter SH-2 | TA,8
USA,Frigate,USS Doyle FFG-39,Oliver Hazard Perry,1983,Atlantic,Helicopter SH-2 | TA,8
USA,Frigate,USS Underwood FFG-36,Oliver Hazard Perry,1983,Atlantic,Helicopter SH-2 | TA,8
UK,Frigate,HMS Minerva F45,Leander,1979,Atlantic,Helicopter Lynx MK2,10
UK,Frigate,HMS. Argonaut F56,Leander,1980,Atlantic,Helicopter Lynx MK2 | TA,12
UK,Frigate,HMS Avenger F185,Type 21,1978,Atlantic,Helicopter Lynx MK2 | TA,10
UK,Frigate,HMS Broadsword F88,Type 22,1979,Atlantic,Helicopter Lynx MK2,10
UK,Destroyer,HMS Glamorgan D19,County,1956,Atlantic,Helicopter | HAS MK3,16
UK,Destroyer,HMS Exeter D89,Type 42,1980,Atlantic,Helicopter Lynx MK2,14
UK,Destroyer,HMS Sheffield D80,Type 42,1971,Atlantic,Helicopter Lynx MK2,14
Australia,Submarine,HMAS Otama S62SSK,Oberon,1978,Pacific,,36
UK,Submarine,HMS Trafalgar S 107 SSN,Trafalgar,1983,Atlantic,TLAM | Mine | TA,40
France,Cruiser,FMS Colbert C611,Colbert,1959,Atlantic,Helicopter SA 321G,14
France,Frigate,FMS Dupleix D641,Type C 70,1981,Atlantic,Helicopter MK.2 | TA,12
France,Frigate,FMS Jean De Vienne D643,Type C 70,1984,Atlantic,Helicopter MK.2 | TA,12
France,Frigate,FMS Drogou F 783,Type A 69,1976,Atlantic,,8
France,Frigate,FMS Duquesne D603,Suffren,1970,Atlantic,TA,12
Italy,Frigate,Grecale F-571,Maestrale,1983,Atlantic,Helicopter AB-212 | TA,12
Italy,Frigate,Lupo F564,Lupo,1977,Atlantic,Helicopter AB-212,10
Italy,Frigate,Aliseo F574,Maestrale,1983,Atlantic,Helicopter AB-212 | TA,12
Italy,Cruiser,Andrea Doria C553,Andrea Doria,1864,Atlantic,Helicopter AB-212 (2),14
Canada,Destroyer,HMCS Huron DDG281,Iroquois,1972,Atlantic,Helicopter CH-124 | TA,12
Canada,Frigate,HMCS Nipigon F266,Annapolis,1964,Atlantic,Helicopter CH-124 | TA,8
Canada,Frigate,HMCS Yukon DDG263,Mackenzie,1963,Atlantic,TA,8
Canada,Destroyer,HMCS Iroquois DDG280,Iroquois,1972,Atlantic,Helicopter CH-124 | TA,12
Australia,Destroyer,HMAS Perth D38,Perth,1965,Pacific,,12
Australia,Frigate,HMAS Adelaide FFG01,Adelaide,1980,Pacific,SH-60,10
Australia,Frigate,HMAS Torrens DE53,River,1971,Pacific,,8
Australia,Frigate,HMAS Canberra FFG02,Adelaide,1981,Pacific,SH-60,10
Australia,Destroyer,HMAS Brisbane D41,Perth,1967,Pacific,,12
Spain,Frigate,Santa Maria F81,Santa Maria,1986,Atlantic,Helicopter S-70B | TA,10
Germany,Destroyer,Lutiens D-185,Lutiens,1969,Atlantic,,12
Germany,Frigate,Karlsruhe F212,Type 122,1984,Atlantic,Helicopter WG13,10
Germany,Frigate,Bremen F207,Type 122,1982,Atlantic,Helicopter WG13,10
Germany,Destroyer,Hamburg D181,Type 101A,1982,Atlantic,,12
Germany,Destroyer,Rommel D187,Lutjens,1970,Atlantic,,12
Japan,Submarine,JDS Mochishio SS574 SSK,Yuushio,1981,Pacific,Mine | TA,36
Japan,Destroyer,Hatakaze DD171,Hatakaze,1986,Pacific,,14
Japan,Frigate,Chitose DE220,Chikugo,1973,Pacific,,8
Japan,Frigate,Yubari DE227,Yubari,1983,Pacific,,10
Japan,Destroyer,Asagiri DD151,Asagiri,1988,Pacific,,12`;

function SpruanceLeaderRandomizer() {
  const [campaigns, setCampaigns] = React.useState([]);
  const [ships, setShips] = React.useState([]);
  const [commanders, setCommanders] = React.useState([]);
  const [selectedCampaign, setSelectedCampaign] = React.useState(null);
  const [campaignLength, setCampaignLength] = React.useState(null);
  const [taskForce, setTaskForce] = React.useState(null);
  const [step, setStep] = React.useState('campaignSelection');
  const [reserveSO, setReserveSO] = React.useState(0);
  const [reserveInput, setReserveInput] = React.useState('');
  const [selectedFlagship, setSelectedFlagship] = React.useState('');
  const [selectedCommander, setSelectedCommander] = React.useState('');

  const parseCSV = (text) => {
    const lines = text.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    return lines.slice(1).map(line => {
      const values = line.split(',').map(v => v.trim());
      const obj = {};
      headers.forEach((header, i) => {
        obj[header] = values[i];
      });
      return obj;
    });
  };

  React.useEffect(() => {
    setCampaigns(parseCSV(CAMPAIGNS_CSV));
    setShips(parseCSV(SHIPS_CSV));
    setCommanders(parseCSV(COMMANDERS_CSV));
  }, []);

  const handleCampaignChoice = (choice) => {
    if (choice === 'random') {
      selectRandomCampaign();
    } else {
      setStep('pickCampaign');
    }
  };

  const selectRandomCampaign = () => {
    if (campaigns.length === 0) return;
    const randomCampaign = campaigns[Math.floor(Math.random() * campaigns.length)];
    setSelectedCampaign(randomCampaign);
    checkIfSpecial(randomCampaign);
  };

  const selectSpecificCampaign = (campaign) => {
    setSelectedCampaign(campaign);
    checkIfSpecial(campaign);
  };

  const checkIfSpecial = (campaign) => {
    const special = campaign['Special?'];
    if (special && special.toLowerCase() !== 'no' && special !== '') {
      setStep('specialMessage');
    } else {
      setStep('selectLength');
    }
  };

  const getAvailableLengths = () => {
    if (!selectedCampaign) return [];
    const lengths = [];
    if (selectedCampaign['Short Campaign'] && parseFloat(selectedCampaign['Short Campaign']) > 0) {
      lengths.push({ name: 'Short', value: 'Short Campaign', so: selectedCampaign['Short Campaign'] });
    }
    if (selectedCampaign['Medium Campaign'] && parseFloat(selectedCampaign['Medium Campaign']) > 0) {
      lengths.push({ name: 'Medium', value: 'Medium Campaign', so: selectedCampaign['Medium Campaign'] });
    }
    if (selectedCampaign['Long Campaign'] && parseFloat(selectedCampaign['Long Campaign']) > 0) {
      lengths.push({ name: 'Long', value: 'Long Campaign', so: selectedCampaign['Long Campaign'] });
    }
    return lengths;
  };

  const handleLengthSelection = (length) => {
    setCampaignLength(length);
    setStep('reserveSO');
  };

  const handleReserveDecision = (hasReserve) => {
    if (!hasReserve) {
      setReserveSO(0);
      
      // Get selected commander or random if none selected
      let commander;
      if (selectedCommander) {
        commander = commanders.find(c => c.Name === selectedCommander);
      } else {
        const tfCommanders = commanders.filter(c => c.Type === 'Task Force Commander');
        commander = tfCommanders[Math.floor(Math.random() * tfCommanders.length)];
      }
      
      generateTaskForce(0, commander);
    } else {
      // Stay on reserve page to get input
    }
  };

  const handleReserveSubmit = () => {
    const reserve = parseInt(reserveInput) || 0;
    setReserveSO(reserve);
    
    // Get selected commander or random if none selected
    let commander;
    if (selectedCommander) {
      commander = commanders.find(c => c.Name === selectedCommander);
    } else {
      const tfCommanders = commanders.filter(c => c.Type === 'Task Force Commander');
      commander = tfCommanders[Math.floor(Math.random() * tfCommanders.length)];
    }
    
    generateTaskForce(reserve, commander);
  };

  const generateTaskForce = (reserve, commander) => {
    const maxSO = parseInt(campaignLength.so) - reserve;
    const experienceLevels = ['Newbie', 'Green', 'Average', 'Skilled', 'Ace', 'Warrior'];
    const selectedShips = [];
    let currentSOSpent = 0;
    
    const availableShips = ships.filter(ship => {
      const shipYear = parseInt(ship.year_from);
      const campaignYear = parseInt(selectedCampaign.Year);
      const theaterMatch = ship.theatre.toLowerCase() === 'both' || 
                          ship.theatre.toLowerCase() === selectedCampaign.Theater.toLowerCase();
      return shipYear <= campaignYear && theaterMatch;
    });

    const shipsPool = [...availableShips];

    experienceLevels.forEach(level => {
      const count = parseInt(selectedCampaign[level]) || 0;
      for (let i = 0; i < count; i++) {
        if (shipsPool.length > 0) {
          const affordableShips = shipsPool.filter(ship => {
            const shipCost = parseInt(ship.initialCost);
            return currentSOSpent + shipCost <= maxSO;
          });
          
          if (affordableShips.length > 0) {
            const randomIndex = Math.floor(Math.random() * affordableShips.length);
            const ship = affordableShips[randomIndex];
            
            const poolIndex = shipsPool.findIndex(s => s === ship);
            shipsPool.splice(poolIndex, 1);
            
            currentSOSpent += parseInt(ship.initialCost);
            selectedShips.push({
              ...ship,
              experienceLevel: level
            });
          }
        }
      }
    });

    setTaskForce({
      campaign: selectedCampaign.Name,
      year: selectedCampaign.Year,
      theater: selectedCampaign.Theater,
      length: campaignLength.name,
      startingSO: campaignLength.so,
      reserveSO: reserve,
      flagship: selectedFlagship || 'None',
      commander: commander,
      ships: selectedShips
    });
    setStep('displayTaskForce');
  };

  const reset = () => {
    setSelectedCampaign(null);
    setCampaignLength(null);
    setTaskForce(null);
    setReserveSO(0);
    setReserveInput('');
    setSelectedFlagship('');
    setSelectedCommander('');
    setStep('campaignSelection');
  };

  return React.createElement('div', { className: "min-h-screen bg-slate-900 text-slate-100 p-8" },
    React.createElement('div', { className: "max-w-4xl mx-auto" },
      React.createElement('h1', { className: "text-4xl font-bold mb-2 text-blue-400" }, 'Spruance Leader'),
      React.createElement('h2', { className: "text-2xl mb-8 text-slate-300" }, 'Task Force Generator'),

      step === 'campaignSelection' && React.createElement('div', { className: "bg-slate-800 p-6 rounded-lg border border-slate-700" },
        React.createElement('h3', { className: "text-xl font-semibold mb-4" }, 'Campaign Selection'),
        React.createElement('p', { className: "mb-4 text-slate-300" }, 'Would you like to pick a campaign or randomly select one?'),
        React.createElement('div', { className: "space-x-4" },
          React.createElement('button', {
            onClick: () => handleCampaignChoice('pick'),
            className: "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition"
          }, 'Pick a Campaign'),
          React.createElement('button', {
            onClick: () => handleCampaignChoice('random'),
            className: "bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition"
          }, 'Random Campaign')
        )
      ),

      step === 'pickCampaign' && React.createElement('div', { className: "bg-slate-800 p-6 rounded-lg border border-slate-700" },
        React.createElement('h3', { className: "text-xl font-semibold mb-4" }, 'Select a Campaign'),
        React.createElement('div', { className: "space-y-2" },
          campaigns.map((campaign, idx) => 
            React.createElement('button', {
              key: idx,
              onClick: () => selectSpecificCampaign(campaign),
              className: "w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition text-left flex justify-between items-center"
            },
              React.createElement('span', null, campaign.Name),
              (campaign['Special?'] && campaign['Special?'].toLowerCase() !== 'no' && campaign['Special?'] !== '') &&
                React.createElement('span', { className: "text-amber-400 text-sm" }, 'Special')
            )
          )
        )
      ),

      step === 'specialMessage' && React.createElement('div', { className: "bg-slate-800 p-6 rounded-lg border border-amber-600" },
        React.createElement('h3', { className: "text-xl font-semibold mb-4 text-amber-400" }, 'Special Campaign Selected'),
        React.createElement('p', { className: "text-lg font-semibold mb-2" }, selectedCampaign.Name),
        React.createElement('p', { className: "mb-6 text-slate-300" }, 'Please refer to the campaign card for specific instructions on ship selection and setup.'),
        React.createElement('button', {
          onClick: reset,
          className: "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
        }, 'Start Over')
      ),

      step === 'selectLength' && selectedCampaign && React.createElement('div', { className: "bg-slate-800 p-6 rounded-lg border border-slate-700" },
        React.createElement('h3', { className: "text-2xl font-semibold mb-2 text-blue-400" }, selectedCampaign.Name),
        React.createElement('p', { className: "text-slate-300 mb-4" }, `Year: ${selectedCampaign.Year} | Theater: ${selectedCampaign.Theater}`),
        
        React.createElement('h4', { className: "text-lg font-semibold mb-3" }, 'Select Campaign Length:'),
        React.createElement('div', { className: "space-y-3" },
          getAvailableLengths().map(length =>
            React.createElement('button', {
              key: length.value,
              onClick: () => handleLengthSelection(length),
              className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition text-left"
            },
              React.createElement('span', { className: "font-bold" }, `${length.name} Campaign`),
              React.createElement('span', { className: "float-right" }, `${length.so} SO Points`)
            )
          )
        )
      ),

      step === 'reserveSO' && campaignLength && React.createElement('div', { className: "bg-slate-800 p-6 rounded-lg border border-slate-700" },
        React.createElement('h3', { className: "text-xl font-semibold mb-4" }, 'Task Force Setup'),
        React.createElement('p', { className: "text-slate-300 mb-4" }, 
          `Campaign: ${selectedCampaign.Name} (${campaignLength.name}) - ${campaignLength.so} SO Points`
        ),
        
        React.createElement('div', { className: "space-y-4 mb-6" },
          React.createElement('div', null,
            React.createElement('label', { className: "block text-slate-300 mb-2" }, 'Select Flagship (Optional):'),
            React.createElement('select', {
              value: selectedFlagship,
              onChange: (e) => setSelectedFlagship(e.target.value),
              className: "w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
            },
              React.createElement('option', { value: '' }, 'No Flagship'),
              ships.filter(ship => {
                const shipYear = parseInt(ship.year_from);
                const campaignYear = parseInt(selectedCampaign.Year);
                const theaterMatch = ship.theatre.toLowerCase() === 'both' || 
                                    ship.theatre.toLowerCase() === selectedCampaign.Theater.toLowerCase();
                return shipYear <= campaignYear && theaterMatch && 
                       (ship.tags.includes('Command Ship') || ship.stype === 'Cruiser' || ship.stype === 'Battleship');
              }).map((ship, idx) => 
                React.createElement('option', { key: idx, value: ship.sname }, 
                  `${ship.stype} - ${ship.sname} (${ship.class})`
                )
              )
            )
          ),
          
          React.createElement('div', null,
            React.createElement('label', { className: "block text-slate-300 mb-2" }, 'Select Commander (Optional):'),
            React.createElement('select', {
              value: selectedCommander,
              onChange: (e) => setSelectedCommander(e.target.value),
              className: "w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
            },
              React.createElement('option', { value: '' }, 'Random Commander'),
              commanders.filter(c => c.Type === 'Task Force Commander').map((cmd, idx) => 
                React.createElement('option', { key: idx, value: cmd.Name }, cmd.Name)
              )
            )
          )
        ),
        
        React.createElement('p', { className: "text-slate-300 mb-4" }, 
          'Would you like to set aside SO points for upgrades and ordnance?'
        ),
        
        React.createElement('div', { className: "space-y-4" },
          React.createElement('div', { className: "space-x-4" },
            React.createElement('button', {
              onClick: () => handleReserveDecision(false),
              className: "bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition"
            }, 'No - Use All SO'),
            React.createElement('button', {
              onClick: () => handleReserveDecision(true),
              className: "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition"
            }, 'Yes - Reserve SO')
          ),
          
          reserveSO === 0 && React.createElement('div', { className: "mt-4" },
            React.createElement('label', { className: "block text-slate-300 mb-2" }, 'Enter SO points to reserve:'),
            React.createElement('div', { className: "flex gap-2" },
              React.createElement('input', {
                type: "number",
                min: "0",
                max: campaignLength.so,
                value: reserveInput,
                onChange: (e) => setReserveInput(e.target.value),
                className: "flex-1 bg-slate-700 border border-slate-600 rounded p-2 text-white",
                placeholder: "0"
              }),
              React.createElement('button', {
                onClick: handleReserveSubmit,
                className: "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
              }, 'Continue')
            )
          )
        )
      ),

      step === 'displayTaskForce' && taskForce && React.createElement('div', { className: "space-y-6" },
        React.createElement('div', { className: "bg-slate-800 p-6 rounded-lg border border-blue-600" },
          React.createElement('h3', { className: "text-2xl font-semibold mb-4 text-blue-400" }, 'Task Force Generated'),
          
          React.createElement('div', { className: "grid grid-cols-2 gap-4 mb-6" },
            React.createElement('div', null,
              React.createElement('p', { className: "text-slate-400" }, 'Campaign:'),
              React.createElement('p', { className: "font-semibold" }, taskForce.campaign)
            ),
            React.createElement('div', null,
              React.createElement('p', { className: "text-slate-400" }, 'Length:'),
              React.createElement('p', { className: "font-semibold" }, taskForce.length)
            ),
            React.createElement('div', null,
              React.createElement('p', { className: "text-slate-400" }, 'Year:'),
              React.createElement('p', { className: "font-semibold" }, taskForce.year)
            ),
            React.createElement('div', null,
              React.createElement('p', { className: "text-slate-400" }, 'Theater:'),
              React.createElement('p', { className: "font-semibold" }, taskForce.theater)
            ),
            React.createElement('div', null,
              React.createElement('p', { className: "text-slate-400" }, 'Total SO:'),
              React.createElement('p', { className: "font-semibold" }, taskForce.startingSO)
            ),
            React.createElement('div', null,
              React.createElement('p', { className: "text-slate-400" }, 'Reserved SO:'),
              React.createElement('p', { className: "font-semibold" }, taskForce.reserveSO)
            ),
            React.createElement('div', null,
              React.createElement('p', { className: "text-slate-400" }, 'Available for Ships:'),
              React.createElement('p', { className: "font-semibold" }, parseInt(taskForce.startingSO) - taskForce.reserveSO)
            ),
            React.createElement('div', null,
              React.createElement('p', { className: "text-slate-400" }, 'Commander:'),
              React.createElement('p', { className: "font-semibold" }, taskForce.commander.Name)
            ),
            React.createElement('div', null,
              React.createElement('p', { className: "text-slate-400" }, 'Flagship:'),
              React.createElement('p', { className: "font-semibold" }, taskForce.flagship)
            )
          ),

          React.createElement('h4', { className: "text-xl font-semibold mb-3" }, `Ships (${taskForce.ships.length}):`),
          React.createElement('div', { className: "space-y-2" },
            taskForce.ships.map((ship, idx) =>
              React.createElement('div', { key: idx, className: "bg-slate-700 p-3 rounded flex justify-between items-center" },
                React.createElement('div', null,
                  React.createElement('p', { className: "font-semibold" }, ship.sname),
                  React.createElement('p', { className: "text-sm text-slate-400" }, `${ship.class} (${ship.stype}) - ${ship.country}`)
                ),
                React.createElement('div', { className: "text-right" },
                  React.createElement('p', { className: "text-sm font-semibold text-blue-300" }, ship.experienceLevel),
                  React.createElement('p', { className: "text-sm text-slate-400" }, `${ship.initialCost} SO`)
                )
              )
            )
          ),

          React.createElement('div', { className: "mt-4 p-4 bg-slate-700 rounded-lg border-2 border-blue-500" },
            React.createElement('div', { className: "flex justify-between items-center" },
              React.createElement('div', null,
                React.createElement('p', { className: "text-slate-400 text-sm" }, 'SO Points Used (Ships):'),
                React.createElement('p', { className: "text-2xl font-bold text-blue-300" },
                  taskForce.ships.reduce((sum, ship) => sum + parseInt(ship.initialCost), 0)
                )
              ),
              React.createElement('div', { className: "text-right" },
                React.createElement('p', { className: "text-slate-400 text-sm" }, 'SO Points Remaining:'),
                React.createElement('p', { className: "text-2xl font-bold text-green-400" },
                  parseInt(taskForce.startingSO) - taskForce.ships.reduce((sum, ship) => sum + parseInt(ship.initialCost), 0)
                )
              )
            )
          ),

          React.createElement('div', { className: "mt-6 flex gap-4" },
            React.createElement('button', {
              onClick: () => {
                const commander = taskForce.commander;
                generateTaskForce(taskForce.reserveSO, commander);
              },
              className: "flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
            }, 'Regenerate Task Force'),
            React.createElement('button', {
              onClick: reset,
              className: "flex-1 bg-slate-600 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            }, 'New Campaign')
          )
        )
      )
    )
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(SpruanceLeaderRandomizer));
