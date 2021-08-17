//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {     
  let msg = message.trim();
  let isAsking = msg.endsWith('?');
  let isUpper = msg === msg.toUpperCase() && /.?[A-Z]+.?/.test(msg);
  let isEmpty = msg === '';

  if (isAsking){
    return isUpper ? "Calm down, I know what I'm doing!" : "Sure.";
  }else if(!isEmpty){
    return isUpper ? "Whoa, chill out!" : "Whatever.";
  }  
  return "Fine. Be that way!"
};
