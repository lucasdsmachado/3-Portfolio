import avatarPicture from '../assets/avatar.png';
import placeholder1 from '../assets/img-1.jpg';
import placeholder2 from '../assets/img-2.jpg';
import styles from './Home.module.css'

export function Home() {
  return (
    <main>
      <div className={styles.introduce}>
        <img src={avatarPicture} className={styles.avatar} alt="avatar" />
        <h1>Hello.<br /> My name is Brian</h1>
      </div>
      <div className={styles.horizontal_line}></div>
      <div className={styles.content}>
        <p>
          I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.<br />
          <br />
          Right now, I'm Design Lead at <span className='tags'>Holiday Extras</span>, covering all our digital platforms across a whole load of brands – leading a great team across <span className='tags'>design</span>, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.<br />
          <br />
          I've got some work on <span className='tags'>Dribbble</span>, some previous work at Saga and you can find me over on twitter and sometimes on Medium too. I also take too many photos.
        </p>
        <quote>
          <img src="#" alt="check circle" />
          Available for work and general design goodness – say hello
        </quote>
      </div>
      
      <div>
        <div>
          <h2>Title</h2>
          <p>Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section.</p>
        </div>
        
        <div>
          <img src={placeholder1} className={styles.imgPlaceholder} alt="" />
          <h3>Title</h3>
          <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
          <button>Button Primary Light</button>
        </div>
        
        <div>
          <img src={placeholder2} alt="" />
          <h3>Title</h3>
          <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
          <button>Button Primary Light</button>
        </div>
      </div>
      
    </main>
  );
}