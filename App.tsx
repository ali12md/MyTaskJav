/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./src/navigation/AppNavigator";

// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React, { useEffect, useState } from 'react';
// import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// function AddScoreScreen() {
//   const navigation = useNavigation();
//   const [holeIndex, setHoleIndex] = useState(1);
//   const [scores, setScores] = useState(Array(18).fill(0));

//   useEffect(() => {
//     const loadScores = async () => {
//       const savedScores = await AsyncStorage.getItem('scores');
//       if (savedScores) {
//         setScores(JSON.parse(savedScores));
//       }
//     };
//     loadScores();
//   }, []);

//   const updateScore = (change) => {
//     const newScores = [...scores];
//     newScores[holeIndex - 1] = Math.max(0, newScores[holeIndex - 1] + change);
//     setScores(newScores);
//   };

//   const submitScores = async () => {
//     await AsyncStorage.setItem('scores', JSON.stringify(scores));
//     navigation.navigate('Scorecard');
//   };

//   const resetScores = async () => {
//     const reset = Array(18).fill(0);
//     setScores(reset);
//     await AsyncStorage.setItem('scores', JSON.stringify(reset));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Hole {holeIndex}</Text>
//       <Text style={styles.score}>Score: {scores[holeIndex - 1]}</Text>

//       <View style={styles.buttonsRow}>
//         <TouchableOpacity style={styles.controlBtn} onPress={() => updateScore(-1)}>
//           <Text style={styles.btnText}>-</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.controlBtn} onPress={() => updateScore(1)}>
//           <Text style={styles.btnText}>+</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.navigationRow}>
//         <Button title="Previous" onPress={() => holeIndex > 1 && setHoleIndex(holeIndex - 1)} />
//         <Button title="Next" onPress={() => holeIndex < 18 && setHoleIndex(holeIndex + 1)} />
//       </View>

//       <TouchableOpacity style={styles.submitBtn} onPress={submitScores}>
//         <Text style={styles.submitText}>Submit Score</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.resetBtn} onPress={resetScores}>
//         <Text style={styles.resetText}>Reset Scores</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#F5F5F5' },
//   title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
//   score: { fontSize: 22, marginBottom: 20 },
//   buttonsRow: { flexDirection: 'row', marginBottom: 20 },
//   controlBtn: { backgroundColor: '#eee', padding: 15, marginHorizontal: 20, borderRadius: 10 },
//   btnText: { fontSize: 24 },
//   navigationRow: { flexDirection: 'row', justifyContent: 'space-between', width: '80%', marginVertical: 20 },
//   submitBtn: { backgroundColor: '#4CAF50', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 10, marginBottom: 10 },
//   submitText: { color: '#fff', fontSize: 18 },
//   resetBtn: { backgroundColor: '#f44336', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10 },
//   resetText: { color: '#fff', fontSize: 16 }
// });

// /////////dc/d/f////
// function ScorecardScreen() {
//   const [scores, setScores] = useState(Array(18).fill('-'));

//   useEffect(() => {
//     const loadScores = async () => {
//       const storedScores = await AsyncStorage.getItem('scores');
//       if (storedScores) {
//         setScores(JSON.parse(storedScores));
//       }
//     };
//     loadScores();
//   }, []);

//   const total = scores.reduce((acc, val) => acc + (parseInt(val) || 0), 0);

//   return (
//     <ScrollView contentContainerStyle={styles2.container}>
//       <Text style={styles2.title}>Scorecard</Text>

//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles2.scrollArea}>
//         <View>
//           <View style={styles2.row}>
//             <Text style={styles2.label}>Hole</Text>
//             {[...Array(18)].map((_, index) => (
//               <Text key={index} style={styles2.cell}>{index + 1}</Text>
//             ))}
//           </View>

//           <View style={styles2.row}>
//             <Text style={styles2.label}>Score</Text>
//             {scores.map((score, index) => (
//               <Text key={index} style={styles2.cell}>{score}</Text>
//             ))}
//           </View>

//           <View style={styles2.row}>
//             <Text style={styles2.label}>Total</Text>
//             <Text style={styles2.totalScore}>{total}</Text>
//           </View>
//         </View>
//       </ScrollView>
//     </ScrollView>
//   );
// }

// const styles2 = StyleSheet.create({
//   container: { padding: 20, alignItems: 'flex-start', backgroundColor: '#fff' },
//   scrollArea: { marginTop: 10 },
//   title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
//   row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
//   label: { width: 60, fontWeight: 'bold', fontSize: 16 },
//   cell: { width: 40, textAlign: 'center', fontSize: 16 },
//   totalScore: { fontSize: 18, fontWeight: 'bold', marginLeft: 10 }
// });

// //

// const Stack = createNativeStackNavigator();


// function AppNavigator() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="AddScore">
//         <Stack.Screen name="AddScore" component={AddScoreScreen} />
//         <Stack.Screen name="Scorecard" component={ScorecardScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>

  );
}


export default App;

