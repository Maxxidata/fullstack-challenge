import { valideProfessional } from './util';
import ProfessionalController from '../src/app/controllers/ProfessionalController';

const mockProfessional = {
  list: jest.fn(() => []),
  getOne: jest.fn((id) => valideProfessional()),
  create: jest.fn((data) => valideProfessional()),
  update: jest.fn((id, data) => { return { ...valideProfessional(),...data } }),
  delete: jest.fn((id) => true),
}
jest.mock('../src/app/controllers/ProfessionalController', () => {
  return jest.fn().mockImplementation(() => {
    return mockProfessional;
  });
});

jest.mock('../src/app/controllers/ProfessionalTypeController');

beforeEach(() => {
  ProfessionalController.mockClear();
});

describe('Professional tests', () => {
  it('should professional constructor is called', async () => {
    const professional = ProfessionalController();
    expect(professional).toBeTruthy();
    expect(ProfessionalController).toHaveBeenCalledTimes(1);
  });

  it('should list of professionals', async () => {
    const professional = ProfessionalController();
    const list = [];
    await professional.list();
    expect(mockProfessional.list.mock.results[0].value).toEqual(list);
    expect(mockProfessional.list).toHaveBeenCalledTimes(1);
  });

  it('should get one professional', async () => {
    const professional = ProfessionalController();
    const one = valideProfessional();
    await professional.getOne(one.id);
    expect(mockProfessional.getOne.mock.results[0].value).toEqual(one);
    expect(mockProfessional.getOne).toHaveBeenCalledTimes(1);
  });

  it('should create a professional', async () => {
    const professional = ProfessionalController();
    const create = valideProfessional();
    await professional.create(create);
    expect(mockProfessional.create.mock.results[0].value).toEqual(create);
    expect(mockProfessional.create).toHaveBeenCalledTimes(1);
  });

  it('should update a professional', async () => {
    const professional = ProfessionalController();
    const created = await professional.create(valideProfessional());
    const updated = await professional.update(created.id, { name: 'Maria' });
    expect(mockProfessional.update.mock.results[0].value).toEqual(updated);
    expect(mockProfessional.update).toHaveBeenCalledTimes(1);
  });

  it('should delete a professional', async () => {
    const professional = ProfessionalController();
    const created = await professional.create(valideProfessional());
    const deleted = await professional.delete(created.id);
    expect(mockProfessional.delete.mock.results[0].value).toEqual(deleted);
    expect(mockProfessional.delete).toHaveBeenCalledTimes(1);
  });
});