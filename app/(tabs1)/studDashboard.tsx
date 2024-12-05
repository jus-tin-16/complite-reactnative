import { Text, View, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Platform} from 'react-native';
import { Link, router } from 'expo-router';
import Image from '../assets/complite-logo.png';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

const Logout = () => {
  router.dismissAll();
}

const openSection = () => {
  router.push('/components/studSection');
}

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
          <Text style={styles.headText}>Your Class Sections</Text>

          <TouchableOpacity style={[styles.Card, styles.Shadow]} onPress={openSection}>
            <View style={styles.CardImage}>
              <ImageBackground source={Image} resizeMode='cover' />
            </View>
            <View style={styles.CardBody}>
              <Text style={styles.CardTitle}>Section Name</Text>
              <Text style={styles.CardDesc}>Description</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addButton}>
            <Ionicons name='add-circle-outline' size={24} color="#F27B12" />
            <Text style={{color: '#F27B12', fontWeight: '500'}}>Enroll Section</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={Logout}>
            <Text>Logout</Text>
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEFA',
    padding: 20,
  },
  Scroll: {
    justifyContent: 'space-around',
  },
  headText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0D4DD6',
  },
  Card: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFAFA',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.25,
    elevation: 5,
  },
  Shadow: Platform.select({
    ios: {
      shadowColor: '#171717',
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      },
      android: {
      elevation: 5,
      shadowColor: '#171717',
    },
  }),
  CardBody: {
    padding: 20,
  },
  CardTitle: {
    fontSize: 24,
    color: '#0D4DD6',
    fontWeight: 'bold',
  },
  CardDesc: {
    fontSize: 16,
    color: 'grey',
    fontWeight: '400',
  },
  CardImage: {
    flex: 1,
    justifyContent: 'center',
    width: 'auto',
    height: 150,
    backgroundColor: '#FFFF2F',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  addButton: {
    opacity: .7,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderWidth: 5,
    borderColor: '#F26B12',
    borderStyle: 'dotted',
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#grey',
  },
});