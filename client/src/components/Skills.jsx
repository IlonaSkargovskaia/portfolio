import React from 'react';
import { skills } from '../data';
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
  return (
    <>
    {skills.map(({title, percentage}, index) => {
        return (
            <div className="progress__box" key={index}>
                <div className="progress__bar">
                    <p>{title}</p>
                    <ProgressBar completed={percentage} maxCompleted={100} />
                </div>
            </div>
        )
    })}
    </>
  )
}

export default Skills