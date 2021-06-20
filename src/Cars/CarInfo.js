import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
    textAlign: 'center',
    fontSize: '26px',
    fontWeight: 'bold'
  },
  button: {
    color: 'darkslategrey',
  }
}));

const cars = {
  regNumber:'А 110 АР 72',
  vin: 'LЕA22F2B162004111',
  autoType: 'Легковой',
  autoModel: 'Solaris',
  maintenanceDate: '01.01.2021',
  insuranceDate: '10.04.2021',
  category: 'B',
  bornDate: '2021',
  engineModel:'4QI',
  bodyNumber:'1245XL12',
  power: '120 л.с',
  color: 'Серебристый',
  engineVolume: '2.0',
  manufacturer: 'Hyindai',
  passNumber: '6710 234987',
  passDate: '21.11.1998',
  issuedBy: 'УМВД России по Тюменской обл.',
  owner: 'Лаптев С.С',
  price: '1 000 000 руб.'
}

const CarInfo = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} style={{margin: 'auto'}}>
          <Typography variant="h6" className={classes.title}>
            Данные о автомобиле
          </Typography>
          <div className={classes.demo}>
            <List>
                <ListItem>
                  <ListItemText
                    primary="Табельный номер"
                  />
                   <Input defaultValue={cars.regNumber} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="VIN"
                  />
                  <Input defaultValue={cars.vin} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Тип автомобиля"
                  />
                  <Input defaultValue={cars.autoType} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Модел автомобиля"
                  />
                  <Input defaultValue={cars.autoModel} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Категории (A,B,C,D,E)"
                  />
                  <Input defaultValue={cars.category} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Срок ТО до"
                  />
                  <Input defaultValue={cars.maintenanceDate} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Срок страховки до"
                  />
                  <Input defaultValue={cars.insuranceDate} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Год выпуска"
                  />
                  <Input defaultValue={cars.bornDate} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Модель двигателя"
                  />
                  <Input defaultValue={cars.engineModel} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Номер кузова"
                  />
                  <Input defaultValue={cars.bodyNumber} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Мощность"
                  />
                  <Input defaultValue={cars.power} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Цвет"
                  />
                  <Input defaultValue={cars.color} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Обьем двигателя"
                  />
                  <Input defaultValue={cars.engineVolume} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Производитель"
                  />
                  <Input defaultValue={cars.manufacturer} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Паспорт"
                  />
                  <Input defaultValue={cars.passNumber} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Дата паспорта"
                  />
                  <Input defaultValue={cars.passDate} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Кем выдан"
                  />
                  <Input defaultValue={cars.issuedBy} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Соственник"
                  />
                  <Input defaultValue={cars.owner} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Стоимость"
                  />
                  <Input defaultValue={cars.price} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Фото"
                  />
                  <img style={{width: '250px'}} src={"https://hyundai-automir.ru/_mod_files/ce_images/solaris/sleek_silver__rhm_1.jpg"} />
                </ListItem>
            </List>
           
          </div>
          <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
      <Button
        color="secondary"
        size={'large'}
        className={classes.button}
        >
          Изменить
      </Button>
      </div>
        </Grid>

      </Grid>
     
    </div>
    
  );
}

export default CarInfo;
