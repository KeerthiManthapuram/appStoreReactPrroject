// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickingTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const updateTabId = () => {
    onClickingTab(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item">
      <button className={`tab ${activeTabClassName}`} onClick={updateTabId}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
