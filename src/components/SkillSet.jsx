import React from "react";

const SkillSet =()=>{
    const skills= [
        {
            skill:'Web design',
            level:'Advance',
            color:'red'

        },
        {
            skill:'HTML + CSS',
            level:'Advance',
            color:'orange'

        },
        {
            skill:'Git and Git Hub',
            level:'medium',
            color:'gray'
        },
        {
            skill:'Javascript',
            level:'medium',
            color:'yellow'
        },
        {
            skill:'ReactJS',
            level:'Beginner',
            color:'blue'
        }
    ];
    return(
        <div className="skill-set">
            {/* <Skill skill={"HTML+ CSS"} color="red" /> */}
            {
              skills.map((skill,index)=>(
                <Skill key={index} skill={skill.skill} level={skill.level}  color={skill.color} />
              ))  
            }
       
        </div>
    )

    
}

const Skill= ({skill, color, level})=>{
    return(
        <div className="skill-box" style={{backgroundColor:color}}>
            {skill}<span className="sm-text">({level})</span>
            </div>
    )
}

export default SkillSet;