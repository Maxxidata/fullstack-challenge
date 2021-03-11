import { all, AllEffect, ForkEffect } from 'redux-saga/effects';

import professionals from './professionals/sagas';

export default function* rootSaga(): Generator<AllEffect<Generator<AllEffect<ForkEffect<never>>, void, unknown>>, void, unknown> {
  yield all([
    professionals(),
  ]);
}
