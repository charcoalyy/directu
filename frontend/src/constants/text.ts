export const headers = {
  profiling1: {
    title: "Making Your Degree Yours",
    desc: "Start by selecting subareas of your program that interest you.",
  },
  profiling2: {
    title: "What Place Do Lab Reports Have In Your Heart?",
    desc: "Rate each of these assessment types based on how little or much you'd like to have them.",
  },
  profiling3: {
    title: "The Raw Details",
    desc: "Describe what you want out of your courses. Is there a teaching style you hate or love, a skill you desperately want to learn, any particular weaknesses or strengths, or anything else you find important?",
  },
  profiling4: {
    title: "Your Favourites",
    desc: "Let us know what courses stuck with you the most.",
  },
  dashboard: {
    title: "Four Years In Brief",
    desc: "These courses were selected based on the highest match to your profile. Click course names to view past student reviews and tips. Click edit to add other recommended courses.",
  },
};

export const rankings = [
  "Group presentations",
  "Written tests",
  "M/C tests",
  "Reports",
  "Projects",
];

export const careers = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Computer Vision",
  "Natural Language Processing",
  "Cybersecurity",
  "Blockchain Technology",
  "Software Engineering",
  "Cloud Computing",
  "Database Management",
  "Computer Graphics",
  "Robotics",
  "Human-Computer Interaction",
  "Bioinformatics",
  "Quantum Computing",
  "Network Security",
  "Web Development",
  "Mobile App Development",
  "Game Development",
  "Big Data Analytics",
];

export const icons = [
  'table', 
  'store', 
  'suitcase', 
  'spa', 
  'search', 
  'robot',
  'plug',
  'phone',
  'paste',
  'pager',
  'otter',
  'mountain',
  'mobile',
  'laptop',
  'leaf',
  'image',
  'folder',
  'crow',
  'frog',
  'kiwi-bird'
];

export const careerCards = careers.reduce((arr: {[key: string]: string}[], career: string, i: number) => {
  arr.push({
    name: career,
    icon: icons[i] as string
  })
  return arr
  }, []);