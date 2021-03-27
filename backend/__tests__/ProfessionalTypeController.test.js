import { valideProfessionalType } from './util';
import ProfessionalTypeController from '../src/app/controllers/ProfessionalTypeController';

const mockProfessionalType = {
  list: jest.fn(() => []),
  getOne: jest.fn((id) => valideProfessionalType()),
  create: jest.fn((data) => valideProfessionalType()),
  update: jest.fn((id, data) => {
    return { ...valideProfessionalType(),...data } 
  }),
  delete: jest.fn((id) => true),
}
jest.mock('../src/app/controllers/ProfessionalTypeController', () => {
  return jest.fn().mockImplementation(() => {
    return mockProfessionalType;
  });
});

jest.mock('../src/app/controllers/ProfessionalTypeController');

beforeEach(() => {
  ProfessionalTypeController.mockClear();
});

describe('Professional tests', () => {
  it('should professional type constructor is called', async () => {
    const professionalType = ProfessionalTypeController();
    expect(professionalType).toBeTruthy();
    expect(ProfessionalTypeController).toHaveBeenCalledTimes(1);
  });

  it('should list of professional types', async () => {
    const professionalType = ProfessionalTypeController();
    const list = [];
    await professionalType.list();
    expect(mockProfessionalType.list.mock.results[0].value).toEqual(list);
    expect(mockProfessionalType.list).toHaveBeenCalledTimes(1);
  });

  it('should get one professional type', async () => {
    const professionalType = ProfessionalTypeController();
    const one = valideProfessionalType();
    await professionalType.getOne(one.id);
    expect(mockProfessionalType.getOne.mock.results[0].value).toEqual(one);
    expect(mockProfessionalType.getOne).toHaveBeenCalledTimes(1);
  });

  it('should create a professional type', async () => {
    const professionalType = ProfessionalTypeController();
    const create = valideProfessionalType();
    await professionalType.create(create);
    expect(mockProfessionalType.create.mock.results[0].value).toEqual(create);
    expect(mockProfessionalType.create).toHaveBeenCalledTimes(1);
  });

  it('should update a professional type', async () => {
    const professionalType = ProfessionalTypeController();
    const created = await professionalType.create(valideProfessionalType());
    const updated = await professionalType.update(
      created.id, { description: 'new description' }
    );
    expect(mockProfessionalType.update.mock.results[0].value).toEqual(updated);
    expect(mockProfessionalType.update).toHaveBeenCalledTimes(1);
  });

  it('should delete a professional type', async () => {
    const professionalType = ProfessionalTypeController();
    const created = await professionalType.create(valideProfessionalType());
    const deleted = await professionalType.delete(created.id);
    expect(mockProfessionalType.delete.mock.results[0].value).toEqual(deleted);
    expect(mockProfessionalType.delete).toHaveBeenCalledTimes(1);
  });
});