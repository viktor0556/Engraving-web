const Contact = () => (
  <div className="max-w-xl mx-auto px-4 py-12 text-center">
    <h2 className="text-3xl font-bold mb-6">Kapcsolat</h2>
    <p className="text-gray-700 mb-6">
      Kérdésed van vagy ajánlatot kérnél? Töltsd ki az űrlapot, vagy írj azonnal Messengeren vagy Viberen!
    </p>

    {/* Kapcsolati űrlap – csak frontend demó */}
    <form className="space-y-4 mb-8">
      <input
        type="text"
        placeholder="Név"
        className="w-full p-3 border rounded"
      />
      <input
        type="email"
        placeholder="E-mail"
        className="w-full p-3 border rounded"
      />
      <textarea
        placeholder="Milyen ajándékot szeretnél gravíroztatni?"
        className="w-full p-3 border rounded h-32"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg"
      >
        📩 Üzenet küldése
      </button>
    </form>

    {/* Alternatív elérhetőségek */}
    <div className="space-y-4">
      <p className="text-gray-700">Vagy írj itt:</p>

      <a
        href="https://m.me/felhasznalonev" // ← ide jön a saját Messenger link
        target="_blank"
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded text-lg"
      >
        💬 Messenger
      </a>

      <a
        href="viber://chat?number=%2B36301234567" // ← ide jön a Viber számod (nem minden böngésző támogatja)
        className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded text-lg"
      >
        📱 Viber
      </a>
    </div>
  </div>
);

export default Contact;
