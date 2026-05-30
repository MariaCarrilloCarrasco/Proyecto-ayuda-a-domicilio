import React, { useState, useRef, useEffect } from 'react';
import './App.css';

export default function App() {
  // Text size state: 'normal', 'large', 'huge'
  const [textSize, setTextSize] = useState('large');
  // Light / dark contrast mode
  const [highContrast, setHighContrast] = useState(false);
  // Image Viewer modal state
  const [zoomedImage, setZoomedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const utteranceRef = useRef(null);

  const cancelSpeech = () => {
    if (utteranceRef.current) {
      utteranceRef.current.onstart = null;
      utteranceRef.current.onend = null;
      utteranceRef.current.onerror = null;
      utteranceRef.current = null;
    }
    window.speechSynthesis.cancel();
  };

  // Assistant states
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isSignPlaying, setIsSignPlaying] = useState(false);
  const [currentCaption, setCurrentCaption] = useState('');
  const [currentGesture, setCurrentGesture] = useState('idle');
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 4000);
    return () => {
      clearInterval(blinkInterval);
      cancelSpeech();
    };
  }, []);

  useEffect(() => {
    let captionInterval;
    if (isSignPlaying) {
      const captions = [
        "¡Hola! Te doy la bienvenida a mi página de Apoyo Digital y Clases a Domicilio.",
        "Soy María Carrillo, Educadora Social, y te ofrezco clases con total paciencia.",
        "En esta página verás cómo puedo ayudarte a usar tu teléfono móvil, tablet u ordenador.",
        "Te enseño a usar WhatsApp, hacer videollamadas y comunicarte con tus hijos y nietos.",
        "Aprenderás a pedir citas médicas de cabecera y recetas electrónicas por internet.",
        "Realizaremos gestiones seguras como banco por internet, Seguridad Social o Ayuntamiento.",
        "Te enseño a usar el móvil de forma segura para evitar estafas y mensajes engañosos.",
        "Abajo detallo mi formación oficial universitaria en Educación e Integración Social.",
        "Puedes pulsar los botones gigantes para escribirme por WhatsApp o llamarme directamente.",
        "¡Estaré encantada de visitarte en tu domicilio en Alcalá de Henares y ayudarte paso a paso!"
      ];
      const gestures = ['welcome', 'me', 'work', 'projects', 'work', 'projects', 'work', 'me', 'contact', 'thanks'];
      let index = 0;
      setCurrentCaption(captions[0]);
      setCurrentGesture(gestures[0]);
      
      captionInterval = setInterval(() => {
        index = (index + 1) % captions.length;
        setCurrentCaption(captions[index]);
        // Safe mapping of gestures matching captions index
        const gesturePattern = gestures[index] || 'idle';
        setCurrentGesture(gesturePattern);
      }, 4500);
    } else {
      setCurrentCaption('');
      setCurrentGesture('idle');
    }
    return () => clearInterval(captionInterval);
  }, [isSignPlaying]);

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

  const handleToggleAudio = () => {
    console.log("TTS toggle requested. isAudioPlaying:", isAudioPlaying);
    if (isAudioPlaying) {
      console.log("TTS: Cancelling active playback");
      cancelSpeech();
      setIsAudioPlaying(false);
    } else {
      console.log("TTS: Initializing utterance");
      cancelSpeech();

      const textToSpeak = "Hola, te doy la bienvenida. En esta página, María Carrillo, Educadora Social, te ofrece apoyo y clases a domicilio en Alcalá de Henares para aprender a usar el móvil, WhatsApp, pedir citas médicas y realizar tus gestiones de internet sin prisas y con total paciencia. Si deseas contactar con ella, pulsa el botón verde para enviar un WhatsApp o el botón naranja para llamarla directamente por teléfono. ¡Estaremos encantados de ayudarte!";
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utteranceRef.current = utterance; // Mantener referencia para evitar recolección de basura
      
      utterance.lang = 'es-ES';
      
      // Buscar una voz en español preferentemente alegre/femenina
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(v => v.lang.startsWith('es') && v.name.toLowerCase().includes('google')) ||
                             voices.find(v => v.lang.startsWith('es') && v.name.toLowerCase().includes('helena')) ||
                             voices.find(v => v.lang.startsWith('es'));
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
      
      utterance.rate = 0.95; // Un ritmo óptimo y natural
      utterance.pitch = 1.15; // Tono alegre y cercano
      
      utterance.onstart = () => {
        console.log("TTS: Audio playback started successfully");
        setIsAudioPlaying(true);
      };
      utterance.onend = () => {
        console.log("TTS: Audio playback finished");
        setIsAudioPlaying(false);
        utteranceRef.current = null;
      };
      utterance.onerror = (e) => {
        if (e.error === 'interrupted' || e.error === 'canceled') {
          console.log("TTS: Playback interrupted or canceled intentionally");
          return;
        }
        console.error("TTS error occurred:", e.error, e);
        setIsAudioPlaying(false);
        utteranceRef.current = null;
      };
      
      console.log("TTS: Triggering speak() synchronously");
      window.speechSynthesis.speak(utterance);
      setIsAudioPlaying(true);
    }
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

      {/* VIDEO PRESENTATION SECTION */}
      <section className="section video-section">
        <div className="video-section-container">
          <h3 className="section-title">Vídeo de Presentación</h3>
          <p className="video-section-subtitle">
            Descubre en este breve vídeo cómo ayudo a las personas mayores a familiarizarse con el uso del móvil y realizar sus trámites paso a paso.
          </p>
          <div className="video-wrapper">
            <video 
              src="/video-presentacion.mp4" 
              className="presentation-video-element" 
              controls 
              preload="metadata"
              poster="/personal-project-1.jpg"
            />
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
            <div key={index} className="gallery-card" onClick={() => { setZoomedImage(img); setZoomLevel(1); }}>
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
            <div className="zoom-controls">
              <button className="btn-zoom-action" onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 3.5))} title="Acercar">
                ➕ Acercar ({(zoomLevel * 100).toFixed(0)}%)
              </button>
              <button className="btn-zoom-action" onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.75))} title="Alejar">
                ➖ Alejar
              </button>
              <button className="btn-zoom-action" onClick={() => setZoomLevel(1)} title="Restablecer tamaño">
                🔄 Restablecer
              </button>
              <button className="btn-close-zoom" onClick={() => setZoomedImage(null)}>
                ✕ Cerrar
              </button>
            </div>
            <div className="zoomed-img-container">
              <img 
                src={zoomedImage.src} 
                alt={zoomedImage.alt} 
                className="zoomed-img-large" 
                style={{ 
                  width: `${100 * zoomLevel}%`,
                  transition: 'width 0.2s ease'
                }} 
              />
            </div>
            <p className="zoom-caption">{zoomedImage.alt}</p>
          </div>
        </div>
      )}

      {/* FLOATING ACCESSIBLE ASSISTANT */}
      <div className={`floating-assistant ${isAssistantOpen ? 'expanded' : 'collapsed'}`}>
        {isAssistantOpen ? (
          <div className="assistant-card animate-slide-in">
            <div className="assistant-header">
              <span>🧏 Guía Accesible (Voz y Señas)</span>
              <button className="btn-close-assistant" onClick={() => {
                setIsAssistantOpen(false);
                cancelSpeech();
                setIsAudioPlaying(false);
                setIsSignPlaying(false);
              }}>✕</button>
            </div>
            
             <div className="assistant-body">
              {/* Sign Language Live Webcam Feed simulation */}
              <div className="sign-player-container">
                <div className={`sign-video-screen ${isSignPlaying ? 'playing' : 'paused'}`}>
                  {/* Custom Animated Avatar Interpreter */}
                  <svg viewBox="0 0 100 100" className={`interpreter-svg gesture-${currentGesture}`}>
                    {/* Background */}
                    <rect width="100" height="100" fill="#2C0E37" rx="12" />
                    
                    {/* Subtle webcam lines */}
                    <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
                    <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
                    
                    {/* Character Torso */}
                    <path d="M 20 95 C 20 65, 80 65, 80 95 Z" fill="#E85D04" className="interpreter-torso" />
                    
                    {/* Head */}
                    <circle cx="50" cy="40" r="16" fill="#ffd1b3" />
                    
                    {/* Hair */}
                    <path d="M 32 40 C 30 22, 70 22, 68 40 C 65 26, 35 26, 32 40 Z" fill="#4B125C" />
                    <path d="M 32 36 L 30 52 C 30 55, 34 55, 34 52 Z" fill="#4B125C" />
                    <path d="M 68 36 L 70 52 C 70 55, 66 55, 66 52 Z" fill="#4B125C" />
                    
                    {/* Eyes */}
                    {isBlinking ? (
                      <>
                        <line x1="43" y1="38" x2="47" y2="38" stroke="#2C0E37" strokeWidth="2.5" strokeLinecap="round" />
                        <line x1="53" y1="38" x2="57" y2="38" stroke="#2C0E37" strokeWidth="2.5" strokeLinecap="round" />
                      </>
                    ) : (
                      <>
                        <circle cx="45" cy="38" r="2.5" fill="#2C0E37" />
                        <circle cx="55" cy="38" r="2.5" fill="#2C0E37" />
                        <path d="M 42 33 Q 45 32 48 34" stroke="#2C0E37" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                        <path d="M 58 33 Q 55 32 52 34" stroke="#2C0E37" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      </>
                    )}
                    
                    {/* Nose */}
                    <path d="M 50 38 Q 48 41 50 42" stroke="rgba(44,14,55,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    
                    {/* Mouth */}
                    <path 
                      d="M 45 46 Q 50 49 55 46" 
                      stroke="#c1121f" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeLinecap="round" 
                      className={`interpreter-mouth ${isSignPlaying ? 'talking' : ''}`}
                    />
                    
                    {/* Left Arm */}
                    <path 
                      d="M 25 70 Q 18 52 35 50" 
                      stroke="#ffd1b3" 
                      strokeWidth="6" 
                      strokeLinecap="round" 
                      fill="none" 
                      className="interpreter-arm left-arm" 
                    />
                    
                    {/* Right Arm */}
                    <path 
                      d="M 75 70 Q 82 52 65 50" 
                      stroke="#ffd1b3" 
                      strokeWidth="6" 
                      strokeLinecap="round" 
                      fill="none" 
                      className="interpreter-arm right-arm" 
                    />
                  </svg>
                  
                  {isSignPlaying && (
                    <div className="webcam-live-indicator">
                      <span className="live-dot"></span>
                      <span>LSE EN VIVO</span>
                    </div>
                  )}
                  
                  {isSignPlaying && currentCaption && (
                    <div className="sign-captions-overlay">
                      {currentCaption}
                    </div>
                  )}

                  {!isSignPlaying && (
                    <div className="play-overlay" onClick={() => setIsSignPlaying(true)}>
                      <span className="play-icon-sig">▶️ Ver Intérprete LSE</span>
                    </div>
                  )}
                </div>
                <div className="player-controls">
                  <button className="btn-player" onClick={() => setIsSignPlaying(!isSignPlaying)}>
                    {isSignPlaying ? '⏸️ Pausar Intérprete' : '▶️ Ver Intérprete LSE'}
                  </button>
                </div>
              </div>

              {/* Audio explanation controls */}
              <div className="audio-controls-block">
                <h5>🔊 Escuchar esta página</h5>
                <button 
                  className={`btn-audio-speak ${isAudioPlaying ? 'speaking' : ''}`}
                  onClick={handleToggleAudio}
                >
                  {isAudioPlaying ? '⏹️ Parar Audio' : '🔊 Escuchar por Voz'}
                </button>
                <p className="assistant-tip">Haz clic para escuchar una explicación hablada.</p>
              </div>

              <div className="assistant-promo">
                <p>María te ayuda con el móvil y los trámites de forma fácil y con paciencia. ¡Anímate a contactar!</p>
              </div>
            </div>
          </div>
        ) : (
          <button className="btn-assistant-collapsed" onClick={() => setIsAssistantOpen(true)}>
            <span className="btn-assistant-icons">🧏🔊</span>
            <span className="btn-assistant-text">¿Necesitas ayuda?</span>
          </button>
        )}
      </div>

    </div>
  );
}
