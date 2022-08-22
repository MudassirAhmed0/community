import css from './ProgressBarCircle.module.scss';

const ProgressBarCircle = ({ progress }: { progress: number}) => {

  const radius = 24;
  const stroke = 2;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - progress / 100 * circumference;

  const activeColor = () => {
    switch (true) {
      case progress > 88:
        return '#479B47';
      case progress > 70:
        return '#3691FA';
      case progress > 55:
        return '#F28A4F';
      default:
        return '#D94134';
    }
  };

  return (
    <div className={css.circular}>
      <div className={css.inner} />
      <div className={css.progress} style={{ color: activeColor()}}>{progress}</div>
      <div className={css.circle}>
        <svg
          height={radius * 2}
          width={radius * 2}
          style={{ transform: 'rotate(-90deg)' }}
          >
            <circle
              stroke={activeColor()}
              fill='transparent'
              strokeWidth={ stroke }
              strokeDasharray={ circumference + ' ' + circumference }
              style={{ strokeDashoffset }}
              stroke-width={ stroke }
              r={ normalizedRadius }
              cx={ radius }
              cy={ radius }
            />
        </svg>
      </div>
    </div>
  );
};

export default ProgressBarCircle;
