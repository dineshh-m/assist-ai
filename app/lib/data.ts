export const features = [
  {
    featureName: "Natural Language Processing (NLP)",
    featureDescription:
      "Implement NLP capabilities for the chatbot to understand and respond to user queries in a conversational manner.",
    background: "/nlp.jpg",
  },
  {
    featureName: "Live Chat Integration:",
    featureDescription:
      " Offer the option for users to connect with live agents for complex queries.",
    background: "/chat.jpg",
  },
  {
    featureName: "User-Friendly Interface:",
    featureDescription:
      "Simple Navigation: Ensure an easy-to-use interface with straightforward menus and options.",
    background: "/user-Interface.png",
  },
];

export type Feature = {
  featureName: string;
  featureDescription: string;
  background: string;
};
