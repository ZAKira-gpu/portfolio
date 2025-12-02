import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "AI Engineer specializing in Computer Vision, NLP & LLMs",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Building intelligent solutions with PyTorch & TensorFlow",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Hoopoe App - AI-Powered News App",
    des: "A daily news application that delivers curated articles enhanced and powered by AI for personalized content discovery.",
    img: "/hoopoe.png",
    iconLists: ["/flutter.svg", "/fastapi.svg", "/supabase.svg", "/sql.svg", "/rive.svg"],
    link: "#", // Will be used for video popup
    sourceCode: "https://github.com/ZAKira-gpu/Hoopoe-App",
  },
  {
    id: 2,
    title: "Orama - AI-Powered Smart Surveillance System",
    des: "Smart surveillance system powered by AI that allows you to monitor your surveillance cameras with cloud storage and real-time alerts.",
    img: "/orama.png",
    iconLists: ["/yolo.svg", "/flutter.svg", "/firebasel.svg", "/sql.svg", "/tensorflow.svg", "/fastapi.svg"],
    link: "#",
    videoUrl: "https://res.cloudinary.com/dv6msjz0a/video/upload/v1764669190/Orama_App_Smart_Surveillance_System_gw27tu.mp4",
    sourceCode: "https://github.com/ZAKira-gpu",
  },
  {
    id: 3,
    title: "Optimizer App - AI-Powered Optimization Tool",
    des: "Smart optimization application powered by machine learning that helps analyze and optimize various processes with data-driven insights.",
    img: "/optimizer.png",
    iconLists: ["/flutter.svg", "/scikit-learn.svg", "/firebasel.svg", "/sql.svg"],
    link: "#",
    sourceCode: "https://github.com/ZAKira-gpu",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://app-iphone.netlify.app",
    sourceCode: "https://github.com/sanidhyy/apple-clone",
  },
] as const;

export const testimonials = [
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Martin Xang",
    title: "Fiverr Client",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Martin Xang",
    title: "Fiverr Client",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Martin Xang",
    title: "Fiverr Client",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Martin Xang",
    title: "Fiverr Client",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Martin Xang",
    title: "Fiverr Client",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Firebase",
    img: "/firebase.svg",
    nameImg: "/firebase.svg",
  },
  {
    id: 3,
    name: "Vercel",
    img: "/vercel.svg",
    nameImg: "/vercel.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "AI Trainer Specialist",
    desc: "Specialized in training and fine-tuning large language models and AI systems, focusing on data annotation, model evaluation, and performance optimization.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "AI Engineer - Mobile Development",
    desc: "Designed and developed AI-powered mobile applications for both iOS & Android platforms using Flutter and TensorFlow.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance AI Engineer",
    desc: "Led the development of AI-powered mobile applications, integrating computer vision and NLP models from concept to deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "AI Engineer - Computer Vision",
    desc: "Developed and deployed computer vision models using PyTorch and OpenCV for real-time object detection and image processing.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/ZAKira-gpu",
  },
  {
    name: "Twitter",
    img: "/twit.svg",
    link: "https://x.com/CpuZaki17831",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mohammed-chaib-draa-855535285",
  },
] as const;

export const techStack = {
  stack1: ["Flutter", "PyTorch", "TensorFlow"],
  stack2: ["Scikit-learn", "OpenCV", "NLP"],
} as const;
