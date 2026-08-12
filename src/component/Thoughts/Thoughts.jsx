import React from "react";
import "./Thoughts.css";

const Tcards = (props) => {
  return (
    <>
      <div className="Tcard-main">
        <img className="tCard-img" src={props.tCardImg} />
        <div className="card-content">
          <h1>{props.heading}</h1>
          <p>{props.text}</p>
          <button>Read more &rarr;</button>
        </div>
      </div>
    </>
  );
};

const Thoughts = () => {
  return (
    <div className="thoughts-main">
      <div>
        <p className="thoughts-p">THOUGHTS</p>
      </div>
      <div className="from-the-blog">
        <h2 className="blog-text">From the blog</h2>
        <button>All articals &rarr;</button>
      </div>
      <div className="CardStyle">
        <Tcards
          tCardImg="https://media.gettyimages.com/id/2160139714/photo/young-woman-planning-a-sustainable-travel-with-laptop.jpg?s=612x612&w=0&k=20&c=HowGxHCgwHTzqbgBFixUKL9IYmTqPeVwD8DVyrq8n6I="
          heading="Why I ditched heavy CSS frameworks for Tailwind"
          text="After years of fighting specificity wars, here's what finally convinced me to make the switch."
        />
        <Tcards
          tCardImg="https://media.gettyimages.com/id/1944772735/photo/closeup-of-team-of-industrial-engineers-meeting-analyze-machinery-blueprints-consult-project.jpg?s=612x612&w=0&k=20&c=ztBo9tQdQHN7ibdtIeO1MqFcq_F4NguT6Qe_Cwjck1s="
          heading="Building a design system from scratch in a weekend"
          text="Tokens, components, docs — the process I follow to spin up a coherent system in 48 hours."
        />
        <Tcards
          tCardImg="https://media.gettyimages.com/id/1901478139/photo/woman-working-on-laptop-at-home-the-concept-of-programming-and-coding.jpg?s=612x612&w=0&k=20&c=DqNpSbwMOayrzMVsZzp1RJHLU9IyIaBvBeCpaiOXWpo="
          heading="5 lessons from my first year of full-time freelancing"
          text="Contracts, pricing, scope creep — the things nobody tells you before you go solo."
        />
      </div>
    </div>
  );
};

export default Thoughts;