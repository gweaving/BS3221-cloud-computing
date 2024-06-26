import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { listDogs } from "./graphql/queries";
import {
  createDog as createDogMutation,
  deleteDog as deleteDogMutation,
} from "./graphql/mutations";
import { generateClient } from 'aws-amplify/api';

const client = generateClient();

const App = ({ signOut }) => {
  const [dogs, setDogs] = useState([]);
  const [userType, setUserType] = useState('');

  useEffect(() => {
    fetchDogs();
  }, []);

  async function fetchDogs() {
    const apiData = await client.graphql({ query: listDogs });
    const dogsFromAPI = apiData.data.listDogs.items;
    setDogs(dogsFromAPI);
  }

  async function createDog(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
      breed: form.get("breed"),
      walkLength: form.get("walkLength")
    };
    await client.graphql({
      query: createDogMutation,
      variables: { input: data },
    });
    fetchDogs();
    event.target.reset();
  }

  async function deleteDog({ id }) {
    console.log("ID before mutation:", id);
    const newDogs = dogs.filter((dog) => dog.id !== id);
    setDogs(newDogs);
    await client.graphql({
      query: deleteDogMutation,
      variables: { input: { id } },
    });
  }

  return (
    <View className="App">
      <Heading level={1}>Wagg.ly</Heading>
      {userType === '' ? (
        <View>
          <Button onClick={() => setUserType('dogOwner')}>I am a dog owner</Button>
          <Button onClick={() => setUserType('dogWalker')}>I am a dog walker</Button>
        </View>
      ) : (
        <View>
          <Flex direction="row" justifyContent="left">
          <Button onClick={() => setUserType('')}>Back</Button>
          </Flex>
          {userType === 'dogOwner' && (
            <>
              <Heading level={2}>Add Dogs</Heading>
              <View as="form" margin="3rem 0" onSubmit={createDog}>
                <Flex direction="row" justifyContent="center">
                  <TextField
                    name="name"
                    placeholder="Dog Name"
                    label="Dog Name"
                    labelHidden
                    variation="quiet"
                    required
                  />
                  <TextField
                    name="breed"
                    placeholder="Dog Breed"
                    label="Dog Breed"
                    labelHidden
                    variation="quiet"
                    required
                  />
                  <TextField
                    name="walkLength"
                    placeholder="Length of Walk"
                    label="Length of Walk"
                    labelHidden
                    variation="quiet"
                    required
                  />
                  <Button type="submit" variation="primary">
                    Add Dog
                  </Button>
                </Flex>
              </View>
            </>
          )}
          <Heading level={2}>Current Dogs</Heading>
          <View margin="3rem 0">
          <Flex direction="row" justifyContent="center">
          <table>
            <tr>
              <th>Name</th>
              <th>Breed</th>
              <th>Walk Length</th>
              <th>Action</th>
            </tr>
          
            {dogs.map((dog) => {
              return (
                <tr>
                  <td>{dog.name}</td>
                  <td>{dog.breed}</td>
                  <td>{dog.walkLength}</td>
                  <td>{userType === 'dogWalker' ? (
                  <Button variation="link" onClick={() => deleteDog({ id: dog.id })}>
                    Walked
                  </Button>
                ) : (
                  <Button variation="link" onClick={() => deleteDog({ id: dog.id })}>
                    Delete dog
                  </Button>
                  )}</td>
                </tr>
              )
            })}
          </table>
          </Flex>
          </View>
          <Button onClick={signOut}>Sign Out</Button>
        </View>
      )}
    </View>
  );
};

export default withAuthenticator(App);