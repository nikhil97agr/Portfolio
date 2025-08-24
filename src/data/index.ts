import Java from '../assets/skills/java.png';
import Python from '../assets/skills/python.png';
import JavaScript from '../assets/skills/javascript.png';
import TypeScript from '../assets/skills/typescript.png';
import SpringBoot from '../assets/skills/springboot.png';
import Hibernate from '../assets/skills/hibernate.png';
import ReactJS from '../assets/skills/react.png';
import Flask from '../assets/skills/flask.svg';
import MySQL from '../assets/skills/mysql.png';
import DB2 from '../assets/skills/db2.png';
import PostgreSQL from '../assets/skills/postgresql.svg';
import Github from '../assets/skills/git.webp';
import BitBucket from '../assets/skills/bitbucket.png';
import Jenkins from '../assets/skills/jenkins.jpeg';
import Jira from '../assets/skills/jira.jpeg';
import Redis from '../assets/skills/redis.png';
import HTML from '../assets/skills/html.png';
import Windows from '../assets/skills/windows.png';
import Linux from '../assets/skills/linux.png';





export interface Experience {
    title: string;
    company: string;
    start: string;
    end: string;
    highlights: string[];
};
export interface Education {
    degree: string;
    school: string;
    start: string;
    end: string
};

export interface CompetitiveProgramming {
    platform: string;
    url: string;
    currentRating: number;
    maxRating: number;
    currentRank: string;
    maxRank: string
    problems?: number
    bestPerformance?: BestPerformance[]
}

export interface BestPerformance {
    rank: number;
    total: number;
    contest: string;
    rankList: string;
}

export interface Skill {
    title: string;
    skills: SkillType[];
}

export interface SkillType {
    title: string;
    image?: string;
}


export const EXPERIENCES: Experience[] = [
    {
        title: "Software Engineer II",
        company: "Akamai Technologies",
        start: "Mar 2024",
        end: "Present",
        highlights: [
            "Developed Akamai Cloud Pulse, a cloud-based SaaS observability dashboard using React JS under Akamai Cloud Manager",
            "Monitored real-time metrics (CPU, memory) for Akamai cloud services such as Linodes, databases, and load balancers",
            "Implemented graph-based data visualizations with filters and time granularity up to 1 minute to enhance performance monitoring and troubleshooting",
            "Built functionality to persist user-selected filters, reducing repetitive configuration actions and improving UX",
            "Created a Webex bot and a GitHub workflow to automate team notifications for new pull requests and failing test workflows",
            "Streamlined collaboration and code review processes through automation",
            "Refactored codebase to introduce reusable and scalable components, accelerating feature development across teams"
        ],
    },
    {
        title: "Senior Associate - Java Developer",
        company: "Morgan Stanley",
        start: "Feb 2023",
        end: "Mar 2024",
        highlights: [
            "Developed REST APIs using Java Spring Boot and DB2, implementing features such as time series analysis, stress coverage, and rates drill-through for risk monitoring",
            "Built a shared Java Gradle / Maven library to promote code reusability and reduce redundancy across three projects",
            "Created automated data quality check jobs to validate data consistency across multiple business units",
            "Resolved 5 + critical bugs and refactored legacy code, improving system reliability and maintainability",
            "Implemented caching to improve the API performance and reduce the execution of heavy queries and db calls",
            "Contributed to Agile workflows using Jira, Jenkins, Bitbucket, and Git",
            "Provided production support as Dev - on - Call to ensure system stability"
        ],
    },
    {
        title: "Software Engineer",
        company: "LTI Mindtree",
        start: "Oct 2020",
        end: "Feb 2023",
        highlights: [
            "Designed and developed an ROI Calculator for the sales team using Java, Spring Boot, MySQL, HTML/CSS/JavaScript, reducing manual calculation efforts",
            "Automated server monitoring with Python scripts tracking 15+ system resources, eliminating manual support efforts by 100%",
            "Led a 4-member team to automate deployment workflows on Linux servers, reducing manual deployment tasks by 80%",
            "Deployed and hosted two web applications using Nginx on Linux environments, ensuring reliable and scalable delivery"
        ],
    },
];


export const EDUCATIONS: Education[] = [
    { degree: "BE in Electrical Engineering", school: "Shri G.S. Institute of Tech and Science, Indore", start: "2016", end: "2020" },
];


export const COMPETITIVE_BADGES: CompetitiveProgramming[] = [
    {
        platform: "LeetCode",
        url: "https://leetcode.com/agrawalji/",
        currentRating: 2180,
        maxRating: 2284,
        currentRank: "Guardian",
        maxRank: "Guardian",
        problems: 2400,
        bestPerformance: [
            {
                rank: 546,
                total: 35000,
                contest: "Weekly Contest 462",
                rankList: "https://leetcode.com/contest/weekly-contest-462/ranking/22"
            },
            {
                rank: 911,
                total: 34000,
                contest: "Weekly Contest 461",
                rankList: "https://leetcode.com/contest/weekly-contest-461/ranking/37"
            },
            {
                rank: 620,
                total: 31500,
                contest: "Weekly Contest 459",
                rankList: "https://leetcode.com/contest/weekly-contest-459/ranking/25"
            },
            {
                rank: 339,
                total: 31600,
                contest: "Biweekly Contest 161",
                rankList: "https://leetcode.com/contest/biweekly-contest-161/ranking/14/"
            },
            {
                rank: 696,
                total: 27800,
                contest: "Biweekly Contest 159",
                rankList: "https://leetcode.com/contest/biweekly-contest-159/ranking/28"
            },
            {
                rank: 302,
                total: 26200,
                contest: "Weekly Contest 453",
                rankList: "https://leetcode.com/contest/weekly-contest-453/ranking/13"
            },
            {
                rank: 575,
                total: 23000,
                contest: "Weekly Contest 447",
                rankList: "https://leetcode.com/contest/weekly-contest-447/ranking/23"
            },
            {
                rank: 257,
                total: 31000,
                contest: "Biweekly Contest 151",
                rankList: "https://leetcode.com/contest/biweekly-contest-151/ranking/11"
            },
            {
                rank: 300,
                total: 30700,
                contest: "Weekly Contest 437",
                rankList: "https://leetcode.com/contest/weekly-contest-437/ranking/12"
            },
            {
                rank: 910,
                total: 33200,
                contest: "Biweekly Contest 149",
                rankList: "https://leetcode.com/contest/biweekly-contest-149/ranking/37"
            },
            {
                rank: 519,
                total: 21600,
                contest: "Biweekly Contest 146",
                rankList: "https://leetcode.com/contest/biweekly-contest-146/ranking/21"
            },
            {
                rank: 741,
                total: 23500,
                contest: "Biweekly Contest 145",
                rankList: "https://leetcode.com/contest/biweekly-contest-145/ranking/30"
            },
            {
                rank: 811,
                total: 22200,
                contest: "Weekly Contest 426",
                rankList: "https://leetcode.com/contest/weekly-contest-426/ranking/33"
            },
            {
                rank: 769,
                total: 26000,
                contest: "Weekly Contest 424",
                rankList: "https://leetcode.com/contest/weekly-contest-424/ranking/31"
            },
            {
                rank: 488,
                total: 35400,
                contest: "Weekly Contest 416",
                rankList: "https://leetcode.com/contest/weekly-contest-416/ranking/20"
            },
            {
                rank: 938,
                total: 37400,
                contest: "Weekly Contest 402",
                rankList: "https://leetcode.com/contest/weekly-contest-402/ranking/38"
            },
            {
                rank: 366,
                total: 32100,
                contest: "Weekly Contest 399",
                rankList: "https://leetcode.com/contest/weekly-contest-399/ranking/15"
            },
            {
                rank: 201,
                total: 30200,
                contest: "Biweekly Contest 131",
                rankList: "https://leetcode.com/contest/biweekly-contest-131/ranking/9"
            },
            {
                rank: 242,
                total: 31400,
                contest: "Weekly Contest 398",
                rankList: "https://leetcode.com/contest/weekly-contest-398/ranking/10"
            },
            {
                rank: 783,
                total: 28700,
                contest: "Weekly Contest 397",
                rankList: "https://leetcode.com/contest/weekly-contest-397/ranking/32"
            },
            {
                rank: 938,
                total: 29400,
                contest: "Weekly Contest 393",
                rankList: "https://leetcode.com/contest/weekly-contest-393/ranking/38"
            },
            {
                rank: 800,
                total: 28800,
                contest: "Biweekly Contest 128",
                rankList: "https://leetcode.com/contest/biweekly-contest-128/ranking/32"
            },
            {
                rank: 840,
                total: 32100,
                contest: "Weekly Contest 389",
                rankList: "https://leetcode.com/contest/weekly-contest-389/ranking/34"
            },
            {
                rank: 756,
                total: 24600,
                contest: "Weekly Contest 384",
                rankList: "https://leetcode.com/contest/weekly-contest-384/ranking/31"
            },
            {
                rank: 744,
                total: 24800,
                contest: "Weekly Contest 382",
                rankList: "https://leetcode.com/contest/weekly-contest-382/ranking/30"
            },
            {
                rank: 731,
                total: 24500,
                contest: "Weekly Contest 379",
                rankList: "https://leetcode.com/contest/weekly-contest-379/ranking/30"
            },
            {
                rank: 664,
                total: 23900,
                contest: "Biweekly Contest 120",
                rankList: "https://leetcode.com/contest/27/rank"
            },
            {
                rank: 147,
                total: 18600,
                contest: "Biweekly Contest 118",
                rankList: "https://leetcode.com/contest/biweekly-contest-118/ranking/6"
            },
            {
                rank: 407,
                total: 24200,
                contest: "Weekly Contest 367",
                rankList: "Weekly Contest 367"
            }
        ]

    },
    {
        platform: "CodeChef",
        url: "https://www.codechef.com/users/nikhil97agr",
        currentRating: 1836,
        maxRating: 1955,
        currentRank: "4 ⭐",
        maxRank: "4 ⭐"
    },
    {
        platform: "Codeforces",
        url: "https://codeforces.com/profile/nikhil97agra",
        currentRating: 1406,
        maxRating: 1534,
        currentRank: "Specialist",
        maxRank: "Specialist",
        bestPerformance: [
            {
                rank: 659,
                total: 14500,
                contest: "Codeforces Round 938 (Div. 3)",
                rankList: "https://codeforces.com/contest/1955/standings"
            },
            {
                rank: 332,
                total: 10800,
                contest: "Codeforces Round 927 (Div. 3)",
                rankList: "https://codeforces.com/contest/1932/standings"
            },
            {
                rank: 1113,
                total: 9500,
                contest: "Codeforces Round 911 (Div. 2)",
                rankList: "https://codeforces.com/contest/1900/standings"
            },
            {
                rank: 1259,
                total: 8000,
                contest: "Codeforces Round 868 (Div. 2)",
                rankList: "https://codeforces.com/contest/1823/standings"
            },
            {
                rank: 401,
                total: 10000,
                contest: "Codeforces Round 855 (Div. 3)",
                rankList: "https://codeforces.com/contest/1800/standings"
            },
            {
                rank: 1189,
                total: 6000,
                contest: "Codeforces Round 590 (Div. 3)",
                rankList: "https://codeforces.com/contest/1234/standings"
            }
        ]
    }
];


export const SKILLS: Skill[] = [
    {
        title: 'Programming Languages',
        skills: [
            { title: "Java", image: Java },
            { title: "Python", image: Python },
            { title: "Javascript", image: JavaScript },
            { title: "Typescript", image: TypeScript }
        ]
    },
    {
        title: "Frameworks",
        skills: [
            { title: "Spring Boot", image: SpringBoot },
            { title: "Hibernate", image: Hibernate },
            { title: "React JS", image: ReactJS },
            { title: "Flask", image: Flask }
        ]
    },
    {
        title: "Database",
        skills: [
            { title: "MySQL", image: MySQL },
            { title: "DB2", image: DB2 },
            { title: "PostgreSQL", image: PostgreSQL }
        ]
    },
    {
        title: "Tools and Technologies",
        skills: [
            { title: "Github", image: Github },
            { title: "BitBucket", image: BitBucket },
            { title: "Jenkins", image: Jenkins },
            { title: "Jira", image: Jira },
            { title: "Redis", image: Redis },
            { title: "HTML", image: HTML }
        ]
    },
    {
        title: "Operating Systems",
        skills: [
            { title: "Windows", image: Windows },
            { title: "Linux", image: Linux }
        ]
    },
    {
        title: "Other",
        skills: [
            { title: "Data Structures and Algorithms" },
            { title: "System Design" },
            { title: "Test Driven Development" },
            { title: "Mentorship" }
        ]
    }
]