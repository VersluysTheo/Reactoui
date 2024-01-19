import styles from './Listbox.module.css'


export default function Listbox(){

    // avec un tableau

    let styleslist = [
        { name: 'rock' },
        { name: 'jazz' },
        { name: 'funk' },
        { name: 'rap' },
        { name: 'metal' },
        { name: 'electronic' },
        { name: 'indie' },
        { name: 'classical' },
        { name: 'opera' },
        { name: 'hip-hop' },
        { name: 'blues rock' }
    ];
    

    return(
        <div className={styles.listbox}>
            <select className={styles.selectlist} name="style-select" id="style-select">
                <option value="">Choississez un style :</option>
                {styleslist.map(style => {
                    return(
                        <option key={style.name} value={style.name}>{style.name}</option>
                    )
                })}
            </select>
        </div>
    )
}