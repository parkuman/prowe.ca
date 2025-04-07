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
		title: "Software Development Engineer in Test (SDET)",
		company: { name: "Acre Software", url: "https://www.acresoftware.com/" },
		startDate: "September 2023",
		endDate: "Present",
		points: [
			"Helping to build the future of mortages in the UK 🇬🇧",
			"Build and maintain reliable CI/CD/CT pipelines to test a myriad of microservices",
			"Built and communicated a new system and process for flaky test management; succesffully reducing daily flakes from over 100 to just 5 per day.",
			"Spearheaded, planned, and implemented the migration from Cypress to Playwright for the company's E2E test suite",
			"Developed a selective test running system to save time and resources running E2E tests in CI.",
		],
	},
	{
		title: "Software Developer",
		company: { name: "Freelance", url: "https://prowe.ca/" },
		startDate: "April 2023",
		endDate: "Present",
		points: [
			"Develop and deploy websites for clients, showcasing proficiency in various full-stack environments and build tools, in addition to vanilla HTML, CSS, and JavaScript",
			"Collaborate closely with clients to understand their business objectives and translate those into intuitive, and performant web experiences.",
			"Proactively practice with emerging web technologies, continuously expanding technical knowledge, allowing for innovative new solutions to benefit the end-user.",
		],
	},
	{
		title: "AI & Computer Vision Developer",
		company: { name: "Queen's AutoDrive Team", url: "https://autodrive.engineering.queensu.ca/" },
		startDate: "Sept 2021",
		endDate: "April 2023",
		points: [
			"Designed and implemented 2D traffic light classification systems using ROS and Tensorflow for use in our autonomous vehicle for the SAE AutoDrive II Challenge",
			"Architected a GitHub actions documentation pipeline for the team's Python library.",
			"Developed the team's website in Next.js and a work breakdown structure tool using the JIRA API",
		],
	},
	{
		title: "Software Development Intern",
		company: { name: "Ericsson", url: "https://www.ericsson.com/" },
		startDate: "May 2021",
		endDate: "August 2022",
		points: [
			"Volunteered to lead full-stack development of a new VPN certificate system using TypeScript, React, NextJS, Docker, OpenVPN, and tested with Cypress. Our team of 4 interns developed a web app that allows Ericsson Response and the UN to securely manage access to private networks during disaster relief missions. Now used by Ericsson Response and UN Volunteers around the world.",
			"Designed, documented, and deployed a Kubernetes-scaled AI material prediction feature in Azure for Indoor Planner to predict floorplan materials given an image.",
			"Developed and unit tested new features for Ericsson Indoor Planner's .NET API.",
			"Doubled multithreaded performance of a Java RPC-based API",
		],
	},

	{
		title: "Software Development Intern",
		company: {
			name: "Distributive",
			url: "https://distributive.network/",
		},
		startDate: "July 2020",
		endDate: "April 2021",
		points: [
			"Led full stack development on a using TypeScript, Node, and GraphQL, implementing a feature for predicting & visualizing COVID case based on Ontario lockdown levels.",
			"Architected & implemented a solution for initialization of different web workers for Node & browser JavaScript runtimes. Now in production on a network of thousands of different computers with heterogenous compute capability.",
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
			"Led the operations of a 50+ member campus design team to build 6 robots to compete in the 2021 DJI International Robomaster competition in Shenzhen, ChinaLed the operations of a 50+ member design team to build 6 robots to compete in the 2021 DJI International Robomaster competition in Shenzhen, China",
			"Successfully led a team of 20+ members to train and integrate a custom object detection model using Tensorflow, SSD MobileNetV2, Python & OpenCV for detection and aiming at enemy robot armour plates",
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
			"Redesigned and developed the cucai.ca website using React and GatsbyRedesigned and developed the 2021.cucai.ca website using React and Gatsby",
			"Created branding guidelines, marketing material, and design plans using Figma to advertise North America's largest undergraduate AI conferenceCreated branding guidelines, marketing material, and design plans using Figma to advertise North America’s largest undergraduate AI conference",
		],
	},
];

export const technologies = [
	"TypeScript",
	"Rust",
	"Svelte",
	"React",
	"Python",
	"OpenCV",
	"WebAssembly",
	"Love<3",
];
