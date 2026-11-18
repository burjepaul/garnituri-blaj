
import src1 from "../assets/curele-trapezoidale/curea-01.jpg";
import src2 from "../assets/curele-trapezoidale/curea-02.jpg";
import src3 from "../assets/curele-trapezoidale/curea-03.jpg";
import src4 from "../assets/curele-trapezoidale/curea-04.jpg";
import src5 from "../assets/curele-trapezoidale/curea-05.jpg";
import src6 from "../assets/curele-trapezoidale/curea-06.jpg";


const clasiceData = {
  "10x6": {
    id: 1,
    profil: "10x6mm",
    title: "Curele trapezoidale clasice - profil Z",
    image: src1,
    generalInfo: {
      material: "cauciuc",
      temperatura: "-40 +70 °C",
      diametruCritic: "50 mm",
      conversieLungimi: {
        La: "Li + 38 mm",
        LaLp: "Lp + 16 mm",
        Lp: "Li + 8 mm",
      },
    },
  },

  "13x8": {
    id: 2,
    profil: "13x8mm",
    title: "Curele trapezoidale clasice - profil A",
    image: src2,
    generalInfo: {
      material: "cauciuc",
      temperatura: "-40 +70 °C",
      diametruCritic: "71 mm",
      conversieLungimi: {
        La: "Li + 50 mm",
        LaLp: "Lp + 19 mm",
        Lp: "Li + 31 mm",
      },
    },
  },

  "17x11": {
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

  "22x14": {
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

  "32x20": {
    id: 5,
    profil: "32x20mm",
    title: "Curele trapezoidale clasice - profil D",
    image: src5,
    generalInfo: {
      material: "cauciuc",
      temperatura: "-40 +70 °C",
      diametruCritic: "355 mm",
      conversieLungimi: {
        La: "Li + 120 mm",
        LaLp: "Lp + 38 mm",
        Lp: "Li + 82 mm",
      },
    },
  },
  "speciale": {
    id: 6,
    profil: "Speciale",
    title: "Curele trapezoidale clasice - profil B/17",
    image: src6,
    generalInfo: {
      material: "De verificat",
      temperatura: "De verificat",
      diametruCritic: "De verificat",
      conversieLungimi: {
        La: "De verificat",
        LaLp: "De verificat",
        Lp: "De verificat",
      },
    },
  },
};

export default clasiceData;

