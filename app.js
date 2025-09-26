//Just adding a character or two to fix a commit issue. 
const campaignsData = [
  { name: "Holding the Line", year: "1942", short: 30, medium: 33, long: 39 },
  { name: "Against the Sun", year: "1942", short: 32, medium: 35, long: 40 },
  { name: "Turning the Tide", year: "1943", short: 40, medium: 44, long: 50 },
  { name: "Setting Sun", year: "1944-1945", short: 48, medium: 52, long: 56 }
];

const submarinesData = [
  { campaign: "Holding the Line 1942", diceRoll: "1-4", name: "S-39", class: "S", green: 2, trained: 3, veteran: 6, ace: 11 },
  { campaign: "Holding the Line 1942", diceRoll: "5-8", name: "S-44", class: "S", green: 2, trained: 3, veteran: 6, ace: 8 },
  { campaign: "Holding the Line 1942", diceRoll: "9-12", name: "Nautilus", class: "Narwhal", green: 5, trained: 7, veteran: 12, ace: 15 },
  { campaign: "Holding the Line 1942", diceRoll: "13-16", name: "Permit", class: "Perch", green: 4, trained: 5, veteran: 8, ace: 10 },
  { campaign: "Holding the Line 1942", diceRoll: "17-20", name: "Salmon", class: "Salmon", green: 5, trained: 6, veteran: 9, ace: 13 },
  { campaign: "Holding the Line 1942", diceRoll: "21-24", name: "Stingray", class: "Salmon", green: 4, trained: 6, veteran: 11, ace: 13 },
  { campaign: "Holding the Line 1942", diceRoll: "25-28", name: "Tautog", class: "Tambor", green: 4, trained: 6, veteran: 10, ace: 15 },
  { campaign: "Holding the Line 1942", diceRoll: "29-32", name: "Gudgeon", class: "Gar", green: 4, trained: 6, veteran: 10, ace: 16 },
  { campaign: "Holding the Line 1942", diceRoll: "33-36", name: "Drum", class: "Gato", green: 5, trained: 8, veteran: 12, ace: 15 },
  { campaign: "Holding the Line 1942", diceRoll: "37-40", name: "Gato", class: "Gato", green: 5, trained: 7, veteran: 10, ace: 18 },
  { campaign: "Holding the Line 1942", diceRoll: "41-44", name: "Guardfish", class: "Gato", green: 5, trained: 8, veteran: 13, ace: 16 },
  { campaign: "Holding the Line 1942", diceRoll: "45-48", name: "Silversides", class: "Gato", green: 5, trained: 8, veteran: 12, ace: 15 },
  { campaign: "Holding the Line 1942", diceRoll: "49-52", name: "Wahoo", class: "Gato", green: 5, trained: 7, veteran: 13, ace: 17 },
  { campaign: "Against the Sun 1942", diceRoll: "1-4", name: "S-39", class: "S", green: 2, trained: 3, veteran: 6, ace: 11 },
  { campaign: "Against the Sun 1942", diceRoll: "5-8", name: "S-44", class: "S", green: 2, trained: 3, veteran: 6, ace: 8 },
  { campaign: "Against the Sun 1942", diceRoll: "9-12", name: "Nautilus", class: "Narwhal", green: 5, trained: 7, veteran: 12, ace: 15 },
  { campaign: "Against the Sun 1942", diceRoll: "13-16", name: "Permit", class: "Perch", green: 4, trained: 5, veteran: 8, ace: 10 },
  { campaign: "Against the Sun 1942", diceRoll: "17-20", name: "Salmon", class: "Salmon", green: 5, trained: 6, veteran: 9, ace: 13 },
  { campaign: "Against the Sun 1942", diceRoll: "21-24", name: "Stingray", class: "Salmon", green: 4, trained: 6, veteran: 11, ace: 13 },
  { campaign: "Against the Sun 1942", diceRoll: "25-28", name: "Tautog", class: "Tambor", green: 4, trained: 6, veteran: 10, ace: 15 },
  { campaign: "Against the Sun 1942", diceRoll: "29-32", name: "Gudgeon", class: "Gar", green: 4, trained: 6, veteran: 10, ace: 16 },
  { campaign: "Against the Sun 1942", diceRoll: "33-36", name: "Drum", class: "Gato", green: 5, trained: 8, veteran: 12, ace: 15 },
  { campaign: "Against the Sun 1942", diceRoll: "37-40", name: "Gato", class: "Gato", green: 5, trained: 7, veteran: 10, ace: 18 },
  { campaign: "Against the Sun 1942", diceRoll: "41-44", name: "Guardfish", class: "Gato", green: 5, trained: 8, veteran: 13, ace: 16 },
  { campaign: "Against the Sun 1942", diceRoll: "45-48", name: "Silversides", class: "Gato", green: 5, trained: 8, veteran: 12, ace: 15 },
  { campaign: "Against the Sun 1942", diceRoll: "49-52", name: "Wahoo", class: "Gato", green: 5, trained: 7, veteran: 13, ace: 17 },
  { campaign: "Turning the Tide 1943", diceRoll: "1-3", name: "S-39", class: "S", green: 2, trained: 3, veteran: 6, ace: 11 },
  { campaign: "Turning the Tide 1943", diceRoll: "4-6", name: "S-44", class: "S", green: 2, trained: 3, veteran: 6, ace: 8 },
  { campaign: "Turning the Tide 1943", diceRoll: "7-9", name: "Nautilus", class: "Narwhal", green: 5, trained: 7, veteran: 12, ace: 15 },
  { campaign: "Turning the Tide 1943", diceRoll: "10-12", name: "Permit", class: "Perch", green: 4, trained: 5, veteran: 8, ace: 10 },
  { campaign: "Turning the Tide 1943", diceRoll: "13-15", name: "Salmon", class: "Salmon", green: 5, trained: 6, veteran: 9, ace: 13 },
  { campaign: "Turning the Tide 1943", diceRoll: "16-18", name: "Stingray", class: "Salmon", green: 4, trained: 6, veteran: 11, ace: 13 },
  { campaign: "Turning the Tide 1943", diceRoll: "18-20", name: "Tautog", class: "Tambor", green: 4, trained: 6, veteran: 10, ace: 15 },
  { campaign: "Turning the Tide 1943", diceRoll: "21-23", name: "Gudgeon", class: "Gar", green: 4, trained: 6, veteran: 10, ace: 16 },
  { campaign: "Turning the Tide 1943", diceRoll: "24-26", name: "Drum", class: "Gato", green: 5, trained: 8, veteran: 12, ace: 15 },
  { campaign: "Turning the Tide 1943", diceRoll: "27-29", name: "Gato", class: "Gato", green: 5, trained: 7, veteran: 10, ace: 18 },
  { campaign: "Turning the Tide 1943", diceRoll: "30-32", name: "Guardfish", class: "Gato", green: 5, trained: 8, veteran: 13, ace: 16 },
  { campaign: "Turning the Tide 1943", diceRoll: "33-35", name: "Silversides", class: "Gato", green: 5, trained: 8, veteran: 12, ace: 15 },
  { campaign: "Turning the Tide 1943", diceRoll: "36-38", name: "Wahoo", class: "Gato", green: 5, trained: 7, veteran: 13, ace: 17 },
  { campaign: "Turning the Tide 1943", diceRoll: "39-41", name: "Barb", class: "Gato", green: 5, trained: 11, veteran: 15, ace: 19 },
  { campaign: "Turning the Tide 1943", diceRoll: "42-44", name: "Bonefish", class: "Gato", green: 5, trained: 8, veteran: 14, ace: 17 },
  { campaign: "Turning the Tide 1943", diceRoll: "45-47", name: "Harder", class: "Gato", green: 6, trained: 8, veteran: 16, ace: 19 },
  { campaign: "Turning the Tide 1943", diceRoll: "48-50", name: "Rasher", class: "Gato", green: 5, trained: 7, veteran: 12, ace: 19 },
  { campaign: "Turning the Tide 1943", diceRoll: "51-53", name: "Batfish", class: "Balao", green: 6, trained: 9, veteran: 13, ace: 17 },
  { campaign: "Turning the Tide 1943", diceRoll: "54-56", name: "Bowfin", class: "Balao", green: 6, trained: 8, veteran: 16, ace: 19 },
  { campaign: "Turning the Tide 1943", diceRoll: "57-59", name: "Seahorse", class: "Balao", green: 6, trained: 10, veteran: 13, ace: 20 },
  { campaign: "Setting Sun 1944-1945", diceRoll: "1-2", name: "Nautilus", class: "Narwhal", green: 5, trained: 7, veteran: 12, ace: 15 },
  { campaign: "Setting Sun 1944-1945", diceRoll: "3-4", name: "Permit", class: "Perch", green: 4, trained: 5, veteran: 8, ace: 10 },
  { campaign: "Setting Sun 1944-1945", diceRoll: "5-6", name: "Salmon", class: "Salmon", green: 5, trained: 6, veteran: 9, ace: 13 },
  { campaign: "Setting Sun 1944-1945", diceRoll: "7-8", name: "Stingray", class: "Salmon", green: 4, trained: 6, veteran: 11, ace: 13 },
  { campaign: "Setting Sun 1944-1945", diceRoll: "9-10", name: "Tautog", class: "Tambor", green: 4, trained: 6, veteran: 10, ace: 15 },
  { campaign: "Setting Sun 1944-1945", diceRoll: "11-12", name: "Gudgeon", class: "Gar", green: 4, trained: 6, veteran: 10, ace: 16 },
  { campaign: "Setting Sun 1944-1945", diceRoll: "13-14", name: "Drum", class: "Gato", green: 5, trained: 8, veteran: 12, ace: 15 },
  { campaign: "Setting Sun 1944-1945", diceRoll: "15-16", name: "Gato", class: "Gato", green: 5, trained: 7, veteran: 10, ace: 18 },
  { campaign: "Setting Sun 1944-1945", diceRoll: "17-18", name: "Guardfish", class: "Gato", green: 5, trained: 8, veteran: 13, ace: 16 },
  { campaign: "Setting Sun 1944-1945", diceRoll: "19-20", name: "Silversides", class: "Gato", green: 5, trained: 8, veteran: 12, ace: 15 },
  { campaign: "Setting Sun 1944-1945", diceRoll: "21-22", name: "Wahoo", class: "Gato", green: 5, trained: 7, veteran: 13, ace: 17 },
  { campaign: "Setting Sun 1944-1945", diceRoll: "23-24", name: "Barb", class: "Gato", green: 5, trained: 11, veteran: 15, ace: 19 },
  { campaign: "Setting Sun 1944-1945", diceRoll: "25-26", name: "Bonefish", class: "Gato", green: 5, trained: 8, veteran: 14, ace: 17 },
  { campaign: "Setting Sun 1944-1945", diceRoll: "27-28", name: "Harder", class: "Gato", green: 6, trained: 8, veteran: 16, ace: 19 },
  { campaign: "Setting Sun 1944-1945", diceRoll: "29-30", name: "Rasher", class: "Gato", green: 5, trained: 7, veteran: 12, ace: 19 },
  { campaign: "Setting Sun 1944-1945", diceRoll: "31-32", name: "Batfish", class: "Balao", green: 6, trained: 9, veteran: 13, ace: 17 },
  { campaign: "Setting Sun 1944-1945", diceRoll: "33-34", name: "Bowfin", class: "Balao", green: 6, trained: 8, veteran: 16, ace: 19 },
  { campaign: "Setting Sun 1944-1945", diceRoll: "35-36", name: "Seahorse", class: "Balao", green: 6, trained: 10, veteran: 13, ace: 20 },
  { campaign: "Setting Sun 1944-1945", diceRoll: "37-38", name: "Spadefish", class: "Balao", green: 7, trained: 11, veteran: 16, ace: 20 },
  { campaign: "Setting Sun 1944-1945", diceRoll: "39-40", name: "Tang", class: "Balao", green: 8, trained: 12, veteran: 21, ace: 26 },
  { campaign: "Setting Sun 1944-1945", diceRoll: "41-42", name: "Tirante", class: "Tench", green: 7, trained: 10, veteran: 15, ace: 23 }
];

function GatoLeaderRandomizer() {
  const [step, setStep] = React.useState('campaignSelection');
  const [campaignChoice, setCampaignChoice] = React.useState('random');
  const [selectedCampaign, setSelectedCampaign] = React.useState(null);
  const [campaignLength, setCampaignLength] = React.useState(null);
  const [reserveSO, setReserveSO] = React.useState(0);
  const [fleetComposition, setFleetComposition] = React.useState(null);
  const [fleet, setFleet] = React.useState(null);

  const handleCampaignSelection = (choice) => {
    if (choice === 'random') {
      const randomCampaign = campaignsData[Math.floor(Math.random() * campaignsData.length)];
      setSelectedCampaign(randomCampaign);
      setStep('lengthSelection');
    } else {
      setCampaignChoice('select');
      setStep('campaignList');
    }
  };

  const handleCampaignPick = (campaign) => {
    setSelectedCampaign(campaign);
    setStep('lengthSelection');
  };

  const handleLengthSelection = (length) => {
    setCampaignLength(length);
    setStep('reserveSelection');
  };

  const handleReserveSelection = (reserve) => {
    setReserveSO(reserve);
    setStep('compositionSelection');
  };

  const handleCompositionSelection = (composition) => {
    setFleetComposition(composition);
    generateFleet(composition);
  };

  const generateFleet = (composition) => {
    const totalSO = selectedCampaign[campaignLength];
    const availableSO = totalSO - reserveSO;
    
    const campaignKey = selectedCampaign.year ? 
      `${selectedCampaign.name} ${selectedCampaign.year}` : 
      selectedCampaign.name;
    
    const availableSubs = submarinesData.filter(sub => 
      sub.campaign === campaignKey
    );

    let selectedSubs = [];
    let remainingSO = availableSO;
    let attempts = 0;
    const maxAttempts = 100;

    while (attempts < maxAttempts) {
      selectedSubs = [];
      remainingSO = availableSO;
      
      const targetCount = composition === 'many' ? 
        Math.floor(Math.random() * 3) + 5 : 
        composition === 'balanced' ?
        Math.floor(Math.random() * 2) + 4 : 
        Math.floor(Math.random() * 2) + 2;

      for (let i = 0; i < targetCount && availableSubs.length > 0; i++) {
        const randomSub = availableSubs[Math.floor(Math.random() * availableSubs.length)];
        
        let skillLevel;
        if (composition === 'many') {
          const trainedCount = selectedSubs.filter(s => s.skill === 'Trained').length;
          const maxTrained = Math.floor(Math.random() * 2) + 1;
          skillLevel = (trainedCount < maxTrained && Math.random() < 0.3) ? 'trained' : 'green';
        } else if (composition === 'balanced') {
          const skillOptions = ['green', 'trained', 'veteran', 'ace'];
          skillLevel = skillOptions[Math.floor(Math.random() * skillOptions.length)];
        } else {
          skillLevel = Math.random() < 0.5 ? 'veteran' : 'ace';
        }
        
        const cost = randomSub[skillLevel];
        
        if (cost <= remainingSO) {
          selectedSubs.push({
            ...randomSub,
            skill: skillLevel.charAt(0).toUpperCase() + skillLevel.slice(1),
            cost: cost
          });
          remainingSO -= cost;
        }
      }

      if (selectedSubs.length >= 2) {
        break;
      }
      attempts++;
    }

    setFleet({
      campaign: selectedCampaign.name,
      year: selectedCampaign.year,
      length: campaignLength,
      totalSO: totalSO,
      reserveSO: reserveSO,
      usedSO: availableSO - remainingSO,
      remainingSO: remainingSO,
      submarines: selectedSubs
    });
    setStep('displayFleet');
  };

  const resetApp = () => {
    setStep('campaignSelection');
    setCampaignChoice('random');
    setSelectedCampaign(null);
    setCampaignLength(null);
    setReserveSO(0);
    setFleetComposition(null);
    setFleet(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-2 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Gato Leader
        </h1>
        <h2 className="text-2xl mb-8 text-center text-blue-300">Submarine Fleet Randomizer</h2>

        {step === 'campaignSelection' && (
          <div className="bg-slate-800 p-8 rounded-lg border border-blue-600 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Select Campaign</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => handleCampaignSelection('random')}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-105"
              >
                Random Campaign
              </button>
              <button
                onClick={() => handleCampaignSelection('select')}
                className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-105"
              >
                Choose Campaign
              </button>
            </div>
          </div>
        )}

        {step === 'campaignList' && (
          <div className="bg-slate-800 p-8 rounded-lg border border-blue-600 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Choose Your Campaign</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {campaignsData.map((campaign, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCampaignPick(campaign)}
                  className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-105 text-left"
                >
                  <div className="text-lg">{campaign.name}</div>
                  <div className="text-sm text-blue-300">{campaign.year}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'lengthSelection' && (
          <div className="bg-slate-800 p-8 rounded-lg border border-blue-600 shadow-xl">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              {selectedCampaign.name} ({selectedCampaign.year})
            </h3>
            <h4 className="text-xl mb-6 text-gray-300">Select Campaign Length</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['short', 'medium', 'long'].map((length) => (
                <button
                  key={length}
                  onClick={() => handleLengthSelection(length)}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-105"
                >
                  <div className="text-lg capitalize">{length}</div>
                  <div className="text-sm">{selectedCampaign[length]} SO</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'reserveSelection' && (
          <div className="bg-slate-800 p-8 rounded-lg border border-blue-600 shadow-xl">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Reserve SO Points</h3>
            <p className="text-gray-300 mb-6">
              Total SO Available: {selectedCampaign[campaignLength]}
            </p>
            <div className="mb-6">
              <label className="block text-lg mb-2">Reserve SO (0-{selectedCampaign[campaignLength]})</label>
              <input
                type="number"
                min="0"
                max={selectedCampaign[campaignLength]}
                value={reserveSO}
                onChange={(e) => setReserveSO(Math.min(Math.max(0, parseInt(e.target.value) || 0), selectedCampaign[campaignLength]))}
                className="w-full bg-slate-700 text-white px-4 py-2 rounded-lg border border-blue-500 focus:outline-none focus:border-cyan-400"
              />
            </div>
            <button
              onClick={() => handleReserveSelection(reserveSO)}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
            >
              Continue
            </button>
          </div>
        )}

        {step === 'compositionSelection' && (
          <div className="bg-slate-800 p-8 rounded-lg border border-blue-600 shadow-xl">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Fleet Composition</h3>
            <p className="text-gray-300 mb-6">
              Available SO: {selectedCampaign[campaignLength] - reserveSO}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => handleCompositionSelection('many')}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-105"
              >
                <div className="text-lg">More boats with less experience</div>
                <div className="text-sm">5-7 submarines</div>
                <div className="text-xs text-green-200">Mostly Green, 1-2 Trained</div>
              </button>
              <button
                onClick={() => handleCompositionSelection('balanced')}
                className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-105"
              >
                <div className="text-lg">Random Grab Bag of Boats</div>
                <div className="text-sm">4-5 submarines</div>
                <div className="text-xs text-yellow-200">Mixed experience levels</div>
              </button>
              <button
                onClick={() => handleCompositionSelection('elite')}
                className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-105"
              >
                <div className="text-lg">Fewer boats with better crews</div>
                <div className="text-sm">2-3 submarines</div>
                <div className="text-xs text-red-200">Veteran & Ace crews</div>
              </button>
            </div>
          </div>
        )}

        {step === 'displayFleet' && fleet && (
          <div className="space-y-6">
            <div className="bg-slate-800 p-6 rounded-lg border border-blue-600">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Fleet Generated</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-slate-700 p-4 rounded-lg">
                  <div className="text-sm text-gray-400">Campaign</div>
                  <div className="text-lg font-semibold">{fleet.campaign}</div>
                  <div className="text-sm text-blue-300">{fleet.year}</div>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <div className="text-sm text-gray-400">Length</div>
                  <div className="text-lg font-semibold capitalize">{fleet.length}</div>
                  <div className="text-sm text-gray-400">{fleet.totalSO} Total SO</div>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <div className="text-sm text-gray-400">SO Used</div>
                  <div className="text-lg font-semibold">{fleet.usedSO}</div>
                  <div className="text-sm text-gray-400">Reserve: {fleet.reserveSO}</div>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <div className="text-sm text-gray-400">SO Remaining</div>
                  <div className="text-lg font-semibold text-green-400">{fleet.remainingSO}</div>
                  <div className="text-sm text-gray-400">{fleet.submarines.length} Submarines</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-cyan-400 mb-3">Your Submarine Fleet</h4>
                {fleet.submarines.map((sub, idx) => (
                  <div key={idx} className="bg-slate-700 p-4 rounded-lg border border-slate-600 hover:border-blue-500 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🚢</span>
                          <div>
                            <div className="text-lg font-semibold text-white">{sub.name}</div>
                            <div className="text-sm text-gray-400">
                              {sub.class} Class • {sub.skill} Crew
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400">{sub.cost}</div>
                        <div className="text-xs text-gray-400">SO</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={resetApp}
              className="w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-semibold py-3 px-6 rounded-lg transition-all"
            >
              Generate New Fleet
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GatoLeaderRandomizer />);
