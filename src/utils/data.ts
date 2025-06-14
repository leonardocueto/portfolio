import type { Experience, Projects } from '@/types'
export const projects: Projects[] = [
    {
        title: 'Numari App',
        description:
            'Plataforma web para nutricionistas que permite gestionar pacientes, planes alimenticios y métricas de progreso de forma intuitiva. Desarrollo frontend con React y TypeScript, desplegada en Vercel.',
        urlDemo: 'https://nutritionapp-xi.vercel.app/login',
        urlCodigo: 'https://github.com/leonardocueto/nutritionapp',
        image: 'numari-app.webp',
        tech: ['ReactJS', 'TailwindCSS', 'TypeScript'],
        tag: 'Frontend'
    },
    {
        title: 'Numari Landing',
        description:
            'Landing page informativa y responsiva para Numari, enfocada en destacar características del producto y capturar leads. Construida con Astro y TailwindCSS, optimizada para rendimiento y SEO.',
        urlDemo: 'https://www.numari.app/',
        urlCodigo: 'https://github.com/leonardocueto/numari-landing',
        image: 'numari-landing.webp',
        tech: ['Astro', 'JavaScript', 'TailwindCSS', 'Clouflare'],
        tag: 'Frontend'
    },
    {
        title: 'Pokedex',
        description:
            'Aplicación de Pokédex construida con React y TypeScript, sin librerías externas. Implementa scroll infinito y consumo de la PokéAPI para mostrar información detallada de cada Pokémon.',
        urlDemo: 'https://poke-react-tau.vercel.app/',
        urlCodigo: 'https://github.com/leonardocueto/PokeReact',
        image: 'pokemon.webp',
        tech: ['ReactJS', 'TypeScript', 'CSS'],
        tag: 'Frontend'
    },
    {
        title: 'Finder Rick & Morty',
        description:
            'Buscador de personajes, ubicaciones y episodios de la serie Rick & Morty usando su API oficial. Incluye scroll infinito y una UI responsiva desarrollada con Vue y TailwindCSS.',
        urlDemo: 'https://rymfinder-vue.netlify.app/',
        urlCodigo: 'https://github.com/leonardocueto/RyMFinder-vue',
        image: 'rick_morty.webp',
        tech: ['Vue', 'TailwindCSS', 'TypeScript', 'Axios'],
        tag: 'Frontend'
    },
    {
        title: 'Cripto',
        description:
            'Cotizador en tiempo real de criptomonedas, con conversión a diferentes monedas fiat. Utiliza una API externa para datos en vivo y está desarrollada con React y JavaScript puro.',
        urlDemo: 'https://cripto-react30123.netlify.app/',
        urlCodigo: 'https://github.com/leonardocueto/criptos-react',
        image: 'cripto.webp',
        tech: ['ReactJS', 'JavaScript', 'CSS', 'Axios'],
        tag: 'Frontend'
    }
]

export const experienceInfo: Experience[] = [
    {
        role: 'Front-end Developer',
        company: 'Numari',
        date: 'Mar 2025 - Presente',
        description:
            'Desarrollé el frontend de una plataforma para nutricionistas con una interfaz intuitiva y responsiva que automatiza la gestión de pacientes, planes y turnos, mejorando la eficiencia clínica y el seguimiento personalizado. Utilice React, Zustand para el estado global, React Hook Form y Zod para la validación de formularios y Tailwind Css para el diseño UI.'
    },
    {
        role: 'Front-end & Applications Developer',
        company: 'Freelance',
        date: 'Jun 2024 - Presente',
        description: 'Desarrolle un sitio web par ael diario japones Alternativa Nikkei, con funcionalidades para la publicación de artículos, venta de libros y contenido editoriales.'
        
    },
    {
        role: 'Infrastructure Expert',
        company: 'Infrastructure Expert',
        date: 'Nov 2019 - Ene 2025',
        description:
            'Desarrollé aplicaciones y el sitio web interno de RRHH, coordinando al equipo de IT e implementando Scrum para mejorar la productividad. Administré servidores CentOS/RedHat 7 y soluciones de software clave para satisfacer las necesidades del negocio.Líder técnico de las oficinas de Argentina y Uruguay, coordinando el equipo de IT, gestionando distintos proyectos de la empresa para optimizar el funcionamiento de la infraestructura.'
    },
    {
        role: 'Cidesys',
        company: 'IT Support Technician',
        date: 'Ene 2019 - Novi 2019',
        description:
            'Instalé y configuré softwares internos de la empresa, realicé mantenimiento de equipos tanto servidores como desktops, copias de seguridad y configuración de impresoras.'
    }
]
