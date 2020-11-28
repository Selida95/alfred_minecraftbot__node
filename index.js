/*
 * -----------------------------------
 * A.L.F.R.E.D | Minecraft Bot: Index
 * -----------------------------------
 */

 // Dependencies
 const mineflayer = require('mineflayer')

 // Config
 const config = require('./config')

 const bot = mineflayer.createBot({
   host : config.minecraft.host,
   port : config.minecraft.port,
   username : config.minecraft.bot.username,
   password : config.minecraft.bot.password
 })

 bot.once('spawn', () => {
   bot.mcData = require('minecraft-data')(bot.version)
 })
