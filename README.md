# 📊 Enquete Rápida

Um projeto simples desenvolvido com **Node.js**, **Express**, **MySQL**, **HTML**, **CSS** e **JavaScript** para criar uma enquete online.

## ✨ Funcionalidades
- Votação em tempo real
- Atualização automática dos resultados
- Design responsivo (Mobile-First)

## ⚙️ Como Executar
1. Crie o banco de dados e a tabela usando o script SQL fornecido.
2. Instale as dependências:
```bash
npm install
```
3. Inicie o servidor:
```bash
node index.js
```
4. Acesse no navegador:
```
http://localhost:3000
```

## 🗄️ Script SQL
```sql
CREATE TABLE tbl_votos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  opcao_nome VARCHAR(100) NOT NULL UNIQUE,
  total_votos INT DEFAULT 0
);
INSERT INTO tbl_votos (opcao_nome, total_votos) VALUES ('JavaScript', 0), ('Python', 0), ('SQL', 0);
```

## 📂 Estrutura do Projeto
- `index.js` → Backend com Node.js e Express
- `public/index.html` → Frontend
- `public/style.css` → Estilos
- `public/script.js` → Lógica do frontend

## 👨‍💻 Autor
Feito por [Karen Gentil](https://github.com/KarenGentil)
