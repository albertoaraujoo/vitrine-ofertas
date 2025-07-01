const CardsSection = () => {
  return (
    <section className="bg-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
            <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2"
                />
              </svg>
            </div>
            <h3 className="font-sans text-heading-xs text-white mb-2">
              Preços Baixos
            </h3>
            <p className="font-inter text-body-sm text-gray-200">
              Descontos exclusivos toda semana
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
            <div className="w-12 h-12 bg-cyan-200 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-sans text-heading-xs text-white mb-2">
              Rápido
            </h3>
            <p className="font-inter text-body-sm text-gray-200">
              Encontre ofertas em segundos
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
            <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-sans text-heading-xs text-white mb-2">
              Confiável
            </h3>
            <p className="font-inter text-body-sm text-gray-200">
              Produtos verificados e seguros
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
