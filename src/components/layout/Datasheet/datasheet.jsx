import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { getDayMenuID } from '../../../services/serviceDayMenu';


const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

function createData(typeRecipe, recipe, method, calories, gluten, lactose) {
  return { typeRecipe, recipe, method, calories, gluten, lactose};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable({id}) {

  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const idMenu = id;
    getDayMenuID({ idMenu }).then((response) => {
        setSelected(response)
    });
}, []);


var groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, []);
};
const menu = groupBy(selected, 'day')


 
  const [completeMenu, setCompleteMenu] = useState([]);
  useEffect(() => {
    const fetchRecipeData = async (idRecipe, idTypeRecipe) => {

        try {
            const recipe = await axios.get(`http://localhost:3001/recipe/${idRecipe}`);
            const type = await axios.get(`http://localhost:3001/type-recipes/${idTypeRecipe}`);
            return ( [
              createData (recipe.data.name, type.data.name, recipe.data.calories, recipe.data.method, recipe.data.gluten, recipe.data.lactose)  
                 ]);
        } catch (err) {
            console.error(err);
        }
    }

    const fetchMenuData = async (selected) => {

      const complete = await Promise.all(selected.map(item => {

          const {idRecipe, idTypeRecipe} = item;
          return fetchRecipeData(idRecipe, idTypeRecipe);
      }))

      setCompleteMenu(complete);
  }

  fetchMenuData(menu);
}, []);




  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Receita</TableCell>
            <TableCell align="right">Tipo da Receita</TableCell>
            <TableCell align="right">Calorias</TableCell>
            <TableCell align="right">Modo de Preparo</TableCell>
            <TableCell align="right">Contém Lactose</TableCell>
            <TableCell align="right">Contém Gluten</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {completeMenu.map(async (row) => (
            <TableRow key={row.recipe}>
              <TableCell component="th" scope="row">
                {row.recipe}
              </TableCell>
              <TableCell align="right">{row.typeRecipe}</TableCell>
              <TableCell align="right">{row.method}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.gluten}</TableCell>
              <TableCell align="right">{row.lactose}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}