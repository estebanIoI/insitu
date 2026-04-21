import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LOGOS } from "../../types/constants";
import { FaUsers, FaGithub, FaCrown, FaCode } from "react-icons/fa";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Developer {
  firstName: string;
  lastName: string;
  github: string;
  avatar: string;
}

const developers: Developer[] = [
  {
    firstName: "Jhon Esteban",
    lastName: "Josa Quinchoa",
    github: "https://github.com/esteban2oo1",
    avatar: "https://avatars.githubusercontent.com/u/115267707?v=4",
  },
  {
    firstName: "Maicol Sebastián",
    lastName: "Guerrero López",
    github: "https://github.com/mclguerrero",
    avatar: "https://avatars.githubusercontent.com/u/134365120?v=4",
  },
];

const shuffleArray = <T,>(array: T[]): T[] =>
  [...array].sort(() => Math.random() - 0.5);

export const DevelopersButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [shuffledDevelopers, setShuffledDevelopers] = useState<Developer[]>([]);

  useEffect(() => {
    setShuffledDevelopers(shuffleArray(developers));
  }, []);

  return (
    <>
      {/* Botón */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 text-gray-500 hover:text-blue-700 transition-all duration-200 transform hover:scale-105 text-sm group"
      >
        <div className="relative flex items-center justify-center w-5 h-5">
          <FaUsers
            size={18}
            className="text-gray-600 group-hover:text-blue-700 transition-colors"
          />
          <FaCode
            size={11}
            className="absolute -bottom-1 -right-1 text-blue-600 bg-white rounded-full shadow-sm"
          />
        </div>
        <span className="font-medium">Equipo</span>
      </button>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[92%] max-w-sm sm:max-w-md rounded-2xl shadow-2xl border border-gray-200/50 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-md p-0 overflow-hidden">
          <div className="overflow-y-auto max-h-[85dvh] px-5 py-5">
            <DialogHeader className="mb-4">
              <motion.img
                src={LOGOS.full}
                alt="Logo Institución Universitaria del Putumayo"
                className="h-12 sm:h-16 mx-auto mb-3 opacity-95"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
              />
              <DialogTitle className="text-center text-lg sm:text-xl font-bold text-gray-900 tracking-wide">
                Equipo de Desarrollo
              </DialogTitle>
            </DialogHeader>

            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 text-center"
            >
              {/* Líder */}
              <motion.div
                whileHover={{ y: -3, scale: 1.01 }}
                className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-yellow-300/60 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
              >
                <div className="absolute -top-2 -right-2 w-14 h-14 bg-yellow-400/10 rounded-full" />
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <FaCrown className="w-4 h-4 text-yellow-500" />
                    <p className="uppercase text-[10px] tracking-widest text-yellow-600 font-semibold">
                      Líder del Proyecto
                    </p>
                  </div>
                  <p className="text-base font-semibold text-gray-800 mb-0.5">
                    MSc. Jhon Henry Cuellar Portilla
                  </p>
                  <p className="text-sm text-gray-500">Director de proyecto</p>
                </div>
              </motion.div>

              {/* Separador */}
              <div className="relative flex items-center justify-center">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300/70 to-transparent" />
                <FaCode className="w-5 h-5 text-gray-400 bg-white p-1 absolute" />
              </div>

              {/* Desarrolladores */}
              <div className="p-4 rounded-2xl bg-white/70 border border-gray-200/60 shadow-sm">
                <p className="uppercase text-[10px] tracking-widest text-gray-500 mb-3">
                  Desarrolladores
                </p>

                <div className="space-y-2">
                  {shuffledDevelopers.map((dev, i) => (
                    <motion.a
                      key={i}
                      href={dev.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.015 }}
                      transition={{ type: "spring", stiffness: 120, damping: 15 }}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/70 active:bg-white/90 transition-colors"
                    >
                      <img
                        src={dev.avatar}
                        alt={`${dev.firstName} ${dev.lastName}`}
                        className="w-10 h-10 rounded-full border-2 border-gray-200 shadow-sm shrink-0"
                      />
                      <div className="text-left min-w-0">
                        <p className="font-medium text-gray-800 text-sm leading-tight">
                          {dev.firstName} {dev.lastName}
                        </p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <FaGithub className="w-3 h-3 text-sky-600 shrink-0" />
                          <span className="text-xs text-sky-600 truncate">GitHub</span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <p className="text-[11px] text-gray-400 tracking-wide pb-1">
                © {new Date().getFullYear()} Institución Universitaria del Putumayo
              </p>
            </motion.div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
