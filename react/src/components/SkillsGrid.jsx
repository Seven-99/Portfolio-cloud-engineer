import React from "react"

import SkillCard from "./SkillCard";

export default function SkillsGrid(){
    const skills = [
        {title: "Compute", tags:["GCE", "Cloud Functions", "Cloud Run"]},
        {title: "Networking", tags:["VPC", "Firewalls", "Load Balancer", "DNS"]},
        {title: "Storage", tags:["Cloud Storage", "Buckets", "SQL"]},
        {title: "Security", tags:["IAM", "Services Account", "KMS"]},
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
            {skills.map((skill) => (
                <SkillCard key={skill.title}{...skill}/>
            ))}
        </div>
    );
}