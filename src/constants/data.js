import book1 from '../assets/images/bookcover1.jpg'
import book2 from '../assets/images/bookcover2.jpg'
import book3 from '../assets/images/bookcover3.jpg'
import book4 from '../assets/images/bookcover4.jpg'
import book5 from '../assets/images/bookcover5.jpg'
import book6 from '../assets/images/bookcover6.jpg'
import book7 from '../assets/images/bookcover7.jpg'


export const Filters = [
    { id: "action", label: "action" },
    { id: "adventure", label: "adventure" },
    { id: "comedy", label: "comedy" },
    { id: "drama", label: "drama" },
    { id: "fantasy", label: "fantasy" },
    { id: "historical fiction", label: "historical fiction" },
    { id: "horror", label: "horror" },
    { id: "mystery", label: "mystery" },
    { id: "romance", label: "romance" },
    { id: "science fiction", label: "science fiction" },
    { id: "thriller", label: "thriller" },
    { id: "western", label: "western" },
    { id: "crime", label: "crime" },
    { id: "biography", label: "biography" },
    { id: "self-help", label: "self-help" },
];

export const Books = [
    {id: 'book1', URL: book1, title: 'Whispers of the Enchanted Forest'},
    {id: 'book2', URL: book2, title: 'Ephemeral Echoes: A Time Traveler’s Tale'},
    {id: 'book3', URL: book3, title: 'Chronicles of the Celestial Kingdom'},
    {id: 'book4', URL: book4, title: 'The Quantum Paradox'},
    {id: 'book5', URL: book5, title: 'Serpents and Stargazers'},
    {id: 'book6', URL: book6, title: 'Alchemy of the Mind'},
    {id: 'book7', URL: book7, title: 'Veil of Illusions'},
];

export const Formats = [
    {format: 'PDF', explanation: '(Portable Document Format): Widely used for preserving document formatting across devices. Ideal for consistent viewing and printing.'},
    {format: 'DOC', explanation: '(Microsoft Word Document): Associated with Microsoft Word, offering editable formats suitable for customization.'},
    {format: 'PDB', explanation: ' (PalmDOC eBook): Originally used for Palm OS devices, optimized for smaller screens and efficient eBook reading.'},
];