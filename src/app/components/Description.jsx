const Description = ({items = []}) => {
  const colors = [
    "bg-(--desc1-bg-color) text-(--desc1-text-color)",
    "bg-(--desc2-bg-color) text-(--desc2-text-color)",
    "bg-(--desc3-bg-color) text-(--desc3-text-color)",
    "bg-(--desc4-bg-color) text-(--desc4-text-color)",
    "bg-(--desc5-bg-color) text-(--desc5-text-color)",
    "bg-(--desc6-bg-color) text-(--desc6-text-color)",
    "bg-(--desc7-bg-color) text-(--desc7-text-color)",
  ];

  return (
    <p className="flex gap-3 flex-wrap">
      {items.map((item, index) => {
        return (
          <span
            key={`${item}-${index}`}
            className={`${colors[index % colors.length]} py-0.5 px-3 rounded-xl`}
          >
            {item}
          </span>
        );
      })}
    </p>
  );
};

export default Description;

/*
items.map(...) laver et badge (span) for hvert temperamentstræk. 
React bruger key til at genkende hvert badge, når listen ændres.
Item sammen med index gør nøglen unik, også hvis et temperamentstræk gentages.

item.index:
${item} indsætter selve items, fx Playful.
${index} indsætter dets placering i listen, fx 2.
Bindestregen adskiller værdierne.
Så kan nøglen fx blive "Playful-2". 

colors[index % colors.length]:
index - nummeret på items i arrayet, obviously
colors.length - antallet af farver i farvelisten

Modulo (%) betyder resten efter division
Det får farveindekset til at starte forfra, når farverne er brugt
Hvis der fx er fem farver, bliver farveindekserne 0, 1, 2, 3, 4, 0, 1...
Så får alle items en farve, også hvis der er flere items end farver.
*/
