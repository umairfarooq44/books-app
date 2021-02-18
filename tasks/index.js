/* eslint-disable */
const formatDuration = require('./task1');
const connectDots = require('./task2');

console.log(formatDuration(31549103));
// const input = `
//   a       b
//   e        
            
//   d       c
// `;
// const input = `
//     a   
//    e    
        
//  d     b
        
         
//     c   
// `;
const input = `
    a   
       
        
 d    eb
        
         
    c   
`;
console.log(`"${connectDots(input)}"`);
