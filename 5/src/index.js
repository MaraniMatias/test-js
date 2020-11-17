const target = document.getElementById("sunmedia");
const videoElm = createVideoElement(
  "https://vod.addevweb.com/sunmedia/demos/v/normal.mp4"
);

/**
 * Crea un elemento de html video con el source correspondiente
 * Docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
 * @param {string} src The video media file url
 * @return {HTMLVideoElement}
 */
function createVideoElement(src) {
  const source = document.createElement("source");
  source.src = src;

  const videoHtmlElement = document.createElement("video");
  const altText = "No se puede reproducir el video.";
  videoHtmlElement.innerText = altText;
  videoHtmlElement.muted = true;
  videoHtmlElement.autoplay = true;
  videoHtmlElement.controls = true;
  videoHtmlElement.appendChild(source);
  return videoHtmlElement;
}

/**
 * @param {HTMLDivElement} targetElm
 * @param {HTMLVideoElement} videoElm
 */
function onInsertVideoWhenTargetIsVisible(targetElm, videoElm) {
  targetElm.appendChild(videoElm);
  // Wait for video to finish
  videoElm.onwaiting = () => {
    targetElm.removeChild(videoElm);
  };
}

onInsertVideoWhenTargetIsVisible(target, videoElm);
