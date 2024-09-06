import ProjectCard from "../component/reuseable/ProjectCard"



const Projects = () => {
  const projects = [
    {
      href: 'https://social-media-dashboard-seven-silk.vercel.app',
      title: 'Social Media Dashboard',
      image: 'socialimg',
      techStack: ['html', 'javascript', 'react', 'tailwind'],
      projectText: 'The Social Media Dashboard is a responsive web application designed to provide users with a comprehensive overview of their social media accounts. It allows users to track key metrics, like followers, likes, and interactions across different platforms, in a clean and visually appealing interface. The goal of this project was to create a dashboard that consolidates social media analytics into one place, providing users with easy access to their data at a glance.',
      git:'https://github.com/ITUNUMIDE/Social-Media-Dashboard',
      vercel:'https://social-media-dashboard-seven-silk.vercel.app',
    },
    {
      href: 'https://form-page-raji-itunu-idowus-projects.vercel.app',
      title: 'Form Page',
      image: 'formimg',
      techStack: ['html', 'javascript', 'react', 'css'],
      projectText: 'This Form Page is a user-friendly contact form built using React, which allows users to input their name, email, and address. It features a simple yet responsive design implemented using styled-components for CSS-in-JS styling.',
      git:'https://github.com/ITUNUMIDE/Form-Page',

    },
     {
      href: 'https://hero-page-raji-itunu-idowus-projects.vercel.app',
      title: 'Hero Page',
      image: 'heroimg',
      techStack: ['html', 'css'],
      projectText: 'This Hero Page is a visually appealing and user-friendly website using HTML and CSS to highlight the key features of the Snap remote work platform. Utilized responsive design principles to ensure optimal viewing across different devices.',
      git:'https://github.com/ITUNUMIDE/Hero-page',
    },
  ];
  return (
    <div className="flex flex-col items-center xs:mt-2 md:mt-4 ">
      <h3 className=" relative font-medium text-3xl m-6 ">Projects<div className="relative top-2 left-0 right-0 border-t border-customBlue w-40 m-auto"></div>
      </h3>
      <div className="flex justify-around xs:w-full  xs:flex-col md:flex-wrap md:flex-row">
      {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            href={project.href}
            image={project.image}
            title={project.title}
            techStack={project.techStack}
            projectText={project.projectText}
            git={project.git}
    
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
