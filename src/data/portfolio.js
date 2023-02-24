import crwnclothing1 from '../assets/crwnclothing1.jpg';
import smartbrain1 from '../assets/smartbrain1.jpg';
import datasetgenerator1 from '../assets/datasetgenerator1.jpg';


export const portfolio = [
    {
        title: 'Crwn-Clothing',
        description: 'Crwn-Clothing is a professional and well-designed e-commerce platform that offers users a seamless and enjoyable shopping experience. Through the platform, users can easily add items to their cart, complete checkout, and more. The site provides basic authentication and Google Sign-In via Firebase integration and Stripe API is implemented for secure payment processing. The state management of the platform is accomplished using Redux, while Netlify is used for deployment. Finally, the site is thoroughly tested using Jest and Enzyme, ensuring that all functions and features operate smoothly.',
        image1: crwnclothing1,
        stack: ['JavaScript', 'TypeScript', 'React', 'Redux', 'Sass', 'Firebase', 'Stripe', 'Jest', 'Netflify'],
        github: 'https://github.com/hdahou/crwn-clothing'
    },
    {
        title: 'Smart Brain',
        description: 'Smart-Brain is a powerful facial recognition application that enables users to upload images and detect faces accurately. The app\'s sleek UI is built using React and Tachyons, while the back-end is powered by Node and Express, storing user data and using a PostgreSQL database for user authentication. The Clarifai API is integrated with the platform to identify the face locations, apply styles, and put a small box around the detected faces. This cutting-edge technology results in an impressive facial recognition capability that delivers an efficient and powerful face detection experience. Additionally, the app scores users based on their activity and is deployed through Heroku for reliable and scalable deployment.',
        image1: smartbrain1,
        stack: ['JavaScript', 'React', 'Node', 'Express', 'PostgreSQL', 'Heroku'],
        github: 'https://github.com/hdahou/smartbrain'

    },
    {
        title: 'Analytics Dataset Generator',
        description: 'The Dataset-Generator Gadget is a powerful and useful tool that allows users to create mock datasets based on report models. The app\'s primary feature is its ability to send and store datasets in eGain Analytics using eGain REST APIs. This capability makes it easy to generate reports for demo purposes. Users can also pull datasets back into the gadget, where they can edit, update, and delete them. Additionally, a calculator tool has been built into the gadget to help users calculate aggregations for report attributes. The app includes a tooltip to provide users with guidance on how to use the tool effectively. The app\'s UI is built using React and Tachyons, and Webpack is used for bundling.',
        image1: datasetgenerator1,
        stack: ['JavaScript', 'React', 'Webpack', 'REST API\'s'],
        github: 'https://github.com/hdahou/dataset-generator'
    }
];