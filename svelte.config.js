import adapter from '@sveltejs/adapter-netlify';

export default {
  kit: {
    adapter: adapter(),
    // 다른 설정들...
  }
};