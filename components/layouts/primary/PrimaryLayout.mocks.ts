import { IPrimaryLayout } from './PrimaryLayout';

// For using in storybook

const base: IPrimaryLayout = {
  children: '{{component}}',
};

export const mockPrimaryLayoutProps = {
  base,
};
