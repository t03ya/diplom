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
import {toggleAnchor} from "../Redux/waybillsReducer";

const waybillsDataForDrawer = {
  title: "Добавление путевого листа",
  placeholders: [
    "Тип П/л",
	"Номер П/л",
	"Время выезда", 
	"Время возврата",
	"АТС",
	"Водитель"
]} 

const headFields = [
  { id: 'waybillType',  label: 'Тип П/л' },
  { id: 'waybillNumber',  label: 'Номер П/л' },
  { id: 'checkOutTime',  label: 'Время выезда' },
  { id: 'timeOutTime',  label: 'Время возврата' },
  { id: 'auto',  label: 'АТС' },
  { id: 'driver',  label: 'Водитель' },
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

const WaybillsList = ({toggleAnchor, anchor, waybills}) => {
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
              rowCount={waybills.length}
            />
            <Body>
              {waybills
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(({waybillType, waybillNumber, checkOutTime, timeOutTime, auto, driver}, index) => {

                  return (
                    <Row
                      hover
                      onClick={() => console.log('Hi there!')}
                    //   aria-checked={}
                      tabIndex={-1}
                    //   selected={}
                    >
                      <Cell component="th" scope="row" className={classes.cell}>
                        {waybillType}
                      </Cell>
                      <Cell className={classes.cell}>{waybillNumber}</Cell>
                      <Cell className={classes.cell}>{checkOutTime}</Cell>
                      <Cell className={classes.cell}>{timeOutTime}</Cell>
                      <Cell className={classes.cell}>{auto}</Cell>
                      <Cell>{driver}</Cell>
                    </Row>
                  );
                })}
            </Body>
          </Table>
        </Container>
        <Pagination
          rowsPerPageOptions={[5, 10, 25]}
          labelRowsPerPage={'Выводить по'}
          count={waybills.length}
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
                Добавить путевой лист
            </Button>
            <AddDrawer 
              toggleAnchor={toggleAnchor}
              anchor={anchor}
              drawerData={waybillsDataForDrawer} 
            />
        </Grid>  
      </Grid> 
    </div>
  );
}

const mapStateToProps = state => {
  return {
    anchor: state.waybills.anchor,
    waybills: state.waybills.waybills
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {toggleAnchor})
)(WaybillsList);