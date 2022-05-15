import React from 'react';

import { useLandingControl } from './Landing-control';
import { landingStyles } from './Landing-styles';
import { LandingProps } from './Landing-types';

import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import Input from '../../../components/Input';
import Text from '../../../components/Text';
import Image from '../../../components/Image';

import BeesImage from '../../../assets/png/bees.png';

const {
  styled: { Container, FormContainer },
  css,
} = landingStyles;

const Landing: React.FC<LandingProps> = () => {
  const {
    state: { fullName, majority, validForm },
    methods: { onChangeFullName, onBlurFullName, onChangeMajority, onSaveForm },
  } = useLandingControl();
  return (
    <Container>
      <FormContainer data-cy="form" onSubmit={onSaveForm}>
        <Text data-cy="formDescription">
          Please, enter your full name below
        </Text>
        <Text data-cy="formHint" css={css.secondText}>
          Only alphabetical characters are accepted
        </Text>
        <Input
          data-cy="inputText"
          onChange={onChangeFullName}
          value={fullName}
          placeholder="Full name"
          onBlur={onBlurFullName}
          css={css.textField}
        />
        <Checkbox
          data-cy="labelCheckbox"
          id="fullName"
          label="Are you older than 18 years old?"
          inputProps={{
            checked: majority,
            onChange: onChangeMajority,
            'data-cy': 'inputCheckbox',
          }}
          css={css.checkbox}
        />
        <Button
          data-cy="submitButton"
          css={css.button}
          disabled={!validForm}
          type="submit"
        >
          Enter
        </Button>
      </FormContainer>
      <Image
        data-cy="landingImage"
        src={BeesImage}
        css={css.image}
        alt="Bee image"
      />
    </Container>
  );
};

export default Landing;
