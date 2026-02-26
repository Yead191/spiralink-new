import {
  LuHeadphones,
  LuLanguages,
  LuClock,
  LuStar,
  LuHeart,
  LuZap,
} from "react-icons/lu";

const step1 = {
  step: "Step 1",
  title: "Operational intake with the support team",
  description:
    "The process starts with structured intake sessions led by humans.",
  highlightTitle: "We work directly with:",
  points: ["Operations managers", "Team leads", "Frontline agents"],
  footer: [
    "Together, we document how inbound calls actually happen day to day.",
  ],
  secondaryHighlightTitle: "This includes:",
  secondaryPoints: [
    "Common call reasons",
    "Frequent variations",
    "Edge cases",
    "Escalation moments",
    "Language and tone expectations",
  ],
  closing:
    "The goal is to capture how the operation truly functions before designing any AI behavior.",
};

const step2 = {
  step: "Step 2",
  title: "System analysis and operational dependencies",
  description:
    "In parallel, we analyze the systems the voice agent needs to work with.",
  highlightTitle: "This includes understanding:",
  points: [
    "Where customer data lives",
    "Which systems agents use during calls",
    "What information must be retrieved in real time",
    "Which actions must be performed during a conversation",
  ],
  footer: [
    "The voice agent is not limited to talking.",
    "It must be able to read from systems, trigger updates, and make controlled changes where required.",
    "This analysis defines what the voice agent can safely and reliably do inside the operation.",
  ],
};
const step3 = {
  step: "Step 3",
  title: "Designing the call logic",
  highlightTitle: "This includes:",
  points: [
    "When a human must take over",
    "How calls start",
    "Where decisions are made",
    "Which paths are possible",
    "How calls are considered resolved",
  ],
  footer: [
    "This creates a clear operational framework that mirrors real support behavior.",
    "AI is later placed inside this structure.",
  ],
};
const step4 = {
  step: "Step 4",
  title: "Coordinating multiple agents within one system",
  description: "A production voicebot is not a single entity.",
  highlightTitle:
    "Behind the scenes, multiple specialized agents work together: ",
  points: [
    "One manages the conversation flow",
    "Others retrieve or update information in systems",
    "Others monitor risk, uncertainty, or handover conditions",
  ],
  footer: [
    "These agents operate in coordination, each with a defined responsibility.",
    "This allows the voicebot to handle complex tasks without losing control or context.",
  ],
};
const step5 = {
  step: "Step 5",
  title: "Training the voice agent within defined boundaries",
  description:
    "The voice agent is trained to operate inside the predefined call logic and system constraints.",
  highlightTitle: "It is designed to: ",
  points: [
    "Ask the necessary follow-up questions",
    "Retrieve accurate information",
    "Trigger approved actions in systems",
    "Recognize uncertainty or risk",
    "Remain within allowed responses",
  ],
  footer: [
    "The agent does not improvise beyond its role.",
    "Its behavior is constrained by the rules of the operation.",
  ],
};
const step6 = {
  step: "Step 6",
  title: "Engineering human handover points",
  description: "Transfer to a human agent is designed as part of the system.",
  highlightTitle: "We define:",
  points: [
    "When a transfer is triggered",
    "How the agent resumes the conversation",
    "What information is passed",
    "What system context is included",
  ],
  footer: [
    "When a human takes over, they receive the full conversation and system context.",
    " ",
    "The interaction continues without restarting.",
  ],
};
const step7 = {
  step: "Step 7",
  title: "Internal testing before live deployment",
  description: "Before going live, the voice agent is tested internally.",
  highlightTitle: "We simulate:",
  points: [
    "Realistic call scenarios",
    "System interactions",
    "Unexpected inputs",
    "Edge cases",
    "Escalation paths",
  ],
  footer: [
    "Only once the system behaves consistently across conversation and system actions does it move into production.",
  ],
};
const step8 = {
  step: "Step 8",
  title: "Refinement after deployment",
  description: "After launch, the system is reviewed and adjusted.",
  highlightTitle: "We monitor: ",
  points: [
    "Conversation outcomes",
    "System actions",
    "Handover moments",
    "Friction points",
  ],
  footer: [
    "Adjustments are made as the operation evolves.",
    " ",
    "The voice agent improves alongside the support team.",
  ],
};

const step1MarqueeTags = [
  { icon: LuHeadphones, label: "24/7 availability" },
  { icon: LuLanguages, label: "Handles 100+ languages" },
  { icon: LuClock, label: "Average handling time: 2 minutes" },
  { icon: LuStar, label: "90% resolution rate" },
  { icon: LuHeart, label: "Customer satisfaction: 4.8/5" },
  { icon: LuZap, label: "No wait times" },
];

export {
  step1,
  step2,
  step1MarqueeTags,
  step3,
  step4,
  step5,
  step6,
  step7,
  step8,
};
