const blogList = [
    { // Intro Blog
        title: 'Blog 1',
        date: 'Aug 21',
        slug: '/blog/1',
        description: 'The first of 4 weeks of online onboarding before in person bootcamp',
        articleHeader: 'Josh Dale\'s Blog',
        article: 'This is my first blog post of many documenting my journey through the process of becoming a web developer.',
        articleHeader2: 'A little about me',
        article2: 'I love building things and seeing results. I\'m hoping these characteristics are a good indicator that I will enjoy a career in web development. When I was a kid, I would take apart all my toys and try to put them back together. In middle school, I taught myself to solder and rewire my guitars. This skill proved useful in college when I quickly became the guy everyone went to for electric instrument repairs and modifications.',
        qa: {
            q1: 'Was your first week what you expected? Why? Why not?',
            a1: 'This first week has been pretty brutal. I\'m still trying to figure out how to best juggle class and working a full time job.',
            q2: 'What are you excited or eager to learn more about?',
            a2: 'I can\'t wait to get more experience with the tools we are using in this course so that I can feel a little more comfortable with the course work.',
            q3: 'What is something about you that can only be learned by reading this blog?',
            a3: 'In college I was in a band that would travel and play at youth group conferences.'
        }
    },
    { // Week 3
        title: 'Week 3',
        date: 'Oct 7',
        description: 'The description for week 3',
        subHeader: 'The significance of pseudocoding',
        articleHeader: 'What is pseudocode?',
        article: 'Pseudocode is a version of code that is not specific to any programing language. It is a way of planning out code logically before any code is written.',
        articleHeader2: 'What is the significance of pseudocode?',
        article2: 'The art of coding can be very complex. Solving problems with code is not always easy and can involve many step that are heavily dependent on a sequential order. Pseudocoding before any code is written forces you to think about your code logically. When you are done, you should have a sort of road map that is easy to read an process as opposed to staring at a wall of code while trying to remember what each line does.' + <br></br> + 'Pseudocoding is definitely one of my weaknesses, I have trouble forgetting about specific programming languages. When ever I do spend extra time pseudocoding, it heavily reduces the time it take for me to build my projects. It takes out most of the headaches that come with writing code that is logic driven.'
    },
    { // Week 4
        title: 'Week 4',
        date: 'Oct 14',
        description: 'The description for week 4',
        subHeader: 'Intro to ReactJS',
        intro: 'This week was our first week with React. It was a rocky start, at first it seemed like we spent all this time learning JavaScript only to be confused by how similar yet different React is. Early on in the week, it all just magically clicked for me. This led to me being able to make large strides this week in terms of React concepts and being able to add stretch goals to my project.',
        qa: {
            q1: 'Do you think JavaScript Frameworks and Libraries are easy or hard to use? Why?',
            a1: 'I feel like this was possibly my best week of the bootcamp. For some reason React just clicked for me earlier in the week so I was able to spend more time putting things into practice as opposed to struggling with the basics of React.',
            q2: 'What Frameworks or Libraries are you interested in learning more about?',
            a2: 'There aren\'t any frameworks off the top of my head that I know enough about to think that they are something that I would want to learn. However, I\'m really enjoying React so far and I\'m excited to learn more of it\'s capabilities.',
            q3: 'Find one emerging JavaScript tool that you would like to learn more about or use in your final project.',
            a3: 'I think local storage seems to be an extremely useful tool that can enhance the user experience'
        }
    },
    { // Week 5
        title: 'Week 5',
        date: 'Oct 21',
        description: 'The description for week 5',
        qa: {
            q1: 'What have you learned about CLIs? Do you think they are scary?',
            a1: 'CLIs can be a big help in helping the user get around within an operating system. If you know your way around a CLI, you can quickly input commands, parameters, and call functions to accomplish tasks much quicker than trying to fumble around the interface of your os (operating system). I so far have a very limited understanding of CLIs and pretty much only know how to use it for commits, pushes, and branch creation. In the future I would like to spend more time learning how to become a CLI wizard but at the moment it seems like a whole other language to me.',
            q2: 'If you were to build a CLI, what would it do?',
            a2: 'Since I\'m basically a baby when it comes to my CLI knowledge and vocabulary, I don\'t know that I\'m in any real position to answer this question. Maybe I would make things dumbed down a bit so that some of the commands are a little more intuitive. Although I\'m sure the creators of each different CLI and people with a lot of experience think that it is super intuitive.',
            q3: 'List some ideas that without a Framework, would take you a long time to code',
            a3: 'Frameworks add a level of abstraction to your code so that there are less meticulous things for you to worry about. They simplify many things that would other wise be complicated. For instance, React gives you the ability to build elements and reuse them. This saves a ton of time when you are building webpages because you only have to build things like a navbar once for example.'
        }
        // blog: <BlogSprint5 />
    },
    { // Week 6
        title: 'Week 6',
        date: 'Oct 28',
        description: 'The description for week 6',
        subHeader: 'The halfway mark (Our first week of Python 🐍)',
        qa: {
            q1: 'Now that you are halfway through bootcamp, what has been the biggest hurdle that you have gone past? What do you think is going to be the next biggest thing to power through?',
            a1: 'The toughest thing I\'ve had to deal with so far is time management. I definitely haven\'t gotten past it yet either. I\'m really enjoying this journey of learning how to program but it\'s been really hard trying to find a work life balance. I have a pregnant wife at home and we both are so busy during the week so I really try to keep the amount of work that I do outside of class down to a minimum. I struggle with the thought that I might be doing myself a disservice and that I should put more work in outside of class, especially when I see and hear about how much extra work some of my other classmates are putting in. Although so far I don\'t feel like I have put myself in a bad spot. Somehow I think I\'m managing to keep up with the class and I don\'t feel like my work is coming out less than average. I\'m telling myself that as soon as my projects start to suffer is when I\'ll kick it into overdrive outside of class time. So far nothing has been a bigger hurdle than this and I don\'t see anything else being harder than it.',
            q2: 'Compared to earlier, what are three ideas you might want to do for your final project? Are they the same ideas as before, or have they changed now that you understand more about the technology and your limitations?',
            o1: 'Small business website',
            li1: 'From the start of the bootcamp I had the idea to make a website for my friend\'s coffee cart business. I think it would be a good project for me since I think the strongest projects I\'ve had so far have been front-end forward. The website would need to have a form for business inquiries and I could add e-commerce to the site. I think this would have a good amount of back-end so that way I can show my back-end abilities as well as my skills with front-end design.',
            o2: 'Discord/messaging app clone',
            li2: 'I don\'t have many ideas for this yet as I have been really focused form the start on implementing my first idea as my final project. I think a messaging app could be a fun build as I could put a creative spin on it possibly. However it does scare me as I have no idea even where to start with it. I foresee myself wasting a lot of time on the front-end.',
            o3: 'IMDB clone',
            li3: 'IMDB but for session musicians. There are a ton of super talented musicians that have played on countless songs that you have heard but otherwise would have to do a lot of research to connect the musician to the song.',
            q3: 'What surprised you about your first week in Python and how was it different from your first week in JavaScript?',
            a3: 'It was way easier than JavaScript because I can now use my knowledge of the possibilities of JavaScript and apply them to python. I also went back and converted some of my old ',
            href: 'https://www.codewars.com/',
            a: 'JS katas and converted them to python. This was really helpful in learning the syntactical differences between the two languages.'

        },
        // blog: <BlogSprint6 />
    },
    { // Week 7
        title: 'Week 7',
        date: 'Nov 1',
        description: 'The description for week 7',
        // blog: <BlogTemplate />
    },
]

export default blogList