const parseType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isType = (type) => ['work', 'home', 'personal'].includes(type);

  if (isType(type)) return type;
};

const parseIsFavourite = (value) => {
  if (typeof value === 'boolean') {
    return value;
  }
  
  if (typeof value === 'string') {    
    if (value.toLowerCase() === 'true') return true;
    if (value.toLowerCase() === 'false') return false;
  }
  
  return;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedType = parseType(type);
  const parsedIsFavourite = parseIsFavourite(isFavourite);  

  return {
    type: parsedType,
    isFavourite: parsedIsFavourite,    
  };
};