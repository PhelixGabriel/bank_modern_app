import {card} from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Um melhor acordo entre cartões <br className='sm:block hidden' /> em poucos passos.</h2>
        <p className={`${styles.paragraph} max-w[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris torto. c aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />

      </div>

      

    </section>
  )


export default CardDeal