<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YouTube Video Recommendation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            background-color: #f4f4f4;
        }
        input {
            width: 80%;
            padding: 10px;
            margin-bottom: 10px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
        #videoContainer {
            margin-top: 20px;
        }
        iframe {
            width: 100%;
            height: 500px;
            border: none;
        }
    </style>
</head>
<body>
    <h1>YouTube Video Recommendation</h1>
    <input type="text" id="videoTitle" placeholder="Enter Topic or Title" required>
    <button id="getVideoButton">Get Recommended Video</button>
    
    <div id="videoContainer"></div>

    <script>
    async function getRecommendedVideo(title) {
        const apiKey = 'AIzaSyAHP47F5RTqzx3Xf95Zh1sOLdUD1bDzAuE';
        const endpoint = 'https://www.googleapis.com/youtube/v3/search';

        const url = `${endpoint}?part=id,snippet&duration>=30m&q=${encodeURIComponent(title)}&key=${apiKey}&maxResults=1&type=video`;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(`Error: ${errorResponse.error.message}`);
            }

            const data = await response.json();
            const video = data.items[0];

            if (video) {
                const videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;
                console.log('Video URL:', videoUrl);

                const embedUrl = videoUrl.replace('watch?v=', 'embed/');

                const videoContainer = document.getElementById('videoContainer');
                videoContainer.innerHTML = `<iframe src="${embedUrl}" allowfullscreen></iframe>`;
            } else {
                alert('No videos found for this topic.');
            }
        } catch (error) {
            alert('Failed to get video recommendation: ' + error.message);
        }
    }

    document.getElementById('getVideoButton').addEventListener('click', () => {
        const title = document.getElementById('videoTitle').value;
        if (title) {
            getRecommendedVideo(title);
        } else {
            alert('Please enter a video topic or title.');
        }
    });
</script>
</body>
</html>
