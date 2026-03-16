
const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Sales Report",
        taskDescription: "Create the monthly sales report.",
        taskDate: "2026-03-15",
        category: "Reports"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Discuss project updates with client.",
        taskDate: "2026-03-10",
        category: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Update CRM",
        taskDescription: "Add new customer data to CRM.",
        taskDate: "2026-03-12",
        category: "Data Entry"
      }
    ]
  },
  {
    id: 2,
    firstName: "Rahul",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create UI for the new landing page.",
        taskDate: "2026-03-16",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve responsiveness issue.",
        taskDate: "2026-03-11",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prototype Dashboard",
        taskDescription: "Build dashboard prototype.",
        taskDate: "2026-03-18",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Icon Update",
        taskDescription: "Replace outdated icons.",
        taskDate: "2026-03-09",
        category: "UI"
      }
    ]
  },
  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Backup production database.",
        taskDate: "2026-03-14",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "API Testing",
        taskDescription: "Test new API endpoints.",
        taskDate: "2026-03-13",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Queries",
        taskDescription: "Improve DB query performance.",
        taskDate: "2026-03-20",
        category: "Database"
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Prepare API documentation.",
        taskDate: "2026-03-17",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Resolve login errors.",
        taskDate: "2026-03-12",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Update",
        taskDescription: "Deploy latest build.",
        taskDate: "2026-03-11",
        category: "Deployment"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review pull requests.",
        taskDate: "2026-03-18",
        category: "Development"
      }
    ]
  },
  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Marketing Strategy",
        taskDescription: "Plan next marketing campaign.",
        taskDate: "2026-03-19",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Social Media Post",
        taskDescription: "Publish Instagram campaign.",
        taskDate: "2026-03-10",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Email Campaign",
        taskDescription: "Send newsletter to users.",
        taskDate: "2026-03-08",
        category: "Marketing"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))

    localStorage.setItem('admin',JSON.stringify(admin))
}


export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees')) || []
  const admin = JSON.parse(localStorage.getItem('admin')) || []

  return { employees, admin }
}

