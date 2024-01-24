import styles from '../Login/Login.module.css';
import { useRef } from 'react';

export default function FormAdd() {

    const elementRef = useRef();

    // useEffect(() => {
        // const myElement = elementRef.current;
        // console.log(myElement);
        // let formData = new FormData(myElement);
    // },[]);
    
    function sendData(e){
        e.preventDefault();
        const myElement = elementRef.current;
        // console.log(myElement);
        let formData = new FormData(myElement);

        let object = {};
        formData.forEach((value, key) => object[key] = value);
        let json = JSON.stringify(object);

        console.log(json);
    }

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <form ref={elementRef} className={styles.formlogin}>
                    <input className={styles.nom} type="text" name="nom" id="nom" placeholder='Nom de la salle' />
                    <input className={styles.numero} type="number" name="numero" id="numero" placeholder='N°' />
                    <input className={styles.voie} type="text" name="voie" id="voie" placeholder='Voie' />
                    <input className={styles.codepostal} type="number" name="postal" id="postal" placeholder='Code Postal' />
                    <input className={styles.ville} type="text" name="ville" id="ville" placeholder='Ville' />
                    <fieldset>
                        <legend> Selectionner les Styles :</legend>
                        <div>
                            <input type="checkbox" name="style" id="rock" />
                            <label htmlFor="rock">Rock</label>
                        </div>
                        <div>
                            <input type="checkbox" name="style" id="jazz" />
                            <label htmlFor="jazz">Jazz</label>
                        </div>
                        <div>
                            <input type="checkbox" name="style" id="funk" />
                            <label htmlFor="funk">Funk</label>
                        </div>
                        <div>
                            <input type="checkbox" name="style" id="rap" />
                            <label htmlFor="rap">Rap</label>
                        </div>
                        <div>
                            <input type="checkbox" name="style" id="metal" />
                            <label htmlFor="metal">Metal</label>
                        </div>
                        <div>
                            <input type="checkbox" name="style" id="electronic" />
                            <label htmlFor="electronic">Electronic</label>
                        </div>
                        <div>
                            <input type="checkbox" name="style" id="indie" />
                            <label htmlFor="indie">Indie</label>
                        </div>
                        <div>
                            <input type="checkbox" name="style" id="opera" />
                            <label htmlFor="opera">Opera</label>
                        </div>
                        <div>
                            <input type="checkbox" name="style[]" id="hip-hop" />
                            <label htmlFor="hip-hop">Hip-hop</label>
                        </div>
                        <div>
                            <input type="checkbox" name="style[]" id="blues-rock" />
                            <label htmlFor="blues-rock">Blues Rock</label>
                        </div>
                    </fieldset>
                    <input className={styles.submit} onClick={sendData} type="submit" value="Ajouter" />
                </form>
            </div>
        </div>
    )
}