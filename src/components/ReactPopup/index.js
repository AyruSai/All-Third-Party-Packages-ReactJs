import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}

const ReactPopUp = () => (
  <ul className="popup-container">
    <li className="list-container">
      <div className="list-details-container">
        Trigger Prop
        <Popup
          trigger={
            <button className="trigger-button" type="button">
              Trigger
            </button>
          }
        >
          <div>
            <p>React is a popular and widely used programming language</p>
          </div>
        </Popup>
      </div>
    </li>
    <li className="list-container">
      <div className="list-details-container">
        Modal Prop
        <Popup
          modal
          trigger={
            <button type="button" className="trigger-button">
              Trigger
            </button>
          }
        >
          <p>React is a popular and widely used programming language</p>
        </Popup>
      </div>
    </li>
    <li className="list-container">
      <div className="list-details-container">
        Modal Prop with close button
        <Popup
          modal
          trigger={
            <button type="button" className="trigger-button">
              Trigger
            </button>
          }
        >
          {close => (
            <>
              <div>
                <p>React is a popular and widely used programming language</p>
              </div>
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                Close
              </button>
            </>
          )}
        </Popup>
      </div>
    </li>
    <li className="list-container">
      <div className="list-details-container">
        Position Prop
        <Popup
          trigger={
            <button type="button" className="trigger-button">
              Trigger
            </button>
          }
          position="bottom left"
        >
          <p>React is a popular and widely used programming language</p>
        </Popup>
      </div>
    </li>
    <li className="list-container">
      <div className="list-details-container">
        overlayStyle Prop
        <Popup
          modal
          trigger={
            <button type="button" className="trigger-button">
              Trigger
            </button>
          }
          overlayStyle={overlayStyles}
        >
          <p>React is a popular and widely used programming language</p>
        </Popup>
      </div>
    </li>
  </ul>
)

export default ReactPopUp
