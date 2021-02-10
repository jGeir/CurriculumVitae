<template>
    <div class="content">
        <job-card company="Advania" title="Software Specialist" duration="Aug 2017 - July 2020" 
            :showAnchor="true"
            techOne="The technical skills that I amassed and improved at Advania headquarters were 
            HTML, CSS, Javascript, jQuery, ASP.Net C#, XSLT, React. "
            techTwo="In my consultation work through various companies I created with React, Vue, Redux Saga, Typescript, C# ASP.net, Javascript, jQuery and mySql"
            techThree="I enjoy neat and clean solutions, both in code and visuals."
            paragraphOne="Sold as a consultant to various companies over the years. Having the opportunity to learn
             from many great programmers. Improving knowledge, technologies and work ethics. 
             Becoming a Certified Scrum Master while also taking intro courses into cyber security."
            paragraphTwo="I spent eight months in Landsbankinn and our task was to create the front and middle layer
            for an online experience of automatic customer credit assessment("
            paragraphTwoEnding=") for Landsbankinn. We worked within the Agile Scrum principle. React project."
            paragraphThree="Eighteen months in Orkuveitan led me to work with variety of technologies
            while bearing more responsibility in my career. In a team of five programmers I worked as a team leader 
            and scrum master, being a link between the project owners and programmers.
            Some of my responsibilities included releasing versions, programming the frontend and backend, middle layer connections to other systems.
            I was responsible to integrate Vue to an old ASP.net system to reduce technical debt based of my suggestion, it proved beneficial in the developement ahead.
            One larger project was to speed up, redesign and connect to different services on Orkuveitans inner web, thanks to the newly set up Vue framework in this project
            I was able to bring a much needed freshness and reactivity to that view.
            We worked within the Agile Scrum principle.
            "
        />
        <job-card company="Costner" title="Programmer" duration="Jan.2017 - May.2017" :showAnchor="false"
            paragraphOne="I was offered an internship after my bachelor project at the company Costner Educations.
            I was tasked with developing educational mathematics game in the game engine Unity. As well as
            programming the interface for teachers handling the statistics of all of their students in the game."
            techOne="The game was made with Unity3D in C#. The frontend application was AngularJS with mySQL database.
            I worked in precise sprints."
        />
        <job-card company="Costner" title="Final project" duration="Aug.2016 - Dec.2016" :showAnchor="false"
            paragraphOne="In a team of four tasked with our final project of a geographical educational game.
            Following the great hype about PokemonGo, we decided to make a game which rewards the students
            by reaching geolocated landmarks, teaching then quizzing the students about those locations.
            All of which would be connected to a database for the teachers of these students to track progress.
            We followed Agile Scrum precisely."
            techOne="We made this project with Unity3D, mostly using C# for coding.
            We did not need to create our own databases for this project but it was AWS based."
        />
        <job-card company="Listdansskólinn" title="Admin" duration="May 2015 - Oct 2015" :showAnchor="false"
            paragraphOne="Assisting and programming wordpress functionality on an existing website."
            techOne="This website is made with Wordpress.
            Work was done in HTML, CSS, PHP."
        />
        <job-card company="Tölvuspa" title="CEO, CTO" duration="Jun 2015 - Sep 2015" :showAnchor="false"
            :showToggle="false"
            paragraphOne="I serviced both apple and windows computers. Malware removals, Operation system setups,
            hardware replacement, hardware cleaning and more."
        />
    </div>
    
</template>

<script>
import JobCard from '../cv/JobCard.vue'

export default {
    name: 'CV',
    props: {
    },
    components: {
        JobCard
    }
}
</script>