/**
 * Projects Data - 项目数据
 * 
 * 包含所有项目的详细信息
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'web' | 'game' | 'mobile' | 'desktop';
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  isPlayable?: boolean;
  gameComponent?: string; // 游戏组件名称
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Assertify (Lightweight TS Test Runner)",
    description: "A test framework built from scratch with Node.js and TypeScript to understand the core principles of Jest/Vitest, focusing on test discovery, sandboxed execution, and reporting.",
    type: "web",
    technologies: ["Node.js", "TypeScript", "vm module", "glob"],
    githubUrl: "https://github.com/RyanLi1115/Assertify",
    features: [
      "Overview: A test framework built from scratch with Node.js and TypeScript to understand the core principles of Jest/Vitest, focusing on test discovery, sandboxed execution, and reporting.",
      "Metrics: Implemented 5 core APIs ('describe', 'it', 'expect') and 7+ common assertion matchers ('toBe', 'toEqual','toBeTruthy').",
      "Core Implementation: Used Node.js 'vm' module for sandboxed execution contexts to prevent test contamination. Used 'fs' and 'glob' for automatic discovery and execution of '*.test.ts' files.",
      "Async & Efficiency: Supported 'async/await' for asynchronous test cases and kept the core implementation concise (within 500 lines of code)."
    ],
    isPlayable: false
  },
  {
    id: "2",
    title: "Snake Game",
    description: "A classic Snake game with difficulty levels and boundary wrapping. Features original gameplay mechanics with modern React implementation.",
    type: "game",
    technologies: ["React", "TypeScript", "Canvas API", "JavaScript"],
    features: [
      "Three difficulty levels (Easy/Medium/Hard)",
      "Boundary wrapping - snake goes through edges",
      "Score tracking and high score system",
      "Food collision detection with overlap prevention",
      "Self-collision detection",
      "Game over modal with restart functionality"
    ],
    isPlayable: true,
    gameComponent: "SnakeGame"
  },
  {
    id: "3",
    title: "Bouncing Ball Game",
    description: "An interactive ball physics game where you control a platform to bounce a ball and destroy all bricks.",
    type: "game",
    technologies: ["React", "TypeScript", "Canvas API", "JavaScript"],
    features: [
      "Mouse-controlled platform movement",
      "Realistic ball physics and collision detection",
      "10 randomly placed bricks to destroy",
      "Boundary collision with speed reversal",
      "Win condition when all bricks are destroyed",
      "Dynamic brick collision based on impact direction"
    ],
    isPlayable: true,
    gameComponent: "BouncingBallGame"
  },
  {
    id: "4",
    title: "Tetris Game",
    description: "A modern implementation of the classic Tetris puzzle game with smooth animations and intuitive controls.",
    type: "game",
    technologies: ["React", "TypeScript", "Canvas API", "JavaScript"],
    features: [
      "Classic Tetris gameplay with 7 piece types",
      "Line clearing and scoring system",
      "Level progression with increasing speed",
      "Keyboard controls (arrow keys, spacebar)",
      "Game pause and resume functionality",
      "Real-time collision detection and piece rotation"
    ],
    isPlayable: true,
    gameComponent: "TetrisGame"
  }
];
