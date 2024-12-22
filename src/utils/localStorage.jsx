const employeeData = [
    {
      id: 1,
      email: "john.doe@example.com",
      name: "John Doe",
      password: "John",
      tasks: [
        {
          taskName: "Prepare Report",
          taskDescription: "Prepare the quarterly financial report.",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          date: "23/12/2024",
          assignedTo: "John Doe",
          priority: "High"
        },
        {
          taskName: "Team Meeting",
          taskDescription: "Organize and lead the weekly team meeting.",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          date: "24/12/2024",
          assignedTo: "John Doe",
          priority: "Low"
        },
        {
          taskName: "Client Follow-up",
          taskDescription: "Follow up with clients for project updates.",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          date: "20/12/2024",
          assignedTo: "John Doe",
          priority: "High"
        }
      ]
    },
    {
      id: 2,
      email: "jane.smith@example.com",
      name: "Jane Smith",
      password: "Jane",
      tasks: [
        {
          taskName: "Update Website",
          taskDescription: "Update the company website's homepage.",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          date: "23/12/2024",
          assignedTo: "Jane Smith",
          priority: "High"
        },
        {
          taskName: "Create Marketing Plan",
          taskDescription: "Develop a marketing plan for the new product launch.",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          date: "24/12/2024",
          assignedTo: "Jane Smith",
          priority: "High"
        }
      ]
    },
    {
      id: 3,
      email: "michael.brown@example.com",
      name: "Michael Brown",
      password: "Michael",
      tasks: [
        {
          taskName: "Code Review",
          taskDescription: "Review code submitted by the development team.",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          date: "23/12/2024",
          assignedTo: "Michael Brown",
          priority: "Low"
        },
        {
          taskName: "Fix Bugs",
          taskDescription: "Fix bugs reported in the system.",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          date: "20/12/2024",
          assignedTo: "Michael Brown",
          priority: "High"
        }
      ]
    },
    {
      id: 4,
      email: "emily.jones@example.com",
      name: "Emily Jones",
      password: "Emily",
      tasks: [
        {
          taskName: "Prepare Presentation",
          taskDescription: "Prepare slides for the upcoming conference.",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          date: "23/12/2024",
          assignedTo: "Emily Jones",
          priority: "High"
        },
        {
          taskName: "Team Survey",
          taskDescription: "Conduct a survey to gather team feedback.",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          date: "22/12/2024",
          assignedTo: "Emily Jones",
          priority: "Low"
        }
      ]
    },
    {
      id: 5,
      email: "david.wilson@example.com",
      name: "David Wilson",
      password: "David",
      tasks: [
        {
          taskName: "Inventory Check",
          taskDescription: "Perform inventory checks in the warehouse.",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          date: "23/12/2024",
          assignedTo: "David Wilson",
          priority: "Low"
        },
        {
          taskName: "Supplier Meeting",
          taskDescription: "Meet with suppliers to discuss new deals.",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          date: "21/12/2024",
          assignedTo: "David Wilson",
          priority: "High"
        }
      ]
    }
  ];
  
  

const admin = {
    "id": 1,
    "email": "admin.john@example.com",
    "name": "John Admin",
    "password": "John"
  }
  

export const setLocalStorage = () => {
    localStorage.setItem("empolyee", JSON.stringify(employeeData))

    localStorage.setItem("admin", JSON.stringify(admin));

}

export const getLocalStorage = () => {
    const empolyee = localStorage.getItem("empolyee");

    const adminData = localStorage.getItem("admin");

    const empolyees = JSON.parse(empolyee);
    const admin = JSON.parse(adminData);

    return { empolyees, admin };
    

}
