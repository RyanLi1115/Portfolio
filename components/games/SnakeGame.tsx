/**
 * SnakeGame 组件 - 基于原有snake-game的React版本
 * 
 * 职责：
 * - 保持原有游戏的所有功能和特性
 * - 支持难度选择（Easy/Medium/Hard）
 * - 边界环绕功能
 * - 最高分记录
 * - 游戏结束模态框
 */

"use client";

import { useEffect, useRef, useState, useCallback } from 'react';

interface Position {
  x: number;
  y: number;
}

interface GameState {
  snake: Position[];
  food: Position;
  direction: 'Up' | 'Down' | 'Left' | 'Right';
  gameOver: boolean;
  score: number;
  highScore: number;
  currentDifficulty: 'easy' | 'medium' | 'hard';
  gameSpeed: number;
  showDifficultyMenu: boolean;
}

const UNIT = 20;
const CANVAS_SIZE = 500;
const ROWS = CANVAS_SIZE / UNIT;
const COLUMNS = CANVAS_SIZE / UNIT;

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameLoopRef = useRef<number>();
  const [gameState, setGameState] = useState<GameState>({
    snake: [
      { x: 80, y: 0 },
      { x: 60, y: 0 },
      { x: 40, y: 0 },
      { x: 20, y: 0 }
    ],
    food: { x: 0, y: 0 },
    direction: 'Right',
    gameOver: false,
    score: 0,
    highScore: parseInt(localStorage.getItem('snakeHighestScore') || '0'),
    currentDifficulty: 'easy',
    gameSpeed: 150,
    showDifficultyMenu: true
  });

  // 生成食物位置 - 基于原有代码
  const generateFood = useCallback((snake: Position[]) => {
    let overlap = false;
    let new_x = 0;
    let new_y = 0;
    let attempts = 0;
    const maxAttempts = 100;
    
    do {
      new_x = Math.floor(Math.random() * COLUMNS) * UNIT;
      new_y = Math.floor(Math.random() * ROWS) * UNIT;
      
      // 检查是否与蛇重叠
      overlap = snake.some(segment => segment.x === new_x && segment.y === new_y);
      attempts++;
      
      if (attempts >= maxAttempts) {
        console.log('Warning: Could not find free spot for food after', maxAttempts, 'attempts');
        break;
      }
    } while (overlap);
    
    return { x: new_x, y: new_y };
  }, []);

  // 初始化食物
  useEffect(() => {
    if (gameState.showDifficultyMenu) return;
    
    const newFood = generateFood(gameState.snake);
    setGameState(prev => ({ ...prev, food: newFood }));
  }, [generateFood, gameState.showDifficultyMenu]);

  // 游戏主循环 - 基于原有drawGame函数
  const gameLoop = useCallback(() => {
    setGameState(prevState => {
      if (prevState.gameOver || prevState.showDifficultyMenu) return prevState;

      const newSnake = [...prevState.snake];
      const head = { ...newSnake[0] };

      // 根据方向移动蛇头
      switch (prevState.direction) {
        case 'Left':
          head.x -= UNIT;
          break;
        case 'Right':
          head.x += UNIT;
          break;
        case 'Up':
          head.y -= UNIT;
          break;
        case 'Down':
          head.y += UNIT;
          break;
      }

      // 边界环绕 - 基于原有代码
      if (head.x < 0) head.x = CANVAS_SIZE - UNIT;
      if (head.x >= CANVAS_SIZE) head.x = 0;
      if (head.y < 0) head.y = CANVAS_SIZE - UNIT;
      if (head.y >= CANVAS_SIZE) head.y = 0;

      newSnake.unshift(head);

      // 检查自碰撞
      for (let i = 1; i < newSnake.length; i++) {
        if (head.x === newSnake[i].x && head.y === newSnake[i].y) {
          return { ...prevState, gameOver: true };
        }
      }

      // 检查是否吃到食物
      if (head.x === prevState.food.x && head.y === prevState.food.y) {
        const newScore = prevState.score + 1;
        const newHighScore = Math.max(newScore, prevState.highScore);
        localStorage.setItem('snakeHighestScore', newHighScore.toString());
        
        // 生成新食物
        const newFood = generateFood(newSnake);
        
        return {
          ...prevState,
          snake: newSnake,
          food: newFood,
          score: newScore,
          highScore: newHighScore
        };
      } else {
        newSnake.pop();
      }

      return { ...prevState, snake: newSnake };
    });
  }, [generateFood]);

  // 键盘控制 - 基于原有代码
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameState.gameOver || gameState.showDifficultyMenu) return;

      setGameState(prevState => {
        switch (e.key) {
          case 'ArrowUp':
            e.preventDefault();
            return prevState.direction !== 'Down' ? { ...prevState, direction: 'Up' } : prevState;
          case 'ArrowDown':
            e.preventDefault();
            return prevState.direction !== 'Up' ? { ...prevState, direction: 'Down' } : prevState;
          case 'ArrowLeft':
            e.preventDefault();
            return prevState.direction !== 'Right' ? { ...prevState, direction: 'Left' } : prevState;
          case 'ArrowRight':
            e.preventDefault();
            return prevState.direction !== 'Left' ? { ...prevState, direction: 'Right' } : prevState;
        }
        return prevState;
      });
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameState.gameOver, gameState.showDifficultyMenu]);

  // 游戏循环
  useEffect(() => {
    if (!gameState.gameOver && !gameState.showDifficultyMenu) {
      gameLoopRef.current = window.setInterval(gameLoop, gameState.gameSpeed);
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
  }, [gameLoop, gameState.gameOver, gameState.showDifficultyMenu, gameState.gameSpeed]);

  // 渲染游戏 - 基于原有drawGame函数
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 清空画布
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    // 绘制食物 - 黄色
    ctx.fillStyle = 'yellow';
    ctx.fillRect(gameState.food.x, gameState.food.y, UNIT, UNIT);

    // 绘制蛇
    gameState.snake.forEach((segment, index) => {
      if (index === 0) {
        ctx.fillStyle = 'blue'; // 蛇头
      } else {
        ctx.fillStyle = 'lightgrey'; // 蛇身
      }
      ctx.strokeStyle = 'white';
      ctx.fillRect(segment.x, segment.y, UNIT, UNIT);
      ctx.strokeRect(segment.x, segment.y, UNIT, UNIT);
    });
  }, [gameState]);

  // 难度选择
  const selectDifficulty = (difficulty: 'easy' | 'medium' | 'hard') => {
    let gameSpeed = 150;
    switch (difficulty) {
      case 'easy':
        gameSpeed = 150;
        break;
      case 'medium':
        gameSpeed = 100;
        break;
      case 'hard':
        gameSpeed = 50;
        break;
    }

    setGameState(prev => ({
      ...prev,
      currentDifficulty: difficulty,
      gameSpeed: gameSpeed,
      showDifficultyMenu: false,
      gameOver: false,
      score: 0
    }));
  };

  // 重启游戏
  const restartGame = () => {
    setGameState(prev => ({
      ...prev,
      snake: [
        { x: 80, y: 0 },
        { x: 60, y: 0 },
        { x: 40, y: 0 },
        { x: 20, y: 0 }
      ],
      direction: 'Right',
      score: 0,
      gameOver: false,
      showDifficultyMenu: false
    }));
  };

  // 显示难度菜单
  const showDifficultyMenu = () => {
    setGameState(prev => ({
      ...prev,
      showDifficultyMenu: true,
      gameOver: false
    }));
  };

  // 游戏结束处理
  useEffect(() => {
    if (gameState.gameOver) {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    }
  }, [gameState.gameOver]);

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* 难度选择菜单 */}
      {gameState.showDifficultyMenu && (
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <h3 className="text-white text-xl font-bold mb-4">Choose Difficulty</h3>
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => selectDifficulty('easy')}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Easy (150ms)
            </button>
            <button
              onClick={() => selectDifficulty('medium')}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
            >
              Medium (100ms)
            </button>
            <button
              onClick={() => selectDifficulty('hard')}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Hard (50ms)
            </button>
          </div>
        </div>
      )}

      {/* 游戏界面 */}
      {!gameState.showDifficultyMenu && (
        <>
          <div className="flex justify-between w-full max-w-md">
            <div className="text-white">
              <div>Current Score: {gameState.score}</div>
              <div>Highest Score: {gameState.highScore}</div>
              <div>Difficulty: {gameState.currentDifficulty.charAt(0).toUpperCase() + gameState.currentDifficulty.slice(1)}</div>
            </div>
            <div className="flex flex-col space-y-2">
              <button
                onClick={restartGame}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-sm"
              >
                Start New Game
              </button>
              <button
                onClick={showDifficultyMenu}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
              >
                Change Difficulty
              </button>
            </div>
          </div>
          
          <canvas
            ref={canvasRef}
            width={CANVAS_SIZE}
            height={CANVAS_SIZE}
            className="border border-gray-600 rounded bg-black"
          />
          
          {gameState.gameOver && (
            <div className="bg-gray-800 border-2 border-green-500 rounded-lg p-6 text-center">
              <div className="text-white text-xl font-bold mb-2">
                {gameState.score > gameState.highScore ? 'New High Score!' : 'Game Over!'}
              </div>
              <div className="text-white mb-4">
                {gameState.score > gameState.highScore ? `New High Score: ${gameState.score}` : `Your Score: ${gameState.score}`}
              </div>
              <button
                onClick={restartGame}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                Play Again
              </button>
            </div>
          )}
          
          <div className="text-white text-sm text-center max-w-md">
            <p>Use arrow keys to control the snake</p>
            <p>Snake wraps around the edges</p>
            <p>Eat yellow food to grow and score points</p>
          </div>
        </>
      )}
    </div>
  );
}
