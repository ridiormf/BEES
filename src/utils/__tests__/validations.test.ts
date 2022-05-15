import { checkFullName } from '../validations';

describe('utils ->', () => {
  describe('validations ->', () => {
    describe('checkFullName ->', () => {
      it('Should return "true" from a valid fullName', () => {
        const result = checkFullName('Full Name');
        expect(result).toBe(true);
      });
      it('Should return "true" from a valid fullName with minimum acceptable letters', () => {
        const result = checkFullName('fu na');
        expect(result).toBe(true);
      });
      it('Should return "false" from fullName with only one name', () => {
        const result = checkFullName('Full');
        expect(result).toBe(false);
      });
      it('Should return "false" from fullName one short name', () => {
        let result = checkFullName('Full N');
        expect(result).toBe(false);
        result = checkFullName('F Name');
        expect(result).toBe(false);
        result = checkFullName('Full Name T');
        expect(result).toBe(false);
      });
      it('Should return "false" from fullName with two or more blank space between names', () => {
        let result = checkFullName('Full  Name  Test');
        expect(result).toBe(false);
        result = checkFullName('Full  Name');
        expect(result).toBe(false);
      });
      it('Should return "false" from fullName with numbers', () => {
        let result = checkFullName('Fu2ll Nam1e');
        expect(result).toBe(false);
      });

      it('Should return "false" from fullName starting with blank space', () => {
        let result = checkFullName(' Full Name Test');
        expect(result).toBe(false);
      });

      it('Should return "false" from fullName ending with blank space', () => {
        let result = checkFullName('Full Name Test ');
        expect(result).toBe(false);
      });

      it('Should return "false" if nothing was passed', () => {
        let result = checkFullName();
        expect(result).toBe(false);
        result = checkFullName('');
        expect(result).toBe(false);
      });

      it('Should return "false" if only one name was passed', () => {
        let result = checkFullName('teste');
        expect(result).toBe(false);
      });
    });
  });
});
