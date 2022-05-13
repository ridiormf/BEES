import React from 'react';

export const useLandingControl = () => {
  const [fullName, setFullName] = React.useState<string>('');
  const [majority, setMajority] = React.useState<boolean>(false);

  const onChangeFullName = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setFullName(event.target.value);
  };

  const onChangeMajority = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setMajority(event.target.checked);
  };

  return {
    state: {
      fullName,
      majority,
    },
    methods: {
      onChangeFullName,
      onChangeMajority,
    },
  };
};
