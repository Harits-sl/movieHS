import format from 'dateformat';

const dateFormat = (date) => {
  return format(date, 'mmmm d, yyyy');
};

export default dateFormat;
