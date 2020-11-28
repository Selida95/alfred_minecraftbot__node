/*
 * ---------------------------------------
 * A.L.F.R.E.D | Minecraft Bot: Utilities
 * ---------------------------------------
 */

 // Dependencies

 // Define utilities object
 var util = {}

 utils.itemToString = (item) => {
   if (item) {
     return `${item.name} x ${item.count}`
   } else {
     return '(nothing)'
   }
 }

 // Export Module
 module.exports = util
