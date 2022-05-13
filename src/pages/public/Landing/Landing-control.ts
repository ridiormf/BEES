import React from 'react';
import { useApplicationContext } from '../../../providers';
import { checkFullName } from '../../../utils/validations';

export const useLandingControl = () => {
  const [fullName, setFullName] = React.useState<string>('');
  const [majority, setMajority] = React.useState<boolean>(false);

  const [validForm, setValidForm] = React.useState<boolean>(false);

  const applicationContext = useApplicationContext();

  const onChangeFullName = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    if (validForm) {
      setValidForm(false);
    }
    setFullName(event.target.value);
  };

  const onChangeMajority = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setValidForm(event.target.checked && checkFullName(fullName));
    setMajority(event.target.checked);
  };

  const onBlurFullName = () => {
    setValidForm(majority && checkFullName(fullName));
  };

  const onSaveForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    applicationContext.methods.saveUser!({
      fullName,
      majority,
    });
  };

  return {
    state: {
      fullName,
      majority,
      validForm,
    },
    methods: {
      onChangeFullName,
      onChangeMajority,
      onBlurFullName,
      onSaveForm,
    },
  };
};
