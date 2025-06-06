import illustration_0 from "./../../public/assets/illustrations/illustration_0.png";
import illustration_1 from "./../../public/assets/illustrations/illustration_1.png";
import illustration_2 from "./../../public/assets/illustrations/illustration_2.png";

export const processData = {
  title: "Transformez vos besoins en solutions concrètes",
  description: {
    text: "Chaque entreprise est unique. Pour concevoir une application métier pertinente, je commence par comprendre vos besoins et vos processus. Voici comment je procède, étape par étape.",
    strongParts: ["comprendre vos besoins et vos processus"],
  },
  steps: [
    {
      illustration: illustration_0,
      illustrationAlt: "Illustration comprend votre activité",
      title: "Comprendre votre activité",
      paragraphs: [
        {
          text: "Chaque projet commence par une immersion dans votre métier : vos processus, vos contraintes et vos objectifs.",
          strongParts: ["immersion dans votre métier"],
        },
        {
          text: "Grâce à une phase d'audit ciblée, je cartographie vos flux de travail pour identifier les leviers d'automatisation les plus pertinents.",
          strongParts: ["identifier les leviers d'automatisation"],
        },
      ],
    },
    {
      illustration: illustration_1,
      illustrationAlt: "Illustration conception d'une solution adaptée",
      title: "Concevoir la solution adaptée",
      paragraphs: [
        {
          text: "Sur la base des échanges et de l'audit, je conçois une application intuitive, alignée sur vos usages métier.",
          strongParts: ["application intuitive, alignée sur vos usages"],
        },
        {
          text: "Chaque interface est pensée pour être fonctionnelle, durable et simple à prendre en main, même sans bagage technique.",
          strongParts: [],
        },
      ],
    },
    {
      illustration: illustration_2,
      illustrationAlt: "Illustration livraison, test et accompagnent",
      title: "Livrer, tester, accompagner",
      paragraphs: [
        {
          text: "La solution est livrée progressivement, avec des phases de test et de validation à chaque étape clé.",
          strongParts: [
            "livrée progressivement",
            "validation à chaque étape clé",
          ],
        },
        {
          text: "Vous êtes accompagné jusqu'à la mise en production, avec un suivi dédié pour garantir la qualité et l'évolutivité de l'outil.",
          strongParts: ["garantir la qualité et l'évolutivité"],
        },
      ],
    },
  ],
};
