import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import createColor from './Register/registerColors'
import removeColor from './Remove/RemoveColor'
import createTexture from './Register/registerTexture'
import removeTexture from './Remove/RemoveTexture'
import createFlavor from './Register/registerFlavor'
import removeFlavor from './Remove/RemoveFlavor'
import createCategory from './Register/registerCategory'
import removeCategory from './Remove/RemoveCategory'
import createEquipment from './Register/registerEquipment'
import removeEquipment from './Remove/RemoveEquipment'
import createIngredients from './Register/registerIngredients'
import removeIngredients from './Remove/RemoveIngredients'
import createRecipe from './Register/registerRecipe'
import createMenu from './Register/registerMenu'
import removeRecipe from './Remove/RemoveRecipe'
import removeMenu from './Remove/RemoveMenu'
import createDayMenu from './Register/registerDayMenu'
import removeDayMenu from './Remove/RemoveDayMenu'
import createIncidences from './Register/registerIncidences'
import removeIncidences from './Remove/RemoveIncidences'
import addIngredients from './Register/registerRecipeIngredients'
import addEquipments from './Register/registerRecipeEquipment'
import removeIngredientsRecipe from './Remove/RemoveIngredients'
import removeEquipmentRecipe from './Remove/RemoveRecipeEquipment'
import LeftSide from 'components/LeftSideBar/index'
import createUser from './Register/registerUser'
import removeUser from './Remove/RemoveUser'
import createTypeRecipe from './Register/registerTypeRecipe'
import removeTypeRecipe from './Remove/RemoveTypeRecipe'
import createIncidencesType from './Register/registerIncidencesType'
import createIncidencesTopo from './Register/registerIncidencesTop'
import FichaTecnica from './Datasheet/index'

const AplicationMain = () => {
    return (
        <Router>
            <LeftSide />
            <Switch>
                <Route path="/application/fichatecnica/:id" component={FichaTecnica}></Route>
                <Route path="/application/createIncidencesTopo" component={createIncidencesTopo}></Route>
                <Route path="/application/createIncidences" component={createIncidences}></Route>
                <Route path="/application/createIncidencesType" component={createIncidencesType}></Route>
                <Route path="/application/removeIncidences" component={removeIncidences}></Route>
                <Route path="/application/createColor" component={createColor}></Route>
                <Route path="/application/removeColor" component={removeColor}></Route>
                <Route path="/application/createUser" component={createUser}></Route>
                <Route path="/application/removeUser" component={removeUser}></Route>
                <Route path="/application/createTexture" component={createTexture}></Route>
                <Route path="/application/removeTexture" component={removeTexture}></Route>
                <Route path="/application/createFlavor" component={createFlavor}></Route>
                <Route path="/application/removeFlavor" component={removeFlavor}></Route>
                <Route path="/application/createCategory" component={createCategory}></Route>
                <Route path="/application/removeCategory" component={removeCategory}></Route>
                <Route path="/application/createEquipment" component={createEquipment}></Route>
                <Route path="/application/removeEquipment" component={removeEquipment}></Route>
                <Route path="/application/createIngredients" component={createIngredients}></Route>
                <Route path="/application/removeIngredients" component={removeIngredients}></Route>
                <Route path="/application/createRecipe" component={createRecipe}></Route>
                <Route path="/application/removeRecipe" component={removeRecipe}></Route>
                <Route path="/application/createMenu" component={createMenu}></Route>
                <Route path="/application/removeMenu" component={removeMenu}></Route>
                <Route path="/application/addEquipments/:id" component={addEquipments}></Route>
                <Route path="/application/removeDayMenu" component={removeDayMenu}></Route>
                <Route path="/application/createIncidences" component={createIncidences}></Route>
                <Route path="/application/removeIncidences" component={removeIncidences}></Route>
                <Route path="/application/addIngredients/:id" component={addIngredients}></Route>
                <Route path="/application/removeIngredientsRecipe" component={removeIngredientsRecipe}></Route>
                <Route path="/application/removeEquipmentRecipe" component={removeEquipmentRecipe}></Route>
                <Route path="/application/createDayMenu/:id" component={createDayMenu}></Route>
                <Route path="/application/createTypeRecipe" component={createTypeRecipe}></Route>
                <Route path="/application/removeTypeRecipe" component={removeTypeRecipe}></Route>
            </Switch>
        </Router>
    )
}

export default AplicationMain;