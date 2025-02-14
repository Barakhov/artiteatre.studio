type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "artiteatre.nadiabanegas@gmail.com",
  title: "artiteatre",
  description:
    "Una escuela en la que se imparten diversas materias inspiradas en los intereses de su fundadora, Nadia Banegas, dando origen a tres líneas diferenciadas, cada una con su propia estructura y enfoque.",
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
};

export default presentation;
