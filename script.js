/*
=============================================================================
Portfolio Website - JavaScript Interaktivität
=============================================================================
Diese JavaScript-Datei fügt interaktive Funktionen zur Portfolio-Website hinzu:

1. Smooth Scrolling für Navigationslinks
2. Aktive Navigation basierend auf Scroll-Position
3. Scroll-Animationen für Projekt-Karten
4. Intersection Observer für Performance-optimierte Animationen

Alle Funktionen sind für moderne Browser optimiert und verbessern die
Benutzererfahrung durch sanfte Übergänge und visuelles Feedback.
=============================================================================
*/

// =============================================================================
// 1. SMOOTH SCROLLING FÜR NAVIGATIONSLINKS
// =============================================================================

/**
 * Implementiert sanftes Scrollen für alle internen Ankerlinks.
 * Ersetzt das standardmäßige "Spring"-Verhalten des Browsers durch
 * eine sanfte Animation zur Zielsektion.
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Event-Listener für jeden internen Link
    anchor.addEventListener('click', function (e) {
        // Verhindert das Standard-Sprungverhalten
        e.preventDefault();
        
        // Findet das Ziel-Element basierend auf dem href-Attribut
        const target = document.querySelector(this.getAttribute('href'));
        
        // Überprüft, ob das Ziel existiert, bevor gescrollt wird
        if (target) {
            // Sanftes Scrollen zum Ziel-Element
            target.scrollIntoView({
                behavior: 'smooth',    // Sanfte Animation statt sofortiger Sprung
                block: 'start'        // Scrollt zum Anfang des Elements
            });
        }
    });
});

// =============================================================================
// 2. AKTIVE NAVIGATION BASIEREND AUF SCROLL-POSITION
// =============================================================================

/**
 * Sammelt alle Sektionen und Navigationslinks für die aktive Markierung.
 * Diese Funktion überwacht die Scroll-Position und markiert den entsprechenden
 * Navigationslink als aktiv, basierend darauf, welche Sektion gerade sichtbar ist.
 */

// Sammelt alle Sektionen mit ID-Attributen
const sections = document.querySelectorAll('section[id]');
// Sammelt alle Navigationslinks
const navLinks = document.querySelectorAll('.nav-links a');

/**
 * Aktualisiert den aktiven Navigationslink basierend auf der aktuellen Scroll-Position.
 * Diese Funktion wird bei jedem Scroll-Event aufgerufen.
 */
function updateActiveNavLink() {
    // Aktuelle Scroll-Position mit einem Offset für bessere UX
    const scrollPosition = window.scrollY + 100;

    // Durchläuft alle Sektionen, um die aktuelle zu finden
    sections.forEach(section => {
        const sectionTop = section.offsetTop;         // Position der Sektion vom Dokumentenanfang
        const sectionHeight = section.offsetHeight;    // Höhe der Sektion
        const sectionId = section.getAttribute('id');  // ID der Sektion

        // Überprüft, ob sich die Scroll-Position innerhalb dieser Sektion befindet
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Entfernt 'active' Klasse von allen Links
            navLinks.forEach(link => {
                link.classList.remove('active');
                
                // Fügt 'active' Klasse zum entsprechenden Link hinzu
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Event-Listener für Scroll-Events (Performance-optimiert durch Throttling möglich)
window.addEventListener('scroll', updateActiveNavLink);
// Initialisiert die aktive Navigation beim Laden der Seite
window.addEventListener('load', updateActiveNavLink);

// =============================================================================
// 3. SCROLL-ANIMATIONEN FÜR PROJEKT-KARTEN
// =============================================================================

/**
 * Konfiguration für den Intersection Observer.
 * Dieser überwacht, wann Elemente in den sichtbaren Bereich kommen,
 * um Animationen auszulösen.
 */
const observerOptions = {
    threshold: 0.1,                      // Aktiviert sich, wenn 10% des Elements sichtbar sind
    rootMargin: '0px 0px -50px 0px'      // Zusätzlicher Margin am unteren Rand für frühere Aktivierung
};

/**
 * Intersection Observer für Performance-optimierte Scroll-Animationen.
 * Besser als traditionelle Scroll-Event-Listener, da es nur aktiviert wird,
 * wenn Elemente tatsächlich in den Viewport kommen.
 */
const observer = new IntersectionObserver((entries) => {
    // Durchläuft alle beobachteten Elemente
    entries.forEach(entry => {
        // Überprüft, ob das Element in den sichtbaren Bereich kommt
        if (entry.isIntersecting) {
            // Macht das Element sichtbar und bewegt es in die finale Position
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

/**
 * Initialisiert die Scroll-Animationen für Projekt-Karten.
 * Wartet auf das vollständige Laden des DOM, bevor die Animationen
 * eingerichtet werden.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Sammelt alle Projekt-Karten
    const projectCards = document.querySelectorAll('.project-card');
    
    // Richtet jede Karte für die Animation ein
    projectCards.forEach((card, index) => {
        // Startzustand: unsichtbar und nach unten versetzt
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        // Gestaffelte Übergangseffekte für nacheinander erscheinende Karten
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        // Fügt die Karte zur Observer-Überwachung hinzu
        observer.observe(card);
    });
});
