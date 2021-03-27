import { Box, Column, Columns, Inline, Stack } from '@mobily/stacks';
import CheckBox from 'expo-checkbox';
import firebase from 'firebase';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { OLIB_COVERS_URL, OLIB_URL } from './src/constants';

const firebaseConfig = {
    apiKey: 'AIzaSyBoJI3CS8zsvoMJ_XfElm5aULi0KGxWSks',
    authDomain: 'book-list-95cd0.firebaseapp.com',
    projectId: 'book-list-95cd0',
    storageBucket: 'book-list-95cd0.appspot.com',
    messagingSenderId: '720527672919',
    appId: '1:720527672919:web:3fe401e39cc3d848480512',
    measurementId: 'G-0DLTZTZ7LP',
};

firebase.initializeApp(firebaseConfig);

export default function App() {
    const [text, setText] = useState<string>('dune frank herbert');
    const [res, setRes] = useState<any[]>([]);
    return (
        <Stack space={4}>
            <Columns>
                <Column width="2/3">
                    <TextInput
                        placeholder="search for books...."
                        value={text}
                        onChangeText={setText}
                    />
                </Column>
                <Column>
                    <Button
                        title="search"
                        onPress={() => {
                            fetch(
                                `${OLIB_URL}/search.json?q=${encodeURIComponent(
                                    text
                                )}&mode=everything&limit=10`
                            )
                                .then((data) => data.json())
                                .then((data) => setRes(data.docs));
                        }}
                    />
                </Column>
            </Columns>
            <Stack space={4}>
                {res.map((book) => (
                    <View key={book.key}>
                        <Inline space={4}>
                            <AutoHeightImage
                                source={{
                                    uri: `${OLIB_COVERS_URL}/b/olid/${book.cover_edition_key}-M.jpg`,
                                }}
                                width={200}
                            />
                            <Box>
                                <Stack space={4}>
                                    <Text>
                                        {book.title}-{book?.author_name?.[0]}
                                    </Text>
                                    <Inline>
                                        <Text>Completed</Text>
                                        <CheckBox
                                            onValueChange={() => console.log('value change')}
                                            value={true}
                                        />
                                    </Inline>
                                    <Inline>
                                        <Text>DNF</Text>
                                        <CheckBox
                                            onValueChange={() => console.log('value change')}
                                            value={true}
                                        />
                                    </Inline>
                                </Stack>
                            </Box>
                        </Inline>
                    </View>
                ))}
            </Stack>
        </Stack>
    );
}

const styles = StyleSheet.create({});
