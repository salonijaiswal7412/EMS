const employees = [
    {
      id: 101,
      email: "rahul.sharma@company.in",
      password: "123",
      tasks: [
        {
          title: "Complete Project Report",
          description: "Finalize the project report for Q3.",
          date: "2024-11-01",
           category: "Documentation",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Team Meeting",
          description: "Discuss the new project requirements with the team.",
          date: "2024-11-02",
          category: "Meeting",
          active: false,
          newTask: true,
          completed: true,
          failed: false
        },
        {
          title: "Code Review",
          description: "Review code for the latest feature.",
          date: "2024-11-03",
          category: "Development",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 102,
      email: "priya.verma@company.in",
      password: "123",
      tasks: [
        {
          title: "Database Optimization",
          description: "Optimize database queries for faster performance.",
          date: "2024-11-04",
          category: "Database",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "UI Design",
          description: "Work on the design for the new dashboard.",
          date: "2024-11-05",
          category: "Design",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        },
        {
          title: "Client Presentation",
          description: "Prepare presentation for the client meeting.",
          date: "2024-11-06",
          category: "Client Relations",
          active: false,
          newTask: true,
          completed: true,
          failed: false
        },
        {
          title: "Update API Documentation",
          description: "Update the documentation for recent API changes.",
          date: "2024-11-07",
          category: "Documentation",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 103,
      email: "ankit.patel@company.in",
      password: "123",
      tasks: [
        {
          title: "Testing Automation",
          description: "Implement automated tests for new features.",
          date: "2024-11-08",
          category: "Testing",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Feature Research",
          description: "Research new features for upcoming release.",
          date: "2024-11-09",
          category: "Research",
          active: false,
          newTask: true,
          completed: false,
          failed: true
        },
        {
          title: "User Feedback Review",
          description: "Analyze feedback from the recent user survey.",
          date: "2024-11-10",
          category: "Feedback",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 104,
      email: "sneha.kapoor@company.in",
      password: "123",
      tasks: [
        {
          title: "Market Analysis",
          description: "Complete a competitive analysis report.",
          date: "2024-11-11",
          category: "Analysis",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Bug Fixing",
          description: "Resolve issues reported by QA.",
          date: "2024-11-12",
          category: "Development",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Social Media Updates",
          description: "Plan social media posts for next month.",
          date: "2024-11-13",
          category: "Marketing",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Write User Stories",
          description: "Draft user stories for the upcoming sprint.",
          date: "2024-11-14",
          category: "Product Management",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    },
    {
      id: 105,
      email: "amit.singh@company.in",
      password: "123",
      tasks: [
        {
          title: "System Backup",
          description: "Schedule and verify system backups.",
          date: "2024-11-15",
          category: "Maintenance",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Client Support",
          description: "Respond to client support tickets.",
          date: "2024-11-16",
          category: "Support",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Onboarding New Hires",
          description: "Prepare onboarding materials for new hires.",
          date: "2024-11-17",
          category: "HR",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    }
  ];
  
  const admins = [
    {
      id: 1,
      email: "admin@company.in",
      password: "123"
    }
  ];

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admins',JSON.stringify(admins))

}

export const getLocalStorage=()=>{
   const employee= JSON.parse(localStorage.getItem('employees'));
   const admin=JSON.parse(localStorage.getItem('admins'));
   console.log(employee,admin);
   return{employee,admin};
   
   
    
}