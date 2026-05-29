# Proyecto Personal de Acompañamiento Digital a Personas Mayores 🤝

Este es el proyecto personal desarrollado por **María Carrillo Carrasco** para la **Factoría F5**. Es una aplicación web diseñada específicamente para que las personas mayores (tercera edad) puedan conocer el proyecto de acompañamiento a domicilio, consultar talleres y contactar de forma directa y simplificada mediante llamadas telefónicas o mensajes directos de WhatsApp.

## 📋 Descripción del Proyecto

El sitio web sirve como un puente digital seguro y de alta confianza. Permite a los usuarios de la tercera edad:
1. **Acceder a Ayuda Rápida**: Botones de gran formato y contraste para iniciar conversaciones de WhatsApp o realizar llamadas.
2. **Consultar Servicios y Talleres**: Explicación clara de clases particulares a domicilio (Salud, WhatsApp, trámites de ayuntamiento, seguridad).
3. **Explorar Folletos y Acreditaciones**: Galería de imágenes interactivas con visor integrado para inspeccionar folletos informativos, tarjetas de contacto y fotos del taller.
4. **Ver Perfil y Confianza**: Presentación de María Carrillo como Educadora Social e Integradora Social con experiencia relevante en talleres comunitarios de la Fundación "la Caixa".

---

## 🛠️ Tecnologías Utilizadas

La aplicación se construyó bajo un enfoque de **Desarrollo Web Accesible (Inclusión Digital)** y cuenta con las siguientes tecnologías:

1. **React.js**: Para la modularización y estructuración interactiva de las tarjetas, botones y visor de imágenes (modal).
2. **Vite**: Como entorno de desarrollo ágil y compilador optimizado de producción.
3. **JavaScript (ES6+)**: Lógica de gestión de estados en accesibilidad (redimensionamiento de texto y contraste dinámico).
4. **CSS3 (Vanilla)**: Maquetación fluida y responsiva utilizando CSS Variables para la escala tipográfica, sombras suaves para mejorar la profundidad visual y bordes redondeados.
5. **Google Fonts (Outfit & Space Grotesk)**: Tipografía sans-serif de alta legibilidad, espaciado generoso y jerarquía clara.

---

## ♿ Características de Accesibilidad (WCAG AA/AAA)

El diseño está pensado especialmente para mitigar las dificultades visuales o motrices de los adultos mayores:
- **Redimensionamiento Tipográfico Dinámico**: Botones flotantes permanentes en cabecera para cambiar el tamaño de letra entre Mediana (`A`), Grande (`A+`) y Muy Grande (`A++`) escalando toda la interfaz de forma armónica.
- **Tema de Alto Contraste**: Botón para activar un tema blanco/negro puro con bordes marcados de 2px, asegurando un contraste superior a 7:1 en todos los textos y áreas activas.
- **Tamaño de Botones**: Botones de llamada y WhatsApp de gran tamaño (mínimo de `60px` de altura táctil) para facilitar el clic a personas con temblores o baja precisión motriz.
- **Navegación Intuitiva**: Ausencia de menús desplegables complejos o lenguaje técnico.

---

## 🚀 Cómo Iniciar el Proyecto Localmente

Para descargar y ejecutar el proyecto en tu entorno local:

1. **Instalar Dependencias**:
   ```bash
   npm install
   ```

2. **Iniciar Servidor de Desarrollo**:
   ```bash
   npm run dev
   ```
   *Abre la dirección [http://localhost:5173](http://localhost:5173) en tu navegador.*

3. **Compilar para Producción**:
   ```bash
   npm run build
   ```
   *Genera los archivos optimizados dentro de la carpeta `/dist` listos para desplegar.*
