import React from "react";

const SkillSet =()=>{
    return(
        <div className="skill-set">
            <Skill skill={"HTML+ CSS"} color="red" />
            <Skill skill={"JS"} color="yellow" />
            <Skill skill={"React JS"} color="blue" />
        </div>
    )

    
}

const Skill= (props)=>{
    return(
        <div className="skill-box" style={{backgroundColor:props.color}}>{props.skill}</div>
    )
}

export default SkillSet;