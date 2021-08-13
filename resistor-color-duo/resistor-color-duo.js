//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]

export const decodedValue = (colors = []) => {
  let sliced_colors = colors.slice(0,2);    
  return sliced_colors.reduce((resistor_value, color_value) => {    
    let index = COLORS.indexOf(color_value.toLowerCase());    
    if (index >= 0) {
      resistor_value = resistor_value + index.toString()
    }
    return Number(resistor_value)
  }, '');
};
