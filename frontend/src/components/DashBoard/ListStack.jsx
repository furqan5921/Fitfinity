import React from 'react'
import {
    Heading,
    HStack
  } from "@chakra-ui/react";
import { useState } from "react";
import { BiometricModal } from "./BiometricModal";
import DashList from "./DashList";
import { ExerciseModal } from "./ExerciseModal";
import { FoodModal } from "./FoodModal";
import { NotesModal } from "./NotesModal";

function ListStack({title, ...rest}) {
    const [isFoodModalVisible, setIsFoodModalVisible] = useState(false);
  const [isExerciseModalVisible, setIsExerciseModalVisible] = useState(false);
  const [isBiometricModalVisible, setIsBiometricModalVisible] = useState(false);
  const [isNotesModalVisible, setIsNotesModalVisible] = useState(false);

  const FoodModalClick = () => {
    setIsFoodModalVisible(true);
    // onClose();
  };
  const ExerciseModalClick = () => {
    setIsExerciseModalVisible(true);
    // onClose();
  };

  const BioModalClick = () => {
    setIsBiometricModalVisible(true);
  };
  return (
    <HStack
        spacing={20}
        p={3}
        flexWrap="wrap"
        borderRadius="1rem"
        bgColor="white"
        {...rest}
      >
       { title ? <Heading fontSize={"25px"}> {title}</Heading> : null}
        <DashList
          src="https://cdn1.cronometer.com/brand/svg/add-food-icon.svg"
          title="Food"
          onClick={FoodModalClick}
        />
        {isFoodModalVisible && (
          <FoodModal
            isModalVisible={isFoodModalVisible}
            setIsModalVisible={setIsFoodModalVisible}
          />
        )}
        <DashList
          src="https://cdn1.cronometer.com/brand/svg/add-exercise-icon.svg"
          title="Exercise"
          onClick={ExerciseModalClick}
        />
        {isExerciseModalVisible && (
          <ExerciseModal
            isModalVisible={isExerciseModalVisible}
            setIsModalVisible={setIsExerciseModalVisible}
          />
        )}

        <DashList
          src="https://cdn1.cronometer.com/brand/svg/add-biometric-icon.svg"
          title="Biometric"
          onClick={BioModalClick}
        />
        {isBiometricModalVisible && (
          <BiometricModal
            isModalVisible={isBiometricModalVisible}
            setIsModalVisible={setIsBiometricModalVisible}
          />
        )}

        <DashList
          src="https://cdn1.cronometer.com/brand/svg/add-note-icon.svg"
          title="Notes"
          onClick={() => {
            setIsNotesModalVisible(true);
          }}
        />
        {isNotesModalVisible && (
          <NotesModal
            isModalVisible={isNotesModalVisible}
            setIsModalVisible={setIsNotesModalVisible}
          />
        )}
      </HStack>
  )
}

export default ListStack
