import React from 'react'
import "./Home.css"
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Navbar/Header/Header';
import Practice from '../../Practice';
import { Featured } from '../../Components/Featured/Featured';
import { PropertyList } from '../../Components/Property/PropertyList';
import { FeaturedProperties } from '../../Components/FeaturedProperty/FeaturedProperties';
import { MailList } from '../../Components/MailList/MailList';
import { Footer } from '../../Components/Footer/Footer';



function Home() {
  return(
	<div>
	<Navbar/>
	<Header/>
	<div className="homeContainer">
		<Featured/>
		<h1 className='homeTitle'>Browse by property type</h1>
		<PropertyList/>
		<h1 className='homeTitle'>Home guests love</h1>
		<FeaturedProperties/>
		<MailList/>
		<Footer/>
	</div>
	</div>
	
  )
}

export default Home