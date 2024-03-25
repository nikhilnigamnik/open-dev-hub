import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const GitIcon = ({ className, size }) => {
  return (
    <FaGithub
      className={`rounded-full w-8 h-8 p-1 text-gray-400 ${className}`}
      size={size}
    />
  );
};

export const LinkedInIcon = ({ className, size }) => {
  return (
    <FaLinkedinIn
      className={` w-8 h-8 p-1 text-gray-400 ${className}`}
      size={size}
    />
  );
};

export const InstagramIcon = ({ className, size }) => {
  return (
    <FaInstagram
      className={`rounded w-8 h-8 p-1 text-gray-400 ${className}`}
      size={size}
    />
  );
};

export const TwitterIcon = ({ className, size }) => {
  return (
    <FaTwitter
      className={` w-8 h-8 p-1 text-gray-400 ${className}`}
      size={size}
    />
  );
};
