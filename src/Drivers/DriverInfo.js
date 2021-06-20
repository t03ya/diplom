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

const drivers = {
  tabelNumber:'288272148',
  fio: 'Адамов.М.И',
  post: 'Водитель',
  licenseDateTo: '20.05.2020',
  licenseNumber: '89994848736AA',
  category: 'B,С',
  dateOfWork: '10.06.2020',
  order:'1787474',
  address:'ул. Ленина 27',
  phoneNum: '89059994949',
}

const CarInfo = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} style={{margin: 'auto'}}>
          <Typography variant="h6" className={classes.title}>
            Данные о водителе
          </Typography>
          <div className={classes.demo}>
            <List>
                <ListItem>
                  <ListItemText
                    primary="Табельный номер"
                  />
                   <Input defaultValue={drivers.tabelNumber} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="ФИО"
                  />
                  <Input defaultValue={drivers.fio} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Должность"
                  />
                  <Input defaultValue={drivers.post} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="ВУ действительно до"
                  />
                  <Input defaultValue={drivers.licenseDateTo} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Категории (A,B,C,D,E)"
                  />
                  <Input defaultValue={drivers.category} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Номер ВУ"
                  />
                  <Input defaultValue={drivers.licenseNumber} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Дата устройства"
                  />
                  <Input defaultValue={drivers.dateOfWork} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Приказ"
                  />
                  <Input defaultValue={drivers.order} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Адрес"
                  />
                  <Input defaultValue={drivers.address} disabled={true} inputProps={{ 'aria-label': 'description' }} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Номер телефона"
                  />
                  <Input defaultValue={drivers.phoneNum} disabled={true} inputProps={{ 'aria-label': 'description' }} />
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
