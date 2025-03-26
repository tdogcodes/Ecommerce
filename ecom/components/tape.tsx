'use client'
import { Fragment } from "react";
import { motion } from "framer-motion"

const words= ["20% of all sales go to Black Lives Matter","20% of all sales go to Black Lives Matter",
    "20% of all sales go to Black Lives Matter","20% of all sales go to Black Lives Matter",
    "20% of all sales go to Black Lives Matter","20% of all sales go to Black Lives Matter",
]

export const TapeSection = () => {
  return (
  <div className="py-4 lg:py-12 overflow-x-clip">
   <div className="bg-gradient-to-r border from-red-300 via-white to-sky-300  -rotate-3 -mx-1">
      <div className="flex" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}> 
          <motion.div initial={{x: '-50%'}} animate={{x: 0}} transition={{duration: 15, ease: "linear", repeat: Infinity}} className="flex flex-none gap-4 py-3">
          {Array.from({ length: 2 }).map((_,i)=> (
              <Fragment key={i}>
                {words.map((word,i)=>
                  (
                    <div key={i} className="inline-flex gap-4 items-center">
                      <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                    </div>
                  ))}
              </Fragment>
            ))}
          </motion.div>
      </div>
    </div>
  </div>
)};