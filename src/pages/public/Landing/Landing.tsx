import React from 'react';

import { useLandingControl } from './Landing-control';
import { landingStyles } from './Landing-styles';
import { LandingProps } from './Landing-types';

import { Button } from '../../../components/Button';
import { Checkbox } from '../../../components/Checkbox';
import { Input } from '../../../components/Input';
import { Text } from '../../../components/Text';
import { Image } from '../../../components/Image';

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
      <FormContainer onSubmit={onSaveForm}>
        <Text>Please, enter your full name below</Text>
        <Text>Only alphabetical characters are accepted</Text>
        <Input
          onChange={onChangeFullName}
          value={fullName}
          onBlur={onBlurFullName}
          css={css.textField}
        />
        <Checkbox
          id="fullName"
          label="Are you older than 18 years old?"
          inputProps={{
            checked: majority,
            onChange: onChangeMajority,
          }}
          css={css.checkbox}
        />
        <Button css={css.button} disabled={!validForm} type="submit">
          Enter
        </Button>
      </FormContainer>
      <Image src={BeesImage} css={css.image} />
    </Container>
  );
};

export default Landing;
