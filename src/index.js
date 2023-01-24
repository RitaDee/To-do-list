import './style.css';

const array = [
    {
        description: 'Wash plate',
        completed: false,
        index: 0,
    },
    {
        description: 'Wash plate',
        completed: false,
        index: 0,
    },
    {
        description: 'Wash plate',
        completed: false,
        index: 0,
    }
];

const guestSpeakers = document.querySelector('.speakers-container');

for (let i = 0; i < speakers.length; i += 1) {
  let visibleImg = 'show';
  if (i > 1) {
    visibleImg = 'hide';
  }
  guestSpeakers.innerHTML += `
  <div class="${visibleImg} speakers" id="speak">
    <div><img src="${speakers[i].speakerImg}" alt="image"></div>
            <div class="speaker-info">
            <h3>${speakers[i].speakerName}</h3>
            <h4>${speakers[i].speakerPost}</h4>
            <span class="speaker-bar"></span>
            <p>${speakers[i].speakerInfo}</p>         
             </div>
             </div>`;
}