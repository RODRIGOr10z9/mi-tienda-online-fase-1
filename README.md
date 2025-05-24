# Frontend Documentation for Mi Tienda Online

## Introducción
Este proyecto es una aplicación de comercio electrónico llamada "Mi Tienda Online". La aplicación está dividida en dos partes: el backend y el frontend. Este documento proporciona información sobre cómo configurar y ejecutar la parte del frontend de la aplicación.

## Estructura del Proyecto
La estructura del frontend es la siguiente:

```
frontend
├── public
│   └── index.html
├── src
│   ├── components
│   │   └── Producto.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   └── tests
│       └── Producto.test.js
├── package.json
└── README.md
```

## Requisitos Previos
Asegúrate de tener instalado Node.js y npm en tu máquina. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).

## Instalación
1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega a la carpeta del frontend:
   ```
   cd mi-tienda-online/frontend
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Ejecución
Para iniciar la aplicación en modo de desarrollo, ejecuta:
```
npm start
```
Esto abrirá la aplicación en tu navegador en `http://localhost:3000`.

## Pruebas
Para ejecutar las pruebas automatizadas, utiliza el siguiente comando:
```
npm test
```

## Contribuciones
Si deseas contribuir al proyecto, por favor sigue el flujo de trabajo de ramificaciones descrito en la documentación del repositorio.

## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.