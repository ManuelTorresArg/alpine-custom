# node/Dockerfile
FROM node:18-alpine

WORKDIR /app

# --- CAMBIO CLAVE AQUÍ ---
# Copia el package.json y package-lock.json de la carpeta 'node' del contexto
# al directorio de trabajo /app dentro del contenedor.
COPY node/package*.json ./ # <-- ¡Ruta relativa al CONTEXTO DE CONSTRUCCIÓN!
RUN npm install # Ahora debería encontrar package.json en /app/package.json

# Copia el resto del código de la carpeta 'node' del contexto
COPY node/. . # <-- ¡Ruta relativa al CONTEXTO DE CONSTRUCCIÓN!

EXPOSE 3000

CMD [ "node", "server.js" ]