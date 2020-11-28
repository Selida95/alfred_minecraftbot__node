/*
 * -----------------------------------
 * A.L.F.R.E.D | Minecraft Bot: Index
 * -----------------------------------
 */

 // Dependencies
 const MinecraftBot = require('./minecraft_bot')

 // Config
 const config = require('./config')

 const bot = new MinecraftBot({
   host : config.minecraft.host,
   port : config.minecraft.port,
   username : config.minecraft.bot.username,
   password : config.minecraft.bot.password,
   logErrors : false
 })

 bot.once('spawn', () => {
   bot.mcData = require('minecraft-data')(bot.version)
 })

 bot.on('physicTick', () => {
   // Life signs
   const entity = bot.nearestEntity()
   if (entity) bot.lookAt(entity.position.offset(0, entity.height, 0))
 })

 bot.on('chat', onchat(username, message))
