import { useLocation } from "react-router";
import styles from "./HeroPage.module.css"

const Hero = () => {
    const location = useLocation()
    const data = location.state
        
    return (
        <main>
            <div className={styles.sort}>
                <div className={styles.leftSide}>
                    <div className={styles.portrait}>
                        image goes here
                    </div>                  
                    <div className={styles.aboutMe}>
                        <h2 className={styles.bout}>About</h2>
                        <p>Genos is a mechanical cyborg of average human height. His face and ears look like that of a normal human, made of artificial skin material, and his eyes have black sclera with yellow irises. He has spiky blond hair and his eyebrows are blond</p>
                    </div>                  
                </div>

                <div className={styles.beeg}>
                    
                    <div className={styles.top}>
                        <div className={styles.nameBan}>
                            <div className={styles.class}>
                                <h1>S Class</h1>
                                <h2>Rank 12</h2>
                            </div>
                            <h1 className={styles.name}>Demon Cyborg</h1>
                        </div>
                    </div>

                    <div className={styles.main}>
                        <div className={styles.style}>
                            <h2>Fighting Style</h2>
                            <p>Genos blows shit up real good</p>
                        </div>
                        <div className={styles.slay}>
                            <h2>Monsters Slain</h2>
                            <ul>
                                <li>Devon</li>
                                <li>Dave</li>
                                <li>Darick</li>
                            </ul>
                        </div>
                    </div>
                </div>                  
            </div>
            {/* <p>Name: {data.heroname}</p> */}
        </main>
    )
}

export default Hero