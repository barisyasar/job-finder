// Job List
import { ScrollArea } from "../ui/scroll-area";
import JobItem from "./JobItem";

const TEMP_JOBS = [
  {
    companyName: "Tech Innovators Inc.",
    id: "1",
    description:
      "Develop cutting-edge technologies to enhance user experience.",
    name: "Software Engineer",
    createdAt: "2024-08-01T08:00:00Z",
    location: "San Francisco, CA",
    salary: "$120,000 - $150,000",
    keywords: ["software", "engineering", "technology", "development"],
  },
  {
    companyName: "Creative Solutions Ltd.",
    id: "2",
    description:
      "Design innovative marketing strategies to boost brand awareness.",
    name: "Marketing Manager",
    createdAt: "2024-08-02T09:00:00Z",
    location: "New York, NY",
    salary: "$80,000 - $100,000",
    keywords: ["marketing", "branding", "strategy", "management"],
  },
  {
    companyName: "HealthTech Enterprises",
    id: "3",
    description: "Lead projects to develop advanced healthcare technologies.",
    name: "Project Manager",
    createdAt: "2024-08-03T10:00:00Z",
    location: "Los Angeles, CA",
    salary: "$100,000 - $130,000",
    keywords: ["project management", "healthcare", "technology", "leadership"],
  },
  {
    companyName: "EcoFriendly Products",
    id: "4",
    description: "Manage supply chain operations for sustainable products.",
    name: "Supply Chain Coordinator",
    createdAt: "2024-08-04T11:00:00Z",
    location: "Chicago, IL",
    salary: "$70,000 - $90,000",
    keywords: ["supply chain", "coordination", "sustainability", "operations"],
  },
  {
    companyName: "Finance Gurus",
    id: "5",
    description: "Analyze financial data to provide actionable insights.",
    name: "Financial Analyst",
    createdAt: "2024-08-05T12:00:00Z",
    location: "Houston, TX",
    salary: "$85,000 - $110,000",
    keywords: ["finance", "analysis", "data", "insights"],
  },
  {
    companyName: "Education Hub",
    id: "6",
    description: "Develop engaging educational content for online platforms.",
    name: "Content Developer",
    createdAt: "2024-08-06T13:00:00Z",
    location: "Seattle, WA",
    salary: "$65,000 - $85,000",
    keywords: ["content development", "education", "online", "engagement"],
  },
  {
    companyName: "Retail World",
    id: "7",
    description: "Enhance customer experience and manage store operations.",
    name: "Store Manager",
    createdAt: "2024-08-07T14:00:00Z",
    location: "Miami, FL",
    salary: "$75,000 - $95,000",
    keywords: ["retail", "management", "customer service", "operations"],
  },
  {
    companyName: "CyberSecure Inc.",
    id: "8",
    description:
      "Protect information systems from cyber threats and vulnerabilities.",
    name: "Cybersecurity Specialist",
    createdAt: "2024-08-08T15:00:00Z",
    location: "Atlanta, GA",
    salary: "$110,000 - $140,000",
    keywords: [
      "cybersecurity",
      "information security",
      "threat management",
      "protection",
    ],
  },
  {
    companyName: "Design Studio",
    id: "9",
    description:
      "Create visually appealing designs for various digital platforms.",
    name: "Graphic Designer",
    createdAt: "2024-08-09T16:00:00Z",
    location: "Denver, CO",
    salary: "$60,000 - $80,000",
    keywords: ["design", "graphics", "digital", "creativity"],
  },
  {
    companyName: "Travel Experts",
    id: "10",
    description: "Plan and coordinate travel arrangements for clients.",
    name: "Travel Consultant",
    createdAt: "2024-08-10T17:00:00Z",
    location: "Boston, MA",
    salary: "$50,000 - $70,000",
    keywords: ["travel", "consulting", "coordination", "client services"],
  },
];

function JobList() {
  return (
    <div className="container my-3 gy-3">
      <ScrollArea className="sm:h-[calc(100vh-14rem)] md:h-[calc(100vh-15rem)]">
        {TEMP_JOBS.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </ScrollArea>
    </div>
  );
}

export default JobList;
