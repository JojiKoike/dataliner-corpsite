import TagIcon from '../../../src/components/atoms/TagIcon.astro';

export default {
  component: TagIcon,
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
