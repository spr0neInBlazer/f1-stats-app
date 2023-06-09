import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function RaceResultsTable({ results, schedule, getFormattedMonth }) {
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="single-stage-container">
      <article className="results-tab">
        {schedule.Races && schedule.Races.length > 0 && 
          <div className="results-date">
            {schedule.Races[0].date.substring(8,)}
            <div>{getFormattedMonth(schedule.Races[0].date)}</div>  
          </div>
        }
        <div className="stage-name">
          Race
        </div>
        {results.Races && results.Races.length > 0 &&
        <button className="results-btn" 
          onClick={() => setShowResults(!showResults)}>
          Results
          <FaChevronDown className={`chevron-icon ${showResults ? 'chevron-icon--rotate' : ''}`} />
        </button>
        }
      </article>
      {results.Races && results.Races.length > 0 &&
        <table className={`results-table ${showResults ? 'show' : 'hide'}`} >
          <thead>
            <tr>
              <th>pos</th>
              <th className="collapse-column">no</th>
              <th>driver</th>
              <th className="collapse-column">team</th>
              <th>laps</th>
              <th>time</th>
              <th>pts</th>
            </tr>
          </thead>
          <tbody>
            {results.Races[0].Results.map(rr => {
              return <tr key={rr.Driver.driverId}>
                <td>{rr.position}</td>
                <td className="collapse-column">{rr.number}</td>
                <td>{rr.Driver.givenName} {rr.Driver.familyName}</td>
                <td className="collapse-column">{rr.Constructor.name}</td>
                <td>{rr.laps}</td>
                <td>{rr.Time ? rr.Time.time : 'DNF'}</td>
                <td>{rr.points}</td>
              </tr>
            })}
          </tbody>
        </table>
      }
    </div>
  )
}