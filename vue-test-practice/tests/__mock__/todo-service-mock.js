import jest from 'jest';
import { fetchData } from '@service/todo-service';

jest.mock('@/service/todo-service');

fetchData.mockResolvedValue([1, 2, 3]);
