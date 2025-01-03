import FAB from "../../components/Buttons/FAB";

import "./CV.css";

const CV = ({ darkMode }) => {
  return (
    <>
      <div className="page">
        <embed
          src="/assets/Resume2025.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        ></embed>
      </div>
      {/* closing tag is only for testing */}
      {/*         <div className="dark-blue">
          <h1>Curriculum Vitae</h1>
          <div className="cv-wrapper" style={{ justifyContent: "center" }}>
            <div className="grid-container">
              <div className="grid-item1">
                <h1 className="blue">Kat Yeary</h1>
                <p>
                  Fullstack Software Developer with proven expertise as a Lead
                  Frontend Developer. Proficient in a range of technologies, I
                  translate complex requirements into user-friendly solutions. I
                  have strong soft skills and an eye for design, which make me a
                  perfect fit for cross-functional roles that require
                  communication, insight, and collaboration with clients,
                  vendors, engineers, and internal stakeholders. I believe in
                  mutually supportive, self-driven development in an agile
                  environment, and as a leader I seek to create a blame-free
                  culture that embraces problems and responds with curiosity.
                </p>
                <div className="projects">
                  <h3 className="light-blue">EXPERIENCE</h3>
                  <h4 className="serif">
                    ScholarSift - <span>Lead Frontend Developer</span>{" "}
                  </h4>
                  <ul>
                    <li>
                      Spearheaded the development and implementation of user
                      interfaces for ScholarSift’s educational technology
                      platform, enhancing usability and accessibility.
                    </li>

                    <li>
                      Collaborated with cross-functional teams to design and
                      deliver responsive, high-performance web applications.
                    </li>
                    <li>
                      Led UI/UX design discussions and optimized front-end
                      architecture, improving load-times and increasing user
                      engagement.
                    </li>
                  </ul>

                  <div>
                    <h3 className="light-blue">PROJECTS</h3>
                    <h4 className="serif">
                      DataSlate - <span>Project Lead</span>
                    </h4>
                    <ul>
                      <li>
                        Directed the development of an E-Commerce platform and
                        an internal team-management tool for a water delivery
                        service.
                      </li>
                      <li>
                        Implemented user authentication and authorization using
                        Passport.js and JSON Web Tokens.
                      </li>
                      <li>
                        Designed and built a responsive front-end using React,
                        Redux, and SASS.
                      </li>
                    </ul>
                    <h4 className="serif">
                      ItsAnimatedText - <span>Contract</span>
                    </h4>
                    <ul>
                      <li>
                        Developed a comprehensive E-Commerce platform and
                        content-management API as a solo freelancer.
                      </li>
                      <li>
                        Deployed using Heroku and integrated payment gateways
                        for secure transactions.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid-item2">
                <h3 className="light-blue">SKILLS</h3>
                <ul>
                  <li>React, Redux, Hooks</li>
                  <li>SASS</li>
                  <li>Bootstrap</li>
                  <li>Handlebars</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>Sequelize</li>
                  <li>RESTful APIs</li>
                  <li>Git</li>
                  <li>AWS</li>
                  <li>Heroku</li>
                  <li>Agile/Scrum</li>
                  <li>CI/CD</li>
                  <li>Wireframing</li>
                  <li>TDD</li>
                </ul>
                <div style={{ marginTop: 100 }}>
                  <h3 className="light-blue">EDUCATION</h3>
                  <h4 className="serif">
                    UCLA Extension - <span>Fullstack Development</span>
                  </h4>
                  <h4 className="serif">Bennington College</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="/assets/Resume2024.pdf" target="_blank">
        <FAB icon="download" />
      </a> */}
    </>
  );
};

export default CV;
