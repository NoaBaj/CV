<!DOCTYPE html>
<html lang="fr">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CV</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  <style>
    /* --- 1. Configuration Globale --- */
    :root {
    --glass-bg: rgba(255, 255, 255, 0.1);
    --glass-border: 1px solid rgba(255, 255, 255, 0.2);
    --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    --text-color: #ffffff;
    --accent-color: #00d2ff;
  }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

    body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
    color: var(--text-color);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;
    overflow-x: hidden;
  }

    /* --- 2. Cercles d'arrière-plan (pour l'effet de profondeur) --- */
    .background-shape {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    z-index: -1;
    animation: float 6s ease-in-out infinite;
  }

    .shape-1 {
    width: 300px;
    height: 300px;
    background: #ff0076;
    top: -50px;
    left: -50px;
  }

    .shape-2 {
    width: 400px;
    height: 400px;
    background: #00d2ff;
    bottom: -100px;
    right: -50px;
    animation-delay: 3s;
  }

    @keyframes float {
    0% { transform: translate(0, 0); }
    50% { transform: translate(20px, 40px); }
    100% { transform: translate(0, 0); }
  }

    /* --- 3. Conteneur Principal (La carte en verre) --- */
    .glass-container {
    background: var(--glass-bg);
    backdrop-filter: blur(14px); /* L'effet de flou essentiel */
    -webkit-backdrop-filter: blur(14px);
    border: var(--glass-border);
    border-radius: 20px;
    box-shadow: var(--glass-shadow);
    padding: 3rem;
    max-width: 900px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr; /* Sidebar à gauche, contenu à droite */
    gap: 2rem;
  }

    /* --- 4. Sidebar (Gauche) --- */
    .sidebar {
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    padding-right: 2rem;
    text-align: center;
  }

    .profile-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid rgba(255, 255, 255, 0.3);
    margin-bottom: 1.5rem;
    background-color: rgba(255,255,255,0.1); /* Placeholder si pas d'image */
  }

    .name {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

    .title {
    color: var(--accent-color);
    font-size: 1rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

    .contact-info, .skills {
    text-align: left;
    margin-top: 2rem;
  }

    .section-title-sm {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid var(--accent-color);
    display: inline-block;
    padding-bottom: 5px;
  }

    .contact-item {
    margin-bottom: 0.8rem;
    font-size: 0.9rem;
    opacity: 0.8;
    display: flex;
    align-items: center;
  }

    .skill-tag {
    background: rgba(255, 255, 255, 0.15);
    padding: 5px 10px;
    border-radius: 8px;
    margin-bottom: 8px;
    display: inline-block;
    font-size: 0.85rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

    /* --- 5. Contenu Principal (Droite) --- */
    .main-content {
    padding-left: 1rem;
  }

    .section-title-lg {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--accent-color);
    font-weight: 600;
  }

    .experience-item, .education-item {
    margin-bottom: 2rem;
    position: relative;
    padding-left: 20px;
    border-left: 2px solid rgba(255, 255, 255, 0.1);
  }

    .experience-item::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 5px;
    width: 10px;
    height: 10px;
    background: var(--accent-color);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--accent-color);
  }

    .date {
    font-size: 0.85rem;
    opacity: 0.6;
    margin-bottom: 0.3rem;
  }

    .job-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

    .description {
    font-size: 0.95rem;
    line-height: 1.6;
    opacity: 0.9;
  }

    /* --- 6. Responsive (Mobile) --- */
    @media (max-width: 768px) {
    .glass-container {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }
    .sidebar {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-right: 0;
    padding-bottom: 2rem;
  }
    .main-content {
    padding-left: 0;
  }
  }
  </style>
</head>
<body>

<div class="background-shape shape-1"></div>
<div class="background-shape shape-2"></div>

<div class="glass-container">

  <aside class="sidebar">
    <img src="https://via.placeholder.com/150" alt="Photo de profil" class="profile-img">

      <h1 class="name">Jean Dupont</h1>
      <p class="title">Développeur Web Fullstack</p>

      <div class="contact-info">
        <h3 class="section-title-sm">Contact</h3>
        <div class="contact-item">📧 jean.dupont@email.com</div>
        <div class="contact-item">📞 +33 6 12 34 56 78</div>
        <div class="contact-item">📍 Paris, France</div>
        <div class="contact-item">🔗 linkedin.com/in/jean</div>
      </div>

      <div class="skills">
        <h3 class="section-title-sm">Compétences</h3>
        <span class="skill-tag">HTML5 / CSS3</span>
        <span class="skill-tag">JavaScript (ES6+)</span>
        <span class="skill-tag">React.js</span>
        <span class="skill-tag">Node.js</span>
        <span class="skill-tag">UI/UX Design</span>
        <span class="skill-tag">Git / GitHub</span>
      </div>
  </aside>

  <main class="main-content">

    <section>
      <h2 class="section-title-lg">Profil</h2>
      <p class="description" style="margin-bottom: 2rem;">
        Passionné par la création d'interfaces numériques intuitives et dynamiques. J'ai 5 ans d'expérience dans la conception de sites web réactifs et d'applications performantes. Je cherche toujours à combiner esthétique moderne et code propre.
      </p>
    </section>

    <section>
      <h2 class="section-title-lg">Expérience Professionnelle</h2>

      <div class="experience-item">
        <div class="date">2021 - Présent</div>
        <h3 class="job-title">Développeur Senior - TechStart</h3>
        <p class="description">
          Architecture et développement de solutions SaaS. Mentoring de l'équipe junior et mise en place de processus CI/CD. Amélioration des performances du site de 40%.
        </p>
      </div>

      <div class="experience-item">
        <div class="date">2018 - 2021</div>
        <h3 class="job-title">Web Designer - Agence Créa</h3>
        <p class="description">
          Conception de maquettes UI/UX pour des clients internationaux. Intégration HTML/CSS et animations JavaScript.
        </p>
      </div>
    </section>

    <section>
      <h2 class="section-title-lg">Formation</h2>

      <div class="education-item">
        <div class="date">2015 - 2018</div>
        <h3 class="job-title">Master Informatique</h3>
        <p class="description">Université de Technologie, Paris. Spécialisation Développement Web.</p>
      </div>
    </section>

  </main>
</div>

</body>
</html>