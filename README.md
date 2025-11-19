# HomePage - Portfolio Website

Eine moderne, responsive Homepage zum Präsentieren von Projekten.

## 🌟 Features

- **Responsive Design**: Funktioniert perfekt auf Desktop, Tablet und Mobile
- **Moderne UI**: Sauberes und professionelles Design
- **Projekt-Showcase**: Präsentieren Sie Ihre Projekte mit Beschreibungen und Tags
- **Über-Mich-Sektion**: Stellen Sie sich und Ihre Fähigkeiten vor
- **Kontakt-Links**: Einfache Möglichkeit zur Kontaktaufnahme
- **Smooth Scrolling**: Sanfte Navigation zwischen Sektionen
- **Animationen**: Ansprechende Animationen beim Laden und Scrollen

## 📁 Struktur

```
HomePage/
├── index.html      # Haupt-HTML-Datei
├── styles.css      # Styling und Layout
├── script.js       # JavaScript für Interaktivität
└── README.md       # Diese Datei
```

## 🚀 Verwendung

1. **Lokale Ansicht**: Öffnen Sie einfach `index.html` in Ihrem Browser
2. **GitHub Pages**: Aktivieren Sie GitHub Pages in den Repository-Einstellungen
3. **Webserver**: Hosten Sie die Dateien auf einem beliebigen Webserver

## ✏️ Anpassung

### Projekte hinzufügen/bearbeiten

Bearbeiten Sie die Projekt-Cards in `index.html` in der `<section id="projects">`:

```html
<div class="project-card">
    <div class="project-image">
        <div class="placeholder-image">🚀</div>
    </div>
    <div class="project-content">
        <h3>Ihr Projekttitel</h3>
        <p>Ihre Projektbeschreibung</p>
        <div class="project-tags">
            <span class="tag">Technologie1</span>
            <span class="tag">Technologie2</span>
        </div>
        <a href="#" class="project-link">Mehr erfahren →</a>
    </div>
</div>
```

### Farben anpassen

Ändern Sie die CSS-Variablen in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --text-color: #1f2937;
    /* ... weitere Farben */
}
```

### Kontaktinformationen

Aktualisieren Sie die Links in der Kontakt-Sektion in `index.html`:

```html
<a href="mailto:ihre.email@example.com" class="contact-button">E-Mail</a>
<a href="https://github.com/ihrbenutzername" class="contact-button">GitHub</a>
```

## 🎨 Technologien

- HTML5
- CSS3 (mit CSS Grid und Flexbox)
- Vanilla JavaScript
- Responsive Design

## 📱 Browser-Kompatibilität

- Chrome (neueste Version)
- Firefox (neueste Version)
- Safari (neueste Version)
- Edge (neueste Version)

## 📄 Lizenz

Frei verwendbar für persönliche und kommerzielle Projekte.