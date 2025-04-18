import React from 'react';
import Image from 'next/image';

const skills = {
  programming: [
    { name: "PHP", icon: "php", level: 95 },
    { name: "JavaScript", icon: "javascript", level: 60 },
    { name: "HTML", icon: "html5", level: 90 },
    { name: "CSS", icon: "css3", level: 90 },
  ],
  frameworks: [
    { name: "Laravel", icon: "laravel", level: 95 },
    { name: "Next.js", icon: "nextjs", level: 50 },
    { name: "Tailwind CSS", icon: "tailwindcss", level: 90 },
  ],
  database: [
    { name: "MySQL", icon: "mysql", level: 95 },
    { name: "Supabase", icon: "supabase", level: 20 },
  ],
  tools: [
    { name: "Git", icon: "git", level: 50 },
    { name: "React", icon: "react", level: 25 },
  ],
  editing: [
    { name: "Premiere Pro", icon: "premierepro", level: 90 },
    { name: "Photoshop", icon: "photoshop", level: 55 },
  ]
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
  supabase: "supabase-logo-icon.svg",
};

const getLevelText = (level: number) => {
  if (level < 40) return "Pemula";
  if (level < 70) return "Menengah";
  if (level < 90) return "Mahir";
  return "Expert";
};

const SkillBar = () => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {Object.entries(skills).map(([category, categorySkills]) => (
        <div
          key={category}
          className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30"
        >
          <h3 className="text-xl font-outfit font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent capitalize">
            {category.replace('_', ' ')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categorySkills.map((skill) => (
              <div
                key={skill.name}
                className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-colors duration-300"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <Image
                      src={iconMap[skill.icon]}
                      alt={skill.name}
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-200">{skill.name}</span>
                      <span className="text-sm text-gray-400">{getLevelText(skill.level)}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-700/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        style={{ width: `${skill.level}%`, transition: "width 0.8s ease-out" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBar;