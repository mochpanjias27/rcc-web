/* Single source of truth for the 10 RCC / IORA / CRP publications (2026). */
window.RCC_JOURNALS = [
  {
    code: "IJBESD",
    eissn: "2722-1156",
    callForPapers: true,
    name: "International Journal of Business, Economics, and Social Development",
    imprint: "RCC",
    url: "https://journal.rescollacomm.com/index.php/ijbesd",
    sinta: 2,
    sintaUrl: "https://sinta.kemdiktisaintek.go.id/journals/profile/12892",
    months: [2, 5, 8, 11],
    apc: 150,
    subjects: ["Business and management", "Economics", "Social and community development"],
    extraIndex: ["DOAJ", "EBSCO", "Garuda", "WorldCat", "ROAD"]
  },
  {
    code: "IJRCS",
    eissn: null,
    callForPapers: true,
    name: "International Journal of Research in Community Service",
    imprint: "RCC",
    url: "https://journal.rescollacomm.com/index.php/ijrcs",
    sinta: 4,
    sintaUrl: "https://sinta.kemdiktisaintek.go.id/journals/profile/10989",
    months: [1, 4, 7, 10],
    apc: 70,
    subjects: ["Community service", "Technology product development", "Training and economic empowerment"],
    extraIndex: ["Garuda", "WorldCat", "ROAD"]
  },
  {
    code: "IJMSC",
    eissn: "3025-0803",
    callForPapers: true,
    name: "International Journal of Mathematics, Statistics, and Computing",
    imprint: "CRP",
    url: "https://ejournal.corespub.com/index.php/ijmsc",
    sinta: 4,
    sintaUrl: "https://sinta.kemdiktisaintek.go.id/journals/profile/17052",
    months: [1, 4, 7, 10],
    apc: 70,
    subjects: ["Mathematics", "Statistics", "Data science", "Computing and AI"],
    extraIndex: []
  },
  {
    code: "IJLCB",
    name: "International Journal of Linguistics, Communication, and Broadcasting",
    imprint: "CRP",
    url: "https://ejournal.corespub.com/index.php/ijlcb",
    sinta: 4,
    sintaUrl: null, // link in source list duplicated IJMSC's; add once verified
    months: [3, 6, 9, 12],
    apc: 70,
    subjects: ["Linguistics", "Communication", "Broadcasting and media"],
    extraIndex: []
  },
  {
    code: "IJQRM",
    name: "International Journal of Quantitative Research and Modeling",
    imprint: "RCC",
    url: "https://journal.rescollacomm.com/index.php/ijqrm",
    sinta: 5,
    sintaUrl: "https://sinta.kemdiktisaintek.go.id/journals/profile/13382",
    months: [3, 6, 9, 12],
    apc: 70,
    subjects: ["Quantitative research", "Mathematical modeling", "Operations research"],
    extraIndex: ["Garuda", "WorldCat", "ROAD"]
  },
  {
    code: "IJEER",
    eissn: "2776-7590",
    callForPapers: true,
    name: "International Journal of Ethno-Sciences and Education Research",
    imprint: "RCC",
    url: "https://journal.rescollacomm.com/index.php/ijeer",
    sinta: 5,
    sintaUrl: "https://sinta.kemdiktisaintek.go.id/journals/profile/15111",
    months: [1, 4, 7, 10],
    apc: 70,
    subjects: ["Ethnosciences", "Educational research", "Educational psychology and technology"],
    extraIndex: ["Garuda", "WorldCat", "ROAD"]
  },
  {
    code: "IJGOR",
    eissn: "2722-1016",
    callForPapers: true,
    name: "International Journal of Global Operations Research",
    imprint: "IORA",
    url: "https://www.iorajournal.org/index.php/ijgor",
    sinta: 5,
    sintaUrl: "https://sinta.kemdiktisaintek.go.id/journals/profile/15270",
    months: [2, 5, 8, 11],
    apc: 70,
    subjects: ["Operations research", "Optimization", "Risk management", "Industrial engineering"],
    extraIndex: ["Garuda", "WorldCat", "ROAD"]
  },
  {
    code: "IJHLP",
    name: "International Journal of Humanities, Law, and Politics",
    imprint: "CRP",
    url: "https://ejournal.corespub.com/index.php/ijhlp",
    sinta: 5,
    sintaUrl: "https://sinta.kemdiktisaintek.go.id/journals/profile/17056",
    months: [3, 6, 9, 12],
    apc: 70,
    subjects: ["Humanities", "Law", "Political science"],
    extraIndex: []
  },
  {
    code: "ORICS",
    name: "Operations Research: International Conference Series",
    imprint: "IORA",
    url: "https://www.iorajournal.org/index.php/orics",
    sinta: 5,
    sintaUrl: "https://sinta.kemdiktisaintek.go.id/journals/profile/11899",
    months: [3, 6, 9, 12],
    apc: 50,
    subjects: ["Conference proceedings", "Operations research", "Applied mathematics"],
    extraIndex: ["Garuda", "WorldCat", "ROAD"]
  },
  {
    code: "IJHMS",
    eissn: "2746-3281",
    callForPapers: true,
    name: "International Journal of Health, Medicine, and Sports",
    imprint: "CRP",
    url: "https://ejournal.corespub.com/index.php/ijhms",
    sinta: null,
    sintaUrl: null,
    months: [2, 5, 8, 11],
    apc: 50,
    subjects: ["Public health", "Medicine and pharmacy", "Sports science"],
    extraIndex: []
  }
];

window.RCC_IMPRINTS = {
  RCC: "Research Collaboration Community",
  IORA: "IORA",
  CRP: "CRP"
};
