document.addEventListener('DOMContentLoaded', () => {
    const voiceCloneForm = document.getElementById('voice-clone-form');
    const registerForm = document.getElementById('register-form');
    const getStartedButton = document.getElementById('get-started');
    let aiVoiceCreated = false;

    voiceCloneForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const audioUpload = document.getElementById('audio-upload');
        const textInput = document.getElementById('text-input');

        if (aiVoiceCreated) {
            alert('You have already created one AI voice. Please create an account to create more.');
            return;
        }

        if (audioUpload.files[0] && textInput.value) {
            // Here you would integrate with an AI voice cloning API
            // For this example, we'll just show a success message
            document.getElementById('result').innerHTML = '<p>AI voice generated successfully!</p>';
            aiVoiceCreated = true;
        } else {
            alert('Please upload an audio file and enter text to generate an AI voice.');
        }
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Here you would integrate with a backend to handle user registration
        // For this example, we'll just show a success message
        alert(`Account created successfully for ${email}`);
    });

    getStartedButton.addEventListener('click', () => {
        document.getElementById('ai-tool').scrollIntoView({ behavior: 'smooth' });
    });
});
