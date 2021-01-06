import {FETCH_DEBT} from '../constants/debt-action-types'

export const fetchDebt=(data)=>{
    return {type:FETCH_DEBT,payload:data}
}