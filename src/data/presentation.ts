type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  phone: string;
  address: string;
  gmaps: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "artiteatre.nadiabanegas@gmail.com",
  title: "artiteatre",
  description:
    "Una escuela que imparte diversas materias inspiradas en los intereses de su fundadora, Nadia Banegas, dando origen a tres iniciativas educativas, cada una con su propia estructura y enfoque.",
  socials: [
    {
      label: "Facebook",
      link: "https://www.facebook.com/Musicaldansa/",
    },
    {
      label: "Instagram",
      link: "https://www.instagram.com/musicaldansa/",
    },
  ],
  phone: "971 31 31 47 / 666 231 065",
  address: "Pasaje Isidoro Macabich Edfo Olimpo, 20 bis, 6º 3ª 07800 Eivissa",
  gmaps: "https://maps.app.goo.gl/RMRaKpxjRpi3fPYS8"
};

export default presentation;
