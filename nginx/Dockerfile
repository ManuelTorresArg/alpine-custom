# nginx/Dockerfile
FROM nginx:alpine

# Copia tu archivo de configuración personalizado de Nginx al contenedor
COPY nginx.conf /etc/nginx/conf.d/default.conf # <--- ¡ELIMINA EL COMENTARIO SI LO TIENE!

# Expone el puerto 80
EXPOSE 80

# El comando por defecto de Nginx ya está bien
CMD ["nginx", "-g", "daemon off;"]