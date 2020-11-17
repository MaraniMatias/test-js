/**
 * Crea un elemento de html video con el source correspondiente
 * Docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
 * @param {string} src The video media file url
 * @return {HTMLVideoElement}
 */
export default function createVideoElement(src) {
  const source = document.createElement('source');
  source.src = src;

  const videoHtmlElement = document.createElement('video');
  const altText = 'No se puede reproducir el video.';
  videoHtmlElement.innerText = altText;
  videoHtmlElement.muted = true;
  videoHtmlElement.autoplay = true;
  // videoHtmlElement.controls = true;
  videoHtmlElement.appendChild(source);
  return videoHtmlElement;
}
