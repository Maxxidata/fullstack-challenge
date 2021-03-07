import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UtilTest } from '../../common/tests/util.test';
import { ProfessionalType } from '../models/professional-type.entity';
import { ProfessionalTypeController } from '../professional-type/professional-type.controller';
import { ProfessionalTypeService } from '../professional-type/professional-type.service';

describe('professionalTypeController', () => {
  let professionalTypeController: ProfessionalTypeController;
  let professionalTypeService: ProfessionalTypeService;

  const mockRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    save: jest.fn(),
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ProfessionalTypeController],
      providers: [
        ProfessionalTypeService,
        {
          provide: getRepositoryToken(ProfessionalType),
          useValue: mockRepository,
        },
      ],
    }).compile();

    professionalTypeService = moduleRef.get<ProfessionalTypeService>(
      ProfessionalTypeService,
    );
    professionalTypeController = moduleRef.get<ProfessionalTypeController>(
      ProfessionalTypeController,
    );
  });

  beforeEach(async () => {
    mockRepository.find.mockReset();
    mockRepository.findOne.mockReset();
    mockRepository.save.mockReset();
    mockRepository.delete.mockReset();
  });

  describe('getAllProfessionalTypes', () => {
    it('should return an array of professional types', async () => {
      const professionalTypeMock = UtilTest.valideProfessionalType();
      mockRepository.find.mockReturnValue([professionalTypeMock]);
      const professionalTypes = await professionalTypeController.list();

      expect(professionalTypes).toHaveLength(1);
      expect(professionalTypes).toEqual([professionalTypeMock]);
      expect(mockRepository.find).toHaveBeenCalledTimes(1);
    });
  });

  describe('getOneProfessionalType', () => {
    it('should return one professional type', async () => {
      const professionalTypeMock = UtilTest.valideProfessionalType();
      mockRepository.findOne.mockReturnValue(professionalTypeMock);

      expect(await professionalTypeController.getOne(1)).toMatchObject(
        professionalTypeMock,
      );
      expect(mockRepository.findOne).toHaveBeenCalledTimes(1);
    });

    it('should return a not found exception', () => {
      mockRepository.findOne.mockReturnValue(null);

      expect(professionalTypeController.getOne(2)).rejects.toBeInstanceOf(
        NotFoundException,
      );
      expect(mockRepository.findOne).toHaveBeenCalledTimes(1);
    });
  });

  describe('postCreateProfessionalType', () => {
    it('should return the created professional type', async () => {
      const professionalTypeMock = UtilTest.valideProfessionalType();
      mockRepository.save.mockReturnValue(professionalTypeMock);

      expect(
        await professionalTypeController.create(professionalTypeMock),
      ).toMatchObject(professionalTypeMock);
      expect(mockRepository.save).toHaveBeenCalledTimes(1);
    });

    it('should return exception when doesnt create professional type', async () => {
      const professionalTypeMock = UtilTest.valideProfessionalType();
      mockRepository.save.mockReturnValue(null);

      await professionalTypeController.create(professionalTypeMock).catch(e => {
        expect(e).toBeInstanceOf(InternalServerErrorException);
      });
      expect(mockRepository.save).toHaveBeenCalledTimes(1);
    });
  });

  describe('putUpdateProfessionalType', () => {
    it('should return the updated professional type', async () => {
      const professionalTypeMock = UtilTest.valideProfessionalType();
      const updateprofessionalTypeMock = { description: 'new description' };
      mockRepository.findOne.mockReturnValue(professionalTypeMock);
      mockRepository.save.mockReturnValue({
        ...professionalTypeMock,
        ...updateprofessionalTypeMock,
      });

      expect(
        await professionalTypeController.update(1, {
          ...professionalTypeMock,
          ...updateprofessionalTypeMock,
        }),
      ).toMatchObject(updateprofessionalTypeMock);
      expect(mockRepository.findOne).toHaveBeenCalledTimes(1);
      expect(mockRepository.save).toHaveBeenCalledTimes(1);
    });

    it('should return exception when doesnt update professional type', () => {
      const professionalTypeMock = UtilTest.valideProfessionalType();
      const updateprofessionalTypeMock = { description: 'new description' };
      mockRepository.findOne.mockReturnValue(null);
      mockRepository.save.mockReturnValue(null);

      expect(
        professionalTypeController.update(2, {
          ...professionalTypeMock,
          ...updateprofessionalTypeMock,
        }),
      ).rejects.toBeInstanceOf(NotFoundException);
      expect(mockRepository.findOne).toHaveBeenCalledTimes(1);
    });
  });

  describe('deleteProfessionalType', () => {
    it('should delete the professional type', async () => {
      const professionalTypeMock = UtilTest.valideProfessionalType();
      mockRepository.findOne.mockReturnValue(professionalTypeMock);
      mockRepository.delete.mockReturnValue(professionalTypeMock);

      expect(await professionalTypeController.delete(1)).toBe(true);
      expect(mockRepository.findOne).toHaveBeenCalledTimes(1);
      expect(mockRepository.delete).toHaveBeenCalledTimes(1);
    });

    it('should return exception when delete professional type', async () => {
      const professionalTypeMock = UtilTest.valideProfessionalType();
      mockRepository.findOne.mockReturnValue(professionalTypeMock);
      mockRepository.delete.mockReturnValue(null);

      expect(await professionalTypeController.delete(2)).toBe(false);
      expect(mockRepository.findOne).toHaveBeenCalledTimes(1);
      expect(mockRepository.delete).toHaveBeenCalledTimes(1);
    });

    it('should return exception when delete not found professional type', () => {
      mockRepository.findOne.mockReturnValue(null);
      mockRepository.delete.mockReturnValue(null);

      expect(professionalTypeController.delete(2)).rejects.toBeInstanceOf(
        NotFoundException,
      );
      expect(mockRepository.findOne).toHaveBeenCalledTimes(1);
    });
  });
});
