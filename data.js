// This object simulates the data you would retrieve when retrieving data from the user's path
export const DEFAULT_PATH = "Home" 

export const dataFromPath = {
    "Home": [
        { isDirectory: true, name: "Documents" },
        { isDirectory: true, name: "Downloads" },
        { isDirectory: true, name: "Photos" }
    ],
    "Home/Documents": [
        { isDirectory: false, name: "notes.txt" },
        { isDirectory: false, name: "resume.txt" },
        { isDirectory: true, name: "Projects" }
    ],
    "Home/Documents/Projects": [
        { isDirectory: false, name: "presentation.txt" },
        { isDirectory: false, name: "budget.txt" },
        { isDirectory: true, name: "Reports" }
    ],
    "Home/Documents/Projects/Reports": [
        { isDirectory: false, name: "q1_report.txt" },
        { isDirectory: false, name: "q2_report.txt" }
    ],
    "Home/Downloads": [
        { isDirectory: false, name: "todo.txt" },
        { isDirectory: false, name: "diagram.png" }
    ],
    "Home/Photos": [
        { isDirectory: false, name: "birthday.png" },
        { isDirectory: false, name: "vacation.png" },
        { isDirectory: true, name: "Wallpapers" }
    ],
    "Home/Photos/Wallpapers": [
        { isDirectory: false, name: "nature.png" },
        { isDirectory: false, name: "city.png" },
        { isDirectory: true, name: "Seasons" }
    ],
    "Home/Photos/Wallpapers/Seasons": [
        { isDirectory: false, name: "winter.png" },
        { isDirectory: false, name: "summer.png" }
    ]
};
