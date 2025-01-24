import Booki from "../images/Booki.png";
import Ohmyfood from "../images/OhMyFood.png";
import Sophiebluel from "../images/Portfolio-Sophie.png";
import Kasa from "../images/Kasa.png";
import events from "../images/724events.png";
import Ninacarducci from "../images/Ninacarucci.png";
import Argentbank from "../images/Argentbank.png";
import picturesSlide from './dataSlide';

const findImages = (name) => {
  const item = picturesSlide.find((item) => item.name === name);
  return item ? item.img : [];
};

const portfolio = [
  {
    id: "b9123946",
    name: "OhMyFood",
    image: [Ohmyfood],
    text: "Dans le cadre de ma formation en tant que développeur front-end, j'ai été mis en situation pour créer un site 'mobile-first' répertoriant les menus de restaurants haut de gamme pour le projet OhMyFood. Les clients peuvent précommander leur repas afin d'éviter les files d'attente. Quatre restaurateurs ont été simulés comme partenaires. J'ai assuré la conception responsive et intégré des animations élégantes pour offrir une expérience utilisateur optimale. Cette expérience m'a permis de démontrer mes compétences en conception web et en création d'interfaces utilisateur attractives et fonctionnelles.",
    code: "https://github.com/fabjeg/ohmyfood",
    site: "https://fabjeg.github.io/ohmyfood/",
    competences: ["HTML", "SASS", "Figma"],
    images: findImages("OhMyFood"),
  },
  {
    id: "7af00cd6",
    name: "Kasa",
    image: [Kasa],
    text: "Dans le cadre de ma formation en tant que développeur front-end, j'ai participé à un projet de simulation où j'étais chargé de travailler avec Kasa, une plateforme de location d'appartements entre particuliers en France. Ma mission consistait à refondre entièrement leur site web en utilisant React. Même sans accès au back-end, j'ai pu développer l'ensemble de l'application en créant les composants React et les routes avec React Router, démontrant ainsi ma capacité à gérer des projets complexes et à trouver des solutions créatives malgré les contraintes.",
    code: "https://github.com/fabjeg/Kasa",
    site: "https://arthurblanc.github.io/Kasa/",
    competences: ["React", "SASS", "Figma"],
    images: findImages("Kasa"),
  },
  {
    id: "0979876d",
    name: "724events",
    image: [events],
    text: "Dans le cadre de ma formation en tant que développeur front-end, j'ai été mis en situation par l'agence événementielle 724events pour résoudre des problèmes de bugs et finaliser leur site web vitrine. Ce projet avait été initialement démarré par un autre développeur. J'ai repris le travail en corrigeant les bugs et en complétant le cahier de recette pour assurer un fonctionnement sans faille. Cette expérience m'a permis de démontrer mes compétences en débogage et en finalisation de projets tout en respectant les attentes du client.",
    code: "https://github.com/fabjeg/724events",
    site: "https://724events-ac.vercel.app/",
    competences: ["React Dev Tools", "Débogage"],
    images: findImages("724events"),
  },
  {
    id: "f72a452f",
    name: "Nina Carducci",
    image: [Ninacarducci],
    text: "Dans le cadre de ma formation en tant que développeur front-end, j'ai été mis en situation pour offrir mes services d'optimisation SEO à Nina Carducci, une photographe. Après avoir effectué un audit de son site, j'ai identifié des problèmes de vitesse de chargement et de structure. J'ai proposé de résoudre ces problèmes en optimisant les images et le code du site. Mon objectif était d'améliorer son référencement et d'augmenter sa visibilité. Cette expérience m'a permis de démontrer mes compétences en SEO et en optimisation de site web pour un meilleur classement dans les moteurs de recherche.",
    code: "https://github.com/fabjeg/-ninacarducci",
    site: "https://fabjeg.github.io/-ninacarducci/",
    competences: ["SEO", "Wave", "Accessibilité"],
  },
  {
    id: "b4c67936",
    name: "Argent Bank Redux Toolkit",
    image: [Argentbank],
    text: "Dans le cadre de ma formation en tant que développeur front-end, j'ai été mis en situation pour travailler sur un projet simulé pour Argent Bank. J'ai travaillé sur la création du tableau de bord des utilisateurs en deux phases. La première phase impliquait de créer une application web réactive avec React, en utilisant Redux pour la gestion de l'état. Dans la deuxième phase, j'ai travaillé sur la conception des transactions et fourni des spécifications Swagger pour les routes API associées. Cette expérience m'a permis de développer mes compétences en développement front-end, en gestion de l'état avec Redux et en documentation d'API avec Swagger.",
    code: "https://github.com/fabjeg/ArgentBank",
    site: "https://fabjeg.github.io/ArgentBank-Redux/",
    competences: ["React", "Redux Toolkit", "MongoDB"],
    images: findImages("Argent Bank Redux Toolkit"),
  },
  {
    id: "b4c67937",
    name: "Argent Bank Redux",
    image: [Argentbank],
    text: "Dans le cadre de ma formation en tant que développeur front-end, j'ai participé à une simulation de projet pour Argent Bank. J'ai été chargé de créer le tableau de bord des utilisateurs en deux phases. La première phase consistait à développer une application web réactive avec React, en utilisant Redux pour la gestion de l'état. Dans la deuxième phase, j'ai simulé des modifications du backend en créant trois nouvelles routes : une route POST pour envoyer les données dans MongoDB, une route GET pour récupérer les données, et une route PUT pour modifier les types de transaction. J'ai également travaillé sur le nouveau design du site, en intégrant des mises à jour visuelles pour améliorer l'interface utilisateur. Cette expérience m'a permis de développer mes compétences en développement full-stack et en gestion de projet.",
    code: "https://github.com/fabjeg/ArgentBank-Redux",
    site: "https://fabjeg.github.io/ArgentBank-Redux/",
    competences: ["React", "Redux", "MongoDB"],
    images: findImages("Argent Bank Redux"),
  },
  {
    id: "c67ab8a7",
    name: "Booki",
    image: [Booki],
    text: "Dans le cadre de ma formation en tant que développeur web, j'ai participé à un projet simulé pour Booki. J'ai intégré l'interface du site en utilisant HTML et CSS, en collaboration avec Sarah, la CTO, et Loïc, l'UI designer. J'ai travaillé sur des maquettes complètes pour les versions desktop, tablette et mobile, en respectant les spécifications et contraintes techniques. J'ai reçu une structure de fichiers préparée pour démarrer, ce qui m'a permis de me concentrer sur l'intégration et la mise en œuvre des designs. Cette expérience m'a permis de perfectionner mes compétences en développement front-end et en conception responsive.",
    code: "https://github.com/fabjeg/Booki-HTML-CSS",
    site: "https://fabjeg.github.io/Booki-HTML-CSS/",
    competences: ["HTML", "CSS", "Figma"],
    images: findImages("Booki"),
  },
  {
    id: "46d188c5",
    name: "Portfolio architecte",
    image: [Sophiebluel],
    text: "Dans le cadre de ma formation en tant que développeur front-end, j'ai participé à un projet simulé chez ArchiWebos. J'ai contribué à la conception du site portfolio de Sophie Bluel, architecte d'intérieur. Mon rôle a impliqué la création de la page de présentation, de la page de connexion de l'administrateur, et d'une modale d'upload de médias. Cette expérience m'a permis de démontrer mes compétences en développement front-end et en conception de sites web interactifs, tout en travaillant sur des projets avec des exigences spécifiques et détaillées.",
    identifier:"sophie.bluel@test.tld",
    Mp:"S0phie",
    code: "https://github.com/fabjeg/Portfolio-architecte-sophie-bluel-p6",
    site: "https://sophie-bluel-portfolio-architecte.netlify.app/",
    competences: ["HTML", "CSS", "Javascript", "Swagger"],
    images: findImages("Portfolio architecte"),
  },
];

export default portfolio;
