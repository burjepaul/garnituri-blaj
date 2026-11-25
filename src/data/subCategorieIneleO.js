
import src1 from "../assets/IneleO/IneleO.png";
import src2 from "../assets/IneleO/IneleOViton.jpg";
import src3 from "../assets/IneleO/SnurViton.png";
import src4 from "../assets/IneleO/SnurNBR.webp";


const clasiceData = {
  "IneleO": {
    id: 1,
    title: "Inele-O",
    image: src1,
    generalInfo: {
      material: "cauciuc nitrilic",
      temperatura: "-25°C + 100°C",
      rezistenta: "Rezistenta buna la uzura",
      detalii: "General utilizabil în hidraulică și pneumatică, până la 70°C, gaze și aer. Până la 90°C, uleiuri, substanțe alcaline, grăsimi, glicoli, alcooli, saramuri.",
    },
  },

  "IneleOViton": {
    id: 2,
    title: "Inele-O Viton",
    image: src2,
    generalInfo: {
      material: "etilenă-propilenă",
      temperatura: "-40°C + 150°C",
      rezistenta: "Rezistent la interperii și la ozon",
      detalii: "Rezistent la acizi diluați, baze, alcooli, apă fierbinte, aburi și aer fără ulei până la 150°C.",
    },
  },

  "SnurViton": {
    id: 3,
    profil: "17x11mm",
    title: "Curele trapezoidale clasice - profil special",
    image: src3,
    generalInfo: {
      material: "cauciuc",
      temperatura: "-40 +70 °C",
      diametruCritic: "60 mm",
      conversieLungimi: {
        La: "De verificat",
        LaLp: "De verificat",
        Lp: "De verificat",
      },
    },
  },

  "SnurNBR": {
    id: 4,
    profil: "22x14mm",
    title: "Curele trapezoidale clasice - profil C",
    image: src4,
    generalInfo: {
      material: "cauciuc",
      temperatura: "-40 +70 °C",
      diametruCritic: "180 mm",
      conversieLungimi: {
        La: "Li + 82 mm",
        LaLp: "Lp + 30 mm",
        Lp: "Li + 52 mm",
      },
    },
  },
};

export default clasiceData;

