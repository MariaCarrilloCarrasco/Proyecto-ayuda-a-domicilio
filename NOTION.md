# 📓 Ficha de Proyecto: Acompañamiento a Personas Mayores

> **Estado del Proyecto:** 🟢 Completado y Compilado  
> **Autor/Developer:** María Carrillo Carrasco (Coders F5 - Madrid)  
> **Fecha:** Mayo 2026  
> **Categoría:** Proyecto Social / Inclusión Digital / Social Developer  

---

## 📖 Descripción del Proyecto

Este espacio documenta el desarrollo y la arquitectura de la aplicación de **Acompañamiento Digital y Trámites para Personas Mayores**. La web está diseñada como un portal de servicios a domicilio adaptado para personas de la tercera edad o con baja alfabetización digital, permitiéndoles contactar a María de forma inmediata para recibir asistencia personalizada y empática en sus propios hogares.

### 🎯 Objetivos de Impacto Social
*   **Reducir la brecha digital:** Facilitar el acceso independiente a gestiones cotidianas (salud, banca, comunicaciones).
*   **Asegurar la confianza:** Presentar el perfil profesional de María como Educadora e Integradora Social de forma transparente.
*   **Fomentar la autonomía:** Evitar que los adultos mayores dependan de familiares para realizar trámites básicos de internet.

---

## 🛠️ Stack Tecnológico Utilizado

| Tecnología | Rol en el Proyecto | Justificación Técnica |
| :--- | :--- | :--- |
| **React.js (v19)** | Núcleo de la Aplicación | Permite crear un visor de imágenes interactivo y un control de accesibilidad dinámico sin recargar la página. |
| **Vite** | Build Tool | Genera archivos ligeros, rápidos y listos para producción con soporte para HMR (Hot Module Replacement). |
| **Vanilla CSS3** | Diseño y Animación | Proporciona control total sobre la escala de fuentes (`rem`), temas de color y contrastes sin añadir frameworks pesados. |
| **JavaScript (ES6)** | Motor de Lógica | Controla el estado del tamaño del texto, del alto contraste y la apertura de imágenes en zoom. |
| **WhatsApp Link API** | Integración de Contacto | Permite abrir el chat de WhatsApp con un mensaje pre-rellenado para reducir la fricción en el usuario. |

---

## ♿ Motor de Accesibilidad Implementado

### 🔍 1. Control Dinámico de Tamaño de Fuente
La interfaz escala proporcionalmente todas las fuentes (desde títulos hasta descripciones de talleres) a través de tres niveles controlados por clases de estado en el contenedor principal:
*   `size-normal` (Base `1.1rem` - 18px aprox)
*   `size-large` (Base `1.35rem` - 22px aprox)
*   `size-huge` (Base `1.65rem` - 26px aprox)

### 🌓 2. Modo de Alto Contraste de un Clic
Activa un esquema de colores de alto contraste que anula los gradientes y el vidrio templado por bordes sólidos de `2px` o `3px` negros y colores sólidos de fondo.

### 📱 3. Botones Adaptados a Clics Difusos
Los botones principales (`Llamar` y `WhatsApp`) tienen dimensiones mínimas de área activa que garantizan el cumplimiento de las directrices WCAG para mitigar los problemas de temblores en las manos.

---

## 📂 Recursos Incluidos en el Proyecto

*   `personal-project-1.jpg`: Folleto publicitario oficial de los talleres de apoyo digital.
*   `personal-project-2.jpg`: Fotografía promocional del proyecto.
*   `personal-project-3.jpg`: Diseño de la tarjeta de visita física de contacto.
*   `profile-maria.jpg`: Foto de perfil profesional.

---

## 🌟 Cómo Desplegar este Espacio Notion en GitHub

1. Guarda este archivo como `NOTION.md` en la raíz de tu repositorio.
2. Puedes copiar y pegar el contenido directamente en un **Notion Page** importando el archivo markdown.
