
export const allProjects = [
    {
        id: 1,
        projectName: 'Music Schoolling BD',
        projectImage: 'https://i.ibb.co/c1t3zs4/img1.png',
        liveLink: 'https://music-scholing.web.app/',
        serverSideCode: 'https://github.com/emon3455/music-school-server',
        clientSideCode: 'https://github.com/emon3455/music-school',
        additionalImages: [
            'https://i.ibb.co/W0cTyG8/img1.jpg',
            'https://i.ibb.co/FJxcgjZ/img2.jpg',
            'https://i.ibb.co/bmcWWmL/img3.jpg',
            'https://i.ibb.co/WGrVWZ8/img4.jpg',
            'https://i.ibb.co/ThjdCZk/img5.jpg',
            'https://i.ibb.co/qdY9Fch/img6.jpg',
            'https://i.ibb.co/z5YPjrT/img7.jpg',
        ],
        projectFeatures: [
            'Crud Operations',
            'Sorting',
            'Authentication',
            'Authorization',
            'Payment',
            '3 Pannel: Admin, Student, Instructor',
        ],
        projectDescription:
            'Music Schoolling BD is an online music School website that provides many more features with 3 pannels like as: admin,instructor,student.',
    },
    {
        id: 2,
        projectName: 'Toy Cars Master',
        projectImage: 'https://i.ibb.co/9yc4H07/img1.png',
        liveLink: 'https://toy-cars-master.web.app/',
        serverSideCode: 'https://github.com/emon3455/toyCars-master-server',
        clientSideCode: 'https://github.com/emon3455/toyCars-Master',
        additionalImages: [
            'https://i.ibb.co/DVfPmcG/img1.jpg',
            'https://i.ibb.co/DDmbZFf/img2.jpg',
            'https://i.ibb.co/ydBPKzR/img3.jpg',
        ],
        projectFeatures: [
            'Crud Operations',
            'Sorting',
            'Authentication',
            'Authorization',
        ],
        projectDescription:
            'Toy Cars Master is an immersive virtual experience where users can buy vintage cars in toys version also user can sell their toys.',
    },
    {
        id: 3,
        projectName: 'Food house',
        projectImage: 'https://i.ibb.co/NxWF7vq/img1.png',
        liveLink: 'https://thai-master-chef.web.app/',
        serverSideCode: 'https://github.com/emon3455/Food-House-Server',
        clientSideCode: 'https://github.com/emon3455/Food-House-Client',
        additionalImages: [
            'https://i.ibb.co/85wdm6W/img7.png',
            'https://i.ibb.co/T2fV7qn/img3.jpg',
            'https://i.ibb.co/3C7L1yC/img4.jpg',
            'https://i.ibb.co/gw7cmpv/img5.jpg',
            'https://i.ibb.co/qpgSqrC/img6.jpg',            
            'https://i.ibb.co/1dccthH/img2.png',
        ],
        projectFeatures: [
            'Crud Operations',
            'Sorting',
            'Authentication',
            'Authorization',
            'Payment',
            '2 Pannel: Admin,User',
        ],
        projectDescription:
            'This is a restaurant website. From this website user can order food pay money and also do many more operation it has 2 Pannel like as: Admin and User',
    },
];


export const singleProject = (id) =>{

    const project = allProjects.find(prj=> prj.id==id);
    return project;

}