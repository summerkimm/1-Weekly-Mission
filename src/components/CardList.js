import './CardList.css';
import noImg from '../assets/noImg.svg';

function formatDate(value) {
	const date = new Date(value);
	return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function getTimeDifference(value) {
  const now = new Date();
  const createdDate = new Date(value);
  const timeDifference = now - createdDate;
  const secondDifference = Math.floor(timeDifference / 1000);

  const minuteDifference = Math.floor(secondDifference / 60);
    if (minuteDifference < 60) {
      return `${minuteDifference} minutes ago`;
    }

  const hourDifference = Math.floor(minuteDifference / 60);
  if (hourDifference < 24) {
    return `${hourDifference} hours ago`;
  }

  const dayDifference = Math.floor(hourDifference / 24);
  if (dayDifference < 30) {
    return `${dayDifference} days ago`;
  }

  const monthDifference = Math.floor(dayDifference / 30);
  if (monthDifference < 12) {
    return `${monthDifference} months ago`;
  }

  const yearDifference = Math.floor(monthDifference / 12);
  return `${yearDifference} years ago`;
  }

function Card({ item }) {
  return (
    <>
      <div className="card-img-container">
        {(item.imageSource) ? <img className="card-img" src={item.imageSource} alt="카드 이미지" /> 
        : <img className="card-img" src={noImg} alt="이미지 없음 "/>}
      </div>
      <div className="card-text-container">
        <p className="card-createdAt">{getTimeDifference(item.createdAt)}</p>
        <p className="card-description">{item.description}</p>
        <p className="card-date">{formatDate(item.createdAt)}</p>
      </div>
    </>
  );
}

function CardList({ folderData }) {
  return (
    <ul className="cardList-container">
      {folderData.map((item) => {
        return <li key={item.id} className="card-style">
          <Card item={item} />
        </li>
      })}
    </ul>
  );
}

export default CardList;