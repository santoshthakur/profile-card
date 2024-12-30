import React from "react";
import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillSet from "./SkillSet";

export const ProfileCard =()=>{
    return(
        <div className="card mx-auto">
            <Avatar/>
            <div className="data">
                <Intro />
                <SkillSet />
            </div>
        </div>
    )
}