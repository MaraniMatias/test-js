import chai from 'chai';
import createVideoElement from '../src/createVideoElement';

const src = 'https://vod.addevweb.com/sunmedia/demos/v/normal.mp4';
// const cheerio = require('cheerio');

const { assert } = chai;
// const should = chai.should();

describe('Unit test: CreateVideoElement', () => {
  it('Should a function', () => {
    assert(typeof createVideoElement === 'function');
  });

  it('Return a HTML video element', () => {
    const rta = createVideoElement(src);
    assert(typeof rta === 'object');
  });
});
