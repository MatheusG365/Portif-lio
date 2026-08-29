const projects = [
  {
    id: "cortae",
    title: "Cortaê",
    category: "Projeto em desenvolvimento",
    status: "Em desenvolvimento",
    description:
      "Projeto em desenvolvimento que reúne uma interface frontend e uma estrutura de backend. O portfólio apresenta o trabalho separando os dois repositórios.",
    tags: ["Frontend", "Backend", "Desenvolvimento"],
    github: "https://github.com/joaovitorgc/Corta--Front/tree/main",
    extraGithub: {
      label: "Backend",
      url: "https://github.com/joaovitorgc/Corta--Back",
    },
    images: [
      "/images/projects/cortae/01.svg",
      "/images/projects/cortae/02.svg",
      "/images/projects/cortae/03.svg",
    ],
  },
  {
    id: "conectando-doando",
    title: "Conectando e Doando",
    category: "Projeto colaborativo",
    status: "Projeto",
    description:
      "Projeto colaborativo com frontend e backend, criado para colocar em prática desenvolvimento de uma aplicação completa. Esse sistema tem um desenvolvimento mais avançado " +
    "onde ele tem um sistema mais complexo contando com cadastro de ongs, doadores e adms. Onde as ongs conseguem fazer cadastros de projeto e atualizações dos projetos além de conseguirem receber doações "+
    "essas doações são feitas direto pelo aplicativo usando uma biblioteca python e depois elas enviam um email informando o doador.",

    tags: ["React", "JavaScript", "Python", "CSS"],
    github: "https://github.com/diogolopesnunes/conectando-e-doando",
    images: [
      "/images/projects/conectando-doando/01.png",
      "/images/projects/conectando-doando/02.png",
      "/images/projects/conectando-doando/03.png",
    ],
  },
  {
    id: "dog-dodoi",
    title: "Dog Dodoi",
    category: "Projeto web",
    status: "Projeto",
    description:
      "Projeto web desenvolvido em equipe, com páginas e recursos voltados para uma experiência digital relacionada ao universo pet.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/MariaGregorutti/Dog-Dodoi",
    images: [
      "/images/projects/dog-dodoi/01.png",
      "/images/projects/dog-dodoi/02.png",
      "/images/projects/dog-dodoi/03.png",
    ],
  },
  {
    id: "vet-alfa",
    title: "Vet Alfa",
    category: "Projeto de software",
    status: "Projeto",
    description:
      "Projeto de software veterinário desenvolvido pela equipe Prontezza Software, apresentado aqui como parte do portfólio de projetos. Esse progéto foi feito com" +
        "a inteção de aprender a programar o básico, ele tem cadastro de usuario e pets, além de um sistema de agendamento e histórico de agendamento por pets",
    tags: ["Software", "Veterinária", "Projeto"],
    github: "https://github.com/Prontezza-Software/VetAlfa",
    images: [
      "/images/projects/vet-alfa/01.png",
      "/images/projects/vet-alfa/02.png",
      "/images/projects/vet-alfa/03.png",
    ],
  },
  {
    id: "biblioteca-senai",
    title: "Biblioteca SENAI",
    category: "Estudo / React Native",
    status: "Atividade",
    description:
      "Atividade desenvolvida para aprender e praticar React Native, usando a ideia de uma biblioteca como projeto de estudo.",
    tags: ["React Native", "JavaScript", "Mobile"],
    github: "https://github.com/MatheusG365/Livros",
    images: [
      "/images/projects/biblioteca-senai/01.png",
      "/images/projects/biblioteca-senai/02.png",
      "/images/projects/biblioteca-senai/03.png",
    ],
  },
];

export default projects;