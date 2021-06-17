import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer as DrawerView,
  Button,
  List,
  ListItem,
  TextField
} from '@material-ui/core'

const drawerStyles = makeStyles({
  list: {
    width: 550,
    padding: 10
  },
  fullList: {
    width: 'auto',
  },
  button: {
    backgroundColor: 'darkslategrey',
    margin: '20px 15px 0 0',
    padding: '10px 40px',
    '&:hover': {
        backgroundColor: 'darkslategrey',
        boxShadow: '0 4px 30px lightslategrey'
    }
  }
});

const Drawer = ({toggleAnchor, anchor, drawerData}) => {
  const classes = drawerStyles();

  const {title, placeholders} = drawerData;

  const list = (anchor) => (
    <div
      className={classes.list}
    >
      <div style={{fontSize: '25px', margin: '10px 0px 0px 15px', fontWeight: 'bold'}}>{title}</div>
      <List>
        {placeholders.map((text, index) => (
          <ListItem key={text}>
            <TextField style={{width: '100%'}} id="standard-basic" label={text} />
          </ListItem>
        ))}
      </List>
      <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
      <Button
        variant="contained"
        color="primary"
        size={'large'}
        onClick={() => toggleAnchor(true)}
        className={classes.button}
        >
          Добавить
      </Button>
      </div>
    </div>
  );

  return (
    <div>
        <React.Fragment key={'right'}>
          <DrawerView anchor={'right'} open={anchor} onClose={() => toggleAnchor(false)}>
            {list(anchor)}
          </DrawerView>
        </React.Fragment>
    </div>
  );
}

export default Drawer;
