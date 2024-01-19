import { useState , useEffect } from 'react';
import styles from './Button.module.css';


function LeButton() {

    const [items,setItems] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7097/api/Salles")
        .then(response => {            
            return response.json()
        })
        .then( data => {
            console.log(data)
                setItems(data)
            })
    },[]);


    return (
    <div className={styles.container}>
        {items.map(item => (
        <div className={styles.card} key={item.id}>
            <h2>{item.nom}</h2>
            <p>{item.styles.join(', ')}</p>
            <p>{item.adresseSalle.numero} {item.adresseSalle.voie}, {item.adresseSalle.codePostal} {item.adresseSalle.ville}</p>
        </div>
        ))}
    </div>
    )
}

export default LeButton;