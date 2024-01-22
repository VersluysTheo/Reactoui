import styles from '../Login/Login.module.css';

export default function FormAdd(){
    return(
        <div className={styles.container}>
        <div className={styles.form}>
            <form method="post" className={styles.formlogin}>
                <input className={styles.nom} type="text" name="nom" id="nom" placeholder='Nom de la salle'/>
                <input className={styles.numero} type="number" name="numero" id="numero" placeholder='N°'/>
                <input className={styles.voie} type="text" name="voie" id="voie" placeholder='Voie' />
                <input className={styles.codepostal} type="number" name="postal" id="postal" placeholder='Code Postal'/>
                <input className={styles.ville} type="text" name="ville" id="ville" placeholder='Ville'/>
                <fieldset>
                    <legend> Selectionner les Styles :</legend>
                    <div>
                        <input type="checkbox" name="rock" id="rock" />
                        <label htmlFor="rock">Rock</label>
                    </div>
                    <div>
                        <input type="checkbox" name="jazz" id="jazz" />
                        <label htmlFor="jazz">Jazz</label>
                    </div>
                    <div>
                        <input type="checkbox" name="funk" id="funk" />
                        <label htmlFor="funk">Funk</label>
                    </div>
                    <div>
                        <input type="checkbox" name="rap" id="rap" />
                        <label htmlFor="rap">Rap</label>
                    </div>
                    <div>
                        <input type="checkbox" name="metal" id="metal" />
                        <label htmlFor="metal">Metal</label>
                    </div>
                    <div>
                        <input type="checkbox" name="electronic" id="electronic" />
                        <label htmlFor="electronic">Electronic</label>
                    </div>
                    <div>
                        <input type="checkbox" name="indie" id="indie" />
                        <label htmlFor="indie">Indie</label>
                    </div>
                    <div>
                        <input type="checkbox" name="opera" id="opera" />
                        <label htmlFor="opera">Opera</label>
                    </div>
                    <div>
                        <input type="checkbox" name="hip-hop" id="hip-hop" />
                        <label htmlFor="hip-hop">Hip-hop</label>
                    </div>
                    <div>
                        <input type="checkbox" name="blues rock" id="blues rock" />
                        <label htmlFor="blues rock">Blues Rock</label>
                    </div>
                </fieldset>
                <input className={styles.submit} type="submit" value="Ajouter" />
            </form>
        </div>
        </div>
    )
}