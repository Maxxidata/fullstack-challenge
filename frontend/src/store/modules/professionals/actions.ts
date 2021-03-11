interface ActionReturn {
  type: string;

  payload?: any
}

export const types = {
  SET_LOADING: '@professionals: set loading',
  GET_PROFESSIONALS: '@professionals: get professionals',
  SET_PROFESSIONALS: '@professionals: set professionals',
};

export const actions = {
  setLoading: (): ActionReturn => ({
    type: types.SET_LOADING,
  }),
  getProfessionals: (): ActionReturn => {
    return {
      type: types.GET_PROFESSIONALS,
    };
  },
  setProfessionals: (payload: any): ActionReturn => {
    return {
      type: types.SET_PROFESSIONALS,
      payload,
    };
  },
};
