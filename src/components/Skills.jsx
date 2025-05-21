import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiC, SiPython, SiHtml5, SiCss3, SiJavascript,
  SiFlask, SiReact, SiTailwindcss, SiMysql, SiMongodb,
  SiGit, SiTensorflow, SiPytorch, SiPandas, SiNumpy, 
  SiTableau, SiScikitlearn
} from 'react-icons/si';
import { FaJava, FaStar, FaRegStar } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  // Skill ratings (1-5)
  const skillCategories = [
    {
      title: 'Languages',
      items: [
        { icon: <SiC />, rating: 4 },
        { icon: <FaJava />, rating: 2 },
        { icon: <SiPython />, rating: 5 },
        { icon: <SiHtml5 />, rating: 4 },
        { icon: <SiCss3 />, rating: 4 },
        { icon: <SiJavascript />, rating: 4 },
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Frameworks',
      items: [
        { icon: <SiFlask />, rating: 4 },
        { icon: <SiReact />, rating: 3 },
        { icon: <SiTailwindcss />, rating: 4 },
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Databases',
      items: [
        { icon: <SiMysql />, rating: 4 },
        { icon: <SiMongodb />, rating: 3 },
      ],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Tools',
      items: [
        { icon: <SiGit />, rating: 5 },
        { icon: <VscVscode />, rating: 5 },
        { icon: <SiTableau />, rating: 4 },
      ],
      gradient: 'from-yellow-500 to-amber-500'
    },
    {
      title: 'AI/ML/DS',
      items: [
        { icon: <SiTensorflow />, rating: 4 },
        { icon: <SiPytorch />, rating: 3 },
        { icon: <SiPandas />, rating: 5 },
        { icon: <SiNumpy />, rating: 5 },
        { icon: <SiScikitlearn />, rating: 4 },
      ],
      gradient: 'from-red-500 to-orange-500'
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center mt-1">
        {[...Array(5)].map((_, i) => (
          i < rating ? 
            <FaStar key={i} className="text-yellow-400 text-xs" /> : 
            <FaRegStar key={i} className="text-gray-400 text-xs" />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="w-full py-12 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-transparent bg-clip-text">
             My Professional Skills
          </h2>
        </motion.div>

        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row items-start"
            >
              <h3 className={`text-lg font-semibold mb-3 sm:mb-0 sm:mr-6 sm:w-36 flex-shrink-0 bg-gradient-to-br ${category.gradient} text-transparent bg-clip-text`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center w-12 h-12`}>
                      {React.cloneElement(skill.icon, { className: "text-xl text-white" })}
                    </div>
                    <StarRating rating={skill.rating} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;