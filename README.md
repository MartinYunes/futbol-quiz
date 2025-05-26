# FÚTBOL QUIZ - El STOP más futbolero

¡Bienvenido a FÚTBOL QUIZ, el juego de categorías más futbolero del mundo!

## Características

- Diseño retro inspirado en álbumes de figuritas
- Juego de categorías con temas futboleros
- Sistema de ranking y competencia
- Modo invitado rápido
- Sistema de registro e inicio de sesión
- Explicación detallada de las reglas
- Animaciones y efectos retro
- Responsive design para móviles

## Estructura del Proyecto

```
futbol-quiz/
├── index.html
├── styles.css
├── app.js
└── assets/
    ├── stadium-background.jpg
    ├── sounds/
    └── images/
```

## Personalización

### Categorías

Para agregar o modificar categorías, edita el array `categories` en `app.js`:

```javascript
const categories = [
    { id: 1, name: "Jugadores históricos" },
    { id: 2, name: "Clubes europeos" },
    // ... agregar más categorías aquí
];
```

### Premios y Puntos

Los premios y sistema de puntos se pueden configurar en el archivo `app.js`:

```javascript
const rewards = {
    monthly: {
        gold: 1000,
        silver: 500,
        bronze: 200
    },
    daily: 50
};
```

### Colores y Estilos

Los colores principales se pueden modificar en el archivo `styles.css`:

```css
:root {
    --primary-color: #004D99;
    --secondary-color: #FFD700;
    --accent-color: #FF4500;
    // ... otros colores
}
```

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Google Fonts (Press Start 2P)

## Despliegue

Este es un sitio web estático que puede ser desplegado en cualquier servicio de hosting. Para un despliegue rápido, puedes usar:

- GitHub Pages
- Netlify
- Vercel

## Licencia

MIT License
