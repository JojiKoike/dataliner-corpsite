import CategoryIcon from '../../../src/components/atoms/CategoryIcon.astro';

export default {
  component: CategoryIcon,
};

export const Outline = {
  args: {
    className: '',
  },
};

export const Filled = {
  args: {
    className: '',
    isFilled: true,
  },
};
