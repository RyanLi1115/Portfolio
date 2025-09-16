/**
 * BouncingBallGame 组件 - 基于原有Bouncing Ball Game的React版本
 * 
 * 职责：
 * - 保持原有游戏的所有功能和特性
 * - 鼠标控制地板移动
 * - 砖块碰撞检测
 * - 游戏结束条件
 */

"use client";

import { useEffect, useRef, useState, useCallback } from 'react';

interface Position {
  x: number;
  y: number;
}

interface Brick {
  x: number;
  y: number;
  width: number;
  height: number;
  visible: boolean;
}

interface GameState {
  circle: Position;
  radius: number;
  xSpeed: number;
  ySpeed: number;
  ground: Position;
  groundHeight: number;
  bricks: Brick[];
  count: number;
  gameOver: boolean;
  gameStarted: boolean;
}

const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 600;

export default function BouncingBallGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameLoopRef = useRef<number>();
  const [gameState, setGameState] = useState<GameState>({
    circle: { x: 160, y: 60 },
    radius: 20,
    xSpeed: 20,
    ySpeed: 20,
    ground: { x: 100, y: 500 },
    groundHeight: 5,
    bricks: [],
    count: 0,
    gameOver: false,
    gameStarted: false
  });

  // 生成随机数 - 基于原有getRandomArbitrary函数
  const getRandomArbitrary = (min: number, max: number) => {
    return min + Math.floor(Math.random() * (max - min));
  };

  // 初始化砖块 - 基于原有代码
  useEffect(() => {
    const initialBricks: Brick[] = [];
    for (let i = 0; i < 10; i++) {
      initialBricks.push({
        x: getRandomArbitrary(0, 950),
        y: getRandomArbitrary(0, 550),
        width: 50,
        height: 50,
        visible: true
      });
    }
    
    setGameState(prev => ({ ...prev, bricks: initialBricks }));
  }, []);

  // 砖块碰撞检测 - 基于原有touchingBall函数
  const touchingBall = useCallback((brick: Brick, ballX: number, ballY: number, radius: number) => {
    return (
      ballX >= brick.x - radius &&
      ballX <= brick.x + brick.width + radius &&
      ballY <= brick.y + brick.height + radius &&
      ballY >= brick.y - radius
    );
  }, []);

  // 游戏主循环 - 基于原有drawCircle函数
  const gameLoop = useCallback(() => {
    setGameState(prevState => {
      if (prevState.gameOver || !prevState.gameStarted) return prevState;

      let newCircle = { ...prevState.circle };
      let newXSpeed = prevState.xSpeed;
      let newYSpeed = prevState.ySpeed;
      let newBricks = [...prevState.bricks];
      let newCount = prevState.count;
      let gameOver = false;

      // 调试信息
      if (prevState.count !== newCount) {
        console.log('Count changed from', prevState.count, 'to', newCount);
      }

      // 检查球是否打到砖块
      newBricks.forEach((brick, index) => {
        if (brick.visible && touchingBall(brick, newCircle.x, newCircle.y, prevState.radius)) {
          newCount++;
          console.log('Brick destroyed! Count:', newCount, 'Ball position:', newCircle.x, newCircle.y, 'Brick position:', brick.x, brick.y);
          brick.visible = false;
          
          // 改变x, y方向速度，基于碰撞方向
          // 从下方撞击
          if (newCircle.y >= brick.y + brick.height) {
            newYSpeed *= -1;
          }
          // 从上方撞击
          else if (newCircle.y <= brick.y) {
            newYSpeed *= -1;
          }
          // 从左方撞击
          else if (newCircle.x <= brick.x) {
            newXSpeed *= -1;
          }
          // 从右方撞击
          else if (newCircle.x >= brick.x + brick.width) {
            newXSpeed *= -1;
          }

          // 检查游戏结束条件
          if (newCount === 10) {
            gameOver = true;
          }
        }
      });

      // 检查球是否打到橙色地板
      if (
        newCircle.x >= prevState.ground.x - prevState.radius &&
        newCircle.x <= prevState.ground.x + 200 + prevState.radius &&
        newCircle.y >= prevState.ground.y - prevState.radius &&
        newCircle.y <= prevState.ground.y + prevState.radius
      ) {
        if (newYSpeed > 0) {
          newCircle.y -= 50;
        } else {
          newCircle.y += 50;
        }
        newYSpeed *= -1;
      }

      // 检查球有没有打到边界
      // 右边边界
      if (newCircle.x >= CANVAS_WIDTH - prevState.radius) {
        newXSpeed *= -1;
      }
      // 左边边界
      if (newCircle.x <= prevState.radius) {
        newXSpeed *= -1;
      }
      // 上边边界
      if (newCircle.y <= prevState.radius) {
        newYSpeed *= -1;
      }
      // 下边边界
      if (newCircle.y >= CANVAS_HEIGHT - prevState.radius) {
        newYSpeed *= -1;
      }

      // 更新球的位置
      newCircle.x += newXSpeed;
      newCircle.y += newYSpeed;

      return {
        ...prevState,
        circle: newCircle,
        xSpeed: newXSpeed,
        ySpeed: newYSpeed,
        bricks: newBricks,
        count: newCount,
        gameOver: gameOver
      };
    });
  }, [touchingBall]);

  // 鼠标控制地板 - 基于原有代码
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      
      setGameState(prev => ({
        ...prev,
        ground: { ...prev.ground, x: mouseX }
      }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 游戏循环
  useEffect(() => {
    if (!gameState.gameOver && gameState.gameStarted) {
      gameLoopRef.current = window.setInterval(gameLoop, 25);
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
  }, [gameLoop, gameState.gameOver, gameState.gameStarted]);

  // 渲染游戏 - 基于原有drawCircle函数
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 画出黑色背景
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // 画出所有的砖块
    gameState.bricks.forEach((brick, index) => {
      if (brick.visible) {
        ctx.fillStyle = 'lightgreen';
        ctx.fillRect(brick.x, brick.y, brick.width, brick.height);
        // 调试：显示砖块编号
        ctx.fillStyle = 'white';
        ctx.font = '12px Arial';
        ctx.fillText(`${index}`, brick.x + 5, brick.y + 15);
      }
    });

    // 画出可控制的地板
    ctx.fillStyle = 'orange';
    ctx.fillRect(gameState.ground.x, gameState.ground.y, 200, gameState.groundHeight);

    // 画出圆球
    ctx.beginPath();
    ctx.arc(gameState.circle.x, gameState.circle.y, gameState.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'yellow';
    ctx.fill();
  }, [gameState]);

  // 开始游戏
  const startGame = () => {
    setGameState(prev => ({ ...prev, gameStarted: true }));
  };

  // 重启游戏
  const restartGame = () => {
    const initialBricks: Brick[] = [];
    for (let i = 0; i < 10; i++) {
      initialBricks.push({
        x: getRandomArbitrary(0, 950),
        y: getRandomArbitrary(0, 550),
        width: 50,
        height: 50,
        visible: true
      });
    }

    setGameState({
      circle: { x: 160, y: 60 },
      radius: 20,
      xSpeed: 20,
      ySpeed: 20,
      ground: { x: 100, y: 500 },
      groundHeight: 5,
      bricks: initialBricks,
      count: 0,
      gameOver: false,
      gameStarted: false
    });
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {!gameState.gameStarted && (
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <h3 className="text-white text-xl font-bold mb-4">Bouncing Ball Game</h3>
          <p className="text-gray-300 mb-4">
            Control the orange platform with your mouse to bounce the yellow ball and destroy all green bricks!
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
          <div className="flex justify-between w-full max-w-lg">
            <div className="text-white">
              <div>Bricks Destroyed: {gameState.count}/10</div>
              <div>Move mouse to control the orange platform</div>
            </div>
            <button
              onClick={restartGame}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              {gameState.gameOver ? 'Play Again' : 'Restart'}
            </button>
          </div>
      
          <canvas
            ref={canvasRef}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
            className="border border-gray-600 rounded bg-black"
          />
          
          {gameState.gameOver && (
            <div className="bg-gray-800 border-2 border-green-500 rounded-lg p-6 text-center">
              <div className="text-white text-xl font-bold mb-2">Game Complete!</div>
              <div className="text-white mb-4">You destroyed all 10 bricks!</div>
              <button
                onClick={restartGame}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                Play Again
              </button>
            </div>
          )}
          
          <div className="text-white text-sm text-center max-w-lg">
            <p>Move your mouse to control the orange platform</p>
            <p>Destroy all 10 green bricks to win!</p>
            <p>The yellow ball bounces off walls and bricks</p>
          </div>
        </>
      )}
    </div>
  );
}
