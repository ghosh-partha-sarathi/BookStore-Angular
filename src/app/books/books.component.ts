import { Component, OnInit } from '@angular/core';
import { Book } from '../objects/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
 
export class BooksComponent implements OnInit {
  books: Book[] = [
  	{
  		name: 'Wings of Fire',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: '',
  	 	year: 1999
  	},
  	{
  		name: 'A Vision for the New Millennium',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: '',
  	 	year: 1998
  	},
  	{
  		name: 'Ignited Minds: Unleashing the Power within India',
  	 	author: 'APJ Adul Kalam',
  	 	coAuthor: '',
  	 	year: 2002
  	},
  	{
  		name: 'The Luminous Sparks: A Biography in Verse and Colours',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: '',
  	 	year: 2004
  	},  	  	
  	{
  		name: 'Guiding Souls: Dialogues on the Purpose of Life',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: 'Arun Tiwari', 
  	 	year: 2005
  	},  	  	
  	{
  		name: 'Mission of India: A Vision of Indian Youth',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: '',
  	 	year: 2005
  	},  	  	
  	{
  		name: 'Inspiring Thoughts: Quotation Series',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: '',
  	 	year: 2007
  	},  	  	
  	{
  		name: 'You Are Born to Blossom: Take My Journey Beyond',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: 'Arun Tiwari', 
  	 	year: 2011
  	},  	  	
  	{
  		name: 'The Scientific India: A Twenty First Century Guide to the World around Us',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: 'Y. S. Rajan', 
  	 	year: 2011
  	},  	  	
  	{
  		name: 'Failure to Success: Legendry Lives',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: 'Arun Tiwari', 
  	 	year: 2011
  	},  	  	
  	{
  		name: 'Target 3 Billion',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: '‎Srijan Pal Singh', 
  	 	year: 2011
  	},  	  	
  	{
  		name: 'You are Unique: Scale New Heights by Thoughts and Actions',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: 'S. Poonam Kohli', 
  	 	year: 2012
  	},  	  	
  	{
  		name: 'Turning Points: A Journey through Challenges',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: '',
  	 	year: 2012
  	},  	  	
  	{
  		name: 'Indomitable Spirit',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: '',
  	 	year: 2013
  	},  	  	
  	{
  		name: 'Spirit of India',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: '',
  	 	year: 2013
  	},  	  	
  	{
  		name: 'Thoughts for Change: We Can Do It',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: 'A. Sivathanu Pillai', 
  	 	year: 2013
  	},  	  	
  	{
  		name: 'My Journey: Transforming Dreams into Actions',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: '',
  	 	year: 2013
  	},  	  	
  	{
  		name: 'Governance for Growth in India',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: '',
  	 	year: 2014
  	},  	  	
  	{
  		name: 'Manifesto for Change',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: 'V. Ponraj', 
  	 	year: 2014
  	},  	  	
  	{
  		name: 'Forge Your Future: Candid, Forthright, Inspiring',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: '',
  	 	year: 2014
  	},
  	{
  		name: 'Beyond 2020: A Vision for Tomorrow’s India',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: '',
  	 	year: 2014
  	},
  	{
  		name: 'The Guiding Light: A Selection of Quotations from My Favourite Books',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: '',
  	 	year: 2015
  	},
  	{
  		name: 'Reignited: Scientific Pathways to a Brighter Future',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: 'Srijan Pal Singh', 
  	 	year: 2015
  	},  	  	
  	{
  		name: 'The Family and the Nation',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: 'Acharya Mahapragya', 
  	 	year: 2015
  	},  	  	
  	{
  		name: 'Transcendence My Spiritual Experiences',
  	 	author: 'APJ Abdul Kalam',
  	 	coAuthor: 'Arun Tiwari', 
  	 	year: 2015
  	}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
