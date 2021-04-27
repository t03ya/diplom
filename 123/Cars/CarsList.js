import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];


const headFields = [
  { id: 'name',  label: 'Наименование автомобиля' },
  { id: 'gosNumber',  label: 'Гос.номер' },
  { id: 'registration',  label: 'Дата регистрации' },
  { id: 'insuranceDate',  label: 'Срок страховки' },
  { id: 'deadlineStatus',  label: 'Статус' },
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

export default function EnhancedTable() {
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
              rowCount={rows.length}
            />
            <Body>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {

                  return (
                    <Row
                      hover
                      onClick={() => console.log('Hi there!')}
                    //   aria-checked={}
                      tabIndex={-1}
                      key={row.name}
                    //   selected={}
                    >
                      <Cell component="th" scope="row" className={classes.cell}>
                        {row.name}
                      </Cell>
                      <Cell className={classes.cell}>{row.calories}</Cell>
                      <Cell className={classes.cell}>{row.fat}</Cell>
                      <Cell className={classes.cell}>{row.carbs}</Cell>
                      <Cell>{row.carbs}</Cell>
                    </Row>
                  );
                })}
            </Body>
          </Table>
        </Container>
        <Pagination
          rowsPerPageOptions={[5, 10, 25]}
          labelRowsPerPage={'Выводить по'}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <Grid container justify="flex-end">
        <Grid item>
            <Button variant="contained" color="primary" size={'large'} className={classes.button}>
                Добавить автомобиль
            </Button>
        </Grid>  
      </Grid> 
    </div>
  );
}