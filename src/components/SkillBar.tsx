import React from 'react';
import Image from 'next/image';

const skills = [
  { name: "HTML", icon: "html5", level: 90 },
  { name: "CSS", icon: "css3", level: 90 },
  { name: "JavaScript", icon: "javascript", level: 70 },
  { name: "Tailwind CSS", icon: "tailwindcss", level: 90 },
  { name: "React", icon: "react", level: 45 },
  { name: "Next.js", icon: "nextjs", level: 50 },
  { name: "Laravel", icon: "laravel", level: 95 },
  { name: "MySQL", icon: "mysql", level: 95 },
  { name: "Git", icon: "git", level: 50 },
  { name: "PHP", icon: "php", level: 95 },
  { name: "Premiere Pro", icon: "premierepro", level: 90 },
  { name: "Photoshop", icon: "photoshop", level: 55 }
];

const getLevelText = (level: number) => {
  if (level < 40) return "Pemula";
  if (level < 70) return "Menengah";
  if (level < 90) return "Mahir";
  return "Expert";
};

const iconMap: Record<string, string> = {
  html5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  tailwindcss: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  premierepro: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
  photoshop: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
};

const SkillBar = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {skills.map((skill) => (
        <div key={skill.name} className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm border border-gray-700/30">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 flex items-center justify-center mr-3 bg-blue-500/20 rounded">
              <Image
                src={iconMap[skill.icon]}
                alt={skill.name}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <span className="font-medium text-gray-200">{skill.name}</span>
            <span className="ml-auto text-sm text-gray-400">{getLevelText(skill.level)}</span>
          </div>
          
          <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBar;