import { FaStar, FaStarHalf } from "react-icons/fa";
import PropTypes from "prop-types";

export default function Rating({ value }) {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(value);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }

    if (value > fullStars && value <= fullStars + 0.5) {
      stars.push(<FaStarHalf key={fullStars} className="text-yellow-500" />);
    } else {
      stars.push(<FaStar key={fullStars} className="text-yellow-500" />);
    }

    return stars;
  };

  return (
    <div className="flex flex-row items-center justify-between">
      {renderStars()}
    </div>
  );
}

Rating.propTypes = {
  value: PropTypes.number,
};
