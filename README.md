# Voice Actor Portfolio Website

A professional single-page portfolio website for voice actors built with HTML5, CSS3, and Vanilla JavaScript.

## 🎭 Features

- **Modern Dark Theme**: Sleek design with glassmorphism effects and gold/neon accents
- **Hero Section**: Bold header with animated "Available for Hire" status indicator
- **Services Showcase**: Clean layout displaying voice acting services (Commercials, Game Trailers, Characters, Cartoons)
- **Interactive Character Grid**: 3x3 grid of 9 character avatars with audio playback
- **Visual Feedback**: Glowing ring animation while audio is playing
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Smooth Animations**: Fade-in effects and hover transitions

## 🎵 Audio Setup

The website expects audio files in the `assets/audio/` directory. Add your audio samples with these filenames:

- `hero.mp3` - Hero character voice sample
- `villain.mp3` - Villain character voice sample
- `wizard.mp3` - Wizard character voice sample
- `warrior.mp3` - Warrior character voice sample
- `narrator.mp3` - Narrator voice sample
- `robot.mp3` - Robot character voice sample
- `creature.mp3` - Creature character voice sample
- `kid.mp3` - Kid character voice sample
- `elder.mp3` - Elder character voice sample

**Note**: The JavaScript configuration in `script.js` has a `CHARACTER_AUDIO` object at the top where you can easily modify audio file paths.

## 🚀 How to Use

1. **Add Audio Files**: Place your voice samples in the `assets/audio/` folder with the names listed above
2. **Open in Browser**: Simply open `index.html` in any modern web browser
3. **Customize**: Edit the text, colors, or add more characters as needed

## ⌨️ Keyboard Controls

- **Spacebar**: Pause/resume current audio
- **Escape**: Stop audio playback

## 🎨 Customization

### Fonts
The website uses Google Fonts:
- **Montserrat**: For headers and body text
- **Playfair Display**: For artistic headings

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --bg-dark: #0a0a0f;
    --accent-gold: #d4af37;
    --accent-neon: #00ffcc;
    /* ... more variables */
}
```

### Audio Mapping
Edit the `CHARACTER_AUDIO` object in `script.js`:
```javascript
const CHARACTER_AUDIO = {
    hero: 'assets/audio/hero.mp3',
    // ... add or modify characters
};
```

## 📱 Responsive Breakpoints

- **Desktop**: Full 3x3 grid with large avatars
- **Tablet** (≤768px): Adjusted spacing and layout
- **Mobile** (≤480px): Optimized for smaller screens

## 🛠️ Technologies

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- No external frameworks or libraries

## 📄 License

Free to use for personal and commercial projects.

---

**Note**: This is a static website. For production use, consider:
- Compressing audio files for faster loading
- Adding loading indicators for audio
- Implementing fallback formats (MP3, OGG, WAV)
- Using a CDN for better performance
