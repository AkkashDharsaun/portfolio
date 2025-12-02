import { motion } from "framer-motion";
import React from "react";
// import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import { Facebook, Github, Twitter, YouTube } from "../components/AllSvgs";
import { Linkedin } from "../components/Linkedin";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const socialLinks = [
  {
    icon: <Github width={25} height={25} />,
    link: "https://github.com/AkkashDharsaun"
  },
  {
    icon: <Twitter width={25} height={25} />,
    link: "https://twitter.com/code_bucks"  
  },
  {
    icon: <Linkedin width={25} height={25} />,
    link: "https://www.linkedin.com/in/akash-dharsaun-34a17429a"
  }
]
const SocialIcons = (props) => {
  return (
    <Icons>
      {socialLinks.map((social, index) => (
        <motion.div
          key={index}
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 1, delay: index * 0.2 }}
        >
          <a
            style={{ color: "inherit" }}
            target="_blank"
            rel="noopener noreferrer"
            href={social.link}
          >
            {social.icon}
          </a>
        </motion.div>
      ))}
      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
