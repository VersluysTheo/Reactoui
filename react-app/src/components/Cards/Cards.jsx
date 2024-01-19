import { useState , useEffect } from 'react';

import Card from '@mui/material/Card';
import styles from './Cards.module.css';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {

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
    <Card sx={{ maxWidth: 345 }}>
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
        <Button size="small">a voir pour les boutons</Button>
        <Button size="small">Pareil</Button>
      </CardActions>
    </Card>
            </div>
        ))}
    </div>
  );
}