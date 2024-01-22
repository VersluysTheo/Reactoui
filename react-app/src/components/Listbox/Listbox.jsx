import styles from './Listbox.module.css'


export default function Listbox(){
    // let selectedStyle = e.target.value;
    //     let cards = document.getElementsByClassName(styles.card);
      
    //     cards.forEach((card) => {
    //       let stylesElement = card.querySelector('.styles');
      
    //       if (stylesElement) {
    //         let lestyle = e.target.value.split(',');
    //         let shouldDisplay = selectedStyle === '' || lestyle.some(style => selectedStyle.includes(style));
    //         card.style.display = shouldDisplay ? 'block' : 'none';
    //       }
    //     })

    function filtrerStyle(e) {
        console.log(e.target.value);
      }

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
            <select onChange={filtrerStyle} className={styles.selectlist} name="style-select" id="style-select">
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