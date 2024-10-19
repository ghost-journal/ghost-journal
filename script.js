const ghosts = [
  {
    id: 1,
    name: "Specter",
    description: "Specters are often felt in the air, their presence marked by sudden changes in the environment. These entities can communicate through mysterious symbols and messages left behind, which may appear when least expected. Their presence feels cold, as though the air itself is growing heavy with their history. Often, a deep sense of melancholy is felt before they reveal themselves. Evidence includes ghost writings that may manifest in unexplained notes or symbols. The atmosphere may shift with inexplicable flickering lights, hinting at their desire to connect with the living.",
    color: "text-blue-400",
    image: "https://dmdave.com/wp-content/uploads/2019/06/greater-specter-995044756-1561521084932.jpg"
  },
  {
    id: 2,
    name: "Wraith",
    description: "Wraiths evoke a sense of dread, often observed in the movement of objects around them. Many report experiencing intense feelings during these encounters, sometimes accompanied by visions that seem too real. Witnesses often describe a palpable feeling of being watched, their movements followed by a cold, invisible presence. Sometimes, the room grows unnervingly quiet, amplifying the sound of shifting objects. Evidence of their presence includes moving objects, alongside hallucinations that create feelings of unease. The lights in the vicinity may flicker ominously, further enhancing the eerie ambiance.",
    color: "text-gray-500",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjio2oGeXPxVpFi404khW5k7VCMfXe6_j6afMSCaRjUf3t4PQYMHeDO61eXJk-BL8bleP3KVr01gYdk9jaAEsrwnZXAmdeh-6rQOZ0KVJ-dtH5v8p93Ou7BMnVvtCXk-7oWlmQrUxsU1T4CPAyzM9_FU32a2LCpvhRuYgaDWiIfgv_QnXRUupz_keurcQ/s2090/Wraith%203.jpg"
  },
  {
    id: 3,
    name: "Phantom",
    description: "The enigmatic nature of phantoms captivates those who cross their paths. Some have witnessed objects moving seemingly of their own volition, while others have caught fleeting glimpses in unusual photographs. Phantoms seem to appear and disappear with no warning, leaving only subtle signs of their passing. The air grows cold around them, and sometimes, the faintest outline can be captured on film. Evidence includes moving objects and unusual photographs that capture their essence, as well as flickering lights that often serve as indicators of their activity, sparking curiosity and intrigue.",
    color: "text-purple-400",
    image: "https://i.pinimg.com/originals/46/13/70/46137005ab1831acafdccbd974387fa1.jpg"
  },
  {
    id: 4,
    name: "Poltergeist",
    description: "Known for their disruptive antics, poltergeists often leave behind curious markings and messages that tell their stories. They thrive on chaos, creating disturbances that are hard to explain or control. Many who encounter them describe the unnerving sensation of objects flying through the air, often without any clear source of movement. Evidence includes ghost writings, such as notes or drawings left in unexpected places. Unusual occurrences, such as clocks stopping without explanation, hint at their mischief. Observers may also notice lights flickering unpredictably, signaling their presence.",
    color: "text-red-500",
    image: "https://img.freepik.com/premium-photo/scary-ghost-hallway-darkly-comedic-poltergeist-creature_899449-61663.jpg"
  },
  {
    id: 5,
    name: "Haunting Spirit",
    description: "Haunting spirits are often associated with emotional turmoil, moving objects that reflect their sorrow . Those who have encountered them sometimes capture unusual images that seem to reveal their essence. These spirits often cling to places or objects with strong emotional ties, unable to leave the scenes of their past. A lingering sense of loss accompanies their presence, heavy and palpable. Evidence includes ghost writings, often found in unexplained markings, alongside hallucinations that distort reality and whispers that seem to echo through time. The environment may grow dim as the lights flicker in response to their energy.",
    color: "text-teal-400",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbiZqxxw_CVWTm69KXTYwz0WhpgGHWJXGkvw&s"
  },
  {
    id: 6,
    name: "Entity",
    description: "Entities are elusive and enigmatic, creating an atmosphere of mystery wherever they manifest. They can induce vivid experiences that blur the lines of reality, often accompanied by strange voices echoing in the silence. These beings often seem to exist just beyond the edge of perception, slipping in and out of the known world. Their influence lingers even after they vanish, often leaving behind a trail of inexplicable phenomena. Evidence includes hallucinations that create intense experiences, with clocks that stop unexpectedly indicating their manipulation of time, alongside unusual voices that may communicate warnings.",
    color: "text-green-500",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_2tmIXCEyU6Ne91o-9aPgqe40OxFDDSL9Q&s"
  },
  {
    id: 7,
    name: "Shade",
    description: "Shades are known for their subtlety, often conveying their stories through mysterious messages left for the living. They prefer to remain in the shadows, rarely interacting directly with the world of the living. Often, they watch silently, their influence felt rather than seen. Their presence brings a stillness, as if time itself slows down in their company. Evidence includes ghost writings that express their narratives and unusual photographs that capture their essence. Flickering lights can be a sign of their presence, adding to the intrigue.",
    color: "text-gray-800",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsN9gqUaQayTRnj9MSquD6tr_5MrE2Z5EXvw&s"
  },
  {
    id: 8,
    name: "Restless Soul",
    description: "Restless souls are spirits that return with purpose, often revealing their intentions through cryptic messages. These spirits are driven by unresolved matters from their past, unable to find peace until their story is told. Encountering a restless soul often brings an overwhelming sense of urgency, as if they are pleading to be heard. Evidence includes ghost writings that provide insight into their stories, unusual photographs depicting their forms, and whispers from beyond that echo their past. The atmosphere may shift as lights flicker, hinting at their unrest.",
    color: "text-orange-500",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHboeqialP6yMlnzaR2Qm-x5VK7x83NdkQXw&s"
  },
  {
    id: 9,
    name: "Lost Soul",
    description: "Lost souls evoke a profound sense of mystery, often leaving behind subtle traces of their presence. They wander aimlessly, trapped between worlds, unable to find their way. Encounters with these souls are marked by a deep, disorienting sadness, as though they are forever searching for something they cannot find. Evidence includes unusual photographs that capture their ethereal form, moving objects in their vicinity, and flickering lights that seem to react to their energy.",
    color: "text-indigo-500",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuZhwp68DFe4XsW_MP4vVr4fTk8aV0B9WFw&s"
  },
  {
    id: 10,
    name: "Demonic Entity",
    description: "Demonic entities instill fear in those who cross their paths, often leaving behind ominous messages that send chills down the spine. They thrive in environments of fear and chaos, using their malevolent influence to unsettle those nearby. Encounters with them often result in feelings of extreme dread, as if something evil is lurking just out of sight. Evidence includes ghost writings that may be threatening or ominous, clocks that stop unusually signifying their manipulation of time, and unusual voices that create an unsettling atmosphere.",
    color: "text-red-800",
    image: "https://c1.wallpaperflare.com/preview/401/892/6/ghosts-forest-spirit-mystical.jpg"
  },
  {
    id: 11,
    name: "Spirit of the Dead",
    description: "Spirits of the dead are characterized by their haunting presence, often felt in the air. These spirits return for reasons unknown, leaving only faint traces of their existence behind. Their appearance often brings with it a deep chill, as if they are pulling energy from their surroundings to manifest. Evidence includes sudden temperature drops that signify their energy, unusual photographs that depict their essence, and whispers from beyond that echo through the room.",
    color: "text-gray-300",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEySV5BjqUa_F_aVvq0PYMH8Ygjq7eGji1vQ&s"
  },
  {
    id: 12,
    name: "Mythical Creature",
    description: "Mythical creatures are known for their tempestuous nature, often creating disturbances in the environment. They are ancient beings with roots in folklore, often associated with storms or chaotic natural events. Their presence is marked by an overwhelming power, as if the natural world is bending to their will. Evidence includes mysterious symbols that appear in unexpected places, moving objects that signal their power, and flashes of light that seem to accompany their presence.",
    color: "text-yellow-600",
    image: "https://img.freepik.com/free-photo/full-shot-scary-character-posing_23-2150701222.jpg?t=st=1727368493~exp=1727372093~hmac=e7b716cd170868bb594e42b09b68f152064dc3ffbb9e7f2bf83f0db0e72697ee"
  },
  {
    id: 13,
    name: "Apparition",
    description: "Apparitions are spectral entities that manifest in fleeting, often translucent forms. They are most commonly seen in moments of heightened emotional energy, whether positive or negative. These spirits typically appear to relay a message, often showing themselves just long enough for witnesses to catch a glimpse before disappearing. Evidence includes unusual photographs that capture their ethereal form, hallucinations that suggest their presence, and clocks that stop without explanation, as if time itself is distorted by their search.",
    color: "text-blue-300",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmhtN6vcveGOnPR_VDKUl8wcmFGa76gc4FOA&s"
  },
  {
    id: 14,
    name: "Poltergeist Spirit",
    description: "Poltergeist spirits are known for their mischievous and sometimes malevolent nature. They enjoy creating chaos by moving objects, causing loud noises, and generally disturbing the environment they inhabit. Those who encounter them often describe the experience as unnerving, with objects flying across the room or furniture moving on its own. Evidence includes moving objects, ghost writings in strange locations, and clocks stopping inexplicably, all signs of their unpredictable energy.",
    color: "text-red-600",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbtdRca-mu3Cq5Op73FZ0Lr5hKI_y-XCnKTQ&s"
  },
  {
    id: 15,
    name: "Echoing Soul",
    description: "Echoing souls are trapped in a loop, repeating the events of their past over and over again. They often appear in the same location, reenacting moments that held great significance in their lives. Encountering an echoing soul feels like stepping into a time warp, with sights and sounds from the past suddenly materializing in the present. Evidence includes ghost writings that seem out of time, hallucinations that replay past events, and whispers from beyond that echo through the room.",
    color: "text-teal-300",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKfQADMPflgHLbrYBAsKTZf7EudHVKHsb5BxMlUsRbPForAZV06GTGGREVXHrLuaGgmg&usqp=CAU"
  },
  {
    id: 16,
    name: "Vengeful Spirit",
    description: "Vengeful spirits return to seek retribution for wrongs done to them in life. These entities are fueled by anger and often create hostile environments for those who cross their path. Encounters with vengeful spirits can be terrifying, with intense feelings of fear and anger overwhelming the space. Evidence includes ghost writings that express their rage, unusual voices that sound threatening, and flickering lights that seem to react violently to their presence.",
    color: "text-red-700",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZg-MDmPsNlJVN0R65YndRuPkOHNt_0LCDw&s"
  },
  {
    id: 17,
    name: "Wandering Ghost",
    description: "Wandering ghosts are restless spirits that have not found peace. They often appear in places of significance from their past, seemingly lost and searching for something they cannot find. Encounters with these ghosts are characterized by a profound sense of melancholy and confusion. Evidence includes unusual photographs that capture their wandering form, hallucinations that suggest their presence, and clocks that stop without explanation, as if time itself is distorted by their search.",
    color: "text-blue-500",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzgPyoiPv27KsOck2y4tn6XnhIVswg5lj92-xE2yJLB3QeRu-hA_zNRyaKF6LjcR4aqAo&usqp=CAU"
  },
  {
    id: 18,
    name: "Etheral Entity",
    description: "Etheral entities are spirits of light and energy, often appearing as glowing forms or orbs. They are believed to exist in a realm just beyond human perception, and their presence is often felt more than seen. These entities bring with them a sense of calm and peace, though their true nature remains mysterious. Evidence includes unusual lights or orbs captured in photographs, flickering lights that seem to follow their movement, and a sense of tranquility that fills the space they inhabit.",
    color: "text-yellow-300",
    image: "https://cdn.pixabay.com/photo/2024/03/11/17/24/ai-generated-8627295_1280.png"
  },
  {
    id: 19,
    name: "Grave Guardian",
    description: "Grave guardians are spirits tasked with protecting sacred or significant sites, often linked to burial grounds or historical locations. They are watchful and protective, manifesting to ward off those who may disturb their resting places. Encounters with grave guardians often leave witnesses with a strong sense of awe and reverence. Evidence includes ghost writings that seem protective, unusual photographs depicting their presence near graves, and flickering lights that signify their watchful gaze.",
    color: "text-gray-600",
    image: "https://img.freepik.com/premium-photo/close-up-face-horror-woman-ghost-cruel_143683-4598.jpg"
  },
  {
    id: 20,
    name: "Weeping Phantom",
    description: "Weeping phantoms are tragic spirits, often seen crying or mourning the loss of a loved one or a life left unfulfilled. They are drawn to places that hold emotional significance, where they can be heard sobbing softly. Those who encounter these phantoms report a heavy sense of sorrow, as if the sadness of the spirit is overwhelming. Evidence includes unusual photographs that depict their tear-streaked forms, ghost writings that convey their sadness, and whispers from beyond that carry the weight of their grief.",
    color: "text-blue-800",
    image: "https://cdn.pixabay.com/photo/2022/10/27/18/29/ghost-7551504_640.jpg"
  },
  {
    id: 21,
    name: "Guardian Angel",
    description: "Guardian angels are benevolent spirits who appear to protect or guide those in need. They often appear in moments of danger or emotional turmoil, offering a sense of comfort and reassurance. Encounters with guardian angels leave a lasting impression, often described as uplifting or miraculous. Evidence includes unusual lights or orbs, unexplained voices that offer comfort, and moving objects that seem to shield or protect those nearby.",
    color: "text-yellow-500",
    image: "https://cdn.pixabay.com/photo/2017/07/30/15/38/zombie-2554660_640.jpg"
  },
  {
    id: 22,
    name: "Haunted Soul",
    description: "Haunted souls are spirits trapped by the emotional weight of their pasts. They often appear in places tied to tragic or unresolved events in their lives. These spirits are drawn to the living, seeking some form of resolution. Encounters with them often evoke feelings of sadness and desperation. Evidence includes ghost writings that tell their story, unusual photographs that capture their haunting presence, and clocks that stop, symbolizing the unresolved nature of their existence.",
    color: "text-indigo-300",
    image: "https://as2.ftcdn.net/v2/jpg/01/67/30/41/1000_F_167304118_FgBnEyLJSIYk4vSdNVpbwXi9v6AvERCJ.jpg"
  },
  {
    id: 23,
    name: "Soul Walker",
    description: "Soul walkers are spirits that walk between worlds, never fully part of either. They are rare, often appearing in dreams or visions to those with a sensitivity to the supernatural. These spirits move between the realms of the living and the dead, often carrying messages or warnings. Evidence includes unusual voices that speak in riddles, hallucinations that seem to come from another plane, and flickering lights that mark their passage between worlds.",
    color: "text-purple-500",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgeeFDeIW5mC1-kHLHLR3FlGaP2bqc6joqLQ&s"
  },
  {
    id: 24,
    name: "Night Terror",
    description: "Night terrors are malevolent entities that appear in the darkest moments, often manifesting in nightmares or during sleep paralysis. They feed on fear, using their appearance to terrify their victims. These encounters are often accompanied by an overwhelming sense of dread, leaving those who experience them feeling vulnerable and helpless. Evidence includes hallucinations that blend dreams and reality, ghost writings that appear in nightmares, and unusual voices that echo in the darkness.",
    color: "text-black",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTEBXb1RfAOSbGpcSFqCGDMs9v0BidYnZYwMV-kYbmNP1jD4u6k1YyD-h2DQHFoVQ7vB8&usqp=CAU"
  }
];

const ghostGrid = document.getElementById('ghost-grid');
const ghostModal = document.getElementById('ghost-modal');
const closeButton = document.getElementById('close-button');
const modalTitle = document.getElementById('modal-title');
const modalGhost = document.getElementById('modal-ghost');
const modalDescription = document.getElementById('modal-description');

ghosts.forEach((ghost) => {
  const ghostCard = document.createElement('div');
  ghostCard.className = 'ghost-card';
  ghostCard.style.backgroundImage = `url(${ghost.image})`;
  ghostCard.style.backgroundSize = 'cover';
  ghostCard.style.backgroundPosition = 'center';
  ghostCard.innerHTML = `
      <div class="p-4 flex flex-col items-center">
          <div class="${ghost.color} w-24 h-24"></div>
          <h2 class="text-xl font-semibold text-gray-100 mt-4">${ghost.name}</h2>
      </div>
  `;
  ghostCard.addEventListener('click', () => {
      ghostModal.style.display = 'block';
      modalTitle.textContent = ghost.name;
      modalGhost.className = `${ghost.color} w-32 h-32`;
      modalDescription.textContent = ghost.description;
  });
  ghostGrid.appendChild(ghostCard);
});

closeButton.addEventListener('click', () => {
  ghostModal.style.display = 'none';
});