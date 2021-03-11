import { AxiosResponse } from 'axios';
import { put, takeLatest, all, AllEffect, ForkEffect, call } from 'redux-saga/effects';
import api from '../../../services/professionals/api';
import { actions, types } from './actions';

function* getProfessionals() {
  yield put(actions.setLoading());

  const response: AxiosResponse = yield call(api.findAll);

  const { data } = response;
  yield put(
    actions.setProfessionals({
      data,
    })
  );
}

export default function* professionalsSaga(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  yield all([
    takeLatest(types.GET_PROFESSIONALS, getProfessionals),
  ]);
}
