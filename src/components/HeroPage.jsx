import { useLocation } from "react-router";
import styles from "./HeroPage.module.css"
import BadProf from "../Images/BadProf.PNG"
import BangProf from "../Images/BangProf.PNG"
import GenosProf from "../Images/GenosProf.PNG"
import ScottProf from "../Images/ScottProf.PNG"

const Hero = () => {
    const location = useLocation()
    const data = location.state

    if (data.heroname === "Metal Bat") {
        data.heropic = BadProf
    } else if (data.heroname === "Silver Fang") {
        data.heropic = BangProf
    } else if (data.heroname === "Demon Cyborg") {
        data.heropic = GenosProf
    } else if (data.heroname = "Scott Sutherland") {
        data.heropic = ScottProf
    }

    return (
        <main>
            <div className={styles.sort}>
                <div className={styles.leftSide}>
                    <div className={styles.portrait}>
                        {console.log(data)}
                        <img src={data.heropic} alt={data.heroname}/>  
                    </div>                  
                    <div className={styles.aboutMe}>
                        <h2 className={styles.bout}>About</h2>
                        <p>{data.about}</p>
                    </div>                  
                </div>

                <div className={styles.beeg}>
                    
                    <div className={styles.top}>
                        <div className={styles.nameBan}>
                            <div className={styles.class}>
                                <h1>{data.heroclass} Class</h1>
                                <h2>Rank {data.herorank}</h2>
                            </div>
                            <h1 className={styles.name}>{data.heroname}</h1>
                        </div>
                    </div>

                    <div className={styles.main}>
                        <div className={styles.style}>
                            <h2>Fighting Style</h2>
                            <p>{data.fightingstyle}</p>
                        </div>
                        <div className={styles.slay}>
                            <h2>Monsters Slain</h2>
                            <ul>
                                <li>{data.monsterskilled[0]}</li>
                                <li>{data.monsterskilled[1]}</li>
                                <li>{data.monsterskilled[2]}</li>
                                <li>{data.monsterskilled[3]}</li>
                                <li>{data.monsterskilled[4]}</li>
                                <li>{data.monsterskilled[5]}</li>
                                <li>{data.monsterskilled[6]}</li>
                                <li>{data.monsterskilled[7]}</li>
                                <li>{data.monsterskilled[8]}</li>
                                <li>{data.monsterskilled[9]}</li>
                            </ul>
                        </div>
                    </div>
                </div>                  
            </div>
        </main>
    )
}

export default Hero