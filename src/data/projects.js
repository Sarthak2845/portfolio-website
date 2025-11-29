// projects.js
import { frontEndSkills, backEndSkills } from "./skills";

const projects = [
    {
        title: "Atlasify – Interactive Country Data App",
        description:
            "A dynamic web app that fetches and displays live country data using the REST Countries API. Features API integration, optimized state management, and smooth UI for exploring nations.",
        skills: [
            frontEndSkills.find(s => s.name === "React"),
            frontEndSkills.find(s => s.name === "JavaScript"),
            frontEndSkills.find(s => s.name === "Tailwind CSS"),
            backEndSkills.find(s => s.name === "Node.js")
        ],
        previewImg: "/images/atlasify.png",
        githubLink: "https://github.com/Sarthak2845/Atlasify-Country-API-App",
        liveLink: "https://atlasify.netlify.app/",
    },
    {
        title: "Atmos Monitor – Real-Time Weather Tracker",
        description:
            "React-based weather app displaying live temperature, humidity, and conditions using OpenWeather API. Supports modular components, error handling, and responsive design with real-time updates.",
        skills: [
            frontEndSkills.find(s => s.name === "React"),
            frontEndSkills.find(s => s.name === "JavaScript"),
            frontEndSkills.find(s => s.name === "Tailwind CSS")
        ],
        previewImg: "/images/atmos-monitor.png",
        githubLink: "https://github.com/Sarthak2845/WeatherApp",
        liveLink: "https://atmosmonitor.netlify.app/",
    },
    {
        title: "Mind Metrics – Smart Stress Detection App",
        description:
            "Interactive web app that detects stress levels using questionnaire responses and HRV data from Google Fit API. Built with React and Tailwind, with planned smartwatch integration for real-time stress analysis.",
        skills: [
            frontEndSkills.find(s => s.name === "React"),
            frontEndSkills.find(s => s.name === "Tailwind CSS"),
            backEndSkills.find(s => s.name === "Node.js"),
            backEndSkills.find(s => s.name === "Express.js"),
            backEndSkills.find(s => s.name === "Oauth"),
        ],
        previewImg: "/images/mind-metrics.png",
        githubLink: "https://github.com/Sarthak2845/MindMetrics",
        liveLink: "https://mindmetricss.netlify.app/",
    },
    {
        title: "StargazeX – Community-driven Astronomy Platform",
        description:
            "Full-stack platform for astronomy enthusiasts featuring telescope-sharing, solar flare forecasts, and events. Includes secure authentication, AI-powered solar flare prediction, and real-time alerts.",
        skills: [
            frontEndSkills.find(s => s.name === "React"),
            frontEndSkills.find(s => s.name === "Tailwind CSS"),
            backEndSkills.find(s => s.name === "Node.js"),
            backEndSkills.find(s => s.name === "Express.js"),
            backEndSkills.find(s => s.name === "Firebase"),
            frontEndSkills.find(s => s.name === "Framer Motion"),
        ],
        previewImg: "/images/stargazex.png",
        githubLink: "https://github.com/Sarthak2845/StargazeX",
        liveLink: "https://stargazex.netlify.app/",
    },
    {
        title: "BloomBuddy – AI-Powered Plant Alchemist",
        description:
            "A cross-platform mobile app for AI-driven plant identification, personalized care, and sustainable gardening, built with React Native (Expo Router), Firebase, and PlantNet API.",
        skills: [
            frontEndSkills.find(s => s.name === "React Native"), 
            frontEndSkills.find(s => s.name === "Expo"),         
            frontEndSkills.find(s => s.name === "TypeScript"),   
            backEndSkills.find(s => s.name === "Firebase"),
        ],
        previewImg: "/images/bloombuddy.png", 
        githubLink: "https://github.com/Sarthak2845/BloomBuddy", 
        liveLink: "https://expo.dev/accounts/avinash_shetty1/projects/BloomFrontend/builds/50f4da4c-4111-404e-8305-88dc98417d76", 
    },
];

export default projects;