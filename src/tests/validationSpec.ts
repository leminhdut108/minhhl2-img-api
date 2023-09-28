import { paramsValidator } from '../helpers/validation';

it('expect paramsValidator("filename", "100", "a") to throw error', () => {
  expect(function () {
    paramsValidator('santamonica', '100', 'a');
  }).toThrow(new Error('Size params must be a valid number'));
});
