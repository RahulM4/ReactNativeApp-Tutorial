import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Use MaterialCommunityIcons for icons

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null)); // 3x3 grid (flat array)
  const [isXTurn, setIsXTurn] = useState(true); // Track turn
  const [winner, setWinner] = useState(null); // Track winner

  const handlePress = (index) => {
    if (board[index] || winner) return; // Prevent overwriting or changes after a winner
    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
    checkWinner(newBoard);
  };

  const checkWinner = (newBoard) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6],            // Diagonals
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        setWinner(newBoard[a]);
        return;
      }
    }

    if (newBoard.every(cell => cell)) setWinner('Draw'); // All cells filled without a winner
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
  };

  const renderIcon = (value) => {
    switch (value) {
      case 'X':
        return <Icon name="close" size={60} color="#F29F58" />;
      case 'O':
        return <Icon name="circle-outline" size={60} color="#29AB87" />;
      default:
        return <Icon name="checkbox-blank-circle-outline" size={60} color="#BDC3C7" />;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <View style={styles.board}>
        {board.map((cell, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cell}
            onPress={() => handlePress(index)}
          >
            {renderIcon(cell)}
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.status}>
        {winner
          ? winner === 'Draw'
            ? 'It\'s a Draw!'
            : `Winner: ${winner}`
          : `Turn: ${isXTurn ? 'X' : 'O'}`}
      </Text>
      {winner && (
        <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
          <Text style={styles.resetText}>Restart Game</Text>
        </TouchableOpacity>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  board: {
    width: 400,
    height: 400,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 4,
    borderColor: '#BDC3C7',
  },
  cell: {
    width: '33.33%',
    height: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D5D8DC',
  },
  status: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 20,
  },
  resetButton: {
    padding: 10,
    backgroundColor: '#3498DB',
    borderRadius: 5,
  },
  resetText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
