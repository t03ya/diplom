import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {withRouter} from "react-router-dom";
import {
    Table, 
    TableBody as Body,
    TableCell as Cell,
    TableContainer as Container, 
    TableHead as Head, 
    TablePagination as Pagination, 
    TableRow as Row, 
    Paper,
    Grid,
    Button
} from '@material-ui/core'
import AddDrawer from '../shared/Drawer/Drawer'
import {compose} from "redux";
import {connect} from "react-redux";
import {toggleAnchor} from "../Redux/driversReducer";

const driversDataForDrawer = {
  title: "Добавление водителя",
  placeholders: [
    "Табельный номер",
		"ФИО",
		"Должность", 
		"ВУ действительно до",
		"Категории (A,B,C,D,E) ",
		"Номер ВУ",
    "Категория (A,B,C,D)",
		"Дата устройства",
		"Приказ №",
		"Адрес",
    "Номер телефона"
]} 

const headFields = [
  { id: 'fio',  label: 'ФИО' },
  { id: 'licenseNumber',  label: 'номер В/y' },
  { id: 'post',  label: 'Должность' },
  { id: 'category',  label: 'Категория (B,C,D,E)' },
];

function EnhancedTableHead(props) {

  return (
    <Head>
      <Row>
        {headFields.map((field) => (
          <Cell
            key={field.id}
            align={'left'}
          >
              {field.label}
          </Cell>
        ))}
      </Row>
    </Head>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '10px 40px'
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  cell: {
      borderRight: '1px solid rgba(224, 224, 224, 1)'
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  button: {
    backgroundColor: 'darkslategrey',
    '&:hover': {
        backgroundColor: 'darkslategrey',
        boxShadow: '0 4px 30px lightslategrey'
    }
  }
}));

const DriversList = ({toggleAnchor, anchor, drivers}) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Container>
          <Table
            className={classes.table}
            size={'medium'}
          >
            <EnhancedTableHead
              classes={classes}
              rowCount={drivers.length}
            />
            <Body>
              {drivers
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(({fio, licenseNumber, post, category}, index) => {

                  return (
                    <Row
                      hover
                      onClick={() => console.log('Hi there!')}
                    //   aria-checked={}
                      tabIndex={-1}
                    //   selected={}
                    >
                      <Cell component="th" scope="row" className={classes.cell}>
                        {fio}
                      </Cell>
                      <Cell className={classes.cell}>{licenseNumber}</Cell>
                      <Cell className={classes.cell}>{post}</Cell>
                      <Cell>{category}</Cell>
                    </Row>
                  );
                })}
            </Body>
          </Table>
        </Container>
        <Pagination
          rowsPerPageOptions={[5, 10, 25]}
          labelRowsPerPage={'Выводить по'}
          count={drivers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <Grid container justify="flex-end">
        <Grid item>
            <Button 
              variant="contained"
              color="primary"
              size={'large'}
              onClick={() => toggleAnchor(true)}
              className={classes.button}>
                Добавить водителя
            </Button>
            <AddDrawer 
              toggleAnchor={toggleAnchor}
              anchor={anchor}
              drawerData={driversDataForDrawer} 
            />
        </Grid>  
      </Grid> 
    </div>
  );
}

const mapStateToProps = state => {
  return {
    anchor: state.drivers.anchor,
    drivers: state.drivers.drivers
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {toggleAnchor})
)(DriversList);