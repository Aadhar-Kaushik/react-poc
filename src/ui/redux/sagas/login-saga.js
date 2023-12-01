import { call, takeLatest } from "redux-saga/effects";
import { getApi } from "../../api/api";
import { CONFIG } from "../../configurations/configuration";
import { LOAD_CONFIG } from "../actions";

function* loadExternalConfig(){
    try{
        const RESPONSE=yield call(getApi,"/configurations/url.json")
        Object.assign(CONFIG.SYSTEM_PROPS,RESPONSE.data)

    }catch(err){
        console.warn(err)
    }
}

export function* watchLoadExternalConfig(){
    yield takeLatest(LOAD_CONFIG,loadExternalConfig)
}