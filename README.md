# 🛍️ Vitrine de Ofertas

Uma vitrine moderna e responsiva para exibição de produtos em oferta, desenvolvida com Next.js 15 e Tailwind CSS. O projeto apresenta uma interface elegante com funcionalidades avançadas de filtragem, paginação e design system consistente.

![Banner do Projeto](https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80)

## ✨ Funcionalidades

### 🎯 **Páginas Principais**
- **Home**: Hero section atrativa com call-to-action e cards informativos
- **Ofertas**: Vitrine completa de produtos com sistema de filtros avançado

### 🔍 **Sistema de Filtros**
- **Filtro por Categoria**: Dropdown com todas as categorias disponíveis
- **Filtro por Faixa de Preço**: Range personalizado com valores mínimo e máximo
- **Interface Responsiva**: Filtros colapsáveis em dispositivos móveis
- **Limpar Filtros**: Reset rápido de todos os filtros aplicados

### 📱 **Paginação Inteligente**
- **"Ver Mais" sem Reload**: Carrega mais produtos sem recarregar a página
- **Scroll Preservado**: Mantém a posição do usuário na página
- **Contador Dinâmico**: Mostra progresso e produtos restantes
- **Reset Automático**: Volta ao início ao aplicar filtros

### 🎨 **Design System**
- **Tema Personalizado**: Cores e tipografia consistentes
- **Modo Escuro**: Interface otimizada com paleta gray-800
- **Cards Uniformes**: Layout responsivo com altura consistente
- **Micro-interações**: Hover effects e transições suaves

## 🚀 Tecnologias Utilizadas

### **Frontend**
- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática para maior robustez
- **Tailwind CSS** - Framework CSS utilitário
- **React Hooks** - useState, useEffect, useMemo para gerenciamento de estado

### **Otimizações**
- **Next/Image** - Otimização automática de imagens
- **Server Components** - Renderização no servidor para melhor performance
- **Client Components** - Interatividade no lado cliente onde necessário

### **APIs**
- **FakeStore API** - Dados de produtos para demonstração
- **Unsplash** - Imagens de alta qualidade para banners

## 📦 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css          # Estilos globais e tema
│   ├── layout.tsx           # Layout raiz da aplicação
│   ├── page.tsx             # Página inicial (Home)
│   └── ofertas/
│       └── page.tsx         # Página de ofertas
├── components/
│   ├── header/              # Cabeçalho com navegação
│   ├── footer/              # Rodapé da aplicação
│   ├── layout/              # Layout wrapper
│   ├── product-card/        # Card individual do produto
│   ├── product-filters/     # Sistema de filtros
│   └── paginated-products/  # Lista paginada de produtos
└── sections/
    ├── hero-section/        # Seção hero da home
    ├── banner-section/      # Banner das ofertas
    └── products-cards-section/  # Seção de produtos
```

## 🛠️ Instalação e Configuração

### **Pré-requisitos**
- Node.js 18.17 ou superior
- npm, yarn ou pnpm

### **1. Clone o repositório**
```bash
git clone https://github.com/seu-usuario/vitrine-ofertas.git
cd vitrine-ofertas
```

### **2. Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### **3. Configure as variáveis de ambiente**
```bash
# .env.local (opcional - para APIs customizadas)
NEXT_PUBLIC_API_URL=https://fakestoreapi.com
```

### **4. Execute o projeto**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação.

## 🎨 Design System

### **Paleta de Cores**
```css
/* Cores Principais */
--gray-800: #1f2937    /* Background principal */
--gray-700: #374151    /* Cards e elementos */
--gray-600: #4b5563    /* Inputs e filtros */
--blue-400: #60a5fa    /* Botões e destaques */
--blue-300: #93c5fd    /* Hover states */
--white: #ffffff       /* Textos principais */
--gray-200: #e5e7eb    /* Textos secundários */
```

### **Tipografia**
```css
/* Fontes */
font-sans: 'Inter', system-ui, sans-serif
font-inter: 'Inter', system-ui, sans-serif

/* Tamanhos */
text-4xl: 36px         /* Títulos principais */
text-3xl: 30px         /* Subtítulos */
text-lg: 18px          /* Textos grandes */
text-sm: 14px          /* Textos pequenos */
```

### **Componentes**

#### **ProductCard**
- Altura fixa para consistência visual
- Imagem otimizada com Next/Image
- Badge de desconto posicionado
- Hover effects sutis
- Layout flexível para diferentes conteúdos

#### **ProductFilters**
- Interface responsiva (desktop/mobile)
- Filtros por categoria e preço
- Estado persistente durante navegação
- Feedback visual para filtros ativos

## 📊 Funcionalidades Detalhadas

### **Sistema de Produtos**
```typescript
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
```

### **Filtros Disponíveis**
- **Categorias**: electronics, jewelery, men's clothing, women's clothing
- **Preço**: Range customizável (R$ 0 - R$ 1.000+)
- **Busca**: Filtragem em tempo real
- **Reset**: Limpar todos os filtros

### **Paginação**
- **Inicial**: 6 produtos por página
- **Incremental**: +6 produtos por clique
- **Responsiva**: Adapta-se aos filtros aplicados
- **Performance**: Não recarrega a página

## 🎯 Casos de Uso

### **Para Usuários**
1. **Descoberta**: Navegar produtos em oferta
2. **Filtragem**: Encontrar produtos específicos
3. **Comparação**: Visualizar preços e descontos
4. **Interesse**: Call-to-action para compra

### **Para Desenvolvedores**
1. **Reutilização**: Componentes modulares
2. **Extensibilidade**: Fácil adição de funcionalidades
3. **Manutenção**: Código organizado e tipado
4. **Performance**: Otimizações built-in do Next.js

## 📱 Responsividade

### **Breakpoints**
- **Mobile**: < 768px (1 coluna)
- **Tablet**: 768px - 1024px (2 colunas)
- **Desktop**: > 1024px (3 colunas)

### **Adaptações Mobile**
- Filtros colapsáveis
- Navigation hamburger
- Cards em stack
- Botões touch-friendly

## 🔧 Customização

### **Cores**
Edite `tailwind.config.ts` para personalizar o tema:
```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### **Componentes**
Cada componente está em sua própria pasta com index.tsx:
```bash
src/components/seu-componente/
├── index.tsx
└── types.ts (opcional)
```

### **APIs**
Para usar uma API diferente, atualize:
```typescript
// src/app/ofertas/page.tsx
const data = await fetch("sua-api-url");
```

## 🚀 Deploy

### **Vercel (Recomendado)**
```bash
npm i -g vercel
vercel
```

### **Netlify**
```bash
npm run build
# Upload da pasta .next para Netlify
```

### **Docker**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📈 Performance

### **Lighthouse Scores**
- ⚡ Performance: 95+
- ♿ Accessibility: 90+
- 🔍 SEO: 95+
- 💡 Best Practices: 90+

### **Otimizações Implementadas**
- Server-side rendering (SSR)
- Otimização automática de imagens
- Code splitting automático
- CSS crítico inline
- Preload de recursos importantes

## 🤝 Contribuição

### **Como Contribuir**
1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### **Guidelines**
- Use TypeScript para tipagem
- Siga o padrão de componentes existente
- Adicione testes para novas funcionalidades
- Mantenha o README atualizado

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **Seu Nome** - *Desenvolvimento inicial* - [@seu-github](https://github.com/seu-usuario)

## 🙏 Agradecimentos

- [FakeStore API](https://fakestoreapi.com/) - Dados de produtos
- [Unsplash](https://unsplash.com/) - Imagens de qualidade
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Next.js](https://nextjs.org/) - Framework React

## 📞 Suporte

Encontrou um bug ou tem uma sugestão?
- 🐛 [Reporte um bug](https://github.com/seu-usuario/vitrine-ofertas/issues)
- 💡 [Sugira uma feature](https://github.com/seu-usuario/vitrine-ofertas/issues)
- 📧 Email: seu-email@exemplo.com

---

<div align="center">
  <strong>Desenvolvido por Alberto Araújo com ❤️ usando Next.js e Tailwind CSS</strong>
</div>
