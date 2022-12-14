import React from 'react';
import './FeaturedProperties.css'

export const FeaturedProperties = () => {
  return (
    <div className='fp'>
	<div className="fpItem">
	<img src={require('../images/fp2.jpg')} alt="" className="fpImg" />
	<span className="fpName">Aparthotel Stare Miasto</span>
	<span className="fpCity">Madrid</span>
	<span className="fpPrice"> Starting from Ghc420</span>
	<div className="fpRating">
		<button>8.9</button>
		<span>Excellent</span>
	</div>
	</div>

	<div className="fpItem">
	<img src={require('../images/fp2.jpg')} alt="" className="fpImg" />
	<span className="fpName">Aparthotel Stare Miasto</span>
	<span className="fpCity">Madrid</span>
	<span className="fpPrice"> Starting from Ghc420</span>
	<div className="fpRating">
		<button>8.9</button>
		<span>Excellent</span>
	</div>
	</div>

	<div className="fpItem">
	<img src={require('../images/fp3.jpg')} alt="" className="fpImg" />
	<span className="fpName">Aparthotel Stare Miasto</span>
	<span className="fpCity">Madrid</span>
	<span className="fpPrice"> Starting from Ghc420</span>
	<div className="fpRating">
		<button>8.9</button>
		<span>Excellent</span>
	</div>
	</div>

	<div className="fpItem">
	<img src={require('../images/fp4.jpg')} alt="" className="fpImg" />
	<span className="fpName">Aparthotel Stare Miasto</span>
	<span className="fpCity">Madrid</span>
	<span className="fpPrice"> Starting from Ghc420</span>
	<div className="fpRating">
		<button>8.9</button>
		<span>Excellent</span>
	</div>
	</div>
    </div>
  )
}
