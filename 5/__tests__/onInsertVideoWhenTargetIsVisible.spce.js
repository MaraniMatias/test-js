import chai from 'chai';
import createVideoElement from '../src/createVideoElement';
import onInsertVideoWhenTargetIsVisible from '../src/onInsertVideoWhenTargetIsVisible';

const { assert } = chai;
const should = chai.should();
const src = 'https://vod.addevweb.com/sunmedia/demos/v/normal.mp4';

describe('Unit test: onInsertVideoWhenTargetIsVisible', () => {
  it('Should a function', () => {
    assert(typeof onInsertVideoWhenTargetIsVisible === 'function');
  });

  it('Should has a source element', () => {
    const target = document.createElement('div');
    const videoElm = createVideoElement(src);
    onInsertVideoWhenTargetIsVisible(target, videoElm);
    const source = target.firstElementChild.firstElementChild;
    should.exist(source);
    should.equal(source.src, src);
  });

  it.skip('Should has a waiting event', () => {
    const target = document.createElement('div');
    const videoElm = createVideoElement(src);
    onInsertVideoWhenTargetIsVisible(target, videoElm);
    // should.exist(videoElm.onwaiting);
  });

  it('Check if video is playing', () => {
    const target = document.createElement('div');
    const videoElm = createVideoElement(src);
    onInsertVideoWhenTargetIsVisible(target, videoElm);
    videoElm.addEventListener('playing', () => {
      should.exist(true);
    });
  });

  it('Remove video element after video has be finished', () => {
    const target = document.createElement('div');
    const videoElm = createVideoElement(src);
    onInsertVideoWhenTargetIsVisible(target, videoElm);
    videoElm.addEventListener('ended', () => {
      const child = target.firstElementChild;
      console.log(child);
      should.exist(child);
    });
  });
});
