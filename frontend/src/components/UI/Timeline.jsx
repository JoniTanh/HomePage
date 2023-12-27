import styles from "../../assets/timeline.module.css";

const timelineData = [
  {
    text: "Software Developer",
    date: "01/2023 -",
    category: {
      tag: "Work",
      color: "#00308F",
    },
    link: {
      text: "VR Group",
    },
  },
  {
    text: "Information and Communication Technology, Engineer",
    date: "2023",
    category: {
      tag: "EDUCATION",
      color: "#018f69",
    },
    link: {
      text: "Häme University of Applied Sciences",
    },
  },
  {
    text: "Software Developer, Part-Time Trainee",
    date: "04/2022 - 10/2022",
    category: {
      tag: "Work",
      color: "#00308F",
    },
    link: {
      text: "VR Group",
    },
  },
  {
    text: "Consult, Part-time Trainee",
    date: "02/2020 - 09/2020",
    category: {
      tag: "Work",
      color: "#00308F",
    },
    link: {
      text: "Cubescom Oy",
    },
  },
  {
    text: "Forest Engineer",
    date: "2018",
    category: {
      tag: "Education",
      color: "#018f69",
    },
    link: {
      text: "Tampere University of Applied Sciences",
    },
  },
];

const TimelineItem = ({ data }) => (
  <div className={styles.timelineItem}>
    <div className={styles.timelineItemContent}>
      <span className={styles.tag} style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      <span className={styles.circle} />
    </div>
  </div>
);

const Timeline = () =>
  timelineData.length > 0 && (
    <div className={styles.timelineContainer}>
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );

export default Timeline;
