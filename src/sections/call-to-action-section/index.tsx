import React from "react";

const CallToActionSection = () => {
  return (
    <section className="bg-gray-700 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-sans text-heading-lg text-white mb-4">
          Não encontrou o que procurava?
        </h2>
        <p className="font-inter text-body-md text-gray-200 mb-8">
          Cadastre-se em nossa newsletter e seja o primeiro a saber sobre novas
          ofertas
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Seu e-mail"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
          />
          <button className="bg-blue-400 hover:bg-blue-300 text-white font-medium px-6 py-3 rounded-lg transition-colors">
            Cadastrar
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
