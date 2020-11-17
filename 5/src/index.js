// Docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video

const target = document.getElementById("sunmedia");
const videoElm = createVideoElement(
  "https://vod.addevweb.com/sunmedia/demos/v/normal.mp4"
);

/**
 *
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
}

onInsertVideoWhenTargetIsVisible(target, videoElm);
