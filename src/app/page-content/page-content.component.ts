import { Component, OnInit } from '@angular/core';
import { Library } from '../objects/Library';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {	
  libraries: Library[] = [
  	{
  	 	name: "British Library",
  		country: "United Kingdom",
  		city: "London",
  		booksCount: "170-200 million",
  		visitors: "1.75 million",
  		budget: "141 million(£)",
  		staff: "1977",
  		flagUrl: "//upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/23px-Flag_of_the_United_Kingdom.svg.png",
  		flagUrlSet: "//upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/35px-Flag_of_the_United_Kingdom.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/46px-Flag_of_the_United_Kingdom.svg.png 2x"
  	},
  	{
  	 	name: "Library of Congress",
  		country: "United States",
  		city: "Washington D.C.",
  		booksCount: "168 million",
  		visitors: "1.8 million",
  		budget: "642.04 million(US$)",
  		staff: "3149",
  		flagUrl: "//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png",
  		flagUrlSet: "//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/35px-Flag_of_the_United_States.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/46px-Flag_of_the_United_States.svg.png 2x"
  	},
  	{
  	 	name: "New York Public Library",
  		country: "United States",
  		city: "New York",
  		booksCount: "55 million",
  		visitors: "18 million",
  		budget: "250 million(US$)",
  		staff: "3000",
  		flagUrl: "//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png",
  		flagUrlSet: "//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/35px-Flag_of_the_United_States.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/46px-Flag_of_the_United_States.svg.png 2x"
  	},
  	{
  	 	name: "Library and Archives Canada",
  		country: "Canada",
  		city: "Ottawa",
  		booksCount: "54 million",
  		visitors: "NA",
  		budget: "116.9 million(C$)",
  		staff: "874",
  		flagUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/23px-Flag_of_Canada_%28Pantone%29.svg.png",
  		flagUrlSet: "//upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/35px-Flag_of_Canada_%28Pantone%29.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/46px-Flag_of_Canada_%28Pantone%29.svg.png 2x"
  	},
  	{
  	 	name: "Shanghai Library",
  		country: "China",
  		city: "Shanghai",
  		booksCount: "50 million",
  		visitors: "NA",
  		budget: "NA",
  		staff: "",
  		flagUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/23px-Flag_of_the_People%27s_Republic_of_China.svg.png",
  		flagUrlSet: "//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/35px-Flag_of_the_People%27s_Republic_of_China.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/45px-Flag_of_the_People%27s_Republic_of_China.svg.png 2x"
  	},
  	{
  	 	name: "Russian State Library",
  		country: "Russia",
  		city: "Moscow",
  		booksCount: "47.2 million",
  		visitors: "0.964 million",
  		budget: "2.4 billion(RUB)",
  		staff: "1618",
  		flagUrl: "//upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/23px-Flag_of_Russia.svg.png",
  		flagUrlSet: "//upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/35px-Flag_of_Russia.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/45px-Flag_of_Russia.svg.png 2x"
  	},
  	{
  	 	name: "National Diet Library",
  		country: "Japan",
  		city: "Kyoto and Tokyo",
  		booksCount: "41.9 million",
  		visitors: "654,000",
  		budget: "21.8 billion(yen)",
  		staff: "908",
  		flagUrl: "//upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/23px-Flag_of_Japan.svg.png",
  		flagUrlSet: "//upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/35px-Flag_of_Japan.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/45px-Flag_of_Japan.svg.png 2x"
  	},
  	{
  	 	name: "Bibliothèque nationale de France",
  		country: "France",
  		city: "Paris",
  		booksCount: "40 million",
  		visitors: "1.3 million",
  		budget: "254 million(€)",
  		staff: "2668",
  		flagUrl: "//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/23px-Flag_of_France.svg.png",
  		flagUrlSet: "//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/35px-Flag_of_France.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/45px-Flag_of_France.svg.png 2x"
  	},
  	{
  	 	name: "National Library of China",
  		country: "China",
  		city: "Beijing",
  		booksCount: "37.7 million",
  		visitors: "5.2 million",
  		budget: "NA",
  		staff: "1365",
  		flagUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/23px-Flag_of_the_People%27s_Republic_of_China.svg.png",
  		flagUrlSet: "//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/35px-Flag_of_the_People%27s_Republic_of_China.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/45px-Flag_of_the_People%27s_Republic_of_China.svg.png 2x"
  	},
  	{
  	 	name: "National Library of Russia",
  		country: "Russia",
  		city: "St. Petersberg",
  		booksCount: "36.5 million",
  		visitors: "1 million",
  		budget: "NA",
  		staff: "2668",
  		flagUrl: "//upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/23px-Flag_of_Russia.svg.png",
  		flagUrlSet: "//upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/35px-Flag_of_Russia.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/45px-Flag_of_Russia.svg.png 2x"
  	},
  	{
  	 	name: "Royal Library",
  		country: "Denmark",
  		city: "Copenhagen",
  		booksCount: "35.4 million",
  		visitors: "1.25 million",
  		budget: "385.9 million(Danish Krone)",
  		staff: "610",
  		flagUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/20px-Flag_of_Denmark.svg.png",
  		flagUrlSet: "//upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/31px-Flag_of_Denmark.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/40px-Flag_of_Denmark.svg.png 2x"
  	},
  	{
  	 	name: "German National Library",
  		country: "Germany",
  		city: "Leipzig and Frankfurt",
  		booksCount: "40 million",
  		visitors: "180,283",
  		budget: "52.4 million(€)",
  		staff: "640",
  		flagUrl: "//upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/23px-Flag_of_Germany.svg.png",
  		flagUrlSet: "//upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/35px-Flag_of_Germany.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/46px-Flag_of_Germany.svg.png 2x"
  	},
  	{
  	 	name: "Biblioteca Nacional de España",
  		country: "Spain",
  		city: "Madrid",
  		booksCount: "33.1 million",
  		visitors: "NA",
  		budget: "29.2 million(€)",
  		staff: "482",
  		flagUrl: "//upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/23px-Flag_of_Spain.svg.png",
  		flagUrlSet: "//upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/35px-Flag_of_Spain.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/45px-Flag_of_Spain.svg.png 2x"
  	},
  	{
  	 	name: "Library of the Russian Academy of Sciences",
  		country: "Russia",
  		city: "St. Petersburg",
  		booksCount: "26.5 million",
  		visitors: "NA",
  		budget: "NA",
  		staff: "",
  		flagUrl: "//upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/23px-Flag_of_Russia.svg.png",
  		flagUrlSet: "//upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/35px-Flag_of_Russia.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/45px-Flag_of_Russia.svg.png 2x"
  	},
  	{
  	 	name: "Berlin State Library",
  		country: "Germany",
  		city: "Berlin",
  		booksCount: "23.4 million",
  		visitors: "1.4 million",
  		budget: "NA",
  		staff: "",
  		flagUrl: "//upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/23px-Flag_of_Germany.svg.png",
  		flagUrlSet: "//upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/35px-Flag_of_Germany.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/46px-Flag_of_Germany.svg.png 2x"
  	},
  	{
  	 	name: "Boston Public Library",
  		country: "United States",
  		city: "Boston, Massachusetts",
  		booksCount: "22.4 million",
  		visitors: "NA",
  		budget: "38.9 million(US$)",
  		staff: "",
  		flagUrl: "//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png",
  		flagUrlSet: "//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/35px-Flag_of_the_United_States.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/46px-Flag_of_the_United_States.svg.png 2x"
  	},
  	{
  	 	name: "New York State Library",
  		country: "United States",
  		city: "Albany, New York",
  		booksCount: "20 million",
  		visitors: "NA",
  		budget: "NA",
  		staff: "",
  		flagUrl: "//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png",
  		flagUrlSet: "//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/35px-Flag_of_the_United_States.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/46px-Flag_of_the_United_States.svg.png 2x"
  	},
  	{
  	 	name: "Harvard Library",
  		country: "United States",
  		city: "Cambridge, Massachusetts",
  		booksCount: "18.9 million",
  		visitors: "NA",
  		budget: "NA",
  		staff: "922",
  		flagUrl: "//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png",
  		flagUrlSet: "//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/35px-Flag_of_the_United_States.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/46px-Flag_of_the_United_States.svg.png 2x"
  	},
  	{
  	 	name: "National Library of Sweden",
  		country: "Sweden",
  		city: "Stockholm",
  		booksCount: "18 million",
  		visitors: "NA",
  		budget: "364.5 million(SEK)",
  		staff: "",
  		flagUrl: "//upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/23px-Flag_of_Sweden.svg.png",
  		flagUrlSet: "//upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/35px-Flag_of_Sweden.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/46px-Flag_of_Sweden.svg.png 2x"
  	},
  	{
  	 	name: "Vernadsky National Library of Ukraine",
  		country: "Ukraine",
  		city: "Kiev",
  		booksCount: "15.5 million",
  		visitors: "500,000",
  		budget: "50.3 million(₴-Ukrainian hryvnia)",
  		staff: "900",
  		flagUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/23px-Flag_of_Ukraine.svg.png",
  		flagUrlSet: "//upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/35px-Flag_of_Ukraine.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/45px-Flag_of_Ukraine.svg.png 2x"
  	},
  	{
  	 	name: "Yale Library",
  		country: "United States",
  		city: "New Haven, Connecticut",
  		booksCount: "15.2 million",
  		visitors: "NA",
  		budget: "NA",
  		staff: "",
  		flagUrl: "//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png",
  		flagUrlSet: "//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/35px-Flag_of_the_United_States.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/46px-Flag_of_the_United_States.svg.png 2x"
  	},
  	{
  	 	name: "National Library of Iran",
  		country: "Iran",
  		city: "Tehran",
  		booksCount: "15 million",
  		visitors: "1.4 million",
  		budget: "NA",
  		staff: "",
  		flagUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/23px-Flag_of_Iran.svg.png",
  		flagUrlSet: "//upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/35px-Flag_of_Iran.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/46px-Flag_of_Iran.svg.png 2x"
  	}
  ]	

  constructor() { }

  ngOnInit(): void {
  }

}
