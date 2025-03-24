import { v4 as uuidv4 } from "uuid";

import image1 from './assets/images/sunriseserenade.jpg'
import image2 from './assets/images/urbangroove.jfif'
import image3 from './assets/images/mysticecho.jpg'
import image4 from './assets/images/electrovibes.jfif'
import image5 from './assets/images/jazzywhispers.jfif'
import image6 from './assets/images/tropicalbreez.jfif'

function chillHop() {
  return [
    {
      name: "Sunrise Serenade",
      cover:image1,
      artist: " Harmony Harp",
      audio:
"https://media.geeksforgeeks.org/wp-content/uploads/20231004185212/Jawan-Prevue-Theme.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Urban Groove",
      cover:image2,
      artist: "Beatmaster B",
      audio:
        "https://media.geeksforgeeks.org/wp-content/uploads/20231004184006/SoundHelix-Song-10.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Mystic Echo",
      cover:image3,
      artist: " Harmony Harp",
      audio:
"https://media.geeksforgeeks.org/wp-content/uploads/20231004185212/Jawan-Prevue-Theme.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Electro Vibes",
      cover:image4,
      artist: "Synthwave Sensation",
      audio:
"https://media.geeksforgeeks.org/wp-content/uploads/20231004191840/Zinda-Banda---Jawan-(1).mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Jazzy Whispers",
      cover:image5,
      artist: "Smooth Sax Serenade",
      audio:
"https://media.geeksforgeeks.org/wp-content/uploads/20231004184006/SoundHelix-Song-10.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Tropical Breez",
      cover: image6,
      artist: "Island Rhythms",
      audio:
"https://media.geeksforgeeks.org/wp-content/uploads/20231004191840/Zinda-Banda---Jawan-(1).mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
