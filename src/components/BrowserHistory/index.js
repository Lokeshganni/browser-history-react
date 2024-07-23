import './index.css'

const BrowserHistory = ({obj, onDelete}) => {
  const {timeAccessed, logoUrl, title, domainUrl, id} = obj

  return (
    <li>
      <div>
        <p className="time-accessed-para">{timeAccessed}</p>
      </div>
      <div className="domain-logo-title-btn-container">
        <div className="logo-title-container">
          <img className="domain-logo" src={logoUrl} alt="domain logo" />
          <div className="title-url-container">
            <p className="title-para">{title}</p>
            <p className="domain-url-para">{domainUrl}</p>
          </div>
        </div>
        <button type="button" data-testid="delete" onClick={() => onDelete(id)}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
