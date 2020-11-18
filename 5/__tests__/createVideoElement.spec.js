import chai from 'chai';
import createVideoElement from '../src/createVideoElement';

const src = 'https://vod.addevweb.com/sunmedia/demos/v/normal.mp4';
const { assert } = chai;
const should = chai.should();

describe('Unit test: CreateVideoElement', () => {
  it('Should a function', () => {
    assert(typeof createVideoElement === 'function');
  });

  it('Return a HTML video element', () => {
    const rta = createVideoElement(src);
    should.exist(rta);
    should.exist(rta.src);
    should.exist(rta.controls);
    should.exist(rta.autoplay);
    should.exist(rta.muted);
  });

  it('Set correct property value to autoplay and muted', () => {
    const rta = createVideoElement(src);
    should.equal(rta.autoplay, true, 'autoplay property should be true');
    should.equal(rta.muted, true, 'muted property should be true');
  });

  it('Should has a source element', () => {
    const rta = createVideoElement(src);
    const source = rta.firstElementChild;
    should.exist(source);
    should.equal(source.src, src);
  });
});
