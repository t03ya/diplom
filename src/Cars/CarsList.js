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
    Button,
} from '@material-ui/core'
import {toggleAnchor} from "../Redux/carsReducer";
import {compose} from "redux";
import {connect} from "react-redux";
import AddDrawer from '../shared/Drawer/Drawer'

function createData(name, calories, fat, carbs, protein, insuranceDate) {
  return { name, calories, fat, carbs, protein, insuranceDate };
}


const carsDataForDrawer = {
  title: "Добавление автомобиля",
  placeholders: [
    "Рег. знак",
		"VIN",
		"Тип ТС", 
		"Модель ТС",
		"Срок ТО до",
		"Страховка до",
    "Категория (A,B,C,D)",
		"Год выпуска",
		"Модель двигателя",
		"Номер кузова",
    "Мощность",
		"Цвет",
		"Объем двигателя",
		"Производитель",
		"Паспорт №",
		"Когда выдан",
		"Кем выдан",
		"Собственник",
		"Стоимость"
]} 

const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3, 11),
  createData('Donut', 452, 25.0, 51, 4.9, 22),
  createData('Eclair', 262, 16.0, 24, 6.0, 22),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 22),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 22),
  createData('Honeycomb', 408, 3.2, 87, 6.5, 22),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 22),
  createData('Jelly Bean', 375, 0.0, 94, 0.0, 22),
  createData('KitKat', 518, 26.0, 65, 7.0, 22),
  createData('Lollipop', 392, 0.2, 98, 0.0, 22),
  createData('Marshmallow', 318, 0, 81, 2.0, 22),
  createData('Nougat', 360, 19.0, 9, 37.0, 22),
  createData('Oreo', 437, 18.0, 63, 4.0, 22),
];


const headFields = [
  { id: 'regNumber',  label: 'Рег.знак' },
  { id: 'vin',  label: 'VIN' },
  { id: 'autoType',  label: 'Тип ТС' },
  { id: 'autoModel',  label: 'Модель ТС' },
  { id: 'maintenanceDate',  label: 'ГТО.до' },
  { id: 'insuranceDate',  label: 'Стрх.до' },
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

const CarsList = ({toggleAnchor, anchor, cars}) => {
  
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

  const {regNumber,vin,autoType,autoModel,maintenanceDate,insuranceDate} = cars;

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
              rowCount={cars.length}
            />
            <Body>
              {cars
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(({regNumber,vin,autoType,autoModel,maintenanceDate,insuranceDate}, index) => {

                  return (
                    <Row
                      hover
                      onClick={() => console.log('Hi there!')}
                    //   aria-checked={}
                      tabIndex={-1}
                      key={regNumber}
                    //   selected={}
                    >
                      <Cell component="th" scope="row" className={classes.cell}>
                        {regNumber}
                      </Cell>
                      <Cell className={classes.cell}>{vin}</Cell>
                      <Cell className={classes.cell}>{autoType}</Cell>
                      <Cell className={classes.cell}>{autoModel}</Cell>
                      <Cell className={classes.cell}>{maintenanceDate}</Cell>
                      <Cell>{insuranceDate}</Cell>
                    </Row>
                  );
                })}
            </Body>
          </Table>
        </Container>
        <Pagination
          rowsPerPageOptions={[5, 10, 25]}
          labelRowsPerPage={'Выводить по'}
          count={cars.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <Grid container justify="flex-end">
        <Grid item>
          {console.log(anchor)}
            <Button
              variant="contained"
              color="primary"
              size={'large'}
              onClick={() => toggleAnchor(true)}
              className={classes.button}
              >
                Добавить автомобиль
            </Button>
            <AddDrawer 
              toggleAnchor={toggleAnchor}
              anchor={anchor}
              drawerData={carsDataForDrawer} 
            />
        </Grid>  
      </Grid> 
    </div>
  );
}

const mapStateToProps = state => {
  return {
    anchor: state.cars.anchor,
    cars: state.cars.cars
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {toggleAnchor})
)(CarsList);
