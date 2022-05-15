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
import { LANDING } from './Landing-consts';

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
    <Container data-testid={LANDING.TEST_ID.CONTAINER}>
      <FormContainer data-testid={LANDING.TEST_ID.FORM} onSubmit={onSaveForm}>
        <Text data-testid={LANDING.TEST_ID.FORM_DESCRIPTION}>
          Please, enter your full name below
        </Text>
        <Text data-testid={LANDING.TEST_ID.FORM_HINT} css={css.secondText}>
          Only alphabetical characters are accepted
        </Text>
        <Input
          data-testid={LANDING.TEST_ID.INPUT_TEXT}
          onChange={onChangeFullName}
          value={fullName}
          placeholder="Full name"
          onBlur={onBlurFullName}
          css={css.textField}
        />
        <Checkbox
          data-testid={LANDING.TEST_ID.LABEL_CHECKBOX}
          id="fullName"
          label="Are you older than 18 years old?"
          inputProps={{
            checked: majority,
            onChange: onChangeMajority,
            'data-testid': LANDING.TEST_ID.INPUT_CHECKBOX,
          }}
          css={css.checkbox}
        />
        <Button
          data-testid={LANDING.TEST_ID.SUBMIT_BUTTON}
          css={css.button}
          disabled={!validForm}
          type="submit"
        >
          Enter
        </Button>
      </FormContainer>
      <Image
        data-testid={LANDING.TEST_ID.LANDING_IMAGE}
        src={BeesImage}
        css={css.image}
        alt="Bee image"
      />
    </Container>
  );
};

export default Landing;
