import styles from "./Home.module.css"
import advert1 from "../Images/advert1.PNG"
import advert2 from "../Images/Capator.PNG"
import advert3 from "../Images/Caputoru.PNG"


const HomeScreen = () => {
return (
    <main>
        <div className={styles.banner}>
            <h1 className={styles.hwun}>The Hero Association's Official Website</h1>
        </div>
        <div className={styles.bodee}>
            <div className={styles.blurb}> に直面して、ベニアムと労働の広告を作成し、真実の真実の別名を変更し、必要な情報を収集し、緊急に実行する必要があります。必要な情報をすべて取得し、必要な情報をすべて取得して、必要な情報をすべて取得し、すべての業務を効率的に実行してください。絶望的なクピディテイト、ウラム・モリティア・ヒック、アメット・ウンデ・マグナム、エラー・ラウダンティウム・イプサム・フギット・エア・コンセクテトゥール、ドロレム・エ・クォ・キス！に直面して、ベニアムと労働の広告を作成し、真実の真実の別名を変更し、必要な情報を収集し、緊急に実行する必要があります。必要な情報をすべて取得し、必要な情報をすべて取得して、必要な情報をすべて取得し、すべての業務を効率的に実行してください。絶望的なクピディテイト、ウラム・モリティア・ヒック、アメット・ウンデ・マグナム、エラー・ラウダンティウム・イプサム・フギット・エア・コンセクテトゥール、ドロレム・エ・クォ・キス！に直面して、ベニアムと労働の広告を作成し、真実の真実の別名を変更し、必要な情報を収集し、緊急に実行する必要があります。必要な情報をすべて取得し、必要な情報をすべて取得して、必要な情報をすべて取得し、すべての業務を効率的に実行してください。絶望的なクピディテイト、ウラム・モリティア・ヒック、アメット・ウンデ・マグナム、エラー・ラウダンティウム・イプサム・フギット・エア・コンセクテトゥール、ドロレム・エ・クォ・キス！に直面して、ベニアムと労働の広告を作成し、真実の真実の別名を変更し、必要な情報を収集し、緊急に実行する必要があります。必要な情報をすべて取得し、必要な情報をすべて取得して、必要な情報をすべて取得し、すべての業務を効率的に実行してください。絶望的なクピディテイト、ウラム・モリティア・ヒック、アメット・ウンデ・マグナム、エラー・ラウダンティウム・イプサム・フギット・エア・コンセクテトゥール、ドロレム・エ・クォ・キス！</div>
            <div className={styles.adBar}>
                <div className={styles.ad} style={{backgroundImage: `url(${advert1})`}}></div>
                <div className={styles.ad} style={{backgroundImage: `url(${advert2})`}}></div>
                <div className={styles.ad} style={{backgroundImage: `url(${advert3})`}}></div>
            </div>
        </div>
    </main>
)
}

export default HomeScreen