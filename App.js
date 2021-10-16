import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const response = await fetch(`https://randomuser.me/api/?results=20`)
    const data = await response.json()
    setUsers(data.results)
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxTitle}>
        <Text style={styles.textTitle}>List Customers</Text>
      </View>
      <ScrollView style={styles.scroll}>
       {
          users.map((user, idx) => (
            <View style={styles.boxList} key={idx}>
              <View style={styles.boxImage}>
                <Image style={styles.img}
                  source={{
                    uri: user.picture.medium
                  }}
                />
              </View>
              <View style={styles.boxText}>
                <Text style={styles.userTitle}>{user.name.first} {user.name.last}</Text>
                <Text style={styles.userAdress}>{user.location.street.number} {user.location.street.name} {user.location.city} {user.location.country}</Text>
                <Text style={styles.userEmail}>{user.email}</Text>
              </View>
            </View>
          ))
        }
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  boxTitle: {
    padding: 10,
    backgroundColor: '#354dff'
  },
  textTitle: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold'
  },
  scroll: {
    backgroundColor: '#fff',
    padding: 10
  },
  boxList: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15,
  },
  boxImage: {
    flex: 2
  },
  boxText: {
    flex: 4,
    marginLeft: -35
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  userTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#000"
  },
  userAdress: {
    fontSize: 12,
    color: "#959595"
  },
  userEmail: {
    color: '#5a71ff'
  }
})
