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

  // FIXME time out waiting for event
  it.skip('Check if video is playing', async (done) => {
    const target = document.createElement('div');
    const videoElm = createVideoElement(src);
    onInsertVideoWhenTargetIsVisible(target, videoElm);
    videoElm.addEventListener('playing', () => {
      done();
    });
  });

  // FIXME time out waiting for event
  it.skip('Remove video element after video has be finished', (done) => {
    const target = document.createElement('div');
    const videoElm = createVideoElement(src);
    onInsertVideoWhenTargetIsVisible(target, videoElm);
    videoElm.addEventListener('ended', () => {
      const child = target.firstElementChild;
      const err = child === null ? null : new Error('should be null');
      done(err);
    });
  });
});
