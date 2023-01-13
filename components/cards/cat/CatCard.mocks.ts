import { ICatCard } from './CatCard';

// For using in storybook

const base: ICatCard = {
  tag: 'Felines',
  title: `What's new in Cats`,
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!',
  author: 'Roman',
  time: '2h ago',
};

export const mockCatCardProps = {
  base,
};
