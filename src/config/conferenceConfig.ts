

// Conference Configuration - Easy to update for each year
export const conferenceConfig = {
  year: 2026,
  name: "AISCT",
  fullName: "International Conference on Artificial Intelligence and Sustainable Computing Technologies (AISCT 2026-27)",
  university: "Parul University",
  dates: {
    paperSubmission: "2026-05-4",
    notification: "2025-04-20",
    cameraReady: "2025-05-10",
    earlyRegistration: "2025-05-25",
    registration: "2025-06-10",
    conference: "2025-06-20",
    conferenceEnd: "2025-06-22"
  },
  venue: {
    name: "Parul University",
    address: "PO Limda",
    city: "Vadodara",
    state: "Gujarat",
    country: "India",
    pincode: "391760",
    description: "State-of-the-art conference facilities with modern auditoriums"
  },
  registrationFees: {
    earlyBird: {
      student: 3000,
      academic: 5000,
      industry: 7000,
      international: 150 // USD
    },
    regular: {
      student: 4000,
      academic: 6000,
      industry: 8000,
      international: 200 // USD
    }
  },
  tracks: [
    {
      id: "ai-ml",
      title: "Artificial Intelligence & Machine Learning",
      topics: [
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Reinforcement Learning",
        "AI Ethics"
      ]
    },
    {
      id: "iot",
      title: "Internet of Things",
      topics: [
        "Smart Cities",
        "Industrial IoT",
        "Edge Computing",
        "Sensor Networks",
        "IoT Security"
      ]
    },
    {
      id: "blockchain",
      title: "Blockchain & Distributed Systems",
      topics: [
        "Cryptocurrency",
        "Smart Contracts",
        "Consensus Algorithms",
        "DeFi",
        "Web3 Technologies"
      ]
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      topics: [
        "Network Security",
        "Cryptography",
        "Threat Detection",
        "Privacy Protection",
        "Security Analytics"
      ]
    },
    {
      id: "cloud",
      title: "Cloud Computing",
      topics: [
        "Cloud Architecture",
        "Serverless Computing",
        "Container Technologies",
        "Multi-cloud Strategies",
        "Cloud Security"
      ]
    },
    {
      id: "data-science",
      title: "Data Science & Analytics",
      topics: [
        "Big Data",
        "Data Mining",
        "Predictive Analytics",
        "Business Intelligence",
        "Data Visualization"
      ]
    }
  ],
  keynoteSchedule: [
    {
      time: "09:00-10:00",
      date: "2025-06-20",
      speaker: "Dr. Rajesh Kumar",
      title: "Future of AI in Healthcare",
      location: "Main Auditorium"
    },
    {
      time: "14:00-15:00",
      date: "2025-06-20",
      speaker: "Prof. Sarah Johnson",
      title: "Quantum Computing Breakthrough",
      location: "Tech Hall"
    },
    {
      time: "10:00-11:00",
      date: "2025-06-21",
      speaker: "Dr. Chen Wei",
      title: "Sustainable Technology Solutions",
      location: "Main Auditorium"
    }
  ],
  committee: {
    chiefPatrons: [
      {
        name: "Dr. Devanshu Patel",
        title: "President",
        organization: "Parul University",
        image: "/assets/comittiee/Dr-Devanshu.jpg",
        role: "CHIEF PATRON"
      }
    ],
    patrons: [
      {
        name: "Dr. Parul Patel",
        title: "Vice President (Student Affairs & General Administration) and Chair Admissions Committee",
        organization: "Parul University",
        image: "/assets/comittiee/parul-patel.jpg",
        role: "PATRON"
      },
      {
        name: "Dr. Geetika Patel",
        title: "Vice President (Quality, Research & Health Sciences) and Medical Director",
        organization: "Parul University",
        image: "/assets/comittiee/Dr-Geetika-Patel.jpg",
        role: "PATRON"
      },
      {
        name: "Dr. Komal Patel",
        title: "Vice President (Medical & Paramedical Health Sciences) & Medical Director",
        organization: "Parul University",
        image: "/assets/comittiee/dr-komal-patel.jpg",
        role: "PATRON"
      }
    ],
    coPatrons: [
      {
        name: "Dr. K. N. Madhusoodanan",
        title: "Provost",
        organization: "Parul University",
        image: "/assets/comittiee/dr-madhusoodanan.png",
        role: "CO-PATRON"
      },
      {
        name: "Dr. Kunjal Sinha",
        title: "Pro Vice-Chancellor",
        organization: "Parul University",
        image: "/assets/comittiee/dr-kunjal-sinha.png",
        role: "CO-PATRON"
      },
      {
        name: "Prof. Manish Pandya",
        title: "Registrar",
        organization: "Parul University",
        image: "/assets/comittiee/manish-pandya.jpg",
        role: "CO-PATRON"
      }
    ],
    generalChair: [
      {
        name: "Dr. Priya Swaminarayan",
        title: "Dean & Principal – Faculty of Information Technology and Computer Science",
        organization: "Parul University",
        role: "GENERAL CHAIR",
        image: "/assets/comittiee/dr-priyaswaminarayan.png"
      }
    ],
    generalCoChairs: [
      {
        name: "Dr. Hina Chokshi",
        title: "Vice Principal, Faculty of Information Technology and Computer Science",
        organization: "Parul University",
        role: "GENERAL CO-CHAIR",
        image: "/assets/comittiee/hina.jpeg"
      },
      {
        name: "Dr Dereje Bedane",
        title: "President",
        organization: "Infolink University College of Ethiopia",
        role: "GENERAL CO-CHAIR",
        image: "/assets/comittiee/dereje.jpg"
      },
      {
        name: "Dr. Sc. Dedi Darwis",
        title: "Dean of the Faculty of Engineering and Computer Science",
        organization: "Universitas Teknokrat Indonesia",
        role: "GENERAL CO-CHAIR",
        image: "/assets/comittiee/dedi.jpg"
      },
      {
        name: "Dr. Swapnil M Parikh",
        title: "Dean, Faculty of Engineering & Technology",
        organization: "Parul University, Vadodara",
        role: "GENERAL CO-CHAIR",
        image: "/assets/comittiee/swapnil.jpg"
      }
    ],
    convener: [
      {
        name: "Dr. Abhishek Metha",
        title: "Associate Professor & HOD-BCA, Faculty of Information Technology and Computer Science",
        organization: "Parul University",
        role: "CONVENER",
        image: "/assets/comittiee/abhishek.png"
      }
    ],
    coConveners: [
      {
        name: "Prof. Vivek Dave",
        title: "HOD MCA-Department, Faculty of Information Technology and Computer Science",
        organization: "Parul University",
        role: "CO-CONVENER",
        image: "/assets/comittiee/vivek.png"
      },
      {
        name: "Dr. Bela Shah",
        title: "Department of Computer Science & Engineering, Parul Institute of Technology",
        organization: "Parul University",
        role: "CO-CONVENER",
        image: "/assets/comittiee/bela.jpg"
      }
    ],
    organizingSecretaries: [
      {
        name: "Dr. Ramachandran P",
        title: "Assistant Professor, Faculty of Information Technology & Computer Science",
        organization: "Parul University, Vadodara, Gujarat",
        role: "ORGANIZING SECRETARY",
        image: "/assets/comittiee/ramachandran-v2.jpg"
      },
      {
        name: "Dr. Saswati Chatterjee",
        title: "Assistant Professor, Faculty of Information Technology & Computer Science",
        organization: "Parul University, Vadodara, Gujarat",
        role: "ORGANIZING SECRETARY",
        image: "/assets/comittiee/saswati-v2.jpg"
      },
      {
        name: "Dr. Raj Sinha",
        title: "CRO, Faculty of Information Technology & Computer Science",
        organization: "Parul University, Vadodara, Gujarat",
        role: "ORGANIZING SECRETARY",
        image: "/assets/comittiee/rajsinha-v2.jpg"
      }
    ],
    nationalAdvisoryCommittee: [
      {
        name: "Dr Rajesh Kumar Dhanaraj",
        title: "Professor",
        organization: "SICSR, Symbiosis International (Deemed University), Pune"
      },
      {
        name: "Dr Savithri M",
        title: "Faculty",
        organization: "CHRIST (Deemed to be University), Pune Lavasa"
      },
      {
        name: "Dr. S. Aanjan Kumar",
        title: "Faculty",
        organization: "School of Computing Science and Engineering, VIT Bhopal University"
      },
      {
        name: "SVN Santhosh Kumar",
        title: "Associate Professor (World 2% Scientist for 2025)",
        organization: "SCORE, VIT-Vellore Campus"
      },
      {
        name: "Dr. Basant Agarwal",
        title: "Associate Professor, Dean and Head",
        organization: "Central University of Rajasthan"
      },
      {
        name: "Dr. Sonal Jain",
        title: "Professor",
        organization: "PG Department of CS and IT, Sardar Patel University, Vallabh Vidyanagar, Gujarat"
      },
      {
        name: "Dr. Paresh Vallabhbhai Virparia",
        title: "Professor",
        organization: "Department of Computer Science, Sardar Patel University, Vallabh Vidyanagar 388 120, Gujarat, India"
      },
      {
        name: "Professor (Dr.) Darshan Choksi",
        title: "Professor",
        organization: "Department of Computer Science, Sardar Patel University, Vallabh Vidyanagar 388 120, Gujarat, India"
      },
      {
        name: "Dr. Priti Srinivas Sajja",
        title: "Professor and Director",
        organization: "Department of Computer Science, Sardar Patel University, Vallabh Vidyanagar 388 120, Gujarat, India"
      },
      {
        name: "Dr. Sanskruti Patel",
        title: "Dean & Professor",
        organization: "Charotar University of Science and Technology"
      },
      {
        name: "Dr. Kumbha Rana",
        title: "Faculty",
        organization: "Saurashtra University"
      }
    ],
    internationalAdvisoryCommittee: [
      {
        name: "Dr. Ruchi Doshi",
        title: "Professor",
        organization: "Universidad Azteca",
        country: "Mexico"
      },
      {
        name: "Dragan Pamucar",
        title: "Faculty, Department of Operations Research and Statistics",
        organization: "University of Belgrade, Faculty of Organizational Sciences, Belgrade",
        country: "Serbia"
      },
      {
        name: "Dr. Mohammad Tariqul Islam",
        title: "Professor",
        organization: "Universiti Kebangsaan Malaysia",
        country: "Malaysia"
      },
      {
        name: "Dr. Prasanalakshmi B",
        title: "Professor",
        organization: "King Khalid University, Abha",
        country: "Saudi Arabia"
      },
      {
        name: "Mr. Praveen Vaidya",
        title: "Global Director of Quality",
        organization: "PPG Industries",
        country: "USA"
      },
      {
        name: "Dr. Haipeng Liu",
        title: "Faculty",
        organization: "Coventry University",
        country: "UK"
      },
      {
        name: "Dr. Andrey Kuzmin",
        title: "Professor",
        organization: "Penza State University, Penza",
        country: "Russia"
      },
      {
        name: "Dr. Piyush Samant",
        title: "Data Scientist",
        organization: "Mirxes Laboratories Pvt. Ltd",
        country: "Singapore"
      },
      {
        name: "Dr. Vaibhav Gandhi",
        title: "Director of Programs, Product and Design Engineering",
        organization: "Middlesex University, London",
        country: "UK"
      },
      {
        name: "Dr. Nikhil Medhekar",
        title: "Professor, Department of Material Science",
        organization: "Monash University, Melbourne",
        country: "Australia"
      },
      {
        name: "Dr. Akshay Saha",
        title: "Professor",
        organization: "Howard College Campus",
        country: "South Africa"
      },
      {
        name: "Dr. Manoj Kumar",
        title: "Associate Professor, Faculty of Engineering and Information Sciences",
        organization: "University of Wollongong in Dubai",
        country: "UAE"
      }
    ],
    executiveCommittee: [
      { name: "Dr. Babita Chaube", title: "Campus Director", organization: "Parul University" },
      { name: "Dr. Pallavi Khedkar", title: "Director (Academics)", organization: "Parul University" },
      { name: "Dr. Manisha Pathak", title: "Director (Academics)", organization: "Parul University" },
      { name: "Dr. Bhavesh Mewada", title: "Director, LAEP", organization: "Parul University" },
      { name: "Dr. Vaibhav Gandhi", title: "Director, FDU", organization: "Parul University" },
      { name: "Dr. Gordhan Jethwa", title: "Director, PINI", organization: "Parul University" },
      { name: "Dr. Saurabh Shah", title: "Director, TACD", organization: "Parul University" }
    ],
    publicationChair: [
      { name: "Dr. Ratnesh Namdeo", title: "Faculty", organization: "FITCS, Parul University" },
      { name: "Dr. Chetan Gondaliya", title: "Faculty", organization: "FITCS, Parul University" },
      { name: "Dr. Mohammad Altaf Dar", title: "Faculty", organization: "FITCS, Parul University" },
      { name: "Dr. Satyendra Sharma", title: "Faculty", organization: "FITCS, Parul University" }
    ],
    registrationChair: [
      { name: "Prof. Vipul Gamit", title: "Faculty", organization: "FITCS, Parul University" },
      { name: "Dr. Ghanshyam Rathod", title: "Faculty", organization: "FITCS, Parul University" },
      { name: "Prof. Manish Joshi", title: "Faculty", organization: "FITCS, Parul University" },
      { name: "Prof. Mehul Dalwadi", title: "Faculty", organization: "FITCS, Parul University" },
      { name: "Dr. Payal Dhanesha", title: "Faculty", organization: "FITCS, Parul University" },
      { name: "Dr. Priyanka Mazumdar", title: "Faculty", organization: "FITCS, Parul University" },
      { name: "Dr. Vivek Vyas", title: "Faculty", organization: "FITCS, Parul University" },
      { name: "Dr. Ratnesh Namdeo", title: "Faculty", organization: "FITCS, Parul University" },
      { name: "Prof. Arun U", title: "Faculty", organization: "FITCS, Parul University" }
    ],
    financeChair: [
      { name: "Dr. Vivek Dave", title: "Faculty", organization: "FITCS, Parul University" },
      { name: "Prof. Saumil Trivedi", title: "Faculty", organization: "FITCS, Parul University" },
      { name: "Prof. Sweta Jethva", title: "Faculty", organization: "FITCS, Parul University" },
      { name: "Prof. Sohil Parmar", title: "Faculty", organization: "FITCS, Parul University" },
      { name: "Prof. Jigar Bhavsar", title: "Faculty", organization: "FITCS, Parul University" }
    ],
    technicalChair: [
      { name: "Dr. Digvijay Virpura", title: "Technical Chair", organization: "FITCS, Parul University" },
      { name: "Prof. Hardik Parmar", title: "Technical Chair", organization: "FITCS, Parul University" },
      { name: "Prof. Aniket Paul", title: "Technical Chair", organization: "FITCS, Parul University" }
    ],
    technicalCommittee: [
      {
        name: "Saleem Raja A",
        title: "Faculty",
        organization: "IT Department, College of Computing and Information Science, University of Technology and Applied Science, Shinas, Oman",
        country: "Oman"
      },
      {
        name: "Jayabarabu Ramakrishnan",
        title: "Faculty",
        organization: "Department of Information Technology and Security, College of Computer Science and Information Technology, Jazan University",
        country: "Saudi Arabia"
      },
      {
        name: "Dr Feroz Khan A.B",
        title: "Associate Professor",
        organization: "Syed Hameedha College, Alagappa University",
        country: "India"
      },
      {
        name: "Dr. M. Ashok Kumar",
        title: "Controller of Examination & HOD",
        organization: "Bluecrest University, Monrovia",
        country: "Liberia"
      },
      {
        name: "Dr. M. Selvakumar Samuel",
        title: "Associate Professor",
        organization: "Asia Pacific University of Technology and Innovation",
        country: "Malaysia"
      },
      {
        name: "Dr. Sc. Dedi Darwis",
        title: "Professor",
        organization: "Faculty of Engineering and Computer Science, Universitas Teknokrat Indonesia",
        country: "Indonesia"
      },
      {
        name: "Dyah Ayu Megawaty",
        title: "Faculty",
        organization: "Faculty of Engineering and Computer Science, Universitas Teknokrat Indonesia",
        country: "Indonesia"
      },
      {
        name: "Qadhi Jafar Adrian",
        title: "Faculty",
        organization: "Faculty of Engineering and Computer Science, Universitas Teknokrat Indonesia",
        country: "Indonesia"
      },
      {
        name: "Dr. Sampurna Dadi Riskiono",
        title: "Faculty",
        organization: "Faculty of Engineering and Computer Science, Indonesian University of Teknokrat",
        country: "Indonesia"
      },
      {
        name: "Dr. R. Elakkiya",
        title: "Assistant Professor",
        organization: "Department of Computer Science, Birla Institute of Technology & Science, Pilani (Dubai Campus)",
        country: "UAE"
      },
      {
        name: "Dr. K. Ramalakshmi",
        title: "Professor",
        organization: "Alliance College of Engineering and Design, Alliance University",
        country: "India"
      },
      {
        name: "Dr. S. Umarani",
        title: "Professor",
        organization: "SRM Institute of Science and Technology, Chennai",
        country: "India"
      },
      {
        name: "Dr. Kumar Chadar",
        title: "Professor (Decision Science)",
        organization: "School of Business and Management, Christ University",
        country: "India"
      },
      {
        name: "Dr. Kaliraj S",
        title: "Associate Professor",
        organization: "School of Computer Engineering, Manipal University",
        country: "India"
      },
      {
        name: "M. Roshni Thanka",
        title: "Assistant Professor of Computer Science",
        organization: "Karunya University",
        country: "India"
      }
    ],
    sessionChairs: [
      {
        trackNumber: 1,
        trackName: "Artificial Intelligence and Intelligent Systems",
        chairs: [
          { name: "Prof. Mehul Dalwadi", title: "Faculty", organization: "Parul University" },
          { name: "Prof. Vijya Tulsani", title: "Faculty", organization: "Parul University" }
        ]
      },
      {
        trackNumber: 2,
        trackName: "Sustainable Computing and Intelligent Applications",
        chairs: [
          { name: "Dr. Ghanshyam Rathod", title: "Faculty", organization: "Parul University" },
          { name: "Dr. Payal Dhanesha", title: "Faculty", organization: "Parul University" }
        ]
      },
      {
        trackNumber: 3,
        trackName: "AI Applications for Sustainable Development",
        chairs: [
          { name: "Dr. Digvijay Virpura", title: "Faculty", organization: "Parul University" },
          { name: "Dr. Priyanka Mazumdar", title: "Faculty", organization: "Parul University" }
        ]
      },
      {
        trackNumber: 4,
        trackName: "Data Science, Cybersecurity and Emerging Technologies",
        chairs: [
          { name: "Dr. Vivek Vyas", title: "Faculty", organization: "Parul University" },
          { name: "Prof. Sweta Jethava", title: "Faculty", organization: "Parul University" }
        ]
      },
      {
        trackNumber: 5,
        trackName: "Smart Technologies and Intelligent Applications",
        chairs: [
          { name: "Dr. Satyendra Sharma", title: "Faculty", organization: "Parul University" },
          { name: "Dr. Saswati Chatterjee", title: "Faculty", organization: "Parul University" }
        ]
      }
    ],
    hospitalityAndTransportChair: [
      { name: "Prof. Rama Deepak", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Tanmay Shah", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Adarsh Ashok", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Aesh Gada", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Shikha", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Vishakha", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Isha Sevak", title: "Faculty", organization: "Parul University" }
    ],
    // Backwards compatibility aliases
    convenors: [
      {
        name: "Dr. Priya Swaminarayan",
        title: "Dean & Principal – Faculty of Information Technology and Computer Science",
        role: "GENERAL CHAIR",
        organization: "Parul University",
        image: "/assets/comittiee/dr-priyaswaminarayan.png"
      },
      {
        name: "Dr. Swapnil M Parikh",
        title: "Dean, Faculty of Engineering & Technology, Parul University, Vadodara",
        role: "GENERAL CO-CHAIR",
        organization: "Parul University",
        image: "/assets/comittiee/swapnil.jpg"
      },
      {
        name: "Dr. Sc. Dedi Darwis",
        title: "Dean of the Faculty of Engineering and Computer Science",
        role: "GENERAL CO-CHAIR",
        organization: "Universitas Teknokrat Indonesia",
        image: "/assets/comittiee/dedi.jpg"
      },
      {
        name: "Dr Dereje Bedane",
        title: "President",
        role: "GENERAL CO-CHAIR",
        organization: "Infolink University College of Ethiopia",
        image: "/assets/comittiee/dereje.jpg"
      }
    ],
    advisoryCommittee: [
      {
        name: "Dr Rajesh Kumar Dhanaraj",
        title: "Professor",
        organization: "SICSR, Symbiosis International (Deemed University), Pune"
      },
      {
        name: "Dr Savithri M",
        title: "Faculty",
        organization: "CHRIST (Deemed to be University), Pune Lavasa"
      },
      {
        name: "Dr. S. Aanjan Kumar",
        title: "Faculty",
        organization: "School of Computing Science and Engineering, VIT Bhopal University"
      },
      {
        name: "SVN Santhosh Kumar",
        title: "Associate Professor (World 2% Scientist for 2025)",
        organization: "SCORE, VIT-Vellore Campus"
      },
      {
        name: "Dr. Basant Agarwal",
        title: "Associate Professor, Dean and Head",
        organization: "Central University of Rajasthan"
      },
      {
        name: "Dr. Sonal Jain",
        title: "Professor",
        organization: "PG Department of CS and IT, Sardar Patel University, Vallabh Vidyanagar, Gujarat"
      },
      {
        name: "Dr. Paresh Vallabhbhai Virparia",
        title: "Professor",
        organization: "Department of Computer Science, Sardar Patel University, Vallabh Vidyanagar 388 120, Gujarat, India"
      },
      {
        name: "Professor (Dr.) Darshan Choksi",
        title: "Professor",
        organization: "Department of Computer Science, Sardar Patel University, Vallabh Vidyanagar 388 120, Gujarat, India"
      },
      {
        name: "Dr. Priti Srinivas Sajja",
        title: "Professor and Director",
        organization: "Department of Computer Science, Sardar Patel University, Vallabh Vidyanagar 388 120, Gujarat, India"
      },
      {
        name: "Dr. Sanskruti Patel",
        title: "Dean & Professor",
        organization: "Charotar University of Science and Technology"
      },
      {
        name: "Dr. Kumbha Rana",
        title: "Faculty",
        organization: "Saurashtra University"
      }
    ],
    steeringCommittee: [
      { name: "Dr. Ramachandran P", title: "Assistant Professor", organization: "Faculty of Information Technology & Computer Science, Vadodara, Gujarat", image: "/assets/comittiee/ramachandran-v2.jpg" },
      { name: "Dr. Saswati Chatterjee", title: "Assistant Professor", organization: "Faculty of Information Technology & Computer Science, Vadodara, Gujarat", image: "/assets/comittiee/saswati-v2.jpg" },
      { name: "Dr. Raj Sinha", title: "CRO", organization: "Faculty of Information Technology & Computer Science, Vadodara, Gujarat", image: "/assets/comittiee/rajsinha-v2.jpg" }
    ],
    organizingChair: [
      { name: "Dr. Abhishek Metha", title: "Convener", organization: "Parul University", email: null },
      { name: "Prof. Vivek Dave", title: "Co-Convener", organization: "Parul University", email: null },
      { name: "Dr. Bela Shah", title: "Co-Convener", organization: "Parul University", email: null }
    ] as CommitteeMember[],
    organizationCommittee: [
      { name: "Prof. Jigar Bhawsar", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Sohil Parmar", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Arun U", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Vijaya Tulsani", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Yadagiri Rama Deepak", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Hardik Parmar", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Mehulkumar Dalwadi", title: "Faculty", organization: "Parul University" }
    ],
    promotionCommittee: [
      { name: "Prof. Rama Deepak", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Tanmay Shah", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Adarsh Ashok", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Aesh Gada", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Shikha", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Vishakha", title: "Faculty", organization: "Parul University" },
      { name: "Prof. Isha Sevak", title: "Faculty", organization: "Parul University" }
    ]
  },
  contact: {
    email: "fitcs.conference@paruluniversity.ac.in",
    phone: "+91 9384345662",
    address: "Parul University, PO Limda, Vadodara, Gujarat 391760, India"
  }
};

// TypeScript interfaces for type safety
export interface ConferenceTrack {
  id: string;
  title: string;
  topics: string[];
}

export interface CommitteeMember {
  name: string;
  title: string;
  organization: string;
  country?: string;
  email?: string | null;
  image?: string | null;
  role?: string;
  imagePosition?: string;
}

export interface KeynoteSession {
  time: string;
  date: string;
  speaker: string;
  title: string;
  location: string;
}

export interface RegistrationFee {
  student: number;
  academic: number;
  industry: number;
  international: number;
}

export interface SessionChairTrack {
  trackNumber: number;
  trackName: string;
  chairs: CommitteeMember[];
}

export type ConferenceConfig = typeof conferenceConfig;