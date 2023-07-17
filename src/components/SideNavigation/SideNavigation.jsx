import './SideNavigation.css'

const SideNavigation = ({ menuOpen }) => {
    return (
        <div className={`${menuOpen ? "flex-l" : "dn"} flex-column items-center fixed bg-near-white h-100 w5`}>
            <a href='#' className="sidebar-anchor flex items-center link mt6 w-90 pa2 br3 pointer">
                <i className="ri-calendar-line w2 pa0 mr3 f3 purple"></i>
                <p className="black">
                    Today
                </p>
            </a>
            <a href='#' className="sidebar-anchor flex items-center link w-90 pa2 br3 mt3 pointer">
                <i className="ri-calendar-event-line w2 pa0 mr3 f3 green"></i>
                <p className="black">
                    Upcoming
                </p>
            </a>
        </div>
    )
}

export default SideNavigation
