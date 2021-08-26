import {
  Button,
  ButtonVariants,
  Text,
  TextVariants,
  TypoTags,
  Avatar,
} from "@todo-liszt/common";

import SettingsCard from "../../SettingsCard/SettingsCard";
import * as Styled from "./components";

const Photo = () => {
  return (
    <SettingsCard title="Photo">
      <Styled.Wrapper>
        <Avatar
          src="/assets/images/krillin.jpg"
          name="Avatar"
          width="12.375rem"
          height="12.375rem"
        />

        <Styled.UploadPhoto>
          <Button variant={ButtonVariants.Theme}>Upload photo</Button>
          <Text as={TypoTags.P} variant={TextVariants.Caption1}>
            Pick a photo up to 4MB
          </Text>
        </Styled.UploadPhoto>
      </Styled.Wrapper>
    </SettingsCard>
  );
};

export default Photo;