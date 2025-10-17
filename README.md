# API Node.js Veterinarias

**Proyecto Pilar Tecno 6ta Edición | Módulo Integrador Node.js | Actividad #api-nodejs-veterinarias**

---

## Descripción

Esta API RESTful permite gestionar **clientes** y **mascotas** de una veterinaria.  
Incluye operaciones CRUD completas para clientes y endpoints específicos para mascotas, como creación y filtrado por cliente.  
El proyecto utiliza **Node.js**, **Express**, **MongoDB Atlas** y **Mongoose**, y está desplegado en **Vercel**.

---

## Despliegue

**Producción:**  
https://api-nodejs-veterinarias.vercel.app/api/status

**Repositorio GitHub:**  
https://github.com/diego-oviedos-projects/api-nodejs-veterinarias

---

## Características

- CRUD completo de **clientes**
- Creación y filtrado de **mascotas** por cliente
- Validación de datos con **Mongoose**
- Conexión a base de datos **MongoDB Atlas**
- Endpoint de estado del sistema (`/api/status`)
- CORS configurado para desarrollo local (`http://localhost:5173`)
- Despliegue en **Vercel**

---

## Estructura del Proyecto

```
api-nodejs-veterinarias/
├── app.js # Configuración principal del servidor Express
├── config/
│ ├── db.js # Conexión con MongoDB Atlas
│ └── corsOptions.js # Configuración de CORS
├── models/
│ ├── Cliente.js # Modelo de datos Cliente
│ └── Mascota.js # Modelo de datos Mascota (referencia a Cliente)
├── routes/
│ ├── clientesRoutes.js # Rutas CRUD para clientes
│ └── mascotasRoutes.js # Rutas para mascotas y filtro por cliente
├── .env # Variables de entorno (MONGO_URI, PORT)
├── vercel.json # Configuración de despliegue en Vercel
├── package.json # Dependencias y scripts
└── README.md
```

---

## Tecnologías Utilizadas

| Tecnología        | Descripción                                       |
| ----------------- | ------------------------------------------------- |
| **Node.js**       | Entorno de ejecución para JavaScript              |
| **Express.js**    | Framework web para Node                           |
| **MongoDB Atlas** | Base de datos NoSQL en la nube                    |
| **Mongoose**      | ODM para modelar datos en MongoDB                 |
| **CORS**          | Middleware para compartir recursos entre dominios |
| **dotenv**        | Gestión de variables de entorno                   |
| **Vercel**        | Plataforma de despliegue en la nube               |

---

## Endpoints Disponibles

---

### 🧍‍♂️ Clientes

| Método     | Endpoint            | Descripción                     |
| ---------- | ------------------- | ------------------------------- |
| **GET**    | `/api/clientes`     | Obtener todos los clientes      |
| **GET**    | `/api/clientes/:id` | Obtener un cliente por ID       |
| **POST**   | `/api/clientes`     | Crear un nuevo cliente          |
| **PUT**    | `/api/clientes/:id` | Actualizar un cliente existente |
| **DELETE** | `/api/clientes/:id` | Eliminar un cliente             |

**Ejemplo de cliente:**

```json
{
  "_id": "66f0a1b2c3d4e5f6a7b8c9d0",
  "nombre": "María Pérez",
  "telefono": "3804000000",
  "email": "maria@example.com",
  "createdAt": "2025-10-16T19:45:22.000Z"
}
```

---

## Mascotas

| Método   | Endpoint        | Descripción                                                      |
| -------- | --------------- | ---------------------------------------------------------------- |
| **POST** | `/api/mascotas` | Crear una mascota vinculada a un cliente                         |
| **GET**  | `/api/mascotas` | Listar todas las mascotas o filtrar por cliente (`?cliente_id=`) |

{
"nombre": "Tini",
"especie": "Perro",
"raza": "Caniche",
"edad": 5,
"cliente_id": "66f0a1b2c3d4e5f6a7b8c9d0"
}

---

## Ejemplo de filtro por cliente:

GET /api/mascotas?cliente_id=66f0a1b2c3d4e5f6a7b8c9d0

Estado del Sistema
| Método | Endpoint | Descripción |
| ------- | ------------- | -------------------------------------------------------- |
| **GET** | `/api/status` | Verificar estado de la API y conexión a la base de datos |

Ejemplo de respuesta:
{
"api": "🩺 API Veterinarias funcionando correctamente",
"baseDeDatos": "Conectada",
"horaServidor": "16/10/2025, 19:45:22"
}

---

## Instalación Local

1️ Clonar el repositorio

git clone https://github.com/diego-oviedos-projects/api-nodejs-veterinarias.git
cd api-nodejs-veterinarias

2️ Instalar dependencias

npm install

3️ Configurar variables de entorno (.env)

MONGO_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/?retryWrites=true&w=majority
PORT=3000

4️ Ejecutar el servidor

npm run dev

El servidor estará disponible en:

http://localhost:3000

---

## Configuración

MongoDB

El proyecto usa MongoDB Atlas con credenciales seguras mediante .env.

CORS

CORS está configurado para permitir solicitudes desde:

http://localhost:5173 (entorno de desarrollo)

---

## Despliegue en Vercel

Archivo vercel.json:
{
"version": 2,
"builds": [{ "src": "app.js", "use": "@vercel/node" }],
"routes": [{ "src": "/(.*)", "dest": "app.js" }]
}

Scripts Disponibles

| Comando       | Descripción                                       |
| ------------- | ------------------------------------------------- |
| `npm start`   | Ejecuta el servidor en modo producción            |
| `npm run dev` | Ejecuta el servidor con nodemon (modo desarrollo) |

---

## Próximos Pasos

Crear Frontend en React con Vite para consumir esta API

Integrar las rutas /clientes y /mascotas desde el frontend

Implementar filtros visuales y gestión de datos desde la interfaz

Agregar autenticación de usuarios (opcional)

---

## Créditos

Desarrollado por Diego Oviedo
