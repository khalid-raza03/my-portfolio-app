import { createSlice } from '@reduxjs/toolkit'

export type Project = {
    title: string
    image: string
    githubUrl: string
    liveUrl: string
}

type ProjectsState = {
    items: Project[]
}

const initialState: ProjectsState = {
    items: [
        {
            title: 'Notepad Webapp',
            image: '/images/notepad-project.png',
            githubUrl: 'https://github.com/khalid-raza03/notepad',
            liveUrl: 'https://notepad-sigma-one.vercel.app/',
        },
        {
            title: 'Todo React webapp',
            image: '/images/todo-project.png',
            githubUrl: 'https://github.com/khalid-raza03/Daily-task-manager',
            liveUrl: 'https://daily-task-manager-one.vercel.app/',
        },
        {
            title: 'Shop Elegance',
            image: '/images/project-1.png',
            githubUrl: 'https://github.com/khalid-raza03/Shop-Elegance',
            liveUrl: 'https://khalid-raza03.github.io/Shop-Elegance/',
        },
        {
            title: 'Educational Website Template',
            image: '/images/project-2.png',
            githubUrl:
                'https://github.com/khalid-raza03/Edule-An-educational-website-template-',
            liveUrl:
                'https://khalid-raza03.github.io/Edule-An-educational-website-template-/',
        },
        {
            title: 'Affiliate Marketing Webpage',
            image: '/images/project-3.png',
            githubUrl: 'https://github.com/khalid-raza03/Uglow-clone',
            liveUrl: 'https://khalid-raza03.github.io/Uglow-clone/',
        },
        {
            title: 'Nexcent (Marketing Webpage)',
            image: '/images/project-5.png',
            githubUrl: 'https://github.com/khalid-raza03/Nexcent',
            liveUrl: 'https://khalid-raza03.github.io/Nexcent/',
        },
        {
            title: 'School Exhibition Webpage',
            image: '/images/school-exhibition-project.png',
            githubUrl: 'https://github.com/khalid-raza03/school-exhibition-landing-page',
            liveUrl: 'https://khalid-raza03.github.io/school-exhibition-landing-page/',
        },
        {
            title: 'E-commerce Landing Page',
            image: '/images/project-4.png',
            githubUrl: 'https://github.com/khalid-raza03/Ubuy-HomePage-Clone',
            liveUrl: 'https://khalid-raza03.github.io/Ubuy-HomePage-Clone/',
        },
        {
            title: 'Weather forecast',
            image: '/images/weather-app-project.png',
            githubUrl: 'https://github.com/khalid-raza03/weather-api-webapp',
            liveUrl: 'https://khalid-raza03.github.io/weather-api-webapp/',
        },
    ],
}

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
})

export default projectsSlice.reducer
