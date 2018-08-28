import React from 'react'
import App from '../App'
import SliderCarousel from '../SliderCarousel'
import { mount, shallow, render }from 'enzyme'

 it('App renders without crashing', () => {
   shallow(<App />);
 });

it('SliderCarousel renders rendering slides', () => {
  const payloaddata = [{
    "largeImageURL": "https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104496f5c578a6eeb1b8_1280.jpg",
    "tags": "fantasy, beautiful, dawn",
     },
    {
    "largeImageURL": "https://pixabay.com/get/e835b60d20f6093ed1584d05fb1d4f90e671e2d31cac104496f5c578a6eeb1b8_1280.jpg",
    "tags": "green park season nature outdoor green background landscape natural tree forest beautiful landscapes forest landscape rays landscape forest forest forest forest forest",
     }];

  const slider =  shallow(<SliderCarousel payload={payloaddata}/>);
  expect(slider.find('.slider')).toHaveLength(payloaddata.length);
});
