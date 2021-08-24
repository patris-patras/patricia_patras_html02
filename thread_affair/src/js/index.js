import Glide from '@glidejs/glide';
import './../scss/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  const glideInstance = new Glide('.glide', {
    type: 'carousel',
  });

  glideInstance.mount({ Controls: Controls });
});
