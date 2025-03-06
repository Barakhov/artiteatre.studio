type Social = {
  label: string;
  link: string;
};

type Information = {
  mail: string;
  phone: string;
  address: string;
  gmaps: string;
  socials: Social[];
};

const information: Information = {
  mail: "artiteatre.nadiabanegas@gmail.com",
  socials: [
    {
      label: "Facebook - Musicaldansa",
      link: "https://www.facebook.com/Musicaldansa/",
    },
    {
      label: "Instagram - Musicaldansa",
      link: "https://www.instagram.com/musicaldansa/",
    },
  ],
  phone: "971 31 31 47 / 666 231 065",
  address: "Pasaje Isidoro Macabich Edfo Olimpo, 20 bis, 6º 3ª 07800 Eivissa",
  gmaps: "https://maps.app.goo.gl/RMRaKpxjRpi3fPYS8",
};

export default information;
