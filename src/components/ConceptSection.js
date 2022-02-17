import React, {useState} from "react"
import '../styles/main.scss'

const ConceptSection = (props) => {
  const [show, setShow] = useState(false);
  
  const handleButton = e =>{
    e.preventDefault();
    setShow(!show);
  }

  return (
      <section className="concept">
          <div className="concept__headline"><h1>{props.headline}</h1></div>
          <div className="concept__content">
            <div className="concept__img-div">{props.img}</div>
            <div className="concept__text-div">{props.children}</div>
          </div>
          {props.details && 
          <>
            <div className="concept__more-div"><button onClick={e => handleButton(e)}>Szczegóły...</button></div>
            <div className={show ? 'concept__details concept__details__show' : 'concept__details concept__details__hide'}>
              {props.details}
            </div>
          </>}
      </section>
  )
}

export default ConceptSection
