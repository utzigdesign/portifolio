# Portfólio João Vicente Utzig

Site profissional desenvolvido a partir de design no Figma, apresentando experiências e cases de sucesso.

## 🚀 Deploy no GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages via GitHub Actions.

### Configuração Inicial

1. **Crie um repositório no GitHub**
   - Vá em https://github.com/new
   - Crie um repositório público ou privado

2. **Configure o GitHub Pages**
   - Vá em Settings → Pages
   - Em "Source", selecione "GitHub Actions"

3. **Faça o push inicial**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio site"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/seu-repositorio.git
   git push -u origin main
   ```

4. **Deploy automático**
   - O GitHub Actions irá fazer o build e deploy automaticamente
   - Seu site estará disponível em: `https://seu-usuario.github.io/seu-repositorio/`

## 📦 Estrutura do Projeto

- `/App.tsx` - Componente principal da aplicação
- `/imports/` - Componentes importados do Figma
- `/components/ui/` - Componentes reutilizáveis (Shadcn)
- `/styles/` - Estilos globais

## 🛠️ Tecnologias

- React
- TypeScript
- Tailwind CSS
- Vite

## 📝 Licença

© 2025 João Vicente Utzig
