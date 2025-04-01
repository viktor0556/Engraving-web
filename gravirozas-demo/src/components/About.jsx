const About = () => (
  <div className="max-w-3xl mx-auto text-center px-4 py-12">
    <h2 className="text-3xl font-bold mb-6">Rólam</h2>

    <p className="text-lg text-gray-700 mb-4">
      Hobbinak indult, szenvedéllyé vált. Néhány évvel ezelőtt kezdtem el egyedi
      gravírozásokat készíteni ismerősöknek, barátoknak, és hamar rájöttem, hogy
      ez az, amit igazán szeretek.
    </p>

    <p className="text-lg text-gray-700 mb-4">
      Minden darabot gondosan és kézzel gravírozok – kulcstartókat, poharakat,
      fa táblákat, vágódeszkákat és más személyes ajándékokat. A célom, hogy
      minden megrendelő különleges és emlékezetes ajándékot adhasson.
    </p>

    <p className="text-lg text-gray-700 mb-6">
      Ha egyedi ötleted van, szívesen megvalósítom! Írj bátran, és egyeztetünk
      róla.
    </p>

    <a
      href="/kapcsolat"
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg transition-colors"
    >
      📩 Vedd fel velem a kapcsolatot
    </a>
    <ul className="mt-6 text-left text-gray-700 list-disc list-inside">
      <li>Minden ajándék egyedi megrendelés alapján készül</li>
      <li>Gyors határidő, személyes odafigyeléssel</li>
      <li>Akár céges megrendelésekre is</li>
    </ul>
  </div>
);

export default About;
