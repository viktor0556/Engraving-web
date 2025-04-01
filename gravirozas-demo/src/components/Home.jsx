const Home = () => (
  <div>
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/graviradmin.firebasestorage.app/o/galeria%2Fe6cba14f-dd42-4d0d-b47e-59e11a9663ec.jpeg?alt=media&token=cb21c5fa-8de0-4f7c-9e7d-94c7f5f7aaf5"
        alt="Gravírozott ajándék"
        className="max-w-full max-h-[400px] rounded shadow mb-6 object-contain"
      />

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Egyedi Gravírozás Ajándékokra
      </h1>

      <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-6">
        Kulcstartók, poharak, fa táblák és sok más - mind kézzel készítve!
      </p>

      <a
        href="/kapcsolat"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg transition-colors"
      >
        📩 Kérj ajánlatot
      </a>
    </div>

    <section className="bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-4">
        {
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white rounded shadow p-4">
              <h3 className="font-bold text-lg mb-2">🎁 Kulcstartók</h3>
              <p>
                Egyedi szöveggel, névvel vagy logóval gravírozva - akár pár nap
                alatt elkészül.
              </p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h3 className="font-bold text-lg mb-2">🍷 Poharak és üvegek</h3>
              <p>
                Boros-, pálinkás- vagy söröspoharak gravírozása alkalmakra,
                céges ajándékokra.
              </p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h3 className="font-bold text-lg mb-2">🪵 Fa táblák</h3>
              <p>
                Dísz-, ajtó- vagy vágódeszkák gravírozott üzenettel - különleges
                ajándék bárkinek.
              </p>
            </div>
          </div>
        }
      </div>
    </section>

    <div className="mt-12 bg-gray-50 p-6 rounded shadow text-center max-w-xl mx-auto">
      <p className="italic text-gray-700">
        „Rendeltem egy gravírozott fa kulcstartót, és a végeredmény csodaszép
        lett! Nagyon gyorsan elkészült, és tökéletes ajándék lett belőle.”
      </p>
      <p className="mt-2 font-semibold text-sm text-gray-600">
        - Egy elégedett vásárló
      </p>
    </div>
  </div>
);

export default Home;
