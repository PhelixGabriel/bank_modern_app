import styles from '../style';
import Button from './Button';

const CTA = () =>  (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-cool'>
        <h2 className={styles.heading2}>
          Aproveite nossos serviços hoje mesmo!
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Tudo que você precisa para monitoramento do risco e suitability.</p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0`}>
        <Button />
      </div>
    </section>
  )


export default CTA