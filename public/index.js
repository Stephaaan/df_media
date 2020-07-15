let VIDEO_PLAYER = undefined;
window.onload = function () {
  VIDEO_PLAYER = document.querySelector("video");
  VIDEO_PLAYER.volume = 0.2;
};

const toggleMute = () => {
  VIDEO_PLAYER.muted = !VIDEO_PLAYER.muted;
};

const muted = () => {
  return VIDEO_PLAYER.muted;
};
