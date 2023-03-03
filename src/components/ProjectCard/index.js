import React from 'react';


function ProjectCard({name, image, description, link, repoLink}){
    return <>
    <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={image} className="img-fluid rounded-start" alt={name}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <div className="card-body">
    <a href={link} className="card-link">See my app</a>
    <a href={repoLink} className="card-link">See my repo</a>
  </div>
      </div>
    </div>
  </div>
</div>

    </>
}


export default ProjectCard;