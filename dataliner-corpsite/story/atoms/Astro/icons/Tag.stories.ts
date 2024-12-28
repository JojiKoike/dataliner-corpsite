import Tag from '../../../../src/components/atoms/icons/Tag.astro';

export default {
  component: Tag,
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
