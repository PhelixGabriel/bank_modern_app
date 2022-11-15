import { apple, bill, google} from '../assets';
import styles, {layout} from '../style';

const Billing = () =>  (
    <section id='product' className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />

          <div className='absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
          </div>

          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Controle facilmente seus <br className='sm:block hidden' /> pagamentos e recibos.</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Elite enim sed massa etiam. Mauris eu adispicing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
            </p>
          
        </div>
    </section>
  )


export default Billing