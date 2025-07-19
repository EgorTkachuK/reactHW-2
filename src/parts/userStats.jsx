


export const UserStats = ({userStats}) => {
  return (
    <section className="statistics">
      <ul className="stat-list">
        {userStats.map((stat) => (
          <li className="stat-item" key={stat.id}>
            <span className="stat-label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
