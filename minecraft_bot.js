/*
 * -------------------------------------------
 * A.L.F.R.E.D | Minecraft Bot: Minecraft Bot
 * -------------------------------------------
 */

 // Dependencies
 const mineflayer = require('mineflayer')


 class Bot {
   constructor (options) {
     this.options = options
     this.bot = null
   }

   connect () {
     this.bot = mineflayer.createBot(this.options)
   }
 }

 // Export Class
 module.exports = Bot
