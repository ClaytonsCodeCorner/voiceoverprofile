// ==================== 
// Audio Configuration 
// ====================
const CHARACTER_AUDIO = {
    hero: 'assets/audio/hero.mp3',
    villain: 'assets/audio/villain.mp3',
    wizard: 'assets/audio/wizard.mp3',
    warrior: 'assets/audio/warrior.mp3',
    narrator: 'assets/audio/narrator.mp3',
    robot: 'assets/audio/robot.mp3',
    creature: 'assets/audio/creature.mp3',
    kid: 'assets/audio/kid.mp3',
    elder: 'assets/audio/elder.mp3'
};

// ==================== 
// Audio Player State 
// ====================
let currentAudio = null;
let currentPlayingAvatar = null;

// ==================== 
// Initialize on DOM Load 
// ====================
document.addEventListener('DOMContentLoaded', () => {
    initializeAvatars();
    addScrollAnimations();
});

// ==================== 
// Avatar Click Handlers 
// ====================
function initializeAvatars() {
    const avatars = document.querySelectorAll('.character-avatar');
    
    avatars.forEach(avatar => {
        const button = avatar.querySelector('.play-button');
        
        if (button) {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const characterName = avatar.getAttribute('data-character');
                playCharacterAudio(characterName, avatar);
            });
        }
    });
}

// ==================== 
// Audio Playback 
// ====================
function playCharacterAudio(characterName, avatarElement) {
    // Stop current audio if playing
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        
        // Remove active state from previous avatar
        if (currentPlayingAvatar) {
            currentPlayingAvatar.classList.remove('playing');
        }
    }
    
    // If clicking the same avatar that's playing, just stop
    if (currentPlayingAvatar === avatarElement) {
        currentAudio = null;
        currentPlayingAvatar = null;
        return;
    }
    
    // Get audio file path
    const audioPath = CHARACTER_AUDIO[characterName];
    
    if (!audioPath) {
        console.error(`No audio file found for character: ${characterName}`);
        showAudioMessage(avatarElement, 'Audio not found');
        return;
    }
    
    // Create and play new audio
    currentAudio = new Audio(audioPath);
    currentPlayingAvatar = avatarElement;
    
    // Add active state
    avatarElement.classList.add('playing');
    
    // Handle audio events
    currentAudio.addEventListener('ended', () => {
        avatarElement.classList.remove('playing');
        currentAudio = null;
        currentPlayingAvatar = null;
    });
    
    currentAudio.addEventListener('error', (e) => {
        console.error(`Error loading audio for ${characterName}:`, e);
        avatarElement.classList.remove('playing');
        showAudioMessage(avatarElement, 'Audio file missing');
        currentAudio = null;
        currentPlayingAvatar = null;
    });
    
    // Play audio
    currentAudio.play().catch(error => {
        console.error(`Error playing audio for ${characterName}:`, error);
        avatarElement.classList.remove('playing');
        showAudioMessage(avatarElement, 'Playback error');
        currentAudio = null;
        currentPlayingAvatar = null;
    });
}

// ==================== 
// User Feedback 
// ====================
function showAudioMessage(avatarElement, message) {
    const characterName = avatarElement.querySelector('.character-name');
    const originalText = characterName.textContent;
    
    characterName.textContent = message;
    characterName.style.color = '#ff6b6b';
    
    setTimeout(() => {
        characterName.textContent = originalText;
        characterName.style.color = '';
    }, 2000);
}

// ==================== 
// Scroll Animations 
// ====================
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe character avatars
    const characterAvatars = document.querySelectorAll('.character-avatar');
    characterAvatars.forEach((avatar, index) => {
        avatar.style.opacity = '0';
        avatar.style.transform = 'translateY(30px)';
        avatar.style.transition = `all 0.6s ease ${index * 0.05}s`;
        observer.observe(avatar);
    });
}

// ==================== 
// Keyboard Accessibility 
// ====================
document.addEventListener('keydown', (e) => {
    // Spacebar to pause/resume current audio
    if (e.code === 'Space' && currentAudio && e.target === document.body) {
        e.preventDefault();
        
        if (currentAudio.paused) {
            currentAudio.play();
            if (currentPlayingAvatar) {
                currentPlayingAvatar.classList.add('playing');
            }
        } else {
            currentAudio.pause();
            if (currentPlayingAvatar) {
                currentPlayingAvatar.classList.remove('playing');
            }
        }
    }
    
    // Escape to stop audio
    if (e.code === 'Escape' && currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        
        if (currentPlayingAvatar) {
            currentPlayingAvatar.classList.remove('playing');
        }
        
        currentAudio = null;
        currentPlayingAvatar = null;
    }
});

// ==================== 
// Smooth Scrolling 
// ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
