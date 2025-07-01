const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 text-center py-6 text-gray-400 text-sm">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-inter">
          © {new Date().getFullYear()} VitrineX. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
