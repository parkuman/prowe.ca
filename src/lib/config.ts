import type NavLink from "$types/NavLink";
import type Experience from "$types/Experience";
import type Project from "$types/Project";

export const metadata = {
	title: "Parker Rowe - Engineer, Developer.",
	description: "Computer Engineer with a passion for Web and Computer Vision technologies.",
	baseUrl: import.meta.env.VITE_SITE_URL,
};

export const navLinks: NavLink[] = [
	{ href: "/", text: "About" },
	{ href: "/projects", text: "Projects" },
	{ href: "/blog", text: "Blog" },
];

export const projects: Project[] = [
	{
		title: "Looking Glass: Protecting Canadians in a Return to Community.",
		description:
			"Helped develop a dashboard with analytics to help inform decision making around the health and economic impact of COVID-19 policies.",
		date: "Jan 2021 - April 2021",
		image: "images/projects/looking-glass.png",
		technologies: ["NextJS", "TypeScript", "Docker", "React"],
		links: [
			"https://looking-glass.app/",
			"https://www.digitalsupercluster.ca/covid-19-program-page/looking-glass-protecting-canadians-in-a-return-to-community/",
		],
	},
	{
		title: "Canadian Undergraduate Conference on AI 2021 Website",
		description:
			"A completely revamped and overhauled site for the 2021 CUCAI Conference. Going from branding guidelines and ideas on Figma to creating a fully fledged site using React & Gatsby. Uses Netlify CMS to manage content if other conference organizers needed to change anything.",
		date: "F2020 - W2021",
		image: "images/projects/cucai.png",
		technologies: ["React", "Gatsby", "Javascript (ES6, JSX)", "GraphQL", "Netlify"],
		links: ["http://2021.cucai.ca/"],
	},
	{
		title: "Hackintosh - MacOS on a Huawei Laptop",
		description:
			"Had a really fun time doing a hackintosh + ssd upgrade for my Matebook X Pro 2018 for the first time. Using OpenCore + community made kernel extensions I've got the latest version of MacOS Big Sur dualbooting with Windows from the same drive. Everything is super stable and running well. Noticed battery life has been actually BETTER on MacOS than windows - and running cooler too. Huge credit goes to Profzei who maintains the repo for the Matebook X Pro hackintosh.",
		date: "Fall 2020",
		image: "images/projects/hackintosh.png",
		technologies: ["MacOS", "Windows", "OpenCore", "Kernel Extensions"],
		links: ["https://github.com/profzei/Matebook-X-Pro-2018"],
	},
	{
		title: "AlarMe, not your average alarm clock.",
		description:
			"An alarm clock you can't say no to! App-controlled alarm clock only disabled by an NFC terminal somewhere in your home. Made for MLH Hack At Home.",
		date: "May 2020",
		image: "images/projects/alarme.jpg",
		technologies: ["Flutter", "Dart", "Arduino", "NFC"],
		links: ["https://github.com/parkuman/AlarMe"],
	},
	{
		title: "Robot Plate Detection Model",
		description:
			"As AI team lead of Queens University's Robomaster Design Team, I led twenty students toward learning, designing and creating auto-targeting robot artificial intelligence. Using Tensorflow's Object Detection API we have created a detection algorithm to detect enemy robot hit plates. Automating this process has given us a considerable advantage against the competition, and we learned a ton in the process! We found that the way we labelled data, and differentiating between red & blue coloured plates had a considerable effect on how accurate our model was.",
		date: "December 2019",
		image: "images/projects/rm-ai.jpg",
		technologies: ["Python", "TensorFlow", "OpenCV", "Keras"],
		links: [
			"https://github.com/parkuman/Robomaster-AIM",
			"http://queensrobomaster.ca/",
			"https://youtu.be/Z8ung9pj-Ak",
		],
	},
];

export const experience: Experience[] = [
	{
		title: "Software Engineering Intern",
		company: { name: "Ericsson", url: "https://www.ericsson.com/" },
		startDate: "May 2021",
		endDate: "September 2022",
		points: [
			"Led Full-stack development of a new VPN certificate system using React, NextJS, Docker, and OpenVPN, for Ericsson Response and the UN to securely manage access to networks during disaster relief missions",
			"Designed & deployed a Kubernetes-scaled AI material prediction feature for Ericsson Indoor Planner to predict user-uploaded floorplan's materials",
			"Developed and create tests of new features for Ericsson Indoor Planner's backend API in C#",
		],
	},
	{
		title: "AI & Computer Vision Developer",
		company: { name: "Queen's AutoDrive Team", url: "https://autodrive.engineering.queensu.ca/" },
		startDate: "Sept 2021",
		endDate: "Present",
		points: [
			"Develop the team's Traffic Light Classifier ROS node for use in the SAE AD Challenge",
			"Architected a documentation pipeline for the team's Perception Python library",
			"Deployed the team's website and a work breakdown structure tool using the JIRA API",
		],
	},
	{
		title: "Software Developer Co-op",
		company: {
			name: "Kings Distributed Systems",
			url: "https://kingsds.network/",
		},
		startDate: "July 2020",
		endDate: "April 2021",
		points: [
			"Led Full-stack development on Looking Glass project, implementing a feature for predicting & visualizing COVID cases based on Ontario lockdown scenarios by city",
			"Architected a documentation pipeline for the team's Perception Python library",
			"Architected & implemented a solution for initialization of different compute worker environments in Node & vanilla web JavaScript. Now in production on a network of thousands of different computers with heterogenous compute capability",
		],
	},
	{
		title: "Vice Captain/AI Team Manager",
		company: {
			name: "Queen's Robomaster Design Team",
			url: "https://queensrobomaster.ca/",
		},
		startDate: "May 2019",
		endDate: "May 2021",
		points: [
			"Led the operations of a 50+ member campus design team to build 6 robots to compete in the 2021 DJI International Robomaster competition in Shenzhen, China",
			"Successfully trained and deployed a custom object detection model using Tensorflow, SSD MobileNetV2, Python & OpenCV to detect enemy robot armour",
			"Planned and led weekly team workshops for 20+ members, working toward the implementation of our plate detection model on a Nvidia Jetson Nano",
		],
	},
	{
		title: "Web Developer",
		company: {
			name: "Canadian Undergraduate Conference on AI",
			url: "https://2021.cucai.ca/",
		},
		startDate: "May 2020",
		endDate: "April 2021",
		points: [
			"Redesigned and developed the cucai.ca website using React and Gatsby",
			"Created branding guidelines, marketing material, and design plans using Figma to advertise North America's largest undergraduate AI conference",
		],
	},
];

export const technologies = [
	"TypeScript",
	"Rust",
	"Svelte",
	"React",
	"Python",
	"NextJS",
	"OpenCV",
	"WebAssembly",
	"Love<3",
];
