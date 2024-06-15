import Styles from './Card.module.css'

export const Card = ({link, color, imgs}) => {
    const cardBack = {background: `linear-gradient(white,${color})`}

    return (
        <div className={Styles.card} style={cardBack}>
            {imgs[2] && (
                <img src={imgs[2]} alt="" />
            )}
            <div className={Styles.amgs}>
                <img src={imgs[0]} alt="" className={Styles.crd1} />
                <a href={link}>
                    <img src={imgs[1]} alt="" className={Styles.crd2} />
                </a>
            </div>
        </div>
    )
}