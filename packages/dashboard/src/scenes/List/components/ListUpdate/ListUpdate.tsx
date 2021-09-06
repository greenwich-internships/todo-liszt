import { useState } from "react";
import { useHistory } from "react-router";

import {
  Button,
  ButtonSizes,
  ButtonVariants,
  ButtonColors,
  Modal,
  Heading,
  HeadingVariants,
  Text,
  TextVariants,
  TypoTags,
} from "@todo-liszt/common";

import SceneHeader from "@components/SceneHeader";

import ListForm from "../ListForm";

const UpdateListContainer = () => {
  const history = useHistory();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCloseModal = () => setShowDeleteModal(false);

  return (
    <form autoComplete="off">
      <SceneHeader title="Update list">
        <Button
          type="button"
          size={ButtonSizes.Medium}
          bgColor={ButtonColors.Primary_03}
          onClick={() => setShowDeleteModal(!showDeleteModal)}
        >
          Delete
        </Button>

        {showDeleteModal && (
          <Modal showModal={showDeleteModal} onCloseModal={handleCloseModal}>
            <Heading as={TypoTags.H3} variant={HeadingVariants.Headline4}>
              Delete list
            </Heading>

            <Text
              as={TypoTags.P}
              variant={TextVariants.Body2}
              style={{ margin: "1.5rem 0 2rem" }}
            >
              Are you sure want to delete task ?
            </Text>

            <div style={{ textAlign: "right" }}>
              <Button
                type="button"
                variant={ButtonVariants.Theme}
                onClick={handleCloseModal}
              >
                Cancel
              </Button>
              <Button
                type="button"
                bgColor={ButtonColors.Primary_03}
                style={{ marginLeft: "1rem" }}
              >
                Delete
              </Button>
            </div>
          </Modal>
        )}

        <Button
          type="button"
          variant={ButtonVariants.Theme}
          size={ButtonSizes.Medium}
          onClick={() => history.replace("/app/list")}
        >
          Cancel
        </Button>
        <Button type="submit" size={ButtonSizes.Medium}>
          Update
        </Button>
      </SceneHeader>

      <ListForm
        itemData={{
          name: "Todo test",
          desc: "Test :D",
          startDate: "13/08/2021",
          startTime: "9:00",
          endDate: "13/08/2021",
          endTime: "18:00",
          color: "Purple",
        }}
      />
    </form>
  );
};

export default UpdateListContainer;