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
    "ARTITEATRE es una escuela en la que se imparten diferentes materias que tienen que ver con los intereses de su fundadora Nadia Banegas. Generando así tres líneas muy diferenciadas con una estructura y planteamiento propio en cada una de ellas.",
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
