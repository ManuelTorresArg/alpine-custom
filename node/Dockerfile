# node/Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copia el package.json y package-lock.json de la carpeta 'node' del contexto
# al directorio de trabajo /app dentro del contenedor.
COPY node/package*.json ./ # <--- ¡ELIMINA EL COMENTARIO EN ESTA LÍNEA!

RUN npm install # Ahora debería encontrar package.json en /app/package.json

# Copia el resto del código de la carpeta 'node' del contexto
COPY node/. . # <--- ¡ELIMINA EL COMENTARIO EN ESTA LÍNEA!

EXPOSE 3000

CMD [ "node", "server.js" ]