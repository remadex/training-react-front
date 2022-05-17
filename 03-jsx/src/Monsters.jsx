// Règle numéro 1: On ne parle pas du fight club
// Règle numéro 2: Lorsque vous créez un component et que celui-ci comporte uniquement un code HTML, on écrira le component comme le cas 2 et 3
// Règle numéro 3: On ne mettra pas de parenthèses lorsqu'on écrit que de l'HTML quand le code est court
// Règle numéro 4: On mettra des parenthèses lorsqu'on a un code plus long
// Règle numéro 5: Lorsque notre component contient du code JS, il faut mettre des accolades {} et faire un return de notre HTML (Et on ajoute des parenthèses si le code est long) comme dans le cas 1

// Règle numéro 6: Toujours retourner du JSX avec un élément parent et unique qui contient plusieurs éléments ou un élément comme dans le cas 4

// Cas 1
export const MonsterGreen = () => {
  const color = 'Green';
  return (
    <div>
      Le monstrezefsfjl hsdfb skdfbsjk jfdh kjfdkdjfhskdfjdsjk fhjks hfjkshfd kjsf est
      {color}
    </div>
  );
};

// Cascas 2
export const MonsterDrink = () => <div>Le monster est cool</div>;

// Cascascas 3
export const MonsterLagwe = () => (
  <div>
    <h1>Oui le monstre Lagwe</h1>
    <p>Il est le descendant des Romains</p>
  </div>
);

// Cascascascas 4

export const MonstreLustre = () => (
  <>
    {/* On écrit un commentaire dans le JSX de cette manière */}
    <div>Lolita</div>
    <div>Bus</div>
  </>
);
// On va utiliser un fragment (<></>) pour éviter de mettre une div inutile
