import React from 'react'
import { useState } from 'react'
import { DateRange } from 'react-date-range'
import Header from '../../Components/Navbar/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import './List.css'
import { format } from 'date-fns';
import SearchItem from '../../Components/SearchItem/SearchItem'
function List() {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [options, setOptions] = useState({
    adults:1,
    children:0,
    room:1,
  })
  return (
    <div>
      <Navbar/>
      <Header type = "list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label htmlFor="">Destination</label>
              <input type="text" />
            </div>
            <div className="listItem">
              <label htmlFor="">Check-in Date</label>
              <span onClick={()=> setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yy")} to 
              ${format(date[0].endDate, "MM/dd/yy")}`}</span>
              {openDate && <DateRange
              onChange={(item) =>setDate([item.selection])} 
              minDate ={new Date()}
              ranges={date}
              />}
            </div>
            <div className="listOptions">
            <div className="listItem">
              <label htmlFor="">Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">Min price <small>per night</small></span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Max price <small>per night</small></span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.adults}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
              </div>
            </div>
          </div>
          <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List