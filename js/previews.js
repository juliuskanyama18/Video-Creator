

    document.getElementById("previewbutton").addEventListener("click", function () {

        speakText();
        for (const [id, settings] of Object.entries(animationSettings)) {
            const { element, timer, direction } = settings;
    
            element.style.transition = "none";
            element.style.opacity = '0.4';
    
            // Apply direction-specific transform
            if (direction === "up") {
                element.style.transform = "translateY(50px)";
            } else if (direction === "down") {
                element.style.transform = "translateY(-50px)";
            }
            else if (direction === "right") {
                element.style.transform = "translateX(-50px)";
            }
            else if (direction === "left") {
                element.style.transform = "translateX(50px)";
            }
    
            void element.offsetHeight; // Trigger reflow
    
            setTimeout(() => {
                element.style.transition = `transform ${timer}s ease, opacity ${timer}s ease`;
                element.style.transform = "translateY(0)";
                element.style.opacity = '1';
            }, 100); // Ensure reset styles apply
        }
    });
    