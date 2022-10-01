import DsoLogo from '../img/dso/dsoLogo.png'
import DsoPic from '../img/dso/dsoPic.png'
import BumblebeeLogo from '../img/bumblebee/bumblebeeLogo.png'
import BumblebeeLogo2 from '../img/bumblebee/bumblebeeLogo2.png'
import BumblebeePic from '../img/bumblebee/bumblebeePic.png'
import ParkWhereLogo from '../img/parkWhere/parkwhereLogo.png'
import ParkWherePic from '../img/parkWhere/parkWherePic.png'
import DataSciCompLogo from '../img/dataSciComp/dataSciCompLogo.png'
import DataSciCompPic from '../img/dataSciComp/dataSciCompPic.png'
import FacebookLogo from '../img/facebookComments/facebookLogo.png'
import FacebookCommentsPic from '../img/facebookComments/facebookCommentsPic.png'
import ProtoslabsLogo from '../img/protoslabs/protoslabsLogo.png'
import ProtoslabsGroupPic from '../img/protoslabs/groupPic.jpg'
import OrcatechLogo from '../img/orcatech/orcatechLogo.jpg'
import GreyhatsLogo from '../img/greyhats/greyhatsLogo.png'
import EScholarsLogo from '../img/escholars/escholarsLogo.jpg'
import Rc4Logo from '../img/rc4/rc4Logo.jpg'

// Skill Icons
import ProgrammingIcon from '../img/skillsIcons/programmingIcon.svg'
import AnalyticsIcon from '../img/skillsIcons/dataAnalyticsIcon.svg'
import CloudIcon from '../img/skillsIcons/cloudIcon.svg'
import CybersecurityIcon from '../img/skillsIcons/cybersecurityIcon.svg'
import OthersIcon from '../img/skillsIcons/othersIcon.svg'

const data = {
    tabsData: [
        {
            tab: 'Skills',
            id: 'skills'
        },
        {
            tab: 'Projects',
            id: 'projects'
        },
        {
            tab: 'Work Experience',
            id: 'work-exp'
        },
        {
            tab: 'Extra Curricular', 
            id: 'extra-curricular'
        }, 
        {
            tab: 'Contact',
            id: 'contact'
        }
    ], 
    linksData: {
        resume: 'https://drive.google.com/file/d/1h6Bv74Fimp5ZOgrtJDy-9KQYlUO-SpmM/view?usp=sharing', 
        cv: 'https://drive.google.com/file/d/1Yu75tE3H1BY-mO1GiZm-VSWQGuh1BNxr/view?usp=sharing', 
        email: 'mailto:xinyu.foong@gmail.com', 
        github: 'https://github.com/Uxinnn', 
        linkedin: 'https://www.linkedin.com/in/foongxinyu/', 
    }, 
    skillsData: [
        {
            category: 'Programming/ Web', 
            icon: ProgrammingIcon, 
            items: ['Python', 'C++', 'Java', 'C', 'Bash', 'Powershell', 'Assembly', 'HTML', 'CSS', 'Javascript', 'React MUI', 'Postgresql', 'DynamoDB', 'sqlAlchemy']
        },
        {
            category: 'Data Science', 
            icon: AnalyticsIcon, 
            items: ['Elasticsearch', 'Logstash', 'Kibana', 'Beats', 'Tableau', 'Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'OpenCV']
        },
        {
            category: 'Cloud Computing', 
            icon: CloudIcon, 
            items: ['Serverless Framework', 'Terraform', 'AWS']
        },
        {
            category: 'Cybersecurity', 
            icon: CybersecurityIcon, 
            items: ['Mitre ATT&CK Matrix', 'Powershell Empire', 'Arkime/Moloch', 'Wireshark']
        },
        {
            category: 'Others', 
            icon: OthersIcon, 
            items: ['Git', 'Docker', 'ROS', 'Verilog']
        },
    ],
    workExperienceData: [
        {
            job: 'Software Engineer', 
            org: 'Protoslabs', 
            duration: 'Jul 2022 - Aug 2022', 
            description: "Developed the backend codebase for Protoslabs' flagship Cyber Risk Intelligence platform, Nexus."
        }, 
        {
            job: 'Software Development Intern', 
            org: 'Protoslabs', 
            duration: 'Jan 2022 - Jun 2022', 
            description: "Analyzed data and developed the backend codebase for Protoslabs' flagship Cyber Risk Intelligence platform, Nexus."
        }, 
        {
            job: 'Research Intern', 
            org: 'Cybersecurity Labs, DSO', 
            duration: 'May 2021 - Jul 2021', 
            description: 'Constructed data pipelines and shell scripts for forensic boxes.'
        }, 
        {
            job: 'Research Intern', 
            org: 'Cybersecurity Labs, DSO', 
            duration: 'Jan 2020 - Jul 2020', 
            description: 'Developed automation tools for cybersecurity.'
        }, 
        {
            job: 'Air Force Technician (NS)', 
            org: '145 Squadron, RSAF', 
            duration: 'Jan 2018 - Nov 2019', 
            description: 'In charge of weapon loading and maintenance of the F16D+ fighter jets.'
        }, 
    ], 
    testimonialsData: [
        {
            supervisor: 'Teo Hong Siang', 
            position: 'Principal Member of Technical Staff', 
            company: 'DSO National Laboratories', 
            quote: '...right off the bat, he showed his passion for learning and a hunger for discovery. We had no hesitation taking him in.'
        }, 
        {
            supervisor: 'Simeon Tan', 
            position: 'Chief Technology Officer, Co-Founder', 
            company: 'Protos Labs', 
            quote: 'Xin Yu has proven to be an exceptional contributor to the team, performing at standards equivalent of more senior developers.'
        }
    ], 
    extraCurricularsData: [
        {
            title: 'OrcaCode - Cofounder', 
            duration: 'Aug 2021 - Dec 2021', 
            pic: Rc4Logo, 
            description: 'OrcaCode is a Leetcode/programming interest group that I co-founded during my stay at my residential college, Residential College 4. OrcaCode was founded to not only bring together residents who have an interest in programming, but also function as an avenue where we could help each other improve on our programming skills. In the first 3 months of creating OrcaCode, the interest group had grown to have on average 10 weekly attendees.'
        }, 
        {
            title: 'NUS Greyhats - Member', 
            duration: 'Jan 2022 - Present', 
            pic: GreyhatsLogo, 
            description: 'Greyhats is an NUS wide cybersecurity interest group. Our activities mainly revolve around participating in Capture-The-Flag (CTF) competitions and organizing talks and activities to interact with cybersecurity professionals in the industry.'
        }, 
        {
            title: 'OrcaTech - Events Director', 
            duration: 'Aug 2021 - May 2022', 
            pic: OrcatechLogo, 
            description: 'OrcaTech is a technology interest group in my residential college, Residential College 4. The focus of OrcaTech is to not only bring technology enthusiasts together, but to spread this interest in technology to the wider college community. My role as Events Director revolves around organizing technology-related events for the college, such as an intro to programming workshop and an intro to arduino workshop.'
        },
        {
            title: 'Bumblebee - Optical Flow junior sub-team leader', 
            duration: 'Aug 2020 - May 2021', 
            pic: BumblebeeLogo2, 
            description: 'Bumblebee is an NUS wide interest group focused on building autonomous maritime vehicles. Then, my responsilibity was in leading my team to develop software that helps an autonomous underwater vehicle (AUV) navigate through a swimming pool using computer vision techniques. As a sub-team leader, my role involved working with other software groups to integrate all our software together. I also had to liase with the mechanical and electrical teams working on the AUV to ensure our software and hardware can be integrated together easily.'
        },
        {
            title: 'OrcaTech - Makerspace, Projects, Events Subcommittee', 
            duration: 'Aug 2020 - May 2021', 
            pic: OrcatechLogo, 
            description: "OrcaTech is a technology interest group in my residential college, Residential College 4. During my first year in the college, I took on 3 subcommittee roles in OrcaTech. The Makerspace subcommittee helps to maintain the college's makerspace while the projects subcommittee's role is to develop technological solutions to improve the quality of life for residents in the college. Lastly, the events subcommittee helps to organize technology-related events for college residents to participate in."
        },
        {
            title: 'E-Scholars Club - Events Subcommittee', 
            duration: 'Aug 2020 - May 2021', 
            pic: EScholarsLogo, 
            description: 'E-Scholars Club is a club that serves the Engineering Scholars population in NUS. My role in the club is to help organize events to strengthen the E-Scholars community.'
        },
    ], 
    projectsData: [
        {
            title: 'Software Engineer', 
            subtitle: 'Protoslabs 2022', 
            thumbnail: ProtoslabsLogo,
            pic: ProtoslabsGroupPic, 
            description: "I started out as an intern at Protoslabs from January to June, before transitioning to a proper Software Engineer role from July to August. <br/>My main responsilibity was developing new functionalities, APIs, and data connectors for the backend of Protoslabs' flagship Cyber Risk Intelligence platform, Nexus. I also provisioned and managed the AWS resources used by Nexus and an internal application, automating the whole process with Terraform. Additionally, I helped to process and analyze cyber loss data too. <br/>My experience at Protoslabs has definitely enabled me to grow not just technically, but also as an effective team member. Furthermore, interacting with the founders of Protoslabs, who were previously Booz Allen cyber consultants, has given me many deep insights into the cybersecurity industry.", 
            link: '', 
            techUsed: ['Python', 'Serverless Framework', 'Postgresql', 'AWS', 'Terraform', 'Pandas', 'Numpy']
        }, 
        {
            title: 'Cybersecurity Research Intern',
            subtitle: 'DSO 2020', 
            thumbnail: DsoLogo,
            pic: DsoPic,
            description: 'I worked on a few projects throughout this internship which lasted from January to July 2020. Namely, I:<ul><li>Developed AI models in Python to predict upcoming threats by processing texts in the wild.</li><li>Integrated open-source tools such as Powershell Empire into the infrastructure of various cybersecurity tools.</li><li>I managed a Capture-the-Flag competition as part of an intern engagement program.</li></ul>This internship was particularly rewarding as it was what got me interested in how artificial intelligence can be applied to the field of cybersecurity.',
            link: '', 
            techUsed: ['Python', 'Scikit-learn', 'Pandas', 'Numpy', 'PyTorch', 'SpaCy', 'AWS', 'Powershell Empire', 'Mitre ATT&CK Matrix']
        }, 
        {
            title: 'Cybersecurity Research Intern',
            subtitle: 'DSO 2021', 
            thumbnail: DsoLogo,
            pic: DsoPic,
            description: 'I did this internship during the summer break of my first year in university, from May 2021 to July 2021. Then, I focused on 2 projects. Firstly, I helped developed forensic boxes from scratch that are able to ingest and analyze data. The data pipeline is constructed using Logstash to ingest data, Elasticsearch as a database, and Kibana to visualize the data. In addition, I developed bash scripts to automate the hardening of Debian operating systems.', 
            link: '', 
            techUsed: ['Elasticsearch', 'Logstash', 'Kibana', 'Beats', 'Bash Scripting', 'Docker', 'Arkime/Moloch']
        },
        {
            title: 'Hornet 6.0',
            subtitle: 'Bumblebee 2020', 
            thumbnail: BumblebeeLogo,
            pic: BumblebeePic,
            description: 'I led the junior optical flow sub-team of Bumblebee, an NUS Engineering team specialized in building and designing autonomous maritime vehicles. This year-long project involved the use of computer vision to control the movement of an Underwater Autonomous Vehicle (UAV) in a swimming pool. To achieve this, a downward facing camera was fitted onto the UAV to capture a video stream of the pool tiles. By processing this video stream using computer vision and by pre-measuring the dimensions of the pool tiles, we were able to plot the trajectory of the UAV and determine the coordinate location of the UAV itself. Using this information, we can then control the UAV. I was also involved in the integration and calibration of the camera with the single board computer we were using.', 
            link: '', 
            techUsed: ['Python', 'OpenCV', 'C++', 'ROS']
        },
        {
            title: 'ParkWhere? Mobile Application',
            subtitle: 'Hack&Roll 2021', 
            thumbnail: ParkWhereLogo,
            pic: ParkWherePic,
            description: 'ParkWhere? is a mobile application that help drivers to check the current and projected availability of parking lots in public carparks. I was in charge of constructing a simple neural network to predict the number of available parking lots at a given time based on historical data. This project was done as part of Hack&Roll 2021, a 1.5 days annual hackathon organized by NUS.', 
            link: 'https://devpost.com/software/parkwhere', 
            techUsed: ['Python', 'TensorFlow', 'Flutter']
        },
        {
            title: 'Chip counting & defect detection',
            subtitle: 'NUS Data Science Competition 2021', 
            thumbnail: DataSciCompLogo,
            pic: DataSciCompPic,
            description: 'Computer chips are produced by industrial machines but are still counted and checked for defects using the human eye. This project involved the use of computer vision to automate the counting, verification, and defect detection of computer chips. I was mainly involved in trying to construct a neural network that is able to detect and read handwritten digits in a given image and verify that the number of chips in the image is as written. This project was done as part of the annual NUS Data Science Competition, sponsored by HP, and was part of the top 10 entries submitted in the competition.', 
            link: 'https://github.com/Uxinnn/nus-data-science-competition-2021', 
            techUsed: ['Python', 'OpenCV', 'Keras']
        },
        {
            title: 'Facebook Comments Prediction',
            subtitle: 'Machine Learning Module 2021', 
            thumbnail: FacebookLogo,
            pic: FacebookCommentsPic,
            description: 'This project uses machine learning to predict the number of comments a Facebook post will get and could potentially help Facebook content creators to improve their viewership numbers. The project uses the publicly available Facebook comments dataset on the UCI Machine Learning Repository and implemented a unique approach to solve the problem statement as the data was heavily skewed to the right (Due to most Facebook posts having 0 comments). It was done as part of the NUS module CS3244, Machine Learning, and scored a total of 96.8/100. The median score for the projects was 87.6.', 
            link: 'https://colab.research.google.com/drive/1MCpLMABnPq8JVjcynBtSa2SEDAgLuCQg?usp=sharing', 
            techUsed: ['Python', 'Scikit-learn', 'Pandas', 'Numpy']
        },
    ]
}

export default data;
