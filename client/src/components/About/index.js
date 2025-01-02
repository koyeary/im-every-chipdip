import { LazyLoadImage } from "react-lazy-load-image-component";
import { animated, useSpring } from "react-spring";
import "./About.css";

const About = ({ advocateMode }) => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 750 },
  });

  return (
    <div
      className="page"
      style={{
        backgroundColor: "#fff",
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div className="about-wrapper" style={{ overflow: "auto" }}>
        <animated.div style={fadeIn} className="img-wrapper ">
          <LazyLoadImage
            effect="blur"
            alt="Portrait of Kat Yeary"
            className="lg-img"
            height="100%"
            src="/assets/13-Kat_Yeary-6BW.png"
          />
        </animated.div>
        <div className="text-container">
          <div className="about-text">
            <div className="sm-img">
              <img
                src="/assets/sm-Kat_Yeary-6BW.png"
                width="275"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <h1 className="about-header">Nice to meet you.</h1>
            {advocateMode ? (
              <div>
                <p>
                  Hi, I'm Kat. I live in New York City with my wife Lauren and
                  our two cats. I'm a full-stack developer who is passionate
                  about creating beautiful, user-friendly applications that give
                  time back to us and take us outside. I'm currently seeking new
                  opportunities, especially as a developer advocate.
                </p>
                <p>
                  I love to code, and I love to solve problems, and that's what
                  has kept me engaged in my career so far. But I am also a
                  person who is especially skilled at connecting and
                  communicating with others. As a software engineer, discovering
                  and implementing tools wherever they are most effective is
                  fundamental to my work. I understand the issues that hold
                  developers and companies back, and I see that I have the
                  capacity to solve them, so I know that I could make a
                  significant impact as a developer advocate.
                </p>
                <p>
                  I am a natural fit for cross-functional roles. I know the ins
                  and outs of software development, and I have the soft skills
                  to firmly grasp and communicate the needs of engineers,
                  executives, and other internal stakeholders. I am also a
                  minority in tech, not only as a woman but as an LGBT person
                  with a disability. I am a strong advocate for diversity and
                  inclusion, and I believe that my unique perspective will help
                  developers thrive, fostering an effective and innovative
                  company culture.
                </p>
                {/*                   <p>
                    I have strong soft skills and an eye for design, which make
                    me a perfect fit for cross-functional roles that require
                    communication, insight, and collaboration with clients,
                    vendors, engineers, and internal stakeholders. I believe in
                    mutually supportive, self-driven development in an agile
                    environment, and as a leader I seek to create a blame-free
                    culture that embraces problems and responds with curiosity.
                  </p> */}
              </div>
            ) : (
              <>
                <p>
                  Hi, I'm Kat. I'm a frontend-leaning, Fullstack Software
                  Engineer and project manager. I live in New York City with my
                  wife, Lauren, and our two cats.
                </p>
                <p>
                  I have the attention to detail, sense of organization, and the
                  experience with agile practices necessary to bring projects
                  from concept to delivery. I also have the soft skills to
                  firmly grasp and communicate the needs of engineers,
                  executives, and other stakeholders. All of these skills are
                  equally vital to both project management and development
                  roles.
                </p>
                <p>
                  As an engineer, I have extensive experience with
                  JavaScript-based frontend development. I'm also experienced in
                  back-end development and building REST APIs. I enjoy every
                  aspect of full stack development and I'm always trying to
                  learn more.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
