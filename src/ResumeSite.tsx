// ResumeSite.tsx
import React from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './ResumeSite.module.css';

interface UserData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  objective: string;
  education: {
    degree: string;
    school: string;
    period: string;
  }[];
  internships: {
    role: string;
    company: string;
    period: string;
    bullets: string[];
  }[];
  certifications: string[];
  projects: {
    name: string;
    desc: string;
    link: string;
  }[];
  skills: string[];
}

const user: UserData = {
  name: "SHIWANSH TRIPATHI",
  title: "Aspiring Cloud & Security Engineer",
  location: "Greater Noida, India",
  email: "shiwanshtripathi22@gmail.com",
  phone: "+91 7905303743",
  github: "https://github.com/shiwansh22",
  linkedin: "https://www.linkedin.com/in/shiwansh-tripathi-612887256/",
  objective:
    "4th year student of B.TECH in Computer Science, focused on cloud infrastructure and cloud security engineering. Hands-on experience with Linux, cloud platforms (AWS & GCP), and cybersecurity tools. Interested in roles that combine cloud reliability, automation, and security.",
  education: [
    {
      degree: "B.Tech in Computer Science",
      school: "Noida Institute of Engineering and Technology",
      period: "2022 – 2026",
    },
  ],
  internships: [
    {
      role: "Cybersecurity Intern",
      company: "InfosecTrain",
      period: "Jul–Aug 2024, Nov 2024–Apr 2025",
      bullets: [
        "Performed vulnerability scanning and basic security assessments using Nmap and Wireshark.",
      ],
    },
  ],
  certifications: [
    "Cyber Job Simulation (Deloitte)",
    "Java Programming Fundamentals (Infosys)",
    "Google Cloud Core & Essential Infrastructure (Coursera)",
    "Python Fundamentals (Infosys)",
  ],
  projects: [
    {
      name: "ToGather",
      desc: "Real-time collaborative coding platform with encryption.",
      link: "https://github.com/shiwansh22/toGather",
    },
    {
      name: "Aquatic Animal Detection",
      desc: "Built with YOLOv8 and Python for object detection tasks.",
      link: "https://github.com/shiwansh22/aquatic-animal-detection",
    },
  ],
  skills: [
    "Python",
    "Java",
    "TypeScript",
    "HTML & CSS",
    "Linux (CLI)",
    "Kali Linux, Nmap, Wireshark",
    "MySQL",
    "AWS & Google Cloud",
    "Git",
    "Docker"
  ],
};

const ResumeSite: React.FC = () => {
  return (
    <div className={styles.resumeContainer}>
      <div className={styles.resumeWrapper}>
        <div className={styles.gridContainer}>
          {/* Left column - profile */}
          <div className={styles.leftColumn}>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className={styles.profileSection}
            >
              <h1 className={styles.name}>{user.name}</h1>
              <p className={styles.title}>{user.title}</p>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <MapPin size={16} />
                  <span>{user.location}</span>
                </div>
                <div className={styles.contactItem}>
                  <Mail size={16} />
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </div>
                <div className={styles.contactItem}>
                  <Phone size={16} />
                  <a href={`tel:${user.phone}`}>{user.phone}</a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.label}>GitHub:</span>
                  <a href={user.github} target="_blank" rel="noreferrer">
                    {user.github.replace(/^https?:\/\//, "")}
                  </a>
                </div>
              </div>
              <div className={styles.buttonGroup}>
                <a
                  href="/SHIWANSH_TRIPATHI_RESUME_22.pdf"
                  className={`${styles.button} ${styles.primaryButton}`}
                >
                  <Download size={16} />
                  <span>Download Resume</span>
                </a>
                {/* <a
                  href={user.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.button} ${styles.secondaryButton}`}
                >
                  LinkedIn
                </a> */}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className={styles.section}
            >
              <h3 className={styles.sectionHeading}>Objective</h3>
              <p className={styles.sectionContent}>{user.objective}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className={styles.section}
            >
              <h3 className={styles.sectionHeading}>Skills</h3>
              <div className={styles.skillList}>
                {user.skills.map((s) => (
                  <span key={s} className={styles.skillBadge}>
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className={styles.section}
            >
              <h3 className={styles.sectionHeading}>Certifications</h3>
              <ul className={styles.list}>
                {user.certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </motion.div>
          </div>
          {/* Right column */}
          <div className={styles.rightColumn}>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              <section className={styles.mainSection}>
                <h2 className={styles.mainHeading}>Experience</h2>
                <div className={styles.itemContainer}>
                  {user.internships.map((job) => (
                    <div key={job.company} className={styles.card}>
                      <div className={styles.cardHeader}>
                        <div>
                          <h3 className={styles.cardTitle}>{job.role} — {job.company}</h3>
                          <p className={styles.cardSubtitle}>{job.period}</p>
                        </div>
                      </div>
                      <ul className={styles.cardList}>
                        {job.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
              <section className={styles.mainSection}>
                <h2 className={styles.mainHeading}>Projects</h2>
                <div className={styles.projectsGrid}>
                  {user.projects.map((p) => (
                    <div key={p.name} className={styles.card}>
                      <h3 className={styles.cardTitle}>{p.name}</h3>
                      <p className={styles.cardContent}>{p.desc}</p>
                      <a className={styles.projectLink} href={p.link} target="_blank" rel="noreferrer">
                        View on GitHub
                      </a>
                    </div>
                  ))}
                </div>
              </section>
              <section className={styles.mainSection}>
                <h2 className={styles.mainHeading}>Education</h2>
                <div className={styles.itemContainer}>
                  {user.education.map((edu) => (
                    <div key={edu.school} className={styles.card}>
                      <h3 className={styles.cardTitle}>{edu.degree}</h3>
                      <p className={styles.cardSubtitle}>{edu.school} · {edu.period}</p>
                    </div>
                  ))}
                </div>
              </section>
              <section className={styles.mainSection}>
                <h2 className={styles.mainHeading}>Contact & Quick Links</h2>
                <div className={styles.linksContainer}>
                  <a className={styles.linkButton} href={`mailto:${user.email}`}>Email</a>
                  <a className={styles.linkButton} href={user.github} target="_blank" rel="noreferrer">GitHub</a>
                  <a className={styles.linkButton} href={user.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
              </section>
            </motion.div>
          </div>
        </div>
        <div className={styles.footer}>
          <span>Made with ♥ — Resume website....</span>
        </div>
      </div>
    </div>
  );
};

export default ResumeSite;