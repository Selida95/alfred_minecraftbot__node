/*
 * -----------------------------------
 * A.L.F.R.E.D | Minecraft Bot: Index
 * -----------------------------------
 */

 // Dependencies
 const mineflayer = require('mineflayer')
 const { pathfinder } = require('mineflayer-pathfinder')
 const commands = require('./lib/command_handler')

 // Config
 const config = require('./config')

 const bot = mineflayer.createBot({
   host : config.minecraft.host,
   port : config.minecraft.port,
   username : config.minecraft.bot.username,
   password : config.minecraft.bot.password
 })

 bot.loadPlugin(pathfinder)

 bot.once('spawn', () => {
   bot.mcData = require('minecraft-data')(bot.version)
   bot.taskState = false
   commands.load(bot)
 })

 bot.on('physicTick', () => {
   // Life signs
   const entity = bot.nearestEntity()
   if (entity && bot.taskState === false) bot.lookAt(entity.position.offset(0, entity.height, 0))
 })

 bot.on('chat', (username, message) => {
   if (username === bot.username) return;
   if (username.toLowerCase() !== 'selida') return

   const args = message.toLowerCase().trim().split(/ +/);
   // Remove bot wake word.
   //args.splice(args.indexOf(config.bot.wake_word), 1);

   const command = args.shift().toLowerCase();

   if (!bot.commands.has(command)) return;

   try {
     bot.commands.get(command).execute(bot, args, username);
   } catch (error) {
     console.error(error);
     bot.chat('There was an error trying to execute that command!');
   }
 })

 bot.on('sleep', () => {
   bot.chat('Good night!')
 })
 bot.on('wake', () => {
   bot.chat('Good morning!')
 })



 var readline = require('readline');
 var rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
   terminal: false
 });

 rl.on('line', (line) => {
     bot.chat(line)
 })
