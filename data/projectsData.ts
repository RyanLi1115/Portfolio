/**
 * Projects Data - 项目数据 (示例版本)
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
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    type: "web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    imageUrl: "/galleryDemo1.jpg",
    demoUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/example/ecommerce",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Admin dashboard for product management",
      "Responsive design for all devices"
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
