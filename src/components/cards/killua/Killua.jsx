import Styles from './Killua.module.css'
export const Killua = () => {
    return (
        <div className={Styles.Killua}>
            <div className={Styles.bg}>
                <div className={Styles.razm}>
                    <div className={Styles.Main}>
                        <div className={Styles.back}>
                            <a href="/">
                                <img src="src\assets\arrow_back_24dp_FILL0_wght400_GRAD0_opsz24 (1).svg" alt="" />
                            </a>
                            <h1>killua</h1>
                        </div>
                        <p>Killua Zoldyck (キルア゠ゾルディック, Kirua Zorudikku) is the
                                third child of Silva and Kikyo Zoldyck and the heir of the Zoldyck
                                Family, until he runs away from home and becomes
                                a Rookie Hunter. He is the best friend of Gon Freecss and is currently
                                traveling with Alluka Zoldyck. He has served as the deuteragonist for the
                                series, having said role in the Heavens Arena, Greed Island, and Chimera Ant
                                arcs. He was the main protagonist of the 13th Hunter Chairman Election arc.
                                He also was the tritagonist of the Hunter Exam arc and the Yorknew City arc.</p>
                        <div className={Styles.battons}>
                            <button>"I'm so tired of killing... I just want to be a kid. Hanging out, doing stuff with Gon. That's it."</button>
                            <div className={Styles.knps}>
                                <button>read manga</button>
                                <button>watch anime</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}