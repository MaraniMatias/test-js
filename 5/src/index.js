import createVideoElement from './createVideoElement';
import onInsertVideoWhenTargetIsVisible from './onInsertVideoWhenTargetIsVisible';

const target = document.getElementById('sunmedia');

const videoElm = createVideoElement(
  'https://vod.addevweb.com/sunmedia/demos/v/normal.mp4',
);

onInsertVideoWhenTargetIsVisible(target, videoElm);
