import Booki from "../images/Booki.png";
import Ohmyfood from "../images/OhMyFood.png";
import Sophiebluel from "../images/Portfolio-Sophie.png";
import Kasa from "../images/Kasa.png";
import events from "../images/724events.png";
import Ninacarducci from "../images/Ninacarucci.png";
import Argentbank from "../images/Argentbank.png";
import picturesSlide from './dataSlide';
import Portfolio from '../images/portfolio.png'
import nft from '../images/nft.png'

const findImages = (name) => {
  const item = picturesSlide.find((item) => item.name === name);
  return item ? item.img : [];
};

const portfolio = [
  {
    id: "b9123946",
    name: "OhMyFood",
    image: [Ohmyfood],
    code: "https://github.com/fabjeg/ohmyfood",
    site: "https://fabjeg.github.io/ohmyfood/",
    competences: ["HTML", "SASS", "Figma"],
    images: findImages("OhMyFood"),
  },
  {
    id: "7af00cd6",
    name: "Kasa",
    image: [Kasa],
    code: "https://github.com/fabjeg/Kasa",
    site: "https://arthurblanc.github.io/Kasa/",
    competences: ["React", "SASS", "Figma"],
    images: findImages("Kasa"),
  },
  {
    id: "0979876d",
    name: "724events",
    image: [events],
    code: "https://github.com/fabjeg/724events",
    site: "https://724events-ac.vercel.app/",
    competences: ["React Dev Tools", "Débogage"],
    images: findImages("724events"),
  },
  {
    id: "f72a452f",
    name: "Nina Carducci",
    image: [Ninacarducci],
    code: "https://github.com/fabjeg/-ninacarducci",
    site: "https://fabjeg.github.io/-ninacarducci/",
    competences: ["SEO", "Wave", "Accessibilité"],
  },
  {
    id: "b4c67936",
    name: "Argent Bank Redux Toolkit",
    image: [Argentbank],
    code: "https://github.com/fabjeg/ArgentBank",
    site: "https://fabjeg.github.io/ArgentBank-Redux/",
    competences: ["React", "Redux Toolkit", "MongoDB"],
    images: findImages("Argent Bank Redux"),
  },
  {
    id: "b4c67937",
    name: "Argent Bank Redux",
    image: [Argentbank],
    code: "https://github.com/fabjeg/ArgentBank-Redux",
    site: "https://fabjeg.github.io/ArgentBank-Redux/",
    competences: ["React", "Redux", "MongoDB"],
    images: findImages("Argent Bank Redux Toolkit"),
  },
  {
    id: "c67ab8a7",
    name: "Booki",
    image: [Booki],
    code: "https://github.com/fabjeg/Booki-HTML-CSS",
    site: "https://fabjeg.github.io/Booki-HTML-CSS/",
    competences: ["HTML", "CSS", "Figma"],
    images: findImages("Booki"),
  },
  {
    id: "46d188c5",
    name: "Portfolio architecte",
    image: [Sophiebluel],
    identifier:"sophie.bluel@test.tld",
    Mp:"S0phie",
    code: "https://github.com/fabjeg/Portfolio-architecte-sophie-bluel-p6",
    site: "https://sophie-bluel-portfolio-architecte.netlify.app/",
    competences: ["HTML", "CSS", "Javascript", "Swagger"],
    images: findImages("Portfolio architecte"),
  },
  {
    id: "46d188c5",
    name: "Portfolio",
    image: [Portfolio],
    code: "https://github.com/fabjeg/Portfolio",
    site: "https://portfolio-fabiens-projects-3e207d58.vercel.app/",
    competences: [ "CSS", "React"],
    images: findImages("Portfolio architecte"),
  },
  {
    id: "46d188c9",
    name: "NFT",
    image: [nft],
    code: "https://github.com/fabjeg/dummysiteNFT",
    site: "https://dummysite-nft.vercel.app/",
    competences: [ "CSS", "React"],
    images: findImages("NFT"),
  },
];

export default portfolio;
