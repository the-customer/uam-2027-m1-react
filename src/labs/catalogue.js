import Installation from "./01_Installation/Installation";

const lessons = [
  [
    'installation',
    'Démarrer avec Vite',
    'Installation',
    'Lancez le projet React et repérez le rôle de Vite, de React et de Tailwind. Modifiez une phrase dans le code pour observer la mise à jour dans le navigateur.',
    Installation
  ],
  [
    'structure',
    'La bibliothèque de classe',
    'Structure des dossiers',
    'Une fiche de lecture sépare les données du composant qui les affiche. Suivez les imports pour repérer où modifier le livre et où modifier la présentation.',
    Installation,
  ],
  [
    'hello-world',
    'Bienvenue à Dakar',
    'Hello World',
    'Une fonction React renvoie un premier bloc d’interface. Repérez comment le point d’entrée monte l’application et comment le composant Welcome produit le titre.',
    Installation,
  ],
  [
    'jsx',
    'Les places de l’atelier',
    'Les bases de JSX',
    'Les accolades JSX affichent les propriétés d’un objet et calculent le nombre de places restantes. Changez la capacité de l’atelier et comparez le résultat.',
    Installation,
  ],
  [
    'props',
    'Deux formations, une carte',
    'Props',
    'Deux formations utilisent le même composant de carte. Chaque appel lui transmet un titre, un niveau et une durée via ses props.',
    Installation,
  ],
  [
    'attributs-dynamiques',
    'Le statut d’une commande',
    'Attributs dynamiques',
    'Deux repas sont en préparation. Passez la commande à « Prête à retirer », puis à « Annulée ». Le texte et la couleur suivent le statut grâce à une classe Tailwind choisie dans le code.',
    Installation,
  ],
  [
    'evenements',
    'Choisir un créneau',
    'Événements',
    'Deux boutons appellent le même gestionnaire de clic avec des horaires différents. Observez le message que React met à jour après chaque clic.',
    Installation,
  ],
  [
    'usestate',
    'Le compteur de réservations',
    'useState',
    'L’atelier photo accueille huit personnes. Réservez deux places et vérifiez que le plan et le compteur changent ensemble. À huit, le bouton d’ajout se désactive. Le nombre de réservations est conservé avec useState.',
    Installation,
  ],
  [
    'listes',
    'Le programme du jour',
    'Listes et clés',
    'Le programme affiche les ateliers avec leur heure et leur salle. Inversez l’ordre des lignes, puis repérez dans le code comment map les construit et comment chaque clé identifie le même atelier après le changement.',
    Installation,
  ],
  [
    'rendu-conditionnel',
    'Le rendez-vous au centre',
    'Rendu conditionnel',
    'Changez la disponibilité du créneau et confirmez un rendez-vous. Les conditions JSX choisissent le message et le bouton à afficher.',
    Installation,
  ],
  [
    'formulaires',
    'Inscription à un parcours',
    'Formulaires contrôlés',
    'Inscrivez Awa au parcours Data. Essayez d’abord avec une adresse incomplète, puis corrigez-la pour obtenir la confirmation. React garde les valeurs des champs et valide la saisie à l’envoi.',
    Installation,
  ],
  [
    'etat-partage',
    'La billetterie du festival',
    'Remonter l’état',
    'Vous achetez trois billets à 2 500 FCFA pour le festival. Passez de deux à trois billets et vérifiez le total de 7 500 FCFA. Le parent garde la quantité et la transmet au sélecteur et au récapitulatif.',
    Installation,
  ],
  [
    'callbacks',
    'La checklist du formateur',
    'Callbacks',
    'Chaque ligne signale au parent quelle tâche retirer en appelant une fonction reçue par prop. Le parent filtre le tableau et actualise la liste.',
    Installation,
  ],
  [
    'useeffect',
    'Le chronomètre de séance',
    'useEffect',
    'Démarrez et mettez en pause le chronomètre. L’effet crée un intervalle pendant la lecture et le nettoie à la pause ou au démontage du composant.',
    Installation,
  ],
  [
    'usememo',
    'Le total par catégorie',
    'useMemo',
    'Filtrez des achats et calculez leur total. useMemo peut réutiliser le résultat du calcul lorsque la catégorie reste identique, par exemple pendant l’ouverture du détail.',
    Installation,
  ],
  [
    'usecallback',
    'Le carnet de favoris',
    'useCallback',
    'La note et le compteur ont des états distincts. useCallback conserve la référence de la fonction transmise au bouton mémoïsé pendant que vous écrivez.',
    Installation,
  ],
  [
    'useref',
    'Le code de retrait',
    'useRef',
    'Cliquez sur le bouton pour placer le curseur dans le champ. La référence donne accès à l’élément HTML après son montage.',
    Installation,
  ],
  [
    'hook-personnalise',
    'Le brouillon retrouvé',
    'Hooks personnalisés',
    'Un hook encapsule la lecture et l’écriture dans localStorage. Saisissez un brouillon et rechargez la page pour vérifier sa restauration.',
    Installation,
  ],
  [
    'context',
    'Le panier partagé',
    'Context API',
    'Les boutons et le récapitulatif lisent le même panier à travers un Provider. Ajoutez un article pour voir les deux zones collaborer via le contexte.',
    Installation,
  ],
  [
    'usereducer',
    'Le stock de claviers',
    'useReducer',
    'Réceptionnez ou vendez des claviers. Les boutons envoient des actions et une fonction pure calcule le nouvel état du stock.',
    Installation,
  ],
  [
    'performance',
    'Observer les rendus',
    'Performance et rendu',
    'Actualisez le composant parent avec et sans React.memo. Les outils React permettent de comparer les rendus des lignes dont les props gardent la même référence.',
    Performance,
  ],
  [
    'api',
    'Les ateliers du réseau',
    'Chargement de données',
    'Récupérez les ateliers via fetch et observez les états de chargement, de succès et d’erreur. Le jeu de données JSON est fourni avec le projet.',
    Installation,
  ],
  [
    'composition',
    'Les annonces du campus',
    'Composition',
    'Deux annonces réutilisent la même structure. children fournit le contenu et une prop facultative accueille le bouton de confirmation.',
    Installation,
  ],
  [
    'routing',
    'Le catalogue des cours',
    'React Router',
    'Ouvrez une fiche de cours et observez l’URL. Les routes imbriquées et le paramètre de chemin permettent d’afficher la fiche associée à un identifiant.',
    Installation,
  ],
  [
    'gestion-etat',
    'Le tableau de tâches',
    'Gestion d’état',
    'Ajoutez et cochez des tâches. Le contexte distribue l’état et dispatch, le reducer traite les actions, et le texte du formulaire reste un état local.',
    Installation,
  ],
  [
    'bonnes-pratiques',
    'La mini-caisse',
    'Bonnes pratiques',
    'Un client achète deux clés USB à la papeterie du campus. Ajoutez deux fois le produit, vérifiez la quantité et le total de 9 000 FCFA, puis ouvrez l’aperçu d’impression. Le ticket calcule ses montants à partir du panier.',
    Installation,
  ],
];

export const labs = lessons.map(([name,title,concept,description,Demo],index) => {
    // const name = x[0];
    // const title = x[1];
    // const concept = x[2];
    // const description = x[3];
    // const Demo = x[4];
    // const [name,title,concept,description, Demo] = x
    const number = String(index+1).padStart(2,'0');
    
    return {
        number,
        slug: `${number}-${name}`,
        title,
        concept,
        description,
        Demo
    }
});

