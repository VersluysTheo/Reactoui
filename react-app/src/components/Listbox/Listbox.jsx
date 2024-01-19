import styles from './Listbox.module.css'




export default function Listbox(){
    
// avec un tableau

// const styleslist = [
//     { name: 'rock' },
//     { name: 'jazz' },
//     { name: 'funk' },
//     { name: 'rap' },
//     { name: 'metal' },
//     { name: 'electronic' },
//     { name: 'indie' },
//     { name: 'classical' },
//     { name: 'opera' },
//     { name: 'hip-hop' },
//     { name: 'blues rock' }
//   ]
//   styleslist.forEach(element => {
//     const optionValue = document.createElement('option');
//     optionValue.value = element.name;
//     optionValue.textContent = element.name;
//     const select = document.querySelector('select');
//     select.appendChild(optionValue);
//   })

    return(
        <div className={styles.listbox}>
            <select className={styles.selectlist} name="style-select" id="style-select">
                <option value="">Choississez un style :</option>
            </select>
        </div>
    )
}