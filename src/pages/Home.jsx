import React from 'react'
import './Home.css'

document.addEventListener('scroll', () => {
  const arrows = document.querySelector('.img-arrows');
  const orie_header = document.querySelector('.orie-header');
  const cs_header = document.querySelector('.cs-header');

  if (window.scrollY > 150) {
    arrows.classList.add('hide');
  } else {
    arrows.classList.remove('hide');
  }

  if (window.scrollY > 450) {
    orie_header.classList.remove('hide');
    cs_header.classList.remove('hide');
  } else {
    orie_header.classList.add('hide');
    cs_header.classList.add('hide');
  }
});

function home() {
  return (
    <div className="container">
      <head>
        <link href='https://fonts.googleapis.com/css?family=Space+Grotesk' rel='stylesheet'></link>
      </head>
      <div className="container-home">
        <img src={"Headshot.jpeg"} className="img-headshot" width={225} />
        <p className="bio">
          <span className="enlarged-bio">
            Hi I'm Corban,
          </span>
          &nbsp;a Cornell graduate with degrees in
          Operations Research and Computer Science. I have had the unique
          opportunity to approach many of the same problems from multiple
          angles, and I hope to be able to utilize this interdisciplinary style
          of thinking for bigger and harder problems.
        </p>
      </div>
      <div className="container-timeline">
        <div className="line">
          <small className="tl-header">PRESENT</small>
          <img src={"TripleArrowheads.png"} className="img-arrows" width={50} />
          <a href="#" className="tl-footer">TO TOP</a>
          <small className="orie-header">Operations Research</small>
          <small className="cs-header">Computer Science</small>
        </div>
        <div className="orie">
          <div className="loan-assessment">
            <div className="orie-date">
              <small>April 2023</small>
            </div>
            <div className="project">
              <p className="desc">
                This project uses a dataset of approved loan applications to
                predict the offered interest rate based on factors such as
                employment history and credit history. We are currently building a
                regression model in Python and experimenting with different parameters.
              </p>
              <div>
                <img src={"Loan.png"} className="img-project" width={300} />
              </div>
              <div className="project-title">
                Predicting Loan Interest Rates
              </div>
              <ul className="one-button">
                <li className="button">
                  In Progress
                </li>
              </ul>
            </div>
          </div>
          <div className="ohca">
            <div className="orie-date">
              <small>Nov 2022</small>
            </div>
            <div className="project">
              <p className="desc">
                This project used a dataset of Out of Hospital Cardiac Arrests (OHCAs)
                to test different alert policies for a service which
                notifies off-duty responders. We simulated OHCAs and their emergency
                responses in Python to find the most successful alert policies.
              </p>
              <div>
                <img src={"OHCA.jpeg"} className="img-project" width={300} />
              </div>
              <div className="project-title">
                Modeling Out of Hospital Cardiac Arrest
              </div>
              <ul className="two-button">
                <li>
                  <a href="https://drive.google.com/file/d/1O5BFAfxIcl01unrHvVC-07R0KQJ9VWtj/view?usp=share_link" target="_blank" className="button">Report</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1dKx2hVmZQ4ULteMysdqaFCrrg_VKd-IF/view?usp=share_link" target="_blank" className="button">Code</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mitre">
            <div className="orieexp-date">
              <small>May 2022</small>
            </div>
            <div className="experience">
              <p className="desc">
                I helped develop the requirements for establishing a Digital
                Engineering Lab for the Department of Homeland Security.<br />I also
                built an Excel tool which enabled task leads to quantify and
                visualize project progress to sponsor leadership.
              </p>
              <div>
                <img src={"MITRE.png"} className="img-project" width={300} />
              </div>
              <div className="experience-title">
                Sys Engineer @ MITRE
              </div>
            </div>
          </div>
          <div className="covidhospitalizations">
            <div className="orie-date">
              <small>May 2021</small>
            </div>
            <div className="project">
              <p className="desc">
                This project used a dataset of COVID-19 hospitalizations in Europe
                to predict the number of expected hospitalizations in the next week.
                We built and compared regression models, decision trees and neural
                networks in Python, using techniques such as cross validation
                to find a model with the least error.
              </p>
              <div>
                <img src={"Hospitalizations.png"} className="img-project" width={300} />
              </div>
              <div className="project-title">
                Predicting COVID-19 Hospitalizations
              </div>
              <ul className="two-button">
                <li>
                  <a href="https://drive.google.com/file/d/1g1sm0KebiYYjsb279vgmJH-TBUrcCWc3/view?usp=share_link" target="_blank" className="button">Report</a>
                </li>
                <li>
                  <a href="https://github.com/CorbanChiu/COVID-19-Hospitalizations" target="_blank" className="button">GitHub</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cs">
          <div className="milestone">
            <div className="cs-date">
              <small>Feb 2023</small>
            </div>
            <div className="project">
              <p className="desc">
                This project involves building an AI to play a chess-like game
                called Milestone, invented by Cornell Math PHD student Mark Schachner.
                We are currently developing a genetic algorithm in Rust to find
                the best weights for a number of pre-selected heuristics and plan
                to use the resulting game data to also build a neural network AI.
              </p>
              <div>
                <img src={"Milestone.png"} className="img-project" width={300} />
              </div>
              <div className="project-title">
                Milestone AI
              </div>
              <ul className="one-button">
                <li className="button">
                  In Progress
                </li>
              </ul>
            </div>
          </div>
          <div className="juni">
            <div className="csexp-date">
              <small>Mar 2022</small>
            </div>
            <div className="experience">
              <p className="desc">
                I taught high schoolers and middle schoolers classes on data
                structures and algorithms in Java and Python. These also included
                introductions to more advanced concepts such as recursion, sorting
                and graph searching.
              </p>
              <div>
                <img src={"Juni.png"} className="img-project" width={300} />
              </div>
              <div className="experience-title">
                Computer Science Tutor @ Juni Learning
              </div>
            </div>
          </div>
          <div className="nlb">
            <div className="cs-date">
              <small>Sept 2021</small>
            </div>
            <div className="project">
              <p className="desc">
                This project involves building an image recognition algorithm
                to detect Northern Leaf Blight in pictures of maize plants. We are
                currently adapting a MaskRCNN model to AWS to utilize cloud
                computing for faster model training.
              </p>
              <div>
                <img src={"NLB.JPG"} className="img-project" width={300} />
              </div>
              <div className="project-title">
                Northern Leaf Blight Image Recognition Algorithm
              </div>
              <ul className="one-button">
                <li className="button">
                  In Progress
                </li>
              </ul>
            </div>
          </div>
          <div className="monopoly">
            <div className="cs-date">
              <small>Mar 2021</small>
            </div>
            <div className="project">
              <p className="desc">
                This project involved building the game of Monopoly. We developed
                a multiplayable game with an interactive GUI in OCaml which had all
                the functionalities of the game such as purchasing properties,
                moving around the board, and paying rent.
              </p>
              <div>
                <img src={"Monopoly.png"} className="img-project" width={300} />
              </div>
              <div className="project-title">
                Monopoly
              </div>
              <ul className="one-button">
                <li>
                  <a href="https://github.com/CorbanChiu/Monopoly" target="_blank" className="button">GitHub</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default home