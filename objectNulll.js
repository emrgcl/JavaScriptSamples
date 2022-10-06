const objects = {
  values: [
    {
      Name: "Emre",
      Assets: {},
    },
    {
      Name: "Ayca",
      Assets: {
        Oyuncak: "Lego",
        Okul: "Bilfen",
      },
    },
  ],
};

const person1 = {
  Name: "Emre",
  Assets: {},
};

const person2 = {
  Name: "Ayca",
  Assets: {
    Oyuncak: "Lego",
    Okul: "Bilfen",
  },
};

Object.keys(person2.Assets).length === 0
  ? console.log("yok")
  : console.log(Object.keys(person2.Assets).join(","));
