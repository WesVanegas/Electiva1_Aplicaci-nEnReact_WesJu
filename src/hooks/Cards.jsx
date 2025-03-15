import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineLocationMarker,
  HiOutlineUserAdd,
  HiOutlineMail,
} from "react-icons/hi";
import { useMediaQuery } from "react-responsive";

export const ExpandableCard1 = ({ name, image, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [info, setInfo] = useState([]);
  const url = "https://rickandmortyapi.com/api/character/" + id;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClose = (e) => {
    if (e.target.id === "overlay") {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    const getInfo = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setInfo([...data]);
    };
    if (isExpanded) {
      getInfo();
    }
  }, [isExpanded]);

  return (
    <div className="relative flex justify-center items-center h-48 w-1/3">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            id="overlay"
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          />
        )}
      </AnimatePresence>

      <motion.div
        layout
        className={`bg-white shadow-lg rounded-lg p-6 z-50 mx-6 ${
          isExpanded ? "cursor-default" : "cursor-pointer"
        }`}
        onClick={!isExpanded ? handleToggle : null}
        initial={false}
        animate={{
          width: isExpanded ? (isMobile ? "350px" : "400px") : "300px",
          height: isExpanded ? "330px" : "120px",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div
          className={`flex ${
            isExpanded ? "flex-col items-center" : "items-center"
          }`}
        >
          <motion.img
            src={image}
            alt="Avatar"
            className="rounded-full shadow-md"
            initial={false}
            animate={{
              width: isExpanded ? "80px" : "64px",
              height: isExpanded ? "80px" : "64px",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <div
            className={`${isExpanded ? "text-center mt-4" : "text-left"} ${
              isExpanded ? "ml-0" : "ml-4"
            }`}
          >
            <motion.h2 className="text-lg font-semibold">{name}</motion.h2>
            <div
              className={`flex items-center ${
                isExpanded ? "justify-center" : "justify-start"
              } text-gray-600 mt-1`}
            >
              <HiOutlineLocationMarker className="text-teal-500 mr-1" />
              <motion.span>{info.specie}</motion.span>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 w-full"
            >
              <div className="flex flex-col items-center space-y-4">
                <button className="bg-teal-500 text-white px-4 py-2 w-64 sm:w-full flex items-center justify-center rounded-lg hover:bg-teal-600">
                  <HiOutlineUserAdd className="mr-2" />
                  Follow
                </button>
                <button className="bg-slate-900 text-white px-4 py-2 rounded-lg w-64 sm:w-full flex items-center justify-center hover:bg-gray-300 hover:text-slate-900">
                  <HiOutlineMail className="mr-2" />
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};