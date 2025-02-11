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
  title: "Nadia Banegas - artiteatre.studio",
  description:
    "Aqui in text de introducción explicativo molon.... Nam a purus fermentum, viverra turpis ac, convallis est. Morbi congue nibh vel lacus pretium euismod. Nunc lectus est, dapibus at iaculis ac, accumsan at justo. Integer gravida interdum posuere.",
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
