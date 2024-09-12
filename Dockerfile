# Use a imagem oficial do Node.js como base
FROM node:18

# Defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Construa a aplicação Next.js
RUN npm run build

# Defina a variável de ambiente para o Next.js
ENV NODE_ENV=production

# Exponha a porta em que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
