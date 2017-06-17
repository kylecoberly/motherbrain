exports.seed = function(knex, Promise){
    return knex.schema.raw("TRUNCATE TABLE \"instructor\" RESTART IDENTITY CASCADE")
        .then(function(){
            return knex("instructor").insert([{
                first_name: "Kyle",
                last_name: "Coberly",
                title: "Faculty Director",
                start_date: "2015-09-15",
                description: "Kyle is a web app developer, business dork, and amateur economist. A lifelong educator, he has taught such varied things as web development, 7th grade band, guitar, ballroom dance, sharpshooting, and canoeing. In a previous life, Kyle was a professional musician and audio engineer.",
                business_unit_id: 1,
                avatar: "https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/555/kyle-headshot.jpg"
            },{
                first_name: "Danny",
                last_name: "Fritz",
                title: "Lead Instructor",
                start_date: "2015-09-01",
                description: "Danny is a curious Developer with about a decade of experience and a serious passion for the web. Graduated from Purdue with a degree in Computer Science. He found a passion for game development and never stopped coding. Spent a year working on Purdue's super computers as a System Administrator.",
                business_unit_id: 1,
                avatar: "https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/560/15-10-FS-DP-5354.jpg"
            },{
                first_name: "CJ",
                last_name: "Reynolds",
                title: "Lead Instructor",
                start_date: "2015-10-01",
                description: "CJ is an Instructor, Full Stack Developer, Hardware Tinkerer and Technologist. He's worn many hats including Software Engineer, Help Desk Analyst, System Administrator and Quality Assurance Analyst. CJ has a passion for sharing knowledge, writing clean self documenting code and building elegantly structured apps that scale.",
                business_unit_id: 1,
                avatar: "https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/557/CJ_platte.jpg"
            },{
                first_name: "Roberto",
                last_name: "Ortega",
                title: "Lead Instructor",
                start_date: "2015-10-01",
                description: "Roberto is a developer with a background in social work and teaching. He's the fastest prototyper in the west, he's an instructor of instructors, his dog is a bonus team member, and just wait until you hear his lesson on cookies.",
                business_unit_id: 1,
                avatar: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAKAAAAAJDkwMWIzOTI1LTM2NGYtNGVlNy1iNzQ3LWEyNDAzZjhjNGE4ZQ.jpg"
            },{
                first_name: "Brooks",
                last_name: "Patton",
                title: "Lead Instructor",
                start_date: "2015-11-01",
                description: "Brooks is a Web Developer with over ten years of IT experience, including his work as a contractor at the NASA Advanced Supercomputing center. He has since taken those skills to make web applications, games, and automating the boring things in his life. As Brooks has always been passionate about teaching and mentoring he decided to make the jump to full-time instructor where he can help his students become who they want to be.",
                business_unit_id: 1,
                avatar: "https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/562/IMG_0549_copy.jpg"
            },{
                first_name: "Kim",
                last_name: "Schlesinger",
                title: "Instructor",
                start_date: "2015-12-01",
                description: "Kim is a developer, curriculum designer and instructional coach. Prior to Galvanize, Kim worked for Teach For America, The Poudre School District and Milwaukee Public Schools. When she’s not teaching and learning code, you can find Kim on a meditation cushion, practicing Bikram Yoga, or relaxing outdoors.",
                business_unit_id: 1,
                avatar: "https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/594/Kim.jpg"
            },{
                first_name: "Chad",
                last_name: "Drummond",
                title: "Instructor",
                start_date: "2016-06-01",
                description: "Chad is a Front End Engineer with 10 years experience in the real world. After practicing patience teaching friends and family to code, he decided to take it to the masses. In his free time he's exploring Colorado, learning various music skills, and listening to lots of self-help books to figure life out.",
                business_unit_id: 1,
                avatar: "https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/556/headshot-square-sm.jpg"
            },{
                first_name: "Peter",
                last_name: "Ostiguy",
                title: "Associate Instructor",
                start_date: "2017-01-01",
                description: "Peter just graduated from the Galvanize WDI program, and he’s so excited to share his experiences and insights from that with the next cohort. With a background in medical research, he has a passion for finding new solutions to old problems, and is excited to develop a new skill set to do so.",
                business_unit_id: 1,
                avatar: "https://avatars2.githubusercontent.com/u/18092618?v=3&s=400"
            },{
                first_name: "Cass",
                last_name: "Torske",
                title: "Web Development Resident",
                start_date: "2017-04-01",
                description: "Cass is a recent Galvanize WDI program graduate. Before becoming a web developer, she was a music educator and performer. She believes in leaving people happier than when she found them. In her free time, Cass hangs out with her dog Panzer.",
                business_unit_id: 1,
                avatar: "https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/586/Cass-Torske.jpg"
            },{
                first_name: "Matt",
                last_name: "Winzer",
                title: "Web Development Resident",
                start_date: "2017-05-01",
                description: "",
                business_unit_id: 1,
                avatar: ""
            },{
                first_name: "Aaron",
                last_name: "Goodman",
                title: "Web Development Resident",
                start_date: "2017-05-01",
                description: "",
                business_unit_id: 1,
                avatar: ""
            },{
                first_name: "Steve",
                last_name: "VanWorkoem",
                title: "Web Development Resident",
                start_date: "2017-06-01",
                description: "",
                business_unit_id: 1,
                avatar: ""
            }]);
        });
};

