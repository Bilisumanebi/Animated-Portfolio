const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById("projectVideo2");
const video3 = document.getElementById("projectVideo3");

const videoList = [video1, video2, video3];

videoList.forEach((video) => {
  // Mute the video initially to allow autoplay
  video.muted = true;

  video.addEventListener("mouseover", () => {
    video.play().catch((error) => {
      console.error(`Error playing video: ${error}`);
    });
  });
  video.addEventListener("mouseout", () => {
    video.pause();
  });
});
