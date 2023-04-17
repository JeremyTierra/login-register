# login-register
 
# API de registro de productos y autenticación con roles de usuario y administrador

Este es un ejemplo de una API para registrar productos y permitir la autenticación de usuarios con diferentes roles (usuario y administrador) utilizando Node.js, Express.js y PostgreSQL. La API proporciona endpoints para registrar nuevos usuarios y productos, autenticar usuarios con JWT (JSON Web Token) y restringir el acceso a ciertos endpoints para diferentes roles de usuario.

## Requisitos

- Node.js
- PostgreSQL

## Instalación

1. Clonar el repositorio
   ```bash
   git clone https://github.com/tu-usuario/api-productos.git
Instalar las dependencias
bash
Copy code
npm install
Crear una base de datos en PostgreSQL
Crear un archivo .env con los siguientes valores (actualizar con los valores de su base de datos)
makefile
Copy code
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=nombre_de_la_base_de_datos
DB_USER=nombre_de_usuario_de_postgresql
DB_PASSWORD=contraseña_de_usuario_de_postgresql
SECRET_KEY=secreto_para_generar_el_token_jwt
Correr las migraciones
arduino
Copy code
npm run migrate
Correr el servidor
sql
Copy code
npm start
