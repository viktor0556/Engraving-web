const Categories = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Kategóriák</h2>

      {/* Terméktípusok */}
      <h3 className="text-xl font-semibold mb-4">🧩 Terméktípusok</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded shadow p-4 text-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/graviradmin.firebasestorage.app/o/galeria%2F8acef781-c8d8-42c9-80a9-ed15d795bfce.jpeg?alt=media&token=11afd3b8-1afe-42bb-8354-de1a721078a0"
            alt="Kulcstartó"
            className="w-full max-h-64 object-contain rounded mb-4"
          />
          <h4 className="font-bold text-lg">Valentin</h4>
        </div>
        <div className="bg-white rounded shadow p-4 text-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/graviradmin.firebasestorage.app/o/galeria%2Fd8abf232-bc44-4658-bcff-a2549496a59f.jpeg?alt=media&token=7fdf6e21-6d04-48f9-b1dc-676177072816"
            alt="Poharak"
            className="w-full max-h-64 object-contain rounded mb-4"
          />
          <h4 className="font-bold text-lg">Poharak</h4>
        </div>
        <div className="bg-white rounded shadow p-4 text-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/graviradmin.firebasestorage.app/o/galeria%2F65a32b45-2c8e-4c18-b5df-e2977b692768.jpeg?alt=media&token=a212aefd-6d14-433a-bb51-a6edfeaac8f9"
            alt="Fa táblák"
            className="w-full max-h-64 object-contain rounded mb-4"
          />
          <h4 className="font-bold text-lg">Fa táblák</h4>
        </div>
      </div>

      {/* Árkategóriák */}
      <h3 className="text-xl font-semibold mb-4">💰 Árkategóriák</h3>
      <p className="text-sm text-gray-600 mb-4 italic">
        Fontos: az árak csak illusztrációként szerepelnek a demóban!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white rounded shadow p-4 text-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/graviradmin.firebasestorage.app/o/galeria%2F4bd9ec6d-6bed-4dbf-838c-d2f8b602b06e.jpeg?alt=media&token=b865bc94-6850-4b16-b85a-d363d3718d78"
            className="w-full max-h-64 object-contain rounded mb-4"
          />
          <h4 className="font-bold text-lg">5000 Ft alatt</h4>
        </div>
        <div className="bg-white rounded shadow p-4 text-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/graviradmin.firebasestorage.app/o/galeria%2Ffecd589c-6f76-42aa-9eaf-e5f92109ea62.jpeg?alt=media&token=4e9a395d-6c93-4a75-96ea-efd98529be66"
            className="w-full max-h-64 object-contain rounded mb-4"
          />
          <h4 className="font-bold text-lg">5000-10000 Ft</h4>
        </div>
        <div className="bg-white rounded shadow p-4 text-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/graviradmin.firebasestorage.app/o/galeria%2F91fb1077-070d-4a4c-baa1-0dc31f2d47d3.jpeg?alt=media&token=a424ff2a-056f-42d8-b255-bc0a9347607c"
            alt="10000 Ft felett"
            className="w-full max-h-64 object-contain rounded mb-4"
          />
          <h4 className="font-bold text-lg">10000 Ft felett</h4>
        </div>
      </div>
    </div>
  );
};

export default Categories;
