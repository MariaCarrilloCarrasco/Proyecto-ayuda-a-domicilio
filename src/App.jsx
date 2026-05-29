import React, { useState } from 'react';
import './App.css';

export default function App() {
  // Text size state: 'normal', 'large', 'huge'
  const [textSize, setTextSize] = useState('large');
  // Light / dark contrast mode
  const [highContrast, setHighContrast] = useState(false);
  // Image Viewer modal state
  const [zoomedImage, setZoomedImage] = useState(null);

  const workshops = [
    {
      id: 1,
      icon: '💬',
      title: 'WhatsApp y Videollamadas',
      description: 'Aprende a hablar con tus hijos, nietos y amigos. Te enseño a mandar fotos, escribir mensajes de voz y hacer videollamadas para ver a tus seres queridos cara a cara.'
    },
    {
      id: 2,
      icon: '🏥',
      title: 'Salud y Citas Médicas',
      description: 'Te ayudo a configurar la aplicación del médico en tu móvil. Aprende a pedir cita de cabecera, consultar tus recetas electrónicas y ver tu historial médico sin colas.'
    },
    {
      id: 3,
      icon: '🏛️',
      title: 'Gestiones por Internet',
      description: 'Te enseño o realizamos juntos trámites oficiales de forma segura: pedir cita en la Seguridad Social, renovar el DNI, gestiones de tu banco o tramitar papeles del Ayuntamiento.'
    },
    {
      id: 4,
      icon: '📱',
      title: 'Manejo del Móvil y Seguridad',
      description: 'Configuramos tu móvil con letras bien grandes. Aprende a guardar contactos, usar la cámara, conectarte a internet de forma segura y evitar timos o estafas por mensajes.'
    }
  ];

  const galleryImages = [
    {
      src: '/personal-project-1.jpg',
      alt: 'Folleto Informativo Clases Mayores',
      title: 'Folleto de Servicios'
    },
    {
      src: '/personal-project-2.jpg',
      alt: 'Foto de María Carrillo Carrasco',
      title: 'María a tu servicio'
    },
    {
      src: '/personal-project-3.jpg',
      alt: 'Tarjeta de Visita de María',
      title: 'Tarjeta de Contacto'
    }
  ];

  const socialExperiences = [
    {
      id: 1,
      period: '2022 - 2024',
      role: 'Técnica de Talleres y Actividades para Mayores',
      entity: 'Centros de Mayores (Coslada y Alcalá de Henares) - Obra Social "la Caixa" / Arcinature',
      description: 'Diseño y dirección de talleres adaptados para personas mayores. Dinámicas de estimulación cognitiva, uso de tecnologías y promoción de un envejecimiento activo y saludable.'
    },
    {
      id: 2,
      period: '2021 - 2024',
      role: 'Técnica de Educación Social e Integración',
      entity: 'Centro Municipal de Barajas y CAJE (Alcalá de Henares)',
      description: 'Apoyo socioeducativo y mediación de conflictos con menores con necesidades especiales (NEAE) y familias en situación de vulnerabilidad.'
    },
    {
      id: 3,
      period: '2021 - 2023',
      role: 'Monitora de Ocio y Tiempo Libre',
      entity: 'Colegios Públicos y Ayuntamiento de Alcalá de Henares',
      description: 'Dinamización de actividades formativas, de ocio y convivencia para niños y jóvenes, adaptando los juegos a las capacidades individuales.'
    },
    {
      id: 4,
      period: '2021',
      role: 'Técnica de Inserción y Orientación Laboral',
      entity: 'Fundación Capacis',
      description: 'Apoyo personalizado y desarrollo de habilidades sociales y competencias digitales básicas para la mejora de la empleabilidad de personas con discapacidad.'
    },
    {
      id: 5,
      period: '2018',
      role: 'Integración Social e Igualdad',
      entity: 'Centro Asesor de la Mujer (Ayuntamiento de Alcalá de Henares)',
      description: 'Atención inicial, primera acogida y orientación sobre recursos de emergencia para mujeres en situación de vulnerabilidad.'
    }
  ];

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hola María, vi tu web y me gustaría pedir ayuda o clases para aprender a usar el móvil/hacer trámites por internet.');
    window.open(`https://wa.me/34657028674?text=${text}`, '_blank');
  };

  return (
    <div className={`app-wrapper size-${textSize} ${highContrast ? 'high-contrast' : ''}`}>
      
      {/* ACCESSIBILITY BAR */}
      <div className="accessibility-bar" aria-label="Herramientas de accesibilidad">
        <div className="accessibility-container">
          <div className="size-controls">
            <span className="control-label">Tamaño del texto:</span>
            <button 
              className={`btn-size ${textSize === 'normal' ? 'active' : ''}`} 
              onClick={() => setTextSize('normal')}
              title="Texto mediano"
            >
              A
            </button>
            <button 
              className={`btn-size ${textSize === 'large' ? 'active' : ''}`} 
              onClick={() => setTextSize('large')}
              title="Texto grande"
            >
              A+
            </button>
            <button 
              className={`btn-size ${textSize === 'huge' ? 'active' : ''}`} 
              onClick={() => setTextSize('huge')}
              title="Texto muy grande"
            >
              A++
            </button>
          </div>
          
          <button 
            className={`btn-contrast ${highContrast ? 'active' : ''}`}
            onClick={() => setHighContrast(!highContrast)}
          >
            {highContrast ? '👁️ Modo Normal' : '🌓 Alto Contraste'}
          </button>
        </div>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="header-container">
          <div className="logo-section">
            <div className="heart-icon">🤝</div>
            <div>
              <h1 className="logo-title">Apoyo Digital</h1>
              <span className="logo-subtitle">Con María Carrillo</span>
            </div>
          </div>
          <div className="header-contact">
            <a href="tel:657028674" className="header-phone-btn">
              <span className="phone-icon">📞</span>
              <span>Llamar: <strong>657 02 86 74</strong></span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h2 className="hero-title">¿Necesitas ayuda con el móvil o el ordenador?</h2>
            <p className="hero-text">
              Te enseño a usar la tecnología a domicilio, a tu ritmo y con total paciencia. Aprende a usar WhatsApp, pedir cita médica y hacer tus trámites en internet de forma segura.
            </p>
            <div className="hero-buttons">
              <button onClick={handleWhatsApp} className="btn-action whatsapp-main">
                <span className="btn-icon">🟢</span>
                <div className="btn-details">
                  <span className="btn-title-main">Enviar un WhatsApp</span>
                  <span className="btn-subtitle-main">¡Escríbeme un mensaje!</span>
                </div>
              </button>
              <a href="tel:657028674" className="btn-action phone-main">
                <span className="btn-icon">📞</span>
                <div className="btn-details">
                  <span className="btn-title-main">Llamar por Teléfono</span>
                  <span className="btn-subtitle-main">657 02 86 74</span>
                </div>
              </a>
            </div>
          </div>
          <div className="hero-banner-card">
            <div className="badge-promo">🏡 Clases a Domicilio</div>
            <img src="/personal-project-2.jpg" alt="Foto de María enseñando" className="hero-img-portrait" />
          </div>
        </div>
      </section>

      {/* TALLERES & SERVICIOS */}
      <section className="section workshops-section">
        <h3 className="section-title">¿En qué te puedo ayudar?</h3>
        <div className="workshops-grid">
          {workshops.map((w) => (
            <div key={w.id} className="workshop-card">
              <div className="workshop-icon">{w.icon}</div>
              <div className="workshop-info">
                <h4>{w.title}</h4>
                <p>{w.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRAYECTORIA Y CONFIANZA */}
      <section className="section about-section">
        <div className="about-grid">
          <div className="about-image-column">
            <div className="about-avatar-wrap">
              <img src="/profile-maria.jpg" alt="María Carrillo Carrasco" className="about-avatar" />
            </div>
            <div className="about-card-badge">🎯 Educadora Social</div>
          </div>
          <div className="about-text-column">
            <h3 className="section-title-left">¿Quién te va a acompañar?</h3>
            <h4 className="about-intro">Hola, soy María Carrillo Carrasco</h4>
            <p className="about-desc">
              Soy <strong>Educadora Social</strong> e <strong>Integradora Social</strong> titulada por la Universidad de Alcalá. Cuento con una gran vocación por ayudar y experiencia real dinamizando talleres y actividades para personas mayores con la <strong>Fundación "la Caixa"</strong>.
            </p>
            <p className="about-desc">
              Mi objetivo es romper la brecha digital y conseguir que no dependas de nadie para usar el móvil o hacer gestiones. Te ofrezco explicaciones sencillas, paciencia infinita y total confianza en la comodidad de tu hogar.
            </p>
            
            <div className="trust-points">
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span><strong>Paciencia infinita:</strong> Explicaciones claras, paso a paso, sin prisas.</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span><strong>A domicilio:</strong> Aprendes con tus propios dispositivos en tu casa.</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span><strong>Seguridad:</strong> Te enseño a no caer en engaños o enlaces extraños.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MI EXPERIENCIA SOCIAL TIMELINE */}
      <section className="section experience-section">
        <h3 className="section-title">Mi Experiencia en el Sector Social</h3>
        <p className="section-subtitle">Tengo años de experiencia trabajando de cerca con mayores, familias y colectivos en Alcalá de Henares.</p>
        <div className="experience-timeline">
          {socialExperiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-badge">{exp.period}</div>
              <div className="timeline-content">
                <h4>{exp.role}</h4>
                <span className="timeline-entity">🏢 {exp.entity}</span>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MI FORMACIÓN Y COMPETENCIAS */}
      <section className="section education-skills-section">
        <h3 className="section-title">Mi Formación y Competencias</h3>
        <p className="section-subtitle">Titulaciones oficiales y aptitudes que me capacitan para ofrecerte el mejor apoyo.</p>
        
        <div className="edu-skills-grid">
          
          {/* COLUMNA FORMACIÓN */}
          <div className="edu-column">
            <h4>🎓 Formación Académica</h4>
            <div className="edu-list">
              <div className="edu-card">
                <span className="edu-year">2021</span>
                <div className="edu-card-details">
                  <h5>Grado Universitario en Educación Social</h5>
                  <p>Universidad de Alcalá (UAH). Capacitación para diseñar y realizar apoyos y dinamización educativa.</p>
                </div>
              </div>
              
              <div className="edu-card">
                <span className="edu-year">2017</span>
                <div className="edu-card-details">
                  <h5>Grado Superior en Integración Social</h5>
                  <p>IES Alonso Avellaneda. Especialización en autonomía personal y apoyo en tareas de la vida diaria.</p>
                </div>
              </div>

              <div className="edu-card">
                <span className="edu-year">2022</span>
                <div className="edu-card-details">
                  <h5>Inserción Sociolaboral y Discapacidad</h5>
                  <p>Comunidad de Madrid. Apoyo en la empleabilidad y competencias de personas con diversidad funcional.</p>
                </div>
              </div>

              <div className="edu-card">
                <span className="edu-year">2026</span>
                <div className="edu-card-details">
                  <h5>Desarrollo Frontend Web (Accesibilidad)</h5>
                  <p>Factoría F5. Formación técnica para crear aplicaciones web adaptables y fáciles de utilizar.</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA COMPETENCIAS */}
          <div className="skills-column">
            <h4>💡 Mis Competencias Clave</h4>
            <div className="skills-list">
              <div className="skill-card">
                <span className="skill-icon">🌸</span>
                <div className="skill-card-details">
                  <h5>Paciencia y Pedagogía</h5>
                  <p>Explico las cosas paso a paso, con tranquilidad y repitiendo lo que haga falta para que te sientas cómodo/a.</p>
                </div>
              </div>

              <div className="skill-card">
                <span className="skill-icon">🤝</span>
                <div className="skill-card-details">
                  <h5>Adaptación y Apoyo</h5>
                  <p>Me adapto a tus necesidades individuales, a tus dudas específicas y a tu ritmo de aprendizaje, sin presiones.</p>
                </div>
              </div>

              <div className="skill-card">
                <span className="skill-icon">🖥️</span>
                <div className="skill-card-details">
                  <h5>Habilidad Tecnológica</h5>
                  <p>Domino el manejo de móviles, tablets y ordenadores, así como la navegación segura en internet.</p>
                </div>
              </div>

              <div className="skill-card">
                <span className="skill-icon">🛡️</span>
                <div className="skill-card-details">
                  <h5>Seguridad Digital</h5>
                  <p>Te enseño a reconocer mensajes dudosos, evitar páginas con estafas y proteger tus datos personales.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* GALERÍA DE TALLERES Y FOLLETOS */}
      <section className="section gallery-section">
        <h3 className="section-title">Imágenes del Proyecto y Talleres</h3>
        <p className="section-subtitle">Haz clic en cualquier imagen para verla en grande y leerla con comodidad.</p>
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-card" onClick={() => setZoomedImage(img)}>
              <div className="gallery-img-wrap">
                <img src={img.src} alt={img.alt} className="gallery-img" />
                <div className="gallery-overlay">
                  <span>🔍 Ampliar imagen</span>
                </div>
              </div>
              <div className="gallery-info">
                <h4>{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section className="section contact-section">
        <div className="contact-card-box">
          <h3>¿Empezamos hoy mismo?</h3>
          <p>Llámame o escríbeme por WhatsApp para consultar tarifas sin compromiso o plantear tus dudas.</p>
          
          <div className="contact-large-buttons">
            <button onClick={handleWhatsApp} className="btn-contact-large wa-color">
              <span className="btn-icon-large">💬</span>
              <div className="btn-text-wrap">
                <span>Escribir por WhatsApp</span>
                <strong className="click-indicator">Haz clic aquí para chatear</strong>
              </div>
            </button>
            
            <a href="tel:657028674" className="btn-contact-large phone-color">
              <span className="btn-icon-large">📞</span>
              <div className="btn-text-wrap">
                <span>Llamar al teléfono</span>
                <strong>657 02 86 74</strong>
              </div>
            </a>
          </div>

          <div className="traditional-contacts">
            <h4>Otros medios de contacto:</h4>
            <div className="traditional-grid">
              <a href="mailto:mariacuario12@hotmail.es?subject=Consulta%20sobre%20Apoyo%20Digital%20y%20Clases%20a%20Domicilio&body=Hola%20Mar%C3%ADa%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20o%20solicitar%20tus%20servicios%20de%20apoyo%20digital%20a%20domicilio%20para%20personas%20mayores.%20Gracias." className="traditional-card">
                📧 <strong>Hotmail:</strong> mariacuario12@hotmail.es
              </a>
              <a href="mailto:mariacarrillocarrasco12@gmail.com?subject=Consulta%20sobre%20Apoyo%20Digital%20y%20Clases%20a%20Domicilio&body=Hola%20Mar%C3%ADa%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20o%20solicitar%20tus%20servicios%20de%20apoyo%20digital%20a%20domicilio%20para%20personas%20mayores.%20Gracias." className="traditional-card">
                📧 <strong>Gmail:</strong> mariacarrillocarrasco12@gmail.com
              </a>
              <a href="mailto:mariacarrillocarrasco12@outlook.com?subject=Consulta%20sobre%20Apoyo%20Digital%20y%20Clases%20a%20Domicilio&body=Hola%20Mar%C3%ADa%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20o%20solicitar%20tus%20servicios%20de%20apoyo%20digital%20a%20domicilio%20para%20personas%20mayores.%20Gracias." className="traditional-card">
                📧 <strong>Outlook:</strong> mariacarrillocarrasco12@outlook.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <p>© 2026 María Carrillo Carrasco. Proyecto de acompañamiento digital para personas de la tercera edad.</p>
          <p>Alcalá de Henares, Madrid. 🤝 Conectar a las personas es el primer paso.</p>
        </div>
      </footer>

      {/* IMAGE ZOOM OVERLAY */}
      {zoomedImage && (
        <div className="zoom-overlay" onClick={() => setZoomedImage(null)}>
          <div className="zoom-modal" onClick={(e) => e.stopPropagation()}>
            <button className="btn-close-zoom" onClick={() => setZoomedImage(null)}>✕ Cerrar</button>
            <img src={zoomedImage.src} alt={zoomedImage.alt} className="zoomed-img-large" />
            <p className="zoom-caption">{zoomedImage.alt}</p>
          </div>
        </div>
      )}

    </div>
  );
}
