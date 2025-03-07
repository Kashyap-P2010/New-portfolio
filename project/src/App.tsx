import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Moon, Sun, Gamepad2, Blocks, Sword, Ghost, Bike, Sun as Gun, Instagram, Users, Code, Palette } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';
import { cn } from './lib/utils';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const carouselControls = useAnimation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const startCarousel = async () => {
    while (!isPaused) {
      await carouselControls.start({
        x: '-50%',
        transition: {
          duration: 20,
          ease: "linear"
        }
      });
      await carouselControls.set({ x: '0%' });
    }
  };

  useEffect(() => {
    if (!isPaused) {
      startCarousel();
    } else {
      carouselControls.stop();
    }
  }, [isPaused]);

  const webSkills = [
    { name: 'HTML5', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg' },
    { name: 'Flask', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg' },
    { name: 'jQuery', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
    { name: 'Bootstrap', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  ];

  const robloxSkills = [
    { 
      icon: Gamepad2,
      title: 'Roblox Development',
      desc: '5 years of Lua scripting and GUI design',
      animation: {
        rotateZ: [0, 10, -10, 0],
        transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity }
      }
    },
    {
      icon: Blocks,
      title: 'Tycoon Games',
      desc: 'Complex economy systems and progression mechanics',
      animation: {
        scale: [1, 1.1, 1],
        transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity }
      }
    },
    {
      icon: Sword,
      title: 'Combat Systems',
      desc: 'Engaging battle mechanics and player interactions',
      animation: {
        rotateZ: [0, 360],
        transition: { duration: 2, ease: "easeInOut", repeat: Infinity }
      }
    },
    {
      icon: Ghost,
      title: 'Horror Games',
      desc: 'Atmospheric and immersive experiences',
      animation: {
        y: [0, -10, 0],
        opacity: [1, 0.7, 1],
        transition: { duration: 2, ease: "easeInOut", repeat: Infinity }
      }
    },
    {
      icon: Gun,
      title: 'Weapon Systems',
      desc: 'Advanced gun mechanics and projectile physics',
      animation: {
        x: [0, 10, -10, 0],
        transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity }
      }
    },
    {
      icon: Bike,
      title: 'Vehicle Systems',
      desc: 'Realistic bike physics and controls',
      animation: {
        scale: [1, 1.2, 0.9, 1],
        transition: { duration: 2, ease: "easeInOut", repeat: Infinity }
      }
    },
  ];

  const games = [
    {
      title: "Anime Battlegrounds X",
      visits: "70M+",
      role: "Scripting/Cutscenes",
      link: "https://www.roblox.com/games/7655489843/JOHO-2-Anime-Battlegrounds-X",
      thumbnail: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/8fb19a7f34bf23e69701efa22a426a763f658f01_image.png?auto-format&fit=crop&q=80&w=1000",
      roleIcon: Code
    },
    {
      title: "Obscure HORROR",
      visits: "9.4M+",
      role: "Scripting/UI Design and Animations",
      link: "https://www.roblox.com/games/12970059795/OBSCURE-HORROR",
      thumbnail: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/1520f205f87bdc8f64aa9cec656bb0420c788a75_image.png?auto=format&fit=crop&q=80&w=1000",
      roleIcon: Palette
    },
    {
      title: "Boat Obby",
      visits: "9.1M+",
      role: "Scripting and UI",
      link: "https://www.roblox.com/games/95690184384612/Boat-Obby-2-Player-Obby",
      thumbnail: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/6bf7e8dd560d7d09b3c051bf67ef976c943e16c7_image.png?auto=format&fit=crop&q=80&w=1000",
      roleIcon: Code
    }
  ];

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            Zeshen
          </motion.h1>
          <div className="flex items-center gap-4">
            <motion.a
              href="https://instagram.com/zeshen.official"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: [1, 1.2, 1, 1.2],
                transition: {
                  duration: 0.3,
                  times: [0, 0.2, 0.5, 0.8],
                  repeat: 1
                }
              }}
              className="text-foreground/80 hover:text-foreground"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className={cn(
                "text-foreground/80 hover:text-foreground cursor-pointer",
                "w-8 h-8 flex items-center justify-center rounded-full",
                isDark ? "bg-white/10" : "bg-black/5"
              )}
            >
              <SiDiscord className="w-5 h-5" title="Discord: luvkeanureeves" />
            </motion.div>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
            >
              {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-24">
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center relative"
          >
            <motion.div
              className="absolute -z-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            />
            <motion.h1 
              className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
              animate={{
                backgroundPosition: ['0%', '100%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Roblox & Web Developer
            </motion.h1>
            <motion.p 
              className="text-xl text-foreground/80 max-w-2xl mx-auto"
              animate={floatingAnimation}
            >
              Crafting immersive digital experiences with 5 years of Roblox development
              and full-stack web expertise.
            </motion.p>
          </motion.div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Web Development Stack</h2>
          <div className="relative overflow-hidden py-10">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            <motion.div 
              className="relative"
              onHoverStart={() => setIsPaused(true)}
              onHoverEnd={() => setIsPaused(false)}
            >
              <motion.div
                className="flex gap-8"
                animate={carouselControls}
              >
                {[...webSkills, ...webSkills].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center w-24 h-24 bg-card rounded-xl p-4 border"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <img src={skill.image} alt={skill.name} className="w-12 h-12" />
                    <p className="text-sm mt-2">{skill.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Roblox Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {robloxSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover="hover"
                className="p-6 rounded-xl bg-card border backdrop-blur-sm relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  variants={{
                    hover: skill.animation
                  }}
                >
                  <skill.icon className="w-10 h-10 mb-4" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-foreground/70">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <motion.a
                key={index}
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative block"
              >
                <div className="relative h-64 overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                  <motion.img
                    src={game.thumbnail}
                    alt={game.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-primary-foreground/80" />
                      <span className="text-primary-foreground/80 text-sm">{game.visits} visits</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary-foreground mb-2">{game.title}</h3>
                    <div className="flex items-center gap-2">
                      <game.roleIcon className="w-4 h-4 text-primary-foreground/80" />
                      <p className="text-sm text-primary-foreground/80">{game.role}</p>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-bold mb-6"
            >
              Let's Create Something Amazing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-lg text-foreground/80 mb-8"
            >
              Whether it's a complex Roblox game or a modern web application,
              I'm ready to bring your vision to life.
            </motion.p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(var(--primary), 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-8 py-3 rounded-full font-medium relative overflow-hidden",
                "bg-primary text-primary-foreground",
                "hover:opacity-90 transition-opacity"
              )}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent"
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <span className="relative z-10">Get in Touch</span>
            </motion.button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;