import * as Styled from './components';
import { InputProps } from './types';
import { Text, TextVariants, TypoTags } from '../Typography';
import InputLabel from './InputLabel';

const Input = (props: InputProps) => {
  const { label, id, type, message, isDisabled, as, ...others } = props;

  return (
    <Styled.InputWrapper>
      {label && <InputLabel id={id} label={label} />}

      <Styled.InputGroup>
        {as === 'textarea' && (
          <Styled.Input as="textarea" id={id} disabled={isDisabled} {...others} />
        )}

        {!as && <Styled.Input type={type || 'text'} id={id} disabled={isDisabled} {...others} />}
        {others.inputIcon}
      </Styled.InputGroup>

      {message && (
        <Styled.InputMessage {...others}>
          <Text as={TypoTags.Span} variant={TextVariants.Caption1}>
            {message}
          </Text>
        </Styled.InputMessage>
      )}
    </Styled.InputWrapper>
  );
};

export default Input;
