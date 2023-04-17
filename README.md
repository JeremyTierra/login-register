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
   
2. Instalar las dependencias

        npm ci

3. Crear una base de datos en PostgreSQL 
tablas

table_users
 - id_user [PK] (uuid)
 - name (text)
 - password (text)
 - email (text)
 - role (text)
 
products

 - id [PK] (integer)
 - name (text)
 - category (text)
 - price (text)
 - imgURL (text)

4. Correr el servidor
npm run dev
