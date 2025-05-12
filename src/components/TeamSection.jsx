
import "../styles/TeamSection.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function TeamSection() {
  const teamMembers = [
    {
      photo: "images/teamMember.jpg",
      name: "Freddy Smith",
      position: "CEO and Founder",
      socialLink: (
        <>
          <FaGithub /> <FaLinkedinIn />
        </>
      ),
    },
    {
      name: "Carl Jones",
      position: "CTO and Co-Founder",
      socialLink: (
        <>
          <FaGithub /> <FaLinkedinIn />
        </>
      ),
    },
    {
      photo: "images/teamMember.jpg",
      name: "Susan Peterson",
      position: "Marketing Director",
      socialLink: (
        <>
          <FaGithub /> <FaLinkedinIn />
        </>
      ),
    },
    {
      name: "Tommy Barnes",
      position: "Designer",
      socialLink: (
        <>
          <FaGithub /> <FaLinkedinIn />
        </>
      ),
    },
    {
      photo: "images/teamMember.jpg",
      name: "Ron Jenson",
      position: "Senior Developer",
      socialLink: (
        <>
          <FaGithub /> <FaLinkedinIn />
        </>
      ),
    },
    {
      photo: "images/teamMember.jpg",
      name: "Pete Tompkins",
      position: "Web Developer",
      socialLink: (
        <>
          <FaGithub /> <FaLinkedinIn />
        </>
      ),
    },
    {
      name: "Kelly Richards",
      position: "Sales Manager",
      socialLink: (
        <>
          <FaGithub /> <FaLinkedinIn />
        </>
      ),
    },
    {
      photo: "images/teamMember.jpg",
      name: "Alexis Jordan",
      position: "Affiliate Manager",
      socialLink: (
        <>
          <FaGithub /> <FaLinkedinIn />
        </>
      ),
    },
  ];

  return (
    <section className="team-section">
      <div className="team-header">
        <h2>OUR TEAM</h2>
        <p className="team-subtitle">
          An incredible team of amazing individuals
        </p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="member-photo">
              <div className="photo-placeholder">
                {member?.photo ? <img src={member?.photo} /> :
                  member.name
                    .split(" ")
                    .map((name) => name[0])
                    .join("")}
              </div>
            </div>
            <h3>{member.name}</h3>
            <p className="position">{member.position}</p>
            <p className="social-link">{member.socialLink}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
