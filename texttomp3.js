
    // Create a new SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set up the audio context
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const destination = audioContext.createMediaStreamDestination();
    const mediaRecorder = new MediaRecorder(destination.stream);

    // Array to store audio data chunks
    const chunks = [];

    // Event listener to collect audio data chunks
    mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data);
    };

    // Event listener to handle the completion of recording
    mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/mp3' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'output.mp3';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    };

    // Connect the utterance to the audio context
    const source = audioContext.createMediaStreamSource(destination.stream);
    source.connect(audioContext.destination);

    // Start recording
    mediaRecorder.start();

    // Speak the text
    window.speechSynthesis.speak(utterance);

    // Stop recording after the utterance ends
    utterance.onend = () => {
        mediaRecorder.stop();
    };

// Example usage
textToMP3("Hello, this is a test message.");

Example 2: Using Google Cloud Text-to-Speech API

For more advanced usage, you can use the Google Cloud Text-to-Speech API. This requires setting up a Google Cloud project and obtaining API credentials.

const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');

// Creates a client
const client = new textToSpeech.TextToSpeechClient();

async function textToMP3(text) {
    const request = {
        input: { text: text },
        voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
        audioConfig: { audioEncoding: 'MP3' },
    };

    // Performs the text-to-speech request
    const [response] = await client.synthesizeSpeech(request);

    // Write the binary audio content to a local file
    const writeFile = util.promisify(fs.writeFile);
    await writeFile('output.mp3', response.audioContent, 'binary');
    console.log('Audio content written to file: output.mp3');
}

// Example usage
textToMP3("Hello, this is a test message.");



