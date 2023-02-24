import jsruntime from '../assets/jsruntime.jpg';
import bstree from '../assets/bstree.jpg';
import memoization from '../assets/memoization.jpg';
import vueLogo from '../assets/vueLogo.jpg';
import searching from '../assets/searching.jpg';

export const articles = [
    {
        title: "Asynchronous JS",
        image: jsruntime,
        topic: "JavaScript",
        alt: "jsruntime image",
        description: "Every developer when starting out has difficulties understanding aysnc JS. It's a concept that doesn't tend to go in the first time round.",
        date: 'April 7, 2022',
        time: 8,
        id: 1,
        link: 'https://www.linkedin.com/pulse/asynchronous-js-promises-async-await-job-queue-more-hakeem-dahou/'
    },
    {
        title: "Binary Trees",
        image: bstree,
        alt: "bstree image",
        topic: "Data Structures",
        description: "Tree structures appear over and over again in computer science and FAANG companies require knowledge of tree data structures & algorithms to crack their interviews.",
        date: 'April 28, 2022',
        time: 8,
        id: 2,
        link: 'https://www.linkedin.com/pulse/trees-binary-search-implementation-heaps-more-hakeem-dahou/'
    },
    {
        title: "Dynamic Programming",
        image: memoization,
        alt: "memoization image",
        topic: "JavaScript",
        description: "I explain how dynamic programming is essentially just a buzzword and the key concepts behind it using the Fibonacci sequence as an illustrative example.",
        date: 'May 16, 2022',
        time: 8,
        id: 3,
        link: 'https://www.linkedin.com/pulse/dynamic-programming-caching-memoization-example-why-hakeem-dahou/'
    },
    {
        title: "Vue.js - An Introduction",
        image: vueLogo,
        topic: "Vue",
        alt: "vue image",
        description: "Vue.js is a popular JavaScript framework that offers a range of benefits for developers building web applications. In this article, we explore the advantages of using Vue.js.",
        date: 'Aug 26, 2022',
        time: 8,
        id: 4,
        link: 'https://www.linkedin.com/pulse/vuejs-short-introduction-hakeem-dahou/'
    },
    {
        title: "Searching Algorithms",
        image: searching,
        alt: "search algo image",
        topic: "Data Structures",
        description: "Searching algorithms, breadth first search, depth first search, how we can implement this in code on a binary tree, the benefits and drawbacks of each algorithm.",
        date: 'May 15, 2022',
        time: 8,
        id: 5,
        link: 'https://www.linkedin.com/pulse/searching-algorithms-traversals-breadth-first-search-hakeem-dahou/'
    }
];
