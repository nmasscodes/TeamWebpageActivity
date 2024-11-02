function toggleBio(bioId, moodboardId) {
        const bio = document.getElementById(bioId);
        const moodboard = document.getElementById(moodboardId);
        if (bio.style.display === "none" || bio.style.display === "") {
            bio.style.display = "block";
            moodboard.style.display = "block"; // Show moodboard
        } else {
            bio.style.display = "none";
            moodboard.style.display = "none"; // Hide moodboard
        }
    }