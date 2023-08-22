import { parseISO, isWithinInterval, subWeeks } from 'date-fns';

export const copyToClipboard = (text) => {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
  
    // Select and copy the text
    textarea.select();
    document.execCommand('copy');
  
    // Clean up
    document.body.removeChild(textarea);
  };


export const getPricePerSquareMetre = (price, sqMetre) => {
  return price / sqMetre
}

export const isListingNew = (dateListed) => {
  const currentDate = new Date()
  const oneWeekAgo = subWeeks(currentDate, 1);

  const formatDateListed = parseISO(dateListed);

  const isNewWithinLastWeek = isWithinInterval(formatDateListed, {
    start: oneWeekAgo,
    end: currentDate,
  });

  return isNewWithinLastWeek ? true : false

}