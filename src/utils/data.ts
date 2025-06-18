import type { Experience, Projects } from '@/types'



export const projects: Projects[] = [
    {
        title: 'Numari App',
        description: 'project.numari.app.description',
        urlDemo: 'https://nutritionapp-xi.vercel.app/login',
        urlCodigo: 'https://github.com/leonardocueto/nutritionapp',
        image: '/numari-app.webp',
        tech: ['ReactJS', 'TailwindCSS', 'TypeScript'],
        tag: 'Frontend'
    },
    {
        title: 'Numari Landing',
        description:
            'project.numari.landing.description',
        urlDemo: 'https://www.numari.app/',
        urlCodigo: 'https://github.com/leonardocueto/numari-landing',
        image: '/numari-landing.webp',
        tech: ['Astro', 'JavaScript', 'TailwindCSS', 'Clouflare'],
        tag: 'Frontend'
    },
    {
        title: 'Pokedex',
        description:
            'project.pokedex.description',
        urlDemo: 'https://poke-react-tau.vercel.app/',
        urlCodigo: 'https://github.com/leonardocueto/PokeReact',
        image: '/pokemon.webp',
        tech: ['ReactJS', 'TypeScript', 'CSS'],
        tag: 'Frontend'
    },
    {
        title: 'Finder Rick & Morty',
        description:
            'project.finder.description',
        urlDemo: 'https://rymfinder-vue.netlify.app/',
        urlCodigo: 'https://github.com/leonardocueto/RyMFinder-vue',
        image: '/rick_morty.webp',
        tech: ['Vue', 'TailwindCSS', 'TypeScript', 'Axios'],
        tag: 'Frontend'
    },
    {
        title: 'Cripto',
        description:
            'project.cripto.description',
        urlDemo: 'https://cripto-react30123.netlify.app/',
        urlCodigo: 'https://github.com/leonardocueto/criptos-react',
        image: '/cripto.webp',
        tech: ['ReactJS', 'JavaScript', 'CSS', 'Axios'],
        tag: 'Frontend'
    }
]

export const experienceInfo: Experience[] = [
    {
        role: 'experience.role.frontend',
        company: 'Numari',
        date: 'experience.numari.date',
        description:
            'experience.numari.description'},
    {
        role: 'experience.role.frontend.application',
        company: 'Freelance',
        date: 'experience.freelance.date',
        description: 'experience.freelance.description' 
    },
    {
        role: 'experience.role.kn',
        company: 'Kuehne + Nagel',
        date: 'experience.kn.date',
        description: 'experience.kn.description'
    },
    {
        role: 'experience.role.support',
        company: 'Cidesys',
        date: 'experience.cidesys.date',
        description: 'experience.cidesys.description'
        
    }
]
