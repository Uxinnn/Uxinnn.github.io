import DsoLogo from '../img/dso/dsoLogo.png'
import DsoPic from '../img/dso/dsoPic.png'
import BumblebeeLogo from '../img/bumblebee/bumblebeeLogo.png'
import BumblebeePic from '../img/bumblebee/bumblebeePic.png'
import ParkWhereLogo from '../img/parkWhere/parkwhereLogo.png'
import ParkWherePic from '../img/parkWhere/parkWherePic.png'
import DataSciCompLogo from '../img/dataSciComp/dataSciCompLogo.png'
import DataSciCompPic from '../img/dataSciComp/dataSciCompPic.png'
import FacebookLogo from '../img/facebookComments/facebookLogo.png'
import FacebookCommentsPic from '../img/facebookComments/facebookCommentsPic.png'

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
            tab: 'Contact',
            id: 'contact'
        }
    ], 
    skillsData: [
        {
            category: 'Programming', 
            items: ['Python', 'C++', 'Java', 'C', 'Bash', 'Powershell', 'Assembly', 'HTML', 'CSS', 'Javascript']
        },
        {
            category: 'Data Analytics', 
            items: ['Elasticsearch', 'Logstash', 'Kibana', 'Beats', 'Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'OpenCV']
        },
        {
            category: 'DevOps', 
            items: ['Git', 'Docker']
        },
        {
            category: 'Cybersecurity', 
            items: ['Mitre ATT&CK Matrix', 'Metasploit', 'Powershell Empire', 'Arkime/Moloch', 'Wireshark']
        },
        {
            category: 'Robotics', 
            items: ['ROS']
        },
    ],
    workExperienceData: [
        {
            job: 'Research Intern', 
            org: 'Cybersecurity Labs, DSO', 
            duration: 'May 2021 - Jul 2021', 
            description: 'Constructed data pipelines and shell scripts for forensic boxes. More details can be found in the projects section.'
        }, 
        {
            job: 'Research Intern', 
            org: 'Cybersecurity Labs, DSO', 
            duration: 'Jan 2020 - Jul 2020', 
            description: 'Developed automation tools for cybersecurity. More details can be found in the projects section.'
        }, 
        {
            job: 'Air Force Technician (NS)', 
            org: '145 Squadron, RSAF', 
            duration: 'Jan 2018 - Nov 2019', 
            description: 'In charge of weapon loading and maintenance of the F16-D+ fighter jets.'
        }, 
    ], 
    projectsData: [
        {
            title: 'Cybersecurity Intern - DSO 2020',
            thumbnail: DsoLogo,
            pic: DsoPic,
            description: 'I worked on a few projects throughout this internship which lasted from January to July 2020. Namely, I:<ul><li>Developed AI models in Python to predict upcoming threats by processing texts in the wild.</li><li>Integrated open-source tools such as Powershell Empire into the infrastructure of various cybersecurity tools.</li><li>I managed a Capture-the-Flag competition as part of an intern engagement program.</li></ul>This internship was particularly rewarding as it was what got me interested in how artificial intelligence can be applied to the field of cybersecurity.',
            link: '', 
            techUsed: ['Python', 'Scikit-learn', 'Pandas', 'Numpy', 'PyTorch', 'SpaCy', 'AWS', 'Powershell Empire', 'Mitre ATT&CK Matrix']
        }, 
        {
            title: 'Cybersecurity Intern - DSO 2021',
            thumbnail: DsoLogo,
            pic: DsoPic,
            description: 'I did this internship during the summer break of my first year in university, from May 2021 to July 2021. Then, I focused on 2 projects. Firstly, I helped developed forensic boxes from scratch that are able to ingest and analyze data. The data pipeline is constructed using Logstash to ingest data, Elasticsearch as a database, and Kibana to visualize the data. In addition, I developed bash scripts to automate the hardening of Debian operating systems.', 
            link: '', 
            techUsed: ['Elasticsearch', 'Logstash', 'Kibana', 'Beats', 'Bash Scripting', 'Docker', 'Arkime/Moloch']
        },
        {
            title: 'Hornet 6.0',
            thumbnail: BumblebeeLogo,
            pic: BumblebeePic,
            description: 'I led the junior optical flow sub-team of Bumblebee, an NUS Engineering team specialized in building and designing autonomous maritime vehicles. This year-long project involved the use of computer vision to control the movement of an Underwater Autonomous Vehicle (UAV) in a swimming pool. To achieve this, a downward facing camera was fitted onto the UAV to capture a video stream of the pool tiles. By processing this video stream using computer vision and by pre-measuring the dimensions of the pool tiles, we were able to plot the trajectory of the UAV and determine the coordinate location of the UAV itself. Using this information, we can then control the UAV. I was also involved in the integration and calibration of the camera with the single board computer we were using.', 
            link: '', 
            techUsed: ['Python', 'OpenCV', 'C++', 'ROS']
        },
        {
            title: 'ParkWhere? Mobile Application',
            thumbnail: ParkWhereLogo,
            pic: ParkWherePic,
            description: 'ParkWhere? is a mobile application that help drivers to check the current and projected availability of parking lots in public carparks. I was in charge of constructing a simple neural network to predict the number of available parking lots at a given time based on historical data. This project was done as part of Hack&Roll 2021, a 1.5 days annual hackathon organized by NUS.', 
            link: 'https://devpost.com/software/parkwhere', 
            techUsed: ['Python', 'TensorFlow', 'Flutter']
        },
        {
            title: 'Chip counting & defect detection',
            thumbnail: DataSciCompLogo,
            pic: DataSciCompPic,
            description: 'Computer chips are produced by industrial machines but are still counted and checked for defects using the human eye. This project involved the use of computer vision to automate the counting, verification, and defect detection of computer chips. I was mainly involved in trying to construct a neural network that is able to detect and read handwritten digits in a given image and verify that the number of chips in the image is as written. This project was done as part of the annual NUS Data Science Competition, sponsored by HP, and was part of the top 10 entries submitted in the competition.', 
            link: 'https://github.com/Uxinnn/nus-data-science-competition-2021', 
            techUsed: ['Python', 'OpenCV', 'Keras']
        },
        {
            title: 'Facebook Comments Prediction',
            thumbnail: FacebookLogo,
            pic: FacebookCommentsPic,
            description: 'This project uses machine learning to predict the number of comments a Facebook post will get and could potentially help Facebook content creators to improve their viewership numbers. The project uses the publicly available Facebook comments dataset on the UCI Machine Learning Repository and implemented a unique approach to solve the problem statement as the data was heavily skewed to the right (Due to most Facebook posts having 0 comments). It was done as part of the NUS module CS3244, Machine Learning, and scored a total of 96.8/100. The median score for the projects was 87.6.', 
            link: 'https://colab.research.google.com/drive/1MCpLMABnPq8JVjcynBtSa2SEDAgLuCQg?usp=sharing', 
            techUsed: ['Python', 'Scikit-learn', 'Pandas', 'Numpy']
        },
    ]
}

export default data;
