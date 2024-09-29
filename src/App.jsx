import styles from './style';
import { NavBar, Hero, About, Projects, Footer} from './components';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar></NavBar>
      </div>
    </div> */}

    <div className={`bg-secondary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero></Hero>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <About></About>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    </div>
  </div>
)

export default App