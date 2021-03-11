export interface ActionPayload {
  type: string;
  payload: { data: [] };
}

export interface IProfessionalReducer {
  data: any,
  loading: boolean,
}