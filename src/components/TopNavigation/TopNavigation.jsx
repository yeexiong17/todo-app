import './TopNavigation.css'

const TopNavigation = ({ menuClicked }) => {
    return (
        <nav className="fixed db dt-l bg-navy w-100 border-box pa3 ph4-l">
            <a className="db dtc-l v-mid mid-gray link w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
                <div className='flex items-center pa0'>
                    <i onClick={menuClicked} className="ri-menu-line near-white f2 dim pa0 mr4"></i>
                    <h2 className='logo near-white ma0 f2-l dim pa0'>Todo App</h2>
                </div>
            </a>
            <div className="dn db-l dtc-l v-mid w-100 w-75-l tc tr-l">
                <a className="link near-white dim dark-gray f5-l dib mr3 mr4-l" href="#" title="How it Works">How it Works</a>
            </div>
        </nav>
    )
}

export default TopNavigation
