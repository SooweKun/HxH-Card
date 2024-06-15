import Styles from './Hissoka.module.css'
export const Hisoka = () => {
    return (
        <div className={Styles.Hisoka}>
            <div className={Styles.razm1}>
                <div className={Styles.razm2}>
                    <div className={Styles.container}>
                        <div className={Styles.back}>
                             <a href="/">
                                <img src="src\assets\arrow_back_24dp_FILL0_wght400_GRAD0_opsz24 (1).svg" alt="" />
                            </a>
                            <h1>Hisoka</h1>
                        </div>
                        <p>Hisoka Morow (ヒソカ゠モロウ, Hisoka Morou) is a Hunter and former member #4 of the Phantom Troupe;
                            his physical strength ranked third in the group.
                            He is always in search for strong opponents, and
                            would spare those who have great potential, such
                            as Gon and Killua in order for them to get strong
                            enough to actually challenge him. He originally served
                            as the primary antagonist of the Hunter Exam arc and the
                            Heavens Arena arc, before becoming a supporting character
                            during the Yorknew City arc and Greed Island arc. During
                            the 13th Hunter Chairman Election arc, he reprises his
                            role as a secondary antagonist.</p>
                        <div className={Styles.battons}>
                            <button>"My greatest pleasure comes when such people crumple
                                to their knees and I look down upon their disbelieving faces
                                as their plans fail.♥"</button>
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