document.addEventListener("DOMContentLoaded", function () {
      const videoGallery = document.getElementById("videoGallery");
      const videoPaths = [
      { src: "1.mp4", title: "রিয়ার কালেকশন 🥵", isNew: true },

      { src: "2.mp4", title: "মধু 💋💋 },
      { src: "3.mp4", title: "অস্থির ভিডিও 💗💋" }
      { src: "4.mp4", title: " GF কে কোপাছে 💗💋" }
      ];
      const selectedVideoContainer = document.getElementById("selectedVideoContainer");
      const selectedVideoElement = document.getElementById("playVideo");
      const videoTitle = document.getElementById("videoTitle");
      const videoLink = document.getElementById("videoLink");
      const closeButton = document.getElementById("closeButton");

      videoPaths.forEach((video) => {
        const videoContainer = document.createElement("div");
        videoContainer.className = "relative bg-gray-900 p-1 rounded-sm shadow-md flex justify-center items-center h-20 w-full";

        const videoElement = document.createElement("video");
        videoElement.src = video.src;
        videoElement.controls = false;
        videoElement.className = "w-full h-full object-contain rounded-md";

        const playButton = document.createElement("button");
        playButton.className = "absolute text-white text-3xl font-bold bg-black bg-opacity-50 p-2 rounded-full";
        playButton.innerHTML = "&#9658;";

        playButton.addEventListener("click", function () {
          selectedVideoElement.src = video.src;
          videoTitle.textContent = video.title;
          videoTitle.classList.remove("hidden");
          videoLink.classList.remove("hidden");
          videoLink.onclick = () => {
            navigator.clipboard.writeText(window.location.href + video.src);
            alert('Video link copied!');
          };
          selectedVideoContainer.classList.remove("hidden");
          closeButton.classList.remove("hidden");
          selectedVideoElement.play();
          videoGallery.classList.add("hidden");
        });

        videoContainer.appendChild(videoElement);
        videoContainer.appendChild(playButton);

        // Add "New" badge if isNew is true
        if (video.isNew) {
          const newBadge = document.createElement("div");
          newBadge.className = "absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-1 py-0.5 rounded-br-md";
          newBadge.textContent = "New";
          videoContainer.appendChild(newBadge);
        }

        videoGallery.appendChild(videoContainer);
      });

      closeButton.addEventListener("click", function () {
        selectedVideoContainer.classList.add("hidden");
        videoTitle.classList.add("hidden");
        videoLink.classList.add("hidden");
        selectedVideoElement.pause();
        selectedVideoElement.src = "";
        videoGallery.classList.remove("hidden");
      });
    });
