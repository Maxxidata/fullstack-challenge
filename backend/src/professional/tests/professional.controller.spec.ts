import { NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UtilTest } from '../../common/tests/util.test';
import { ProfessionalType } from '../models/professional-type.entity';
import { Professional } from '../models/professional.entity';
import { ProfessionalTypeService } from '../professional-type/professional-type.service';
import { ProfessionalController } from '../professional.controller';
import { ProfessionalService } from '../professional.service';

describe('ProfessionalController', () => {
  let professionalController: ProfessionalController;
  let professionalService: ProfessionalService;

  const mockRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    save: jest.fn(),
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ProfessionalController],
      providers: [
        ProfessionalService,
        {
          provide: getRepositoryToken(Professional),
          useValue: mockRepository,
        },
        ProfessionalTypeService,
        {
          provide: getRepositoryToken(ProfessionalType),
          useValue: mockRepository,
        },
      ],
    }).compile();

    professionalService = moduleRef.get<ProfessionalService>(
      ProfessionalService,
    );
    professionalController = moduleRef.get<ProfessionalController>(
      ProfessionalController,
    );
  });

  beforeEach(async () => {
    mockRepository.find.mockReset();
    mockRepository.findOne.mockReset();
    mockRepository.save.mockReset();
    mockRepository.delete.mockReset();
  });

  describe('getAllProfessionals', () => {
    it('should return an array of professional', async () => {
      const professionalMock = UtilTest.valideProfessional();
      mockRepository.find.mockReturnValue([professionalMock]);
      const professionals = await professionalController.list();

      expect(professionals).toHaveLength(1);
      expect(professionals).toEqual([professionalMock]);
      expect(mockRepository.find).toHaveBeenCalledTimes(1);
    });
  });

  describe('getOneProfessional', () => {
    it('should return one professional', async () => {
      const professionalMock = UtilTest.valideProfessional();
      mockRepository.findOne.mockReturnValue(professionalMock);

      expect(await professionalController.getOne(1)).toMatchObject(
        professionalMock,
      );
      expect(mockRepository.findOne).toHaveBeenCalledTimes(1);
    });

    it('should return a not found exception', () => {
      mockRepository.findOne.mockReturnValue(null);

      expect(professionalController.getOne(2)).rejects.toBeInstanceOf(
        NotFoundException,
      );
      expect(mockRepository.findOne).toHaveBeenCalledTimes(1);
    });
  });

  describe('postCreateProfessional', () => {
    it('should return exception when doesnt create professional', async () => {
      const professionalMock = UtilTest.valideProfessional();
      mockRepository.save.mockReturnValue(null);

      await professionalController.create(professionalMock).catch(e => {
        expect(e).toBeInstanceOf(NotFoundException);
      });
    });
  });

  describe('putUpdateProfessional', () => {
    it('should return the updated professional', async () => {
      const professionalMock = UtilTest.valideProfessional();
      const updateprofessionalMock = { name: 'Jonh Jonh' };
      mockRepository.findOne.mockReturnValue(professionalMock);
      mockRepository.save.mockReturnValue({
        ...professionalMock,
        ...updateprofessionalMock,
      });

      expect(
        await professionalController.update(1, {
          ...professionalMock,
          ...updateprofessionalMock,
        }),
      ).toMatchObject(updateprofessionalMock);
      expect(mockRepository.findOne).toHaveBeenCalledTimes(2);
      expect(mockRepository.save).toHaveBeenCalledTimes(1);
    });

    it('should return exception when doesnt update professional', () => {
      const professionalMock = UtilTest.valideProfessional();
      const updateprofessionalMock = { name: 'Jonh Jonh' };
      mockRepository.findOne.mockReturnValue(null);
      mockRepository.save.mockReturnValue(null);

      expect(
        professionalController.update(2, {
          ...professionalMock,
          ...updateprofessionalMock,
        }),
      ).rejects.toBeInstanceOf(NotFoundException);
      expect(mockRepository.findOne).toHaveBeenCalledTimes(1);
    });
  });

  describe('deleteProfessional', () => {
    it('should delete the professional', async () => {
      const professionalMock = UtilTest.valideProfessional();
      mockRepository.findOne.mockReturnValue(professionalMock);
      mockRepository.delete.mockReturnValue(professionalMock);

      expect(await professionalController.delete(1)).toBe(true);
      expect(mockRepository.findOne).toHaveBeenCalledTimes(1);
      expect(mockRepository.delete).toHaveBeenCalledTimes(1);
    });

    it('should return exception when delete a professional', async () => {
      const professionalMock = UtilTest.valideProfessional();
      mockRepository.findOne.mockReturnValue(professionalMock);
      mockRepository.delete.mockReturnValue(null);

      expect(await professionalController.delete(2)).toBe(false);
      expect(mockRepository.findOne).toHaveBeenCalledTimes(1);
      expect(mockRepository.delete).toHaveBeenCalledTimes(1);
    });

    it('should return exception when delete not found professional', () => {
      mockRepository.findOne.mockReturnValue(null);
      mockRepository.delete.mockReturnValue(null);

      expect(professionalController.delete(2)).rejects.toBeInstanceOf(
        NotFoundException,
      );
      expect(mockRepository.findOne).toHaveBeenCalledTimes(1);
    });
  });
});
