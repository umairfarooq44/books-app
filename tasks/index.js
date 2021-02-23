/* eslint-disable */
const formatDuration = require('./task1');
const connectDots = require('./task2');

console.log(formatDuration(31549103));
console.log(formatDuration(62));
console.log(formatDuration(3662));
// const input = `
//   a       b
//   e        
            
//   d       c
// `;
// const input = `
//   a  c    
//   e  d     
           
//      b    
// `;
const input = `
    a   
   e    
        
 d     b
        
         
    c   
`;
console.log(`"${connectDots(input)}"`);
