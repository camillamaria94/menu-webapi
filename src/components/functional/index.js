import { getIncidencesType } from 'services/serviceIncidencesType'
import { getIncidences } from 'services/serviceIncidences'
import { getDayMenuID } from 'services/serviceDayMenu';
import {getRecipeID} from 'services/serviceRecipe';
import {getTypeRecipeID} from 'services/serviceTypeRecipe';
import {getTypeValueID} from 'services/serviceTypeValues';
import {getRecipeIngIdRecipe} from 'services/serviceRecipeIngredients';
import {getIngredientsID} from 'services/serviceIngredients';


export function verifyDay({ month, year }) {

    if (month == 2) {
        if (year % 4) {
            if (year % 100) {
                if (year % 400) {
                    return 29
                } else {
                    return 28
                }
            } else {
                return 28
            }
        } else {
            return 28
        }
    } else if ((month == 4) || (month == 6) || (month == 9) || (month == 11)) {
        return 30
    }
    else {
        return 31
    }

}
 
export async function VerifyIncidencesType({ id, month, year }) { //função para verificar as Incidências por tipo
    const monthConfere = verifyDay(month, year);  //variável que recebe a quantidade de dias que a função irá receber
    const idMenu = id;
    const selectMenu = await getDayMenuID({idMenu})
    const selectIncidencesType = await getIncidencesType()

    let quant = 0;
    const verification = await Promise.all(selectIncidencesType.map(async (values) => {
        if (values.min > monthConfere) {
            quant = monthConfere
        }else{
            quant = values.min;
        }
        let i = 0;
        const typeIncidencia = values.idType
        await Promise.all(selectMenu.map( async (valuesMenu) => {
        const id = valuesMenu.idTypeRecipe
        const teste = await getTypeRecipeID({id})
        const valor = teste.data.idTypeValue;
            if(typeIncidencia == valor){
                const idRecipe = valuesMenu.idRecipe
                const recipe = await getRecipeID({idRecipe})
                const composed = recipe.data.composed
                if(composed == values.composed){
                    i = i + 1
                }
            }
        }))
        const id = values.idType
        const nameTypeValue = await getTypeValueID({id})
        const success = i >=values.min
        return  {
            type: nameTypeValue.data.name,
            falta: success ? 0 : values.min - i, 
            success 
        }
    }))
    console.log(verification)

    return verification.filter(result => !(result.success))
   
}

export async function VerifyIncidencesIng({ id, month, year }) {
    const monthConfere = verifyDay(month, year); 
    const idMenu = id;
    const selectMenu = await getDayMenuID({idMenu})
    const selectIncidences = await getIncidences()

    

    let quant = 0;
    const verificationIng = await Promise.all(selectIncidences.map(async (values) => {
        if (values.min > monthConfere) {
            quant = monthConfere
        }else{
            quant = values.min;
        }
        let i = 0;
        const ingIncidences = values.idIngredients
        await Promise.all(selectMenu.map( async (valuesMenu) => {
            const idRecipe = valuesMenu.idTypeRecipe
            const selectIngRecipe = await getRecipeIngIdRecipe({idRecipe})
            await Promise.all(selectIngRecipe.map( async (valuesMenu) => {
                if(valuesMenu.idIngredient == ingIncidences){
                    i = i + 1
                }
            }))
        }))

        const id = ingIncidences
        const ingredient = await getIngredientsID({id})
        const success = i >=values.min
        return  {
            type: ingredient.name,
            falta: success ? 0 : values.min - i, 
            success 
        }
    }))
    console.log(verificationIng)

    return verificationIng.filter(result => !(result.success))
   
}

export function verifyAspectMonth({ id }) {
    return
}

export function verifyRecipe({ id }) {
    return
}

export function verifyDayIngredients({ day }) {
    return
}

export function verifyDayEquipment({ day }) {
    return
}

export function verifyAspectDay({ day }) {
    return
}


