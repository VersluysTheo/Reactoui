import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import styles from './Cards.module.css';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// Declaration du type du Props 
ImgMediaCard.propTypes = {
  musicstyle: PropTypes.string
};

export default function ImgMediaCard({ musicstyle }) {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7097/api/Salles")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setItems(data)
      })
  }, []);

  /* Création d'une variable permettant d'afficher TOUTES les cards si on ne selectionne rien  */
  let sallestoDisplay = undefined;
  /* Si rien n'est selectionné alors on ne filtre pas */
  if (musicstyle == "") {
    sallestoDisplay = items;
  } else {
    sallestoDisplay = items.filter(
      item => (
        // Fonction de filtrage
        item.styles.some(stylesalle => musicstyle === stylesalle)
      )
    )
  }

// On retourne les cards en fonction de ce qu'on a seletionné
  return (
    <div className={styles.container}>
      {sallestoDisplay.map(item => (
        <div className={styles.card} key={item.id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              {/* <CardMedia
        component="img"
        alt="ajajajajajajajajajajajajajajajajaaj"
        height="140"
        image="../../../public/amphi.png"
      /> */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.nom}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.styles.join(', ')}
                </Typography>
                <Typography>
                  {item.adresseSalle.numero} {item.adresseSalle.voie}, {item.adresseSalle.codePostal} {item.adresseSalle.ville}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">31</Button>
                <Button size="small">32</Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </div>
  );
}