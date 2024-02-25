/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addDog = /* GraphQL */ `
  mutation addDog(
    $input: AddDogInput!
    $condition: ModelDogConditionInput
  ) {
    addDog(input: $input, condition: $condition) {
      id
      name
      breed
      walkLength
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDog = /* GraphQL */ `
  mutation UpdateDog(
    $input: UpdateDogInput!
    $condition: ModelDogConditionInput
  ) {
    updateDog(input: $input, condition: $condition) {
      id
      name
      breed
      walkLength
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDog = /* GraphQL */ `
  mutation DeleteDog(
    $input: DeleteDogInput!
    $condition: ModelDogConditionInput
  ) {
    deleteDog(input: $input, condition: $condition) {
      id
      name
      breed
      walkLength
      createdAt
      updatedAt
      __typename
    }
  }
`;
