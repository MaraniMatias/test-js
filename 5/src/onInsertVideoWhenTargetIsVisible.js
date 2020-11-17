/**
 * @param {HTMLDivElement} targetElm
 * @param {HTMLVideoElement} videoElm
 */
export default function onInsertVideoWhenTargetIsVisible(targetElm, videoElm) {
  targetElm.appendChild(videoElm);
  // Wait for video to finish
  videoElm.addEventListener('waiting', () => {
    targetElm.removeChild(videoElm);
  });
}
