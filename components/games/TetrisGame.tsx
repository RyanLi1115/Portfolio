/**
 * TetrisGame 组件 - 俄罗斯方块游戏
 * 
 * 职责：
 * - 实现经典俄罗斯方块游戏逻辑
 * - 使用Canvas API进行游戏渲染
 * - 处理键盘控制和游戏状态
 */

"use client";

import { useEffect, useRef, useState, useCallback } from 'react';

interface Position {
  x: number;
  y: number;
}

interface TetrisPiece {
  shape: number[][];
  color: string;
}

interface GameState {
  board: string[][];
  currentPiece: TetrisPiece;
  currentPosition: Position;
  nextPiece: TetrisPiece;
  score: number;
  lines: number;
  level: number;
  gameOver: boolean;
  paused: boolean;
  gameStarted: boolean;
}

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;
const CELL_SIZE = 25;

// 俄罗斯方块形状定义
const PIECES: TetrisPiece[] = [
  { shape: [[1, 1, 1, 1]], color: '#00f5ff' }, // I
  { shape: [[1, 1], [1, 1]], color: '#ffff00' }, // O
  { shape: [[0, 1, 0], [1, 1, 1]], color: '#800080' }, // T
  { shape: [[0, 1, 1], [1, 1, 0]], color: '#00ff00' }, // S
  { shape: [[1, 1, 0], [0, 1, 1]], color: '#ff0000' }, // Z
  { shape: [[1, 0, 0], [1, 1, 1]], color: '#ff8c00' }, // L
  { shape: [[0, 0, 1], [1, 1, 1]], color: '#0000ff' }, // J
];

export default function TetrisGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameLoopRef = useRef<number>();
  const [gameState, setGameState] = useState<GameState>({
    board: Array(BOARD_HEIGHT).fill(null).map(() => Array(BOARD_WIDTH).fill('')),
    currentPiece: PIECES[0],
    currentPosition: { x: 4, y: 0 },
    nextPiece: PIECES[1],
    score: 0,
    lines: 0,
    level: 1,
    gameOver: false,
    paused: false,
    gameStarted: false
  });

  // 旋转方块
  const rotatePiece = (piece: TetrisPiece): TetrisPiece => {
    const rotated = piece.shape[0].map((_, i) => 
      piece.shape.map(row => row[i]).reverse()
    );
    return { ...piece, shape: rotated };
  };

  // 检查碰撞
  const checkCollision = (piece: TetrisPiece, pos: Position, board: string[][]): boolean => {
    for (let y = 0; y < piece.shape.length; y++) {
      for (let x = 0; x < piece.shape[y].length; x++) {
        if (piece.shape[y][x]) {
          const newX = pos.x + x;
          const newY = pos.y + y;
          
          if (
            newX < 0 || newX >= BOARD_WIDTH ||
            newY >= BOARD_HEIGHT ||
            (newY >= 0 && board[newY][newX])
          ) {
            return true;
          }
        }
      }
    }
    return false;
  };

  // 放置方块
  const placePiece = (piece: TetrisPiece, pos: Position, board: string[][]) => {
    const newBoard = board.map(row => [...row]);
    for (let y = 0; y < piece.shape.length; y++) {
      for (let x = 0; x < piece.shape[y].length; x++) {
        if (piece.shape[y][x]) {
          const boardY = pos.y + y;
          const boardX = pos.x + x;
          if (boardY >= 0) {
            newBoard[boardY][boardX] = piece.color;
          }
        }
      }
    }
    return newBoard;
  };

  // 清除完整的行
  const clearLines = (board: string[][]): { newBoard: string[][], linesCleared: number } => {
    const newBoard = board.filter(row => row.some(cell => cell === ''));
    const linesCleared = BOARD_HEIGHT - newBoard.length;
    
    // 在顶部添加新的空行
    while (newBoard.length < BOARD_HEIGHT) {
      newBoard.unshift(Array(BOARD_WIDTH).fill(''));
    }
    
    return { newBoard, linesCleared };
  };

  // 生成新方块
  const getRandomPiece = (): TetrisPiece => {
    return PIECES[Math.floor(Math.random() * PIECES.length)];
  };

  // 游戏主循环
  const gameLoop = useCallback(() => {
    setGameState(prevState => {
      if (prevState.gameOver || prevState.paused || !prevState.gameStarted) return prevState;

      const newPos = { ...prevState.currentPosition };
      newPos.y += 1;

      // 检查是否可以向下移动
      if (checkCollision(prevState.currentPiece, newPos, prevState.board)) {
        // 放置当前方块
        const newBoard = placePiece(prevState.currentPiece, prevState.currentPosition, prevState.board);
        
        // 清除完整的行
        const { newBoard: clearedBoard, linesCleared } = clearLines(newBoard);
        
        // 计算新分数和等级
        const newLines = prevState.lines + linesCleared;
        const newScore = prevState.score + linesCleared * 100 * prevState.level;
        const newLevel = Math.floor(newLines / 10) + 1;
        
        // 检查游戏结束
        if (checkCollision(prevState.currentPiece, { x: 4, y: 0 }, clearedBoard)) {
          return { ...prevState, gameOver: true };
        }
        
        // 生成新方块
        return {
          ...prevState,
          board: clearedBoard,
          currentPiece: prevState.nextPiece,
          currentPosition: { x: 4, y: 0 },
          nextPiece: getRandomPiece(),
          score: newScore,
          lines: newLines,
          level: newLevel
        };
      } else {
        return { ...prevState, currentPosition: newPos };
      }
    });
  }, []);

  // 键盘控制
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameState.gameOver || !gameState.gameStarted) return;

      setGameState(prevState => {
        let newPos = { ...prevState.currentPosition };
        let newPiece = prevState.currentPiece;

        switch (e.key) {
          case 'ArrowLeft':
            e.preventDefault();
            newPos.x -= 1;
            if (!checkCollision(newPiece, newPos, prevState.board)) {
              return { ...prevState, currentPosition: newPos };
            }
            break;
          case 'ArrowRight':
            e.preventDefault();
            newPos.x += 1;
            if (!checkCollision(newPiece, newPos, prevState.board)) {
              return { ...prevState, currentPosition: newPos };
            }
            break;
          case 'ArrowDown':
            e.preventDefault();
            newPos.y += 1;
            if (!checkCollision(newPiece, newPos, prevState.board)) {
              return { ...prevState, currentPosition: newPos };
            }
            break;
          case 'ArrowUp':
            e.preventDefault();
            const rotated = rotatePiece(newPiece);
            if (!checkCollision(rotated, newPos, prevState.board)) {
              return { ...prevState, currentPiece: rotated };
            }
            break;
          case ' ':
            e.preventDefault();
            return { ...prevState, paused: !prevState.paused };
        }
        return prevState;
      });
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameState.gameOver, gameState.gameStarted]);

  // 游戏循环
  useEffect(() => {
    if (!gameState.gameOver && !gameState.paused && gameState.gameStarted) {
      const speed = Math.max(50, 500 - (gameState.level - 1) * 50);
      gameLoopRef.current = window.setInterval(gameLoop, speed);
    } else {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    }

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [gameLoop, gameState.gameOver, gameState.paused, gameState.gameStarted, gameState.level]);

  // 渲染游戏
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const canvasWidth = BOARD_WIDTH * CELL_SIZE;
    const canvasHeight = BOARD_HEIGHT * CELL_SIZE;

    // 清空画布
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // 绘制游戏板
    for (let y = 0; y < BOARD_HEIGHT; y++) {
      for (let x = 0; x < BOARD_WIDTH; x++) {
        if (gameState.board[y][x]) {
          ctx.fillStyle = gameState.board[y][x];
          ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
          ctx.strokeStyle = '#333';
          ctx.strokeRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }
      }
    }

    // 绘制当前方块
    for (let y = 0; y < gameState.currentPiece.shape.length; y++) {
      for (let x = 0; x < gameState.currentPiece.shape[y].length; x++) {
        if (gameState.currentPiece.shape[y][x]) {
          const drawX = (gameState.currentPosition.x + x) * CELL_SIZE;
          const drawY = (gameState.currentPosition.y + y) * CELL_SIZE;
          
          if (drawY >= 0) {
            ctx.fillStyle = gameState.currentPiece.color;
            ctx.fillRect(drawX, drawY, CELL_SIZE, CELL_SIZE);
            ctx.strokeStyle = '#333';
            ctx.strokeRect(drawX, drawY, CELL_SIZE, CELL_SIZE);
          }
        }
      }
    }
  }, [gameState]);

  // 开始游戏
  const startGame = () => {
    setGameState(prev => ({ ...prev, gameStarted: true }));
  };

  const restartGame = () => {
    setGameState({
      board: Array(BOARD_HEIGHT).fill(null).map(() => Array(BOARD_WIDTH).fill('')),
      currentPiece: getRandomPiece(),
      currentPosition: { x: 4, y: 0 },
      nextPiece: getRandomPiece(),
      score: 0,
      lines: 0,
      level: 1,
      gameOver: false,
      paused: false,
      gameStarted: false
    });
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {!gameState.gameStarted && (
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <h3 className="text-white text-xl font-bold mb-4">Tetris Game</h3>
          <p className="text-gray-300 mb-4">
            Use arrow keys to move and rotate pieces. Clear lines to score points and level up!
          </p>
          <button
            onClick={startGame}
            className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition-colors font-medium"
          >
            Start Game
          </button>
        </div>
      )}

      {gameState.gameStarted && (
        <>
          <div className="flex justify-between w-full max-w-md">
            <div className="text-white">
              <div>Score: {gameState.score}</div>
              <div>Lines: {gameState.lines}</div>
              <div>Level: {gameState.level}</div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setGameState(prev => ({ ...prev, paused: !prev.paused }))}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
              >
                {gameState.paused ? 'Resume' : 'Pause'}
              </button>
              <button
                onClick={restartGame}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
              >
                Restart
              </button>
            </div>
          </div>
      
          <canvas
            ref={canvasRef}
            width={BOARD_WIDTH * CELL_SIZE}
            height={BOARD_HEIGHT * CELL_SIZE}
            className="border border-gray-600 rounded"
          />
          
          {gameState.gameOver && (
            <div className="text-center text-white">
              <div className="text-xl font-bold mb-2">Game Over!</div>
              <div>Final Score: {gameState.score}</div>
            </div>
          )}
          
          {gameState.paused && !gameState.gameOver && (
            <div className="text-center text-white text-xl font-bold">
              PAUSED
            </div>
          )}
          
          <div className="text-white text-sm text-center max-w-md">
            <p>Arrow keys: Move/Rotate</p>
            <p>Spacebar: Pause/Resume</p>
            <p>Clear lines to score points!</p>
          </div>
        </>
      )}
    </div>
  );
}
