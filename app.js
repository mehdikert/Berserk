let imgLink = [
    'https://images4.alphacoders.com/118/118354.jpg' ,
    'https://images8.alphacoders.com/393/393050.png' ,
    'https://images4.alphacoders.com/949/949553.png' ,
    'https://images3.alphacoders.com/235/235589.jpg' ,
    'https://images3.alphacoders.com/106/1060990.jpg' ,
    'https://images7.alphacoders.com/119/1190130.jpg' ,
] ;
let img = document.querySelector('.img') ;
let i = 1 ;
img.setAttribute('src',`image/img pic/pic${i}.png`);
let btnLeft = document.querySelector('.navigator-picture img:nth-child(1)')
let btnRight = document.querySelector('.navigator-picture img:nth-child(2)')


btnLeft.addEventListener('click', function(){
 i--;
 if( i < 1){
  i = 10 ;
 }
  img.setAttribute('src',`image/img pic/pic${i}.png`);
 
})



btnRight.addEventListener('click', function (){
  i++;
  if( i > 10){
   i = 1 ;
  }
   img.setAttribute('src',`image/img pic/pic${i}.png`);
  
})


let btnEpisode = document.querySelectorAll('.episode')
let linkEp = [
  'https://www.youtube.com/embed/F_mZOE9NxyI', 
  'https://www.youtube.com/embed/vvsSuphqf6g',
  'https://www.youtube.com/embed/LVhHw_DacHA',
  'https://www.youtube.com/embed/vvooami2BlM',
  'https://www.youtube.com/embed/3luzo7DtCxM',
  'https://www.youtube.com/embed/ViKhYAMNQlI',
  'https://www.youtube.com/embed/JjyNF2yfvpU',
  'https://www.youtube.com/embed/9_c3L9fk46k',
  'https://www.youtube.com/embed/7US-4A8Vyx0',
  'https://www.youtube.com/embed/rNL6kRtxE1s',
  'https://www.youtube.com/embed/iDKslYlwDh4',
  'https://www.youtube.com/embed/7hqhCZzwcv8',
  'https://www.youtube.com/embed/ZS4CMUHMH1k',
  'https://www.youtube.com/embed/Nc8unBfKsbM',
  'https://www.youtube.com/embed/ioqymuEuQAM',
  'https://www.youtube.com/embed/ssUXVVzAbFs',
  'https://www.youtube.com/embed/59ZUNgnXFJo',
  'https://www.youtube.com/embed/ba12atCX6DQ',
  'https://www.youtube.com/embed/AhaWYVy-fpQ',
  'https://www.youtube.com/embed/p-NDk9_vxjk',
  'https://www.youtube.com/embed/ANZJPwV3zXw',
  'https://www.youtube.com/embed/Lh0WOz2C2YU',
  'https://www.youtube.com/embed/L6ahhWtDez4',
  'https://www.youtube.com/embed/0WeQNNXkP7E',
  'https://www.youtube.com/embed/Z7xKlbKX6Jo'

]
function x(ep){
  document.querySelector('iframe').removeAttribute('src') ;
  document.querySelector('iframe').setAttribute('src',linkEp[ep]) ;
}

