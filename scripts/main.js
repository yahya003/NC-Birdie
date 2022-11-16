
import 'babel-polyfill';
import * as tf from '@tensorflow/tfjs';
import {MobileNet} from './mobilenet';
import $ from 'jquery';
window.$ = $;

$(document).ready(() => {
  const clearBtn = $('#clearAllBtn');
  const idBtn = $('#identifyBtn');
  const results = $('#results');

  const hiddenImage = $('#birdImage');

  const fileUpload = $('#fileUpload');
  const birdUrl = $('#birdUrl');

  const mobileNet = new MobileNet();
  mobileNet.load().then(() => {
    console.log('loaded');
    idBtn.prop('disabled', false);
  });

  idBtn.on('click', (evt) => {
    evt.preventDefault();
    idBtn.prop('disabled', true);
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      hiddenImage[0].src = reader.result;
    });
    reader.readAsDataURL(fileUpload.prop('files')[0]);

    const bird = document.getElementById('birdImage');
    bird.onload = async () => {
      bird.width = '224';
      bird.height = '224';
      const image = tf.browser.fromPixels(bird);
      let result = mobileNet.predict(image);
      const topK = mobileNet.getTopKClasses(result, 1);
      var res = '';
      topK.forEach( ele => {
        res += ele.label + '</br>';
      });
      
      results.html(res);
      idBtn.prop('disabled', false);
    }    
  });

});

